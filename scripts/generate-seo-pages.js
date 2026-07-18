const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://japanfirstmove.com";
const ogImage = `${siteUrl}/assets/ogp/ogp-japan-first-move.png`;
const ogImageAlt = "Japan First Move - Simple first-step guides for traveling in Japan.";

const pages = [
  {
    path: "/",
    title: "Japan First Move | Simple first-step guides for traveling in Japan",
    description:
      "Simple first-step guides for travelers in Japan. Find what to do first at ramen shops, izakayas, buses, shrines, pharmacies, and more.",
  },
  {
    path: "/food",
    title: "Food in Japan | Japan First Move",
    description: "Learn first moves for ordering, paying, waiting, and explaining food needs while traveling in Japan.",
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
    path: "/food-cards",
    title: "Food Cards for Japan | Japan First Move",
    description:
      "Show allergies, dietary needs, and ingredients to check in Japanese with sample food cards for restaurants in Japan.",
  },
  {
    path: "/faq",
    title: "FAQ | Japan First Move",
    description:
      "Answers about Japan First Move, Custom Food Card, saving images, privacy, refunds, and using the guide while traveling.",
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
    title: "Severe Allergy Food Card | Japan First Move",
    description:
      "A Japanese-English sample food card for communicating a severe allergy or cross-contact risk at restaurants in Japan.",
  },
  {
    path: "/food-cards/basic-food-allergy",
    title: "Basic Food Allergy Card | Japan First Move",
    description: "A Japanese-English sample food card for asking restaurant staff in Japan to check ingredients for an allergy.",
  },
  {
    path: "/food-cards/vegetarian",
    title: "Vegetarian Food Card | Japan First Move",
    description:
      "A Japanese-English sample food card for explaining vegetarian needs and avoiding meat, seafood, and fish-based broth in Japan.",
  },
  {
    path: "/food-cards/vegan",
    title: "Vegan Food Card | Japan First Move",
    description:
      "A Japanese-English sample food card for avoiding meat, seafood, eggs, dairy, and animal-based dashi in Japan.",
  },
  {
    path: "/food-cards/no-pork",
    title: "No Pork Food Card | Japan First Move",
    description: "A Japanese-English sample food card for avoiding pork, ham, lard, pork broth, and related ingredients in Japan.",
  },
  {
    path: "/food-cards/no-alcohol",
    title: "No Alcohol Food Card | Japan First Move",
    description:
      "A Japanese-English sample food card for avoiding alcohol in drinks, sauces, seasonings, and cooking at restaurants in Japan.",
  },
  {
    path: "/food-cards/ask-dashi",
    title: "Ask About Dashi Food Card | Japan First Move",
    description: "A Japanese-English sample food card for checking whether a dish contains animal-based broth or dashi in Japan.",
  },
  {
    path: "/food-cards/shared-oil-tools",
    title: "Shared Oil or Tools Food Card | Japan First Move",
    description:
      "A Japanese-English sample food card for asking about shared oil, pans, cooking tools, and cross-contact risk in Japan.",
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
  return `${siteUrl}${pagePath === "/" ? "/" : pagePath}`;
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
  return `  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${escapedCanonical}" />
    <!-- Temporary review setting: remove before public launch -->
    <meta name="robots" content="noindex, nofollow" />

    <!-- Open Graph -->
    <meta property="og:site_name" content="Japan First Move" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapedCanonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${ogImageAlt}" />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:image:alt" content="${ogImageAlt}" />

    <!-- Icons -->
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/assets/favicon/site-icon-512.png" />

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8BQHR1GHK3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-8BQHR1GHK3');
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/styles.css?v=css-modules-1" />
  </head>`;
}

const rootHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const bodyMatch = rootHtml.match(/<body>[\s\S]*<\/body>/);
if (!bodyMatch) {
  throw new Error("Could not find body markup in index.html");
}

for (const page of pages) {
  const filePath = pageOutputPath(page.path);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const html = `<!doctype html>
<html lang="en">
${headMarkup(page)}
${bodyMatch[0].replace('/app.js?v=clean-urls-1', '/app.js?v=seo-pages-1')}
</html>
`;
  fs.writeFileSync(filePath, html);
}

console.log(`Generated ${pages.length} SEO HTML files.`);
