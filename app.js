const categories = [
  {
    id: "food",
    name: "Food",
    icon: "🍜",
    description: "Order, pay, wait, and explain food needs.",
  },
  {
    id: "move",
    name: "Move",
    icon: "🚌",
    description: "Stations, trains, buses, IC cards, and lockers.",
  },
  {
    id: "relax",
    name: "Relax",
    icon: "♨",
    description: "Rest, recover, onsen, and quiet spaces.",
  },
  {
    id: "culture",
    name: "Culture",
    icon: "⛩",
    description: "Shrines, photos, entry rules, and local manners.",
  },
  {
    id: "help",
    name: "Get Help",
    icon: "＋",
    description: "Medicine, lost items, ticket machines, and feeling sick.",
  },
];

const guides = [
  {
    slug: "ramen-shop",
    title: "What to Do First at a Ramen Shop in Japan",
    category: "food",
    meta: "At a ramen shop in Japan, the first move is often not to sit down. Learn how to use the ticket machine, wait in line, and order without feeling lost.",
    intro: [
      "If you’re not sure whether to sit down, order, or wait, start here.",
      "Ramen shops move fast, but don’t worry—you only need to know what comes first.",
    ],
    firstMove: "Look near the entrance for a meal ticket machine before you sit down.",
    steps: [
      "Pause near the entrance.",
      "Look for a meal ticket machine.",
      "If there is one, choose your ramen and pay first.",
      "Hand the ticket to staff and wait to be guided.",
    ],
    dont: [
      {
        title: "Don’t sit down before checking the system.",
        body: "At many ramen shops, ordering happens before you take a seat. If you sit first, staff may point you back to the meal ticket machine.",
      },
      {
        title: "Don’t block the entrance while deciding.",
        body: "If there is a line, join the line first and watch what the person ahead of you does.",
      },
    ],
    sayShow: [
      {
        use: "Use when you can’t find the ticket machine.",
        romaji: "Kenbaiki wa doko desu ka?",
        japanese: "券売機はどこですか？",
        english: "Where is the meal ticket machine?",
      },
      {
        use: "Use when you don’t know how to use it.",
        romaji: "Tsukaikata ga wakarimasen.",
        japanese: "使い方がわかりません。",
        english: "I don’t know how to use this.",
      },
    ],
    staff: [
      {
        japanese: "券売機でお願いします。",
        romaji: "Kenbaiki de onegaishimasu.",
        means: "Please use the meal ticket machine.",
        move: "Buy your meal ticket first, then give it to staff.",
      },
      {
        japanese: "食券を買ってください。",
        romaji: "Shokken o katte kudasai.",
        means: "Please buy a meal ticket.",
        move: "Look for the machine near the entrance.",
      },
    ],
    stuck:
      "Look for photos on the machine. If there is no English, use camera translation. If the shop is busy and you want the simplest choice, choose a basic ramen option instead of a complicated topping set.",
    note:
      "Ramen shops are often designed for quick meals. Staff may not explain everything slowly, especially during busy hours. This is normal.",
  },
  {
    slug: "izakaya",
    title: "How to Order at an Izakaya Without Feeling Lost",
    category: "food",
    meta: "At an izakaya in Japan, staff may ask for your first drink before you are ready to order food. Learn what to do first, what otoshi means, and how to ask for the bill.",
    intro: [
      "If you just sat down at an izakaya and staff is already waiting for your order, don’t panic.",
      "Your first move is not to choose every dish. Start by choosing one drink.",
    ],
    firstMove: "Choose your first drink before choosing all your food.",
    steps: [
      "Wait for staff to show you to a seat.",
      "Choose your first drink.",
      "Don’t be surprised if a small starter arrives automatically.",
      "Order a few dishes to share.",
      "Ask for the bill when you are ready to leave.",
    ],
    dont: [
      {
        title: "Don’t wait too long before ordering anything.",
        body: "At many izakaya, staff may ask for your first drink soon after you sit down. You can take more time with the food menu after that.",
      },
      {
        title: "Don’t assume the small starter is free.",
        body: "Many izakaya serve a small dish called otoshi. It is usually part of the seating charge or table charge.",
      },
    ],
    sayShow: [
      {
        use: "Use when you want a draft beer first.",
        romaji: "Nama biiru onegaishimasu.",
        japanese: "生ビールお願いします。",
        english: "Draft beer, please.",
      },
      {
        use: "Use when you want a cola.",
        romaji: "Koora onegaishimasu.",
        japanese: "コーラお願いします。",
        english: "Cola, please.",
      },
      {
        use: "Use when you want ginger ale.",
        romaji: "Jinjaa eeru onegaishimasu.",
        japanese: "ジンジャーエールお願いします。",
        english: "Ginger ale, please.",
      },
      {
        use: "Use when you want to ask about non-alcoholic drinks.",
        romaji: "Arukooru nashi no nomimono wa arimasu ka?",
        japanese: "アルコールなしの飲み物はありますか？",
        english: "Do you have non-alcoholic drinks?",
      },
    ],
    staff: [
      {
        japanese: "お飲み物はいかがですか？",
        romaji: "Onomimono wa ikaga desu ka?",
        means: "What would you like to drink?",
        move: "Choose one drink first, even if you are still choosing food.",
      },
      {
        japanese: "お通しです。",
        romaji: "Otoshi desu.",
        means: "This is the small starter or table charge dish.",
        move: "This is often part of the table charge. If you cannot eat it, tell staff before touching it.",
      },
      {
        japanese: "ラストオーダーです。",
        romaji: "Rasuto oodaa desu.",
        means: "Last order.",
        move: "Order anything else now, or say you are okay.",
      },
    ],
    stuck:
      "If you drink alcohol, a draft beer is an easy first order. If not, cola, ginger ale, or another non-alcoholic drink is fine. For food, start with two or three simple dishes. You can order more later.",
    note:
      "An izakaya is more like a casual drinking restaurant than a quiet dinner spot. It is normal to order in rounds.",
  },
  {
    slug: "restaurant-full",
    title: "What to Do When a Japanese Restaurant Says “We’re Full”",
    category: "food",
    meta: "When a restaurant in Japan says it is full, it may not always be a simple invitation to wait. Learn what to do first, how to ask once, and when to move on.",
    intro: [
      "If a restaurant in Japan says it is full, it can be hard to know what they really mean.",
      "Sometimes it means you can wait. Sometimes it means they cannot take more customers today. If the answer is unclear, it may be easier to look for another option nearby.",
    ],
    firstMove: "Ask once if waiting is possible, then move on if the answer is unclear.",
    steps: [
      "Step away from the entrance so you are not blocking others.",
      "Ask if waiting is possible.",
      "If staff gives you a clear wait time, decide if you want to wait.",
      "If the answer is unclear, it may be easier to look for another option nearby.",
      "Thank them and find another option nearby.",
    ],
    dont: [
      {
        title: "Don’t keep asking again and again.",
        body: "If staff avoids giving a wait time or says it is difficult, they may not be able to seat you.",
      },
      {
        title: "Don’t stand directly in the doorway while deciding.",
        body: "Small restaurants often have narrow entrances. Step aside first, then check your next option.",
      },
    ],
    sayShow: [
      {
        use: "Use when you want to ask if waiting is okay.",
        romaji: "Matte mo ii desu ka?",
        japanese: "待ってもいいですか？",
        english: "Can we wait?",
      },
      {
        use: "Use when you want to ask how long it will take.",
        romaji: "Dono kurai kakarimasu ka?",
        japanese: "どのくらいかかりますか？",
        english: "How long will it take?",
      },
    ],
    staff: [
      {
        japanese: "満席です。",
        romaji: "Manseki desu.",
        means: "We’re full.",
        move: "Ask once if you can wait.",
      },
      {
        japanese: "ちょっと難しいです。",
        romaji: "Chotto muzukashii desu.",
        means: "It may be difficult.",
        move: "If they do not offer a wait time, it may be better to look for another option nearby.",
      },
      {
        japanese: "ご予約でいっぱいです。",
        romaji: "Goyoyaku de ippai desu.",
        means: "We are fully booked.",
        move: "Thank them and leave.",
      },
    ],
    stuck:
      "If staff gives a number like 20 minutes or 30 minutes, waiting is probably okay. If they do not give a wait time or offer a waiting option, it may be easier to look for another option nearby.",
    note:
      "At small restaurants, staff may use soft language when they cannot seat more customers. If the answer stays unclear, it is usually best to look for another option nearby.",
  },
  {
    slug: "how-to-pay",
    title: "How to Pay at Restaurants and Shops in Japan",
    category: "food",
    meta: "Not sure where to pay in Japan? Learn whether to pay at the register, at your seat, with a tray, by card, or in cash, and why you should not tip.",
    intro: [
      "If you finished eating or shopping in Japan and don’t know where to pay, look around before taking out your wallet.",
      "In many places, payment happens at the register. Some restaurants use a bill slip from your table.",
    ],
    firstMove: "Look for the register before trying to pay at your seat.",
    steps: [
      "Check if there is a bill slip on your table or tray.",
      "If there is one, take it to the register.",
      "If there is no bill slip, look for a register or ask staff.",
      "Place your cash or card on the payment tray if there is one.",
      "Take your receipt and change before you leave.",
    ],
    dont: [
      {
        title: "Don’t leave money on the table unless the system clearly works that way.",
        body: "In many restaurants and shops, payment should happen at the register.",
      },
      {
        title: "Don’t tip.",
        body: "Tipping is not expected in Japan and can confuse staff. A simple thank you is enough.",
      },
    ],
    sayShow: [
      {
        use: "Use when you want the bill.",
        romaji: "Okaikei onegaishimasu.",
        japanese: "お会計お願いします。",
        english: "The bill, please.",
      },
      {
        use: "Use when you want to ask if cards are accepted.",
        romaji: "Kaado wa tsukaemasu ka?",
        japanese: "カードは使えますか？",
        english: "Can I pay by card?",
      },
      {
        use: "Use when you want to ask if it is cash only.",
        romaji: "Genkin dake desu ka?",
        japanese: "現金だけですか？",
        english: "Is it cash only?",
      },
    ],
    staff: [
      {
        japanese: "お会計ですか？",
        romaji: "Okaikei desu ka?",
        means: "Are you paying?",
        move: "Say yes or show your bill slip.",
      },
      {
        japanese: "レジでお願いします。",
        romaji: "Reji de onegaishimasu.",
        means: "Please pay at the register.",
        move: "Take your bill slip or items to the register.",
      },
      {
        japanese: "現金のみです。",
        romaji: "Genkin nomi desu.",
        means: "Cash only.",
        move: "Pay with cash. If you do not have enough, ask staff what to do.",
      },
    ],
    stuck:
      "Look for the small tray or payment terminal near the register. Many places use a tray for cash, coins, and receipts. If you pay by card, staff may ask you to insert or tap it yourself.",
    note:
      "Payment in Japan is often quiet and structured. The tray helps make the exchange clear and polite.",
  },
  {
    slug: "onsen-sento",
    title: "What to Do First at an Onsen or Sento",
    categoryCardTitle: "Use an onsen or sento",
    category: "relax",
    meta: "At an onsen or sento in Japan, the order matters: shoes, payment, changing, washing, and bathing. Learn what to do first and what not to do.",
    intro: [
      "If you arrive at an onsen or sento in Japan and suddenly feel unsure, you are not alone.",
      "The basic flow is easier once you know the order. The most important thing is to notice where shoes come off, where you pay, and where you wash before bathing.",
    ],
    firstMove: "Take off your shoes before entering the changing or bathing area.",
    steps: [
      "Remove your shoes where others do.",
      "Pay or show your ticket.",
      "Enter the correct changing room by checking the signs.",
      "Wash your body before entering the bath.",
      "Enter the bath without a towel or swimsuit unless the facility says otherwise.",
    ],
    dont: [
      {
        title: "Don’t enter the bath before washing.",
        body: "At Japanese baths, you wash your body first at the shower area. The bath itself is for soaking, not washing.",
      },
      {
        title: "Don’t put your towel in the bath water.",
        body: "Keep your small towel outside the water. You can place it on your head or leave it in a safe spot outside the bath.",
      },
      {
        title: "Don’t wear a swimsuit unless the facility clearly allows it.",
        body: "Most traditional onsens and sento are nude bathing spaces separated by gender.",
      },
    ],
    sayShow: [
      {
        use: "Use when it is your first time and you need help.",
        romaji: "Hajimete desu.",
        japanese: "初めてです。",
        english: "It’s my first time.",
      },
      {
        use: "Use when you need to check the tattoo policy before paying.",
        romaji: "Tattoo ga atte mo riyou dekimasu ka?",
        japanese: "タトゥーがあっても利用できますか？",
        english: "Can I use this facility if I have a tattoo?",
      },
      {
        use: "Use when you are unsure where shoes come off.",
        romaji: "Doko de kutsu o nugeba ii desu ka?",
        japanese: "どこで靴を脱げばいいですか？",
        english: "Where do I take off my shoes?",
      },
      {
        use: "Use when you need a towel.",
        romaji: "Taoru wa arimasu ka?",
        japanese: "タオルはありますか？",
        english: "Do you have towels?",
      },
    ],
    staff: [
      {
        japanese: "靴を脱いでください。",
        romaji: "Kutsu o nuide kudasai.",
        means: "Please take off your shoes.",
        move: "Look for the shoe area or shoe locker.",
      },
      {
        japanese: "体を洗ってから入ってください。",
        romaji: "Karada o aratte kara haitte kudasai.",
        means: "Please wash your body before entering the bath.",
        move: "Go to the shower area before entering the bath.",
      },
    ],
    stuck:
      "Watch the order of movement. Shoes come off first. Clothes come off in the changing room. Washing happens before the bath. The bath is for quiet soaking.",
    note:
      "Onsen and sento are shared quiet spaces. The rules keep the water clean and the space comfortable for everyone.",
  },
  {
    slug: "short-break",
    title: "Where to Take a Short Break in Japan",
    categoryCardTitle: "Take a short break",
    category: "relax",
    meta: "When Japan travel days get tiring, find a place to sit, cool down, and recover without blocking shops, paths, or entrances.",
    intro: [
      "Japan travel can mean long walking days. If you need a quick rest, look for places where sitting is clearly allowed.",
      "Choose a place meant for sitting—not an entrance or narrow walkway.",
    ],
    firstMove: "Look for a cafe, park, bench, or rest area where sitting is allowed.",
    steps: [
      "Step out of the main flow of people.",
      "Look for a cafe, bench, park, station seating area, or mall rest area.",
      "If it is a cafe, order before you sit unless signs show a different system.",
      "At shrines or temples, sit only where benches or rest areas are clearly provided.",
    ],
    dont: [
      {
        title: "Don’t sit for a long time in front of convenience stores or shop entrances unless seating is clearly provided.",
        body: "If you need a longer rest, look for a cafe, bench, park, station seating area, or mall seating area.",
      },
      {
        title: "Don’t block doors, narrow paths, stairs, or ticket gates.",
        body: "Move to the side and keep entrances clear.",
      },
    ],
    sayShow: [
      {
        use: "Use when you want to check if sitting is okay.",
        romaji: "Koko ni suwatte mo daijoubu desu ka?",
        japanese: "ここに座っても大丈夫ですか？",
        english: "Is it okay to sit here?",
      },
      {
        use: "Use when you need a nearby place to rest.",
        romaji: "Kyuukei dekiru basho wa arimasu ka?",
        japanese: "休憩できる場所はありますか？",
        english: "Is there a place where I can take a break?",
      },
      {
        use: "Use if you feel physically unwell.",
        romaji: "Kibun ga warui desu.",
        japanese: "気分が悪いです。",
        english: "I feel unwell.",
      },
    ],
    staff: [
      {
        japanese: "こちらで休憩できます。",
        romaji: "Kochira de kyuukei dekimasu.",
        means: "You can take a break here.",
        move: "Use the indicated area and keep bags close.",
      },
      {
        japanese: "店内をご利用の場合はご注文をお願いします。",
        romaji: "Tennai o goriyou no baai wa gochuumon o onegaishimasu.",
        means: "Please order if you use the seating inside.",
        move: "Order first, then sit down.",
      },
      {
        japanese: "ここは通路です。",
        romaji: "Koko wa tsuuro desu.",
        means: "This is a walkway.",
        move: "Move aside and find another rest spot.",
      },
    ],
    stuck:
      "Look for a department store, shopping mall, park, cafe, or station seating area. On very hot days, a staffed indoor place may be safer than resting outside. If you feel unwell, ask staff for help.",
    note:
      "In Japan, it is usually best to sit only where seating is clearly provided. If a spot looks like an entrance, walkway, or private step, keep moving and look for a clearer rest area.",
  },
  {
    slug: "local-bus",
    title: "How to Ride a Local Bus in Japan",
    categoryCardTitle: "Ride a local bus",
    category: "move",
    meta: "Local buses in Japan can be confusing because boarding doors and payment systems vary. Learn what to do first, when to take a ticket, and how to pay.",
    intro: [
      "If a local bus arrives in Japan and you don’t know whether to enter from the front or the back, pause for one second.",
      "The system can change depending on the city or bus company. Your best first move is to watch how other passengers board.",
    ],
    firstMove: "Watch where other passengers board, then use the same door.",
    steps: [
      "Check which door other passengers use.",
      "If you board from the back, take a numbered ticket if there is one.",
      "Press the stop button before your stop.",
      "Check the fare display near the driver.",
      "Prepare coins or an IC card before you pay.",
      "Pay when you get off, unless the local system is pay-first.",
    ],
    dont: [
      {
        title: "Don’t assume every bus works the same way.",
        body: "Some buses are pay-first. Some are pay-when-you-get-off. Some use a flat fare. Others use numbered tickets and fare zones.",
      },
      {
        title: "Don’t wait until the last second to press the stop button.",
        body: "Press it after your stop is announced or appears on the screen.",
      },
    ],
    sayShow: [
      {
        use: "Use when you want to confirm the destination. Replace Kyoto Station with your destination or stop.",
        romaji: "Kono basu wa Kyoto-eki ni ikimasu ka?",
        japanese: "このバスは京都駅に行きますか？",
        english: "Does this bus go to Kyoto Station?",
      },
      {
        use: "Use when you want to ask if IC cards work.",
        romaji: "IC kaado wa tsukaemasu ka?",
        japanese: "ICカードは使えますか？",
        english: "Can I use an IC card?",
      },
      {
        use: "Use when you want to ask if you pay when getting off.",
        romaji: "Oriru toki ni haraimasu ka?",
        japanese: "降りる時に払いますか？",
        english: "Do I pay when I get off?",
      },
    ],
    staff: [
      {
        japanese: "整理券を取ってください。",
        romaji: "Seiriken o totte kudasai.",
        means: "Please take a numbered ticket.",
        move: "Take the small ticket when you board.",
      },
      {
        japanese: "後払いです。",
        romaji: "Ato-barai desu.",
        means: "Pay when you get off.",
        move: "Keep your ticket and pay near the driver when leaving.",
      },
      {
        japanese: "前から乗ってください。",
        romaji: "Mae kara notte kudasai.",
        means: "Please board from the front.",
        move: "Use the front door.",
      },
    ],
    stuck:
      "Watch what boarding passengers do. If people tap an IC card when boarding, do the same. If they take a numbered ticket, take one too.",
    note:
      "Local buses in Japan are practical, not always beginner-friendly. Even Japanese travelers can feel unsure in a new city.",
  },
  {
    slug: "find-right-platform",
    title: "Find the right platform",
    category: "move",
    meta: "Find the right train platform in Japan by checking the line, destination, platform number, and train type before boarding.",
    intro: [
      "Use this when you are inside a station and need to know which platform or train to take.",
      "Check the line name, destination, and platform number first. If you ask for help, keep the question short and say your destination clearly.",
    ],
    firstMove: "Check the train line name, destination, and platform number before boarding.",
    steps: [
      "Check the train line name.",
      "Check the destination or direction.",
      "Check the platform number.",
      "Before boarding, confirm the train type if needed, such as local, rapid, or express.",
    ],
    dont: [
      {
        title: "Don’t board based only on the line color.",
        body: "Different services can share a platform. Check the destination and platform number too.",
      },
      {
        title: "Don’t assume every train stops at your destination.",
        body: "Local, rapid, and express trains may stop at different stations.",
      },
    ],
    sayShow: [
      {
        use: "Say the destination or place name first.",
        romaji: "[destination] ni iku ni wa, kono hoomu de atteimasu ka?",
        japanese: "〇〇に行くには、このホームで合っていますか？",
        english: "Is this the right platform for [destination]?",
        helper: "Replace 〇〇 / [destination] with the station or place name.",
        exampleRomaji: "Shibuya ni iku ni wa, kono hoomu de atteimasu ka?",
        exampleJapanese: "渋谷に行くには、このホームで合っていますか？",
      },
    ],
    staff: [
      {
        japanese: "ホーム",
        romaji: "Hoomu",
        means: "Platform.",
        move: "Check the platform number and destination shown nearby.",
      },
      {
        japanese: "番線",
        romaji: "Bansen",
        means: "Platform number.",
        move: "Follow the number on the station signs.",
      },
      {
        japanese: "各駅停車",
        romaji: "Kakueki teisha",
        means: "Local train.",
        move: "This train stops at every station on its route.",
      },
      {
        japanese: "快速",
        romaji: "Kaisoku",
        means: "Rapid.",
        move: "Check that your destination is one of its stops.",
      },
      {
        japanese: "急行",
        romaji: "Kyuukou",
        means: "Express.",
        move: "Check the stopping pattern before boarding.",
      },
      {
        japanese: "方面",
        romaji: "Houmen",
        means: "Direction.",
        move: "Follow the direction that includes your destination.",
      },
    ],
    stuck:
      "If you cannot find station staff, ask someone nearby. Keep the question short and show or say your destination clearly.",
    note:
      "Large stations can have several train companies and platforms. The destination on the nearest sign is more useful than the platform color alone.",
  },
  {
    slug: "find-right-exit",
    title: "Find the right exit",
    category: "move",
    meta: "Choose the right station exit in Japan by checking your map, exit name or number, and nearby signs before leaving the station.",
    intro: [
      "Use this when you are at a station and need to choose the right exit for your destination.",
      "Check your map before leaving the station area. If you ask for help, show or say the place name clearly.",
    ],
    firstMove: "Look for the exit name or number before leaving the station.",
    steps: [
      "Check your map app for the exit name or number.",
      "Look for signs such as East Exit, West Exit, Central Exit, or Exit A1.",
      "Confirm the exit before leaving the station area if possible.",
      "If you are unsure, ask station staff or someone nearby.",
    ],
    dont: [
      {
        title: "Don’t leave the station before checking the exit.",
        body: "At a large station, the wrong exit can put you far from your destination.",
      },
      {
        title: "Don’t ask only ‘Is this right?’",
        body: "Say the place name or show a map so the person knows which destination you mean.",
      },
    ],
    sayShow: [
      {
        use: "Say the destination or place name first.",
        romaji: "[place] ni iku ni wa, dono deguchi ga chikai desu ka?",
        japanese: "〇〇に行くには、どの出口が近いですか？",
        english: "Which exit should I use for [place]?",
        helper: "Replace 〇〇 / [place] with the station, hotel, shop, or place name.",
        exampleRomaji: "Tokyo Tower ni iku ni wa, dono deguchi ga chikai desu ka?",
        exampleJapanese: "東京タワーに行くには、どの出口が近いですか？",
      },
    ],
    staff: [
      {
        japanese: "出口",
        romaji: "Deguchi",
        means: "Exit.",
        move: "Follow the exit name or number on the signs.",
      },
      {
        japanese: "東口",
        romaji: "Higashi-guchi",
        means: "East Exit.",
        move: "Follow signs for the East Exit.",
      },
      {
        japanese: "西口",
        romaji: "Nishi-guchi",
        means: "West Exit.",
        move: "Follow signs for the West Exit.",
      },
      {
        japanese: "中央口",
        romaji: "Chuuou-guchi",
        means: "Central Exit.",
        move: "Follow signs for the Central Exit.",
      },
      {
        japanese: "改札",
        romaji: "Kaisatsu",
        means: "Ticket gate.",
        move: "Check the exit again before passing through the gate.",
      },
      {
        japanese: "地上",
        romaji: "Chijou",
        means: "Street level.",
        move: "Follow this sign to leave the underground station area.",
      },
    ],
    stuck:
      "In large stations, the wrong exit can put you far from your destination. If you cannot find station staff, ask someone nearby. Say the place name clearly, or show a map if you can.",
    note:
      "Exit names and numbers are practical navigation tools in Japan. Save the exit in your map app before you start walking.",
  },
  {
    slug: "charge-ic-card",
    title: "Charge an IC card",
    category: "move",
    meta: "Add money to a Japanese IC card by finding the Charge option on a ticket machine and checking the new balance before traveling.",
    intro: [
      "Use this when your IC card balance is low and you need to add money before riding a train or bus.",
      "Look for チャージ or Charge on a ticket machine. If you need help, ask station staff or someone nearby.",
    ],
    firstMove: "Look for “チャージ / Charge” on a ticket machine or ask for help.",
    steps: [
      "Look for a ticket machine that says チャージ or Charge.",
      "Place or insert your IC card as shown.",
      "Choose the amount.",
      "Pay and confirm the new balance before leaving.",
    ],
    tip: "Many convenience stores can also charge IC cards. Ask the cashier if you are not sure.",
    dont: [
      {
        title: "Don’t remove your card before the machine finishes.",
        body: "Wait for the updated balance and take any change or receipt.",
      },
      {
        title: "Don’t assume every machine accepts the same payment method.",
        body: "Some machines accept cash only for charging an IC card.",
      },
    ],
    sayShow: [
      {
        use: "Use when you need help charging your card.",
        romaji: "IC kaado ni chaaji shitai desu.",
        japanese: "ICカードにチャージしたいです。",
        english: "I want to charge my IC card.",
      },
    ],
    staff: [
      {
        japanese: "チャージ",
        romaji: "Chaaji",
        means: "Charge.",
        move: "Choose this option to add money to your IC card.",
      },
      {
        japanese: "入金",
        romaji: "Nyuukin",
        means: "Add money.",
        move: "Choose the amount you want to add.",
      },
      {
        japanese: "残高",
        romaji: "Zandaka",
        means: "Balance.",
        move: "Check the updated amount before leaving.",
      },
      {
        japanese: "現金のみ",
        romaji: "Genkin nomi",
        means: "Cash only.",
        move: "Use cash to charge the card at this machine.",
      },
      {
        japanese: "領収書",
        romaji: "Ryoushuusho",
        means: "Receipt.",
        move: "Choose this if you need a receipt.",
      },
    ],
    stuck:
      "If you cannot find station staff, ask someone nearby or try a ticket machine with an English button. Keep the question short and show your IC card.",
    note:
      "IC cards like Suica can be used on many trains and buses, but not everywhere.",
  },
  {
    slug: "coin-lockers",
    title: "How to Use Coin Lockers in Japan",
    categoryCardTitle: "Use coin lockers",
    categoryCardDescription: "Store your bag and remember where the locker is.",
    category: "move",
    meta: "Coin lockers in Japan can use keys, coins, IC cards, or touch screens. Learn what to do first, how to pay, and how to find your locker again.",
    intro: [
      "If you find coin lockers in Japan but don’t know how the system works, start with the locker itself.",
      "The hardest part is often finding the same locker area later.",
    ],
    firstMove: "Before you walk away, take a photo of the locker number, nearby signs, and the closest exit or landmark.",
    steps: [
      "Find an empty locker that fits your bag.",
      "Put your luggage inside before paying.",
      "Check whether it uses a key, coins, IC card, or touch screen.",
      "Pay, lock the door, and keep the key, receipt, QR code, or IC card safe.",
      "If you use an IC card, remember that the same card may be needed to reopen the locker.",
      "Take photos of the locker number, locker area, and nearby signs.",
    ],
    dont: [
      {
        title: "Don’t walk away without checking how to reopen the locker.",
        body: "Some lockers use a physical key. Some use a receipt or QR code. Some use the same IC card you paid with.",
      },
      {
        title: "Don’t trust your memory in a large station or big facility.",
        body: "Large stations and shopping complexes can have many locker areas that look similar.",
      },
    ],
    sayShow: [
      {
        use: "Use when you want to ask if lockers are available.",
        romaji: "Aiteiru rokkaa wa arimasu ka?",
        japanese: "空いているロッカーはありますか？",
        english: "Are there any available lockers?",
      },
      {
        use: "Use when you can’t find the locker area again.",
        romaji: "Rokkaa no basho ga wakarimasen.",
        japanese: "ロッカーの場所がわかりません。",
        english: "I can’t find the locker area.",
      },
      {
        use: "Use when you can show a photo or receipt.",
        romaji: "Kono rokkaa wa doko ni arimasu ka?",
        japanese: "このロッカーはどこにありますか？",
        english: "Where is this locker?",
      },
    ],
    staff: [
      {
        japanese: "空き",
        romaji: "Aki",
        means: "Available.",
        move: "You can choose this locker if it fits your bag.",
      },
      {
        japanese: "使用中",
        romaji: "Shiyouchuu",
        means: "In use.",
        move: "Look for another locker.",
      },
      {
        japanese: "ICカード専用",
        romaji: "IC kaado senyou",
        means: "IC card only.",
        move: "Use an IC card to pay. Keep the same card because it may be needed to reopen the locker.",
      },
    ],
    stuck:
      "Search your photos first. Look for the locker number, nearby signs, exit name, shop sign, or floor map in the background. If you still cannot find it, show your locker key, receipt, or photo to staff nearby.",
    note:
      "The hard part is not always locking your bag. It is finding the same locker area again later.",
  },
  {
    slug: "shrine",
    title: "What to Do First at a Shrine in Japan",
    categoryCardTitle: "Visit a shrine",
    category: "culture",
    meta: "Visiting a shrine in Japan? Learn what to do first at the torii gate, how to purify your hands, how to pray, and what not to do.",
    intro: [
      "If you arrive at a shrine in Japan and don’t know what is respectful, slow down before you walk in.",
      "You do not need to perform every ritual perfectly. Your first move is to enter calmly and avoid blocking other people.",
    ],
    firstMove: "Pause before the torii gate and walk through calmly, slightly to the side.",
    steps: [
      "Pause briefly before the torii gate.",
      "Walk through calmly without blocking others.",
      "If there is a water basin, clean your hands.",
      "Offer a coin at the main shrine if you want to pray.",
      "Step aside after praying so others can approach.",
    ],
    dont: [
      {
        title: "Don’t stand in the middle of the path for photos.",
        body: "At many shrines, walking slightly to the side is a safer, more respectful move.",
      },
      {
        title: "Don’t drink directly from the water basin.",
        body: "Some people rinse their mouth as part of the ritual, but they are not drinking the water. If you are unsure, just clean your hands.",
      },
      {
        title: "Don’t take photos where signs say not to.",
        body: "Some shrine areas, objects, or ceremonies may restrict photography.",
      },
      {
        title: "Don’t treat the space only as a photo spot.",
        body: "A shrine can be a tourist spot and a religious place at the same time.",
      },
    ],
    sayShow: [
      {
        use: "Use when you want to check if photos are okay.",
        romaji: "Shashin o totte mo daijoubu desu ka?",
        japanese: "写真を撮っても大丈夫ですか？",
        english: "Can I take photos?",
      },
    ],
    staff: [
      {
        japanese: "撮影禁止",
        romaji: "Satsuei kinshi",
        means: "No photography.",
        move: "Put your camera away.",
      },
      {
        japanese: "撮影はご遠慮ください。",
        romaji: "Satsuei wa goenryo kudasai.",
        means: "Please refrain from taking photos.",
        move: "Put your camera away.",
      },
      {
        japanese: "静かにお願いします。",
        romaji: "Shizuka ni onegaishimasu.",
        means: "Please be quiet.",
        move: "Lower your voice and move calmly.",
      },
    ],
    stuck:
      "Copy the flow, not every detail. Watch where people walk, where they line up, and where they step aside. If you are unsure about a ritual, it is okay to simply observe respectfully.",
    note:
      "Shrines are part of everyday life in Japan. Respect matters more than perfect technique.",
  },
  {
    slug: "photo-manners",
    title: "What to Do First Before Taking Photos in Japan",
    categoryCardTitle: "Check before taking photos",
    category: "culture",
    meta: "Before taking photos in Japan, check signs, ask when unsure, avoid photographing people without permission, and stop quickly if staff says no.",
    intro: [
      "Photos are usually fine in many places, but some spots have rules.",
      "Before you take a photo, check for signs or ask if you are unsure.",
    ],
    firstMove: "Look for signs first, then ask if photos are okay.",
    steps: [
      "Look for no-photo or no-flash signs.",
      "Check before taking photos in shrines, temples, shops, or exhibitions.",
      "If people are close to your camera, ask first or avoid taking the photo.",
      "If staff asks you to stop, lower your camera right away.",
    ],
    dont: [
      {
        title: "Don’t ignore no-photo or no-flash signs.",
        body: "Some places allow photos without flash. Others do not allow photos at all.",
      },
      {
        title: "Don’t take close-up photos of people without permission.",
        body: "Be careful around people praying, staff, customers, children, or anyone close to your camera.",
      },
      {
        title: "Don’t block paths or entrances for a photo.",
        body: "Move to the side, especially in crowded places or near shrine and temple approaches.",
      },
    ],
    sayShow: [
      {
        use: "Use before taking photos in a shop, shrine, temple, or exhibit.",
        romaji: "Shashin o totte mo daijoubu desu ka?",
        japanese: "写真を撮っても大丈夫ですか？",
        english: "Can I take photos?",
      },
      {
        use: "Use when you want to photograph a specific item, display, or area.",
        romaji: "Kore o totte mo daijoubu desu ka?",
        japanese: "これを撮っても大丈夫ですか？",
        english: "Can I take a photo of this?",
      },
      {
        use: "Use if staff or someone nearby asks you to stop.",
        romaji: "Sumimasen, yamemasu.",
        japanese: "すみません、やめます。",
        english: "Sorry, I will stop.",
      },
    ],
    staff: [
      {
        japanese: "撮影禁止",
        romaji: "Satsuei kinshi",
        means: "No photography.",
        move: "Put your camera away.",
      },
      {
        japanese: "フラッシュ禁止",
        romaji: "Furasshu kinshi",
        means: "No flash photography.",
        move: "Turn off the flash, or skip the photo if you are unsure.",
      },
      {
        japanese: "撮影はご遠慮ください",
        romaji: "Satsuei wa goenryo kudasai.",
        means: "Please refrain from taking photos.",
        move: "Do not take photos here.",
      },
    ],
    stuck:
      "If you are not sure, ask staff or skip the photo. If someone corrects you, stop right away and lower your camera.",
    note:
      "Photo rules can change by room, object, or ceremony. A nearby sign matters more than what other people are doing.",
  },
  {
    slug: "pharmacy",
    title: "How to Ask for Medicine at a Japanese Pharmacy",
    categoryCardTitle: "Ask for medicine",
    category: "help",
    meta: "Need medicine in Japan but don’t know what to ask for? Learn how to show your symptoms, mention allergies, ask the pharmacist, and avoid guessing.",
    intro: [
      "If you feel unwell in Japan and need medicine, you do not need to know the Japanese brand name.",
      "Your first move is to show your symptoms clearly and ask staff or a pharmacist for help choosing what is suitable.",
    ],
    firstMove: "Show your symptom, not a brand name.",
    steps: [
      "Go to the counter or ask a staff member for help.",
      "Show your symptom on your phone.",
      "Mention allergies, pregnancy, or medicine you cannot take.",
      "Confirm how often to take it.",
      "Keep the package and instructions.",
    ],
    dont: [
      {
        title: "Don’t choose medicine only by package design.",
        body: "Japanese medicine packaging can be hard to understand, and some products have similar-looking boxes.",
      },
      {
        title: "Don’t mix medicines without checking.",
        body: "If you are already taking medication, ask a pharmacist or doctor before taking something new.",
      },
      {
        title: "Don’t ignore serious symptoms.",
        body: "For severe pain, breathing trouble, allergic reactions, high fever, injury, or symptoms that feel urgent, seek medical help.",
      },
    ],
    sayShow: [
      {
        use: "Use when you have a headache.",
        romaji: "Atama ga itai desu.",
        japanese: "頭が痛いです。",
        english: "I have a headache.",
      },
      {
        use: "Use when you have a sore throat.",
        romaji: "Nodo ga itai desu.",
        japanese: "喉が痛いです。",
        english: "I have a sore throat.",
      },
      {
        use: "Use when you have stomach pain.",
        romaji: "Onaka ga itai desu.",
        japanese: "お腹が痛いです。",
        english: "I have a stomachache.",
      },
      {
        use: "Use when you have a fever.",
        romaji: "Netsu ga arimasu.",
        japanese: "熱があります。",
        english: "I have a fever.",
      },
      {
        use: "Use when you have an allergy.",
        romaji: "Arerugii ga arimasu.",
        japanese: "アレルギーがあります。",
        english: "I have allergies.",
      },
    ],
    staff: [
      {
        japanese: "どんな症状ですか？",
        romaji: "Donna shoujou desu ka?",
        means: "What symptoms do you have?",
        move: "Show your symptom on your phone or point to where you feel bad.",
      },
      {
        japanese: "アレルギーはありますか？",
        romaji: "Arerugii wa arimasu ka?",
        means: "Do you have any allergies?",
        move: "Tell them any allergies clearly.",
      },
      {
        japanese: "お薬手帳はありますか？",
        romaji: "Okusuri techou wa arimasu ka?",
        means: "Do you have a medicine record book?",
        move: "If you do not have one, show any current medicines or prescriptions you are taking.",
      },
    ],
    stuck:
      "Show the phrase on your phone instead of trying to pronounce everything. If you are not sure whether a symptom is serious, ask a pharmacist, hotel staff, or travel insurance support where to get medical help.",
    note:
      "Some medicines that are common in your country may not be available in the same form in Japan. Pharmacies can help with minor symptoms, but they are not a replacement for medical care when symptoms are serious.",
  },
  {
    slug: "ticket-machine-no-english",
    title: "What to Do When a Ticket Machine Has No English",
    categoryCardTitle: "Use a ticket machine with no English",
    category: "help",
    meta: "No English on a Japanese ticket machine? Learn what to do first, how to use camera translation, when to ask staff, and how to avoid pressing random buttons.",
    intro: [
      "If you are standing in front of a ticket machine in Japan and there is no English button, don’t start pressing random buttons.",
      "Ticket machines can appear at ramen shops, train stations, buses, museums, sento, and other everyday places.",
    ],
    firstMove: "Look for an English button first, then use camera translation if there isn’t one.",
    steps: [
      "Check the corners of the screen for English or language settings.",
      "If there is no English, use camera translation.",
      "Look for the simplest option that matches what you need.",
      "Ask staff before pressing random buttons.",
      "Keep the ticket or receipt if you make a mistake.",
      "After paying, check if there is a change button. Some machines do not return coins until you press it.",
    ],
    dont: [
      {
        title: "Don’t press random buttons just to move forward.",
        body: "Some machines are hard to cancel after payment, and staff may need the ticket or receipt to help you.",
      },
      {
        title: "Don’t block the machine while translating for too long.",
        body: "If people are waiting behind you, step aside for a moment and let someone else go first.",
      },
      {
        title: "Don’t throw away the ticket or receipt.",
        body: "Even if you bought the wrong thing, it may help staff understand what happened.",
      },
    ],
    sayShow: [
      {
        use: "Use when you want to ask if the machine can show English.",
        romaji: "Eigo ni dekimasu ka?",
        japanese: "英語にできますか？",
        english: "Can I switch this to English?",
      },
      {
        use: "Use when you don’t know how to use it.",
        romaji: "Tsukaikata ga wakarimasen.",
        japanese: "使い方がわかりません。",
        english: "I don’t know how to use this.",
      },
      {
        use: "Use when you can point to what you want to buy.",
        romaji: "Kore o kaitai desu.",
        japanese: "これを買いたいです。",
        english: "I want to buy this.",
      },
    ],
    staff: [
      {
        japanese: "English / Language / 言語",
        romaji: "English / Language / Gengo",
        means: "Language setting.",
        move: "Tap it first. If you cannot find a language option, use camera translation or ask staff.",
      },
      {
        japanese: "購入",
        romaji: "Kounyuu",
        means: "Purchase or buy.",
        move: "Press it when you have selected what you want and are ready to pay.",
      },
      {
        japanese: "おつり / 返却",
        romaji: "Otsuri / Henkyaku",
        means: "Change / return.",
        move: "Press it after buying if your change does not come out automatically.",
      },
      {
        japanese: "取消",
        romaji: "Torikeshi",
        means: "Cancel.",
        move: "Press it only if you want to cancel or go back.",
      },
      {
        japanese: "確認",
        romaji: "Kakunin",
        means: "Confirm.",
        move: "Press it when you are ready to confirm your choice.",
      },
    ],
    stuck:
      "Step aside and reset. Take a photo of the machine, translate it, and decide before you touch the screen again. If there is a staff member nearby, show your phone with a simple sentence.",
    note:
      "Many Japanese ticket machines are built for speed, not for first-time visitors. Stepping aside is often the smoothest move.",
  },
  {
    slug: "feeling-sick",
    title: "What to Do First When You Feel Sick in Japan",
    categoryCardTitle: "Get help when you feel sick",
    category: "help",
    meta: "Feeling sick while traveling in Japan? Learn how to tell nearby staff or your hotel, ask where to get help, and explain that you need assistance.",
    intro: [
      "If you feel sick during your trip, start by telling someone nearby instead of trying to handle everything alone.",
      "Staff at your hotel, a station, or a nearby facility may be able to help you find the right support.",
    ],
    firstMove: "Tell nearby staff or your hotel how you feel, then ask where to get help.",
    steps: [
      "Stop somewhere safe and tell nearby staff or your hotel that you feel sick.",
      "Use a short phrase and point to where you feel unwell if that helps.",
      "Ask where to get help, and contact your hotel or travel insurance if needed.",
      "For serious symptoms, ask for urgent help right away.",
    ],
    dont: [
      {
        title: "Don’t push yourself to keep moving.",
        body: "Stop in a safe place and tell someone nearby that you need help.",
      },
      {
        title: "Don’t guess about treatment or medicine.",
        body: "Ask staff, your hotel, travel insurance, or a medical professional where to get appropriate help.",
      },
      {
        title: "Don’t wait if symptoms feel serious or urgent.",
        body: "Ask staff or someone nearby to help you contact emergency services.",
      },
    ],
    sayShow: [
      {
        use: "Use when you need to tell someone that you feel unwell.",
        romaji: "Taichou ga warui desu.",
        japanese: "体調が悪いです。",
        english: "I feel sick.",
      },
      {
        use: "Use when you need immediate assistance.",
        romaji: "Tasukete kudasai.",
        japanese: "助けてください。",
        english: "I need help.",
      },
      {
        use: "Use when you need someone to contact help for you.",
        romaji: "Dareka tasuke o yonde moraemasu ka?",
        japanese: "誰か助けを呼んでもらえますか？",
        english: "Can you call someone for help?",
      },
    ],
    staff: [
      {
        japanese: "救急車を呼びますか？",
        romaji: "Kyuukyuusha o yobimasu ka?",
        means: "Should we call an ambulance?",
        move: "If it feels serious or urgent, say yes. If you are unsure, ask staff to help you get medical support.",
      },
      {
        japanese: "保険証はありますか？",
        romaji: "Hokenshou wa arimasu ka?",
        means: "Do you have health insurance information?",
        move: "Show your travel insurance information if you have it.",
      },
      {
        japanese: "病院に行きますか？",
        romaji: "Byouin ni ikimasu ka?",
        means: "Do you want to go to a hospital?",
        move: "Say yes if you need medical help.",
      },
    ],
    stuck:
      "Show the phrases on your phone and ask nearby staff or your hotel where to get help. Your travel insurance may also be able to direct you to appropriate support.",
    note:
      "Hotel, station, and facility staff may not provide medical advice, but they can often help you contact someone who can.",
    safetyNote:
      "This guide is for general travel help only. If symptoms feel serious or urgent, ask nearby staff or emergency services for help right away.",
  },
  {
    slug: "lost-something",
    title: "What to Do First If You Lose Something in Japan",
    categoryCardTitle: "Find a lost item",
    category: "help",
    meta: "Lost something while traveling in Japan? Learn what to do first, how to ask staff, and how to describe where and when you last had the item.",
    intro: [
      "If you notice that something is missing, act quickly while the last place you had it is still clear.",
      "Start with the shop, station, hotel, or facility where you last remember using or carrying it.",
    ],
    firstMove: "Go back to the last place you had it, then ask staff right away.",
    steps: [
      "Go back to the last place where you remember having the item.",
      "Ask staff right away and say what you lost.",
      "Tell them when and where you last had it. Show a photo if you have one.",
      "Ask whether there is a lost and found or another place you should check.",
    ],
    dont: [
      {
        title: "Don’t wait until the end of the day to ask.",
        body: "Staff can help more easily when you remember the place and time clearly.",
      },
      {
        title: "Don’t search staff-only or restricted areas yourself.",
        body: "Tell staff what is missing and let them check the appropriate area.",
      },
      {
        title: "Don’t leave without asking where to check next.",
        body: "The item may be sent to a station office, facility desk, or another lost and found.",
      },
    ],
    sayShow: [
      {
        use: "Use when you need to say that something is missing.",
        romaji: "Wasuremono o shimashita.",
        japanese: "忘れ物をしました。",
        english: "I lost something.",
      },
      {
        use: "Use when your bag is missing.",
        romaji: "Baggu o nakushimashita.",
        japanese: "バッグをなくしました。",
        english: "I lost my bag.",
      },
      {
        use: "Use when you need to find the lost and found desk.",
        romaji: "Wasuremono sentaa wa doko desu ka?",
        japanese: "忘れ物センターはどこですか？",
        english: "Where is the lost and found?",
      },
    ],
    staff: [
      {
        japanese: "何をなくしましたか？",
        romaji: "Nani o nakushimashita ka?",
        means: "What did you lose?",
        move: "Show a photo or describe the item.",
      },
      {
        japanese: "どこでなくしましたか？",
        romaji: "Doko de nakushimashita ka?",
        means: "Where did you lose it?",
        move: "Tell them the last place you remember having it.",
      },
      {
        japanese: "届いていません。",
        romaji: "Todoite imasen.",
        means: "It has not been turned in.",
        move: "Ask where else you can check, or when to check again.",
      },
    ],
    stuck:
      "Write down what the item looks like, when you last had it, and where you have already checked. Show this information to staff at the next lost and found desk.",
    note:
      "Lost items may stay at the shop or facility first, then move to another lost and found. Ask staff where and when to check again.",
    safetyNote:
      "If you lost a passport, wallet, phone, or other important item, ask your hotel or local staff what to do next. You may also need to contact the police, your embassy, or your card company.",
  },
];

const placeChoices = [
  {
    label: "Ramen shop",
    slug: "ramen-shop",
    description: "Ordering basics",
    iconSrc: "/assets/icons/place/icon-place-ramen.png",
  },
  {
    label: "Izakaya",
    slug: "izakaya",
    description: "Before ordering",
    iconSrc: "/assets/icons/place/icon-place-izakaya.png",
  },
  {
    label: "Station",
    href: "/move",
    category: "move",
    iconName: "categoryicon-move",
    description: "First steps",
    iconSrc: "/assets/icons/place/icon-place-station.png",
    largeIcon: true,
  },
  {
    label: "Bus stop",
    slug: "local-bus",
    description: "Boarding & payment",
    iconSrc: "/assets/icons/place/icon-place-bus-stop.png",
    largeIcon: true,
  },
  {
    label: "Coin lockers",
    slug: "coin-lockers",
    description: "Bag storage",
    iconSrc: "/assets/icons/place/icon-place-coin-locker.png",
    largeIcon: true,
  },
  {
    label: "Ticket machine",
    slug: "ticket-machine-no-english",
    description: "No English option",
    iconSrc: "/assets/icons/place/icon-place-ticket-machine.png",
    largeIcon: true,
  },
  {
    label: "Pharmacy",
    slug: "pharmacy",
    description: "Medicine help",
    iconSrc: "/assets/icons/place/icon-place-drugstore.png",
    largeIcon: true,
  },
  {
    label: "Onsen",
    slug: "onsen-sento",
    description: "Onsen basics",
    iconSrc: "/assets/icons/place/icon-place-onsen.png",
  },
];

const needChoices = [
  {
    label: "Order food",
    slug: "food",
    category: "food",
    href: "/food",
    track: "need_card_order_food",
    description: "Know what to check before ordering.",
    iconSrc: "/assets/icons/action/icon-action-order-food.png",
  },
  {
    label: "Pay correctly",
    slug: "how-to-pay",
    description: "Check where and how to pay.",
    iconSrc: "/assets/icons/action/icon-action-pay-correctly.png",
  },
  {
    label: "Explain food needs",
    slug: "food-cards",
    category: "food",
    href: "/food-cards",
    iconName: "categoryicon-food",
    iconSrc: "/assets/icons/action/icon-action-explain-food-needs.png",
    description: "Show allergies, dietary needs, or ingredients to check before ordering.",
  },
  {
    label: "Store luggage",
    slug: "coin-lockers",
    description: "Find a coin locker or storage option.",
    iconSrc: "/assets/icons/action/icon-action-store-luggage.png",
  },
  {
    label: "Ask for medicine",
    slug: "pharmacy",
    description: "Find the right words at a pharmacy.",
    iconSrc: "/assets/icons/action/icon-action-ask-medicine.png",
  },
  {
    label: "Use local transport",
    slug: "move",
    category: "move",
    href: "/move",
    track: "need_card_use_local_transport",
    description: "Use IC cards, routes, and stops with confidence.",
    iconSrc: "/assets/icons/action/icon-action-local-transport.png",
  },
];

const homeQuickPhrases = [
  {
    title: "Can I pay by card?",
    japanese: "カードで払えますか？",
    href: "/guides/how-to-pay",
  },
  {
    title: "Where is the meal ticket machine?",
    japanese: "券売機はどこですか？",
    href: "/guides/ramen-shop",
  },
  {
    title: "Do you have an English menu?",
    japanese: "英語のメニューはありますか？",
    href: "/food",
  },
  {
    title: "I have a food allergy.",
    japanese: "食物アレルギーがあります。",
    href: "/food-cards",
  },
];

const foodCards = [
  {
    id: "severe-allergy",
    title: "Severe allergy",
    label: "Severe",
    englishText: "I have a severe peanut allergy. Even a small amount or cross-contact may be dangerous.",
    japaneseText: "重度の食物アレルギーがあります。アレルギーのあるもの：落花生（ピーナッツ）。少量の混入や調理器具の共有でも危険です。対応が難しい場合は、無理に提供しなくて大丈夫です。",
    displayLines: [
      "重度の食物アレルギーがあります。",
      "",
      "アレルギーのあるもの：",
      "落花生（ピーナッツ）",
      "",
      "少量の混入や調理器具の共有でも",
      "危険です。",
      "",
      "対応が難しい場合は、",
      "無理に提供しなくて大丈夫です。",
    ],
    summary: "For a severe peanut allergy or cross-contact risk.",
    note: "Use when: you have a severe peanut allergy and cross-contact may be unsafe.",
    access: "free",
  },
  {
    id: "basic-food-allergy",
    title: "Basic food allergy",
    label: "Allergy",
    englishText: "I have a food allergy. Could you please check whether this contains the ingredient listed on the card?",
    japaneseText: "食物アレルギーがあります。避ける必要がある食材が入っていないか確認していただけますか？対応が難しい場合は、無理に提供しなくて大丈夫です。",
    summary: "For asking staff to check ingredients for an allergy.",
    note: "Use when: you need staff to check ingredients carefully.",
    access: "free",
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    label: "Vegetarian",
    englishText: "I do not eat meat or seafood. Could you please check fish broth, meat broth, and hidden ingredients?",
    japaneseText: "肉と魚介類を食べません。だし、肉エキス、魚介エキスなどが入っていないか確認していただけますか？対応が難しい場合は、無理に提供しなくて大丈夫です。",
    summary: "For avoiding meat, seafood, and fish-based broth.",
    note: "Use when: you avoid meat, seafood, and fish-based dashi.",
    access: "free",
  },
  {
    id: "vegan",
    title: "Vegan",
    label: "Vegan",
    englishText: "I do not eat meat, seafood, eggs, dairy, or animal-based dashi. Could you please check dashi and hidden ingredients?",
    japaneseText: "肉、魚介類、卵、乳製品、動物性のだしを食べません。だしや調味料に動物性のものが入っていないか確認していただけますか？対応が難しい場合は、無理に提供しなくて大丈夫です。",
    summary: "For avoiding meat, seafood, eggs, dairy, and animal-based dashi.",
    note: "Use when: you avoid all animal-derived ingredients.",
    access: "free",
  },
  {
    id: "no-pork",
    title: "No pork",
    label: "No pork",
    englishText: "I do not eat pork. Could you please check pork, pork broth, lard, and pork extract?",
    japaneseText: "豚肉を食べません。豚肉、豚骨スープ、ラード、ポークエキスが入っていないか確認していただけますか？対応が難しい場合は、無理に提供しなくて大丈夫です。",
    summary: "For avoiding pork, ham, lard, or pork broth.",
    note: "Use when: you avoid pork, pork broth, lard, or extract.",
    access: "free",
  },
  {
    id: "no-alcohol",
    title: "No alcohol",
    label: "No alcohol",
    englishText: "I cannot consume alcohol. Could you please check cooking sake, mirin, and alcohol-based ingredients?",
    japaneseText: "アルコールを摂取できません。料理酒、みりん、アルコールを含む調味料が使われていないか確認していただけますか？対応が難しい場合は、無理に提供しなくて大丈夫です。",
    summary: "For avoiding alcohol in drinks, sauces, or seasoning.",
    note: "Use when: you avoid alcohol in drinks, sauces, or seasoning.",
    access: "free",
  },
  {
    id: "ask-dashi",
    title: "Ask about dashi",
    label: "Dashi",
    englishText: "Does this contain animal-based broth or dashi?",
    japaneseText: "これは動物性のだしが入っていますか？",
    summary: "For checking if a dish contains animal-based broth or dashi.",
    note: "Use when: a dish may contain animal-based broth or dashi.",
    access: "free",
  },
  {
    id: "shared-oil-tools",
    title: "Shared oil or tools",
    label: "Shared tools",
    englishText: "Is this cooked with shared oil or shared cooking tools?",
    japaneseText: "同じ油や調理器具を使っていますか？",
    summary: "For checking shared oil, pans, or cooking tools.",
    note: "Use when: you need to check shared oil or cooking tools.",
    access: "free",
  },
];

const popularFoodCardIds = ["severe-allergy", "vegetarian", "ask-dashi"];
const popularFoodCards = popularFoodCardIds.map((id) => foodCards.find((card) => card.id === id)).filter(Boolean);

const foodCardDisclaimer = {
  english:
    "These cards help you communicate your food needs, but they do not guarantee food safety. Staff still need to confirm ingredients and preparation. If you have a severe allergy, please confirm carefully before eating.",
  japanese:
    "このカードは食事制限やアレルギーを伝えるための補助です。アレルゲンの完全除去や食品の安全性を保証するものではありません。食材や調理方法については、必ずお店の方にも確認してください。",
};

const foodCtaByGuide = {
  "ramen-shop":
    "Ramen soup often contains pork, chicken, or fish broth. If you have allergies or dietary restrictions, show a simple Japanese card before ordering.",
  izakaya:
    "Small dishes such as otoshi may contain fish, egg, meat, or alcohol. Use a simple Japanese card to explain what you need to avoid.",
  "restaurant-full":
    "If you choose another restaurant, show allergies, dietary needs, or ingredients to check before ordering. A short Japanese card can make the first check easier.",
  "how-to-pay":
    "After you order, it may be hard to change the dish. If you need to avoid ingredients, show a simple Japanese card before ordering.",
};

const foodPhraseCards = [
  {
    title: "Can I pay by card?",
    japanese: "カードで払えますか？",
    english: "Use before ordering or at the register.",
  },
  {
    title: "Can I wait here?",
    japanese: "ここで待ってもいいですか？",
    english: "Use when the line is unclear.",
  },
  {
    title: "Do you have an English menu?",
    japanese: "英語のメニューはありますか？",
    english: "Use before ordering.",
  },
  {
    title: "Is there a table charge?",
    japanese: "席料はありますか？",
    english: "Use at izakaya or small restaurants.",
  },
  {
    title: "Does this contain fish broth?",
    japanese: "これは魚のだしが入っていますか？",
    english: "Use before ordering soup or noodles.",
  },
  {
    title: "Does this contain pork?",
    japanese: "これは豚肉が入っていますか？",
    english: "Use for ramen, gyoza, curry, or sauces.",
  },
];

const helpPhraseCards = [
  {
    title: "I need help.",
    japanese: "助けてください。",
    english: "Use when you need immediate help.",
  },
  {
    title: "I’m lost.",
    japanese: "道に迷いました。",
    english: "Use when you need directions.",
  },
  {
    title: "I’m having trouble paying.",
    japanese: "支払いがうまくできません。",
    english: "Use when payment is not working.",
  },
  {
    title: "I feel sick.",
    japanese: "体調が悪いです。",
    english: "Use at a pharmacy, hotel, or station.",
  },
  {
    title: "I lost something.",
    japanese: "忘れ物をしました。",
    english: "Use when you left something behind.",
  },
  {
    title: "Can you write it down?",
    japanese: "書いていただけますか？",
    english: "Use when spoken Japanese is unclear.",
  },
  {
    title: "Is there someone who speaks English?",
    japanese: "英語を話せる人はいますか？",
    english: "Use when you need English support.",
  },
];

const customFoodCardTypes = [
  {
    id: "cannotEat",
    label: "I cannot eat these items",
    subtext: "For allergies, intolerance, or dietary restrictions.",
  },
  {
    id: "ingredientCheck",
    label: "Ask if these items are included",
    subtext: "Ask if the dish contains these items.",
  },
  {
    id: "sharedTools",
    label: "Ask about shared tools or oil",
    subtext: "Ask about shared cooking tools or frying oil.",
  },
  {
    id: "preference",
    label: "I prefer to avoid these items",
    subtext: "For dislikes or preferences, not allergies.",
  },
];

const customFoodCardReasons = [
  { id: "severe", label: "Severe allergy" },
  { id: "allergy", label: "Allergy / intolerance" },
  { id: "dietary", label: "Dietary restriction" },
];

const customFoodCardCategoryMeta = {
  popular: "Popular in Japan",
  meat: "Meat & animal products",
  seafood: "Seafood & dashi",
  dairyEgg: "Dairy & egg",
  grains: "Grains & gluten",
  nutsSeeds: "Nuts & seeds",
  fruit: "Fruit",
  seasonings: "Seasonings & alcohol",
  preferences: "Preferences",
};

const customFoodCardIngredientCategories = [
  "popular",
  "meat",
  "seafood",
  "dairyEgg",
  "grains",
  "nutsSeeds",
  "fruit",
  "seasonings",
  "preferences",
];

const customFoodCardPopularIngredientIds = [
  "pork",
  "fish-based-dashi",
  "animal-based-dashi",
  "bonito-flakes",
  "alcohol",
  "mirin-sake",
  "wheat-gluten",
  "soba",
  "soy-sauce",
  "sesame",
  "gelatin",
  "lard",
  "japanese-yam",
];

const ingredients = [
  {
    id: "meat",
    labelEn: "All meat",
    labelJa: "肉類全般",
    category: "meat",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "pork",
    labelEn: "Pork",
    labelJa: "豚肉",
    category: "meat",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "beef",
    labelEn: "Beef",
    labelJa: "牛肉",
    category: "meat",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "chicken",
    labelEn: "Chicken",
    labelJa: "鶏肉",
    category: "meat",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "lamb",
    labelEn: "Lamb",
    labelJa: "羊肉",
    category: "meat",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "animal-fat",
    labelEn: "Animal fat",
    labelJa: "動物性脂肪",
    category: "meat",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "lard",
    labelEn: "Lard",
    labelJa: "ラード",
    category: "meat",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "gelatin",
    labelEn: "Gelatin",
    labelJa: "ゼラチン",
    category: "meat",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "animal-based-dashi",
    labelEn: "Animal-based dashi",
    labelJa: "動物性のだし",
    category: "meat",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "fish",
    labelEn: "All fish",
    labelJa: "魚全般",
    category: "seafood",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "seafood",
    labelEn: "All seafood",
    labelJa: "魚介類全般",
    category: "seafood",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "shellfish",
    labelEn: "Shellfish",
    labelJa: "甲殻類・貝類",
    category: "seafood",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "shrimp-crab",
    labelEn: "Shrimp / crab",
    labelJa: "えび・かに",
    category: "seafood",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "squid-octopus",
    labelEn: "Squid / octopus",
    labelJa: "いか・たこ",
    category: "seafood",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "fish-based-dashi",
    labelEn: "Fish-based dashi",
    labelJa: "魚のだし",
    category: "seafood",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "bonito-flakes",
    labelEn: "Bonito flakes",
    labelJa: "かつお節",
    category: "seafood",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "fish-sauce",
    labelEn: "Fish sauce",
    labelJa: "魚醤",
    category: "seafood",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "roe",
    labelEn: "Roe / fish eggs",
    labelJa: "魚卵",
    category: "seafood",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "raw-fish",
    labelEn: "Raw fish",
    labelJa: "生魚",
    category: "seafood",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "preference"],
  },
  {
    id: "dairy-milk",
    labelEn: "Dairy / milk",
    labelJa: "乳製品・牛乳",
    category: "dairyEgg",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "cheese",
    labelEn: "Cheese",
    labelJa: "チーズ",
    category: "dairyEgg",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "butter",
    labelEn: "Butter",
    labelJa: "バター",
    category: "dairyEgg",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "cream",
    labelEn: "Cream",
    labelJa: "クリーム",
    category: "dairyEgg",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "egg",
    labelEn: "Egg",
    labelJa: "卵",
    category: "dairyEgg",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "raw-egg",
    labelEn: "Raw egg",
    labelJa: "生卵",
    category: "dairyEgg",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "preference"],
  },
  {
    id: "mayonnaise",
    labelEn: "Mayonnaise",
    labelJa: "マヨネーズ",
    category: "dairyEgg",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck"],
  },
  {
    id: "wheat-gluten",
    labelEn: "Wheat / gluten",
    labelJa: "小麦・グルテン",
    category: "grains",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "soba",
    labelEn: "Soba",
    labelJa: "そば",
    category: "grains",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "barley",
    labelEn: "Barley",
    labelJa: "大麦",
    category: "grains",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "rye",
    labelEn: "Rye",
    labelJa: "ライ麦",
    category: "grains",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "peanuts",
    labelEn: "Peanuts",
    labelJa: "落花生（ピーナッツ）",
    category: "nutsSeeds",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "tree-nuts",
    labelEn: "Tree nuts",
    labelJa: "木の実類",
    category: "nutsSeeds",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "walnuts",
    labelEn: "Walnuts",
    labelJa: "くるみ",
    category: "nutsSeeds",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "almonds",
    labelEn: "Almonds",
    labelJa: "アーモンド",
    category: "nutsSeeds",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "cashews",
    labelEn: "Cashews",
    labelJa: "カシューナッツ",
    category: "nutsSeeds",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "sesame",
    labelEn: "Sesame",
    labelJa: "ごま",
    category: "nutsSeeds",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "fruit",
    labelEn: "Fruit",
    labelJa: "果物",
    category: "fruit",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "peach",
    labelEn: "Peach",
    labelJa: "もも",
    category: "fruit",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "apple",
    labelEn: "Apple",
    labelJa: "りんご",
    category: "fruit",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "kiwi",
    labelEn: "Kiwi",
    labelJa: "キウイ",
    category: "fruit",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "banana",
    labelEn: "Banana",
    labelJa: "バナナ",
    category: "fruit",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "orange",
    labelEn: "Orange",
    labelJa: "オレンジ",
    category: "fruit",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "mango",
    labelEn: "Mango",
    labelJa: "マンゴー",
    category: "fruit",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools"],
  },
  {
    id: "soy",
    labelEn: "Soy",
    labelJa: "大豆",
    category: "seasonings",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck"],
  },
  {
    id: "soy-sauce",
    labelEn: "Soy sauce",
    labelJa: "醤油",
    category: "seasonings",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck"],
  },
  {
    id: "miso",
    labelEn: "Miso",
    labelJa: "味噌",
    category: "seasonings",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck"],
  },
  {
    id: "alcohol",
    labelEn: "Alcohol",
    labelJa: "アルコール",
    category: "seasonings",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck"],
  },
  {
    id: "mirin-sake",
    labelEn: "Mirin / sake",
    labelJa: "みりん・酒",
    category: "seasonings",
    popular: true,
    allowedTypes: ["cannotEat", "ingredientCheck"],
  },
  {
    id: "honey",
    labelEn: "Honey",
    labelJa: "はちみつ",
    category: "seasonings",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "preference"],
  },
  {
    id: "vinegar",
    labelEn: "Vinegar",
    labelJa: "酢",
    category: "seasonings",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck"],
  },
  {
    id: "spicy-seasoning",
    labelEn: "Spicy seasoning",
    labelJa: "辛い調味料",
    category: "seasonings",
    popular: false,
    allowedTypes: ["ingredientCheck", "preference"],
  },
  {
    id: "wasabi",
    labelEn: "Wasabi",
    labelJa: "わさび",
    category: "seasonings",
    popular: false,
    allowedTypes: ["ingredientCheck", "preference"],
  },
  {
    id: "spicy-food",
    labelEn: "Spicy food",
    labelJa: "辛いもの",
    category: "preferences",
    popular: false,
    allowedTypes: ["preference"],
  },
  {
    id: "rare-raw-meat",
    labelEn: "Rare or raw meat",
    labelJa: "生肉・レア肉",
    category: "preferences",
    popular: false,
    allowedTypes: ["ingredientCheck", "preference"],
  },
  {
    id: "japanese-yam",
    labelEn: "Japanese yam",
    labelJa: "山芋・長芋",
    category: "popular",
    popular: false,
    allowedTypes: ["cannotEat", "ingredientCheck", "sharedTools", "preference"],
  },
  {
    id: "raw-onion",
    labelEn: "Raw onion",
    labelJa: "生の玉ねぎ",
    category: "preferences",
    popular: false,
    allowedTypes: ["ingredientCheck", "preference"],
  },
  {
    id: "green-onion",
    labelEn: "Green onion / scallion",
    labelJa: "ねぎ",
    category: "preferences",
    popular: false,
    allowedTypes: ["ingredientCheck", "preference"],
  },
  {
    id: "garlic",
    labelEn: "Garlic",
    labelJa: "にんにく",
    category: "preferences",
    popular: false,
    allowedTypes: ["ingredientCheck", "preference"],
  },
  {
    id: "cilantro",
    labelEn: "Cilantro / coriander",
    labelJa: "パクチー",
    category: "preferences",
    popular: false,
    allowedTypes: ["ingredientCheck", "preference"],
  },
];

const customFoodCardState = {
  step: 1,
  cardType: "",
  reason: "",
  selectedIngredientIds: [],
  safetyAgreed: false,
  purchaseReviewAgreed: false,
  sampleMode: false,
  showMode: false,
  error: "",
  saveMessage: "",
  checkoutStatus: "",
  checkoutMessage: "",
  checkoutError: "",
  imagePreviewUrl: "",
  imagePreviewFile: null,
  openCategoryIds: ["popular"],
};

const customFoodCardDraftStorageKey = "jfmCustomFoodCardDraft";
const customFoodCardCheckoutStorageKey = "jfmCustomFoodCardCheckoutDraft";

const movePhraseCards = [
  {
    title: "How do I get here?",
    japanese: "ここに行きたいです。行き方を教えてください。",
    english: "Show a map, address, hotel, or station.",
  },
  {
    title: "Which exit should I use for ___?",
    japanese: "〇〇に行くには、どの出口が近いですか？",
    english: "Use before leaving the station. Replace ___ with your destination.",
  },
  {
    title: "Is this the right platform for ___?",
    japanese: "〇〇に行くには、このホームで合っていますか？",
    english: "Check before boarding. Replace ___ with your destination.",
  },
  {
    title: "Where is the bus stop?",
    japanese: "バス停はどこにありますか？",
    english: "Use when you cannot spot the stop.",
  },
  {
    title: "Where is the taxi stand?",
    japanese: "タクシー乗り場はどこにありますか？",
    english: "Use at stations, hotels, or airports.",
  },
  {
    title: "Can I use this ticket?",
    japanese: "このチケットは使えますか？",
    english: "Use for tickets, passes, or QR codes.",
  },
];

const relaxPhraseCards = [
  {
    title: "Are tattoos okay here?",
    japanese: "タトゥーがあっても利用できますか？",
    english: "Use before paying.",
  },
  {
    title: "Where do I take off my shoes?",
    japanese: "どこで靴を脱げばいいですか？",
    english: "Use before entering.",
  },
  {
    title: "Do I need a towel?",
    japanese: "タオルは必要ですか？",
    english: "Use before a bath, sauna, or changing room.",
  },
  {
    title: "Is it okay to sit here?",
    japanese: "ここに座っても大丈夫ですか？",
    english: "Use before sitting in a public or shared space.",
  },
  {
    title: "Can I leave my luggage here?",
    japanese: "荷物をここに置いても大丈夫ですか？",
    english: "Use at hotels, counters, or rest areas.",
  },
  {
    title: "Is there a place to rest nearby?",
    japanese: "近くに休憩できる場所はありますか？",
    english: "Ask at a station, shop, hotel, or information counter.",
  },
];

const culturePhraseCards = [
  {
    title: "Can I take photos?",
    japanese: "写真を撮っても大丈夫ですか？",
    english: "Use before taking photos.",
  },
  {
    title: "Is it okay to enter here?",
    japanese: "ここに入っても大丈夫ですか？",
    english: "Use before entering.",
  },
  {
    title: "Where should I line up?",
    japanese: "どこに並べばいいですか？",
    english: "Use when the line or waiting area is unclear.",
  },
  {
    title: "How do I pray here?",
    japanese: "お参りの仕方を教えてもらえますか？",
    english: "Use when you want to pray respectfully.",
  },
  {
    title: "Can I touch this?",
    japanese: "触っても大丈夫ですか？",
    english: "Use before touching objects or displays.",
  },
  {
    title: "Should I be quiet here?",
    japanese: "ここでは静かにした方がいいですか？",
    english: "Use in temples, shrines, or quiet spaces.",
  },
];

const partPngPath = "/assets/ui/PNG/";

const placeIconBySlug = {
  "ramen-shop": "icon-ramen",
  izakaya: "icon-izakaya",
  "onsen-sento": "icon-onsen",
  "local-bus": "icon-bus",
  shrine: "icon-shrine",
  pharmacy: "icon-pharmacy",
  "coin-lockers": "icon-locker",
  "ticket-machine-no-english": "icon-ticket",
};

const needIconBySlug = {
  "ramen-shop": "needtoicon_orderfood",
  izakaya: "needtoicon_orderdrink",
  "restaurant-full": "needtoicon_full",
  "how-to-pay": "needtoicon_pay",
  "local-bus": "needtoicon_bus",
  "coin-lockers": "needtoicon_luggage",
  pharmacy: "needtoicon_medicine",
  "ticket-machine-no-english": "needtoicon_noenglish",
};

const categoryIconById = {
  food: "categoryicon-food",
  move: "categoryicon-move",
  relax: "categoryicon-relax",
  culture: "categoryicon-culture",
  help: "categoryicon-help",
};

const foodGuideIconBySlug = {
  "ramen-shop": { src: "/assets/icons/place/icon-place-ramen.png" },
  izakaya: { src: "/assets/icons/place/icon-place-izakaya.png" },
  "restaurant-full": { src: "/assets/icons/place/icon-place-full.png" },
  "how-to-pay": { src: "/assets/icons/action/icon-action-pay-correctly.png" },
  "food-cards": { src: "/assets/icons/action/icon-action-explain-food-needs.png" },
};

const categoryGuideIconBySlug = {
  "local-bus": { src: "/assets/icons/place/icon-place-bus-stop.png" },
  "find-right-platform": { src: "/assets/icons/action/icon-action-platform.png" },
  "find-right-exit": { src: "/assets/icons/action/icon-action-exit.png" },
  "charge-ic-card": { src: "/assets/icons/action/icon-action-IC-card.png" },
  "coin-lockers": { src: "/assets/icons/place/icon-place-coin-locker.png" },
  "ticket-machine-no-english": { src: "/assets/icons/place/icon-place-ticket-machine.png" },
  "onsen-sento": { src: "/assets/icons/place/icon-place-onsen.png" },
  "short-break": { src: "/assets/icons/action/icon-action-Short-Break.png" },
  shrine: { src: "/assets/icons/place/icon-place-shrine.png" },
  "photo-manners": { src: "/assets/icons/action/icon-action-Taking-Photos.png" },
  pharmacy: { src: "/assets/icons/place/icon-place-drugstore.png" },
  "feeling-sick": { src: "/assets/icons/action/icon-action-Feel-Sick-white.png" },
  "lost-something": { src: "/assets/icons/action/icon-action-Lost-Something.png" },
};

const categoryMap = Object.fromEntries(categories.map((category) => [category.id, category]));
const guideMap = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));

const foodFirstMoveCards = [
  {
    ...guideMap["ramen-shop"],
    cardTitle: "Ramen shop",
    cardDescription: "Order ramen and know what to do first.",
  },
  {
    ...guideMap.izakaya,
    cardTitle: "Izakaya",
    cardDescription: "Order your first drink and small dishes.",
  },
  {
    ...guideMap["restaurant-full"],
    cardTitle: "Restaurant full",
    cardDescription: "Understand when a restaurant is full.",
  },
  {
    ...guideMap["how-to-pay"],
    cardTitle: "Pay correctly",
    cardDescription: "Check where and how to pay.",
  },
  {
    slug: "food-cards",
    category: "food",
    cardTitle: "Explain food needs",
    cardDescription: "Show allergies, dietary needs, or ingredients to check before ordering.",
    href: "/food-cards",
  },
];
const foodCardMap = Object.fromEntries(foodCards.map((card) => [card.id, card]));
const app = document.querySelector("#app");
const siteHeader = document.querySelector(".site-header");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileSiteMenu = document.querySelector(".mobile-site-menu");

function setMobileMenuOpen(isOpen) {
  if (!mobileMenuToggle || !mobileSiteMenu) {
    return;
  }

  mobileSiteMenu.hidden = !isOpen;
  mobileMenuToggle.classList.toggle("is-open", isOpen);
  mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  document.body.classList.toggle("is-mobile-menu-open", isOpen);
}

function closeMobileMenu() {
  setMobileMenuOpen(false);
}

mobileMenuToggle?.addEventListener("click", () => {
  setMobileMenuOpen(mobileMenuToggle.getAttribute("aria-expanded") !== "true");
});

mobileSiteMenu?.addEventListener("click", (event) => {
  const link = event.target.closest?.("a");
  if (!link) {
    return;
  }

  closeMobileMenu();
});

document.addEventListener("click", (event) => {
  const link = event.target.closest?.("a");
  if (link && shouldHandleAppLink(event, link)) {
    event.preventDefault();
    navigateToUrl(new URL(link.getAttribute("href"), window.location.href));
    return;
  }

  if (mobileMenuToggle?.getAttribute("aria-expanded") === "true" && !siteHeader?.contains(event.target)) {
    closeMobileMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

window.matchMedia("(min-width: 641px)").addEventListener("change", (event) => {
  if (event.matches) {
    closeMobileMenu();
  }
});

document.querySelector(".skip-link").addEventListener("click", (event) => {
  event.preventDefault();
  app.focus();
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function trackAttr(value) {
  return `data-track="${escapeHtml(value)}"`;
}

function categoryName(id) {
  return categoryMap[id]?.name ?? id;
}

function categoryIcon(id) {
  return categoryMap[id]?.icon ?? "•";
}

function categoryHref(id) {
  return `/${id}`;
}

function routePathFromUrl(url) {
  const pathname = url.pathname.replace(/\/+$/, "") || "/";
  return `${pathname}${url.search}`;
}

function routePartsFromPathname() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  if (pathname === "/") {
    return [];
  }

  return pathname.replace(/^\/+/, "").split("/").filter(Boolean).map((part) => decodeURIComponent(part));
}

function shouldHandleAppLink(event, link) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    link.hasAttribute("download")
  ) {
    return false;
  }

  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) {
    return false;
  }

  const target = link.getAttribute("target");
  if (target && target !== "_self") {
    return false;
  }

  const url = new URL(href, window.location.href);
  return url.origin === window.location.origin;
}

function navigateToUrl(url) {
  const nextRoutePath = routePathFromUrl(url);
  const currentRoutePath = routePathFromUrl(window.location);
  const nextHistoryPath = `${url.pathname}${url.search}`;
  const currentHistoryPath = `${window.location.pathname}${window.location.search}`;
  if (nextRoutePath !== currentRoutePath || nextHistoryPath !== currentHistoryPath) {
    window.history.pushState({}, "", nextHistoryPath);
  }
  router({ restoreCustomFoodCardDraft: false });
}

function pngImage(name, className, alt = "") {
  return `<img class="${className}" src="${partPngPath}${name}.png" srcset="${partPngPath}${name}@2x.png 2x" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">`;
}

function assetImage(src, className) {
  return `<img class="${className}" src="${escapeHtml(src)}" alt="" loading="lazy" decoding="async">`;
}

function guideCard(guide) {
  return `
    <a class="guide-card category-${guide.category}" href="/guides/${guide.slug}">
      <span class="category-chip">${escapeHtml(categoryName(guide.category))}</span>
      <h3>${escapeHtml(guide.title)}</h3>
      <div>
        <span class="first-move-label">First move</span>
        <p>${escapeHtml(guide.firstMove)}</p>
      </div>
    </a>
  `;
}

function foodGuideIconMarkup(guide) {
  const icon = foodGuideIconBySlug[guide.slug];
  if (icon?.src) {
    return assetImage(icon.src, "food-guide-card-icon-img");
  }
  return pngImage(icon?.part ?? needIconBySlug[guide.slug] ?? categoryIconById[guide.category], "food-guide-card-icon-img");
}

function categoryGuideIconMarkup(guide) {
  const icon = categoryGuideIconBySlug[guide.slug];
  if (icon?.src) {
    return assetImage(icon.src, "category-guide-card-icon-img");
  }
  return pngImage(
    icon?.part ?? placeIconBySlug[guide.slug] ?? needIconBySlug[guide.slug] ?? categoryIconById[guide.category],
    "category-guide-card-icon-img",
  );
}

function guideIconConfig(guide) {
  return foodGuideIconBySlug[guide.slug] ?? categoryGuideIconBySlug[guide.slug];
}

function guideIntroIconMarkup(guide) {
  const icon = guideIconConfig(guide);
  if (icon?.src) {
    return assetImage(icon.src, "guide-intro-icon");
  }
  return pngImage(
    icon?.part ?? placeIconBySlug[guide.slug] ?? needIconBySlug[guide.slug] ?? categoryIconById[guide.category],
    "guide-intro-icon",
  );
}

function categoryTopGuideCard(guide) {
  const iconMarkup = categoryGuideIconMarkup(guide);
  const title = guide.categoryCardTitle ?? guide.title;
  const description = guide.categoryCardDescription ?? guide.firstMove;
  return `
    <a class="guide-card category-guide-card category-${guide.category} guide-${guide.slug}" href="/guides/${guide.slug}">
      <span class="category-guide-card-icon" aria-hidden="true">${iconMarkup}</span>
      <h3>${escapeHtml(title)}</h3>
      <div class="category-guide-card-first-move">
        <p>${escapeHtml(description)}</p>
      </div>
    </a>
  `;
}

function foodGuideCard(guide) {
  const iconMarkup = foodGuideIconMarkup(guide);
  const href = guide.href ?? `/guides/${guide.slug}`;
  const title = guide.cardTitle ?? guide.title;
  const description = guide.cardDescription ?? guide.firstMove;
  return `
    <a class="guide-card food-guide-card category-${guide.category} guide-${guide.slug}" href="${href}">
      <span class="food-guide-card-icon" aria-hidden="true">${iconMarkup}</span>
      <h3>${escapeHtml(title)}</h3>
      <div class="food-guide-card-first-move">
        <p>${escapeHtml(description)}</p>
      </div>
    </a>
  `;
}

function categoryCard(category) {
  const count = guides.filter((guide) => guide.category === category.id).length;
  const homeDescriptions = {
    food: "Ordering, allergies, payment, and dining basics.",
    move: "Trains, buses, taxis, lockers, and stations.",
    relax: "Rest, recover, onsen, and quiet spaces.",
    culture: "Shrines, photos, entry rules, and local manners.",
    help: "Simple help for confusing travel moments.",
  };
  return `
    <a class="category-card category-${category.id}" href="${categoryHref(category.id)}">
      <span class="category-chip">${count} guide${count === 1 ? "" : "s"}</span>
      <h3>${escapeHtml(category.name)}</h3>
      <p>${escapeHtml(homeDescriptions[category.id] ?? category.description)}</p>
    </a>
  `;
}

function foodCardCtaPanel({ context = "home", includeSamplesLink = true } = {}) {
  const isGuide = context === "guide";
  const isFoodCategory = context === "food";
  const isFoodCardsPage = context === "foodCards";
  const titleId = context === "home"
    ? ' id="custom-food-card-title"'
    : isFoodCategory
      ? ' id="food-category-food-card-title"'
      : isFoodCardsPage
        ? ' id="food-card-builder-title"'
        : "";
  const createTrack = isGuide
    ? "guide_food_card_create"
    : isFoodCategory
      ? "food_custom_card_create"
      : isFoodCardsPage
        ? "food_cards_create"
        : "home_custom_food_card_create";
  const samplesTrack = isGuide ? "guide_food_card_samples" : isFoodCategory ? "food_sample_cards_view" : "home_custom_food_card_samples";
  const heading = isFoodCardsPage ? "Create your own card" : "Create a food card for Japan";
  const description = "Show allergies, dietary needs, or ingredients to check before ordering.";
  return `
    <div class="food-card-cta-panel shared-food-card-cta">
      <span class="food-card-ribbon">Food needs</span>
      <div class="food-card-cta-content">
        <h2${titleId}>${heading}</h2>
        <p>${description}</p>
        <div class="food-card-benefits" aria-label="Food card benefits">
          <span>No app needed</span>
          <span>Save as image</span>
          <span>Show in Japanese</span>
        </div>
        <div class="section-actions">
          <a class="button primary" href="/food-card/custom/" ${trackAttr(createTrack)}>Create my card</a>
          ${includeSamplesLink ? `<a class="food-card-sample-link" href="/food-cards" ${trackAttr(samplesTrack)}>See sample cards</a>` : ""}
        </div>
      </div>
    </div>
  `;
}

function categoryExplorerSection(currentCategoryId) {
  const otherCategories = categories.filter((category) => category.id !== currentCategoryId);

  return `
    <section class="category-explorer" aria-labelledby="category-explorer-title">
      <div class="section-header">
        <div>
          <h2 id="category-explorer-title">Need something else?</h2>
        </div>
      </div>
      <div class="category-grid category-explorer-grid">
        ${otherCategories.map((category) => categoryCard(category)).join("")}
      </div>
    </section>
  `;
}

function categoryLinkCard(category, currentCategoryId) {
  const count = guides.filter((guide) => guide.category === category.id).length;

  return `
    <a class="category-link-card category-${category.id}" href="${categoryHref(category.id)}" ${trackAttr(`category_explorer_${currentCategoryId}_${category.id}`)}>
      <span class="category-chip">${count} guide${count === 1 ? "" : "s"}</span>
      <strong>${escapeHtml(category.name)}</strong>
      <small>${escapeHtml(category.description)}</small>
    </a>
  `;
}

function renderHome() {
  app.innerHTML = `
    <div class="page-shell home-page">
      <section class="hero poster-hero layout-container">
        <div class="poster-cover">
          <div class="poster-meta">
            <span>2026</span>
            <span>English guide / Real-life Japan / First moves</span>
          </div>
          <p class="eyebrow">Japan First Move</p>
          <h1 class="hero-title" aria-label="What’s your first move?">
            <span class="hero-title-line hero-title-line-first" aria-hidden="true">
              <span class="hero-title-word">
                <span class="hero-title-letter-w">W</span><span class="hero-title-letter-h">h</span><span class="hero-title-letter-a">a</span><span class="hero-title-letter-t">t</span><span class="hero-title-letter-apostrophe">’</span><span class="hero-title-letter-s">s</span>
              </span>
              <span class="hero-title-your">your</span>
            </span>
            <span class="hero-title-line hero-title-line-second" aria-hidden="true">first move?</span>
          </h1>
          <p class="lead">Simple first moves for real-life Japan moments.</p>
          <div class="hero-visual" aria-hidden="true">
            <img class="hero-visual-img hero-visual-img-1" src="/sozai/hero/hero-mobile-ramen.png" alt="" />
            <img class="hero-visual-img hero-visual-img-2" src="/sozai/hero/hero-mobile-izakaya.png" alt="" />
            <img class="hero-visual-img hero-visual-img-3" src="/sozai/hero/hero-mobile-onsen.png" alt="" />
            <img class="hero-visual-img hero-visual-img-4" src="/sozai/hero/hero-mobile-torii.png" alt="" />
          </div>
          <div class="poster-wordmark" aria-hidden="true">JAPAN</div>
        </div>
      </section>

      <section class="section finder-section layout-container" aria-label="Find your first move">
        <div class="finder-panel">
          <div class="finder-groups">
            <div class="finder-group finder-places" aria-labelledby="places-title">
              <div class="finder-group-header">
                <h3 id="places-title">I’m at...</h3>
                <p>Choose the closest place.</p>
              </div>
              <div class="choice-grid">
                ${placeChoices.map(choiceButton).join("")}
              </div>
            </div>

            <div class="finder-group finder-actions" aria-labelledby="needs-title">
              <div class="finder-group-header">
                <h3 id="needs-title">I need to...</h3>
                <p>Pick the action closest to your moment.</p>
              </div>
              <div class="need-grid">
                ${needChoices.map(needCard).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section food-card-cta-section card-container" aria-labelledby="custom-food-card-title">
        ${foodCardCtaPanel()}
      </section>

      <section class="section categories-section layout-container" aria-labelledby="categories-title">
        <div class="section-header">
          <div>
            <h2 id="categories-title">Explore more first moves</h2>
          </div>
          <p>Browse simple guides by topic.</p>
        </div>
        <div class="category-grid">
          ${categories.map(categoryCard).join("")}
        </div>
      </section>

      <section class="section quick-phrases-section layout-container" aria-labelledby="quick-phrases-title">
        <div class="section-header">
          <div>
            <h2 id="quick-phrases-title">Quick phrases</h2>
          </div>
          <p>Short phrases for quick checks.</p>
        </div>
        <div class="quick-phrase-grid">
          ${homeQuickPhrases.map(homeQuickPhraseCard).join("")}
        </div>
      </section>
    </div>
  `;
}

function choiceButton(choice) {
  const guide = guideMap[choice.slug];
  const category = choice.category ?? guide?.category ?? "move";
  const href = choice.href ?? `/guides/${choice.slug}`;
  const iconName = choice.iconName ?? placeIconBySlug[choice.slug] ?? categoryIconById[category];
  const iconMarkup = choice.iconSrc ? assetImage(choice.iconSrc, "place-card-icon") : pngImage(iconName, "card-pict-img");
  const iconSizeClass = choice.largeIcon ? " is-place-icon-large" : "";
  return `
    <a class="choice-button category-${category} guide-${choice.slug ?? category}" href="${href}">
      <span>${escapeHtml(choice.label)}</span>
      <span class="card-pict place-card-pict${iconSizeClass}" aria-hidden="true">${iconMarkup}</span>
      <small>${escapeHtml(choice.description ?? categoryName(category))}</small>
    </a>
  `;
}

function needCard(choice) {
  const category = choice.category ?? guideMap[choice.slug]?.category;
  const iconName = choice.iconName ?? needIconBySlug[choice.slug];
  const href = choice.href ?? `/guides/${choice.slug}`;
  const track = choice.track ?? `need_card_${choice.slug}`;
  const label = choice.labelLines
    ? choice.labelLines.map((line) => `<span>${escapeHtml(line)}</span>`).join(" ")
    : escapeHtml(choice.label);
  const iconMarkup = choice.iconSrc ? assetImage(choice.iconSrc, "action-card-icon") : pngImage(iconName, "card-pict-img");
  return `
    <a class="need-card category-${category} guide-${choice.slug}" href="${href}" ${trackAttr(track)}>
      <span class="card-pict" aria-hidden="true">${iconMarkup}</span>
      <span class="need-card-copy">
        <strong>${label}</strong>
        <span>${escapeHtml(choice.description ?? categoryName(category))}</span>
      </span>
    </a>
  `;
}

function homeQuickPhraseCard(phrase) {
  return `
    <a class="quick-phrase-card" href="${phrase.href}" ${trackAttr(`home_quick_phrase_${phrase.title.toLowerCase().replaceAll(" ", "_")}`)}>
      <strong class="translation">${escapeHtml(phrase.title)}</strong>
      <span class="jp">${escapeHtml(phrase.japanese)}</span>
    </a>
  `;
}

function renderCategory(categoryId) {
  if (categoryId === "food") {
    renderFoodCategory();
    return;
  }

  if (categoryId === "move") {
    renderMoveCategory();
    return;
  }

  if (categoryId === "relax") {
    renderRelaxCategory();
    return;
  }

  if (categoryId === "culture") {
    renderCultureCategory();
    return;
  }

  if (categoryId === "help") {
    renderHelpCategory();
    return;
  }

  const category = categoryMap[categoryId];
  if (!category) {
    renderNotFound();
    return;
  }
  const categoryGuides = guides.filter((guide) => guide.category === categoryId);
  app.innerHTML = `
    <div class="page-shell layout-container">
      <header class="category-page-header">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>${escapeHtml(category.name)}</span></nav>
        <h1>${escapeHtml(category.name)}</h1>
        <p class="lead">${escapeHtml(category.description)}</p>
      </header>
      <div class="guide-grid">
        ${categoryGuides.map(guideCard).join("")}
      </div>
      ${categoryId === "food" ? foodCardsPromo() : ""}
      ${categoryExplorerSection(categoryId)}
    </div>
  `;
}

function renderFoodCategory() {
  const category = categoryMap.food;
  document.title = "Food in Japan | Japan First Move";

  app.innerHTML = `
    <div class="page-shell food-page layout-container">
      <header class="category-page-header">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Food</span></nav>
        <h1>Food in Japan</h1>
        <p class="lead">${escapeHtml(category.description)}</p>
      </header>

      <section class="food-section" id="food-first-moves" aria-labelledby="food-guides-title">
        <div class="section-header">
          <div>
            <h2 id="food-guides-title">First moves for food places</h2>
          </div>
          <p>Choose what you need before ordering or during a meal.</p>
        </div>
        <div class="guide-grid">
          ${foodFirstMoveCards.map(foodGuideCard).join("")}
        </div>
      </section>

      <section class="food-section phrase-section" aria-labelledby="food-phrases-title">
        <div class="section-header">
          <div>
            <h2 id="food-phrases-title">Useful food phrases</h2>
          </div>
          <p>Quick phrases for simple restaurant checks.</p>
        </div>
        <div class="food-phrase-grid">
          ${foodPhraseCards.map(foodPhraseCard).join("")}
        </div>
      </section>

      <section class="food-card-cta-section card-container" aria-labelledby="food-category-food-card-title">
        ${foodCardCtaPanel({ context: "food" })}
      </section>
      ${categoryExplorerSection("food")}
    </div>
  `;
}

function foodPhraseCard(card) {
  return phraseMiniCard(card, "food-phrase-card");
}

function renderMoveCategory() {
  const category = categoryMap.move;
  const moveGuideOrder = ["find-right-platform", "find-right-exit", "charge-ic-card", "local-bus", "coin-lockers"];
  const categoryGuides = guides
    .filter((guide) => guide.category === "move")
    .sort((a, b) => {
      const aIndex = moveGuideOrder.indexOf(a.slug);
      const bIndex = moveGuideOrder.indexOf(b.slug);
      return (aIndex === -1 ? moveGuideOrder.length : aIndex) - (bIndex === -1 ? moveGuideOrder.length : bIndex);
    });
  document.title = "Move Around Japan | Japan First Move";

  app.innerHTML = `
    <div class="page-shell move-page layout-container">
      <header class="category-page-header">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Move</span></nav>
        <h1>Move around Japan</h1>
        <p class="lead">${escapeHtml(category.description)}</p>
      </header>

      <section class="move-section" id="move-first-moves" aria-labelledby="move-guides-title">
        <div class="section-header">
          <div>
            <h2 id="move-guides-title">First moves for getting around</h2>
          </div>
          <p>Choose what you need at stations, on transport, or when storing luggage.</p>
        </div>
        <div class="guide-grid">
          ${categoryGuides.map(categoryTopGuideCard).join("")}
        </div>
      </section>

      <section class="move-section phrase-section" aria-labelledby="move-phrases-title">
        <div class="section-header">
          <div>
            <h2 id="move-phrases-title">Useful move phrases</h2>
          </div>
          <p>Ask staff or someone nearby while showing a map, ticket, or pass.</p>
        </div>
        <div class="move-phrase-grid">
          ${movePhraseCards.map(movePhraseCard).join("")}
        </div>
      </section>

      <section class="move-help-note" aria-label="When you are lost">
        <div>
          <h2>Need help from a person?</h2>
          <p>If your problem is not just about transport, use Get Help.</p>
        </div>
        <a class="button secondary" href="/help" ${trackAttr("move_to_help_lost")}>Go to Get Help</a>
      </section>

      ${categoryExplorerSection("move")}
    </div>
  `;
}

function movePhraseCard(card) {
  return phraseMiniCard(card, "move-phrase-card");
}

function renderRelaxCategory() {
  const categoryGuides = guides.filter((guide) => guide.category === "relax");
  document.title = "Relax in Japan | Japan First Move";

  app.innerHTML = `
    <div class="page-shell relax-page layout-container">
      <header class="category-page-header">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Relax</span></nav>
        <h1>Relax in Japan</h1>
        <p class="lead">Rest, recharge, and recover during long travel days.</p>
      </header>

      <section class="relax-section" aria-labelledby="relax-guides-title">
        <div class="section-header">
          <div>
            <h2 id="relax-guides-title">First moves for resting and recharging</h2>
          </div>
          <p>Find places to bathe, sit, or take a quiet break.</p>
        </div>
        <div class="guide-grid">
          ${categoryGuides.map(categoryTopGuideCard).join("")}
        </div>
      </section>

      <section class="relax-section phrase-section" aria-labelledby="relax-phrases-title">
        <div class="section-header">
          <div>
            <h2 id="relax-phrases-title">Useful relax phrases</h2>
          </div>
          <p>Quick checks before bathing, sitting, or finding a place to rest.</p>
        </div>
        <div class="relax-phrase-grid">
          ${relaxPhraseCards.map(relaxPhraseCard).join("")}
        </div>
      </section>

      ${categoryExplorerSection("relax")}
    </div>
  `;
}

function relaxPhraseCard(card) {
  return phraseMiniCard(card, "relax-phrase-card");
}

function renderCultureCategory() {
  const category = categoryMap.culture;
  const categoryGuides = guides.filter((guide) => guide.category === "culture");
  document.title = "Culture in Japan | Japan First Move";

  app.innerHTML = `
    <div class="page-shell culture-page layout-container">
      <header class="category-page-header">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Culture</span></nav>
        <h1>Culture in Japan</h1>
        <p class="lead">${escapeHtml(category.description)}</p>
      </header>

      <section class="culture-section" aria-labelledby="culture-guides-title">
        <div class="section-header">
          <div>
            <h2 id="culture-guides-title">First moves for respectful visits</h2>
          </div>
          <p>Check entry, photos, and local rules before you act.</p>
        </div>
        <div class="guide-grid">
          ${categoryGuides.map(categoryTopGuideCard).join("")}
        </div>
      </section>

      <section class="culture-section phrase-section" aria-labelledby="culture-phrases-title">
        <div class="section-header">
          <div>
            <h2 id="culture-phrases-title">Useful culture phrases</h2>
          </div>
          <p>Ask first, then follow the local rule.</p>
        </div>
        <div class="culture-phrase-grid">
          ${culturePhraseCards.map(culturePhraseCard).join("")}
        </div>
      </section>

      ${categoryExplorerSection("culture")}
    </div>
  `;
}

function culturePhraseCard(card) {
  return phraseMiniCard(card, "culture-phrase-card");
}

function phraseMiniCard(card, className) {
  return `
    <article class="${className}">
      <h3 class="translation">${escapeHtml(card.title)}</h3>
      <p class="jp">${escapeHtml(card.japanese)}</p>
      <p>${escapeHtml(card.english)}</p>
    </article>
  `;
}

function renderHelpCategory() {
  const category = categoryMap.help;
  const categoryGuides = guides.filter((guide) => guide.category === "help");
  document.title = "Get Help in Japan | Japan First Move";

  app.innerHTML = `
    <div class="page-shell help-page layout-container">
      <header class="category-page-header">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Get Help</span></nav>
        <h1>Get Help in Japan</h1>
        <p class="lead">${escapeHtml(category.description)}</p>
      </header>

      <section class="help-alert" aria-label="Urgent help note">
        <strong>If it feels urgent, get help right away.</strong>
        <p>Ask staff, your hotel, travel insurance, or emergency services.</p>
      </section>

      <section class="help-section" aria-labelledby="help-guides-title">
        <div class="section-header">
          <div>
            <h2 id="help-guides-title">First moves for problems</h2>
          </div>
          <p>Medicine, lost items, ticket machines, and feeling sick.</p>
        </div>
        <div class="guide-grid">
          ${categoryGuides.map(categoryTopGuideCard).join("")}
        </div>
      </section>

      <section class="help-section phrase-section" aria-labelledby="help-phrases-title">
        <div class="section-header">
          <div>
            <h2 id="help-phrases-title">Useful help phrases</h2>
          </div>
          <p>Short phrases for common travel problems.</p>
        </div>
        <div class="help-phrase-grid">
          ${helpPhraseCards.map(helpPhraseCard).join("")}
        </div>
      </section>

      ${categoryExplorerSection("help")}
    </div>
  `;
}

function helpPhraseCard(card) {
  return phraseMiniCard(card, "help-phrase-card");
}

function foodCardsPromo() {
  return `
    <section class="food-promo" aria-labelledby="food-promo-title">
      <div>
        <p class="eyebrow">Food in Japan</p>
        <h2 id="food-promo-title">Explain food needs</h2>
        <p>Show allergies, dietary needs, or ingredients to check before ordering. Choose a sample card or create your own.</p>
      </div>
      <div class="section-actions">
        <a class="button primary" href="/food-cards" ${trackAttr("food_sample_cards_view")}>See sample cards</a>
        <a class="button secondary" href="/food-card/custom/" ${trackAttr("food_custom_card_create")}>Create my card</a>
      </div>
    </section>
  `;
}

function renderFoodCardsPage() {
  document.title = "Show Your Food Needs in Japanese | Japan First Move";
  app.innerHTML = `
    <div class="page-shell food-card-page layout-container">
      <header class="guide-page-header content-container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span>/</span>
          <a href="/food">Food</a><span>/</span>
          <span>Food cards</span>
        </nav>
        <h1>Show your food needs in Japanese</h1>
        <p class="lead">Show allergies, dietary needs, or ingredients to check before ordering. Use a sample card or create your own.</p>
      </header>

      <section class="food-card-first-move content-container" aria-labelledby="food-card-first-move-title">
        <h2 id="food-card-first-move-title">First move</h2>
        <p><strong>Show a card before you order.</strong></p>
        <p>These cards help communication, but they do not guarantee food safety.</p>
      </section>

      <section class="section food-samples content-container" aria-labelledby="food-samples-title">
        <div class="section-header">
          <div>
            <h2 id="food-samples-title">Popular sample cards</h2>
          </div>
          <p>Choose a sample card to view it.</p>
        </div>
        <div class="food-card-grid">
          ${popularFoodCards.map(foodCard).join("")}
        </div>
      </section>

      <section class="food-card-cta-section food-cards-create-section card-container" aria-labelledby="food-card-builder-title">
        ${foodCardCtaPanel({ context: "foodCards", includeSamplesLink: false })}
      </section>

      ${foodDisclaimer()}
    </div>
  `;
}

function foodCard(card) {
  return `
    <a class="food-sample-card" href="/food-cards/${card.id}" ${trackAttr(`food_card_open_${card.id}`)}>
      <div class="food-card-label">${escapeHtml(card.label)}</div>
      <h3>${escapeHtml(card.title)}</h3>
      <p class="food-list-preview jp">${escapeHtml(foodCardPreviewText(card))}</p>
      <p class="food-card-list-description">${escapeHtml(card.summary)}</p>
      <span class="food-card-view-link">View card →</span>
    </a>
  `;
}

function foodCardPreviewText(card) {
  const firstSentence = card.japaneseText.split("。").filter(Boolean)[0] ?? card.japaneseText;
  return `${firstSentence}。`;
}

function foodCardDisplayText(card) {
  const lines = card.displayLines ?? card.japaneseText
    .split("。")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `${line}。`);
  return lines
    .map((line, index) => {
      if (!line) {
        return '<span class="food-card-line-spacer" aria-hidden="true"></span>';
      }

      const allergenClass =
        card.id === "severe-allergy" && index === 2
          ? " food-card-allergen-label"
          : card.id === "severe-allergy" && index === 3
            ? " food-card-allergen-value"
            : "";
      const closingClass =
        card.id === "severe-allergy" && index >= 8
          ? ` food-card-closing-line${index === 8 ? " food-card-closing-start" : ""}`
          : "";
      return `<span class="food-card-line${allergenClass}${closingClass}">${escapeHtml(line)}</span>`;
    })
    .join("");
}

function foodCardCustomSampleConfig(card) {
  const configs = {
    "severe-allergy": {
      type: "cannotEat",
      reason: "severe",
      ingredients: [{ labelJa: "落花生（ピーナッツ）", labelEn: "Peanuts" }],
    },
    "basic-food-allergy": {
      type: "cannotEat",
      reason: "allergy",
      ingredients: [{ labelJa: "避ける必要がある食材", labelEn: "Ingredient to avoid" }],
    },
    vegetarian: {
      type: "cannotEat",
      reason: "dietary",
      ingredients: [
        { labelJa: "肉類全般", labelEn: "All meat" },
        { labelJa: "魚介類全般", labelEn: "All seafood" },
        { labelJa: "魚のだし", labelEn: "Fish-based dashi" },
      ],
    },
    vegan: {
      type: "cannotEat",
      reason: "dietary",
      ingredients: [
        { labelJa: "肉類全般", labelEn: "All meat" },
        { labelJa: "魚介類全般", labelEn: "All seafood" },
        { labelJa: "卵", labelEn: "Egg" },
        { labelJa: "乳製品・牛乳", labelEn: "Dairy / milk" },
        { labelJa: "動物性のだし", labelEn: "Animal-based dashi" },
      ],
    },
    "no-pork": {
      type: "cannotEat",
      reason: "dietary",
      ingredients: [
        { labelJa: "豚肉", labelEn: "Pork" },
        { labelJa: "豚骨スープ", labelEn: "Pork broth" },
        { labelJa: "ラード", labelEn: "Lard" },
        { labelJa: "ポークエキス", labelEn: "Pork extract" },
      ],
    },
    "no-alcohol": {
      type: "cannotEat",
      reason: "dietary",
      ingredients: [
        { labelJa: "アルコール", labelEn: "Alcohol" },
        { labelJa: "みりん・酒", labelEn: "Mirin / sake" },
      ],
    },
    "ask-dashi": {
      type: "ingredientCheck",
      ingredients: [{ labelJa: "動物性のだし", labelEn: "Animal-based dashi" }],
    },
    "shared-oil-tools": {
      type: "sharedTools",
      ingredients: [{ labelJa: "確認したい食材", labelEn: "Ingredient to check" }],
    },
  };
  return configs[card.id] ?? configs["basic-food-allergy"];
}

function renderFoodCardDetail(cardId) {
  const card = foodCardMap[cardId];
  if (!card) {
    renderNotFound();
    return;
  }

  const sampleConfig = foodCardCustomSampleConfig(card);
  document.title = `${card.title} | Japan First Move`;
  app.innerHTML = `
    <div class="page-shell food-detail-page layout-container">
      <header class="guide-page-header content-container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span>/</span>
          <a href="/food">Food</a><span>/</span>
          <a href="/food-cards">Food cards</a><span>/</span>
          <span>${escapeHtml(card.title)}</span>
        </nav>
        <h1>${escapeHtml(card.title)}</h1>
        <p class="lead">${escapeHtml(card.note)}</p>
      </header>

      <section class="food-show-steps content-container" aria-label="How to use this card at a restaurant">
        <div>
          <span>1</span>
          <strong>Show before ordering</strong>
          <p>Before the food is made.</p>
        </div>
        <div>
          <span>2</span>
          <strong>Let staff check</strong>
          <p>Give staff time to confirm.</p>
        </div>
        <div>
          <span>3</span>
          <strong>If unsure, choose something else</strong>
          <p>Choose another dish or place.</p>
        </div>
      </section>

      <div class="food-sample-detail-card card-container">
        ${customFoodCardLayoutMarkup(
          customFoodCardLayoutContent(sampleConfig.type, sampleConfig.reason),
          sampleConfig.ingredients,
          " food-sample-generated-card",
        )}
      </div>

      <div class="food-detail-notes card-container">
        <section class="food-detail-info" aria-label="Card meaning and safety">
          <div>
            <p class="eyebrow">What it says</p>
            <p>${escapeHtml(card.englishText)}</p>
          </div>
          <div class="food-detail-safety">
            <p class="eyebrow">Use with care</p>
            <p>This card helps you communicate your food needs, but staff still need to confirm ingredients and preparation.</p>
          </div>
        </section>

        ${foodDisclaimer()}
      </div>

      <section class="food-card-builder-panel food-detail-upgrade card-container" aria-labelledby="custom-card-title">
        <div>
          <h2 id="custom-card-title">Create your own card</h2>
          <p>Show allergies, dietary needs, or ingredients to check before ordering.</p>
        </div>
        <a class="button primary" href="/food-card/custom/" ${trackAttr(`food_card_detail_create_${card.id}`)}>Create my card</a>
      </section>

      <div class="section-actions content-container">
        <a class="button secondary" href="/food-cards" ${trackAttr("food_card_detail_back_all")}>Back to sample cards</a>
      </div>
    </div>
  `;
}

function resetCustomFoodCardState() {
  if (customFoodCardState.imagePreviewUrl) {
    URL.revokeObjectURL(customFoodCardState.imagePreviewUrl);
  }
  Object.assign(customFoodCardState, {
    step: 1,
    cardType: "",
    reason: "",
    selectedIngredientIds: [],
    safetyAgreed: false,
    purchaseReviewAgreed: false,
    sampleMode: false,
    showMode: false,
    error: "",
    saveMessage: "",
    checkoutStatus: "",
    checkoutMessage: "",
    checkoutError: "",
    imagePreviewUrl: "",
    imagePreviewFile: null,
    openCategoryIds: ["popular"],
  });
}

function customFoodCardEnsureBuilderRoute() {
  if (window.location.pathname !== "/food-card/custom/") {
    window.history.replaceState({}, "", "/food-card/custom/");
  }
}

function customFoodCardNormalizeCancelledRoute() {
  const cancelledPath = "/food-card/custom/?checkout=cancelled";
  if (`${window.location.pathname}${window.location.search}` !== cancelledPath) {
    window.history.replaceState({ customFoodCardCancelReturn: true }, "", cancelledPath);
  }
}

function customFoodCardProtectCancelledBackNavigation() {
  if (window.history.state?.customFoodCardCancelGuard) {
    return;
  }

  window.history.pushState({ customFoodCardCancelGuard: true }, "", "/food-card/custom/?checkout=cancelled");
}

function startCustomFoodCard({ restoreDraft = false } = {}) {
  resetCustomFoodCardState();
  customFoodCardEnsureBuilderRoute();
  if (restoreDraft) {
    const draft = customFoodCardLoadDraft();
    if (draft) {
      customFoodCardRestoreDraft(draft);
    }
  } else {
    customFoodCardClearDraft();
  }
  renderCustomFoodCard();
}

function customFoodCardCheckoutAttemptId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `jfm_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
}

function customFoodCardCheckoutSnapshot() {
  return {
    selectedIngredientIds: [...customFoodCardState.selectedIngredientIds],
    cardType: customFoodCardState.cardType,
    reason: customFoodCardState.reason,
    safetyAgreed: customFoodCardState.safetyAgreed,
    purchaseReviewAgreed: customFoodCardState.purchaseReviewAgreed,
  };
}

function customFoodCardDraftSnapshot() {
  return {
    ...customFoodCardCheckoutSnapshot(),
    step: customFoodCardState.step,
    openCategoryIds: [...customFoodCardState.openCategoryIds],
  };
}

function customFoodCardShouldSaveDraft() {
  return customFoodCardState.step < 4 && customFoodCardState.selectedIngredientIds.length > 0;
}

function customFoodCardSaveDraft() {
  if (!customFoodCardShouldSaveDraft()) {
    customFoodCardClearDraft();
    return;
  }

  try {
    window.sessionStorage.setItem(
      customFoodCardDraftStorageKey,
      JSON.stringify({
        snapshot: customFoodCardDraftSnapshot(),
        savedAt: Date.now(),
      }),
    );
  } catch {
    // Ignore storage errors. The form can still be used in memory.
  }
}

function customFoodCardLoadDraft() {
  try {
    const rawDraft = window.sessionStorage.getItem(customFoodCardDraftStorageKey);
    if (!rawDraft) {
      return null;
    }
    const draft = JSON.parse(rawDraft);
    if (!draft || !draft.snapshot) {
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}

function customFoodCardClearDraft() {
  try {
    window.sessionStorage.removeItem(customFoodCardDraftStorageKey);
  } catch {
    // Ignore storage errors.
  }
}

function customFoodCardRestoreDraft(draft) {
  const snapshot = draft?.snapshot;
  if (!snapshot || typeof snapshot !== "object") {
    return false;
  }

  const selectedIngredientIds = Array.isArray(snapshot.selectedIngredientIds)
    ? snapshot.selectedIngredientIds.filter((id) => ingredients.some((ingredient) => ingredient.id === id))
    : [];
  if (!selectedIngredientIds.length) {
    return false;
  }

  customFoodCardState.selectedIngredientIds = selectedIngredientIds;
  customFoodCardState.cardType = typeof snapshot.cardType === "string" ? snapshot.cardType : "";
  if (!customFoodCardTypeIsAvailable(customFoodCardState.cardType)) {
    customFoodCardState.cardType = "";
  }

  customFoodCardState.reason = typeof snapshot.reason === "string" ? snapshot.reason : "";
  if (customFoodCardState.reason && !customFoodCardReasons.some((reason) => reason.id === customFoodCardState.reason)) {
    customFoodCardState.reason = "";
  }

  customFoodCardState.safetyAgreed = Boolean(snapshot.safetyAgreed);
  customFoodCardState.purchaseReviewAgreed = Boolean(snapshot.purchaseReviewAgreed);
  customFoodCardState.openCategoryIds = Array.isArray(snapshot.openCategoryIds)
    ? snapshot.openCategoryIds.filter((categoryId) => customFoodCardIngredientCategories.includes(categoryId))
    : ["popular"];
  if (!customFoodCardState.openCategoryIds.length) {
    customFoodCardState.openCategoryIds = ["popular"];
  }

  const savedStep = Number.isInteger(snapshot.step) ? snapshot.step : 1;
  customFoodCardState.step = Math.min(Math.max(savedStep, 1), 3);
  if (customFoodCardState.step > 1 && !customFoodCardState.cardType) {
    customFoodCardState.step = 1;
  }
  if (customFoodCardState.step > 2 && customFoodCardState.cardType === "cannotEat" && !customFoodCardState.reason) {
    customFoodCardState.step = 2;
  }

  return true;
}

function customFoodCardSaveCheckoutDraft(purchaseAttemptId) {
  const draft = {
    purchaseAttemptId,
    snapshot: customFoodCardCheckoutSnapshot(),
    savedAt: Date.now(),
  };
  try {
    window.sessionStorage.setItem(customFoodCardCheckoutStorageKey, JSON.stringify(draft));
    return true;
  } catch {
    return false;
  }
}

function customFoodCardLoadCheckoutDraft() {
  try {
    const rawDraft = window.sessionStorage.getItem(customFoodCardCheckoutStorageKey);
    if (!rawDraft) {
      return null;
    }
    const draft = JSON.parse(rawDraft);
    if (!draft || typeof draft.purchaseAttemptId !== "string" || !draft.snapshot) {
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}

function customFoodCardClearCheckoutDraft() {
  try {
    window.sessionStorage.removeItem(customFoodCardCheckoutStorageKey);
  } catch {
    // Ignore storage errors.
  }
}

function customFoodCardRestoreCheckoutSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") {
    return false;
  }
  const selectedIngredientIds = Array.isArray(snapshot.selectedIngredientIds)
    ? snapshot.selectedIngredientIds.filter((id) => ingredients.some((ingredient) => ingredient.id === id))
    : [];
  if (!selectedIngredientIds.length) {
    return false;
  }
  customFoodCardState.selectedIngredientIds = selectedIngredientIds;
  customFoodCardState.cardType = typeof snapshot.cardType === "string" ? snapshot.cardType : "";
  if (!customFoodCardTypeIsAvailable(customFoodCardState.cardType)) {
    customFoodCardState.cardType = "";
  }
  customFoodCardState.reason = typeof snapshot.reason === "string" ? snapshot.reason : "";
  if (customFoodCardState.reason && !customFoodCardReasons.some((reason) => reason.id === customFoodCardState.reason)) {
    customFoodCardState.reason = "";
  }
  customFoodCardState.safetyAgreed = Boolean(snapshot.safetyAgreed);
  customFoodCardState.purchaseReviewAgreed = Boolean(snapshot.purchaseReviewAgreed);
  return Boolean(customFoodCardState.cardType);
}

function customFoodCardSetCheckoutFeedback(status, message = "", error = "") {
  customFoodCardState.checkoutStatus = status;
  customFoodCardState.checkoutMessage = message;
  customFoodCardState.checkoutError = error;
}

async function customFoodCardBeginCheckout() {
  if (!customFoodCardPurchaseReviewIsComplete() || customFoodCardState.checkoutStatus === "preparing") {
    return;
  }

  const purchaseAttemptId = customFoodCardCheckoutAttemptId();
  customFoodCardEnsureBuilderRoute();
  customFoodCardSaveDraft();
  if (!customFoodCardSaveCheckoutDraft(purchaseAttemptId)) {
    customFoodCardSetCheckoutFeedback(
      "error",
      "",
      "Your browser could not keep the card selection for checkout. Please check browser storage settings and try again.",
    );
    renderCustomFoodCard();
    return;
  }
  customFoodCardSetCheckoutFeedback("preparing", "Preparing secure payment...");
  renderCustomFoodCard();

  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        purchase_attempt_id: purchaseAttemptId,
      }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.url) {
      throw new Error(result.error || "Payment could not be started.");
    }
    window.location.assign(result.url);
  } catch (error) {
    customFoodCardSetCheckoutFeedback(
      "error",
      "",
      error instanceof Error ? error.message : "Payment could not be started. Please try again.",
    );
    renderCustomFoodCard();
  }
}

function startCustomFoodCardCancelled() {
  customFoodCardNormalizeCancelledRoute();
  customFoodCardProtectCancelledBackNavigation();
  resetCustomFoodCardState();
  const draft = customFoodCardLoadCheckoutDraft();
  if (draft && customFoodCardRestoreCheckoutSnapshot(draft.snapshot)) {
    customFoodCardState.step = 3;
    customFoodCardSetCheckoutFeedback("cancelled", "Payment was cancelled. You can review and try again.");
  } else {
    customFoodCardState.error = "Payment was cancelled. Please recreate your card to try again.";
  }
  renderCustomFoodCard();
}

async function startCustomFoodCardSuccess() {
  resetCustomFoodCardState();
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id") || "";
  const draft = customFoodCardLoadCheckoutDraft();

  if (!sessionId || !draft || !customFoodCardRestoreCheckoutSnapshot(draft.snapshot)) {
    customFoodCardState.error = "We could not find your card selection. Please recreate your card.";
    renderCustomFoodCard();
    return;
  }

  customFoodCardState.step = 3;
  customFoodCardSetCheckoutFeedback("verifying", "Verifying payment...");
  renderCustomFoodCard();

  try {
    const response = await fetch(`/api/verify-checkout-session?session_id=${encodeURIComponent(sessionId)}`);
    const result = await response.json().catch(() => ({}));
    const referenceMatches = result.client_reference_id === draft.purchaseAttemptId;
    if (!response.ok || !result.paid || !result.price_ok || !referenceMatches) {
      throw new Error(result.error || "Payment could not be verified.");
    }
    customFoodCardClearDraft();
    customFoodCardClearCheckoutDraft();
    customFoodCardSetCheckoutFeedback("verified");
    customFoodCardState.step = 4;
    renderCustomFoodCard();
    window.scrollTo(0, 0);
  } catch (error) {
    customFoodCardState.step = 3;
    customFoodCardSetCheckoutFeedback(
      "error",
      "",
      error instanceof Error ? error.message : "Payment could not be verified. Please contact support if you were charged.",
    );
    renderCustomFoodCard();
  }
}

function customFoodCardType() {
  return customFoodCardTypes.find((type) => type.id === customFoodCardState.cardType);
}

function customFoodCardReason() {
  return customFoodCardReasons.find((reason) => reason.id === customFoodCardState.reason);
}

function customFoodCardSelectedIngredients() {
  return customFoodCardState.selectedIngredientIds
    .map((id) => ingredients.find((ingredient) => ingredient.id === id))
    .filter(Boolean);
}

function customFoodCardTypeIsAvailable(typeId) {
  const selectedIngredients = customFoodCardSelectedIngredients();
  return selectedIngredients.length > 0 && selectedIngredients.every((ingredient) => ingredient.allowedTypes.includes(typeId));
}

function customFoodCardStepOneMarkup() {
  const selectedCount = customFoodCardState.selectedIngredientIds.length;

  return `
    <div class="custom-food-card-step" data-custom-step="1">
      <div class="custom-step-heading">
        <h2>Choose ingredients</h2>
        <p class="custom-step-question">Choose the items you need to mention.</p>
        <p>Choose up to 5 items.</p>
        <p>A shorter card is easier for staff to read. Create another card if you need more items.</p>
      </div>
      <div class="custom-selected-count" aria-live="polite">Selected: <strong>${selectedCount} / 5</strong></div>
      ${customFoodCardState.error ? `<div class="custom-selection-error" role="alert">${escapeHtml(customFoodCardState.error)}</div>` : ""}
      <div class="custom-ingredient-groups">
        ${customFoodCardIngredientCategories.map(customFoodCardIngredientGroupMarkup).join("")}
      </div>
      <div class="custom-step-actions">
        <button class="button primary" type="button" data-custom-next ${selectedCount ? "" : "disabled"}>Continue</button>
      </div>
    </div>
  `;
}

function customFoodCardIngredientsForCategory(categoryId) {
  if (categoryId === "popular") {
    return customFoodCardPopularIngredientIds
      .map((id) => ingredients.find((ingredient) => ingredient.id === id))
      .filter(Boolean);
  }
  return ingredients.filter((ingredient) => ingredient.category === categoryId);
}

function customFoodCardIngredientGroupMarkup(categoryId) {
  const groupIngredients = customFoodCardIngredientsForCategory(categoryId);
  if (!groupIngredients.length) {
    return "";
  }
  const isOpen = customFoodCardState.openCategoryIds.includes(categoryId);
  return `
    <details class="custom-ingredient-group" data-custom-ingredient-category="${categoryId}" ${isOpen ? "open" : ""}>
      <summary>${escapeHtml(customFoodCardCategoryMeta[categoryId])}<span>${groupIngredients.length}</span></summary>
      <div class="custom-ingredient-grid">
        ${groupIngredients
          .map((ingredient) => {
            const isSelected = customFoodCardState.selectedIngredientIds.includes(ingredient.id);
            return `
              <button
                class="custom-ingredient-button${isSelected ? " is-selected" : ""}"
                type="button"
                data-custom-ingredient-id="${ingredient.id}"
                aria-pressed="${isSelected}"
              >
                <span class="custom-ingredient-check" aria-hidden="true">${isSelected ? "✓" : "+"}</span>
                <span><strong>${escapeHtml(ingredient.labelEn)}</strong><small lang="ja">${escapeHtml(ingredient.labelJa)}</small></span>
              </button>
            `;
          })
          .join("")}
      </div>
    </details>
  `;
}

function customFoodCardStepTwoMarkup() {
  const needsReason = customFoodCardState.cardType === "cannotEat";
  const availableTypes = customFoodCardTypes.filter((type) => customFoodCardTypeIsAvailable(type.id));
  const selectedTypeIsAvailable = Boolean(customFoodCardState.cardType) && customFoodCardTypeIsAvailable(customFoodCardState.cardType);
  const canContinue = selectedTypeIsAvailable && (!needsReason || Boolean(customFoodCardState.reason));
  const severeNote = customFoodCardState.reason === "severe"
    ? `<p class="custom-severe-note">For severe allergies, keep each card focused. Create separate cards if needed.</p>`
    : "";

  return `
    <div class="custom-food-card-step" data-custom-step="2">
      <div class="custom-step-heading">
        <h2>Choose card purpose</h2>
        <p class="custom-step-question">What do you want to say about these items?</p>
      </div>
      ${
        availableTypes.length
          ? ""
          : `<div class="custom-selection-error" role="alert">These items need different card purposes. Go back and adjust your ingredient selection.</div>`
      }
      <div class="custom-choice-list" aria-label="Food card purpose">
        ${customFoodCardTypes
          .map((type) => {
            const isAvailable = customFoodCardTypeIsAvailable(type.id);
            const showReasonPanel = needsReason && type.id === "cannotEat";
            return `
              <div class="custom-choice-item${showReasonPanel ? " has-reason" : ""}">
                <button
                  class="custom-choice-card${customFoodCardState.cardType === type.id ? " is-selected" : ""}"
                  type="button"
                  data-custom-card-type="${type.id}"
                  aria-pressed="${customFoodCardState.cardType === type.id}"
                  ${isAvailable ? "" : "disabled"}
                >
                  <strong>${escapeHtml(type.label)}</strong>
                  <span>${escapeHtml(type.subtext)}</span>
                  ${isAvailable ? "" : `<small>This option doesn’t work with all of your selected items. Try another purpose or change your ingredients.</small>`}
                </button>
                ${
                  showReasonPanel
                    ? `
                      <fieldset class="custom-reason-panel">
                        <legend>What is the reason?</legend>
                        <div class="custom-reason-list">
                          ${customFoodCardReasons
                            .map(
                              (reason) => `
                                <button
                                  class="custom-reason-button${customFoodCardState.reason === reason.id ? " is-selected" : ""}"
                                  type="button"
                                  data-custom-reason="${reason.id}"
                                  aria-pressed="${customFoodCardState.reason === reason.id}"
                                >${escapeHtml(reason.label)}</button>
                              `,
                            )
                            .join("")}
                        </div>
                      </fieldset>
                      ${severeNote}
                    `
                    : ""
                }
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="custom-step-actions custom-step-actions-split">
        <button class="button secondary" type="button" data-custom-back>Back</button>
        <button class="button primary" type="button" data-custom-next ${canContinue ? "" : "disabled"}>Continue</button>
      </div>
    </div>
  `;
}

function customFoodCardLayoutContent(cardType, reason = "") {
  if (cardType === "cannotEat" && reason === "severe") {
    return {
      typeLabel: "SEVERE ALLERGY",
      main: "重度の食物アレルギーがあります。",
      support: "少量の混入や調理器具の共有でも危険です。",
      closing: "対応が難しい場合は、無理に提供しなくて大丈夫です。",
      ingredientLabelJa: "アレルギーのあるもの",
      ingredientLabelEn: "Allergens",
      responses: [
        { symbol: "○", ja: "提供できます", en: "CAN SERVE" },
        { symbol: "×", ja: "提供できません", en: "CAN’T SERVE" },
        { symbol: "?", ja: "確認します", en: "CHECK" },
      ],
      whatItSays: "I have a severe food allergy. Even a small amount or shared cooking tools can be dangerous.",
      useWithCare: "Show this card before ordering and wait while staff checks the ingredients and preparation method.",
      importantNote: "This card helps communication but does not guarantee food safety.",
    };
  }

  if (cardType === "cannotEat" && reason === "allergy") {
    return {
      typeLabel: "ALLERGY / INTOLERANCE",
      main: "食物アレルギー、または体質的に食べられないものがあります。",
      support: "",
      closing: "対応が難しい場合は、無理に提供しなくて大丈夫です。",
      ingredientLabelJa: "食べられないもの",
      ingredientLabelEn: "Items I cannot eat",
      responses: [
        { symbol: "○", ja: "提供できます", en: "CAN SERVE" },
        { symbol: "×", ja: "提供できません", en: "CAN’T SERVE" },
        { symbol: "?", ja: "確認します", en: "CHECK" },
      ],
      whatItSays: "I have an allergy or intolerance and cannot eat the selected items.",
      useWithCare: "Show this card before ordering and give staff time to check.",
      importantNote: "This card helps communication but does not guarantee food safety.",
    };
  }

  if (cardType === "cannotEat") {
    return {
      typeLabel: "DIETARY RESTRICTION",
      main: "食事制限のため、食べられないものがあります。",
      support: "",
      closing: "対応が難しい場合は、無理に提供しなくて大丈夫です。",
      ingredientLabelJa: "食べられないもの",
      ingredientLabelEn: "Items I cannot eat",
      responses: [
        { symbol: "○", ja: "提供できます", en: "CAN SERVE" },
        { symbol: "×", ja: "提供できません", en: "CAN’T SERVE" },
        { symbol: "?", ja: "確認します", en: "CHECK" },
      ],
      whatItSays: "I have a dietary restriction and cannot eat the selected items.",
      useWithCare: "Show this card before ordering and give staff time to check.",
      importantNote: "This card is a communication aid and does not guarantee that every dish can be adjusted.",
    };
  }

  if (cardType === "ingredientCheck") {
    return {
      typeLabel: "INGREDIENT CHECK",
      main: "この料理に下記のものは入っていますか？",
      support: "",
      closing: "",
      ingredientLabelJa: "確認したいもの",
      ingredientLabelEn: "Items to check",
      responses: [
        { symbol: "○", ja: "入っています", en: "CONTAINS" },
        { symbol: "×", ja: "入っていません", en: "DOES NOT CONTAIN" },
        { symbol: "?", ja: "確認します", en: "CHECK" },
      ],
      whatItSays: "It asks whether the selected items are included in the dish.",
      useWithCare: "Ask before ordering and wait while staff checks the ingredients.",
      importantNote: "Recipes and seasonings can vary. Please confirm with staff each time.",
    };
  }

  if (cardType === "sharedTools") {
    return {
      typeLabel: "SHARED TOOLS OR OIL",
      main: "下記の食材と同じ調理器具や油を使っていますか？",
      support: "",
      closing: "",
      ingredientLabelJa: "確認したいもの",
      ingredientLabelEn: "Items to check",
      responses: [
        { symbol: "○", ja: "共有しています", en: "SHARED" },
        { symbol: "×", ja: "共有していません", en: "NOT SHARED" },
        { symbol: "?", ja: "確認します", en: "CHECK" },
      ],
      whatItSays: "It asks whether the same cooking tools or frying oil are used for the selected items.",
      useWithCare: "Show this card before ordering and ask staff to check the preparation method.",
      importantNote: "This does not guarantee zero cross-contact.",
    };
  }

  return {
    typeLabel: "I PREFER TO AVOID",
    main: "できれば下記のものを避けたいです。",
    support: "",
    closing: "可能な範囲で大丈夫です。",
    ingredientLabelJa: "避けたいもの",
    ingredientLabelEn: "Items to avoid",
    responses: [
      { symbol: "○", ja: "できます", en: "CAN AVOID" },
      { symbol: "×", ja: "できません", en: "CAN’T AVOID" },
      { symbol: "?", ja: "確認します", en: "CHECK" },
    ],
    whatItSays: "It says I would prefer to avoid the selected items if possible.",
    useWithCare: "Use this for preferences, not for allergies or medical restrictions.",
    importantNote: "The restaurant may not be able to change every dish.",
  };
}

function customFoodCardIngredientTilesMarkup(selectedIngredients) {
  return `
    <div class="custom-card-ingredient-tiles" data-ingredient-count="${selectedIngredients.length}">
      ${selectedIngredients
        .map(
          (ingredient) => `
            <div class="custom-card-ingredient-tile">
              <strong lang="ja">${escapeHtml(ingredient.labelJa)}</strong>
              <small lang="en">${escapeHtml(ingredient.labelEn)}</small>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function customFoodCardResponseSymbolAsset(symbol) {
  return {
    "○": "/assets/food-card/response-can.jpg",
    "×": "/assets/food-card/response-cannot.jpg",
    "?": "/assets/food-card/response-check.jpg",
  }[symbol];
}

function customFoodCardLayoutMarkup(content, selectedIngredients, className = "") {
  const sharedToolsNote = content.typeLabel === "SHARED TOOLS OR OIL"
    ? `<p class="custom-card-cross-contact-note">This does not guarantee zero cross-contact.</p>`
    : "";
  const mainMarkup = content.typeLabel === "DIETARY RESTRICTION"
    ? `食事制限のため、<br />食べられないものがあります。`
    : content.typeLabel === "INGREDIENT CHECK"
      ? `この料理に下記のものは<br />入っていますか？`
      : escapeHtml(content.main);
  const supportMarkup = content.typeLabel === "SEVERE ALLERGY"
    ? `少量の混入や<br />調理器具の共有でも危険です。`
    : escapeHtml(content.support);
  const closingMarkup = content.closing === "対応が難しい場合は、無理に提供しなくて大丈夫です。"
    ? `<span>対応が難しい場合は、</span><span>無理に提供しなくても大丈夫です。</span>`
    : escapeHtml(content.closing);
  return `
    <section class="custom-generated-card${className}" aria-label="Generated Japanese food card">
      <div class="custom-card-paper">
        <section class="custom-card-message-sheet" aria-label="Japanese message for restaurant staff">
          <span class="custom-card-type-label" lang="en">${escapeHtml(content.typeLabel)}</span>
          <div class="custom-card-main-copy" lang="ja">
            <p class="custom-card-main-line">${mainMarkup}</p>
            ${content.support ? `<p class="custom-card-support-line">${supportMarkup}</p>` : ""}
          </div>
          <section class="custom-card-ingredient-area" aria-label="Selected ingredients">
            <header>
              <span class="custom-card-capture-heading-bg" aria-hidden="true">
                <svg class="custom-card-capture-heading-svg" viewBox="0 0 600 132" preserveAspectRatio="xMidYMid meet" focusable="false">
                  <path d="M0 0H600V72C492 105 395 124 300 124C205 124 108 105 0 72V0Z" fill="#f8e9ed" />
                  <path d="M22 71C132 103 216 116 300 116C384 116 468 103 578 71" fill="none" stroke="#fffafb" stroke-width="1" stroke-opacity="0.68" vector-effect="non-scaling-stroke" />
                </svg>
              </span>
              <span class="custom-card-ingredient-heading-copy">
                <strong lang="ja">${escapeHtml(content.ingredientLabelJa)}</strong>
                <small lang="en">${escapeHtml(content.ingredientLabelEn)}</small>
              </span>
            </header>
            ${customFoodCardIngredientTilesMarkup(selectedIngredients)}
          </section>
        </section>

        <section class="custom-card-staff-section" aria-label="Staff response options">
          <div class="custom-card-staff-heading">
            <span aria-hidden="true"></span>
            <strong lang="ja">お店の方へ</strong>
            <small lang="en">For staff</small>
            <span aria-hidden="true"></span>
          </div>
          ${content.closing ? `<p class="custom-card-staff-message" lang="ja">${closingMarkup}</p>` : ""}
          <div class="custom-card-point-note">
            <img class="custom-card-point-icon" src="/assets/food-card/yubisashi.png" alt="" aria-hidden="true" />
            <div>
              <strong lang="ja">該当するものを指さしてください</strong>
              <small lang="en">Please point to one.</small>
            </div>
          </div>
          <div class="custom-card-response-grid" lang="ja">
            ${content.responses
              .map(
                (response) => `
                  <div class="custom-card-response-option">
                    <img
                      class="custom-card-response-symbol"
                      src="${customFoodCardResponseSymbolAsset(response.symbol)}"
                      data-symbol="${escapeHtml(response.symbol)}"
                      alt=""
                      aria-hidden="true"
                    />
                    <strong>${escapeHtml(response.ja)}</strong>
                    <small lang="en">${escapeHtml(response.en)}</small>
                  </div>
                `,
              )
              .join("")}
          </div>
          <footer class="custom-card-short-disclaimer">
            <p>Communication aid only. Does not guarantee food safety.<br>Staff still need to confirm ingredients and preparation.</p>
            ${sharedToolsNote}
          </footer>
        </section>
        <footer class="custom-card-capture-brand-footer" aria-hidden="true">
          <img src="/assets/brand/bird-logo.png" alt="" />
          <span class="custom-card-capture-brand-text">Japan First Move</span>
          <span class="custom-card-capture-brand-separator">·</span>
          <span class="custom-card-capture-brand-url">japanfirstmove.com</span>
        </footer>
      </div>
    </section>
  `;
}

function customFoodCardSampleCardMarkup() {
  const sampleIngredients = [
    { labelJa: "落花生（ピーナッツ）", labelEn: "Peanuts" },
    { labelJa: "そば", labelEn: "Soba" },
  ];
  return customFoodCardLayoutMarkup(
    customFoodCardLayoutContent("cannotEat", "severe"),
    sampleIngredients,
    " custom-sample-generated-card",
  );
}

function customFoodCardSampleModalMarkup() {
  if (!customFoodCardState.sampleMode) {
    return "";
  }
  return `
    <div class="custom-sample-modal-backdrop">
      <section
        class="custom-sample-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="custom-sample-modal-title"
        aria-describedby="custom-sample-modal-description"
      >
        <header class="custom-sample-modal-header">
          <div>
            <h2 id="custom-sample-modal-title">Sample card</h2>
            <p id="custom-sample-modal-description">This is an example.<br>Your card will use the ingredients you selected.</p>
          </div>
          <button class="button secondary" type="button" data-custom-close-sample aria-label="Close sample card">Close</button>
        </header>
        <div class="custom-sample-modal-content">
          ${customFoodCardSampleCardMarkup()}
        </div>
      </section>
    </div>
  `;
}

function customFoodCardPurchaseReviewLinkMarkup(label, href) {
  return `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
}

function customFoodCardPurchaseReviewAgreementMarkup() {
  return "I have reviewed my selected ingredients, card purpose, and purchase conditions.";
}

function customFoodCardPurchaseReviewLegalLinksMarkup() {
  return `
    <p class="custom-purchase-legal-links">
      <span>Legal information:</span>
      ${customFoodCardPurchaseReviewLinkMarkup("Terms", "/terms")}
      <span class="custom-purchase-legal-separator" aria-hidden="true">/</span>
      ${customFoodCardPurchaseReviewLinkMarkup("Disclaimer", "/disclaimer")}
      <span class="custom-purchase-legal-separator" aria-hidden="true">/</span>
      ${customFoodCardPurchaseReviewLinkMarkup("Legal Notice", "/legal-notice")}
      <span class="custom-purchase-legal-separator" aria-hidden="true">/</span>
      ${customFoodCardPurchaseReviewLinkMarkup("Privacy Policy", "/privacy")}
    </p>
  `;
}

function customFoodCardPurchaseReviewIsComplete() {
  return customFoodCardState.safetyAgreed && customFoodCardState.purchaseReviewAgreed;
}

function customFoodCardStepThreeMarkup() {
  const type = customFoodCardType();
  const reason = customFoodCardReason();
  const selectedIngredients = customFoodCardSelectedIngredients();
  const checkoutIsBusy = customFoodCardState.checkoutStatus === "preparing" || customFoodCardState.checkoutStatus === "verifying";
  const canProceedToPayment = customFoodCardPurchaseReviewIsComplete() && !checkoutIsBusy;
  const checkoutButtonText = customFoodCardState.checkoutStatus === "preparing" ? "Preparing payment..." : "Proceed to payment";
  return `
    <div class="custom-food-card-step" data-custom-step="3">
      <div class="custom-step-heading">
        <h2>Review before purchase</h2>
      </div>
      <div class="custom-confirm-summary">
        <div class="custom-confirm-group custom-confirm-group-items">
          <span>Selected items</span>
          <ul class="custom-confirm-items">
            ${selectedIngredients
              .map(
                (ingredient) => `
                  <li>
                    <strong lang="ja">${escapeHtml(ingredient.labelJa)}</strong>
                    <span class="custom-confirm-item-en" lang="en">/ ${escapeHtml(ingredient.labelEn)}</span>
                  </li>
                `,
              )
              .join("")}
          </ul>
        </div>
        <div class="custom-confirm-group custom-confirm-group-purpose"><span>Card purpose</span><strong>${escapeHtml(type?.label ?? "")}</strong></div>
        ${reason ? `<div class="custom-confirm-group custom-confirm-group-reason"><span>Reason</span><strong>${escapeHtml(reason.label)}</strong></div>` : ""}
      </div>
      <section class="custom-purchase-review" aria-label="Purchase review">
        <header class="custom-purchase-review-header">
          <div>
            <h3>Custom Food Card</h3>
            <p>Digital product · One-time purchase</p>
          </div>
        </header>
        <div class="custom-purchase-review-items">
          <div class="custom-purchase-review-item">
            <span>Price</span>
            <p>USD $4.99 tax included</p>
          </div>
          <div class="custom-purchase-review-item">
            <span>What you get</span>
            <p>Create a Japanese food communication card to show to staff, save as an image, or share from your device.</p>
          </div>
          <div class="custom-purchase-review-item">
            <span>Refunds and cancellations</span>
            <p>Digital product available immediately after purchase. Generally non-refundable, except where required by law or for a clear payment processing error.</p>
          </div>
          <div class="custom-purchase-review-item">
            <span>Important note</span>
            <p>Communication aid only. No guarantee of food safety, allergy safety, ingredient accuracy, allergen-free meals, or restaurant acceptance.</p>
          </div>
        </div>
        <p class="custom-purchase-review-reminder">Review your selected ingredients and card purpose before purchase.</p>
      </section>
      <section class="custom-sample-preview" aria-labelledby="custom-sample-preview-title">
        <div>
          <h3 id="custom-sample-preview-title">Want to see the card format?</h3>
          <p>View a sample card.</p>
        </div>
        <button class="button secondary custom-sample-preview-button" type="button" data-custom-open-sample>View sample card</button>
      </section>
      ${customFoodCardPurchaseReviewLegalLinksMarkup()}
      <label class="custom-agreement-box">
        <input type="checkbox" data-custom-safety-agreement ${customFoodCardState.safetyAgreed ? "checked" : ""}>
        <span>I understand that Custom Food Card does not guarantee food safety, allergy safety, ingredient accuracy, allergen-free meals, or restaurant acceptance.</span>
      </label>
      <label class="custom-agreement-box">
        <input type="checkbox" data-custom-purchase-review-agreement ${customFoodCardState.purchaseReviewAgreed ? "checked" : ""}>
        <span>${customFoodCardPurchaseReviewAgreementMarkup()}</span>
      </label>
      <div class="custom-step-actions custom-step-actions-split">
        <button class="button secondary" type="button" data-custom-back>Back</button>
        <button class="button primary" type="button" data-custom-create ${canProceedToPayment ? "" : "disabled"}>${checkoutButtonText}</button>
      </div>
      <p class="custom-terms-copy">Payment is processed securely through Stripe.</p>
      ${customFoodCardState.checkoutMessage ? `<p class="custom-checkout-status" role="status" aria-live="polite">${escapeHtml(customFoodCardState.checkoutMessage)}</p>` : ""}
      ${customFoodCardState.checkoutError ? `<div class="custom-selection-error" role="alert">${escapeHtml(customFoodCardState.checkoutError)}</div>` : ""}
    </div>
  `;
}

function customFoodCardIngredientMarkup(selectedIngredients) {
  const ingredientLine = (ingredient) => `
    <span class="custom-card-ingredient-ja">${escapeHtml(ingredient.labelJa)}</span>
    <small lang="en">/ ${escapeHtml(ingredient.labelEn)}</small>
  `;
  if (selectedIngredients.length <= 2) {
    return `<div class="custom-card-ingredients-inline">${selectedIngredients
      .map((ingredient) => `<div>${ingredientLine(ingredient)}</div>`)
      .join("")}</div>`;
  }
  return `
    <ul class="custom-card-ingredient-list">
      ${selectedIngredients.map((ingredient) => `<li>${ingredientLine(ingredient)}</li>`).join("")}
    </ul>
  `;
}

function customFoodCardTemplateMarkup() {
  const selectedIngredients = customFoodCardSelectedIngredients();
  const ingredientMarkup = customFoodCardIngredientMarkup(selectedIngredients);
  let messageMarkup = "";
  let responses = [];

  if (customFoodCardState.cardType === "cannotEat") {
    if (customFoodCardState.reason === "severe") {
      messageMarkup = `
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">SEVERE ALLERGY</span>
          <p>重度の食物アレルギーがあります。</p>
        </div>
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">ALLERGENS</span>
          <p class="custom-card-ingredient-label">アレルギーのあるもの：</p>
          ${ingredientMarkup}
        </div>
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">CROSS-CONTACT WARNING</span>
          <p>少量の混入や調理器具の共有でも<br>危険です。</p>
        </div>
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">IF YOU CANNOT ACCOMMODATE THIS</span>
          <p>対応が難しい場合は、<br>無理に提供しなくて大丈夫です。</p>
        </div>
      `;
    } else if (customFoodCardState.reason === "allergy") {
      messageMarkup = `
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">ALLERGY / INTOLERANCE</span>
          <p>食物アレルギー、または体質的に<br>食べられないものがあります。</p>
        </div>
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">ITEMS I CANNOT EAT</span>
          <p class="custom-card-ingredient-label">食べられないもの：</p>
          ${ingredientMarkup}
        </div>
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">IF YOU CANNOT ACCOMMODATE THIS</span>
          <p>対応が難しい場合は、<br>無理に提供しなくて大丈夫です。</p>
        </div>
      `;
    } else {
      messageMarkup = `
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">DIETARY RESTRICTION</span>
          <p>食事制限のため、<br>食べられないものがあります。</p>
        </div>
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">ITEMS I CANNOT EAT</span>
          <p class="custom-card-ingredient-label">食べられないもの：</p>
          ${ingredientMarkup}
        </div>
        <div class="custom-card-copy-section">
          <span class="custom-card-section-label" lang="en">IF YOU CANNOT ACCOMMODATE THIS</span>
          <p>対応が難しい場合は、<br>無理に提供しなくて大丈夫です。</p>
        </div>
      `;
    }
    responses = [
      { ja: "提供できます", en: "CAN SERVE" },
      { ja: "提供できません", en: "CAN’T SERVE" },
      { ja: "確認します", en: "CHECK" },
    ];
  } else if (customFoodCardState.cardType === "ingredientCheck") {
    messageMarkup = `
      <div class="custom-card-copy-section">
        <span class="custom-card-section-label" lang="en">INGREDIENT CHECK</span>
        <p>この料理に下記のものは入っていますか？</p>
      </div>
      <div class="custom-card-copy-section">
        <span class="custom-card-section-label" lang="en">ITEMS TO CHECK</span>
        <p class="custom-card-ingredient-label">確認したいもの：</p>
        ${ingredientMarkup}
      </div>
    `;
    responses = [
      { ja: "入っています", en: "CONTAINS" },
      { ja: "入っていません", en: "DOES NOT CONTAIN" },
      { ja: "確認します", en: "CHECK" },
    ];
  } else if (customFoodCardState.cardType === "sharedTools") {
    messageMarkup = `
      <div class="custom-card-copy-section">
        <span class="custom-card-section-label" lang="en">SHARED TOOLS OR OIL</span>
        <p>下記の食材と同じ調理器具や油を<br>使っていますか？</p>
      </div>
      <div class="custom-card-copy-section">
        <span class="custom-card-section-label" lang="en">ITEMS TO CHECK</span>
        <p class="custom-card-ingredient-label">確認したいもの：</p>
        ${ingredientMarkup}
      </div>
    `;
    responses = [
      { ja: "共有しています", en: "SHARED" },
      { ja: "共有していません", en: "NOT SHARED" },
      { ja: "確認します", en: "CHECK" },
    ];
  } else {
    messageMarkup = `
      <div class="custom-card-copy-section">
        <span class="custom-card-section-label" lang="en">I PREFER TO AVOID</span>
        <p>できれば下記のものを避けたいです。</p>
      </div>
      <div class="custom-card-copy-section">
        <span class="custom-card-section-label" lang="en">ITEMS TO AVOID</span>
        <p class="custom-card-ingredient-label">避けたいもの：</p>
        ${ingredientMarkup}
      </div>
      <div class="custom-card-copy-section">
        <span class="custom-card-section-label" lang="en">IF POSSIBLE</span>
        <p>可能な範囲で大丈夫です。</p>
      </div>
    `;
    responses = [
      { ja: "できます", en: "CAN AVOID" },
      { ja: "できません", en: "CAN’T AVOID" },
      { ja: "確認します", en: "CHECK" },
    ];
  }

  return `
    <div class="custom-generated-card-message" lang="ja">${messageMarkup}</div>
    <div class="custom-card-point-block">
      <span class="custom-card-section-label" lang="en">PLEASE POINT TO ONE</span>
      <div class="custom-card-point-instruction" lang="ja"><span aria-hidden="true">☝</span><strong>該当するものを指さしてください</strong></div>
    </div>
    <div class="custom-card-response-grid" lang="ja">
      ${responses
        .map(
          (response) => `<div class="custom-card-response-option"><small lang="en">${escapeHtml(response.en)}</small><strong>${escapeHtml(response.ja)}</strong></div>`,
        )
        .join("")}
    </div>
  `;
}

function customGeneratedCardMarkup(mode = "review") {
  const content = customFoodCardLayoutContent(customFoodCardState.cardType, customFoodCardState.reason);
  return customFoodCardLayoutMarkup(
    content,
    customFoodCardSelectedIngredients(),
    mode === "show" ? " is-show-mode" : "",
  );
}

function customFoodCardSaveTarget(button) {
  const showOverlay = button.closest(".custom-show-overlay");
  if (showOverlay) {
    return showOverlay.querySelector(".custom-generated-card.is-show-mode > .custom-card-paper");
  }

  const readyStep = button.closest(".custom-ready-step");
  return readyStep?.querySelector(".custom-generated-card > .custom-card-paper") || null;
}

function customFoodCardSetSaveStatus(message) {
  customFoodCardState.saveMessage = message;
  document.querySelectorAll("[data-custom-save-status]").forEach((status) => {
    status.textContent = message;
    status.hidden = !message;
  });
}

async function customFoodCardWaitForImage(image) {
  if (!image.complete) {
    await Promise.race([
      new Promise((resolve) => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      }),
      new Promise((resolve) => window.setTimeout(resolve, 5000)),
    ]);
  }

  if (!image.naturalWidth) {
    throw new Error("Food Card image asset did not load.");
  }

  if (typeof image.decode === "function") {
    await image.decode().catch(() => {});
  }
}

async function customFoodCardWaitForAssets(card) {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }
  await Promise.all(Array.from(card.querySelectorAll("img")).map(customFoodCardWaitForImage));
}

function customFoodCardCanvasBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("PNG creation failed."));
      }
    }, "image/png");
  });
}

function customFoodCardShareIsAvailable(file) {
  if (typeof navigator === "undefined" || typeof navigator.share !== "function" || typeof navigator.canShare !== "function" || typeof File !== "function") {
    return false;
  }

  try {
    const shareFile = file || new File([""], "custom-food-card.png", { type: "image/png" });
    return navigator.canShare({ files: [shareFile] });
  } catch (error) {
    return false;
  }
}

function customFoodCardActionButtons() {
  return Array.from(document.querySelectorAll("[data-custom-save], [data-custom-share]"));
}

async function customFoodCardCreateImageFile(button, filename) {
  const card = customFoodCardSaveTarget(button);
  let captureClassApplied = false;

  try {
    if (!card || typeof window.html2canvas !== "function") {
      throw new Error("html2canvas is unavailable.");
    }

    await customFoodCardWaitForAssets(card);
    card.classList.add("is-capturing-card");
    captureClassApplied = true;
    await new Promise((resolve) => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve)));
    const canvas = await window.html2canvas(card, {
      backgroundColor: "#f8f7f8",
      scale: 2,
      useCORS: true,
      logging: false,
      imageTimeout: 5000,
      width: card.scrollWidth,
      height: card.scrollHeight,
      windowWidth: Math.max(document.documentElement.clientWidth, card.scrollWidth),
      windowHeight: Math.max(document.documentElement.clientHeight, card.scrollHeight),
    });
    const blob = await customFoodCardCanvasBlob(canvas);
    const file = typeof File === "function"
      ? new File([blob], filename, { type: "image/png" })
      : null;

    return { blob, file };
  } finally {
    if (captureClassApplied) {
      card.classList.remove("is-capturing-card");
    }
  }
}

async function customFoodCardCreateImage(button) {
  const actionButtons = customFoodCardActionButtons();

  actionButtons.forEach((actionButton) => {
    actionButton.disabled = true;
    actionButton.setAttribute("aria-busy", "true");
  });
  const originalLabel = button.textContent;
  button.textContent = "Creating image...";
  customFoodCardSetSaveStatus("Creating image...");

  try {
    const filename = "japan-first-move-food-card.png";
    const { blob, file } = await customFoodCardCreateImageFile(button, filename);

    if (customFoodCardState.imagePreviewUrl) {
      URL.revokeObjectURL(customFoodCardState.imagePreviewUrl);
    }
    customFoodCardState.imagePreviewUrl = URL.createObjectURL(blob);
    customFoodCardState.imagePreviewFile = file;
    customFoodCardState.saveMessage = "Image ready. Press and hold the image, then choose “Save to Photos.”";
    renderCustomFoodCard();
  } catch (error) {
    console.error("Could not create Food Card image.", error);
    customFoodCardSetSaveStatus("Could not create image. Please try again.");
    button.textContent = originalLabel;
  } finally {
    actionButtons.forEach((actionButton) => {
      actionButton.disabled = false;
      actionButton.removeAttribute("aria-busy");
    });
  }
}

async function customFoodCardShareImage(button) {
  const unsupportedMessage = "Sharing is not supported on this browser. Please use Save as image.";
  if (!customFoodCardShareIsAvailable()) {
    customFoodCardSetSaveStatus(unsupportedMessage);
    return;
  }

  const actionButtons = customFoodCardActionButtons();
  actionButtons.forEach((actionButton) => {
    actionButton.disabled = true;
    actionButton.setAttribute("aria-busy", "true");
  });
  const originalLabel = button.textContent;
  button.textContent = "Creating image...";
  customFoodCardSetSaveStatus("Creating image...");

  try {
    const { file } = await customFoodCardCreateImageFile(button, "custom-food-card.png");
    if (!file || !customFoodCardShareIsAvailable(file)) {
      customFoodCardSetSaveStatus(unsupportedMessage);
      button.textContent = originalLabel;
      return;
    }

    await navigator.share({ files: [file] });
    customFoodCardSetSaveStatus("");
  } catch (error) {
    if (error?.name !== "AbortError") {
      console.error("Could not share Food Card image.", error);
      customFoodCardSetSaveStatus("Could not create image. Please try again.");
    } else {
      customFoodCardSetSaveStatus("");
    }
  } finally {
    button.textContent = originalLabel;
    actionButtons.forEach((actionButton) => {
      actionButton.disabled = false;
      actionButton.removeAttribute("aria-busy");
    });
  }
}

function customFoodCardImagePreviewMarkup() {
  if (!customFoodCardState.imagePreviewUrl) {
    return "";
  }

  const previewUrl = escapeHtml(customFoodCardState.imagePreviewUrl);
  return `
    <div class="custom-image-preview-backdrop">
      <section class="custom-image-preview-modal" role="dialog" aria-modal="true" aria-labelledby="custom-image-preview-title">
        <header class="custom-image-preview-header">
          <div>
            <h2 id="custom-image-preview-title">Image ready</h2>
            <p>Press and hold the image, then choose “Save to Photos.”</p>
          </div>
          <button class="button secondary" type="button" data-custom-close-image-preview>Close</button>
        </header>
        <div class="custom-image-preview-frame">
          <img src="${previewUrl}" alt="Generated Japan First Move Food Card" draggable="false" />
        </div>
        <div class="custom-image-preview-actions">
          <a class="button secondary custom-image-preview-download" href="${previewUrl}" download="japan-first-move-food-card.png">Download PNG</a>
        </div>
      </section>
    </div>
  `;
}

function customFoodCardStepFourMarkup() {
  const shareButtonMarkup = customFoodCardShareIsAvailable()
    ? '<button class="button secondary" type="button" data-custom-share>Share card</button>'
    : "";

  return `
    <div class="custom-food-card-step custom-ready-step" data-custom-step="4">
      <div class="custom-step-heading">
        <h2>Your card is ready</h2>
        <p>Show this card to restaurant staff or save it as an image.</p>
      </div>
      ${customGeneratedCardMarkup()}
      <div class="custom-ready-actions">
        <button class="button primary" type="button" data-custom-save>Save as image</button>
        ${shareButtonMarkup}
        <button class="button secondary" type="button" data-custom-restart>Create another card</button>
      </div>
      <p class="custom-save-status" data-custom-save-status role="status" aria-live="polite" ${customFoodCardState.saveMessage ? "" : "hidden"}>${escapeHtml(customFoodCardState.saveMessage)}</p>
    </div>
  `;
}

function customFoodCardStepMarkup() {
  if (customFoodCardState.step === 2) {
    return customFoodCardStepTwoMarkup();
  }
  if (customFoodCardState.step === 3) {
    return customFoodCardStepThreeMarkup();
  }
  if (customFoodCardState.step === 4) {
    return customFoodCardStepFourMarkup();
  }
  return customFoodCardStepOneMarkup();
}

function customFoodCardShowModeMarkup() {
  if (!customFoodCardState.showMode) {
    return "";
  }
  return `
    <div class="custom-show-overlay" role="dialog" aria-modal="true" aria-label="Show food card to staff" ${customFoodCardState.imagePreviewUrl ? 'aria-hidden="true" inert' : ""}>
      <div class="custom-show-controls">
        <button class="button secondary" type="button" data-custom-close-show>Close</button>
        <button class="button secondary" type="button" data-custom-save>Save as image</button>
      </div>
      ${customGeneratedCardMarkup("show")}
      <p class="custom-save-status" data-custom-save-status role="status" aria-live="polite" ${customFoodCardState.saveMessage ? "" : "hidden"}>${escapeHtml(customFoodCardState.saveMessage)}</p>
    </div>
  `;
}

function renderCustomFoodCard() {
  document.title = "Custom Food Card | Japan First Move";
  customFoodCardSaveDraft();
  const imagePreviewMode = Boolean(customFoodCardState.imagePreviewUrl);
  document.body.classList.toggle("is-custom-show-mode", customFoodCardState.showMode);
  document.body.classList.toggle("is-custom-sample-mode", customFoodCardState.sampleMode);
  document.body.classList.toggle("is-custom-image-preview-mode", imagePreviewMode);
  document.documentElement.classList.toggle("is-custom-image-preview-mode", imagePreviewMode);
  app.innerHTML = `
    <div class="page-shell food-card-page custom-food-card-page custom-food-card-mvp-page layout-container" ${customFoodCardState.showMode || customFoodCardState.sampleMode || customFoodCardState.imagePreviewUrl ? 'aria-hidden="true" inert' : ""}>
      <header class="guide-page-header content-container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span>/</span>
          <a href="/food">Food</a><span>/</span>
          <a href="/food-cards">Food cards</a><span>/</span>
          <span>Custom Food Card</span>
        </nav>
        <h1>Custom Food Card</h1>
        <p class="lead">Create a simple Japanese card to show restaurant staff.</p>
      </header>
      <section class="custom-food-card-workspace card-container" aria-label="Custom Food Card builder">
        <div class="custom-step-progress" aria-label="Step ${customFoodCardState.step} of 4">
          <span>Step ${customFoodCardState.step} of 4</span>
          <div aria-hidden="true"><i style="width: ${customFoodCardState.step * 25}%"></i></div>
        </div>
        ${customFoodCardStepMarkup()}
      </section>
    </div>
    ${customFoodCardSampleModalMarkup()}
    ${customFoodCardShowModeMarkup()}
    ${customFoodCardImagePreviewMarkup()}
  `;
  wireCustomFoodCardEvents();
  if (customFoodCardState.sampleMode) {
    document.querySelector("[data-custom-close-sample]")?.focus();
  } else if (customFoodCardState.imagePreviewUrl) {
    document.querySelector("[data-custom-close-image-preview]")?.focus();
  }
}

function wireCustomFoodCardEvents() {
  document.querySelectorAll("[data-custom-card-type]").forEach((button) => {
    button.addEventListener("click", () => {
      const cardType = button.dataset.customCardType;
      if (!customFoodCardTypeIsAvailable(cardType)) {
        return;
      }
      if (customFoodCardState.cardType !== cardType) {
        customFoodCardState.cardType = cardType;
        customFoodCardState.reason = "";
        customFoodCardState.safetyAgreed = false;
        customFoodCardState.purchaseReviewAgreed = false;
      }
      customFoodCardState.error = "";
      customFoodCardSetCheckoutFeedback("");
      renderCustomFoodCard();
    });
  });

  document.querySelectorAll("[data-custom-reason]").forEach((button) => {
    button.addEventListener("click", () => {
      customFoodCardState.reason = button.dataset.customReason;
      customFoodCardSetCheckoutFeedback("");
      renderCustomFoodCard();
    });
  });

  document.querySelectorAll("[data-custom-ingredient-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const ingredientId = button.dataset.customIngredientId;
      const isSelected = customFoodCardState.selectedIngredientIds.includes(ingredientId);
      if (isSelected) {
        customFoodCardState.selectedIngredientIds = customFoodCardState.selectedIngredientIds.filter((id) => id !== ingredientId);
        customFoodCardState.error = "";
      } else if (customFoodCardState.selectedIngredientIds.length >= 5) {
        customFoodCardState.error = "You can choose up to 5 items per card. Please create another card for additional items.";
      } else {
        customFoodCardState.selectedIngredientIds = [...customFoodCardState.selectedIngredientIds, ingredientId];
        customFoodCardState.error = "";
      }
      customFoodCardState.safetyAgreed = false;
      customFoodCardState.purchaseReviewAgreed = false;
      customFoodCardSetCheckoutFeedback("");
      if (customFoodCardState.cardType && !customFoodCardTypeIsAvailable(customFoodCardState.cardType)) {
        customFoodCardState.cardType = "";
        customFoodCardState.reason = "";
      }
      renderCustomFoodCard();
    });
  });

  document.querySelectorAll("[data-custom-ingredient-category]").forEach((details) => {
    details.addEventListener("toggle", () => {
      const categoryId = details.dataset.customIngredientCategory;
      const openCategories = new Set(customFoodCardState.openCategoryIds);
      if (details.open) {
        openCategories.add(categoryId);
      } else {
        openCategories.delete(categoryId);
      }
      customFoodCardState.openCategoryIds = [...openCategories];
      customFoodCardSaveDraft();
    });
  });

  document.querySelector("[data-custom-next]")?.addEventListener("click", () => {
    if (customFoodCardState.step === 1 && customFoodCardState.selectedIngredientIds.length) {
      customFoodCardState.step = 2;
    } else if (customFoodCardState.step === 2) {
      const needsReason = customFoodCardState.cardType === "cannotEat";
      if (!customFoodCardState.cardType || (needsReason && !customFoodCardState.reason)) {
        return;
      }
      customFoodCardState.step = 3;
    }
    customFoodCardState.error = "";
    customFoodCardState.saveMessage = "";
    customFoodCardSetCheckoutFeedback("");
    renderCustomFoodCard();
    window.scrollTo(0, 0);
  });

  document.querySelector("[data-custom-back]")?.addEventListener("click", () => {
    customFoodCardState.step = Math.max(1, customFoodCardState.step - 1);
    customFoodCardState.error = "";
    customFoodCardState.saveMessage = "";
    customFoodCardSetCheckoutFeedback("");
    renderCustomFoodCard();
    window.scrollTo(0, 0);
  });

  document.querySelector("[data-custom-safety-agreement]")?.addEventListener("change", (event) => {
    customFoodCardState.safetyAgreed = event.currentTarget.checked;
    renderCustomFoodCard();
  });

  document.querySelector("[data-custom-purchase-review-agreement]")?.addEventListener("change", (event) => {
    customFoodCardState.purchaseReviewAgreed = event.currentTarget.checked;
    renderCustomFoodCard();
  });

  document.querySelector("[data-custom-open-sample]")?.addEventListener("click", () => {
    customFoodCardState.sampleMode = true;
    renderCustomFoodCard();
  });

  document.querySelector("[data-custom-close-sample]")?.addEventListener("click", () => {
    customFoodCardState.sampleMode = false;
    renderCustomFoodCard();
  });

  document.querySelector("[data-custom-create]")?.addEventListener("click", () => {
    if (!customFoodCardPurchaseReviewIsComplete()) {
      return;
    }
    customFoodCardBeginCheckout();
  });

  document.querySelector("[data-custom-show]")?.addEventListener("click", () => {
    customFoodCardState.sampleMode = false;
    customFoodCardState.showMode = true;
    customFoodCardState.saveMessage = "";
    renderCustomFoodCard();
  });

  document.querySelector("[data-custom-close-show]")?.addEventListener("click", () => {
    customFoodCardState.showMode = false;
    customFoodCardState.saveMessage = "";
    renderCustomFoodCard();
  });

  document.querySelectorAll("[data-custom-save]").forEach((button) => {
    button.addEventListener("click", () => customFoodCardCreateImage(button));
  });

  document.querySelectorAll("[data-custom-share]").forEach((button) => {
    button.addEventListener("click", () => customFoodCardShareImage(button));
  });

  document.querySelector("[data-custom-close-image-preview]")?.addEventListener("click", () => {
    if (customFoodCardState.imagePreviewUrl) {
      URL.revokeObjectURL(customFoodCardState.imagePreviewUrl);
    }
    customFoodCardState.imagePreviewUrl = "";
    customFoodCardState.imagePreviewFile = null;
    customFoodCardState.saveMessage = "";
    renderCustomFoodCard();
  });

  document.querySelector("[data-custom-restart]")?.addEventListener("click", () => {
    customFoodCardClearDraft();
    customFoodCardClearCheckoutDraft();
    resetCustomFoodCardState();
    renderCustomFoodCard();
    window.scrollTo(0, 0);
  });
}

function foodDisclaimer() {
  return `
    <section class="disclaimer-box" aria-label="Important safety note">
      <h2>Important note</h2>
      <p>${escapeHtml(foodCardDisclaimer.english)}</p>
      <p class="jp">${escapeHtml(foodCardDisclaimer.japanese)}</p>
    </section>
  `;
}

function foodGuideCta(guide) {
  if (guide.category !== "food") {
    return "";
  }

  const body =
    foodCtaByGuide[guide.slug] ??
    "If you have allergies or dietary restrictions, use a simple Japanese card before ordering.";

  return `
    <section class="article-section food-guide-cta card-container" aria-labelledby="food-guide-cta-title-${guide.slug}">
      <h2 id="food-guide-cta-title-${guide.slug}">Need to explain food needs?</h2>
      <p>${escapeHtml(body)}</p>
      ${foodCardCtaPanel({ context: "guide" })}
    </section>
  `;
}

function relatedGuidesSection(guide) {
  const relatedGuides = guides
    .filter((item) => item.category === guide.category && item.slug !== guide.slug)
    .slice(0, 3);
  const category = categoryName(guide.category);
  const relatedList = relatedGuides.length
    ? `<div class="related-guide-grid">
        ${relatedGuides.map((item) => relatedGuideCard(item, guide)).join("")}
      </div>`
    : `<p class="related-empty">There are no other ${escapeHtml(category)} guides yet. Start again from the category page.</p>`;

  return `
    <section class="article-section related-guides-section content-container" aria-labelledby="related-guides-title">
      <h2 id="related-guides-title">Related guides</h2>
      <p>Stay in the same situation area, or go back to the category page and choose the closest moment.</p>
      ${relatedList}
      <div class="section-actions">
        <a class="button secondary" href="${categoryHref(guide.category)}" ${trackAttr(`guide_related_back_${guide.slug}`)}>Back to ${escapeHtml(category)}</a>
      </div>
    </section>
  `;
}

function relatedGuideCard(guide, currentGuide) {
  return `
    <a class="related-guide-card category-${guide.category}" href="/guides/${guide.slug}" ${trackAttr(`guide_related_${currentGuide.slug}_${guide.slug}`)}>
      <h3>${escapeHtml(guide.title.replace(" in Japan", ""))}</h3>
    </a>
  `;
}

function colorfulFirstWord() {
  return `<span class="colorful-first" aria-label="First"><span>F</span><span>i</span><span>r</span><span>s</span><span>t</span></span>`;
}

function guideSectionHeading(title, iconSrc = "") {
  const icon = iconSrc ? `<img src="${iconSrc}" alt="" loading="lazy" decoding="async">` : "";
  return `<h2 class="guide-section-title${iconSrc ? " has-icon" : ""}">${icon}${title}</h2>`;
}

function renderGuide(slug) {
  const guide = guideMap[slug];
  if (!guide) {
    renderNotFound();
    return;
  }

  document.title = `${guide.title} | Japan First Move`;
  const introIcon = guideIntroIconMarkup(guide);
  app.innerHTML = `
    <div class="page-shell guide-page layout-container category-${guide.category} guide-${guide.slug}">
      <header class="guide-page-header content-container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span>/</span>
          <a href="${categoryHref(guide.category)}">${escapeHtml(categoryName(guide.category))}</a>
        </nav>
        <h1>${escapeHtml(guide.title)}</h1>
        <div class="guide-intro-card">
          ${introIcon}
          <div>${guide.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
        </div>
      </header>
      <div class="guide-layout">
        <article class="article-card">
          <section class="article-section first-move-box content-container" id="first-move">
            ${guideSectionHeading(`${colorfulFirstWord()} Move`)}
            <p>${escapeHtml(guide.firstMove)}</p>
          </section>
          <section class="article-section steps-section content-container" id="steps">
            ${guideSectionHeading("Quick steps")}
            <ol>${guide.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
            ${guide.tip ? `<div class="guide-tip"><strong>Tip</strong><p>${escapeHtml(guide.tip)}</p></div>` : ""}
          </section>
          <section class="article-section dont-section content-container" id="dont">
            ${guideSectionHeading("Don’t Do This")}
            <div class="dont-list">${guide.dont
              .map(
                (item) => `<div class="dont-item"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></div>`,
              )
              .join("")}</div>
          </section>
          <section class="article-section communication-section say-show-section content-container" id="say-show">
            <div class="communication-heading">
              <img class="communication-heading-icon" src="/assets/section-icons/icon-say-or-show-this.png" alt="" loading="lazy" decoding="async">
              <div class="communication-heading-copy">
                ${guideSectionHeading("Say or show this")}
                <p class="section-intro">Use these phrases to speak or point when you need help.</p>
              </div>
            </div>
            <div class="phrase-grid">
              ${guide.sayShow.map(phraseCard).join("")}
            </div>
          </section>
          <section class="article-section communication-section staff-section content-container" id="staff">
            <div class="communication-heading">
              <img class="communication-heading-icon" src="/assets/section-icons/icon-if-you-see-or-hear-this.png" alt="" loading="lazy" decoding="async">
              <div class="communication-heading-copy">
                ${guideSectionHeading("If You See or Hear This")}
              </div>
            </div>
            <div class="staff-grid">
              ${guide.staff.map(staffCard).join("")}
            </div>
          </section>
          <section class="article-section content-container" id="stuck">
            ${guideSectionHeading("If You’re Stuck")}
            <p>${escapeHtml(guide.stuck)}</p>
          </section>
          <section class="article-section content-container" id="culture">
            ${guideSectionHeading("Tiny Culture Note")}
            <p>${escapeHtml(guide.note)}</p>
          </section>
          ${
            guide.safetyNote
              ? `<section class="article-section guide-safety-note content-container" aria-label="Safety note">
                  ${guideSectionHeading("Safety note")}
                  <p>${escapeHtml(guide.safetyNote)}</p>
                </section>`
              : ""
          }
          ${foodGuideCta(guide)}
          ${relatedGuidesSection(guide)}
        </article>

        <aside class="side-panel" aria-label="Guide summary">
          <div class="move-card">
            <span>First move</span>
            <strong>${escapeHtml(guide.firstMove)}</strong>
          </div>
          <nav class="toc" aria-label="Guide sections">
            <button type="button" data-scroll-to="first-move">First Move</button>
            <button type="button" data-scroll-to="steps">Quick steps</button>
            <button type="button" data-scroll-to="dont">Don’t Do This</button>
            <button type="button" data-scroll-to="say-show">Say or Show This</button>
            <button type="button" data-scroll-to="staff">If You See or Hear This</button>
            <button type="button" data-scroll-to="stuck">If You’re Stuck</button>
          </nav>
        </aside>
      </div>
    </div>
  `;
}

function phraseCard(phrase) {
  const helperMarkup = phrase.helper
    ? `<p class="phrase-helper">${escapeHtml(phrase.helper)}</p>`
    : "";
  const exampleMarkup = phrase.exampleRomaji && phrase.exampleJapanese
    ? `<div class="phrase-example">
        <span class="phrase-example-label">Example</span>
        <span class="romaji">${escapeHtml(phrase.exampleRomaji)}</span>
        <span class="jp">${escapeHtml(phrase.exampleJapanese)}</span>
      </div>`
    : "";
  return `
    <div class="phrase">
      <span class="meaning">${escapeHtml(phrase.use)}</span>
      <span class="romaji">${escapeHtml(phrase.romaji)}</span>
      <span class="jp">${escapeHtml(phrase.japanese)}</span>
      <span class="translation">${escapeHtml(phrase.english)}</span>
      ${helperMarkup}
      ${exampleMarkup}
    </div>
  `;
}

function staffCard(item) {
  return `
    <div class="staff-phrase">
      <span class="romaji">${escapeHtml(item.romaji)}</span>
      <span class="jp">${escapeHtml(item.japanese)}</span>
      <span class="meaning translation">It means: ${escapeHtml(item.means)}</span>
      <span class="your-move-label">Your move</span>
      <span>${escapeHtml(item.move)}</span>
    </div>
  `;
}

const supportEmail = "support@japanfirstmove.com";

function supportEmailLinkMarkup() {
  return `<a class="legal-contact-link" href="mailto:${supportEmail}">${supportEmail}</a>`;
}

const disclaimerEnglishIntro = [
  "Japan First Move provides general travel guidance, simple phrases, sample cards, Custom Food Card, and related digital content as communication aids for travelers visiting Japan.",
  "The information and tools provided on this site are for general informational and communication support purposes only. They are not a substitute for professional advice, official information, local staff instructions, medical advice, food safety advice, allergy safety advice, legal advice, emergency support, or your own judgment.",
  "By using Japan First Move, you understand that local rules, facility policies, services, prices, opening hours, staff responses, ingredients, preparation methods, and available options may vary by location, time, season, facility, restaurant, and situation.",
];

const disclaimerEnglishSections = [
  {
    heading: "1. General travel guidance only",
    paragraphs: [
      "Japan First Move is intended to help with common travel moments, such as ordering food, using transportation, visiting facilities, asking for help, or understanding basic signs and phrases.",
      "We try to make the information practical, simple, and useful. However, Japan First Move does not guarantee that any guide, phrase, translation, example, route, instruction, suggestion, sample card, Custom Food Card, or related digital content will be accurate, complete, current, error-free, or suitable for every situation.",
      "Always check the signs, notices, menus, posted rules, official websites, facility information, and staff instructions at the place you are visiting.",
      "If the information on this site differs from official information or instructions given by staff, the official information or staff instructions should be followed.",
    ],
  },
  {
    heading: "2. Local differences and facility policies",
    paragraphs: [
      "Rules and systems in Japan can differ depending on the city, facility, restaurant, transport operator, store, event, or time of day.",
      "For example, payment methods, ticket machines, seating rules, bus boarding systems, onsen or sento rules, photography rules, food ingredients, and staff support may not be the same everywhere.",
      "Japan First Move may describe common patterns, but those patterns may not apply to every place.",
      "Restaurants, shops, facilities, transport operators, and staff may refuse a request, provide different information, or be unable to support a situation depending on their policies, operations, staff, ingredients, equipment, or circumstances.",
      "You are responsible for checking the actual situation before acting.",
    ],
  },
  {
    heading: "3. Food, allergies, and dietary needs",
    paragraphs: [
      "Food-related guides, phrases, sample cards, translations, and Custom Food Card are communication aids only. They are designed to help you explain food allergies, dietary restrictions, religious dietary needs, food preferences, or ingredients you want to avoid.",
      "They do not provide medical advice, food safety advice, allergy safety advice, religious advice, or professional advice of any kind.",
      "They do not guarantee food safety, allergy safety, allergen-free meals, ingredient accuracy, religious dietary compliance, vegetarian or vegan suitability, or that a restaurant can or will accommodate your request.",
      "They do not guarantee that a meal, drink, ingredient, dish, kitchen, cooking tool, oil, seasoning, soup stock, sauce, topping, or preparation area is free from allergens, restricted ingredients, animal products, alcohol, pork, seafood, gluten, dairy, eggs, nuts, or cross-contact.",
      "Even if you show a card to restaurant staff, ingredients, preparation methods, cross-contact, seasonings, sauces, shared cooking equipment, and staff understanding may vary by restaurant, branch, supplier, season, staff member, menu change, or kitchen condition.",
      "Restaurants, shops, and facilities may use shared cooking tools, shared oil, shared preparation surfaces, shared storage areas, or shared equipment. Staff may not always be able to confirm every ingredient or every risk of cross-contact.",
      "If you have a severe allergy, medical dietary need, religious dietary requirement, or any condition where eating the wrong ingredient could cause serious harm, you should make your own judgment and confirm carefully with staff, an appropriate professional, or the restaurant directly before ordering or eating.",
      "If staff cannot confirm the details, or if the restaurant or facility cannot safely support your needs, do not order or eat the item.",
      "Japan First Move cannot decide whether a food, drink, restaurant, facility, or place is safe for you. You are responsible for your own food choices and safety decisions.",
    ],
  },
  {
    heading: "4. Medical, health, and emergency situations",
    paragraphs: [
      "Japan First Move does not provide medical advice, diagnosis, treatment, emergency instructions, or professional health guidance.",
      "Guides about feeling sick, asking for medicine, or getting help are general travel-support guides only.",
      "If you feel seriously unwell, have severe pain, breathing trouble, an allergic reaction, injury, high fever, confusion, faintness, symptoms that feel urgent, or any condition that may require immediate care, seek help right away.",
      "Depending on the situation, ask nearby staff, your hotel, travel insurance support, a medical professional, emergency services, the police, or your embassy or consulate.",
      "Do not rely on Japan First Move as your only source of help in a medical, emergency, or safety situation.",
    ],
  },
  {
    heading: "5. Legal, safety, and official matters",
    paragraphs: [
      "Japan First Move does not provide legal advice, immigration advice, police advice, insurance advice, official government guidance, or professional advice of any kind.",
      "If you lose a passport, wallet, phone, credit card, residence document, travel document, or other important item, you may need to contact local staff, your hotel, the police, your embassy or consulate, your bank, your card company, your mobile carrier, or your travel insurance provider.",
      "Japan First Move may suggest general first steps, but it cannot tell you what official procedure applies to your specific situation.",
      "For important, urgent, legal, safety-related, immigration-related, police-related, insurance-related, or official matters, confirm the details with the appropriate authority, professional, service provider, or official source.",
    ],
  },
  {
    heading: "6. Translations and phrases",
    paragraphs: [
      "Japan First Move includes Japanese phrases, romaji, English meanings, translations, sample cards, card text, and example sentences to help with communication.",
      "These translations and phrases are intended to be practical and easy to understand, but they may not cover every nuance, dialect, situation, level of politeness, staff response, or individual need.",
      "Japan First Move does not guarantee that any phrase, translation, card text, explanation, or example is accurate, complete, current, error-free, understood by staff, accepted by restaurants or facilities, or suitable for every situation.",
      "Showing a phrase, translation, sample card, or Custom Food Card does not guarantee that staff, restaurants, shops, facilities, or any third party will read, understand, accept, follow, or respond to it.",
      "You are responsible for checking whether the phrase, translation, card text, or explanation matches your own needs before using it.",
      "If something is important, sensitive, medical, legal, financial, food-related, allergy-related, or safety-related, confirm the details with an appropriate person, professional, or official source.",
    ],
  },
  {
    heading: "7. Paid tools and digital content",
    paragraphs: [
      "Some Japan First Move tools, including Custom Food Card, may be paid digital tools.",
      "Custom Food Card is a browser-based digital communication aid. It helps users create a simple Japanese food communication card for food restrictions, allergies, dietary needs, or preferences.",
      "Paid tools and digital content are provided as communication and travel-support aids. Purchasing, creating, displaying, saving, sharing, or using a paid tool does not guarantee a specific result, staff response, restaurant accommodation, food safety, allergy safety, medical outcome, refund from a third party, or successful resolution of a travel problem.",
      "Japan First Move does not guarantee that Custom Food Card, sample cards, phrases, translations, or related digital content will be accepted by restaurants, understood by staff, or suitable for your specific situation.",
      "Payment processing may be handled by a third-party payment provider. Japan First Move is not responsible for errors, delays, or issues caused by third-party payment systems, internet connection problems, device settings, browser behavior, operating systems, storage settings, screenshot settings, or user input errors.",
    ],
  },
  {
    heading: "8. External services and third parties",
    paragraphs: [
      "Japan First Move may link to, mention, or use third-party services, websites, payment providers, analytics tools, external resources, restaurants, shops, transport operators, hotels, pharmacies, medical services, police, embassies, insurance providers, or other third parties.",
      "Japan First Move does not control these third parties and is not responsible for their content, accuracy, availability, privacy practices, terms, policies, actions, services, prices, decisions, or responses.",
      "Your use of third-party services, websites, payment providers, analytics tools, or external resources may be subject to the terms, privacy policies, and rules of those third-party providers.",
    ],
  },
  {
    heading: "9. Availability and updates",
    paragraphs: [
      "Japan First Move may be updated, changed, removed, interrupted, or unavailable at any time.",
      "Information may become outdated, incomplete, unavailable, or inaccurate. We may update content to improve clarity, accuracy, safety, or usability, but we are not obligated to update every page immediately.",
      "Japan First Move does not guarantee that the site, guides, phrases, sample cards, Custom Food Card, or related digital content will always be available, uninterrupted, error-free, secure, or current.",
      "You should not rely on Japan First Move as your only source of current information.",
    ],
  },
  {
    heading: "10. Your responsibility and limitation of liability",
    paragraphs: [
      "You are responsible for how you use Japan First Move.",
      "You are responsible for checking the actual situation, following local rules, asking staff when needed, using your own judgment, and seeking appropriate help when a situation is serious, urgent, unclear, or beyond general travel guidance.",
      "By using this site, you understand that Japan First Move is a support tool, not a guarantee of safety, accuracy, access, service, food safety, allergy safety, restaurant acceptance, staff response, or outcome.",
      "To the fullest extent permitted by applicable law, Japan First Move is not liable for any trouble, damage, loss, injury, illness, allergic reaction, food-related issue, travel problem, misunderstanding, missed opportunity, payment issue, device issue, browser issue, internet connection issue, or other issue arising from or related to the use of this site, guides, phrases, sample cards, Custom Food Card, or related digital content.",
      "This section does not exclude or limit any liability that cannot be excluded or limited under applicable law, including liability arising from intentional misconduct or gross negligence.",
      "Please also review our Terms of Use, Privacy Policy, and Legal Notice before using or purchasing Custom Food Card.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "If you have questions about this Disclaimer, contact:",
      supportEmail,
    ],
  },
];

const disclaimerJapaneseIntro = [
  "Japan First Moveは、日本を訪れる旅行者向けに、一般的な旅行ガイド、簡単なフレーズ、サンプルカード、Custom Food Card、その他関連するデジタルコンテンツを、コミュニケーション補助ツールとして提供しています。",
  "本サイトで提供する情報およびツールは、一般的な情報提供およびコミュニケーション補助を目的とするものです。専門的な助言、公式情報、現地スタッフの指示、医療上の助言、食品安全に関する助言、アレルギー安全に関する助言、法律上の助言、緊急時の支援、または利用者自身の判断に代わるものではありません。",
  "Japan First Moveを利用することにより、利用者は、現地のルール、施設の方針、サービス、価格、営業時間、スタッフの対応、食材、調理方法、利用可能な選択肢が、場所、時期、季節、施設、飲食店、状況によって異なる場合があることを理解したものとします。",
];

const disclaimerJapaneseSections = [
  {
    heading: "1. 一般的な旅行ガイドです",
    paragraphs: [
      "Japan First Moveは、食事の注文、交通機関の利用、施設の利用、助けを求める場面、基本的な表示やフレーズの理解など、日本旅行中によくある場面をサポートすることを目的としています。",
      "Japan First Moveは、実用的で分かりやすい情報の提供を目指しています。ただし、ガイド、フレーズ、翻訳、例文、経路、手順、提案、サンプルカード、Custom Food Card、その他関連するデジタルコンテンツが、正確、完全、最新、エラーがない、またはすべての状況に適していることを保証するものではありません。",
      "訪問先では、掲示、案内、メニュー、施設内のルール、公式ウェブサイト、施設情報、スタッフの指示を必ず確認してください。",
      "本サイトの情報が公式情報またはスタッフの指示と異なる場合は、公式情報またはスタッフの指示に従ってください。",
    ],
  },
  {
    heading: "2. 地域差・施設ごとの違いについて",
    paragraphs: [
      "日本のルールや仕組みは、都市、施設、飲食店、交通機関、店舗、イベント、時間帯によって異なる場合があります。",
      "たとえば、支払方法、券売機、座席ルール、バスの乗車方法、温泉や銭湯のルール、写真撮影のルール、食材、スタッフの対応は、すべての場所で同じとは限りません。",
      "Japan First Moveは一般的な傾向を紹介する場合がありますが、その内容がすべての場所に当てはまるとは限りません。",
      "飲食店、店舗、施設、交通機関、スタッフは、それぞれの方針、運用、スタッフ体制、食材、設備、状況により、要望を断る場合、異なる情報を提供する場合、または対応できない場合があります。",
      "利用者は、実際の状況を確認した上で行動する責任を負います。",
    ],
  },
  {
    heading: "3. 食事・アレルギー・食事制限について",
    paragraphs: [
      "食事に関するガイド、フレーズ、サンプルカード、翻訳、Custom Food Cardは、コミュニケーションを補助するためのツールです。食物アレルギー、食事制限、宗教上の食事制限、食の好み、避けたい食材などを伝えることを補助する目的で提供されています。",
      "これらは、医療上の助言、食品安全に関する助言、アレルギー安全に関する助言、宗教上の助言、その他専門的な助言を提供するものではありません。",
      "食品の安全性、アレルギー対応、アレルゲン不使用の食事、食材情報の正確性、宗教上の食事制限への適合、ベジタリアンまたはヴィーガンへの適合、飲食店が利用者の要望に対応できること、または対応することを保証するものではありません。",
      "食事、飲み物、食材、料理、厨房、調理器具、油、調味料、出汁、ソース、トッピング、調理場所に、アレルゲン、制限対象の食材、動物由来成分、アルコール、豚肉、魚介類、グルテン、乳製品、卵、ナッツ、交差接触が含まれないことを保証するものではありません。",
      "カードを飲食店スタッフに提示した場合であっても、食材、調理方法、交差接触、調味料、ソース、共用の調理器具、スタッフの理解度は、飲食店、支店、仕入先、季節、スタッフ、メニュー変更、厨房の状況によって異なる場合があります。",
      "飲食店、店舗、施設では、共用の調理器具、共用の油、共用の調理台、共用の保管場所、共用の設備を使用している場合があります。スタッフがすべての食材や交差接触のリスクを確認できるとは限りません。",
      "重いアレルギー、医療上の食事制限、宗教上の食事制限、または誤った食材を摂取することで重大な影響が生じる可能性がある場合は、利用者自身の判断により、注文または飲食の前に、スタッフ、適切な専門家、または飲食店に直接慎重に確認してください。",
      "スタッフが詳細を確認できない場合、または飲食店や施設が安全に対応できない場合は、その商品を注文または飲食しないでください。",
      "Japan First Moveは、食品、飲み物、飲食店、施設、場所が利用者にとって安全かどうかを判断するものではありません。利用者は、自身の食事の選択および安全に関する判断について責任を負います。",
    ],
  },
  {
    heading: "4. 医療・健康・緊急時について",
    paragraphs: [
      "Japan First Moveは、医療上の助言、診断、治療、緊急時の指示、専門的な健康指導を提供するものではありません。",
      "体調不良、薬の相談、助けを求める方法に関するガイドは、一般的な旅行サポート情報にすぎません。",
      "強い体調不良、激しい痛み、呼吸困難、アレルギー反応、けが、高熱、意識の混乱、失神しそうな状態、緊急性を感じる症状、または直ちに対応が必要と思われる状態がある場合は、すぐに助けを求めてください。",
      "状況に応じて、近くのスタッフ、宿泊先、旅行保険のサポート、医療専門家、緊急サービス、警察、大使館または領事館に相談してください。",
      "医療、緊急時、または安全に関わる状況において、Japan First Moveを唯一の情報源または支援手段として利用しないでください。",
    ],
  },
  {
    heading: "5. 法律・安全・公的手続きについて",
    paragraphs: [
      "Japan First Moveは、法律上の助言、入国・在留に関する助言、警察に関する助言、保険に関する助言、政府機関による公式案内、その他専門的な助言を提供するものではありません。",
      "パスポート、財布、携帯電話、クレジットカード、在留関連書類、旅行書類、その他重要な物を紛失した場合は、現地スタッフ、宿泊先、警察、大使館または領事館、銀行、カード会社、携帯電話会社、旅行保険会社などに連絡する必要がある場合があります。",
      "Japan First Moveは一般的な最初の対応を提案する場合がありますが、利用者の個別の状況にどの公的手続きが適用されるかを判断するものではありません。",
      "重要、緊急、法律、安全、入国・在留、警察、保険、公的手続きに関わる事項については、適切な機関、専門家、サービス提供者、または公式情報源に確認してください。",
    ],
  },
  {
    heading: "6. 翻訳・フレーズについて",
    paragraphs: [
      "Japan First Moveには、コミュニケーションを補助するための日本語フレーズ、ローマ字、英語の意味、翻訳、サンプルカード、カード文言、例文が含まれます。",
      "これらの翻訳やフレーズは、実用的で分かりやすいことを目指していますが、すべてのニュアンス、方言、状況、敬意の度合い、スタッフの反応、個別のニーズを網羅するものではありません。",
      "Japan First Moveは、フレーズ、翻訳、カードの文言、説明、例文が、正確、完全、最新、エラーがない、スタッフに理解される、飲食店や施設に受け入れられる、またはすべての状況に適していることを保証しません。",
      "フレーズ、翻訳、サンプルカード、Custom Food Cardを提示した場合であっても、スタッフ、飲食店、店舗、施設、その他第三者が、それを読む、理解する、受け入れる、従う、または対応することを保証するものではありません。",
      "フレーズ、翻訳、カードの文言、説明が自身のニーズに合っているかを確認する責任は利用者にあります。",
      "重要、慎重な確認が必要、医療、法律、金銭、食事、アレルギー、安全に関わる事項については、適切な人物、専門家、または公式情報源に確認してください。",
    ],
  },
  {
    heading: "7. 有料ツール・デジタルコンテンツについて",
    paragraphs: [
      "Japan First Moveの一部のツールには、Custom Food Cardを含む有料デジタルツールが含まれる場合があります。",
      "Custom Food Cardは、食事制限、アレルギー、食事上の希望などを日本語で伝えるためのカードを作成できる、ブラウザ上で利用するデジタルのコミュニケーション補助ツールです。",
      "有料ツールおよびデジタルコンテンツは、コミュニケーションおよび旅行サポートの補助を目的として提供されます。有料ツールを購入、作成、表示、保存、共有、利用することにより、特定の結果、スタッフの対応、飲食店での受け入れ、食品の安全性、アレルギー対応、医療上の結果、第三者からの返金、または旅行上の問題の解決を保証するものではありません。",
      "Japan First Moveは、Custom Food Card、サンプルカード、フレーズ、翻訳、その他関連するデジタルコンテンツが、飲食店に受け入れられること、スタッフに理解されること、または利用者の個別の状況に適していることを保証しません。",
      "決済処理は第三者の決済事業者によって行われる場合があります。Japan First Moveは、第三者の決済システム、インターネット接続、端末設定、ブラウザの挙動、OS、保存設定、スクリーンショット設定、利用者の入力ミス等に起因するエラー、遅延、問題について責任を負いません。",
    ],
  },
  {
    heading: "8. 外部サービス・第三者について",
    paragraphs: [
      "Japan First Moveは、第三者サービス、外部ウェブサイト、決済事業者、アクセス解析ツール、外部リソース、飲食店、店舗、交通機関、宿泊施設、薬局、医療機関、警察、大使館、保険会社、その他第三者へのリンク、言及、または利用を行う場合があります。",
      "Japan First Moveは、これらの第三者を管理しておらず、その内容、正確性、利用可能性、プライバシーの取扱い、利用規約、ポリシー、行為、サービス、価格、判断、対応について責任を負いません。",
      "第三者サービス、外部ウェブサイト、決済事業者、アクセス解析ツール、外部リソースの利用には、各提供者が定める利用規約、プライバシーポリシー、その他のルールが適用される場合があります。",
    ],
  },
  {
    heading: "9. 利用可能性・更新について",
    paragraphs: [
      "Japan First Moveは、いつでも更新、変更、削除、中断、または利用できない状態になる場合があります。",
      "情報は古くなる、不完全になる、利用できなくなる、または不正確になる場合があります。Japan First Moveは、明確性、正確性、安全性、利便性を改善するために内容を更新する場合がありますが、すべてのページを直ちに更新する義務を負うものではありません。",
      "Japan First Moveは、本サイト、ガイド、フレーズ、サンプルカード、Custom Food Card、その他関連するデジタルコンテンツが、常に利用可能、中断がない、エラーがない、安全である、または最新であることを保証しません。",
      "Japan First Moveを、最新情報を得るための唯一の情報源として利用しないでください。",
    ],
  },
  {
    heading: "10. 利用者の責任および責任範囲",
    paragraphs: [
      "利用者は、Japan First Moveをどのように利用するかについて責任を負います。",
      "利用者は、実際の状況を確認し、現地のルールに従い、必要に応じてスタッフに確認し、自身の判断を行い、状況が深刻、緊急、不明確、または一般的な旅行ガイドの範囲を超える場合には、適切な支援を求める責任を負います。",
      "本サイトを利用することにより、利用者は、Japan First Moveがサポートツールであり、安全性、正確性、利用可能性、サービス、食品の安全性、アレルギー対応、飲食店での受け入れ、スタッフの対応、または結果を保証するものではないことを理解したものとします。",
      "適用法令により認められる範囲において、Japan First Moveは、本サイト、ガイド、フレーズ、サンプルカード、Custom Food Card、その他関連するデジタルコンテンツの利用に関連して生じたトラブル、損害、損失、けが、体調不良、アレルギー反応、食に関する問題、旅行上の問題、誤解、機会損失、決済上の問題、端末・ブラウザ・インターネット接続の問題、その他の問題について責任を負いません。",
      "本項は、故意または重大な過失による責任など、適用法令上免除または制限できない責任を免除または制限するものではありません。",
      "Custom Food Cardを利用または購入する前に、利用規約、プライバシーポリシー、特定商取引法に基づく表記もあわせてご確認ください。",
    ],
  },
  {
    heading: "お問い合わせ",
    paragraphs: [
      "本免責事項に関するお問い合わせは、以下の連絡先までお願いいたします。",
      supportEmail,
    ],
  },
];

function legalPageLinkMarkup(href, label) {
  return `<a class="legal-contact-link" href="${href}">${escapeHtml(label)}</a>`;
}

function disclaimerParagraphMarkup(paragraph) {
  if (paragraph === supportEmail) {
    return supportEmailLinkMarkup();
  }

  if (paragraph === "Please also review our Terms of Use, Privacy Policy, and Legal Notice before using or purchasing Custom Food Card.") {
    return `Please also review our ${legalPageLinkMarkup("/terms", "Terms of Use")}, ${legalPageLinkMarkup("/privacy", "Privacy Policy")}, and ${legalPageLinkMarkup("/legal-notice", "Legal Notice")} before using or purchasing Custom Food Card.`;
  }

  if (paragraph === "Custom Food Cardを利用または購入する前に、利用規約、プライバシーポリシー、特定商取引法に基づく表記もあわせてご確認ください。") {
    return `Custom Food Cardを利用または購入する前に、${legalPageLinkMarkup("/terms", "利用規約")}、${legalPageLinkMarkup("/privacy", "プライバシーポリシー")}、${legalPageLinkMarkup("/legal-notice", "特定商取引法に基づく表記")}もあわせてご確認ください。`;
  }

  return escapeHtml(paragraph);
}

function disclaimerSectionMarkup(section) {
  return `
    <section class="legal-section">
      <h2>${escapeHtml(section.heading)}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${disclaimerParagraphMarkup(paragraph)}</p>`).join("")}
    </section>
  `;
}

function disclaimerLanguageMarkup({ title, titleId, lang, updated, intro, sections }) {
  return `
    <div class="disclaimer-language" ${lang ? `lang="${lang}" ` : ""}aria-labelledby="${titleId}">
      <section class="legal-section">
        <h2 id="${titleId}">${escapeHtml(title)}</h2>
        <p class="legal-page-updated">${escapeHtml(updated)}</p>
        ${intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </section>
      ${sections.map(disclaimerSectionMarkup).join("")}
    </div>
  `;
}

function disclaimerPageMarkup() {
  return `
    ${disclaimerLanguageMarkup({
      title: "Disclaimer",
      titleId: "disclaimer-english-title",
      updated: "Last updated: July 16, 2026",
      intro: disclaimerEnglishIntro,
      sections: disclaimerEnglishSections,
    })}
    ${disclaimerLanguageMarkup({
      title: "免責事項",
      titleId: "disclaimer-japanese-title",
      lang: "ja",
      updated: "最終更新日：2026年7月16日",
      intro: disclaimerJapaneseIntro,
      sections: disclaimerJapaneseSections,
    })}
  `;
}

const termsOfUseEnglishText = `Terms of Use

Last updated: July 16, 2026

These Terms of Use apply to your use of Japan First Move, including the website, guides, phrases, sample cards, Custom Food Card, and any related digital content, tools, or features.

By accessing or using Japan First Move, or by purchasing Custom Food Card, you agree to these Terms of Use, our Disclaimer, Privacy Policy, and Legal Notice.

If you do not agree to these Terms of Use, please do not use Japan First Move or purchase Custom Food Card.

1. About Japan First Move

Japan First Move provides general travel-support information for visitors in Japan.

The site is designed to help users understand common real-world situations and decide a practical first move, such as ordering food, using transportation, visiting facilities, explaining food needs, or asking for help.

Japan First Move is not a map service, live translation service, emergency service, medical service, legal service, travel agency, restaurant booking service, food safety certification service, allergy safety service, religious dietary certification service, or official information provider.

Japan First Move is an independent guide and is not affiliated with public transport operators, restaurants, shops, shrines, temples, government services, medical institutions, police, embassies, or other organizations unless expressly stated.

2. Eligibility and user responsibility

You are responsible for how you use Japan First Move.

You agree to use the site only for lawful, personal, and reasonable travel-support purposes.

You are responsible for checking the actual situation around you, following local rules, reading posted signs, checking menus and notices, asking staff when needed, and using your own judgment.

If a situation is serious, urgent, unsafe, unclear, medical, legal, food-related, allergy-related, money-related, travel-document-related, or otherwise beyond general travel guidance, you should seek appropriate help from local staff, emergency services, medical professionals, police, your hotel, your travel insurance provider, your embassy or consulate, or another appropriate source.

You should not rely on Japan First Move as your only source of information in any situation where safety, health, legal rights, travel documents, money, food allergies, dietary restrictions, or emergency response may be involved.

3. No professional advice

Japan First Move does not provide medical advice, legal advice, emergency instructions, immigration advice, insurance advice, religious advice, religious dietary certification, food safety advice, food safety certification, allergy safety advice, or other professional advice.

Any guide, phrase, card, note, suggestion, explanation, or example on the site is provided for general informational, communication-support, and travel-support purposes only.

Japan First Move does not replace direct confirmation with restaurant staff, facility staff, medical professionals, legal professionals, official authorities, or other qualified persons.

4. Food cards and dietary communication tools

Japan First Move may provide food-related guides, sample cards, phrases, translations, and Custom Food Card to help users communicate allergies, dietary restrictions, religious dietary needs, food preferences, or ingredients they want to avoid.

These tools are communication aids only.

They do not guarantee food safety, allergy safety, allergen-free meals, ingredient accuracy, religious dietary compliance, vegetarian or vegan suitability, avoidance of cross-contact, staff understanding, restaurant acceptance, or that a restaurant can or will accommodate your request.

Restaurants, shops, hotels, and other facilities may use different ingredients, shared cooking tools, shared oil, shared preparation areas, shared storage, shared equipment, or changing suppliers.

Staff may not always know or be able to confirm every ingredient, seasoning, broth, soup stock, sauce, oil, topping, preparation method, or cross-contact risk.

If you have a severe allergy, medical dietary need, religious dietary requirement, or any condition where eating the wrong ingredient could cause harm, you must confirm carefully with staff and use your own judgment before ordering or eating.

If staff cannot confirm the details, or if a restaurant or facility cannot safely support your needs, you should not order or eat the item.

5. Custom Food Card

Custom Food Card is a browser-based digital communication aid that helps users create a simple Japanese food communication card for food restrictions, allergies, dietary needs, or preferences.

Users can select ingredients, dietary needs, or food-related messages and generate a card to show to staff.

You are responsible for selecting the correct items, reviewing the card before purchase and before use, and deciding whether the card is appropriate for your situation.

Custom Food Card is not medical advice, food safety advice, allergy safety advice, or professional advice. It does not replace direct confirmation with restaurant staff, medical professionals, or other qualified persons.

Japan First Move is not responsible for errors caused by incorrect user selections, misunderstanding of ingredients, incomplete information, device display issues, browser issues, internet connection problems, staff misunderstanding, or changes in restaurant ingredients or preparation methods.

Creating, saving, showing, purchasing, sharing, or using a Custom Food Card does not guarantee that staff will understand it, accept it, respond to it, accommodate your request, or provide safe food.

6. Paid digital tools and payments

Some features of Japan First Move, including Custom Food Card, may be offered as paid digital tools or paid digital content.

Prices, features, availability, payment methods, and access conditions may change in the future. The price and conditions shown at the time of purchase apply to that purchase.

Payments may be processed by a third-party payment provider such as Stripe or another payment service.

By making a purchase, you may also be subject to the payment provider’s own terms, privacy policy, fees, security procedures, and processing rules.

Payment processing is handled by Stripe. Japan First Move does not store your full credit card number.

Japan First Move is not responsible for payment failures, processing delays, card declines, third-party payment errors, internet connection problems, device issues, browser issues, or user input errors.

Unless otherwise stated at the time of purchase, paid digital tools are provided for personal travel-support use only and do not guarantee any specific outcome, staff response, restaurant accommodation, food safety, allergy safety, medical outcome, refund from a third party, or successful resolution of a travel problem.

7. Refunds and cancellations

Custom Food Card and other paid digital tools are digital products that can be created, displayed, saved, or used immediately after purchase.

Due to the nature of digital products, refunds and cancellations are generally not available after purchase, except where required by applicable law or where there is a clear payment processing error, such as an incorrect charge or duplicate charge.

We do not generally provide refunds for reasons such as changing your mind, selecting the wrong ingredient or item, no longer needing the card, being unable to use the card due to your device, browser, internet connection, screenshot settings, storage settings, or similar user-side issues.

Please review your selected ingredients, card purpose, card content, and purchase details carefully before completing your purchase.

If you believe you were charged incorrectly, or if there is a clear payment processing issue such as a duplicate charge, please contact us. We may review the situation, but this does not guarantee a refund unless required by applicable law or where a clear payment processing error is confirmed.

Nothing in this section limits any rights you may have under applicable consumer protection laws.

8. Accuracy and availability

We try to make Japan First Move practical, clear, and useful, but we do not guarantee that the site or its content will always be accurate, complete, current, error-free, uninterrupted, secure, or available.

Travel conditions, facility rules, store policies, prices, opening hours, signs, transport systems, food ingredients, staff responses, and local procedures may change without notice.

Japan First Move may update, modify, suspend, remove, or discontinue any content, feature, page, route, price, tool, or service at any time.

Japan First Move is provided on an “as is” and “as available” basis.

9. Translations, phrases, and language support

Japan First Move may include Japanese phrases, romaji, English meanings, example translations, show-to-staff text, sample cards, and card text.

These are provided for practical communication support only.

We do not guarantee that every phrase, translation, card text, or explanation is perfect, complete, legally precise, medically precise, culturally appropriate for every situation, or understood by every person.

Showing a phrase, translation, sample card, or Custom Food Card does not guarantee that staff, restaurants, shops, facilities, or any third party will read, understand, accept, follow, or respond to it.

If a phrase or translation is used in a serious, sensitive, medical, legal, financial, food allergy, dietary restriction, safety, or emergency situation, you should confirm the details with an appropriate person, professional, or official source.

10. Third-party services and external links

Japan First Move may refer to, link to, mention, or interact with third-party services, including restaurants, shops, hotels, transport operators, pharmacies, medical services, police, embassies, insurance providers, payment providers, analytics tools, map services, browser services, or device features.

Japan First Move does not control third-party services and is not responsible for their content, availability, accuracy, prices, actions, policies, decisions, security, privacy practices, or service quality.

Your use of third-party services is at your own risk and may be subject to their own terms, privacy policies, and rules.

11. Prohibited use

You agree not to misuse Japan First Move.

You must not:

- use the site for unlawful, harmful, fraudulent, abusive, or misleading purposes;
- copy, scrape, reproduce, resell, redistribute, or commercially exploit the site or its content without permission;
- interfere with, damage, overload, reverse engineer, or attempt to gain unauthorized access to the site or its systems;
- use the site to create content that misrepresents Japan First Move or falsely suggests endorsement;
- remove copyright notices, brand marks, safety notes, disclaimers, or terms from any content;
- use food cards, phrases, or guides in a way that creates false certainty about food safety, allergy safety, medical safety, legal status, religious compliance, or official approval;
- use Custom Food Card or any generated content for commercial resale, redistribution, or operation of another service without permission.

12. Intellectual property

Japan First Move, including its text, guides, layouts, design, graphics, icons, card formats, phrases, tools, and other content, is owned by or licensed to the operator of Japan First Move, unless otherwise stated.

You may use the site and its generated content for your own personal travel-support purposes.

You may not copy, modify, sell, license, publish, distribute, reproduce, scrape, or create derivative works from Japan First Move content for commercial purposes without written permission.

You may not remove or alter copyright notices, brand marks, safety notes, disclaimers, legal notices, or terms included in Japan First Move content.

13. User input and generated cards

If you enter or select information to create a Custom Food Card or similar tool, you are responsible for the accuracy and completeness of that input.

You should not enter sensitive personal information unless it is necessary for your own use of the tool.

Japan First Move may process your selections or inputs only for the purpose of providing the feature, improving the service, operating the site, or as otherwise described in the Privacy Policy.

You should review any generated card before purchasing, saving, sharing, or showing it to staff.

14. No guarantees

Japan First Move makes no warranties or representations, express or implied, about the site, guides, phrases, translations, sample cards, Custom Food Card, or any related digital content.

Japan First Move does not guarantee that the site will meet your needs, that the content will be accurate or complete, that a phrase or card will be understood, that a facility will provide support, that food will be safe, that a restaurant can or will accommodate your request, or that any problem will be resolved.

Japan First Move does not guarantee food safety, allergy safety, allergen-free meals, ingredient accuracy, religious dietary compliance, vegetarian or vegan suitability, restaurant acceptance, staff understanding, or successful communication.

15. Limitation of liability

To the fullest extent permitted by applicable law, Japan First Move is not liable for any damage, loss, injury, illness, allergic reaction, food-related issue, travel problem, misunderstanding, missed opportunity, payment issue, device issue, browser issue, internet connection issue, data loss, third-party service issue, inability to access the site, or other trouble arising from or related to your use of the site, guides, phrases, sample cards, Custom Food Card, or any related digital content.

This includes, but is not limited to, issues involving travel disruption, incorrect decisions, staff misunderstanding, food allergies, cross-contact, illness, injury, lost items, missed transportation, payment problems, device problems, data loss, third-party services, or inability to access the site.

Nothing in these Terms excludes or limits any liability that cannot be excluded or limited under applicable law, including liability arising from intentional misconduct or gross negligence.

16. Changes to these Terms

Japan First Move may update these Terms of Use from time to time.

When we update these Terms of Use, we may change the “Last updated” date at the top of this page.

Your continued use of Japan First Move after the Terms are updated means that you accept the updated Terms.

17. Governing law and jurisdiction

These Terms of Use, the Disclaimer, the Privacy Policy, the Legal Notice, and any use of Japan First Move are governed by the laws of Japan, unless otherwise required by applicable law.

Any disputes arising from or related to Japan First Move shall be handled under the laws of Japan and by the competent courts of Japan, unless otherwise required by applicable law.

18. Language

These Terms of Use may be provided in English and Japanese.

In the event of any inconsistency between the English and Japanese versions, the Japanese version shall prevail to the extent permitted by applicable law.

19. Contact

If you have questions about these Terms of Use, please contact:

support@japanfirstmove.com`;

const termsOfUseJapaneseText = `利用規約

最終更新日：2026年7月16日

本利用規約は、Japan First Moveのウェブサイト、ガイド、フレーズ、サンプルカード、Custom Food Card、その他関連するデジタルコンテンツ、ツール、機能の利用に適用されます。

Japan First Moveにアクセスまたは利用すること、またはCustom Food Cardを購入することにより、利用者は本利用規約、免責事項、プライバシーポリシー、特定商取引法に基づく表記に同意したものとします。

本利用規約に同意しない場合は、Japan First Moveを利用せず、Custom Food Cardを購入しないでください。

1. Japan First Moveについて

Japan First Moveは、日本を訪れる旅行者向けに一般的な旅行サポート情報を提供します。

本サイトは、食事の注文、交通機関の利用、施設の訪問、食事に関する希望の説明、助けを求めることなど、現実のよくある状況を理解し、実用的な最初の行動を判断できるよう支援することを目的としています。

Japan First Moveは、地図サービス、リアルタイム翻訳サービス、緊急サービス、医療サービス、法律サービス、旅行代理店、レストラン予約サービス、食品安全認証サービス、アレルギー安全サービス、宗教上の食事認証サービス、または公式情報提供サービスではありません。

Japan First Moveは独立したガイドであり、明示されている場合を除き、公共交通機関、飲食店、店舗、神社、寺院、政府機関、医療機関、警察、大使館、その他の団体と提携しているものではありません。

2. 利用資格および利用者の責任

利用者は、Japan First Moveをどのように利用するかについて責任を負います。

利用者は、本サイトを適法で、個人的かつ合理的な旅行サポート目的に限って利用することに同意します。

利用者は、周囲の実際の状況を確認し、現地のルールに従い、掲示された案内を読み、メニューや注意書きを確認し、必要に応じてスタッフに確認し、自身の判断を用いる責任を負います。

状況が深刻、緊急、危険、不明確、医療、法律、食事、アレルギー、金銭、旅行書類に関わるもの、または一般的な旅行ガイドの範囲を超える場合は、現地スタッフ、緊急サービス、医療専門家、警察、宿泊先、旅行保険会社、大使館・領事館、その他適切な情報源に支援を求めてください。

安全、健康、法的権利、旅行書類、金銭、食物アレルギー、食事制限、または緊急対応が関係する状況では、Japan First Moveを唯一の情報源として頼らないでください。

3. 専門的助言ではないこと

Japan First Moveは、医療上の助言、法律上の助言、緊急時の指示、入国・在留に関する助言、保険に関する助言、宗教上の助言、宗教上の食事認証、食品安全に関する助言、食品安全認証、アレルギー安全に関する助言、その他の専門的助言を提供するものではありません。

本サイト上のガイド、フレーズ、カード、注意書き、提案、説明、または例は、一般的な情報提供、コミュニケーション補助、および旅行サポート目的でのみ提供されます。

Japan First Moveは、飲食店スタッフ、施設スタッフ、医療専門家、法律専門家、公的機関、その他適切な専門家への直接確認に代わるものではありません。

4. Food Cardおよび食事に関するコミュニケーションツール

Japan First Moveは、利用者がアレルギー、食事制限、宗教上の食事条件、食の好み、または避けたい食材を伝えるための食事関連ガイド、サンプルカード、フレーズ、翻訳、Custom Food Cardを提供する場合があります。

これらのツールはコミュニケーション補助のみを目的としています。

これらは、食品の安全性、アレルギー対応、アレルゲン不使用の食事、食材情報の正確性、宗教上の食事制限への適合、ベジタリアンまたはヴィーガンへの適合、交差接触の回避、スタッフの理解、飲食店での受け入れ、飲食店が利用者の要望に対応できること、または対応することを保証するものではありません。

飲食店、店舗、宿泊施設、その他の施設では、異なる食材、共用の調理器具、共用の油、共用の調理場所、共用の保管場所、共用設備、または変更される仕入先を使用している場合があります。

スタッフが、すべての食材、調味料、だし、スープ、ソース、油、トッピング、調理方法、または交差接触リスクを常に把握または確認できるとは限りません。

重いアレルギー、医療上の食事制限、宗教上の食事制限、または誤った食材を摂取することで害が生じる可能性がある場合は、注文または飲食の前にスタッフへ慎重に確認し、自身の判断を用いる必要があります。

スタッフが詳細を確認できない場合、または飲食店や施設が利用者の条件に安全に対応できない場合は、その商品を注文または飲食しないでください。

5. Custom Food Card

Custom Food Cardは、食事制限、アレルギー、食事上の希望などを日本語で伝えるためのカードを作成できる、ブラウザ上で利用するデジタルのコミュニケーション補助ツールです。

利用者は、食材、食事条件、または食事関連メッセージを選択し、スタッフに提示するカードを生成できます。

利用者は、正しい項目を選択し、購入前および使用前にカードを確認し、そのカードが自身の状況に適しているかを判断する責任を負います。

Custom Food Cardは、医療上の助言、食品安全に関する助言、アレルギー安全に関する助言、または専門的な助言ではありません。飲食店スタッフ、医療専門家、その他適切な専門家への直接確認に代わるものではありません。

Japan First Moveは、利用者の誤った選択、食材の誤解、不完全な情報、端末表示の問題、ブラウザの問題、インターネット接続の問題、スタッフの誤解、または飲食店の食材や調理方法の変更に起因するエラーについて責任を負いません。

Custom Food Cardを作成、保存、提示、購入、共有、または利用しても、スタッフがそれを理解、受け入れ、対応、配慮、または安全な食事を提供することを保証するものではありません。

6. 有料デジタルツールおよび決済

Japan First Moveの一部機能には、Custom Food Cardを含む有料デジタルツールまたは有料デジタルコンテンツが含まれる場合があります。

価格、機能、利用可能性、支払方法、およびアクセス条件は、将来変更される場合があります。購入時に表示される価格および条件が、その購入に適用されます。

決済は、Stripeまたはその他の決済サービスなどの第三者決済事業者により処理される場合があります。

購入を行うことにより、利用者は決済事業者自身の規約、プライバシーポリシー、手数料、セキュリティ手続き、および処理ルールの適用を受ける場合があります。

決済処理はStripeによって行われます。Japan First Moveは、利用者のクレジットカード番号全体を保存しません。

Japan First Moveは、決済失敗、処理遅延、カード決済の拒否、第三者決済エラー、インターネット接続の問題、端末の問題、ブラウザの問題、または利用者の入力ミスについて責任を負いません。

購入時に別途明示されない限り、有料デジタルツールは個人的な旅行サポート用途のために提供され、特定の結果、スタッフの対応、飲食店での配慮、食品の安全性、アレルギー対応、医療上の結果、第三者からの返金、または旅行上の問題解決を保証するものではありません。

7. 返金およびキャンセル

Custom Food Cardおよびその他の有料デジタルツールは、購入後すぐに作成、表示、保存、または利用できるデジタル商品です。

デジタル商品の性質上、購入後の返金・キャンセルは原則としてお受けできません。ただし、適用法令により必要な場合、または誤請求や重複請求など明らかな決済処理上の誤りがある場合を除きます。

気が変わった、誤った食材や項目を選択した、カードが不要になった、端末・ブラウザ・インターネット接続・スクリーンショット設定・保存設定その他利用者側の事情によりカードを利用できなかった等の理由による返金は、原則としてお受けできません。

購入前に、選択した食材、カードの用途、カードの内容、および購入内容を必ずご確認ください。

誤って請求されたと思われる場合、または重複請求など明確な決済処理上の問題がある場合は、お問い合わせください。状況を確認する場合がありますが、適用法令により必要な場合または明確な決済処理上の誤りが確認された場合を除き、返金を保証するものではありません。

本項のいかなる内容も、適用される消費者保護法に基づき利用者が有する権利を制限するものではありません。

8. 正確性および利用可能性

Japan First Moveは、実用的で明確かつ有用なサイトとなるよう努めていますが、サイトまたはそのコンテンツが常に正確、完全、最新、エラーなし、中断なし、安全、または利用可能であることを保証しません。

旅行状況、施設ルール、店舗方針、価格、営業時間、標識、交通システム、食材、スタッフの対応、現地の手順は予告なく変更される場合があります。

Japan First Moveは、いかなるコンテンツ、機能、ページ、ルート、価格、ツール、またはサービスについても、いつでも更新、変更、一時停止、削除、または終了する場合があります。

Japan First Moveは、「現状有姿」および「提供可能な範囲」で提供されます。

9. 翻訳、フレーズ、言語サポート

Japan First Moveには、日本語フレーズ、ローマ字、英語の意味、翻訳例、スタッフに見せるためのテキスト、サンプルカード、カード文言が含まれる場合があります。

これらは実用的なコミュニケーション支援のために提供されるものです。

すべてのフレーズ、翻訳、カード文言、または説明が、あらゆる状況において完全、正確、法的に精密、医学的に精密、文化的に適切、またはすべての人に理解されることを保証するものではありません。

フレーズ、翻訳、サンプルカード、Custom Food Cardを提示した場合であっても、スタッフ、飲食店、店舗、施設、その他第三者が、それを読む、理解する、受け入れる、従う、または対応することを保証するものではありません。

フレーズや翻訳を、深刻、繊細、医療、法律、金銭、食物アレルギー、食事制限、安全、または緊急に関わる状況で使用する場合は、適切な人物、専門家、または公式情報源に詳細を確認してください。

10. 第三者サービスおよび外部リンク

Japan First Moveは、飲食店、店舗、宿泊施設、交通事業者、薬局、医療機関、警察、大使館、保険会社、決済事業者、アクセス解析ツール、地図サービス、ブラウザサービス、端末機能などの第三者サービスに言及、リンク、紹介、または連携する場合があります。

Japan First Moveは第三者サービスを管理しておらず、そのコンテンツ、利用可能性、正確性、価格、行為、方針、判断、セキュリティ、プライバシー慣行、またはサービス品質について責任を負いません。

第三者サービスの利用は利用者自身の責任で行うものとし、それぞれの規約、プライバシーポリシー、その他のルールの適用を受ける場合があります。

11. 禁止事項

利用者は、Japan First Moveを不正に利用しないことに同意します。

利用者は以下の行為をしてはなりません。

- 違法、有害、詐欺的、濫用的、または誤解を招く目的で本サイトを利用すること。
- 許可なく本サイトまたはそのコンテンツをコピー、スクレイピング、複製、再販売、再配布、または商業的に利用すること。
- 本サイトまたはそのシステムに干渉、損害、過負荷を与えること、リバースエンジニアリングを行うこと、または不正アクセスを試みること。
- Japan First Moveを誤って表示する、または承認・推薦があるかのように誤認させるコンテンツ作成に本サイトを利用すること。
- コンテンツから著作権表示、ブランドマーク、安全上の注意、免責事項、または規約を削除すること。
- Food Card、フレーズ、またはガイドを、食品の安全性、アレルギー安全、医療上の安全、法的地位、宗教上の適合性、または公式な承認について誤った確実性を生じさせる方法で利用すること。
- 許可なく、Custom Food Cardまたは生成されたコンテンツを商業的に再販売、再配布、または他のサービス運営に利用すること。

12. 知的財産権

Japan First Moveのテキスト、ガイド、レイアウト、デザイン、グラフィック、アイコン、カード形式、フレーズ、ツール、その他のコンテンツは、別段の表示がない限り、Japan First Moveの運営者が所有または使用許諾を受けています。

利用者は、自身の個人的な旅行サポート目的のために、本サイトおよび生成されたコンテンツを利用できます。

書面による許可なく、Japan First Moveのコンテンツを商業目的でコピー、変更、販売、ライセンス供与、公開、配布、複製、スクレイピング、または二次的著作物を作成することはできません。

Japan First Moveのコンテンツに含まれる著作権表示、ブランドマーク、安全上の注意、免責事項、法的表示、または規約を削除または変更してはなりません。

13. 利用者入力および生成カード

Custom Food Cardまたは類似ツールを作成するために情報を入力または選択する場合、利用者はその入力内容の正確性および完全性について責任を負います。

ツールの利用に必要な場合を除き、機微な個人情報を入力しないでください。

Japan First Moveは、機能提供、サービス改善、サイト運営、またはプライバシーポリシーに記載された目的のためにのみ、利用者の選択または入力を処理する場合があります。

利用者は、生成されたカードを購入、保存、共有、またはスタッフに提示する前に内容を確認してください。

14. 保証しない事項

Japan First Moveは、本サイト、ガイド、フレーズ、翻訳、サンプルカード、Custom Food Card、その他関連するデジタルコンテンツについて、明示または黙示を問わず、いかなる保証または表明も行いません。

本サイトが利用者のニーズを満たすこと、コンテンツが正確または完全であること、フレーズやカードが理解されること、施設が支援を提供すること、食品が安全であること、飲食店が利用者の要望に対応できること、または対応すること、または問題が解決されることを保証しません。

Japan First Moveは、食品の安全性、アレルギー対応、アレルゲン不使用の食事、食材情報の正確性、宗教上の食事制限への適合、ベジタリアンまたはヴィーガンへの適合、飲食店での受け入れ、スタッフの理解、またはコミュニケーションの成功を保証しません。

15. 責任の制限

適用法令により認められる範囲において、Japan First Moveは、本サイト、ガイド、フレーズ、サンプルカード、Custom Food Card、その他関連するデジタルコンテンツの利用に関連して生じた損害、損失、けが、体調不良、アレルギー反応、食に関する問題、旅行上の問題、誤解、機会損失、決済上の問題、端末・ブラウザ・インターネット接続の問題、データ損失、第三者サービスの問題、本サイトにアクセスできないこと、その他のトラブルについて責任を負いません。

これには、旅行の中断、誤った判断、スタッフの誤解、食物アレルギー、交差接触、病気、けが、紛失物、交通機関の乗り遅れ、決済問題、端末問題、データ損失、第三者サービス、本サイトにアクセスできないことに関する問題を含みますが、これらに限定されません。

本利用規約は、故意または重大な過失による責任など、適用法令上免除または制限できない責任を免除または制限するものではありません。

16. 本規約の変更

Japan First Moveは、本利用規約を必要に応じて変更する場合があります。

本利用規約を変更する場合、このページ上部の「最終更新日」を変更する場合があります。

規約変更後もJapan First Moveを継続して利用する場合、利用者は変更後の利用規約に同意したものとします。

17. 準拠法および管轄

本利用規約、免責事項、プライバシーポリシー、特定商取引法に基づく表記、およびJapan First Moveの利用には、適用法令に別段の定めがある場合を除き、日本法が適用されます。

Japan First Moveに関連して生じる紛争については、適用法令に別段の定めがある場合を除き、日本法に基づき、日本の管轄裁判所において取り扱われるものとします。

18. 言語

本利用規約は、英語および日本語で提供される場合があります。

英語版と日本語版の内容に相違がある場合、適用法令上認められる範囲で日本語版を優先します。

19. お問い合わせ

本利用規約に関するお問い合わせは、以下の連絡先までお願いいたします。

support@japanfirstmove.com`;

function parseLegalText(rawText) {
  const lines = rawText.trim().split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const [title, updated, ...bodyLines] = lines;
  const sections = [];
  let intro = [];
  let currentSection = null;

  bodyLines.forEach((line) => {
    if (/^\d+\.\s/.test(line)) {
      currentSection = { heading: line, blocks: [] };
      sections.push(currentSection);
      return;
    }

    const block = line.startsWith("- ")
      ? { type: "li", text: line.slice(2) }
      : { type: "p", text: line };

    if (currentSection) {
      currentSection.blocks.push(block);
    } else {
      intro.push(line);
    }
  });

  return { title, updated, intro, sections };
}

const termsOfUseEnglishContent = parseLegalText(termsOfUseEnglishText);
const termsOfUseJapaneseContent = parseLegalText(termsOfUseJapaneseText);

function termsOfUseBlockMarkup(block) {
  if (block.type === "li") {
    return `<li>${escapeHtml(block.text)}</li>`;
  }

  return `<p>${block.text === supportEmail ? supportEmailLinkMarkup() : escapeHtml(block.text)}</p>`;
}

function termsOfUseBlocksMarkup(blocks) {
  let markup = "";
  let listItems = [];

  blocks.forEach((block) => {
    if (block.type === "li") {
      listItems.push(block);
      return;
    }

    if (listItems.length) {
      markup += `<ul>${listItems.map(termsOfUseBlockMarkup).join("")}</ul>`;
      listItems = [];
    }

    markup += termsOfUseBlockMarkup(block);
  });

  if (listItems.length) {
    markup += `<ul>${listItems.map(termsOfUseBlockMarkup).join("")}</ul>`;
  }

  return markup;
}

function termsOfUseSectionMarkup(section) {
  return `
    <section class="legal-section">
      <h2>${escapeHtml(section.heading)}</h2>
      ${termsOfUseBlocksMarkup(section.blocks)}
    </section>
  `;
}

function termsOfUseLanguageMarkup({ content, titleId, lang }) {
  return `
    <div class="terms-of-use-language" ${lang ? `lang="${lang}" ` : ""}aria-labelledby="${titleId}">
      <section class="legal-section">
        <h2 id="${titleId}">${escapeHtml(content.title)}</h2>
        <p class="legal-page-updated">${escapeHtml(content.updated)}</p>
        ${content.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </section>
      ${content.sections.map(termsOfUseSectionMarkup).join("")}
    </div>
  `;
}

function termsPageMarkup() {
  return `
    ${termsOfUseLanguageMarkup({
      content: termsOfUseEnglishContent,
      titleId: "terms-of-use-english-title",
    })}
    ${termsOfUseLanguageMarkup({
      content: termsOfUseJapaneseContent,
      titleId: "terms-of-use-japanese-title",
      lang: "ja",
    })}
  `;
}

function renderLegalPage(pageId) {
  const isTerms = pageId === "terms";
  const title = isTerms ? "Terms of Use" : "Disclaimer";
  document.title = `${title} | Japan First Move`;
  app.innerHTML = `
    <div class="page-shell legal-page ${isTerms ? "terms-of-use-page" : ""} layout-container">
      <header class="legal-page-header content-container">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>${title}</span></nav>
        <h1>${title}</h1>
      </header>
      <article class="legal-page-content content-container">
        ${isTerms ? termsPageMarkup() : disclaimerPageMarkup()}
      </article>
    </div>
  `;
}

const privacyEnglishIntro = [
  "Japan First Move respects your privacy. This Privacy Policy explains how Japan First Move collects, uses, stores, and shares information when you use our website, guides, phrases, sample cards, Custom Food Card, or related digital content.",
  "By using Japan First Move, you agree to the handling of information described in this Privacy Policy.",
];

const privacyEnglishSections = [
  {
    heading: "1. Information we may collect",
    blocks: [
      { type: "p", text: "Japan First Move may collect the following types of information." },
      { type: "h3", text: "Information you provide to us" },
      { type: "p", text: "When you contact us by email or another contact method, we may collect your email address, name, message content, and any information you choose to include." },
      { type: "h3", text: "Payment-related information" },
      { type: "p", text: "Payments are processed through Stripe. Japan First Move does not collect or store your full credit card number." },
      { type: "p", text: "We may receive or access limited payment-related information necessary to confirm purchases, handle support, respond to payment issues, prevent fraud, or comply with legal obligations, such as payment status, transaction identifiers, purchase date, and payment provider records." },
      { type: "h3", text: "Usage and access information" },
      { type: "p", text: "We may collect technical and usage information such as IP address, browser type, device type, operating system, pages viewed, referring pages, access time, approximate location, and other analytics data." },
      { type: "h3", text: "Custom Food Card information" },
      { type: "p", text: "Custom Food Card is designed to create card content in the browser. Japan First Move does not provide user accounts and does not intentionally store your card content in a server-side database." },
      { type: "p", text: "However, if you send card content to us when making an inquiry, we may handle that information as part of the inquiry." },
    ],
  },
  {
    heading: "2. How we use information",
    blocks: [
      { type: "p", text: "Japan First Move may use information for the following purposes:" },
      {
        type: "list",
        items: [
          "To provide, operate, maintain, and improve Japan First Move",
          "To provide Custom Food Card and related digital content",
          "To confirm purchases and payment status",
          "To respond to inquiries and support requests",
          "To analyze website usage and improve usability",
          "To prevent fraud, abuse, unauthorized access, or security issues",
          "To comply with legal obligations",
          "To protect the rights, safety, and interests of users, Japan First Move, or third parties",
        ],
      },
    ],
  },
  {
    heading: "3. Payment processing",
    blocks: [
      { type: "p", text: "Payments for Custom Food Card are processed by Stripe." },
      { type: "p", text: "When you make a purchase, payment information may be collected and processed directly by Stripe in accordance with Stripe’s terms and privacy policy." },
      { type: "p", text: "Japan First Move does not collect or store your full credit card number." },
    ],
  },
  {
    heading: "4. Analytics and cookies",
    blocks: [
      { type: "p", text: "Japan First Move may use Google Analytics or similar analytics tools to understand how users use the website and to improve the service." },
      { type: "p", text: "These tools may use cookies or similar technologies to collect information such as pages viewed, access time, device information, browser information, approximate location, and usage patterns." },
      { type: "p", text: "You may be able to disable cookies through your browser settings. However, some parts of the website may not work properly if cookies or similar technologies are disabled." },
    ],
  },
  {
    heading: "5. Custom Food Card information",
    blocks: [
      { type: "p", text: "Custom Food Card is designed to create card content in the browser." },
      { type: "p", text: "Japan First Move does not provide user accounts and does not intentionally store your card content in a server-side database." },
      { type: "p", text: "The card content may be temporarily processed in your browser to create, display, save, or share the card." },
      { type: "p", text: "If you send card content, screenshots, or related information to Japan First Move when making an inquiry, we may handle that information as part of the inquiry and support process." },
    ],
  },
  {
    heading: "6. Sharing information with third parties",
    blocks: [
      { type: "p", text: "Japan First Move may share or disclose information in the following cases:" },
      {
        type: "list",
        items: [
          "With service providers necessary to operate the website, process payments, provide analytics, host the website, or respond to inquiries",
          "When required by law, regulation, legal process, or governmental request",
          "When necessary to protect the rights, safety, property, or interests of users, Japan First Move, or third parties",
          "With the user’s consent",
        ],
      },
      { type: "p", text: "Japan First Move does not sell users’ personal information." },
    ],
  },
  {
    heading: "7. Data retention",
    blocks: [
      { type: "p", text: "Japan First Move keeps personal information only for as long as necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law." },
      { type: "p", text: "Inquiry records, payment-related records, and legal or accounting records may be retained as necessary for support, dispute resolution, fraud prevention, legal compliance, and business recordkeeping." },
    ],
  },
  {
    heading: "8. Security",
    blocks: [
      { type: "p", text: "Japan First Move takes reasonable measures to protect information against unauthorized access, loss, misuse, alteration, or disclosure." },
      { type: "p", text: "However, no method of transmission over the internet or electronic storage is completely secure. Japan First Move cannot guarantee absolute security." },
    ],
  },
  {
    heading: "9. Your rights",
    blocks: [
      { type: "p", text: "Depending on applicable law, you may have the right to request disclosure, correction, deletion, suspension of use, or other handling of your personal information." },
      { type: "p", text: "If you wish to make a request regarding your personal information, please contact us using the contact information provided on this site." },
    ],
  },
  {
    heading: "10. International users",
    blocks: [
      { type: "p", text: "Japan First Move is operated from Japan. If you access the website from outside Japan, your information may be processed in Japan or in other countries where our service providers operate." },
      { type: "p", text: "By using Japan First Move, you understand that your information may be processed outside your country or region of residence." },
    ],
  },
  {
    heading: "11. Changes to this Privacy Policy",
    blocks: [
      { type: "p", text: "Japan First Move may update this Privacy Policy from time to time. The updated version will be posted on this page with the updated date." },
    ],
  },
  {
    heading: "12. Contact",
    blocks: [
      { type: "p", text: "If you have any questions about this Privacy Policy or the handling of personal information, please contact us at:" },
      { type: "p", text: supportEmail },
    ],
  },
];

const privacyJapaneseIntro = [
  "Japan First Moveは、利用者のプライバシーを尊重します。本プライバシーポリシーは、Japan First Moveのウェブサイト、ガイド、フレーズ、サンプルカード、Custom Food Card、その他関連するデジタルコンテンツを利用する際に、Japan First Moveがどのような情報を取得、利用、保存、共有するかを説明するものです。",
  "Japan First Moveを利用することにより、利用者は本プライバシーポリシーに記載された情報の取扱いに同意したものとします。",
];

const privacyJapaneseSections = [
  {
    heading: "1. 取得する情報",
    blocks: [
      { type: "p", text: "Japan First Moveは、以下の情報を取得する場合があります。" },
      { type: "h3", text: "利用者が提供する情報" },
      { type: "p", text: "利用者がメールその他の方法で問い合わせを行う場合、メールアドレス、氏名、問い合わせ内容、その他利用者が任意で記載した情報を取得する場合があります。" },
      { type: "h3", text: "決済に関連する情報" },
      { type: "p", text: "決済はStripeを通じて処理されます。Japan First Moveは、利用者のクレジットカード番号全体を取得または保存しません。" },
      { type: "p", text: "Japan First Moveは、購入確認、サポート対応、決済上の問題への対応、不正防止、法令上の義務への対応のために必要な範囲で、決済状況、取引識別子、購入日時、決済事業者の記録など、限定的な決済関連情報を受領または確認する場合があります。" },
      { type: "h3", text: "利用状況およびアクセス情報" },
      { type: "p", text: "Japan First Moveは、IPアドレス、ブラウザの種類、端末の種類、OS、閲覧ページ、参照元ページ、アクセス日時、おおよその位置情報、その他のアクセス解析データなどの技術情報および利用状況に関する情報を取得する場合があります。" },
      { type: "h3", text: "Custom Food Cardに関する情報" },
      { type: "p", text: "Custom Food Cardは、ブラウザ上でカード内容を作成する設計です。Japan First Moveは、ユーザーアカウントを提供せず、カード内容をサーバー上のデータベースに意図的に保存しません。" },
      { type: "p", text: "ただし、利用者が問い合わせ時にカード内容をJapan First Moveへ送信した場合、その情報を問い合わせ対応の一部として取り扱う場合があります。" },
    ],
  },
  {
    heading: "2. 情報の利用目的",
    blocks: [
      { type: "p", text: "Japan First Moveは、取得した情報を以下の目的で利用する場合があります。" },
      {
        type: "list",
        items: [
          "Japan First Moveの提供、運営、維持、改善のため",
          "Custom Food Cardおよび関連するデジタルコンテンツを提供するため",
          "購入および決済状況を確認するため",
          "問い合わせおよびサポート依頼に対応するため",
          "ウェブサイトの利用状況を分析し、利便性を改善するため",
          "不正利用、権限のないアクセス、セキュリティ上の問題を防止するため",
          "法令上の義務に対応するため",
          "利用者、Japan First Move、または第三者の権利、安全、利益を保護するため",
        ],
      },
    ],
  },
  {
    heading: "3. 決済処理について",
    blocks: [
      { type: "p", text: "Custom Food Cardの決済はStripeによって処理されます。" },
      { type: "p", text: "利用者が購入を行う場合、決済情報はStripeの利用規約およびプライバシーポリシーに従って、Stripeにより直接取得および処理される場合があります。" },
      { type: "p", text: "Japan First Moveは、利用者のクレジットカード番号全体を取得または保存しません。" },
    ],
  },
  {
    heading: "4. アクセス解析およびCookieについて",
    blocks: [
      { type: "p", text: "Japan First Moveは、ウェブサイトの利用状況を把握し、サービスを改善するために、Google Analyticsその他類似のアクセス解析ツールを利用する場合があります。" },
      { type: "p", text: "これらのツールは、Cookieその他類似の技術を使用して、閲覧ページ、アクセス日時、端末情報、ブラウザ情報、おおよその位置情報、利用傾向などの情報を取得する場合があります。" },
      { type: "p", text: "利用者は、ブラウザの設定によりCookieを無効にできる場合があります。ただし、Cookieその他類似の技術を無効にした場合、ウェブサイトの一部が正常に動作しない場合があります。" },
    ],
  },
  {
    heading: "5. Custom Food Cardに関する情報",
    blocks: [
      { type: "p", text: "Custom Food Cardは、ブラウザ上でカード内容を作成する設計です。" },
      { type: "p", text: "Japan First Moveは、ユーザーアカウントを提供せず、カード内容をサーバー上のデータベースに意図的に保存しません。" },
      { type: "p", text: "カード内容は、カードの作成、表示、保存、共有のために、利用者のブラウザ上で一時的に処理される場合があります。" },
      { type: "p", text: "利用者が問い合わせ時にカード内容、スクリーンショット、または関連情報をJapan First Moveへ送信した場合、その情報を問い合わせ対応およびサポート対応の一部として取り扱う場合があります。" },
    ],
  },
  {
    heading: "6. 第三者への情報提供",
    blocks: [
      { type: "p", text: "Japan First Moveは、以下の場合に情報を第三者に共有または開示する場合があります。" },
      {
        type: "list",
        items: [
          "ウェブサイトの運営、決済処理、アクセス解析、ホスティング、問い合わせ対応に必要なサービス提供者へ共有する場合",
          "法令、規制、法的手続、公的機関からの要請に基づき必要な場合",
          "利用者、Japan First Move、または第三者の権利、安全、財産、利益を保護するために必要な場合",
          "利用者の同意がある場合",
        ],
      },
      { type: "p", text: "Japan First Moveは、利用者の個人情報を販売しません。" },
    ],
  },
  {
    heading: "7. 情報の保存期間",
    blocks: [
      { type: "p", text: "Japan First Moveは、本プライバシーポリシーに記載された目的のために必要な期間、または法令上必要もしくは認められる期間に限り、個人情報を保存します。" },
      { type: "p", text: "問い合わせ記録、決済関連記録、法務・会計上の記録は、サポート対応、紛争対応、不正防止、法令遵守、事業上の記録管理のために必要な範囲で保存する場合があります。" },
    ],
  },
  {
    heading: "8. 安全管理",
    blocks: [
      { type: "p", text: "Japan First Moveは、情報への不正アクセス、紛失、不正利用、改ざん、漏えい等を防止するため、合理的な安全管理措置を講じます。" },
      { type: "p", text: "ただし、インターネット上の送信または電子的な保存方法に完全な安全性を保証できるものではありません。Japan First Moveは、絶対的な安全性を保証するものではありません。" },
    ],
  },
  {
    heading: "9. 利用者の権利",
    blocks: [
      { type: "p", text: "適用される法令に基づき、利用者は自身の個人情報について、開示、訂正、削除、利用停止、その他の取扱いに関する請求を行うことができる場合があります。" },
      { type: "p", text: "個人情報に関する請求を希望する場合は、本サイトに記載のお問い合わせ先までご連絡ください。" },
    ],
  },
  {
    heading: "10. 国外からの利用について",
    blocks: [
      { type: "p", text: "Japan First Moveは日本から運営されています。利用者が日本国外から本サイトにアクセスする場合、利用者の情報は日本またはJapan First Moveが利用するサービス提供者の所在国において処理される場合があります。" },
      { type: "p", text: "Japan First Moveを利用することにより、利用者は、自身の情報が居住国または地域の外で処理される場合があることを理解したものとします。" },
    ],
  },
  {
    heading: "11. 本プライバシーポリシーの変更",
    blocks: [
      { type: "p", text: "Japan First Moveは、本プライバシーポリシーを必要に応じて変更する場合があります。変更後の内容は、更新日とともに本ページに掲載します。" },
    ],
  },
  {
    heading: "12. お問い合わせ",
    blocks: [
      { type: "p", text: "本プライバシーポリシーまたは個人情報の取扱いに関するお問い合わせは、以下の連絡先までお願いいたします。" },
      { type: "p", text: supportEmail },
    ],
  },
];

function privacyBlockMarkup(block) {
  if (block.type === "h3") {
    return `<h3>${escapeHtml(block.text)}</h3>`;
  }

  if (block.type === "list") {
    return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  return `<p>${block.text === supportEmail ? supportEmailLinkMarkup() : escapeHtml(block.text)}</p>`;
}

function privacySectionMarkup(section) {
  return `
    <section class="legal-section">
      <h2>${escapeHtml(section.heading)}</h2>
      ${section.blocks.map(privacyBlockMarkup).join("")}
    </section>
  `;
}

function privacyLanguageMarkup({ title, titleId, lang, updated, intro, sections }) {
  return `
    <div class="privacy-language" ${lang ? `lang="${lang}" ` : ""}aria-labelledby="${titleId}">
      <section class="legal-section">
        <h2 id="${titleId}">${escapeHtml(title)}</h2>
        <p class="legal-page-updated">${escapeHtml(updated)}</p>
        ${intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </section>
      ${sections.map(privacySectionMarkup).join("")}
    </div>
  `;
}

function privacyPageMarkup() {
  return `
    ${privacyLanguageMarkup({
      title: "Privacy Policy",
      titleId: "privacy-english-title",
      updated: "Last updated: July 16, 2026",
      intro: privacyEnglishIntro,
      sections: privacyEnglishSections,
    })}
    ${privacyLanguageMarkup({
      title: "プライバシーポリシー",
      titleId: "privacy-japanese-title",
      lang: "ja",
      updated: "最終更新日：2026年7月16日",
      intro: privacyJapaneseIntro,
      sections: privacyJapaneseSections,
    })}
  `;
}

function renderPrivacyPage() {
  const title = "Privacy Policy";
  document.title = `${title} | Japan First Move`;
  app.innerHTML = `
    <div class="page-shell legal-page privacy-page layout-container">
      <header class="legal-page-header content-container">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>${title}</span></nav>
        <h1>${title}</h1>
      </header>
      <article class="legal-page-content content-container">
        ${privacyPageMarkup()}
      </article>
    </div>
  `;
}

const legalNoticeEnglishSections = [
  {
    heading: "Service provider:",
    paragraphs: ["Japan First Move"],
  },
  {
    heading: "Seller’s name, address, and phone number:",
    paragraphs: [
      "In accordance with Japan’s Act on Specified Commercial Transactions, the seller’s name, address, and phone number will be disclosed without delay by email upon request before purchase.",
    ],
  },
  {
    heading: "Please contact us at:",
    paragraphs: ["support@japanfirstmove.com"],
  },
  {
    heading: "Product:",
    paragraphs: ["Custom Food Card"],
  },
  {
    heading: "Product description:",
    paragraphs: [
      "Custom Food Card is a browser-based digital product that helps travelers create a simple Japanese food communication card for food restrictions, allergies, dietary needs, or preferences.",
    ],
  },
  {
    heading: "Selling price:",
    paragraphs: [
      "USD $4.99, tax included.",
      "The selling price is also shown on the purchase or checkout screen before payment.",
    ],
  },
  {
    heading: "Additional fees:",
    paragraphs: [
      "No shipping fees apply because this is a digital product.",
      "Users are responsible for any internet connection fees, data charges, currency conversion fees, foreign transaction fees, or other fees charged by their device, internet provider, card issuer, payment provider, or financial institution.",
    ],
  },
  {
    heading: "Payment method:",
    paragraphs: [
      "Payment is processed through Stripe Checkout.",
      "Available payment methods are shown on the checkout screen.",
    ],
  },
  {
    heading: "Payment timing:",
    paragraphs: ["Payment is charged at the time of purchase."],
  },
  {
    heading: "Delivery timing:",
    paragraphs: ["After payment is completed and verified, the digital product becomes available immediately in the browser. Users can create, view, and save the Custom Food Card as an image in the browser."],
  },
  {
    heading: "Refunds and cancellations:",
    paragraphs: [
      "Custom Food Card is a digital product that can be created, displayed, saved, and used immediately after purchase.",
      "Due to the nature of digital products, refunds and cancellations are generally not available after purchase, except where required by applicable law or where there is a clear payment processing error, such as an incorrect charge or duplicate charge.",
      "Please review your selected ingredients, card purpose, and purchase details carefully before completing your purchase.",
    ],
  },
  {
    heading: "System requirements:",
    paragraphs: [
      "Custom Food Card is a browser-based digital product. A smartphone, tablet, or computer with an internet connection and a modern web browser is required.",
      "Image saving and sharing features may depend on your device, browser, operating system, and settings.",
    ],
  },
  {
    heading: "Notes:",
    paragraphs: [
      "Custom Food Card is a communication aid only. It does not guarantee food safety, allergy safety, ingredient accuracy, allergen-free meals, or restaurant acceptance, or that restaurant staff will understand or follow the card.",
      "Please also review our Terms of Use, Disclaimer, and Privacy Policy before purchase.",
    ],
  },
];

const legalNoticeJapaneseSections = [
  {
    heading: "サービス提供者：",
    paragraphs: ["Japan First Move"],
  },
  {
    heading: "販売事業者の氏名・住所・電話番号：",
    paragraphs: [
      "特定商取引法に基づき、販売事業者の氏名、住所および電話番号については、購入前に請求があった場合、遅滞なく電子メールにて開示いたします。",
    ],
  },
  {
    heading: "お問い合わせ先：",
    paragraphs: ["support@japanfirstmove.com"],
  },
  {
    heading: "商品名：",
    paragraphs: ["Custom Food Card"],
  },
  {
    heading: "商品内容：",
    paragraphs: [
      "Custom Food Cardは、食事制限、アレルギー、食事上の希望などを日本語で伝えるためのカードを作成できる、ブラウザ上で利用するデジタル商品です。",
    ],
  },
  {
    heading: "販売価格：",
    paragraphs: [
      "4.99米ドル、税込。",
      "販売価格は、決済前の購入画面またはチェックアウト画面にも表示されます。",
    ],
  },
  {
    heading: "販売価格以外に必要な料金：",
    paragraphs: [
      "本商品はデジタル商品のため、送料はかかりません。",
      "ただし、インターネット接続料、通信料、為替換算手数料、海外取引手数料、カード発行会社・決済事業者・金融機関等が定める手数料等は、利用者の負担となります。",
    ],
  },
  {
    heading: "支払方法：",
    paragraphs: [
      "Stripe Checkoutを通じて決済を行います。",
      "利用可能な支払方法は、決済画面に表示されます。",
    ],
  },
  {
    heading: "支払時期：",
    paragraphs: ["購入時に決済されます。"],
  },
  {
    heading: "商品の提供時期：",
    paragraphs: ["決済完了および確認後、ブラウザ上で直ちに利用可能となります。利用者は、ブラウザ上でCustom Food Cardを作成、表示し、画像として保存できます。"],
  },
  {
    heading: "返金・キャンセルについて：",
    paragraphs: [
      "Custom Food Cardは、購入後すぐに作成・表示・保存・利用できるデジタル商品です。",
      "デジタル商品の性質上、購入後の返金・キャンセルは原則としてお受けできません。ただし、適用法令により必要な場合、または誤請求や重複請求など明らかな決済処理上の誤りがある場合を除きます。",
      "購入前に、選択した食材、カードの用途、および購入内容を必ずご確認ください。",
    ],
  },
  {
    heading: "動作環境：",
    paragraphs: [
      "Custom Food Cardは、ブラウザ上で利用するデジタル商品です。インターネット接続が可能なスマートフォン、タブレット、またはパソコンと、最新のWebブラウザが必要です。",
      "画像の保存・共有機能は、端末、ブラウザ、OS、設定等により利用できない場合があります。",
    ],
  },
  {
    heading: "注意事項：",
    paragraphs: [
      "Custom Food Cardは、コミュニケーションを補助するためのツールです。食品の安全性、アレルギー対応、食材情報の正確性、アレルゲン不使用の食事、飲食店での受け入れ、店舗スタッフがカードを理解または対応することを保証するものではありません。",
      "購入前に、利用規約、免責事項、プライバシーポリシーもあわせてご確認ください。",
    ],
  },
];

function legalNoticeParagraphMarkup(paragraph) {
  if (paragraph === supportEmail) {
    return supportEmailLinkMarkup();
  }

  if (paragraph === "Please also review our Terms of Use, Disclaimer, and Privacy Policy before purchase.") {
    return `Please also review our ${legalNoticePageLinkMarkup("Terms of Use", "/terms")}, ${legalNoticePageLinkMarkup("Disclaimer", "/disclaimer")}, and ${legalNoticePageLinkMarkup("Privacy Policy", "/privacy")} before purchase.`;
  }

  if (paragraph === "購入前に、利用規約、免責事項、プライバシーポリシーもあわせてご確認ください。") {
    return `購入前に、${legalNoticePageLinkMarkup("利用規約", "/terms")}、${legalNoticePageLinkMarkup("免責事項", "/disclaimer")}、${legalNoticePageLinkMarkup("プライバシーポリシー", "/privacy")}もあわせてご確認ください。`;
  }

  return escapeHtml(paragraph);
}

function legalNoticePageLinkMarkup(label, href) {
  return `<a class="legal-contact-link" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
}

function legalNoticeSectionMarkup(section) {
  return `
    <div class="legal-notice-row">
      <dt>${escapeHtml(section.heading)}</dt>
      <dd>${section.paragraphs.map((paragraph) => `<p>${legalNoticeParagraphMarkup(paragraph)}</p>`).join("")}</dd>
    </div>
  `;
}

function legalNoticeLanguageMarkup({ title, titleId, lang, updated, intro, sections }) {
  return `
    <div class="legal-notice-language" ${lang ? `lang="${lang}" ` : ""}aria-labelledby="${titleId}">
      <section class="legal-notice-intro">
        <h2 id="${titleId}">${escapeHtml(title)}</h2>
        <p class="legal-page-updated">${escapeHtml(updated)}</p>
        <p>${escapeHtml(intro)}</p>
      </section>
      <dl class="legal-notice-list">
        ${sections.map(legalNoticeSectionMarkup).join("")}
      </dl>
    </div>
  `;
}

function renderLegalNoticePage() {
  const title = "Legal Notice";
  document.title = `${title} | Japan First Move`;
  app.innerHTML = `
    <div class="page-shell legal-page legal-notice-page layout-container">
      <header class="legal-page-header content-container">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>${title}</span></nav>
        <h1>${title}</h1>
      </header>
      <article class="legal-page-content content-container">
        ${legalNoticeLanguageMarkup({
          title: "Legal Notice under Japan’s Act on Specified Commercial Transactions",
          titleId: "legal-notice-english-title",
          updated: "Last updated: July 16, 2026",
          intro: "This page provides information required under Japan’s Act on Specified Commercial Transactions for the paid Custom Food Card service provided by Japan First Move.",
          sections: legalNoticeEnglishSections,
        })}
        ${legalNoticeLanguageMarkup({
          title: "特定商取引法に基づく表記",
          titleId: "legal-notice-japanese-title",
          lang: "ja",
          updated: "最終更新日：2026年7月16日",
          intro: "本ページは、Japan First Moveが提供する有料サービス「Custom Food Card」について、特定商取引法に基づき必要な事項を表示するものです。",
          sections: legalNoticeJapaneseSections,
        })}
      </article>
    </div>
  `;
}

const faqItems = [
  {
    category: "about",
    question: "What is Japan First Move?",
    answer: "Japan First Move is a simple travel guide that helps you know what to do first in common situations in Japan.",
  },
  {
    category: "about",
    question: "Is this a translation app?",
    answer: "No. It is not a live translation app. It gives short, practical steps and phrases for common travel moments.",
  },
  {
    category: "about",
    question: "Is this an official travel service?",
    answer: "No. Japan First Move is an independent guide and is not affiliated with public transport, restaurants, shrines, government services, or other organizations.",
  },
  {
    category: "using",
    question: "Can I use it offline?",
    answer: "Not fully. Please save important cards, images, or screenshots before you need them.",
  },
  {
    category: "using",
    question: "Is the information always up to date?",
    answer: "We try to keep the guide useful, but rules, prices, services, opening hours, and local procedures can change. Always check local signs or ask staff when needed.",
  },
  {
    category: "food-card",
    question: "What is a Custom Food Card?",
    answer: "A Custom Food Card helps you show allergies, dietary needs, ingredients to check, shared tools or oil, or foods you prefer to avoid in Japanese.",
  },
  {
    category: "food-card",
    question: "Is this an allergy safety card?",
    answer: "No. This card is a communication aid. It helps you show your food needs in Japanese, but it does not guarantee food safety.",
  },
  {
    category: "food-card",
    question: "Can restaurants always follow this card?",
    answer: "No. Some restaurants may not be able to confirm ingredients or avoid cross-contact. If they cannot help safely, they may say they cannot serve the dish.",
  },
  {
    category: "food-card",
    question: "Does this replace asking the staff?",
    answer: "No. Please still ask the staff to confirm ingredients and preparation.",
  },
  {
    category: "food-card",
    question: "Do I need an app to use the Food Card?",
    answer: "No. You can use it in your browser. After creating a card, you can save it as an image.",
  },
  {
    category: "saving",
    question: "I can’t save the image on my phone. What should I do?",
    answer: "Press and hold the card image, then choose “Save to Photos” or a similar option. If your browser does not save it, try “Download PNG.” You can also take a screenshot and show that to staff.",
  },
  {
    category: "saving",
    question: "Can I share the card by email or message?",
    answer: "We recommend saving the image to your phone first, then sharing the saved image if needed. Some browsers may not share temporary preview images correctly.",
  },
];

const faqCategories = [
  { id: "food-card", title: "Custom Food Card" },
  { id: "saving", title: "Saving images" },
  { id: "about", title: "About Japan First Move" },
  { id: "using", title: "Using the guide" },
];

function renderFaqPage() {
  const title = "FAQ";
  document.title = `${title} | Japan First Move`;
  app.innerHTML = `
    <div class="page-shell legal-page faq-page layout-container">
      <header class="legal-page-header content-container">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>${title}</span></nav>
        <h1>${title}</h1>
        <p class="faq-page-lead">Find answers about Japan First Move, Custom Food Cards, saving images, and using the guide while traveling in Japan.</p>
      </header>
      <div class="faq-list content-container">
        ${faqCategories
          .map(
            (category) => `
              <section class="faq-category" aria-labelledby="faq-category-${category.id}">
                <h2 id="faq-category-${category.id}">${escapeHtml(category.title)}</h2>
                <div class="faq-category-items">
                  ${faqItems
                    .filter((item) => item.category === category.id)
                    .map(
                      (item) => `
                        <article class="faq-item">
                          <div class="faq-question">
                            <span class="faq-label faq-label-question" aria-hidden="true">Q.</span>
                            <h3>${escapeHtml(item.question)}</h3>
                          </div>
                          <div class="faq-answer">
                            <span class="faq-label faq-label-answer" aria-hidden="true">A.</span>
                            <p>${escapeHtml(item.answer)}</p>
                          </div>
                        </article>
                      `,
                    )
                    .join("")}
                </div>
              </section>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderHeaderOptions() {
  document.title = "Header Options | Japan First Move";
  app.innerHTML = `
    <div class="page-shell header-options-page">
      <header class="category-page-header">
        <p class="eyebrow">Design check</p>
        <h1>Header & logo directions</h1>
        <p class="lead">Three quick directions for the mobile header. Pick the mood first, then we can polish the exact logo.</p>
      </header>

      <section class="header-option-list" aria-label="Header design options">
        <article class="header-option-card">
          <p class="header-option-label">A / Wordmark</p>
          <div class="header-mock header-mock-wordmark">
            <span class="header-mock-mark header-mock-j" aria-hidden="true"></span>
            <span class="header-mock-copy">
              <strong>Japan First Move</strong>
            </span>
          </div>
          <p>Best for first-time visitors. The service name is clear, simple, and easiest to remember.</p>
        </article>

        <article class="header-option-card">
          <p class="header-option-label">B / Mizuhiki</p>
          <div class="header-mock header-mock-mizuhiki">
            <span class="header-mock-mark header-mock-knot" aria-hidden="true"></span>
            <span class="header-mock-copy">
              <strong>Japan First Move</strong>
            </span>
          </div>
          <p>More Japanese and warmer. Good if we want the header to connect with the first-view artwork.</p>
        </article>

        <article class="header-option-card">
          <p class="header-option-label">C / Stamp</p>
          <div class="header-mock header-mock-stamp">
            <span class="header-mock-mark header-mock-jfm" aria-hidden="true">JFM</span>
            <span class="header-mock-copy">
              <strong>Japan First Move</strong>
            </span>
          </div>
          <p>Most app-like. Strong as an icon, but it needs the full name beside it so new users understand it.</p>
        </article>
      </section>
    </div>
  `;
}

function renderNotFound() {
  document.title = "Not Found | Japan First Move";
  app.innerHTML = `
    <div class="page-shell not-found">
      <div>
        <p class="eyebrow">Not found</p>
        <h1>That first move is not here yet.</h1>
        <p class="lead">Try the home page or choose a category.</p>
        <div class="hero-actions">
          <a class="button primary" href="/">Go home</a>
        </div>
      </div>
    </div>
  `;
}

function wireScrollButtons() {
  document.querySelectorAll("[data-scroll-to]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTo);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function navSectionFromRoute(parts) {
  if (parts.length === 0) {
    return "home";
  }

  if (parts[0] === "food-card" && parts[1] === "custom") {
    return "custom-food-card";
  }

  if (parts[0] === "food-cards") {
    return "food";
  }

  if (parts[0] === "guides") {
    return guideMap[parts[1]]?.category ?? "";
  }

  return parts[0];
}

function updateNavState(parts) {
  const activeSection = navSectionFromRoute(parts);
  document.querySelectorAll("[data-nav-section]").forEach((link) => {
    const isActive = link.dataset.navSection === activeSection;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function router({ restoreCustomFoodCardDraft = false } = {}) {
  closeMobileMenu();
  document.body.classList.remove("is-custom-show-mode");
  document.body.classList.remove("is-custom-sample-mode");
  document.body.classList.remove("is-custom-image-preview-mode");
  document.documentElement.classList.remove("is-custom-image-preview-mode");
  if (customFoodCardState.imagePreviewUrl) {
    URL.revokeObjectURL(customFoodCardState.imagePreviewUrl);
    customFoodCardState.imagePreviewUrl = "";
    customFoodCardState.imagePreviewFile = null;
  }
  document.title = "Japan First Move";
  const parts = routePartsFromPathname();
  const route = parts;
  const params = new URLSearchParams(window.location.search);

  if (route.length === 0 && params.get("checkout") === "cancelled") {
    window.history.replaceState({}, "", "/food-card/custom/?checkout=cancelled");
    startCustomFoodCardCancelled();
  } else if (route.length === 0) {
    renderHome();
  } else if (route[0] === "food-card" && route[1] === "custom") {
    if (route[2] === "success") {
      startCustomFoodCardSuccess();
    } else if (params.get("checkout") === "cancelled") {
      startCustomFoodCardCancelled();
    } else {
      startCustomFoodCard({ restoreDraft: restoreCustomFoodCardDraft });
    }
  } else if (route[0] === "food-cards") {
    if (route[1]) {
      renderFoodCardDetail(route[1]);
    } else {
      renderFoodCardsPage();
    }
  } else if (route[0] === "header-options") {
    renderHeaderOptions();
  } else if (route[0] === "disclaimer" || route[0] === "terms") {
    renderLegalPage(route[0]);
  } else if (route[0] === "legal-notice") {
    renderLegalNoticePage();
  } else if (route[0] === "privacy") {
    renderPrivacyPage();
  } else if (route[0] === "faq") {
    renderFaqPage();
  } else if (route[0] === "guides") {
    renderGuide(route[1]);
  } else {
    renderCategory(route[0]);
  }

  wireScrollButtons();
  updateNavState(parts);
  window.scrollTo(0, 0);
}

window.addEventListener("popstate", () => {
  router({ restoreCustomFoodCardDraft: false });
});
router({ restoreCustomFoodCardDraft: true });
