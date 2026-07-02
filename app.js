const categories = [
  {
    id: "food",
    name: "Food",
    icon: "🍜",
    description: "Order, pay, wait, and handle food needs.",
  },
  {
    id: "move",
    name: "Move",
    icon: "🚌",
    description: "Stations, buses, taxis, lockers, and tickets.",
  },
  {
    id: "relax",
    name: "Relax",
    icon: "♨",
    description: "Onsen, hotels, luggage, shoes, and quiet spaces.",
  },
  {
    id: "culture",
    name: "Culture",
    icon: "⛩",
    description: "Shrines, temples, local places, and manners.",
  },
  {
    id: "help",
    name: "Get Help",
    icon: "＋",
    description: "Medicine, lost items, payment trouble, and feeling sick.",
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
    firstMove: "Look near the entrance for a ticket machine before you sit down.",
    steps: [
      "Pause near the entrance.",
      "Look for a ticket machine.",
      "If there is one, choose your ramen and pay first.",
      "Hand the ticket to staff and wait to be guided.",
    ],
    dont: [
      {
        title: "Don’t sit down before checking the system.",
        body: "At many ramen shops, ordering happens before you take a seat. If you sit first, staff may point you back to the ticket machine.",
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
        english: "Where is the ticket machine?",
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
        means: "Please use the ticket machine.",
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
      "Look for photos on the machine. If there is no English, use camera translation. If the shop is busy and you want the safest choice, choose a basic ramen option instead of a complicated topping set.",
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
      "Your first move is not to choose every dish. Start with one drink.",
    ],
    firstMove: "Order your first drink before choosing all your food.",
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
        body: "At many izakaya, staff expects the first drink order soon after you sit down. You can take more time with the food menu after that.",
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
        move: "Order one drink first, even if you are still choosing food.",
      },
      {
        japanese: "お通しです。",
        romaji: "Otoshi desu.",
        means: "This is the small starter or table charge dish.",
        move: "Accept it unless you have a serious allergy or dietary restriction.",
      },
      {
        japanese: "ラストオーダーです。",
        romaji: "Rasuto oodaa desu.",
        means: "Last order.",
        move: "Order anything else now, or say you are okay.",
      },
    ],
    stuck:
      "If you drink alcohol, a draft beer is the easiest first order. If not, cola, ginger ale, or another non-alcoholic drink is fine. For food, choose two or three simple dishes first. You can order more later.",
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
      "Sometimes it means you can wait. Sometimes it means they cannot take you today. Sometimes the answer is indirect because staff does not want to sound too harsh.",
    ],
    firstMove: "Ask once if waiting is possible, then move on if the answer is unclear.",
    steps: [
      "Step away from the entrance so you are not blocking others.",
      "Ask if waiting is possible.",
      "If staff gives you a clear wait time, decide if you want to wait.",
      "If the answer is vague, treat it as a polite no.",
      "Thank them and find another option nearby.",
    ],
    dont: [
      {
        title: "Don’t keep asking again and again.",
        body: "If staff avoids giving a wait time, says it is difficult, or looks uncomfortable, they may be politely telling you they cannot seat you.",
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
        move: "Treat this as a polite no unless they clearly invite you to wait.",
      },
      {
        japanese: "ご予約でいっぱいです。",
        romaji: "Goyoyaku de ippai desu.",
        means: "We are fully booked.",
        move: "Thank them and leave.",
      },
    ],
    stuck:
      "If staff gives a number like 20 minutes or 30 minutes, waiting is probably okay. If staff says something vague, apologizes repeatedly, or does not offer a waiting option, move on.",
    note:
      "In Japan, people may avoid saying a direct no, especially in service situations. A soft or vague answer can still mean no.",
  },
  {
    slug: "how-to-pay",
    title: "How to Pay at Restaurants and Shops in Japan",
    category: "food",
    meta: "Not sure where to pay in Japan? Learn whether to pay at the register, at your seat, with a tray, by card, or in cash, and why you should not tip.",
    intro: [
      "If you finished eating or shopping in Japan and don’t know where to pay, look around before taking out your wallet.",
      "In many places, payment happens at the register. In some restaurants, you bring a small bill slip from your table. In others, staff brings the bill to you.",
    ],
    firstMove: "Look for the register before trying to pay at your seat.",
    steps: [
      "Check if there is a bill slip on your table or tray.",
      "If there is one, take it to the register.",
      "If there is no bill slip, look for a register or ask staff.",
      "Place your cash or card on the payment tray if there is one.",
      "Take your receipt and change, then leave without tipping.",
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
      "Look for the small tray near the register. Many places use a tray for cash, coins, cards, and receipts. Put your payment there instead of handing it directly to staff.",
    note:
      "Payment in Japan is often quiet and structured. The tray helps make the exchange clear and polite.",
  },
  {
    slug: "onsen-sento",
    title: "What to Do First at an Onsen or Sento",
    category: "relax",
    meta: "At an onsen or sento in Japan, the order matters: shoes, payment, changing, washing, and bathing. Learn what to do first and what not to do.",
    intro: [
      "If you arrive at an onsen or sento in Japan and suddenly feel unsure, you are not alone.",
      "The rules are simple once you know the order. The most important thing is to notice where shoes come off, where you pay, and where you wash before bathing.",
    ],
    firstMove: "Take off your shoes before entering the changing or bathing area.",
    steps: [
      "Remove your shoes where others do.",
      "Pay or show your ticket.",
      "Enter the correct changing room.",
      "Wash your body before entering the bath.",
      "Enter the bath without a towel or swimsuit unless signs say otherwise.",
    ],
    dont: [
      {
        title: "Don’t enter the bath before washing.",
        body: "At Japanese baths, you wash your body first at the shower area. The bath itself is for soaking, not washing.",
      },
      {
        title: "Don’t put your towel in the bath water.",
        body: "Keep your small towel outside the water. You can place it on your head or nearby.",
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
    category: "relax",
    meta: "When Japan travel days get tiring, find a place to sit, cool down, and recover without blocking shops, paths, or entrances.",
    intro: [
      "Japan travel can mean long walking days. If you need a quick rest, look for places where sitting is clearly allowed.",
      "Choose a place meant for sitting—not an entrance or narrow walkway.",
    ],
    firstMove: "Look for a cafe, park, bench, or rest area where sitting is allowed.",
    steps: [
      "Step out of the main flow of people.",
      "Look for a cafe, bench, park, station seating, or mall rest area.",
      "If it is a cafe, order before you sit unless signs show a different system.",
      "At shrines or temples, sit only where benches or rest areas are clearly provided.",
    ],
    dont: [
      {
        title: "Don’t sit for a long time in front of convenience stores or shop entrances.",
        body: "If you need a longer rest, look for a cafe, bench, park, station, or mall seating area.",
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
      "Head for a station, department store, shopping mall, park, or cafe. On very hot days, indoor public areas are usually safer than resting outside. If you feel unwell, ask staff for help.",
    note:
      "In Japan, sitting places are often clearly marked. If a spot looks like an entrance, walkway, or private step, keep moving and look for a clearer rest area.",
  },
  {
    slug: "local-bus",
    title: "How to Ride a Local Bus in Japan",
    category: "move",
    meta: "Local buses in Japan can be confusing because boarding doors and payment systems vary. Learn what to do first, when to take a ticket, and how to pay.",
    intro: [
      "If a local bus arrives in Japan and you don’t know whether to enter from the front or the back, pause for one second.",
      "The system can change depending on the city or bus company. Your best first move is to watch how other passengers board.",
    ],
    firstMove: "Watch where other passengers board, then follow the same door.",
    steps: [
      "Check which door other passengers use.",
      "If you board from the back, take a numbered ticket if there is one.",
      "Press the stop button before your stop.",
      "Check the fare display near the driver.",
      "Prepare coins or an IC card before you reach the front.",
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
        use: "Use when you want to confirm the destination. Replace Kyoto Station with your stop.",
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
      "Follow the passenger in front of you. If people tap an IC card when boarding, do the same. If they take a numbered ticket, take one too.",
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
      "Check the line name, destination, and platform number first. If you ask for help, keep the question short and show your destination on your phone.",
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
      "If you cannot find station staff, ask someone nearby. Keep the question short and show your destination if possible.",
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
      "Check your map before leaving the station area. If you ask for help, show the place or map on your phone.",
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
        body: "Show the place or map on your phone so the person knows which destination you mean.",
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
      "In large stations, the wrong exit can put you far from your destination. Check the exit before leaving the station area. If you cannot find station staff, ask someone nearby and show your map.",
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
        use: "If you cannot find station staff, ask someone nearby or try a ticket machine with an English button.",
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
    category: "move",
    meta: "Coin lockers in Japan can use keys, coins, IC cards, or touch screens. Learn what to do first, how to pay, and how to find your locker again.",
    intro: [
      "If you find coin lockers in Japan but don’t know how the system works, start with the locker itself.",
      "The real risk is not only locking your bag. It is forgetting where the locker area is later.",
    ],
    firstMove: "Before you walk away, take a photo of the locker number, nearby signs, and the station exit.",
    steps: [
      "Find an empty locker that fits your bag.",
      "Put your luggage inside before paying.",
      "Check whether it uses a key, coins, IC card, or touch screen.",
      "Pay, lock the door, and keep the key, receipt, QR code, or IC card safe.",
      "If you use an IC card, remember that the same card may be needed to reopen the locker.",
      "Take photos of the locker number, locker area, and nearest exit sign.",
    ],
    dont: [
      {
        title: "Don’t walk away without checking how to reopen the locker.",
        body: "Some lockers use a physical key. Some use a receipt or QR code. Some use the same IC card you paid with.",
      },
      {
        title: "Don’t trust your memory in a large station.",
        body: "Stations like Shinjuku, Tokyo, Osaka, Kyoto, and Ueno can have many locker areas that look similar.",
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
      "Search your photos first. Look for the locker number, station sign, exit name, shop sign, or floor map in the background. If you still cannot find it, show your locker key, receipt, or photo to station staff.",
    note:
      "The hard part is not always locking your bag. It is finding the same locker area again later.",
  },
  {
    slug: "shrine",
    title: "What to Do First at a Shrine in Japan",
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
        body: "At many shrines, the center path is treated as special. Walking slightly to the side is a safer move.",
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
        title: "Don’t treat the space like a theme park.",
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
      "If people are close to your camera, ask first or skip the photo.",
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
      "If you are not sure, ask staff or skip the photo. If someone corrects you, stop right away and put your camera down.",
    note:
      "Photo rules can change by room, object, or ceremony. A nearby sign matters more than what other people are doing.",
  },
  {
    slug: "pharmacy",
    title: "How to Ask for Medicine at a Japanese Pharmacy",
    category: "help",
    meta: "Need medicine in Japan but don’t know what to ask for? Learn how to show your symptoms, mention allergies, ask the pharmacist, and avoid guessing.",
    intro: [
      "If you feel unwell in Japan and need medicine, you do not need to know the Japanese brand name.",
      "Your first move is to show your symptoms clearly and ask staff or a pharmacist what is suitable.",
    ],
    firstMove: "Show your symptom, not a brand name.",
    steps: [
      "Go to the counter or find a staff member.",
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
      "Look for the basic or standard option.",
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
    category: "help",
    meta: "Feeling sick while traveling in Japan? Learn how to tell nearby staff or your hotel, ask where to get help, and explain that you need assistance.",
    intro: [
      "If you feel sick during your trip, start by telling someone nearby instead of trying to handle everything alone.",
      "Staff at your hotel, a station, or a nearby facility may be able to help you find the right support.",
    ],
    firstMove: "Tell staff or your hotel how you feel, then ask where to get help.",
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
        move: "If it feels serious, say yes or ask your hotel or travel insurance for help.",
      },
      {
        japanese: "保険証はありますか？",
        romaji: "Hokenshou wa arimasu ka?",
        means: "Do you have an insurance card?",
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
      "This guide is for general travel help only. If symptoms feel serious or urgent, ask staff, your hotel, travel insurance, or emergency services right away.",
  },
  {
    slug: "lost-something",
    title: "What to Do First When You Lost Something in Japan",
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
        move: "Ask where else you can check, or come back later.",
      },
    ],
    stuck:
      "Write down what the item looks like, when you last had it, and where you have already checked. Show this information to staff at the next lost and found desk.",
    note:
      "Lost items may stay at the shop or facility first, then move to another lost and found. Ask staff where and when to check again.",
    safetyNote:
      "If you lost a passport, wallet, phone, or other important item, ask your hotel or local staff what to do next.",
  },
];

const placeChoices = [
  {
    label: "Ramen shop",
    slug: "ramen-shop",
    description: "Ordering basics",
    iconSrc: "./assets/icons/place/icon-place-ramen.png",
  },
  {
    label: "Izakaya",
    slug: "izakaya",
    description: "Before ordering",
    iconSrc: "./assets/icons/place/icon-place-izakaya.png",
  },
  {
    label: "Station",
    href: "#/move",
    category: "move",
    iconName: "categoryicon-move",
    description: "First steps",
    iconSrc: "./assets/icons/place/icon-place-station.png",
    largeIcon: true,
  },
  {
    label: "Bus stop",
    slug: "local-bus",
    description: "Boarding & payment",
    iconSrc: "./assets/icons/place/icon-place-bus-stop.png",
    largeIcon: true,
  },
  {
    label: "Coin lockers",
    slug: "coin-lockers",
    description: "Bag storage",
    iconSrc: "./assets/icons/place/icon-place-coin-locker.png",
    largeIcon: true,
  },
  {
    label: "Ticket machine",
    slug: "ticket-machine-no-english",
    description: "Limited English",
    iconSrc: "./assets/icons/place/icon-place-ticket-machine.png",
    largeIcon: true,
  },
  {
    label: "Drugstore",
    slug: "pharmacy",
    description: "Medicine help",
    iconSrc: "./assets/icons/place/icon-place-drugstore.png",
    largeIcon: true,
  },
  {
    label: "Onsen",
    slug: "onsen-sento",
    description: "Onsen basics",
    iconSrc: "./assets/icons/place/icon-place-onsen.png",
  },
];

const needChoices = [
  {
    label: "Order food",
    slug: "food",
    category: "food",
    href: "#/food",
    track: "need_card_order_food",
    description: "Know what to check before ordering.",
    iconSrc: "./assets/icons/action/icon-action-order-food.png",
  },
  {
    label: "Pay correctly",
    slug: "how-to-pay",
    description: "Check where and how to pay.",
    iconSrc: "./assets/icons/action/icon-action-pay-correctly.png",
  },
  {
    label: "Explain food needs",
    slug: "food-cards",
    category: "food",
    href: "#/food-cards",
    iconName: "categoryicon-food",
    iconSrc: "./assets/icons/action/icon-action-explain-food-needs.png",
    description: "Explain what you cannot eat.",
  },
  {
    label: "Store luggage",
    slug: "coin-lockers",
    description: "Find the right storage option.",
    iconSrc: "./assets/icons/action/icon-action-store-luggage.png",
  },
  {
    label: "Ask for medicine",
    slug: "pharmacy",
    description: "Explain symptoms more clearly.",
    iconSrc: "./assets/icons/action/icon-action-ask-medicine.png",
  },
  {
    label: "Use local transport",
    slug: "move",
    category: "move",
    href: "#/move",
    track: "need_card_use_local_transport",
    description: "Use IC cards, routes, and stops with confidence.",
    iconSrc: "./assets/icons/action/icon-action-local-transport.png",
  },
];

const homeQuickPhrases = [
  {
    title: "Can I pay by card?",
    japanese: "カードで払えますか？",
    href: "#/guides/how-to-pay",
  },
  {
    title: "Where is the ticket machine?",
    japanese: "券売機はどこですか？",
    href: "#/guides/ramen-shop",
  },
  {
    title: "Do you have an English menu?",
    japanese: "英語のメニューはありますか？",
    href: "#/food",
  },
  {
    title: "I have a food allergy.",
    japanese: "食物アレルギーがあります。",
    href: "#/food-cards",
  },
];

const foodCards = [
  {
    id: "severe-allergy",
    title: "Severe allergy",
    label: "Severe",
    englishText: "I have a severe peanut allergy. Even a small amount or cross-contact may be dangerous.",
    japaneseText: "重い食物アレルギーがあります。アレルギーのあるもの：落花生（ピーナッツ）。少量の混入や調理器具の共有でも危険です。対応が難しい場合は、無理に提供しなくて大丈夫です。",
    displayLines: [
      "重い食物アレルギーがあります。",
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
    summary: "For a severe peanut allergy when a small amount may be unsafe.",
    note: "Use when: you have a severe peanut allergy and cross-contact may be unsafe.",
    access: "free",
  },
  {
    id: "basic-food-allergy",
    title: "Basic food allergy",
    label: "Allergy",
    englishText: "I have a food allergy. Could you please check whether this contains the ingredient I need to avoid?",
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
    englishText: "I do not eat meat, seafood, eggs, dairy, or honey. Could you please check dashi and hidden ingredients?",
    japaneseText: "肉、魚介類、卵、乳製品、はちみつを食べません。だしや調味料に動物性のものが入っていないか確認していただけますか？対応が難しい場合は、無理に提供しなくて大丈夫です。",
    summary: "For avoiding meat, seafood, eggs, dairy, and honey.",
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
    englishText: "Is this cooked with shared oil or shared tools?",
    japaneseText: "同じ油や調理器具を使っていますか？",
    summary: "For checking shared oil, pans, or cooking tools.",
    note: "Use when: shared oil or tools may be unsafe for you.",
    access: "free",
  },
];

const popularFoodCardIds = ["severe-allergy", "vegetarian", "ask-dashi"];
const popularFoodCards = popularFoodCardIds.map((id) => foodCards.find((card) => card.id === id)).filter(Boolean);

const foodCardDisclaimer = {
  english:
    "These cards help you communicate your dietary needs, but they cannot guarantee that food is safe. If you have a severe allergy, always confirm with staff and use your own judgment.",
  japanese:
    "このカードは食事制限やアレルギーを伝えるための補助です。アレルゲンの完全除去や安全性を保証するものではありません。",
};

const foodCtaByGuide = {
  "ramen-shop":
    "Ramen soup often contains pork, chicken, or fish broth. If you have allergies or dietary restrictions, show a simple Japanese card before ordering.",
  izakaya:
    "Small dishes such as otoshi may contain fish, egg, meat, or alcohol. Use a simple Japanese card to explain what you need to avoid.",
  "restaurant-full":
    "If you choose another restaurant, it helps to show your food needs before ordering. A short Japanese card can make the first check easier.",
  "how-to-pay":
    "Before you pay, it may be too late to change your order. If you need to avoid ingredients, show a simple Japanese card before ordering.",
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
    english: "Use before or after you sit down.",
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
    subtext: "Ask whether the selected items are in the dish.",
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
  agreed: false,
  sampleMode: false,
  showMode: false,
  error: "",
  saveMessage: "",
  openCategoryIds: ["popular"],
};

const movePhraseCards = [
  {
    title: "How do I get here?",
    japanese: "ここに行きたいです。行き方を教えてください。",
    english: "Show a map, address, hotel, or station.",
  },
  {
    title: "Which exit should I use?",
    japanese: "何番出口から出ればいいですか？",
    english: "Use before leaving the station.",
  },
  {
    title: "Is this the right platform for ___?",
    japanese: "〇〇行きはこのホームで合っていますか？",
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

const partPngPath = "./design/parts/PNG/";

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
  "ramen-shop": { src: "./assets/icons/place/icon-place-ramen.png" },
  izakaya: { src: "./assets/icons/place/icon-place-izakaya.png" },
  "restaurant-full": { src: "./assets/icons/place/icon-place-full.png" },
  "how-to-pay": { src: "./assets/icons/action/icon-action-pay-correctly.png" },
  "food-cards": { src: "./assets/icons/action/icon-action-explain-food-needs.png" },
};

const categoryGuideIconBySlug = {
  "local-bus": { src: "./assets/icons/place/icon-place-bus-stop.png" },
  "find-right-platform": { src: "./assets/icons/action/icon-action-platform.png" },
  "find-right-exit": { src: "./assets/icons/action/icon-action-exit.png" },
  "charge-ic-card": { src: "./assets/icons/action/icon-action-IC-card.png" },
  "coin-lockers": { src: "./assets/icons/place/icon-place-coin-locker.png" },
  "ticket-machine-no-english": { src: "./assets/icons/place/icon-place-ticket-machine.png" },
  "onsen-sento": { src: "./assets/icons/place/icon-place-onsen.png" },
  "short-break": { src: "./assets/icons/action/icon-action-Short-Break.png" },
  shrine: { src: "./assets/icons/place/icon-place-shrine.png" },
  "photo-manners": { src: "./assets/icons/action/icon-action-Taking-Photos.png" },
  pharmacy: { src: "./assets/icons/place/icon-place-drugstore.png" },
  "feeling-sick": { src: "./assets/icons/action/icon-action-Feel-Sick-white.png" },
  "lost-something": { src: "./assets/icons/action/icon-action-Lost-Something.png" },
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
    cardDescription: "Understand when staff says they are full.",
  },
  {
    ...guideMap["how-to-pay"],
    cardTitle: "Pay correctly",
    cardDescription: "Know how to pay, including cash, card, meal tickets, or table charges.",
  },
  {
    slug: "food-cards",
    category: "food",
    cardTitle: "Explain food needs",
    cardDescription: "Show allergies, dietary restrictions, or ingredients to avoid.",
    href: "#/food-cards",
  },
];
const foodCardMap = Object.fromEntries(foodCards.map((card) => [card.id, card]));
const app = document.querySelector("#app");

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
  return `#/${id}`;
}

function pngImage(name, className, alt = "") {
  return `<img class="${className}" src="${partPngPath}${name}.png" srcset="${partPngPath}${name}@2x.png 2x" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">`;
}

function assetImage(src, className) {
  return `<img class="${className}" src="${escapeHtml(src)}" alt="" loading="lazy" decoding="async">`;
}

function guideCard(guide) {
  return `
    <a class="guide-card category-${guide.category}" href="#/guides/${guide.slug}">
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
  return `
    <a class="guide-card category-guide-card category-${guide.category} guide-${guide.slug}" href="#/guides/${guide.slug}">
      <span class="category-guide-card-icon" aria-hidden="true">${iconMarkup}</span>
      <h3>${escapeHtml(guide.title)}</h3>
      <div class="category-guide-card-first-move">
        <p>${escapeHtml(guide.firstMove)}</p>
      </div>
    </a>
  `;
}

function foodGuideCard(guide) {
  const iconMarkup = foodGuideIconMarkup(guide);
  const href = guide.href ?? `#/guides/${guide.slug}`;
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
    food: "Food, ordering, allergies, and dining basics.",
    move: "Trains, buses, taxis, lockers, and stations.",
    relax: "Onsen, hotels, luggage, and quiet spaces.",
    culture: "Shrines, temples, local places, and manners.",
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
  const description = isFoodCardsPage ? "Make a Japanese card for your exact food needs." : "Show your food needs clearly before ordering.";
  return `
    <div class="food-card-cta-panel shared-food-card-cta">
      <span class="food-card-ribbon">Food allergies &amp; restrictions</span>
      <div class="food-card-cta-content">
        <h2${titleId}>${heading}</h2>
        <p>${description}</p>
        <div class="food-card-benefits" aria-label="Food card benefits">
          <span>No app needed</span>
          <span>Save as image</span>
          <span>Show in Japanese</span>
        </div>
        <div class="section-actions">
          <a class="button primary" href="#/food-card/custom" ${trackAttr(createTrack)}>Create my card</a>
          ${includeSamplesLink ? `<a class="food-card-sample-link" href="#/food-cards" ${trackAttr(samplesTrack)}>See sample cards</a>` : ""}
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
          <h2 id="category-explorer-title">Not this moment?</h2>
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
            <span>English guide / Travel moments / First move</span>
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
            <img class="hero-visual-img hero-visual-img-1" src="./sozai/hero/hero-mobile-ramen.png" alt="" />
            <img class="hero-visual-img hero-visual-img-2" src="./sozai/hero/hero-mobile-izakaya.png" alt="" />
            <img class="hero-visual-img hero-visual-img-3" src="./sozai/hero/hero-mobile-onsen.png" alt="" />
            <img class="hero-visual-img hero-visual-img-4" src="./sozai/hero/hero-mobile-torii.png" alt="" />
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
          <p>Small helpers for moments when words get stuck.</p>
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
  const href = choice.href ?? `#/guides/${choice.slug}`;
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
  const href = choice.href ?? `#/guides/${choice.slug}`;
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
        <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><span>${escapeHtml(category.name)}</span></nav>
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
        <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><span>Food</span></nav>
        <h1>Food in Japan</h1>
        <p class="lead">${escapeHtml(category.description)}</p>
      </header>

      <section class="food-section" id="food-first-moves" aria-labelledby="food-guides-title">
        <div class="section-header">
          <div>
            <h2 id="food-guides-title">First moves for food places</h2>
          </div>
          <p>Choose what you need to do when ordering, eating, or explaining food needs.</p>
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
        <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><span>Move</span></nav>
        <h1>Move around Japan</h1>
        <p class="lead">${escapeHtml(category.description)}</p>
      </header>

      <section class="move-section" id="move-first-moves" aria-labelledby="move-guides-title">
        <div class="section-header">
          <div>
            <h2 id="move-guides-title">First moves for getting around</h2>
          </div>
          <p>Stations, trains, buses, IC cards, lockers, and next steps.</p>
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
          <p>Ask staff while showing a map, ticket, or pass.</p>
        </div>
        <div class="move-phrase-grid">
          ${movePhraseCards.map(movePhraseCard).join("")}
        </div>
      </section>

      <section class="move-help-note" aria-label="When you are lost">
        <div>
          <h2>Need help from a person?</h2>
          <p>If it feels bigger than transport, use Get Help.</p>
        </div>
        <a class="button secondary" href="#/help" ${trackAttr("move_to_help_lost")}>Go to Get Help</a>
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
        <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><span>Relax</span></nav>
        <h1>Relax in Japan</h1>
        <p class="lead">Rest, recharge, and recover during long travel days.</p>
      </header>

      <section class="relax-section" aria-labelledby="relax-guides-title">
        <div class="section-header">
          <div>
            <h2 id="relax-guides-title">First moves for resting and recharging</h2>
          </div>
          <p>Find places to sit, bathe, cool down, or take a quiet break.</p>
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
        <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><span>Culture</span></nav>
        <h1>Culture in Japan</h1>
        <p class="lead">${escapeHtml(category.description)}</p>
      </header>

      <section class="culture-section" aria-labelledby="culture-guides-title">
        <div class="section-header">
          <div>
            <h2 id="culture-guides-title">First moves for respectful visits</h2>
          </div>
          <p>Check entry, photos, lines, and local rules.</p>
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
          <p>Ask once, then follow the answer.</p>
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
        <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><span>Get Help</span></nav>
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
          <p>Medicine, lost items, payment trouble, sickness, and staff help.</p>
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
          <p>Short phrases for when you need help fast.</p>
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
        <p>Have allergies or dietary restrictions? Choose a sample Japanese card before you order.</p>
      </div>
      <div class="section-actions">
        <a class="button primary" href="#/food-cards" ${trackAttr("food_sample_cards_view")}>See sample cards</a>
        <a class="button secondary" href="#/food-card/custom" ${trackAttr("food_custom_card_create")}>Create my card</a>
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
          <a href="#/">Home</a><span>/</span>
          <a href="#/food">Food</a><span>/</span>
          <span>Food cards</span>
        </nav>
        <h1>Show your food needs in Japanese</h1>
        <p class="lead">Use a simple Japanese card before ordering. Choose a sample card, or create your own.</p>
      </header>

      <section class="food-card-first-move content-container" aria-labelledby="food-card-first-move-title">
        <h2 id="food-card-first-move-title">First move</h2>
        <p><strong>Show a card before you order.</strong></p>
        <p>These cards help communication, but they do not guarantee safety.</p>
      </section>

      <section class="section food-samples content-container" aria-labelledby="food-samples-title">
        <div class="section-header">
          <div>
            <h2 id="food-samples-title">Popular sample cards</h2>
          </div>
          <p>Choose a sample and open the full card.</p>
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
    <a class="food-sample-card" href="#/food-cards/${card.id}" ${trackAttr(`food_card_open_${card.id}`)}>
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
      ingredients: [{ labelJa: "避けたい食材", labelEn: "Ingredient to avoid" }],
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
        { labelJa: "はちみつ", labelEn: "Honey" },
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
          <a href="#/">Home</a><span>/</span>
          <a href="#/food">Food</a><span>/</span>
          <a href="#/food-cards">Food cards</a><span>/</span>
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
          <p>Wait for staff to check.</p>
        </div>
        <div>
          <span>3</span>
          <strong>If unsure, do not risk it</strong>
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
            <p>This card helps you communicate the risk, but staff still need to confirm ingredients and preparation.</p>
          </div>
        </section>

        ${foodDisclaimer()}
      </div>

      <section class="food-card-builder-panel food-detail-upgrade card-container" aria-labelledby="custom-card-title">
        <div>
          <h2 id="custom-card-title">Create your own card</h2>
          <p>Make a Japanese card for your exact food needs.</p>
        </div>
        <a class="button primary" href="#/food-card/custom" ${trackAttr(`food_card_detail_create_${card.id}`)}>Create my card</a>
      </section>

      <div class="section-actions content-container">
        <a class="button secondary" href="#/food-cards" ${trackAttr("food_card_detail_back_all")}>Back to sample cards</a>
      </div>
    </div>
  `;
}

function resetCustomFoodCardState() {
  Object.assign(customFoodCardState, {
    step: 1,
    cardType: "",
    reason: "",
    selectedIngredientIds: [],
    agreed: false,
    sampleMode: false,
    showMode: false,
    error: "",
    saveMessage: "",
    openCategoryIds: ["popular"],
  });
}

function startCustomFoodCard() {
  resetCustomFoodCardState();
  renderCustomFoodCard();
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
        <p class="custom-step-question">What ingredients or food items do you want to talk about?</p>
        <p>Choose up to 5 items.</p>
        <p>Too many items can make the card hard for staff to read. If you need to show more items, please create another card.</p>
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
    ? `<p class="custom-severe-note">For severe allergies, keep this card focused on the most important items. If you have several severe allergies, consider creating separate cards.</p>`
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
                        <legend>Why can’t you eat them?</legend>
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
      main: "重い食物アレルギーがあります。",
      support: "少量の混入や調理器具の共有でも危険です。",
      closing: "対応が難しい場合は、無理に提供しなくて大丈夫です。",
      ingredientLabelJa: "アレルギーのあるもの",
      ingredientLabelEn: "Allergens",
      responses: [
        { symbol: "○", ja: "対応できます", en: "CAN ACCOMMODATE" },
        { symbol: "×", ja: "対応できません", en: "CANNOT ACCOMMODATE" },
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
        { symbol: "○", ja: "対応できます", en: "CAN ACCOMMODATE" },
        { symbol: "×", ja: "対応できません", en: "CANNOT ACCOMMODATE" },
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
        { symbol: "○", ja: "対応できます", en: "CAN ACCOMMODATE" },
        { symbol: "×", ja: "対応できません", en: "CANNOT ACCOMMODATE" },
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
      main: "下記のものと同じ調理器具や油を使っていますか？",
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
      { symbol: "○", ja: "できます", en: "CAN" },
      { symbol: "×", ja: "できません", en: "CANNOT" },
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
    "○": "./assets/food-card/response-can.jpg",
    "×": "./assets/food-card/response-cannot.jpg",
    "?": "./assets/food-card/response-check.jpg",
  }[symbol];
}

function customFoodCardLayoutMarkup(content, selectedIngredients, className = "") {
  const sharedToolsNote = content.typeLabel === "SHARED TOOLS OR OIL"
    ? `<p class="custom-card-cross-contact-note">This does not guarantee zero cross-contact.</p>`
    : "";
  const closingMarkup = content.closing === "対応が難しい場合は、無理に提供しなくて大丈夫です。"
    ? `<span>対応が難しい場合は、</span><span>無理に提供しなくても大丈夫です。</span>`
    : escapeHtml(content.closing);
  return `
    <section class="custom-generated-card${className}" aria-label="Generated Japanese food card">
      <div class="custom-card-paper">
        <section class="custom-card-message-sheet" aria-label="Japanese message for restaurant staff">
          <span class="custom-card-type-label" lang="en">${escapeHtml(content.typeLabel)}</span>
          <div class="custom-card-main-copy" lang="ja">
            <p class="custom-card-main-line">${escapeHtml(content.main)}</p>
            ${content.support ? `<p class="custom-card-support-line">${escapeHtml(content.support)}</p>` : ""}
          </div>
          <section class="custom-card-ingredient-area" aria-label="Selected ingredients">
            <header>
              <strong lang="ja">${escapeHtml(content.ingredientLabelJa)}</strong>
              <small lang="en">${escapeHtml(content.ingredientLabelEn)}</small>
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
            <img class="custom-card-point-icon" src="./assets/food-card/yubisashi.png" alt="" aria-hidden="true" />
            <div>
              <strong lang="ja">該当するものを指さしてください。</strong>
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
            <p>Communication aid only. Does not guarantee food safety.</p>
            ${sharedToolsNote}
          </footer>
        </section>
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
            <p id="custom-sample-modal-description">This is an example.<br>Your final card will use the ingredients you selected.</p>
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

function customFoodCardStepThreeMarkup() {
  const type = customFoodCardType();
  const reason = customFoodCardReason();
  const selectedIngredients = customFoodCardSelectedIngredients();
  return `
    <div class="custom-food-card-step" data-custom-step="3">
      <div class="custom-step-heading">
        <h2>Confirm your card</h2>
        <p>This creates a bilingual Japanese card you can show restaurant staff.</p>
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
      <section class="custom-sample-preview" aria-labelledby="custom-sample-preview-title">
        <div>
          <h3 id="custom-sample-preview-title">Want to see what you’ll get?</h3>
          <p>View a sample card before creating yours.</p>
        </div>
        <button class="button secondary custom-sample-preview-button" type="button" data-custom-open-sample>View sample card</button>
      </section>
      <div class="custom-payment-placeholder" aria-label="Payment placeholder">
        <span>Custom Food Card</span>
        <strong>$4.99</strong>
        <p>Payment is not connected in this preview yet.</p>
      </div>
      <label class="custom-agreement-box">
        <input type="checkbox" data-custom-agreement ${customFoodCardState.agreed ? "checked" : ""}>
        <span>I understand that this card is a communication aid only and does not guarantee food safety.</span>
      </label>
      <p class="custom-terms-copy">By creating this card, you agree to the Disclaimer and Terms of Use.</p>
      <div class="custom-step-actions custom-step-actions-split">
        <button class="button secondary" type="button" data-custom-back>Back</button>
        <button class="button primary" type="button" data-custom-create ${customFoodCardState.agreed ? "" : "disabled"}>Create my card — $4.99</button>
      </div>
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
          <p>重い食物アレルギーがあります。</p>
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
      { ja: "対応できます", en: "CAN ACCOMMODATE" },
      { ja: "対応できません", en: "CANNOT ACCOMMODATE" },
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
        <p>下記のものと同じ調理器具や油を<br>使っていますか？</p>
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
      { ja: "できます", en: "CAN" },
      { ja: "できません", en: "CANNOT" },
      { ja: "確認します", en: "CHECK" },
    ];
  }

  return `
    <div class="custom-generated-card-message" lang="ja">${messageMarkup}</div>
    <div class="custom-card-point-block">
      <span class="custom-card-section-label" lang="en">PLEASE POINT TO ONE</span>
      <div class="custom-card-point-instruction" lang="ja"><span aria-hidden="true">☝</span><strong>該当するものを指さしてください。</strong></div>
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

function customFoodCardStepFourMarkup() {
  return `
    <div class="custom-food-card-step custom-ready-step" data-custom-step="4">
      <div class="custom-step-heading">
        <h2>Your card is ready</h2>
        <p>Show this card to restaurant staff or save it as an image.</p>
      </div>
      ${customGeneratedCardMarkup()}
      <div class="custom-ready-actions">
        <button class="button primary" type="button" data-custom-show>Show card</button>
        <button class="button secondary" type="button" data-custom-save>Save as image</button>
        <button class="button secondary" type="button" data-custom-restart>Create another card</button>
      </div>
      ${customFoodCardState.saveMessage ? `<p class="custom-save-status" role="status">${escapeHtml(customFoodCardState.saveMessage)}</p>` : ""}
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
    <div class="custom-show-overlay" role="dialog" aria-modal="true" aria-label="Show food card to staff">
      <div class="custom-show-controls">
        <button class="button secondary" type="button" data-custom-close-show>Close</button>
        <button class="button primary" type="button" data-custom-save>Save image</button>
      </div>
      ${customGeneratedCardMarkup("show")}
      ${customFoodCardState.saveMessage ? `<p class="custom-save-status" role="status">${escapeHtml(customFoodCardState.saveMessage)}</p>` : ""}
    </div>
  `;
}

function renderCustomFoodCard() {
  document.title = "Custom Food Card | Japan First Move";
  document.body.classList.toggle("is-custom-show-mode", customFoodCardState.showMode);
  document.body.classList.toggle("is-custom-sample-mode", customFoodCardState.sampleMode);
  app.innerHTML = `
    <div class="page-shell food-card-page custom-food-card-page custom-food-card-mvp-page layout-container" ${customFoodCardState.showMode || customFoodCardState.sampleMode ? 'aria-hidden="true" inert' : ""}>
      <header class="guide-page-header content-container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span>/</span>
          <a href="#/food">Food</a><span>/</span>
          <a href="#/food-cards">Food cards</a><span>/</span>
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
  `;
  wireCustomFoodCardEvents();
  if (customFoodCardState.sampleMode) {
    document.querySelector("[data-custom-close-sample]")?.focus();
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
        customFoodCardState.agreed = false;
      }
      customFoodCardState.error = "";
      renderCustomFoodCard();
    });
  });

  document.querySelectorAll("[data-custom-reason]").forEach((button) => {
    button.addEventListener("click", () => {
      customFoodCardState.reason = button.dataset.customReason;
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
      customFoodCardState.agreed = false;
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
    renderCustomFoodCard();
    window.scrollTo(0, 0);
  });

  document.querySelector("[data-custom-back]")?.addEventListener("click", () => {
    customFoodCardState.step = Math.max(1, customFoodCardState.step - 1);
    customFoodCardState.error = "";
    customFoodCardState.saveMessage = "";
    renderCustomFoodCard();
    window.scrollTo(0, 0);
  });

  document.querySelector("[data-custom-agreement]")?.addEventListener("change", (event) => {
    customFoodCardState.agreed = event.currentTarget.checked;
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
    if (!customFoodCardState.agreed) {
      return;
    }
    // TODO(stripe-checkout): Replace this direct transition with Stripe Checkout and resume card creation after successful payment.
    customFoodCardState.step = 4;
    renderCustomFoodCard();
    window.scrollTo(0, 0);
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
    button.addEventListener("click", () => {
      // TODO(custom-food-card-export): Connect this action to a DOM-to-image export utility when one is added to the project.
      customFoodCardState.saveMessage = "Save as image is coming soon.";
      renderCustomFoodCard();
    });
  });

  document.querySelector("[data-custom-restart]")?.addEventListener("click", () => {
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
    <a class="related-guide-card category-${guide.category}" href="#/guides/${guide.slug}" ${trackAttr(`guide_related_${currentGuide.slug}_${guide.slug}`)}>
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
          <a href="#/">Home</a><span>/</span>
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
              <img class="communication-heading-icon" src="./assets/section-icons/icon-say-or-show-this.png" alt="" loading="lazy" decoding="async">
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
              <img class="communication-heading-icon" src="./assets/section-icons/icon-if-you-see-or-hear-this.png" alt="" loading="lazy" decoding="async">
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
          <a class="button primary" href="#/">Go home</a>
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

  if (parts[0] === "food-cards" || parts[0] === "custom-food-card" || parts[0] === "food-card") {
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

function router() {
  document.body.classList.remove("is-custom-show-mode");
  document.body.classList.remove("is-custom-sample-mode");
  document.title = "Japan First Move";
  const hash = window.location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  const route = parts;

  if (route.length === 0) {
    renderHome();
  } else if (route[0] === "custom-food-card" || (route[0] === "food-card" && route[1] === "custom")) {
    startCustomFoodCard();
  } else if (route[0] === "food-cards") {
    if (route[1]) {
      renderFoodCardDetail(route[1]);
    } else {
      renderFoodCardsPage();
    }
  } else if (route[0] === "header-options") {
    renderHeaderOptions();
  } else if (route[0] === "guides") {
    renderGuide(route[1]);
  } else {
    renderCategory(route[0]);
  }

  wireScrollButtons();
  updateNavState(parts);
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", router);
router();
