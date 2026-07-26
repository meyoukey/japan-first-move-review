(function initializeAnalyticsConsent() {
  const measurementId = "G-8BQHR1GHK3";
  const consentStorageKey = "jfmAnalyticsConsent";
  const grantedValue = "granted";
  const deniedValue = "denied";
  let analyticsLoaded = false;

  window.dataLayer = window.dataLayer || [];
  function queueGoogleTag() {
    window.dataLayer.push(arguments);
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
    queueGoogleTag("config", measurementId);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  function clearAnalyticsCookies() {
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      if (name === "_ga" || name.startsWith("_ga_")) {
        document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}; SameSite=Lax`;
      }
    });
  }

  function removeConsentBanner() {
    document.querySelector("[data-analytics-consent-banner]")?.remove();
  }

  function applyConsent(value) {
    saveConsent(value);
    removeConsentBanner();

    if (value === grantedValue) {
      loadAnalytics();
      return;
    }

    queueGoogleTag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    clearAnalyticsCookies();
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

  const initialConsent = storedConsent();
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
