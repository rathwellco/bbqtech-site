import type { Bilingual } from "../i18n/utils";

export interface PackageDetail {
  key: "tune-up" | "essential" | "signature" | "prestige";
  slug: Bilingual<string>;
  heroSubtitle: Bilingual<string>;
  whoFor: Bilingual<string[]>;
  whoNotFor: Bilingual<{ situation: string; pointTo: string }[]>;
  whatIncluded: Bilingual<{ section: string; items: string[] }[]>;
  whatNotIncluded: Bilingual<string[]>;
  method: Bilingual<{ title: string; body: string }[]>;
  duration: Bilingual<string>;
  durationNote: Bilingual<string>;
  conditions: Bilingual<string[]>;
  surcharges: Bilingual<{ situation: string; amount: string }[]>;
  comparisonNote: Bilingual<string>;
  faq: { q: Bilingual<string>; a: Bilingual<string> }[];
  ctaFinalHeading: Bilingual<string>;
  ctaFinalBody: Bilingual<string>;
  metaTitle: Bilingual<string>;
  metaDescription: Bilingual<string>;
}

const tuneUp: PackageDetail = {
  key: "tune-up",
  slug: { fr: "mise-au-point-bbq", en: "bbq-tune-up" },
  metaTitle: {
    fr: "Mise au point BBQ — Entretien préventif à sec | BBQTech Gatineau",
    en: "BBQ Tune-Up — Dry Preventive Maintenance | BBQTech Gatineau",
  },
  metaDescription: {
    fr: "Inspection complète et entretien préventif à sec pour préparer votre BBQ pour la saison. 195 $ + taxes. Service à domicile à Gatineau, Aylmer, Hull, Ottawa.",
    en: "Complete inspection and dry preventive maintenance to prep your BBQ for the season. $195 + tax. On-site service in Gatineau, Aylmer, Hull, Ottawa.",
  },
  heroSubtitle: {
    fr: "L'entretien préventif à sec. Pour vérifier, inspecter et préparer votre BBQ avant la saison — sans utiliser d'eau.",
    en: "Dry preventive maintenance. To check, inspect and prep your BBQ for the season — no water involved.",
  },
  whoFor: {
    fr: [
      "Votre BBQ fonctionne, mais vous voulez vous assurer que tout est en ordre avant la prochaine saison.",
      "Vous l'utilisez peu fréquemment et il accumule surtout poussière et débris.",
      "Vous voulez une inspection professionnelle pour identifier d'éventuels problèmes (brûleurs corrodés, pièces usées).",
      "Votre BBQ est relativement propre, juste un peu négligé après l'hiver.",
    ],
    en: [
      "Your BBQ works fine but you want to confirm everything is in order before the next season.",
      "You use it infrequently and it mostly accumulates dust and debris.",
      "You want a pro inspection to spot issues early (corroded burners, worn parts).",
      "Your BBQ is relatively clean, just a bit neglected after winter.",
    ],
  },
  whoNotFor: {
    fr: [
      { situation: "Votre BBQ a une saison ou plus de graisse cuite.", pointTo: "Nettoyage Essentiel à 249 $" },
      { situation: "BBQ sale qui demande un vrai nettoyage en profondeur.", pointTo: "Nettoyage Signature à 329 $" },
      { situation: "BBQ vieux ou premium très négligé depuis plusieurs saisons.", pointTo: "Restauration Prestige à la vapeur dès 495 $" },
    ],
    en: [
      { situation: "Your BBQ has a season or more of baked-on grease.", pointTo: "Essential Clean at $249" },
      { situation: "Dirty BBQ that needs real deep cleaning.", pointTo: "Signature Deep Clean at $329" },
      { situation: "Old or premium BBQ neglected for multiple seasons.", pointTo: "Prestige Steam Restoration from $495" },
    ],
  },
  whatIncluded: {
    fr: [
      {
        section: "Inspection et préparation",
        items: [
          "Inspection visuelle complète du BBQ",
          "Test d'allumage et vérification des flammes sur chaque brûleur",
          "Photos avant",
          "Identification des pièces usées ou endommagées",
          "Zone de travail protégée (tapis sous la zone)",
        ],
      },
      {
        section: "Démontage contrôlé",
        items: [
          "Retrait des grilles",
          "Retrait des sear plates / heat shields",
          "Retrait du bac à graisse",
          "Retrait des brûleurs si c'est sécuritaire",
        ],
      },
      {
        section: "Nettoyage à sec",
        items: [
          "Grilles : brossage et grattage des résidus faciles, à sec",
          "Sear plates : grattage des gros dépôts à sec",
          "Firebox (cuve) : vacuum + retrait des cendres, morceaux, poussière",
          "Bac à graisse : vidage et essuyage",
          "Brûleurs accessibles : brossage léger des ports",
          "Inspection des venturi et orifices accessibles",
          "Extérieur : essuyage léger des surfaces visibles",
        ],
      },
      {
        section: "Finition",
        items: [
          "Réassemblage complet",
          "Test d'allumage final",
          "Photos après",
          "Recommandations sur les pièces à surveiller pour la saison",
        ],
      },
    ],
    en: [
      {
        section: "Inspection & prep",
        items: [
          "Complete visual inspection of the BBQ",
          "Ignition test and flame check on every burner",
          "Before photos",
          "Identification of worn or damaged parts",
          "Protected work zone (mat under work area)",
        ],
      },
      {
        section: "Controlled disassembly",
        items: [
          "Grates removed",
          "Sear plates / heat shields removed",
          "Grease pan removed",
          "Burners removed if safe to handle",
        ],
      },
      {
        section: "Dry cleaning",
        items: [
          "Grates: dry brushing and scraping of loose residue",
          "Sear plates: dry scraping of larger deposits",
          "Firebox (cookbox): vacuum + removal of ash, debris, dust",
          "Grease pan: emptied and wiped",
          "Accessible burners: light port brushing",
          "Inspection of accessible venturi and orifices",
          "Exterior: light wipe of visible surfaces",
        ],
      },
      {
        section: "Finishing",
        items: [
          "Complete reassembly",
          "Final ignition test",
          "After photos",
          "Recommendations on parts to monitor for the season",
        ],
      },
    ],
  },
  whatNotIncluded: {
    fr: [
      "Utilisation d'eau — c'est volontaire, c'est un entretien à sec. Pour un nettoyage avec eau, voir le Nettoyage Essentiel à 249 $.",
      "Dégraissant et rinçage",
      "Nettoyage vapeur",
      "Polissage inox",
      "Démontage forcé de pièces corrodées, saisies ou fragiles",
      "Réparation ou remplacement de pièces (notre service Diagnostic à 99 $ couvre ça)",
      "Garantie « comme neuf » sur les composantes",
    ],
    en: [
      "Water use — it's deliberate, this is dry maintenance. For wet cleaning, see Essential Clean at $249.",
      "Degreaser and rinsing",
      "Steam cleaning",
      "Stainless steel polishing",
      "Forced disassembly of corroded, seized or fragile parts",
      "Repair or part replacement (our $99 Diagnostic service covers that)",
      "\"Like-new\" guarantee on components",
    ],
  },
  method: {
    fr: [
      { title: "Inspection (5 minutes)", body: "On arrive, on regarde, on identifie la marque, le modèle, l'état réel. On compte les brûleurs (si plus de 4, on confirme le supplément avant de toucher quoi que ce soit)." },
      { title: "Préparation de la zone", body: "Tapis posé sous la zone de travail. Pas besoin de spill berm complet — on n'utilise pas d'eau." },
      { title: "Démontage contrôlé", body: "Grilles, sear plates, bac à graisse, brûleurs si sécuritaire. Si une pièce résiste, on n'insiste pas." },
      { title: "Nettoyage à sec", body: "Vacuum dans la cuve, grattage des résidus faciles, brossage des composantes. Aucun produit chimique, aucune eau." },
      { title: "Inspection brûleurs et venturi", body: "Brossage léger des ports accessibles, vérification des venturi. On note ce qui devrait être surveillé." },
      { title: "Essuyage extérieur", body: "Surfaces visibles essuyées avec microfibre. Pas de polissage." },
      { title: "Réassemblage, test, photos", body: "Tout remonté, test d'allumage, photos après. On vous explique ce qu'on a vu et ce qu'on recommande." },
    ],
    en: [
      { title: "Inspection (5 minutes)", body: "We arrive, we look, we identify brand, model, real condition. We count the burners (if more than 4, surcharge confirmed before we touch anything)." },
      { title: "Work zone prep", body: "Mat placed under the work area. No need for full spill berm — no water used." },
      { title: "Controlled disassembly", body: "Grates, sear plates, grease pan, burners if safe. If a part resists, we don't force it." },
      { title: "Dry cleaning", body: "Vacuum inside the cookbox, scraping of loose residue, brushing of components. No chemicals, no water." },
      { title: "Burner & venturi inspection", body: "Light brushing of accessible ports, venturi check. We flag what should be monitored." },
      { title: "Exterior wipe", body: "Visible surfaces wiped with microfiber. No polishing." },
      { title: "Reassembly, test, photos", body: "Everything back together, ignition test, after photos. We tell you what we saw and what we recommend." },
    ],
  },
  duration: { fr: "1h30 à 2h sur place", en: "1.5 to 2 hours on site" },
  durationNote: {
    fr: "Si on dépasse 2h, c'est généralement que le BBQ est plus sale que prévu. On vous le dit, et on propose soit de continuer dans les limites de la Mise au point, soit de monter au Nettoyage Essentiel (249 $) ou Signature (329 $). Aucun changement de prix sans votre accord.",
    en: "If we go over 2h, the BBQ is usually dirtier than expected. We tell you, and offer to either stay within Tune-Up limits, or step up to Essential Clean ($249) or Signature ($329). No price change without your approval.",
  },
  conditions: {
    fr: [
      "Accès au BBQ sans escaliers (ou peu)",
      "Pas besoin d'eau extérieure — c'est un entretien à sec",
      "Espace de travail minimum 6 pi × 6 pi autour du BBQ",
      "Surface dégagée pour poser les composantes le temps du nettoyage",
    ],
    en: [
      "Access to the BBQ without stairs (or minimal)",
      "No outdoor water required — this is dry maintenance",
      "Minimum 6 ft × 6 ft work space around the BBQ",
      "Clear surface to place components during cleaning",
    ],
  },
  surcharges: {
    fr: [
      { situation: "5e brûleur principal et plus", amount: "+29 $ / brûleur" },
      { situation: "Brûleur latéral / arrière / IR", amount: "À évaluer sur place" },
      { situation: "Pizza oven, smoker box, griddle", amount: "Prix séparé" },
      { situation: "BBQ très sale (état dépassé)", amount: "Upgrade recommandé vers Essentiel ou Signature" },
    ],
    en: [
      { situation: "5th main burner and beyond", amount: "+$29 / burner" },
      { situation: "Side / rear / IR burner", amount: "Evaluated on site" },
      { situation: "Pizza oven, smoker box, griddle", amount: "Separate price" },
      { situation: "Very dirty BBQ (beyond scope)", amount: "Upgrade recommended to Essential or Signature" },
    ],
  },
  comparisonNote: {
    fr: "La Mise au point BBQ, c'est le moins cher mais aussi le moins approfondi. C'est volontaire : c'est de l'entretien préventif à sec, pas un nettoyage de fond. Si votre BBQ a vraiment besoin d'un lavage, optez pour le Nettoyage Essentiel à 249 $.",
    en: "The Tune-Up is the cheapest but also the least intensive. That's intentional: it's dry preventive maintenance, not a deep clean. If your BBQ really needs a wash, go with Essential Clean at $249.",
  },
  faq: [
    {
      q: { fr: "C'est juste un nettoyage léger? Ça vaut la peine?", en: "Is this just a light cleaning? Is it worth it?" },
      a: {
        fr: "Pour le bon profil de BBQ — fonctionnel, peu utilisé, début de saison —, oui. Une inspection professionnelle de 90 minutes peut détecter un brûleur qui commence à se boucher, un régulateur qui faiblit, des sear plates qui rouillent. Mieux vaut le savoir maintenant que pendant un souper avec invités. Si votre BBQ est franchement sale, par contre, la Mise au point ne fera pas de miracle — l'Essentiel ou le Signature sont mieux adaptés.",
        en: "For the right BBQ profile — functional, lightly used, start of season — yes. A pro 90-minute inspection can catch a burner starting to clog, a weakening regulator, sear plates rusting. Better to know now than during a dinner with guests. If your BBQ is genuinely dirty though, Tune-Up won't work miracles — Essential or Signature are better fits.",
      },
    },
    {
      q: { fr: "Pourquoi à sec et pas avec eau?", en: "Why dry and not with water?" },
      a: {
        fr: "Parce que pour beaucoup de BBQ, l'eau et le dégraissant ne sont pas nécessaires : il y a de la poussière, des débris, peut-être un peu de carbone facile à enlever. Faire venir l'eau, le boyau, le spill berm, le shop-vac wet — ça allonge le service et ça ajoute au coût pour rien. À sec, c'est plus rapide, plus économique, et le résultat est bon pour ce niveau d'utilisation. Si le BBQ demande vraiment de l'eau, on vous le dit dès l'inspection et on propose le bon forfait.",
        en: "Because for many BBQs, water and degreaser aren't necessary: there's dust, debris, maybe a bit of easy carbon. Bringing water, hose, spill berm, wet shop-vac adds time and cost for nothing. Dry is faster, cheaper, and the result is solid for that usage level. If the BBQ really needs water, we tell you during inspection and recommend the right package.",
      },
    },
    {
      q: { fr: "Quand prendre la Mise au point vs le Nettoyage Essentiel?", en: "When to pick Tune-Up vs Essential Clean?" },
      a: {
        fr: "Mise au point = BBQ qui a passé l'hiver dehors, peu utilisé, ou un BBQ qu'on veut juste valider avant la saison. Essentiel = BBQ qui a vraiment été utilisé pendant l'été, où la graisse commence à s'accumuler dans la cuve, où les grilles ont besoin d'eau et de dégraissant pour ressortir propres. Si vous hésitez, envoyez-nous une photo par SMS et on vous dit franchement laquelle des deux est appropriée.",
        en: "Tune-Up = BBQ that wintered outside, lightly used, or one you just want to validate before season. Essential = BBQ actually used through the summer, with grease starting to accumulate, where grates need water + degreaser to come out clean. Not sure? Text us a photo and we'll tell you straight which one fits.",
      },
    },
    {
      q: { fr: "Est-ce que ça prolonge la vie de mon BBQ?", en: "Does this extend my BBQ's life?" },
      a: {
        fr: "Indirectement, oui. Un BBQ inspecté annuellement où on remplace les pièces usées avant qu'elles ne brisent dure plus longtemps. La Mise au point seule ne remplace pas les pièces, mais elle vous dit ce qui devrait l'être. Le BBQ moyen dure 8-12 ans avec entretien régulier vs 4-6 ans sans.",
        en: "Indirectly, yes. A BBQ inspected annually where worn parts get replaced before breaking lasts longer. Tune-Up alone doesn't replace parts, but it tells you what should be. Average BBQ lasts 8–12 years with regular maintenance vs 4–6 without.",
      },
    },
    {
      q: { fr: "Combien de temps ça dure, le résultat?", en: "How long does the result last?" },
      a: {
        fr: "La Mise au point est faite pour préparer la saison. Si vous utilisez le BBQ 1-2 fois par semaine, vous serez bien jusqu'à la prochaine saison. Au fil de l'été, la graisse va naturellement s'accumuler — un Nettoyage Essentiel en milieu de saison peut être utile si vous voulez maintenir un haut niveau de propreté.",
        en: "Tune-Up is built to prep the season. If you use the BBQ 1–2× per week, you'll be fine until next season. Through the summer, grease will naturally build up — a mid-season Essential can help if you want to keep things spotless.",
      },
    },
    {
      q: { fr: "Comment ça se passe sur place?", en: "How does it work on site?" },
      a: {
        fr: "On arrive à l'heure convenue. Inspection rapide (5 min), confirmation du forfait si tout va, sinon on en discute. Vous n'avez pas besoin d'être présent pendant tout le service — assurez-vous juste que le BBQ est accessible. On vous envoie un texto quand c'est terminé avec les photos avant/après et nos recommandations.",
        en: "We arrive at the scheduled time. Quick inspection (5 min), package confirmation if all good, otherwise we discuss. You don't need to stay through the whole service — just make sure the BBQ is accessible. We text you when done with before/after photos and our recommendations.",
      },
    },
  ],
  ctaFinalHeading: {
    fr: "Préparez votre BBQ pour la saison.",
    en: "Get your BBQ ready for the season.",
  },
  ctaFinalBody: {
    fr: "La Mise au point BBQ, c'est l'entretien préventif intelligent. Inspection, nettoyage à sec, test, recommandations — pour partir la saison du bon pied.",
    en: "The BBQ Tune-Up is smart preventive maintenance. Inspection, dry clean, test, recommendations — to start the season right.",
  },
};

const essential: PackageDetail = {
  key: "essential",
  slug: { fr: "nettoyage-essentiel", en: "essential-clean" },
  metaTitle: {
    fr: "Nettoyage Essentiel — Nettoyage BBQ standard avec eau | BBQTech Gatineau",
    en: "Essential Clean — Standard Wet BBQ Cleaning | BBQTech Gatineau",
  },
  metaDescription: {
    fr: "Le premier vrai nettoyage avec eau, dégraissant et rinçage contrôlé. 249 $ + taxes. Pour BBQ moyennement sale. Service à domicile à Gatineau et Ottawa.",
    en: "The first true wet cleaning with degreaser and controlled rinse. $249 + tax. For moderately dirty BBQs. On-site service in Gatineau and Ottawa.",
  },
  heroSubtitle: {
    fr: "Le premier vrai nettoyage. Eau, dégraissant et rinçage contrôlé pour un BBQ qui ressort propre et fonctionnel.",
    en: "Your first true cleaning. Water, degreaser and controlled rinse for a BBQ that comes out clean and functional.",
  },
  whoFor: {
    fr: [
      "Votre BBQ a passé l'été dehors et a vraiment besoin d'un coup de propre.",
      "Vous l'utilisez régulièrement (1-2 fois par semaine).",
      "La graisse commence à s'accumuler, mais c'est encore gérable.",
      "Vous voulez plus qu'un entretien préventif, mais pas le grand jeu.",
      "Votre BBQ vaut entre 500 $ et 1 500 $ — vous en prenez soin.",
    ],
    en: [
      "Your BBQ wintered outside or got summer use and really needs a clean.",
      "You use it regularly (1–2× per week).",
      "Grease is starting to accumulate, but it's still manageable.",
      "You want more than preventive maintenance, but not the full deep clean.",
      "Your BBQ is worth $500–$1,500 — you take care of it.",
    ],
  },
  whoNotFor: {
    fr: [
      { situation: "BBQ neuf ou presque, juste poussiéreux.", pointTo: "Mise au point BBQ à 195 $" },
      { situation: "BBQ négligé deux saisons ou plus, graisse cuite-recuite.", pointTo: "Nettoyage Signature à 329 $" },
      { situation: "BBQ premium 10+ ans avec accumulation lourde.", pointTo: "Restauration Prestige à la vapeur dès 495 $" },
    ],
    en: [
      { situation: "Nearly-new BBQ, just dusty.", pointTo: "BBQ Tune-Up at $195" },
      { situation: "BBQ neglected two seasons or more, baked-on grease.", pointTo: "Signature Deep Clean at $329" },
      { situation: "Premium BBQ 10+ years old with heavy buildup.", pointTo: "Prestige Steam Restoration from $495" },
    ],
  },
  whatIncluded: {
    fr: [
      {
        section: "Inspection et préparation",
        items: [
          "Inspection visuelle complète",
          "Test d'allumage et vérification des flammes",
          "Photos avant",
          "Identification des pièces usées ou endommagées",
          "Zone de travail protégée — tapis et spill berm (parce qu'on utilise l'eau)",
        ],
      },
      {
        section: "Démontage contrôlé",
        items: [
          "Retrait des grilles, sear plates, bac à graisse",
          "Retrait des brûleurs si sécuritaire (sinon on n'insiste pas)",
        ],
      },
      {
        section: "Nettoyage standard avec eau",
        items: [
          "Grilles : brossage, dégraissant 1 application, rinçage et séchage",
          "Sear plates : grattage, lavage avec dégraissant standard, rinçage",
          "Firebox (cuve) : grattage, rinçage contrôlé, récupération au shop-vac wet",
          "Intérieur du couvercle : nettoyage standard des surfaces accessibles",
          "Brûleurs accessibles : brossage des ports, retrait des obstructions visibles",
          "Bac à graisse et grease management : nettoyage standard",
          "Extérieur : nettoyage standard, microfibre, produit adapté au matériau",
          "Inox : avec le grain, microfibre",
        ],
      },
      {
        section: "Finition et fermeture",
        items: [
          "Rinçage contrôlé complet",
          "Récupération des résidus au shop-vac wet",
          "Réassemblage",
          "Test d'allumage final",
          "Photos après",
          "Recommandations sur les pièces à surveiller",
        ],
      },
    ],
    en: [
      {
        section: "Inspection & prep",
        items: [
          "Complete visual inspection",
          "Ignition test and flame check",
          "Before photos",
          "Identification of worn or damaged parts",
          "Protected work zone — mat and spill berm (water is used)",
        ],
      },
      {
        section: "Controlled disassembly",
        items: [
          "Removal of grates, sear plates, grease pan",
          "Burners removed if safe (we don't force it)",
        ],
      },
      {
        section: "Standard wet cleaning",
        items: [
          "Grates: brushing, single degreaser application, rinse and dry",
          "Sear plates: scraping, wash with standard degreaser, rinse",
          "Firebox (cookbox): scraping, controlled rinse, wet shop-vac recovery",
          "Hood interior: standard cleaning of accessible surfaces",
          "Accessible burners: port brushing, removal of visible obstructions",
          "Grease pan and grease management: standard cleaning",
          "Exterior: standard cleaning, microfiber, material-appropriate product",
          "Stainless: with the grain, microfiber",
        ],
      },
      {
        section: "Finishing",
        items: [
          "Complete controlled rinse",
          "Wet shop-vac residue recovery",
          "Reassembly",
          "Final ignition test",
          "After photos",
          "Recommendations on parts to monitor",
        ],
      },
    ],
  },
  whatNotIncluded: {
    fr: [
      "Deuxième application de dégraissant (c'est dans le Nettoyage Signature à 329 $)",
      "Nettoyage vapeur (Restauration Prestige à la vapeur)",
      "Polissage inox avancé",
      "Restauration esthétique des composantes",
      "Démontage forcé de pièces corrodées ou saisies",
      "Réparation ou remplacement de pièces (Diagnostic à 99 $ séparé)",
      "Garantie « comme neuf »",
    ],
    en: [
      "Second degreaser application (that's in Signature Deep Clean at $329)",
      "Steam cleaning (Prestige Steam Restoration)",
      "Advanced stainless polishing",
      "Aesthetic restoration of components",
      "Forced disassembly of corroded or seized parts",
      "Repair or part replacement (separate $99 Diagnostic)",
      "\"Like-new\" guarantee",
    ],
  },
  method: {
    fr: [
      { title: "Inspection (5 minutes)", body: "Marque, modèle, condition, brûleurs, accès, eau. On confirme que l'Essentiel est le bon forfait avant de toucher au BBQ." },
      { title: "Préparation de la zone", body: "Spill berm installé, shop-vac wet prêt, boyau d'eau connecté et testé. On protège votre patio et vos plantes." },
      { title: "Démontage contrôlé", body: "Grilles, sear plates, bac à graisse, brûleurs si sécuritaire. Si une pièce résiste, on n'insiste pas et on travaille autour." },
      { title: "Nettoyage avec eau", body: "Dégraissant Hawco biodégradable, une application, temps de contact contrôlé, brossage, rinçage." },
      { title: "Firebox, hood, brûleurs", body: "Grattage, dégraissage contrôlé, rinçage. On récupère tout au shop-vac wet — aucun résidu sur votre terrain." },
      { title: "Extérieur et finition", body: "Inox avec le grain, microfibre, produit selon le matériau. Pas de produit agressif sur la porcelaine ou la peinture." },
      { title: "Réassemblage, test, photos", body: "Tout remonté, test d'allumage, photos après. Recommandations communiquées en personne ou par texto." },
    ],
    en: [
      { title: "Inspection (5 minutes)", body: "Brand, model, condition, burners, access, water. We confirm Essential is the right package before touching the BBQ." },
      { title: "Work zone prep", body: "Spill berm installed, wet shop-vac ready, water hose connected and tested. We protect your patio and plants." },
      { title: "Controlled disassembly", body: "Grates, sear plates, grease pan, burners if safe. If a part resists, we don't force it and work around." },
      { title: "Wet cleaning", body: "Biodegradable Hawco degreaser, single application, controlled dwell time, brushing, rinse." },
      { title: "Firebox, hood, burners", body: "Scraping, controlled degreasing, rinse. Everything recovered by wet shop-vac — no residue on your property." },
      { title: "Exterior & finishing", body: "Stainless with the grain, microfiber, product per material. No aggressive products on porcelain or paint." },
      { title: "Reassembly, test, photos", body: "Reassembled, ignition test, after photos. Recommendations shared in person or via text." },
    ],
  },
  duration: { fr: "2h30 à 3h sur place", en: "2.5 to 3 hours on site" },
  durationNote: {
    fr: "Si on dépasse 3h, c'est généralement que le BBQ est plus encrassé que prévu. On vous le dit et on propose soit de continuer dans les limites de l'Essentiel, soit de monter au Nettoyage Signature (329 $) ou à la Restauration Prestige (495 $+) si l'état le justifie. Aucun changement de prix sans votre accord.",
    en: "If we go over 3h, the BBQ is usually more soiled than expected. We tell you and offer to either stay within Essential limits, or step up to Signature ($329) or Prestige ($495+) if warranted. No price change without your approval.",
  },
  conditions: {
    fr: [
      "Accès au BBQ sans escaliers (ou peu)",
      "Espace de travail minimum 8 pi × 8 pi",
      "Accès à un robinet extérieur (ou eau intérieure avec passage de boyau)",
      "Surface adéquate pour installer le spill berm (environ 4 pi × 6 pi)",
    ],
    en: [
      "Access to the BBQ without stairs (or minimal)",
      "Minimum 8 ft × 8 ft work space",
      "Outdoor faucet access (or indoor water with hose routing)",
      "Adequate surface for spill berm (approx. 4 ft × 6 ft)",
    ],
  },
  surcharges: {
    fr: [
      { situation: "5e brûleur principal et plus", amount: "+29 $ / brûleur" },
      { situation: "Brûleur latéral / arrière / IR", amount: "À évaluer sur place" },
      { situation: "Pizza oven, smoker box, griddle", amount: "Prix séparé" },
      { situation: "Grilles extrêmement carbonisées", amount: "Supplément si traitement particulier requis" },
    ],
    en: [
      { situation: "5th main burner and beyond", amount: "+$29 / burner" },
      { situation: "Side / rear / IR burner", amount: "Evaluated on site" },
      { situation: "Pizza oven, smoker box, griddle", amount: "Separate price" },
      { situation: "Severely carbonized grates", amount: "Surcharge if special treatment needed" },
    ],
  },
  comparisonNote: {
    fr: "L'Essentiel donne un excellent résultat pour un BBQ qui n'a pas été trop négligé. Mais si la graisse est cuite et collée depuis longtemps, le Nettoyage Signature à 329 $ va décoller ce que l'Essentiel ne décolle pas — il fait deux applications de dégraissant au lieu d'une.",
    en: "Essential delivers a strong result for a BBQ that hasn't been too neglected. But if grease has been baked on for a while, Signature Deep Clean at $329 will lift what Essential can't — it does two degreaser applications instead of one.",
  },
  faq: [
    {
      q: { fr: "C'est quoi la vraie différence entre la Mise au point et l'Essentiel?", en: "What's the real difference between Tune-Up and Essential?" },
      a: {
        fr: "La Mise au point se fait à sec : vacuum, grattage, brossage léger, essuyage. Pas d'eau, pas de dégraissant. L'Essentiel ajoute l'eau, le dégraissant en une application, le rinçage contrôlé et la récupération des résidus au shop-vac wet. Concrètement, l'Essentiel décolle la graisse cuite que la Mise au point ne touche pas. Si votre BBQ a vraiment été utilisé pendant l'été, l'Essentiel est presque toujours le bon choix.",
        en: "Tune-Up is dry: vacuum, scraping, light brushing, wiping. No water, no degreaser. Essential adds water, single-application degreaser, controlled rinse and wet shop-vac recovery. Practically, Essential lifts baked grease that Tune-Up doesn't touch. If your BBQ actually got summer use, Essential is almost always the right call.",
      },
    },
    {
      q: { fr: "C'est quoi la vraie différence entre l'Essentiel et le Signature?", en: "What's the real difference between Essential and Signature?" },
      a: {
        fr: "Le temps et la profondeur. L'Essentiel fait une application de dégraissant et rince. Le Signature fait deux applications si nécessaire, prend plus de temps de contact, brosse plus longtemps, retourne dans les coins. Pour un BBQ utilisé tout l'été sans nettoyage sérieux, l'Essentiel ne décolle pas la graisse profondément cuite — le Signature, oui. Si vous hésitez, envoyez une photo et on vous dit franchement.",
        en: "Time and depth. Essential does one degreaser pass and rinses. Signature does two passes if needed, longer dwell time, longer brushing, comes back to the corners. For a BBQ used all summer without serious cleaning, Essential won't lift deeply baked grease — Signature will. Not sure? Text us a photo and we'll tell you.",
      },
    },
    {
      q: { fr: "Vous garantissez quoi exactement?", en: "What do you guarantee exactly?" },
      a: {
        fr: "On garantit que votre BBQ va sortir significativement plus propre et plus fonctionnel qu'avant qu'on arrive. On ne garantit pas un résultat « comme neuf » — c'est impossible et c'est malhonnête de le promettre. Si vous trouvez qu'un élément inclus dans le forfait n'a pas été fait correctement, contactez-nous rapidement et on corrige.",
        en: "We guarantee your BBQ will come out significantly cleaner and more functional than before we arrived. We don't guarantee \"like-new\" — that's impossible and dishonest to promise. If you find something included in the package wasn't done right, contact us quickly and we fix it.",
      },
    },
    {
      q: { fr: "Combien de temps dure le résultat?", en: "How long does the result last?" },
      a: {
        fr: "Si vous utilisez votre BBQ 1-2 fois par semaine, l'Essentiel tient bien jusqu'à la prochaine saison. Si vous cuisinez gras (côtes levées, brisket, ribs) ou fréquemment (4-5 fois/semaine), un entretien en milieu de saison peut valoir la peine — souvent une Mise au point à 195 $ suffit.",
        en: "If you use your BBQ 1–2× per week, Essential holds well until next season. If you cook fatty (ribs, brisket) or frequently (4–5×/week), a mid-season service can pay off — often a $195 Tune-Up is enough.",
      },
    },
    {
      q: { fr: "Mon BBQ a 6 ans, est-ce que je peux prendre l'Essentiel?", en: "My BBQ is 6 years old, can I get Essential?" },
      a: {
        fr: "Ça dépend de l'entretien des 6 dernières années. Si vous l'avez nettoyé chaque saison, oui l'Essentiel suffit. Si c'est resté dehors sans entretien, c'est probablement plus un Nettoyage Signature ou même une Restauration Prestige selon la marque. Envoyez une photo et on vous dit honnêtement — on ne pousse pas vers le forfait le plus cher si ce n'est pas nécessaire.",
        en: "Depends on those 6 years of upkeep. Cleaned every season? Essential is fine. Left outside without care? More likely a Signature or even a Prestige depending on brand. Send a photo and we'll be honest — we don't upsell to the most expensive package unless it's needed.",
      },
    },
    {
      q: { fr: "Vous nettoyez les BBQ au charbon, smokers ou kamados?", en: "Do you clean charcoal BBQs, smokers or kamados?" },
      a: {
        fr: "Certains, oui. Ça dépend du modèle et du matériau. Les kamados (Big Green Egg, Kamado Joe) ont une céramique fragile — on adapte l'approche. Les smokers à pellets (Traeger, Pit Boss) demandent une attention particulière au système d'alimentation. Envoyez-nous une photo, on confirme la faisabilité et le prix.",
        en: "Some, yes. Depends on model and material. Kamados (Big Green Egg, Kamado Joe) have fragile ceramic — we adapt. Pellet smokers (Traeger, Pit Boss) need attention to the auger system. Send us a photo, we'll confirm feasibility and price.",
      },
    },
  ],
  ctaFinalHeading: {
    fr: "Donnez un vrai coup de propre à votre BBQ.",
    en: "Give your BBQ a real clean.",
  },
  ctaFinalBody: {
    fr: "Le Nettoyage Essentiel, c'est le premier vrai nettoyage. Eau, dégraissant, rinçage, et un BBQ qui ressort propre et prêt à griller.",
    en: "Essential Clean is the first true wash. Water, degreaser, rinse, and a BBQ that comes out clean and ready to grill.",
  },
};

const signature: PackageDetail = {
  key: "signature",
  slug: { fr: "nettoyage-signature", en: "signature-deep-clean" },
  metaTitle: {
    fr: "Nettoyage Signature — Nettoyage BBQ approfondi recommandé | BBQTech Gatineau",
    en: "Signature Deep Clean — Recommended Deep BBQ Cleaning | BBQTech Gatineau",
  },
  metaDescription: {
    fr: "Nettoyage BBQ approfondi avec dégraissage à deux applications, composantes détaillées et finition propre. Forfait recommandé à 329 $ + taxes. Gatineau, Aylmer, Hull, Ottawa.",
    en: "Deep BBQ cleaning with two-pass degreasing, detailed components and clean finish. Recommended package at $329 + tax. Gatineau, Aylmer, Hull, Ottawa.",
  },
  heroSubtitle: {
    fr: "Notre forfait le plus populaire. Pour le BBQ qui a besoin d'un vrai nettoyage en profondeur, pas juste d'un coup de torchon.",
    en: "Our most popular package. For the BBQ that needs a real deep clean, not just a quick wipe.",
  },
  whoFor: {
    fr: [
      "Votre BBQ est sale, mais pas désastreux. Une saison ou deux d'utilisation sans nettoyage sérieux.",
      "Vous avez essayé de le nettoyer vous-même et ça ne ressort jamais comme vous voulez.",
      "Vous voulez un vrai nettoyage, pas juste un coup rapide.",
      "Votre BBQ vaut entre 800 $ et 2 500 $. Vous tenez à ce qu'il dure encore plusieurs années.",
      "Vous remarquez que la graisse s'accumule, que les grilles collent plus qu'avant, que les flammes sont moins uniformes.",
    ],
    en: [
      "Your BBQ is dirty but not disastrous. A season or two of use without serious cleaning.",
      "You've tried cleaning it yourself and it never comes out how you want.",
      "You want a real clean, not just a quick pass.",
      "Your BBQ is worth $800–$2,500. You want it to last several more years.",
      "You notice grease building, grates sticking, flames less uniform than before.",
    ],
  },
  whoNotFor: {
    fr: [
      { situation: "BBQ neuf ou presque, juste poussiéreux.", pointTo: "Mise au point BBQ à 195 $" },
      { situation: "BBQ moyennement sale, une saison sans gros entretien.", pointTo: "Nettoyage Essentiel à 249 $" },
      { situation: "BBQ premium 10+ ans très négligé, graisse cuite-recuite.", pointTo: "Restauration Prestige à la vapeur dès 495 $" },
    ],
    en: [
      { situation: "Nearly-new BBQ, just dusty.", pointTo: "BBQ Tune-Up at $195" },
      { situation: "Moderately dirty BBQ, one season without major upkeep.", pointTo: "Essential Clean at $249" },
      { situation: "Premium BBQ 10+ years, heavily neglected, baked-on grease.", pointTo: "Prestige Steam Restoration from $495" },
    ],
  },
  whatIncluded: {
    fr: [
      {
        section: "Inspection et préparation",
        items: [
          "Inspection visuelle complète",
          "Test d'allumage et vérification des flammes sur chaque brûleur",
          "Photos avant",
          "Identification des pièces usées ou endommagées",
          "Zone de travail protégée — tapis et spill berm",
        ],
      },
      {
        section: "Démontage contrôlé",
        items: [
          "Retrait des grilles, sear plates, bac à graisse",
          "Retrait des brûleurs si sécuritaire",
        ],
      },
      {
        section: "Nettoyage approfondi (la différence Signature)",
        items: [
          "Grilles : pré-grattage, dégraissant ciblé, brossage intensif, deuxième application si requis sur les zones tenaces, rinçage et séchage",
          "Sear plates : grattage prolongé, dégraissage, brossage à fond, rinçage contrôlé",
          "Firebox : dégraissage approfondi, brossage des coins et zones graisseuses, deux applications possibles",
          "Intérieur du couvercle : dégraissage des dépôts cuits, nettoyage des rebords",
          "Brûleurs accessibles : brossage complet des ports, retrait des obstructions, inspection des venturi",
          "Bac à graisse et grease management : dégraissage complet",
          "Extérieur : nettoyage détaillé des poignées, boutons, panneaux, côtés, traces de graisse",
          "Inox : nettoyage avec le grain, microfibre, produit approprié",
        ],
      },
      {
        section: "Finition et fermeture",
        items: [
          "Rinçage contrôlé partout",
          "Récupération complète des résidus au shop-vac wet",
          "Réassemblage complet",
          "Test d'allumage final",
          "Photos après",
          "Recommandations sur les pièces à surveiller pour la prochaine saison",
        ],
      },
    ],
    en: [
      {
        section: "Inspection & prep",
        items: [
          "Complete visual inspection",
          "Ignition test and flame check on every burner",
          "Before photos",
          "Identification of worn or damaged parts",
          "Protected work zone — mat and spill berm",
        ],
      },
      {
        section: "Controlled disassembly",
        items: [
          "Removal of grates, sear plates, grease pan",
          "Burners removed if safe",
        ],
      },
      {
        section: "Deep cleaning (the Signature difference)",
        items: [
          "Grates: pre-scraping, targeted degreaser, intensive brushing, second application on tough zones, rinse and dry",
          "Sear plates: extended scraping, degreasing, thorough brushing, controlled rinse",
          "Firebox: deep degreasing, brushing of corners and grease zones, two applications possible",
          "Hood interior: degreasing of baked deposits, edge cleaning",
          "Accessible burners: full port brushing, obstruction removal, venturi inspection",
          "Grease pan and grease management: full degreasing",
          "Exterior: detailed cleaning of handles, knobs, panels, sides, grease traces",
          "Stainless: with the grain, microfiber, proper product",
        ],
      },
      {
        section: "Finishing",
        items: [
          "Complete controlled rinse",
          "Full residue recovery via wet shop-vac",
          "Complete reassembly",
          "Final ignition test",
          "After photos",
          "Recommendations on parts to monitor for next season",
        ],
      },
    ],
  },
  whatNotIncluded: {
    fr: [
      "Nettoyage vapeur — c'est la Restauration Prestige à la vapeur qui l'ajoute",
      "Restauration esthétique avancée / polissage inox détaillé — Prestige aussi",
      "Réparation ou remplacement de pièces (Diagnostic à 99 $, pièces et main-d'œuvre en sus si vous procédez)",
      "Démontage forcé de pièces corrodées, saisies ou fragiles",
      "BBQ encastrés / cuisines extérieures / built-in — sur évaluation",
      "BBQ commerciaux — sur évaluation",
      "Rapport sommaire écrit envoyé par courriel — ça vient avec la Restauration Prestige",
      "Garantie « comme neuf » — votre BBQ va sortir beaucoup plus propre et performant, mais on n'efface pas 5 ans d'usure",
    ],
    en: [
      "Steam cleaning — that's added by Prestige Steam Restoration",
      "Advanced aesthetic restoration / detailed stainless polishing — Prestige too",
      "Repair or part replacement ($99 Diagnostic, parts + labor extra if you proceed)",
      "Forced disassembly of corroded, seized or fragile parts",
      "Built-in BBQs / outdoor kitchens — by evaluation",
      "Commercial BBQs — by evaluation",
      "Written summary report by email — that's with Prestige Steam Restoration",
      "\"Like-new\" guarantee — your BBQ will come out much cleaner and more functional, but we don't erase 5 years of wear",
    ],
  },
  method: {
    fr: [
      { title: "Inspection (5 minutes)", body: "Marque, modèle, état réel. On compte les brûleurs (>4 = supplément confirmé d'avance). Accès, eau, espace validés." },
      { title: "Préparation de la zone", body: "Spill berm installé, shop-vac prêt, boyau connecté. On protège votre patio, deck, plantes. Aucun résidu sur votre terrain à la fin." },
      { title: "Démontage contrôlé", body: "Grilles, sear plates, bac à graisse, brûleurs si sécuritaire. Pièce qui résiste : on n'insiste pas, on travaille autour et on vous le dit." },
      { title: "Nettoyage en profondeur", body: "Dégraissant Hawco biodégradable, deux applications sur les zones graisseuses tenaces, brossage intensif, temps de contact contrôlé. On retourne dans les coins." },
      { title: "Firebox, hood, brûleurs", body: "La partie la moins glamour mais la plus payante. On dégraisse à fond la cuve, l'intérieur du couvercle, on nettoie les brûleurs accessibles." },
      { title: "Extérieur et finition", body: "Inox avec le grain, microfibre, produit selon le matériau. Poignées, boutons, panneaux. Pas de produit agressif sur la porcelaine ou la peinture." },
      { title: "Réassemblage, test, photos", body: "Tout remonté, test d'allumage, photos après. On vous explique ce qu'on a vu, ce qu'on recommande, ce qu'il faut surveiller." },
    ],
    en: [
      { title: "Inspection (5 minutes)", body: "Brand, model, real condition. We count burners (>4 = surcharge confirmed up front). Access, water, space validated." },
      { title: "Work zone prep", body: "Spill berm installed, shop-vac ready, hose connected. We protect your patio, deck, plants. No residue on your property when we leave." },
      { title: "Controlled disassembly", body: "Grates, sear plates, grease pan, burners if safe. Part resists: we don't force, we work around and tell you." },
      { title: "Deep cleaning", body: "Biodegradable Hawco degreaser, two applications on tough greasy zones, intensive brushing, controlled dwell time. We come back to corners." },
      { title: "Firebox, hood, burners", body: "Least glamorous, most valuable part. We deep-degrease the cookbox, hood interior, clean accessible burners." },
      { title: "Exterior & finishing", body: "Stainless with the grain, microfiber, product per material. Handles, knobs, panels. No aggressive products on porcelain or paint." },
      { title: "Reassembly, test, photos", body: "Reassembled, ignition test, after photos. We explain what we saw, what we recommend, what to watch for." },
    ],
  },
  duration: { fr: "3h à 4h sur place", en: "3 to 4 hours on site" },
  durationNote: {
    fr: "Si on dépasse 4h, on s'arrête, on vous l'explique, et on propose soit de continuer dans les limites du Signature, soit de monter à la Restauration Prestige si l'état du BBQ le justifie. Aucun changement de prix sans votre accord.",
    en: "If we go past 4h, we stop, we tell you, and offer to either stay within Signature limits or step up to Prestige Restoration if the BBQ state warrants. No price change without your approval.",
  },
  conditions: {
    fr: [
      "Accès au BBQ sans escaliers (ou peu)",
      "Espace de travail minimum 8 pi × 8 pi",
      "Accès à un robinet extérieur (ou eau intérieure avec passage de boyau)",
      "Surface adéquate pour installer le spill berm (environ 4 pi × 6 pi)",
    ],
    en: [
      "Access to the BBQ without stairs (or minimal)",
      "Minimum 8 ft × 8 ft work space",
      "Outdoor faucet access (or indoor water with hose routing)",
      "Adequate surface for spill berm (approx. 4 ft × 6 ft)",
    ],
  },
  surcharges: {
    fr: [
      { situation: "5e brûleur principal et plus", amount: "+49 $ / brûleur" },
      { situation: "Brûleur arrière (rotisserie)", amount: "À évaluer sur place" },
      { situation: "Brûleur infrarouge / sear station séparée", amount: "À évaluer sur place" },
      { situation: "Side burner", amount: "À évaluer sur place" },
      { situation: "Grilles extrêmement carbonisées (au-delà du normal)", amount: "Supplément possible" },
      { situation: "Pizza oven, smoker box, griddle", amount: "Prix séparé" },
    ],
    en: [
      { situation: "5th main burner and beyond", amount: "+$49 / burner" },
      { situation: "Rear burner (rotisserie)", amount: "Evaluated on site" },
      { situation: "Infrared burner / separate sear station", amount: "Evaluated on site" },
      { situation: "Side burner", amount: "Evaluated on site" },
      { situation: "Severely carbonized grates (beyond normal)", amount: "Possible surcharge" },
      { situation: "Pizza oven, smoker box, griddle", amount: "Separate price" },
    ],
  },
  comparisonNote: {
    fr: "Le Signature, c'est l'équilibre entre prix raisonnable et résultat sérieux. Si votre BBQ a 10+ ans et a été négligé plusieurs saisons, la vapeur de la Restauration Prestige à 495 $+ va donner un meilleur résultat. Mais pour 90 % des BBQ après une saison ou deux de négligence, le Signature suffit largement.",
    en: "Signature is the balance between fair price and serious result. If your BBQ is 10+ years old and neglected for multiple seasons, the steam of Prestige Restoration at $495+ delivers more. But for 90% of BBQs after a season or two of neglect, Signature is plenty.",
  },
  faq: [
    {
      q: { fr: "C'est quoi la vraie différence entre l'Essentiel et le Signature?", en: "What's the real difference between Essential and Signature?" },
      a: {
        fr: "Le Nettoyage Essentiel, c'est un lavage standard avec eau et dégraissant — une application, on rince, on sèche, ça sort propre. Le Nettoyage Signature, on passe plus de temps : pré-grattage, deux applications de dégraissant si les zones sont tenaces, brossage intensif, on retourne dans les coins. Pour un BBQ qui a été utilisé tout l'été sans nettoyage sérieux, l'Essentiel ne décolle pas la graisse cuite. Le Signature, oui.",
        en: "Essential is standard wet cleaning — single application, rinse, dry, comes out clean. Signature spends more time: pre-scraping, two degreaser applications on stubborn zones, intensive brushing, comes back to corners. For a BBQ used all summer without serious cleaning, Essential won't lift baked grease. Signature will.",
      },
    },
    {
      q: { fr: "Pourquoi pas la vapeur dans le Nettoyage Signature?", en: "Why no steam in Signature?" },
      a: {
        fr: "La vapeur, c'est ce qui sépare un nettoyage approfondi d'une vraie restauration. Pour 90 % des BBQ après une saison ou deux, le dégraissage approfondi du Signature donne un excellent résultat. La vapeur (Restauration Prestige) vaut le coût quand le BBQ a été négligé plusieurs saisons, que les dépôts sont cuits-recuits, ou que c'est un BBQ premium de 10 ans et plus.",
        en: "Steam is what separates deep cleaning from real restoration. For 90% of BBQs after a season or two, Signature's deep degreasing gets excellent results. Steam (Prestige Restoration) pays off when the BBQ has been neglected for several seasons, deposits are baked-and-rebaked, or it's a premium BBQ 10+ years old.",
      },
    },
    {
      q: { fr: "Vous garantissez un résultat « comme neuf »?", en: "Do you guarantee a \"like-new\" result?" },
      a: {
        fr: "Non, et personne ne devrait. Un BBQ qui a deux saisons d'utilisation va ressortir spectaculaire avec le Signature. Un BBQ qui a 8 ans de carbone cuit, lui, ne redeviendra jamais neuf — mais on peut le ramener à un état où il fonctionne mieux, cuit mieux, et durera plus longtemps. On est honnête sur les limites avant de commencer.",
        en: "No, and no one should. A BBQ with two seasons of use will come out spectacular with Signature. A BBQ with 8 years of baked carbon will never look new — but we can bring it to a state where it functions better, cooks better, and lasts longer. We're honest about limits up front.",
      },
    },
    {
      q: { fr: "Combien de temps dure le résultat?", en: "How long does the result last?" },
      a: {
        fr: "Si vous utilisez votre BBQ 1-2 fois par semaine, un Nettoyage Signature tient bien jusqu'à la prochaine saison. Si vous l'utilisez 4-5 fois par semaine ou pour cuisiner gras (côtes levées, brisket), un entretien à mi-saison peut valoir la peine — souvent une Mise au point suffit à ce moment-là.",
        en: "If you use your BBQ 1–2× per week, Signature holds well until next season. If you use it 4–5× per week or cook fatty (ribs, brisket), a mid-season service can pay off — often a Tune-Up is enough at that point.",
      },
    },
    {
      q: { fr: "Vous nettoyez les BBQ au charbon, smokers ou kamados?", en: "Do you clean charcoal BBQs, smokers or kamados?" },
      a: {
        fr: "Selon le modèle, oui. Envoyez-nous une photo, on vous confirme. Certains smokers/kamados demandent une approche différente et un prix sur évaluation.",
        en: "Depending on the model, yes. Send us a photo, we'll confirm. Some smokers/kamados need a different approach and a custom price.",
      },
    },
    {
      q: { fr: "Comment on paye?", en: "How do we pay?" },
      a: {
        fr: "Carte de crédit, virement Interac, ou comptant sur place. Facture envoyée par courriel. Taxes en sus.",
        en: "Credit card, Interac e-transfer, or cash on site. Invoice emailed. Taxes extra.",
      },
    },
    {
      q: { fr: "Et si mon BBQ a besoin d'une réparation pendant le nettoyage?", en: "What if my BBQ needs repair during the cleaning?" },
      a: {
        fr: "On le voit en cours de route et on vous le dit avant de partir. La réparation elle-même n'est pas incluse — c'est notre service Diagnostic & Réparation (99 $ pour le diagnostic à domicile, pièces et main-d'œuvre en sus si vous décidez de procéder). Si possible, on combine en une seule visite pour vous épargner un déplacement.",
        en: "We notice it as we work and tell you before leaving. The repair itself isn't included — that's our Diagnostic & Repair service ($99 for on-site diagnostic, parts + labor extra if you proceed). When possible, we combine into a single visit to save you a trip.",
      },
    },
  ],
  ctaFinalHeading: {
    fr: "Prêt à donner un vrai coup de propre à votre BBQ?",
    en: "Ready for a real deep clean?",
  },
  ctaFinalBody: {
    fr: "Le Nettoyage Signature, c'est notre forfait le plus populaire pour une raison : c'est l'équilibre entre prix raisonnable et résultat sérieux.",
    en: "Signature Deep Clean is our most popular package for a reason: balance between fair price and serious result.",
  },
};

const prestige: PackageDetail = {
  key: "prestige",
  slug: { fr: "restauration-prestige-vapeur", en: "prestige-steam-restoration" },
  metaTitle: {
    fr: "Restauration Prestige à la vapeur — Remise en état BBQ premium | BBQTech Gatineau",
    en: "Prestige Steam Restoration — Premium BBQ Restoration | BBQTech Gatineau",
  },
  metaDescription: {
    fr: "Remise en état avancée à la vapeur pour BBQ premium, vieux ou très négligés. Dès 495 $ + taxes. Inclut photos extensives et rapport sommaire. Gatineau et Ottawa.",
    en: "Advanced steam restoration for premium, old or heavily neglected BBQs. From $495 + tax. Includes extensive photos and summary report. Gatineau and Ottawa.",
  },
  heroSubtitle: {
    fr: "La remise en état avancée. Vapeur, dégraissage en multiples passes, finition détaillée et rapport complet — pour les BBQ premium, vieux ou très négligés.",
    en: "Advanced restoration. Steam, multi-pass degreasing, detailed finishing and complete report — for premium, old or heavily neglected BBQs.",
  },
  whoFor: {
    fr: [
      "Votre BBQ a 8+ ans et a été négligé plusieurs saisons.",
      "C'est un BBQ premium : Napoleon Prestige, Weber Summit, Lynx, DCS, Twin Eagles, Viking, Fire Magic.",
      "La graisse est cuite-recuite, les sear plates sont noires, les brûleurs ne sont plus uniformes.",
      "Vous voulez le maximum d'amélioration esthétique et possiblement prolonger sa durée de vie de plusieurs saisons.",
      "Vous tenez à votre BBQ comme à un meuble premium — vous voulez le sauver, pas le remplacer.",
    ],
    en: [
      "Your BBQ is 8+ years old and has been neglected for multiple seasons.",
      "It's a premium BBQ: Napoleon Prestige, Weber Summit, Lynx, DCS, Twin Eagles, Viking, Fire Magic.",
      "Grease is baked-and-rebaked, sear plates are black, burners are no longer uniform.",
      "You want maximum aesthetic improvement and possibly extend its life by several seasons.",
      "You value your BBQ like a premium piece of furniture — you want to save it, not replace it.",
    ],
  },
  whoNotFor: {
    fr: [
      { situation: "BBQ de 1-3 ans, raisonnablement entretenu.", pointTo: "Nettoyage Signature à 329 $" },
      { situation: "BBQ moyennement sale, juste une saison sans nettoyage.", pointTo: "Nettoyage Essentiel à 249 $" },
      { situation: "Vous voulez juste vérifier que tout fonctionne avant la saison.", pointTo: "Mise au point BBQ à 195 $" },
    ],
    en: [
      { situation: "BBQ 1–3 years old, reasonably maintained.", pointTo: "Signature Deep Clean at $329" },
      { situation: "Moderately dirty BBQ, just one season without cleaning.", pointTo: "Essential Clean at $249" },
      { situation: "You just want to confirm everything works before season.", pointTo: "BBQ Tune-Up at $195" },
    ],
  },
  whatIncluded: {
    fr: [
      {
        section: "Tout le Nettoyage Signature, plus",
        items: [
          "Inspection visuelle complète et plus détaillée",
          "Démontage plus poussé si sécuritaire (incluant accès à des composantes que les autres forfaits n'incluent pas)",
          "Test d'allumage et vérification approfondie des flammes et de l'uniformité de la cuisson",
          "Photos avant extensives (10-15+ angles)",
        ],
      },
      {
        section: "Nettoyage vapeur",
        items: [
          "Génératrice de vapeur à 300°F+ utilisée sur les composantes appropriées",
          "Décollement des graisses cuites qui résistent aux dégraissants seuls",
          "Sans produit chimique additionnel dans la cuve",
          "Adapté selon le matériau (inox, fonte, fonte émaillée, porcelaine)",
        ],
      },
      {
        section: "Dégraissage avancé",
        items: [
          "Plusieurs applications de dégraissant sur les zones les plus encrassées",
          "Temps de contact prolongé contrôlé",
          "Brossage / scrubbing plus long et plus minutieux",
          "Reprise systématique des zones difficiles",
        ],
      },
      {
        section: "Finition avancée",
        items: [
          "Finition inox détaillée avec polissage lorsque le matériau le permet",
          "Nettoyage minutieux des composantes accessibles (knobs, badges, poignées, panneaux)",
          "Inspection plus poussée des venturi et orifices",
          "Recommandations détaillées sur les pièces (état actuel, prochaines à remplacer)",
        ],
      },
      {
        section: "Documentation et rapport",
        items: [
          "Photos après extensives (10-15+ angles)",
          "Rapport sommaire écrit envoyé par courriel après le service",
          "Liste des observations (pièces usées, recommandations d'entretien futur)",
          "Recommandations sur la durée de vie restante estimée du BBQ",
        ],
      },
    ],
    en: [
      {
        section: "Everything in Signature, plus",
        items: [
          "More detailed visual inspection",
          "Deeper disassembly if safe (including components not covered by other packages)",
          "Ignition test and thorough flame/cooking uniformity check",
          "Extensive before photos (10–15+ angles)",
        ],
      },
      {
        section: "Steam cleaning",
        items: [
          "300°F+ steam generator used on appropriate components",
          "Lifts baked grease that resists degreaser alone",
          "No additional chemicals in the cookbox",
          "Adapted by material (stainless, cast iron, porcelain, painted)",
        ],
      },
      {
        section: "Advanced degreasing",
        items: [
          "Multiple degreaser applications on the most soiled zones",
          "Extended controlled dwell time",
          "Longer, more meticulous brushing/scrubbing",
          "Systematic return to tough zones",
        ],
      },
      {
        section: "Advanced finishing",
        items: [
          "Detailed stainless finish with polishing when material allows",
          "Meticulous cleaning of accessible components (knobs, badges, handles, panels)",
          "Deeper venturi and orifice inspection",
          "Detailed parts recommendations (current state, next ones to replace)",
        ],
      },
      {
        section: "Documentation & report",
        items: [
          "Extensive after photos (10–15+ angles)",
          "Written summary report emailed after service",
          "List of observations (worn parts, future maintenance recommendations)",
          "Recommendations on estimated remaining BBQ lifespan",
        ],
      },
    ],
  },
  whatNotIncluded: {
    fr: [
      "Réparations — on identifie les pièces à remplacer, on ne les remplace pas dans ce forfait",
      "Pièces de remplacement (brûleurs neufs, sear plates neuves, grilles neuves)",
      "Soudure, peinture, restauration de métal rouillé",
      "Garantie « comme neuf » — un BBQ de 15 ans ne redeviendra jamais neuf, mais on s'approche du mieux raisonnable",
      "Démontage de composantes liées au gaz (régulateur, valves) — c'est du diagnostic, pas du nettoyage",
      "BBQ avec dommages structurels majeurs (rouille perforante, cuve fissurée) — on évalue avant de procéder",
    ],
    en: [
      "Repairs — we identify parts to replace, we don't replace them in this package",
      "Replacement parts (new burners, new sear plates, new grates)",
      "Welding, painting, rusted metal restoration",
      "\"Like-new\" guarantee — a 15-year-old BBQ will never look new, but we get as close as reasonably possible",
      "Disassembly of gas-related components (regulator, valves) — that's diagnostic, not cleaning",
      "BBQs with major structural damage (rust perforation, cracked firebox) — we evaluate before proceeding",
    ],
  },
  method: {
    fr: [
      { title: "Inspection détaillée (10-15 minutes)", body: "On prend le temps de bien évaluer l'état réel du BBQ. Marque, modèle, âge approximatif, accumulation, pièces critiques. On confirme la faisabilité et le prix avant de commencer." },
      { title: "Préparation de la zone (renforcée)", body: "Spill berm + tapis additionnels. Génératrice de vapeur installée. Shop-vac wet de grande capacité prêt. Protection renforcée des surfaces sensibles." },
      { title: "Démontage approfondi", body: "Toutes les composantes accessibles retirées : grilles, sear plates, brûleurs, drip tray, heat shields. On va plus loin que les autres forfaits, mais on ne force jamais une pièce corrodée." },
      { title: "Vapeur + dégraissage avancé", body: "Application de vapeur sur firebox, hood interior, composantes appropriées. Dégraissant en multiples passes. Temps de contact contrôlé. Brossage minutieux." },
      { title: "Composantes individuelles", body: "Chaque grille, chaque sear plate, chaque brûleur traité individuellement. Inspection détaillée. On documente l'état de chaque pièce." },
      { title: "Finition esthétique", body: "Inox poli avec le grain (selon le matériau). Knobs et poignées détaillés. Badges nettoyés sans produit agressif. Aspect global le plus propre possible." },
      { title: "Réassemblage, test, rapport", body: "Tout remonté avec attention. Test d'allumage et de fonctionnement complet. Photos extensives. Rapport sommaire envoyé par courriel après le service avec recommandations détaillées." },
    ],
    en: [
      { title: "Detailed inspection (10–15 minutes)", body: "We take time to properly assess the BBQ's real condition. Brand, model, approximate age, buildup, critical parts. We confirm feasibility and price before starting." },
      { title: "Reinforced work zone prep", body: "Spill berm + additional mats. Steam generator set up. High-capacity wet shop-vac ready. Reinforced protection of sensitive surfaces." },
      { title: "Deep disassembly", body: "All accessible components removed: grates, sear plates, burners, drip tray, heat shields. We go further than other packages, but we never force a corroded part." },
      { title: "Steam + advanced degreasing", body: "Steam applied to firebox, hood interior, appropriate components. Multi-pass degreaser. Controlled dwell time. Meticulous brushing." },
      { title: "Individual components", body: "Every grate, every sear plate, every burner treated individually. Detailed inspection. We document each part's condition." },
      { title: "Aesthetic finishing", body: "Stainless polished with the grain (per material). Knobs and handles detailed. Badges cleaned without aggressive products. Best possible overall finish." },
      { title: "Reassembly, test, report", body: "Reassembled with care. Full ignition and function test. Extensive photos. Written summary report emailed after service with detailed recommendations." },
    ],
  },
  duration: { fr: "5h à 7h+ sur place", en: "5 to 7+ hours on site" },
  durationNote: {
    fr: "La Restauration Prestige prend le temps qu'il faut pour bien faire le travail. Pour un BBQ extrêmement négligé, on peut proposer de scinder en deux visites. Le prix final est confirmé avant de commencer — possibilité d'évaluation préalable sur place pour les cas complexes.",
    en: "Prestige Restoration takes the time needed to do it right. For an extremely neglected BBQ, we may suggest splitting into two visits. Final price confirmed before starting — pre-evaluation on site possible for complex cases.",
  },
  conditions: {
    fr: [
      "Accès au BBQ sans escaliers (ou peu)",
      "Espace de travail minimum 8 pi × 8 pi (idéalement 10 × 10)",
      "Accès à un robinet extérieur fonctionnel",
      "Accès électrique recommandé pour la génératrice de vapeur",
      "Surface adéquate pour installer le spill berm et les composantes démontées",
      "Possibilité d'évaluation préalable sur place pour les BBQ encastrés ou complexes",
    ],
    en: [
      "Access to the BBQ without stairs (or minimal)",
      "Minimum 8 ft × 8 ft work space (ideally 10 × 10)",
      "Functional outdoor faucet access",
      "Electrical access recommended for steam generator",
      "Adequate surface for spill berm and disassembled components",
      "Pre-evaluation on site possible for built-in or complex BBQs",
    ],
  },
  surcharges: {
    fr: [
      { situation: "5e brûleur principal et plus", amount: "+49 $ / brûleur" },
      { situation: "BBQ très grand format (42-60 pouces)", amount: "Estimation personnalisée (souvent 595-695 $)" },
      { situation: "BBQ encastré / cuisine extérieure / built-in", amount: "Estimation personnalisée sur place" },
      { situation: "BBQ commercial", amount: "Estimation personnalisée" },
      { situation: "Pizza oven, smoker box, griddle, sear station IR", amount: "Prix séparé" },
      { situation: "Polissage inox premium avancé (haute exigence)", amount: "Supplément possible" },
      { situation: "Deuxième visite (BBQ extrêmement négligé)", amount: "Supplément discuté à l'avance" },
    ],
    en: [
      { situation: "5th main burner and beyond", amount: "+$49 / burner" },
      { situation: "Very large format (42–60 inch)", amount: "Custom estimate (often $595–$695)" },
      { situation: "Built-in BBQ / outdoor kitchen", amount: "Custom on-site estimate" },
      { situation: "Commercial BBQ", amount: "Custom estimate" },
      { situation: "Pizza oven, smoker box, griddle, IR sear station", amount: "Separate price" },
      { situation: "Advanced premium stainless polish (high-spec)", amount: "Possible surcharge" },
      { situation: "Second visit (extremely neglected BBQ)", amount: "Surcharge discussed up front" },
    ],
  },
  comparisonNote: {
    fr: "La Restauration Prestige, c'est notre niveau le plus poussé. Si votre BBQ a 5 ans ou moins et a été entretenu, vous n'en avez probablement pas besoin — un Nettoyage Signature suffit. Mais pour un BBQ premium de 8-15 ans qui a vécu plusieurs saisons sans nettoyage sérieux, c'est la seule option qui fait du sens.",
    en: "Prestige Restoration is our highest level. If your BBQ is 5 years or less and has been maintained, you probably don't need it — Signature is enough. But for a premium 8–15-year-old BBQ that's lived multiple seasons without serious cleaning, it's the only option that makes sense.",
  },
  faq: [
    {
      q: { fr: "Pourquoi à partir de 495 $ et pas un prix fixe?", en: "Why \"from $495\" and not a fixed price?" },
      a: {
        fr: "Parce que les BBQ qui méritent le Prestige sont très variés : un Napoleon Prestige 500 de 8 ans n'est pas la même bête qu'un Lynx 42 pouces de 12 ans. Le prix dépend du nombre de brûleurs, de l'état, du matériau, du temps réel nécessaire. On confirme le prix final avant de commencer. Pour les BBQ très grands ou encastrés, on peut faire une évaluation préalable sur place avant de fixer le prix.",
        en: "Because BBQs that warrant Prestige vary enormously: an 8-year-old Napoleon Prestige 500 isn't the same animal as a 12-year-old Lynx 42-inch. Price depends on burner count, condition, material, real time needed. We confirm final price before starting. For very large or built-in BBQs, we can do a pre-evaluation on site before pricing.",
      },
    },
    {
      q: { fr: "Vous garantissez « comme neuf »?", en: "Do you guarantee \"like-new\"?" },
      a: {
        fr: "Non. Un BBQ qui a 10-15 ans de carbone cuit, de rayures, de patine ne redeviendra jamais neuf — et c'est OK. Ce que la Restauration Prestige fait, c'est ramener le BBQ à l'état le plus propre et le plus fonctionnel raisonnablement possible selon son âge, son matériau et sa condition. Vous serez surpris du résultat, mais vous n'aurez pas un BBQ neuf — vous aurez votre BBQ, mais bien meilleur.",
        en: "No. A BBQ with 10–15 years of baked carbon, scratches, patina will never look new — and that's OK. What Prestige Restoration does is bring the BBQ to the cleanest and most functional state reasonably possible given its age, material and condition. You'll be surprised by the result, but you won't have a new BBQ — you'll have your BBQ, much better.",
      },
    },
    {
      q: { fr: "Mon Napoleon Prestige de 15 ans, c'est viable de le sauver ou je devrais le remplacer?", en: "My 15-year-old Napoleon Prestige — worth saving or should I replace?" },
      a: {
        fr: "Dépend de l'état. Un Napoleon Prestige bien construit peut souvent durer 18-20 ans avec entretien sérieux et remplacement des pièces critiques (brûleurs, sear plates, igniters). La Restauration Prestige va vous donner une réponse claire : on documente tout, on vous donne notre opinion honnête. Si le coût du Prestige + pièces nécessaires dépasse 50 % du prix d'un BBQ neuf équivalent, on vous le dit franchement.",
        en: "Depends on condition. A well-built Napoleon Prestige can often last 18–20 years with serious maintenance and replacement of critical parts (burners, sear plates, igniters). Prestige Restoration gives you a clear answer: we document everything, give honest opinion. If Prestige + needed parts exceeds 50% of a new equivalent BBQ, we tell you straight up.",
      },
    },
    {
      q: { fr: "Combien de temps dure le résultat?", en: "How long does the result last?" },
      a: {
        fr: "Avec entretien régulier ensuite (un Nettoyage Signature ou même Essentiel chaque saison), le résultat d'une Restauration Prestige peut tenir 3-5 ans avant qu'une nouvelle restauration soit nécessaire. Sans entretien, c'est plutôt 12-18 mois avant que la graisse recommence à s'accumuler sérieusement.",
        en: "With regular maintenance after (a Signature or even Essential each season), the Prestige Restoration result can hold 3–5 years before another restoration is needed. Without maintenance, more like 12–18 months before grease seriously rebuilds.",
      },
    },
    {
      q: { fr: "Vous prenez les outdoor kitchens et BBQ encastrés?", en: "Do you take outdoor kitchens and built-in BBQs?" },
      a: {
        fr: "Sur évaluation. Les BBQ encastrés demandent une approche différente parce qu'on ne peut pas les déplacer et qu'on travaille dans un espace contraint. On vient faire une évaluation sur place, on confirme la faisabilité et on donne un prix avant de procéder. Souvent c'est 595 $ à 895 $ selon la taille et la complexité.",
        en: "By evaluation. Built-in BBQs need a different approach since they can't be moved and we work in tight quarters. We come for an on-site evaluation, confirm feasibility, give a price before proceeding. Often $595–$895 depending on size and complexity.",
      },
    },
    {
      q: { fr: "Combien de pièces vais-je devoir remplacer après la Restauration?", en: "How many parts will I need to replace after Restoration?" },
      a: {
        fr: "Variable. Sur un BBQ premium de 10+ ans, c'est commun de devoir remplacer un ou deux brûleurs, parfois les igniters, parfois les sear plates si elles sont trop rouillées. Le rapport sommaire vous donne la liste exacte. La Restauration elle-même n'inclut pas les pièces — c'est le service Diagnostic & Réparation à 99 $ + pièces + main-d'œuvre qui s'en occupe. On peut combiner les deux services en une visite si vous décidez de procéder pendant qu'on est sur place.",
        en: "Variable. On a 10+ year premium BBQ, it's common to need 1–2 burner replacements, sometimes igniters, sometimes sear plates if too rusted. The summary report gives you the exact list. The Restoration itself doesn't include parts — that's the $99 Diagnostic & Repair service + parts + labor. We can combine both services in one visit if you decide to proceed while we're there.",
      },
    },
    {
      q: { fr: "Vous travaillez sur les BBQ commerciaux ou de restaurant?", en: "Do you work on commercial or restaurant BBQs?" },
      a: {
        fr: "Sur évaluation. Les BBQ commerciaux ont des exigences sanitaires et de fréquence différentes des résidentiels. On peut travailler avec des restaurants, food trucks, et propriétés multi-unités, mais le tarif et la fréquence sont sur soumission. Contactez-nous pour discuter.",
        en: "By evaluation. Commercial BBQs have different sanitary and frequency requirements than residential. We can work with restaurants, food trucks, and multi-unit properties, but rate and frequency are by quote. Reach out to discuss.",
      },
    },
  ],
  ctaFinalHeading: {
    fr: "Sauvez votre BBQ premium.",
    en: "Save your premium BBQ.",
  },
  ctaFinalBody: {
    fr: "La Restauration Prestige à la vapeur, c'est notre niveau le plus poussé. Vapeur, multiples passes, finition détaillée, photos et rapport sommaire. Pour le BBQ que vous voulez sauver, pas remplacer.",
    en: "Prestige Steam Restoration is our highest level. Steam, multi-pass degreasing, detailed finish, photos and summary report. For the BBQ you want to save, not replace.",
  },
};

export const packageDetails: Record<PackageDetail["key"], PackageDetail> = {
  "tune-up": tuneUp,
  essential,
  signature,
  prestige,
};

export const packageOrder: PackageDetail["key"][] = ["tune-up", "essential", "signature", "prestige"];
