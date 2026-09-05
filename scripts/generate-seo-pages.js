const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://japanfirstmove.com";
const ogImage = `${siteUrl}/assets/ogp/ogp-japan-first-move-v2.png`;
const ogImageAlt =
  "Japan First Move — Less Guessing. More Japan. Practical help when you need it and a closer look at everyday Japan.";
const customFoodCardOgImage = `${siteUrl}/assets/ogp/ogp-custom-food-card.png`;
const customFoodCardOgImageAlt =
  "Custom Food Card for Japan — a traveler showing a Japanese food card to restaurant staff.";
const foodCardsOgImage = `${siteUrl}/assets/ogp/ogp-food-allergy-card-japan.png`;
const foodCardsOgImageAlt =
  "Food Allergy Card for Japan — a Japanese food card shown on a phone while restaurant staff check ingredients.";
const temporaryReviewNoindexEnabled = false;

const pages = [
  {
    path: "/",
    title: "Japan First Move | Simple first-step guides for traveling in Japan",
    description:
      "Simple first-step guides for travelers in Japan. Find what to do first at ramen shops, izakayas, buses, shrines, pharmacies, and more.",
  },
  {
    path: "/food",
    title: "Food in Japan: Ordering, Allergies & Restaurant Help | Japan First Move",
    description:
      "Practical guides for ordering food in Japan, explaining allergies and dietary restrictions, checking ingredients, and paying at restaurants and shops.",
  },
  {
    path: "/move",
    title: "Move Around Japan | Japan First Move",
    description: "First-step guides for stations, trains, buses, IC cards, exits, platforms, and coin lockers in Japan.",
  },
  {
    path: "/relax",
    title: "Relax in Japan | Japan First Move",
    description: "Simple guides for taking breaks, using onsen and sento, and recovering during long travel days in Japan.",
  },
  {
    path: "/culture",
    title: "Culture in Japan | Japan First Move",
    description: "Learn first moves for shrines, photo manners, entry rules, and everyday culture situations in Japan.",
  },
  {
    path: "/help",
    title: "Get Help in Japan | Japan First Move",
    description: "First-step guides for medicine, lost items, ticket machines, feeling sick, and asking for help in Japan.",
  },
  {
    path: "/everyday-japan",
    title: "Everyday Japan | Japan First Move",
    description:
      "Understand everyday life in Japan through supermarkets, meals, ingredients, seasonal food, and the small details of daily routines.",
  },
  {
    path: "/everyday-japan/japanese-supermarkets",
    title: "What Japanese Supermarkets Are Really Like | Japan First Move",
    description:
      "See what Japanese supermarkets reveal about everyday meals, fresh seafood, prepared food, tea, seasonal products, and local life.",
    ogType: "article",
  },
  {
    path: "/everyday-japan/japanese-seasonings",
    title: "Everyday Japanese Seasonings Explained | Japan First Move",
    description:
      "Learn what dashi, ponzu, mentsuyu, mirin, miso, and other everyday Japanese seasonings are, plus easy flavors to try and take home.",
    ogType: "article",
  },
  {
    path: "/everyday-japan/everyday-sounds",
    title: "Why Japan Has So Many Everyday Sounds | Japan First Move",
    description:
      "Discover the everyday sounds of Japan, from convenience-store chimes and chirping crosswalks to station melodies and neighborhood announcements.",
    ogType: "article",
    ogImage: `${siteUrl}/assets/everyday-japan/everyday-sounds-hero.jpg`,
    ogImageAlt:
      "A paper-crafted Japanese street with a convenience store, crossing signal, train, and neighborhood loudspeaker.",
    ogImageWidth: 1280,
    ogImageHeight: 533,
  },
  {
    path: "/everyday-japan/why-people-walk-so-much-in-japan",
    title: "Why People Walk So Much in Japan | Japan First Move",
    description:
      "Discover why walking is part of daily life in Japan, from train stations and neighborhood errands to station exits and rental bicycles.",
    ogType: "article",
    ogImage: `${siteUrl}/assets/everyday-japan/why-people-walk-japan-hero.jpg`,
    ogImageAlt:
      "Paper-crafted pedestrians walking through a Japanese neighborhood toward a railway station, with shared bicycles nearby.",
    ogImageWidth: 1280,
    ogImageHeight: 533,
  },
  {
    path: "/about",
    title: "About Japan First Move | Japan First Move",
    description:
      "Learn why Japan First Move was created and how its practical guides help travelers navigate unfamiliar moments and connect with everyday Japan.",
  },
  {
    path: "/food-cards",
    title: "Free Japanese Food Allergy Cards for Japan | Japan First Move",
    description:
      "Use Japanese-English food allergy and dietary restriction cards in Japan, or create a custom card with ingredients for restaurant staff to check.",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
  {
    path: "/food-card/custom/",
    title: "Custom Japanese Food Allergy Card | Japan First Move",
    description:
      "Create a Japanese-English food card for allergies, dietary restrictions, religious needs, or ingredients restaurant staff should check. No app or account needed.",
    ogImage: customFoodCardOgImage,
    ogImageAlt: customFoodCardOgImageAlt,
  },
  {
    path: "/food-card/custom/success/",
    title: "Custom Food Card Payment | Japan First Move",
    description: "Verify your Custom Food Card payment and display your completed card.",
    ogImage: customFoodCardOgImage,
    ogImageAlt: customFoodCardOgImageAlt,
    keepNoindex: true,
    noindexComment: "Keep this payment return page out of search results.",
  },
  {
    path: "/guides/food-allergy-card-japan",
    title: "How to Use a Food Allergy Card in Japan | Japan First Move",
    description:
      "Learn when and how to show a food allergy or dietary restriction card at restaurants in Japan, including dashi, broth, and other ingredients to check.",
    ogType: "article",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
  {
    path: "/faq",
    title: "FAQ | Japan First Move",
    description:
      "Answers about Japan First Move, Custom Food Card, saving images, privacy, refunds, and using the guide while traveling.",
  },
  {
    path: "/terms",
    title: "Terms of Use | Japan First Move",
    description: "Read the terms that apply when using Japan First Move and purchasing or using Custom Food Card.",
    keepNoindex: true,
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Japan First Move",
    description: "Learn how Japan First Move handles information, payments, analytics, cookies, and privacy requests.",
    keepNoindex: true,
  },
  {
    path: "/legal-notice",
    title: "Legal Notice | Japan First Move",
    description: "Review seller, pricing, payment, delivery, refund, and other legally required purchase information.",
    keepNoindex: true,
  },
  {
    path: "/disclaimer",
    title: "Disclaimer | Japan First Move",
    description: "Review important limitations for Japan First Move travel guidance, food cards, translations, and digital tools.",
    keepNoindex: true,
  },
  {
    path: "/guides/ramen-shop",
    title: "What to Do First at a Ramen Shop in Japan | Japan First Move",
    description:
      "At a ramen shop in Japan, the first move is often not to sit down. Learn how to use the ticket machine, wait in line, and order without feeling lost.",
  },
  {
    path: "/guides/izakaya",
    title: "How to Order at an Izakaya Without Feeling Lost | Japan First Move",
    description:
      "At an izakaya in Japan, staff may ask for your first drink before you are ready to order food. Learn what to do first, what otoshi means, and how to ask for the bill.",
  },
  {
    path: "/guides/restaurant-full",
    title: "What to Do When a Japanese Restaurant Says \"We're Full\" | Japan First Move",
    description:
      "When a restaurant in Japan says it is full, it may not always be a simple invitation to wait. Learn what to do first, how to ask once, and when to move on.",
  },
  {
    path: "/guides/how-to-pay",
    title: "How to Pay at Restaurants and Shops in Japan | Japan First Move",
    description:
      "Not sure where to pay in Japan? Learn whether to pay at the register, at your seat, with a tray, by card, or in cash, and why you should not tip.",
  },
  {
    path: "/guides/oshibori",
    title: "Why Did They Give Me a Tiny Wet Towel? | Japan First Move",
    description:
      "A small wet towel called an oshibori often arrives before your meal in Japan. Learn what it is for, how to use it, and why it may be warm or cold.",
  },
  {
    path: "/guides/cook-at-table",
    title: "Why Am I Cooking My Own Dinner at a Restaurant? | Japan First Move",
    description:
      "At some yakiniku, shabu-shabu, sukiyaki, and okonomiyaki restaurants in Japan, cooking is part of the meal. Learn how to tell when it is your turn.",
  },
  {
    path: "/guides/three-step-onigiri",
    title: "Why Does an Onigiri Need Three Steps to Open? | Japan First Move",
    description:
      "Why do some Japanese onigiri wrappers have three numbered steps? Learn how the package keeps the seaweed crisp and how to open it.",
  },
  {
    path: "/guides/empty-coffee-cup",
    title: "Why Did the Cashier Give Me an Empty Coffee Cup? | Japan First Move",
    description:
      "Why did a Japanese convenience store give you an empty coffee cup? Match the cup with the self-service machine and finish making your drink.",
  },
  {
    path: "/guides/konbini-egg-sandwich",
    title: "Why Is Everyone Talking About the Konbini Egg Sandwich? | Japan First Move",
    description:
      "Why is the Japanese convenience-store egg sandwich so popular? Find the classic version, recognize the label, and try the konbini favorite.",
  },
  {
    path: "/guides/hot-snacks",
    title: "Why Is the Best Snack Hiding Behind the Register? | Japan First Move",
    description:
      "How do you order hot snacks from behind the register at a Japanese convenience store? Point, use one simple phrase, and enjoy fried chicken, croquettes, or steamed buns.",
  },
  {
    path: "/guides/onsen-sento",
    title: "What to Do First at an Onsen or Sento | Japan First Move",
    description:
      "At an onsen or sento in Japan, the order matters: shoes, payment, changing, washing, and bathing. Learn what to do first and what not to do.",
  },
  {
    path: "/guides/short-break",
    title: "Where to Take a Short Break in Japan | Japan First Move",
    description:
      "When Japan travel days get tiring, find a place to sit, cool down, and recover without blocking shops, paths, or entrances.",
  },
  {
    path: "/guides/japanese-toilet-buttons",
    title: "Go Ahead—Press the Buttons on a Japanese Toilet | Japan First Move",
    description:
      "Japanese toilets are famous for heated seats, water jets, privacy sounds, and rows of buttons. Learn the two controls to find first, then enjoy trying the rest.",
  },
  {
    path: "/guides/ryokan-futon",
    title: "Why Did a Futon Appear While You Were at Dinner? | Japan First Move",
    description:
      "A traditional ryokan room may have no bed when you arrive, then change while you are at dinner. Learn how meals, baths, yukata, and futon preparation fit together.",
  },
  {
    path: "/guides/local-bus",
    title: "How to Ride a Local Bus in Japan | Japan First Move",
    description:
      "Local buses in Japan can be confusing because boarding doors and payment systems vary. Learn what to do first, when to take a ticket, and how to pay.",
  },
  {
    path: "/guides/find-right-platform",
    title: "Find the Right Platform in Japan | Japan First Move",
    description:
      "Find the right train platform in Japan by checking the line, destination, platform number, and train type before boarding.",
  },
  {
    path: "/guides/find-right-exit",
    title: "Find the Right Station Exit in Japan | Japan First Move",
    description:
      "Choose the right station exit in Japan by checking your map, exit name or number, and nearby signs before leaving the station.",
  },
  {
    path: "/guides/charge-ic-card",
    title: "How to Charge an IC Card in Japan | Japan First Move",
    description:
      "Add money to a Japanese IC card by finding the Charge option on a ticket machine and checking the new balance before traveling.",
  },
  {
    path: "/guides/coin-lockers",
    title: "How to Use Coin Lockers in Japan | Japan First Move",
    description:
      "Coin lockers in Japan can use keys, coins, IC cards, or touch screens. Learn what to do first, how to pay, and how to find your locker again.",
  },
  {
    path: "/guides/japanese-taxi",
    title: "Why Is an Available Taxi Showing a Red Sign? | Japan First Move",
    description:
      "In a Japanese taxi, a red sign can mean available and the rear door may open automatically. Learn how to spot a free taxi and let the driver handle the door.",
  },
  {
    path: "/guides/luggage-forwarding",
    title: "Why Is Your Suitcase Traveling Without You? | Japan First Move",
    description:
      "Luggage delivery services in Japan can send a suitcase from one hotel to another. Learn what to confirm before your bag begins its own journey.",
  },
  {
    path: "/guides/ticket-gate-error",
    title: "Why Did the Ticket Gate Say No? | Japan First Move",
    description:
      "If a Japanese ticket gate closes after you tap an IC card, the cause may be balance, card interference, or an incomplete journey record. Learn what to check first.",
  },
  {
    path: "/guides/escalator-sides",
    title: "Tokyo Left, Osaka Right—So Where Should You Stand? | Japan First Move",
    description:
      "People have traditionally stood on different sides of escalators in Tokyo and Osaka. Learn why local habits vary and why current safety guidance says to stand still.",
  },
  {
    path: "/guides/shrine",
    title: "What to Do First at a Shrine in Japan | Japan First Move",
    description:
      "Visiting a shrine in Japan? Learn what to do first at the torii gate, how to purify your hands, how to pray, and what not to do.",
  },
  {
    path: "/guides/photo-manners",
    title: "Photo Manners in Japan | Japan First Move",
    description:
      "Before taking photos in Japan, check signs, ask when unsure, avoid photographing people without permission, and stop quickly if staff says no.",
  },
  {
    path: "/guides/irasshaimase",
    title: "You Don’t Have to Answer “Irasshaimase” | Japan First Move",
    description:
      "When shop staff in Japan call out irasshaimase, they are welcoming you—not waiting for an answer. Learn when to keep browsing and when a real conversation begins.",
  },
  {
    path: "/guides/sumimasen",
    title: "Why Does “Sumimasen” Mean So Many Things? | Japan First Move",
    description:
      "Sumimasen can mean sorry, excuse me, or even carry a feeling of thanks. Learn why this useful Japanese word changes with the situation.",
  },
  {
    path: "/guides/pharmacy",
    title: "How to Ask for Medicine at a Japanese Pharmacy | Japan First Move",
    description:
      "Need medicine in Japan but don't know what to ask for? Learn how to show your symptoms, mention allergies, ask the pharmacist, and avoid guessing.",
  },
  {
    path: "/guides/ticket-machine-no-english",
    title: "When a Ticket Machine Has No English | Japan First Move",
    description:
      "No English on a Japanese ticket machine? Learn what to do first, how to use camera translation, when to ask staff, and how to avoid pressing random buttons.",
  },
  {
    path: "/guides/feeling-sick",
    title: "What to Do First When You Feel Sick in Japan | Japan First Move",
    description:
      "Feeling sick while traveling in Japan? Learn how to tell nearby staff or your hotel, ask where to get help, and explain that you need assistance.",
  },
  {
    path: "/guides/lost-something",
    title: "What to Do First If You Lose Something in Japan | Japan First Move",
    description:
      "Lost something while traveling in Japan? Learn what to do first, how to ask staff, and how to describe where and when you last had the item.",
  },
  {
    path: "/food-cards/severe-allergy",
    title: "Japanese Peanut Allergy Card for Japan | Japan First Move",
    description:
      "A Japanese-English peanut allergy card for communicating severe allergy and cross-contact risk at restaurants in Japan.",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
  {
    path: "/food-cards/basic-food-allergy",
    title: "Japanese Egg Allergy Card for Japan | Japan First Move",
    description: "A Japanese-English egg allergy card for asking restaurant staff in Japan to check ingredients and preparation.",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
  {
    path: "/food-cards/vegetarian",
    title: "Japanese Vegetarian Card for Japan | Japan First Move",
    description:
      "A Japanese-English sample food card for explaining vegetarian needs and avoiding meat, seafood, and animal-based dashi in Japan.",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
  {
    path: "/food-cards/vegan",
    title: "Japanese Vegan Card for Japan | Japan First Move",
    description:
      "A Japanese-English sample food card for avoiding meat, seafood, eggs, dairy, and animal-based dashi in Japan.",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
  {
    path: "/food-cards/no-pork",
    title: "Japanese No-Pork Food Card for Japan | Japan First Move",
    description: "A Japanese-English sample food card for avoiding pork, ham, lard, pork broth, and related ingredients in Japan.",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
  {
    path: "/food-cards/no-alcohol",
    title: "Japanese No-Alcohol Food Card for Japan | Japan First Move",
    description:
      "A Japanese-English sample food card for avoiding alcohol in drinks, sauces, seasonings, and cooking at restaurants in Japan.",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
  {
    path: "/food-cards/ask-dashi",
    title: "Ask About Dashi Food Card | Japan First Move",
    description: "A Japanese-English sample food card for checking whether a dish contains animal-based broth or dashi in Japan.",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
  {
    path: "/food-cards/shared-oil-tools",
    title: "Shared Oil or Tools Food Card | Japan First Move",
    description:
      "A Japanese-English sample food card for asking about shared oil, pans, cooking tools, and cross-contact risk in Japan.",
    ogImage: foodCardsOgImage,
    ogImageAlt: foodCardsOgImageAlt,
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function canonicalUrl(pagePath) {
  if (pagePath === "/") {
    return `${siteUrl}/`;
  }
  return `${siteUrl}${pagePath.endsWith("/") ? pagePath : `${pagePath}/`}`;
}

function normalizeInternalPageHrefs(markup) {
  return markup.replace(/href="(\/(?!\/)[^"#?]*)([?#][^"]*)?"/g, (match, pathname, suffix = "") => {
    const lastSegment = pathname.split("/").filter(Boolean).at(-1) || "";
    const isFile = lastSegment.includes(".");
    const isRedirectShortcut = pathname === "/fc" || pathname.startsWith("/fc/");
    const isApiRoute = pathname === "/api" || pathname.startsWith("/api/");

    if (pathname === "/" || pathname.endsWith("/") || isFile || isRedirectShortcut || isApiRoute) {
      return match;
    }

    return `href="${pathname}/${suffix}"`;
  });
}

const guideSectionBySlug = {
  "food-allergy-card-japan": { name: "Food", path: "/food" },
  "ramen-shop": { name: "Food", path: "/food" },
  izakaya: { name: "Food", path: "/food" },
  "restaurant-full": { name: "Food", path: "/food" },
  "how-to-pay": { name: "Food", path: "/food" },
  oshibori: { name: "Food", path: "/food" },
  "cook-at-table": { name: "Food", path: "/food" },
  "three-step-onigiri": { name: "Food", path: "/food" },
  "empty-coffee-cup": { name: "Food", path: "/food" },
  "konbini-egg-sandwich": { name: "Food", path: "/food" },
  "hot-snacks": { name: "Food", path: "/food" },
  "onsen-sento": { name: "Relax", path: "/relax" },
  "short-break": { name: "Relax", path: "/relax" },
  "japanese-toilet-buttons": { name: "Relax", path: "/relax" },
  "ryokan-futon": { name: "Relax", path: "/relax" },
  "local-bus": { name: "Move", path: "/move" },
  "find-right-platform": { name: "Move", path: "/move" },
  "find-right-exit": { name: "Move", path: "/move" },
  "charge-ic-card": { name: "Move", path: "/move" },
  "coin-lockers": { name: "Move", path: "/move" },
  "japanese-taxi": { name: "Move", path: "/move" },
  "luggage-forwarding": { name: "Move", path: "/move" },
  "ticket-gate-error": { name: "Move", path: "/move" },
  "escalator-sides": { name: "Move", path: "/move" },
  shrine: { name: "Culture", path: "/culture" },
  "photo-manners": { name: "Culture", path: "/culture" },
  irasshaimase: { name: "Culture", path: "/culture" },
  sumimasen: { name: "Culture", path: "/culture" },
  pharmacy: { name: "Get Help", path: "/help" },
  "ticket-machine-no-english": { name: "Get Help", path: "/help" },
  "feeling-sick": { name: "Get Help", path: "/help" },
  "lost-something": { name: "Get Help", path: "/help" },
};

function titleWithoutSiteName(page) {
  return page.title.replace(/\s*\|\s*Japan First Move.*$/, "").trim();
}

function isArticlePage(page) {
  return (
    page.path.startsWith("/guides/") ||
    (page.path.startsWith("/everyday-japan/") && page.path !== "/everyday-japan/")
  );
}

function breadcrumbParents(page) {
  if (page.path.startsWith("/everyday-japan/")) {
    return [{ name: "Everyday Japan", path: "/everyday-japan" }];
  }

  if (page.path.startsWith("/food-cards/")) {
    return [{ name: "Food cards", path: "/food-cards" }];
  }

  if (page.path === "/food-card/custom/") {
    return [{ name: "Food cards", path: "/food-cards" }];
  }

  if (page.path.startsWith("/guides/")) {
    const slug = page.path.split("/").filter(Boolean).at(-1);
    const section = guideSectionBySlug[slug];
    return section ? [section] : [];
  }

  return [];
}

function breadcrumbStructuredData(page) {
  const trail = [
    { name: "Home", path: "/" },
    ...breadcrumbParents(page),
    { name: titleWithoutSiteName(page), path: page.path },
  ];

  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

function organizationStructuredData() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Japan First Move",
    url: `${siteUrl}/`,
    logo: `${siteUrl}/assets/favicon/site-icon-512.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@japanfirstmove.com",
      contactType: "customer support",
    },
  };
}

function articleStructuredData(page) {
  const author = {
    "@type": "Organization",
    name: "Japan First Move",
    url: `${siteUrl}/about/`,
  };

  return {
    "@type": "Article",
    headline: titleWithoutSiteName(page),
    description: page.description,
    image: page.ogImage ?? ogImage,
    mainEntityOfPage: canonicalUrl(page.path),
    inLanguage: "en",
    author,
    publisher: {
      "@type": "Organization",
      name: "Japan First Move",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/assets/favicon/site-icon-512.png`,
    },
  };
}

function structuredDataMarkup(page) {
  if (page.keepNoindex) {
    return "";
  }

  const graph = [];

  if (page.path === "/") {
    graph.push(organizationStructuredData());
    graph.push({
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Japan First Move",
      url: `${siteUrl}/`,
      publisher: { "@id": `${siteUrl}/#organization` },
    });
  } else {
    graph.push(breadcrumbStructuredData(page));
  }

  if (page.path === "/about") {
    graph.push(organizationStructuredData());
  }

  if (isArticlePage(page)) {
    graph.push(articleStructuredData(page));
  }

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2).replaceAll(
    "<",
    "\\u003c",
  );
  return `
    <script type="application/ld+json">
${json}
    </script>`;
}

function pageOutputPath(pagePath) {
  if (pagePath === "/") {
    return path.join(root, "index.html");
  }
  return path.join(root, pagePath.replace(/^\/+/, ""), "index.html");
}

function headMarkup(page) {
  const canonical = canonicalUrl(page.path);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const escapedCanonical = escapeHtml(canonical);
  const pageOgImage = escapeHtml(page.ogImage ?? ogImage);
  const pageOgImageAlt = escapeHtml(page.ogImageAlt ?? ogImageAlt);
  const pageOgImageWidth = page.ogImageWidth ?? 1200;
  const pageOgImageHeight = page.ogImageHeight ?? 630;
  const pageOgType = escapeHtml(page.ogType ?? (isArticlePage(page) ? "article" : "website"));
  const shouldNoindex = page.keepNoindex || temporaryReviewNoindexEnabled;
  const robotsComment =
    page.noindexComment ??
    (page.keepNoindex
      ? "Keep this legal page out of search results."
      : "Temporary review setting: remove before public launch");
  const robotsMarkup = shouldNoindex
    ? `    <!-- ${robotsComment} -->
    <meta name="robots" content="noindex, nofollow" />
`
    : "";
  const homepagePreloadMarkup = page.path === "/"
    ? `    <link rel="preload" as="image" href="/sozai/hero/hero-mobile-ramen-v2.webp" type="image/webp" fetchpriority="high" />\n`
    : "";
  const stylesheetVersion = "guide-button-tone-1";
  return `  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${escapedCanonical}" />
${structuredDataMarkup(page)}
${homepagePreloadMarkup}${robotsMarkup}
    <!-- Open Graph -->
    <meta property="og:site_name" content="Japan First Move" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="${pageOgType}" />
    <meta property="og:url" content="${escapedCanonical}" />
    <meta property="og:image" content="${pageOgImage}" />
    <meta property="og:image:width" content="${pageOgImageWidth}" />
    <meta property="og:image:height" content="${pageOgImageHeight}" />
    <meta property="og:image:alt" content="${pageOgImageAlt}" />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${pageOgImage}" />
    <meta name="twitter:image:alt" content="${pageOgImageAlt}" />

    <!-- Icons -->
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/assets/favicon/site-icon-512.png" />

    <!-- Analytics consent must load before any analytics-dependent code. -->
    <script src="/analytics-consent.js?v=production-hosts-1"></script>
    <link rel="stylesheet" href="/styles.css?v=${stylesheetVersion}" />
  </head>`;
}

const rootHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const bodyMatch = rootHtml.match(/<body>[\s\S]*<\/body>/);
if (!bodyMatch) {
  throw new Error("Could not find body markup in index.html");
}

const emptyAppMarkup = '<main id="app" tabindex="-1"></main>';
const resetBodyTemplate = bodyMatch[0].replace(
  /<main\b(?=[^>]*\bid="app")[^>]*>[\s\S]*?<\/main>/,
  emptyAppMarkup,
);
if (resetBodyTemplate === bodyMatch[0] && !bodyMatch[0].includes(emptyAppMarkup)) {
  throw new Error("Could not reset the app container before generating page shells");
}
const bodyTemplate = normalizeInternalPageHrefs(resetBodyTemplate);

for (const page of pages) {
  const filePath = pageOutputPath(page.path);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const html = `<!doctype html>
<html lang="en">
${headMarkup(page)}
${bodyTemplate}
</html>
`;
  fs.writeFileSync(filePath, html);
}

console.log(`Generated ${pages.length} SEO HTML files.`);
