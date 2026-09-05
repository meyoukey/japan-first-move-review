(function initializeAnalyticsConsent() {
  const measurementId = "G-8BQHR1GHK3";
  const consentStorageKey = "jfmAnalyticsConsent";
  const attributionStorageKey = "jfmAnalyticsAttribution";
  const checkoutReturnSessionStorageKey = "jfmCheckoutReturnSessionId";
  const purchaseTrackedStoragePrefix = "jfmCustomFoodCardPurchaseTracked:";
  const grantedValue = "granted";
  const deniedValue = "denied";
  const attributionParameterNames = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
  let analyticsLoaded = false;
  let currentConsent = null;
  let pendingAttribution = {};
  let lastTrackedPageLocation = "";
  let attributionAppliedToPageView = false;

  window.dataLayer = window.dataLayer || [];
  function queueGoogleTag() {
    window.dataLayer.push(arguments);
  }

  function validAttributionValue(value) {
    return typeof value === "string"
      && value.length > 0
      && value.length <= 80
      && /^[a-zA-Z0-9._~-]+$/.test(value);
  }

  function attributionFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const attribution = {};
    attributionParameterNames.forEach((name) => {
      const value = (params.get(name) || "").trim();
      if (validAttributionValue(value)) {
        attribution[name] = value.toLowerCase();
      }
    });
    return attribution;
  }

  function storedAttribution() {
    try {
      const rawAttribution = window.sessionStorage.getItem(attributionStorageKey);
      if (!rawAttribution) {
        return {};
      }
      const attribution = JSON.parse(rawAttribution);
      if (!attribution || typeof attribution !== "object" || Array.isArray(attribution)) {
        return {};
      }
      return Object.fromEntries(
        attributionParameterNames
          .filter((name) => validAttributionValue(attribution[name]))
          .map((name) => [name, attribution[name].toLowerCase()]),
      );
    } catch {
      return {};
    }
  }

  function persistAttribution() {
    if (currentConsent !== grantedValue || !Object.keys(pendingAttribution).length) {
      return;
    }
    try {
      window.sessionStorage.setItem(attributionStorageKey, JSON.stringify(pendingAttribution));
    } catch {
      // Attribution remains available in memory for the current page.
    }
  }

  function captureAttribution() {
    const urlAttribution = attributionFromUrl();
    if (Object.keys(urlAttribution).length) {
      if (JSON.stringify(urlAttribution) !== JSON.stringify(pendingAttribution)) {
        attributionAppliedToPageView = false;
      }
      pendingAttribution = urlAttribution;
    } else if (!Object.keys(pendingAttribution).length && currentConsent === grantedValue) {
      pendingAttribution = storedAttribution();
    }
    persistAttribution();
    return { ...pendingAttribution };
  }

  function protectCheckoutSessionId() {
    const url = new URL(window.location.href);
    if (url.pathname.replace(/\/+$/, "") !== "/food-card/custom/success") {
      return;
    }

    const sessionId = url.searchParams.get("session_id") || "";
    if (!/^cs_[a-zA-Z0-9_]{8,240}$/.test(sessionId)) {
      return;
    }

    try {
      window.sessionStorage.setItem(checkoutReturnSessionStorageKey, sessionId);
    } catch {
      return;
    }

    url.searchParams.delete("session_id");
    const cleanPath = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState(window.history.state, "", cleanPath);
  }

  protectCheckoutSessionId();

  // Keep local and preview visits out of the production analytics property.
  // Checkout return handling above must still work in those environments.
  const analyticsHosts = new Set(["japanfirstmove.com", "www.japanfirstmove.com"]);
  if (!analyticsHosts.has(window.location.hostname)) {
    return;
  }

  queueGoogleTag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  function storedConsent() {
    try {
      return window.localStorage.getItem(consentStorageKey);
    } catch {
      return null;
    }
  }

  function saveConsent(value) {
    try {
      window.localStorage.setItem(consentStorageKey, value);
    } catch {
      // The current page still respects the choice if storage is unavailable.
    }
  }

  function loadAnalytics() {
    if (analyticsLoaded) {
      return;
    }
    analyticsLoaded = true;
    window.gtag = queueGoogleTag;
    queueGoogleTag("consent", "update", {
      analytics_storage: "granted",
    });
    queueGoogleTag("js", new Date());
    queueGoogleTag("config", measurementId, {
      send_page_view: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    window.dispatchEvent(new CustomEvent("jfm:analytics-ready"));
  }

  function clearAnalyticsData() {
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      if (name === "_ga" || name.startsWith("_ga_")) {
        document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}; SameSite=Lax`;
      }
    });
    try {
      window.sessionStorage.removeItem(attributionStorageKey);
      Object.keys(window.localStorage)
        .filter((key) => key.startsWith(purchaseTrackedStoragePrefix))
        .forEach((key) => window.localStorage.removeItem(key));
    } catch {
      // The current page still respects the denied choice if storage is unavailable.
    }
    pendingAttribution = {};
    lastTrackedPageLocation = "";
    attributionAppliedToPageView = false;
  }

  function removeConsentBanner() {
    document.querySelector("[data-analytics-consent-banner]")?.remove();
  }

  function applyConsent(value) {
    saveConsent(value);
    currentConsent = value;
    removeConsentBanner();

    if (value === grantedValue) {
      captureAttribution();
      loadAnalytics();
      return;
    }

    queueGoogleTag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    clearAnalyticsData();
    if (analyticsLoaded) {
      window.location.reload();
    }
  }

  function showConsentBanner() {
    if (document.querySelector("[data-analytics-consent-banner]")) {
      return;
    }

    const banner = document.createElement("section");
    banner.className = "analytics-consent-banner";
    banner.dataset.analyticsConsentBanner = "";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-labelledby", "analytics-consent-title");
    banner.setAttribute("aria-describedby", "analytics-consent-description");
    banner.innerHTML = `
      <div class="analytics-consent-inner">
        <div class="analytics-consent-copy">
          <h2 id="analytics-consent-title">Help us improve Japan First Move</h2>
          <p id="analytics-consent-description">We use optional analytics cookies to understand how the site is used. You can allow or decline them. <a href="/privacy">Privacy Policy</a></p>
        </div>
        <div class="analytics-consent-actions">
          <button class="button secondary" type="button" data-analytics-consent-deny>Decline</button>
          <button class="button primary" type="button" data-analytics-consent-accept>Accept cookies</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    banner.querySelector("[data-analytics-consent-deny]")?.addEventListener("click", () => {
      applyConsent(deniedValue);
    });
    banner.querySelector("[data-analytics-consent-accept]")?.addEventListener("click", () => {
      applyConsent(grantedValue);
    });
  }

  function addConsentSettingsLink() {
    const legalNavigation = document.querySelector(".site-footer-legal");
    if (!legalNavigation || legalNavigation.querySelector("[data-analytics-consent-settings]")) {
      return;
    }

    const button = document.createElement("button");
    button.className = "analytics-consent-settings";
    button.type = "button";
    button.dataset.analyticsConsentSettings = "";
    button.textContent = "Cookie Settings";
    button.addEventListener("click", showConsentBanner);
    legalNavigation.appendChild(button);
  }

  function track(eventName, parameters = {}) {
    if (
      currentConsent !== grantedValue
      || typeof window.gtag !== "function"
      || typeof eventName !== "string"
      || !/^[a-zA-Z][a-zA-Z0-9_]{0,39}$/.test(eventName)
    ) {
      return false;
    }
    window.gtag("event", eventName, parameters);
    return true;
  }

  function trackPageView() {
    if (currentConsent !== grantedValue || typeof window.gtag !== "function") {
      return false;
    }
    const pageLocation = window.location.href;
    if (pageLocation === lastTrackedPageLocation) {
      return false;
    }
    const measurementLocation = new URL(pageLocation);
    const attribution = captureAttribution();
    if (!attributionAppliedToPageView) {
      Object.entries(attribution).forEach(([name, value]) => {
        measurementLocation.searchParams.set(name, value);
      });
    }
    const tracked = track("page_view", {
      page_title: document.title,
      page_location: measurementLocation.href,
      page_path: `${window.location.pathname}${window.location.search}`,
    });
    if (tracked) {
      lastTrackedPageLocation = pageLocation;
      if (Object.keys(attribution).length) {
        attributionAppliedToPageView = true;
      }
    }
    return tracked;
  }

  window.jfmAnalytics = Object.freeze({
    captureAttribution,
    getAttribution() {
      if (currentConsent !== grantedValue) {
        return {};
      }
      captureAttribution();
      return { ...pendingAttribution };
    },
    isGranted() {
      return currentConsent === grantedValue;
    },
    track,
    trackPageView,
  });

  const initialConsent = storedConsent();
  currentConsent = initialConsent;
  captureAttribution();
  if (initialConsent === grantedValue) {
    loadAnalytics();
  }

  window.addEventListener("DOMContentLoaded", () => {
    addConsentSettingsLink();
    if (initialConsent !== grantedValue && initialConsent !== deniedValue) {
      showConsentBanner();
    }
  });
})();
