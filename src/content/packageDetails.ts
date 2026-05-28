import type { Bilingual } from "../i18n/utils";

export interface PackageDetail {
  key: "essential" | "signature" | "prestige";
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

const essential: PackageDetail = {
  key: "essential",
  slug: { fr: "entretien-essentiel", en: "essential-maintenance" },
  metaTitle: {
    fr: "Entretien Essentiel — Préparation BBQ saisonnière | BBQTECH Gatineau & Ottawa",
    en: "Essential Maintenance — Seasonal BBQ Prep | BBQTECH Gatineau & Ottawa",
  },
  metaDescription: {
    fr: "Entretien préventif et nettoyage léger pour préparer votre BBQ pour la saison. Inspection complète et test d'allumage inclus. 199 $ + taxes. Gatineau, Aylmer, Hull, Ottawa.",
    en: "Preventive maintenance and light cleaning to prep your BBQ for the season. Complete inspection and ignition test included. $199 + tax. Gatineau, Aylmer, Hull, Ottawa.",
  },
  heroSubtitle: {
    fr: "L'entretien saisonnier. Inspection complète, nettoyage léger et test d'allumage — pour partir la saison du bon pied.",
    en: "Seasonal maintenance. Complete inspection, light cleaning and ignition test — to start the season right.",
  },
  whoFor: {
    fr: [
      "Vous voulez préparer votre BBQ pour la saison après l'hiver ou une longue pause.",
      "Votre BBQ fonctionne mais vous voulez confirmer que tout est en ordre avant les premiers soupers.",
      "Vous voulez une inspection professionnelle pour identifier d'éventuels problèmes avant qu'ils ne deviennent sérieux.",
      "Votre BBQ est utilisé légèrement à modérément et a surtout besoin d'une remise en ordre.",
    ],
    en: [
      "You want to prep your BBQ for the season after winter or a long pause.",
      "Your BBQ works but you want to confirm everything is in order before the first dinners.",
      "You want a pro inspection to spot issues before they become serious.",
      "Your BBQ is lightly to moderately used and mainly needs a refresh.",
    ],
  },
  whoNotFor: {
    fr: [
      { situation: "Votre BBQ a une saison ou plus de graisse accumulée et a besoin d'un vrai nettoyage en profondeur.", pointTo: "Nettoyage Signature à 299 $" },
      { situation: "BBQ très encrassé, premium ou négligé depuis plusieurs saisons.", pointTo: "Restauration Prestige à 399 $" },
    ],
    en: [
      { situation: "Your BBQ has a season or more of accumulated grease and needs real deep cleaning.", pointTo: "Signature Cleaning at $299" },
      { situation: "Very dirty BBQ, premium, or neglected for multiple seasons.", pointTo: "Prestige Steam Restoration at $399" },
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
          "Zone de travail protégée",
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
        section: "Nettoyage léger",
        items: [
          "Grilles : brossage et grattage des résidus, nettoyage léger avec eau si requis",
          "Sear plates : grattage des dépôts accessibles",
          "Firebox (cuve) : vacuum + retrait des cendres, morceaux et débris",
          "Bac à graisse : vidage et nettoyage",
          "Brûleurs accessibles : brossage des ports",
          "Inspection des venturi et orifices accessibles",
          "Extérieur : essuyage des surfaces visibles",
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
          "Protected work zone",
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
        section: "Light cleaning",
        items: [
          "Grates: brushing and scraping of residue, light water cleaning if needed",
          "Sear plates: scraping of accessible deposits",
          "Firebox (cookbox): vacuum + removal of ash, debris, particles",
          "Grease pan: emptied and cleaned",
          "Accessible burners: port brushing",
          "Inspection of accessible venturi and orifices",
          "Exterior: visible surfaces wiped",
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
      "Dégraissage approfondi en multiples passes — c'est le Nettoyage Signature à 299 $",
      "Nettoyage vapeur — c'est la Restauration Prestige à 399 $",
      "Polissage inox détaillé",
      "Démontage forcé de pièces corrodées, saisies ou fragiles",
      "Réparation ou remplacement de pièces (notre service Diagnostic à 125 $ couvre ça)",
      "Garantie « comme neuf » sur les composantes",
    ],
    en: [
      "Deep multi-pass degreasing — that's Signature Cleaning at $299",
      "Steam cleaning — that's Prestige Steam Restoration at $399",
      "Detailed stainless polishing",
      "Forced disassembly of corroded, seized or fragile parts",
      "Repair or part replacement (our $125 Diagnostic service covers that)",
      "\"Like-new\" guarantee on components",
    ],
  },
  method: {
    fr: [
      { title: "Inspection (5 minutes)", body: "Marque, modèle, condition réelle, brûleurs comptés (>4 = supplément confirmé d'avance). Accès et espace validés." },
      { title: "Préparation de la zone", body: "Tapis posé sous la zone de travail. Protection des surfaces sensibles à proximité." },
      { title: "Démontage contrôlé", body: "Grilles, sear plates, bac à graisse, brûleurs si sécuritaire. Pièce qui résiste : on n'insiste pas." },
      { title: "Nettoyage léger", body: "Vacuum dans la cuve, grattage des résidus, brossage des composantes accessibles. Eau utilisée ponctuellement si nécessaire." },
      { title: "Inspection brûleurs et venturi", body: "Brossage des ports accessibles, vérification des venturi. On documente ce qui devrait être surveillé." },
      { title: "Essuyage extérieur", body: "Surfaces visibles essuyées avec microfibre. Présentation propre, sans polissage avancé." },
      { title: "Réassemblage, test, photos", body: "Tout remonté, test d'allumage, photos après. Recommandations communiquées en personne ou par texto." },
    ],
    en: [
      { title: "Inspection (5 minutes)", body: "Brand, model, real condition, burners counted (>4 = surcharge confirmed up front). Access and space validated." },
      { title: "Work zone prep", body: "Mat placed under the work area. Sensitive nearby surfaces protected." },
      { title: "Controlled disassembly", body: "Grates, sear plates, grease pan, burners if safe. Part resists: we don't force it." },
      { title: "Light cleaning", body: "Vacuum inside the cookbox, scraping of residue, brushing of accessible components. Water used spot-by-spot if needed." },
      { title: "Burner & venturi inspection", body: "Brushing of accessible ports, venturi check. We document what should be monitored." },
      { title: "Exterior wipe", body: "Visible surfaces wiped with microfiber. Clean presentation, no advanced polish." },
      { title: "Reassembly, test, photos", body: "Reassembled, ignition test, after photos. Recommendations shared in person or via text." },
    ],
  },
  duration: { fr: "2h à 2h30 sur place", en: "2 to 2.5 hours on site" },
  durationNote: {
    fr: "Si l'inspection révèle un BBQ beaucoup plus sale que prévu, on vous le dit avant de continuer. On propose soit de rester dans les limites de l'Entretien Essentiel, soit de monter au Nettoyage Signature (299 $) ou à la Restauration Prestige (399 $) si l'état le justifie. Aucun changement de prix sans votre accord.",
    en: "If inspection reveals a much dirtier BBQ than expected, we tell you before continuing. We offer to either stay within Essential Maintenance limits or step up to Signature Cleaning ($299) or Prestige Steam Restoration ($399) if warranted. No price change without your approval.",
  },
  conditions: {
    fr: [
      "Accès au BBQ sans escaliers (ou peu)",
      "Espace de travail minimum 6 pi × 6 pi autour du BBQ",
      "Surface dégagée pour poser les composantes le temps de l'entretien",
      "Accès à l'eau utile mais pas indispensable",
    ],
    en: [
      "Access to the BBQ without stairs (or minimal)",
      "Minimum 6 ft × 6 ft work space around the BBQ",
      "Clear surface to place components during service",
      "Water access useful but not required",
    ],
  },
  surcharges: {
    fr: [
      { situation: "5e brûleur principal et plus", amount: "+29 $ / brûleur" },
      { situation: "Brûleur latéral / arrière / IR", amount: "À évaluer sur place" },
      { situation: "Pizza oven, smoker box, griddle", amount: "Prix séparé" },
      { situation: "BBQ plus sale que prévu", amount: "Upgrade recommandé vers Signature ou Prestige" },
    ],
    en: [
      { situation: "5th main burner and beyond", amount: "+$29 / burner" },
      { situation: "Side / rear / IR burner", amount: "Evaluated on site" },
      { situation: "Pizza oven, smoker box, griddle", amount: "Separate price" },
      { situation: "BBQ dirtier than expected", amount: "Upgrade recommended to Signature or Prestige" },
    ],
  },
  comparisonNote: {
    fr: "L'Entretien Essentiel, c'est le forfait d'entrée. Pour un BBQ qui a été utilisé tout l'été ou négligé depuis longtemps, le Nettoyage Signature à 299 $ va beaucoup plus loin avec un dégraissage approfondi en deux applications.",
    en: "Essential Maintenance is the entry package. For a BBQ used all summer or long-neglected, Signature Cleaning at $299 goes much further with deep two-pass degreasing.",
  },
  faq: [
    {
      q: { fr: "C'est seulement un entretien léger? Ça vaut la peine?", en: "Is this just light maintenance? Is it worth it?" },
      a: {
        fr: "Pour le bon profil de BBQ — fonctionnel, utilisé légèrement à modérément, début de saison — oui. Une inspection professionnelle peut détecter un brûleur qui commence à se boucher, un régulateur qui faiblit, des sear plates qui rouillent. Mieux vaut le savoir maintenant qu'au milieu d'un souper avec invités. Si votre BBQ est franchement sale, par contre, l'Entretien Essentiel ne fera pas de miracle — le Signature ou le Prestige sont mieux adaptés.",
        en: "For the right BBQ profile — functional, lightly to moderately used, start of season — yes. A pro inspection can catch a burner starting to clog, a weakening regulator, sear plates rusting. Better to know now than mid-dinner with guests. If your BBQ is genuinely dirty though, Essential Maintenance won't work miracles — Signature or Prestige are better fits.",
      },
    },
    {
      q: { fr: "Quand prendre l'Entretien Essentiel vs le Nettoyage Signature?", en: "When to pick Essential Maintenance vs Signature Cleaning?" },
      a: {
        fr: "Entretien Essentiel = BBQ qui a passé l'hiver dehors ou peu utilisé, vous voulez juste le préparer pour la saison. Signature = BBQ vraiment utilisé pendant l'été, où la graisse commence à s'accumuler, où les grilles ont besoin d'un vrai dégraissage. Si vous hésitez, envoyez-nous une photo et on vous dit franchement laquelle est appropriée.",
        en: "Essential Maintenance = BBQ that wintered outside or was lightly used, you just want to prep it for the season. Signature = BBQ truly used over summer, with grease starting to accumulate, where grates need real degreasing. Not sure? Send us a photo and we'll tell you straight which one fits.",
      },
    },
    {
      q: { fr: "Est-ce que ça prolonge la vie de mon BBQ?", en: "Does this extend my BBQ's life?" },
      a: {
        fr: "Indirectement, oui. Un BBQ inspecté annuellement où on remplace les pièces usées avant qu'elles ne brisent dure plus longtemps. L'Entretien Essentiel seul ne remplace pas les pièces, mais il vous dit ce qui devrait l'être. Un BBQ moyen entretenu peut durer 8 à 12 ans vs 4 à 6 ans sans aucun entretien.",
        en: "Indirectly, yes. A BBQ inspected annually where worn parts get replaced before breaking lasts longer. Essential Maintenance alone doesn't replace parts, but it tells you what should be. A typical maintained BBQ can last 8–12 years vs 4–6 without any upkeep.",
      },
    },
    {
      q: { fr: "Comment ça se passe sur place?", en: "How does it work on site?" },
      a: {
        fr: "On arrive à l'heure convenue. Inspection rapide (5 min), confirmation du forfait, sinon on en discute. Vous n'avez pas besoin d'être présent pendant tout le service — assurez-vous juste que le BBQ est accessible. On vous envoie un texto quand c'est terminé avec les photos et nos recommandations.",
        en: "We arrive at the scheduled time. Quick inspection (5 min), package confirmation if all good, otherwise we discuss. You don't need to stay through the whole service — just make sure the BBQ is accessible. We text you when done with photos and our recommendations.",
      },
    },
    {
      q: { fr: "Combien de temps dure le résultat?", en: "How long does the result last?" },
      a: {
        fr: "L'Entretien Essentiel est conçu pour préparer la saison. Si vous utilisez le BBQ 1-2 fois par semaine, vous serez bien jusqu'à la prochaine saison. Au fil de l'été, la graisse va naturellement s'accumuler — un Nettoyage Signature en milieu de saison ou la saison suivante peut être utile.",
        en: "Essential Maintenance is built to prep the season. If you use the BBQ 1–2× per week, you'll be fine until next season. Through summer, grease will naturally build up — a Signature Cleaning mid-season or next season can help.",
      },
    },
    {
      q: { fr: "Comment on paye?", en: "How do we pay?" },
      a: {
        fr: "Carte de crédit, virement Interac, ou comptant sur place. Facture envoyée par courriel. Taxes en sus.",
        en: "Credit card, Interac e-transfer, or cash on site. Invoice emailed. Taxes extra.",
      },
    },
  ],
  ctaFinalHeading: {
    fr: "Préparez votre BBQ pour la saison.",
    en: "Get your BBQ ready for the season.",
  },
  ctaFinalBody: {
    fr: "L'Entretien Essentiel, c'est la base solide : inspection, nettoyage léger, test et recommandations. Pour partir la saison du bon pied, sans surcomplication.",
    en: "Essential Maintenance is the solid baseline: inspection, light cleaning, test and recommendations. To start the season right, without overcomplication.",
  },
};

const signature: PackageDetail = {
  key: "signature",
  slug: { fr: "nettoyage-signature", en: "signature-cleaning" },
  metaTitle: {
    fr: "Nettoyage Signature — Nettoyage BBQ approfondi recommandé | BBQTECH Gatineau & Ottawa",
    en: "Signature Cleaning — Recommended Deep BBQ Cleaning | BBQTECH Gatineau & Ottawa",
  },
  metaDescription: {
    fr: "Nettoyage BBQ approfondi avec dégraissage à deux applications, composantes détaillées et finition propre. Forfait recommandé à 299 $ + taxes. Gatineau, Aylmer, Hull, Ottawa.",
    en: "Deep BBQ cleaning with two-pass degreasing, detailed components and clean finish. Recommended package at $299 + tax. Gatineau, Aylmer, Hull, Ottawa.",
  },
  heroSubtitle: {
    fr: "Notre forfait le plus populaire. Pour le BBQ qui a besoin d'un vrai nettoyage en profondeur, pas juste d'un coup de torchon.",
    en: "Our most popular package. For the BBQ that needs a real deep clean, not just a quick wipe.",
  },
  whoFor: {
    fr: [
      "Votre BBQ est sale et a besoin d'un vrai nettoyage annuel sérieux.",
      "Vous l'utilisez régulièrement et la graisse s'accumule à un niveau qui mérite plus qu'un entretien léger.",
      "Vous avez essayé de le nettoyer vous-même et ça ne ressort jamais comme vous voulez.",
      "Votre BBQ vaut entre 800 $ et 2 500 $. Vous tenez à ce qu'il dure encore plusieurs années.",
      "Vous remarquez que les grilles collent plus qu'avant, que les flammes sont moins uniformes.",
    ],
    en: [
      "Your BBQ is dirty and needs a real serious annual clean.",
      "You use it regularly and grease has built up to a level beyond light maintenance.",
      "You've tried cleaning it yourself and it never comes out how you want.",
      "Your BBQ is worth $800–$2,500. You want it to last several more years.",
      "You notice grates sticking more than before, flames less uniform than they used to be.",
    ],
  },
  whoNotFor: {
    fr: [
      { situation: "Vous voulez juste préparer le BBQ pour la saison, peu d'accumulation.", pointTo: "Entretien Essentiel à 199 $" },
      { situation: "BBQ premium 10+ ans très négligé avec graisse cuite-recuite.", pointTo: "Restauration Prestige à 399 $" },
    ],
    en: [
      { situation: "You just want season prep, minimal buildup.", pointTo: "Essential Maintenance at $199" },
      { situation: "Premium BBQ 10+ years, heavily neglected, baked-on grease.", pointTo: "Prestige Steam Restoration at $399" },
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
      "Nettoyage vapeur — c'est la Restauration Prestige qui l'ajoute",
      "Restauration esthétique avancée / polissage inox détaillé — Prestige aussi",
      "Réparation ou remplacement de pièces (Diagnostic à 125 $, pièces et main-d'œuvre en sus si vous procédez)",
      "Démontage forcé de pièces corrodées, saisies ou fragiles",
      "BBQ encastrés / cuisines extérieures — sur évaluation",
      "BBQ commerciaux — sur évaluation",
      "Rapport sommaire écrit envoyé par courriel — ça vient avec la Restauration Prestige",
      "Garantie « comme neuf » — votre BBQ va sortir beaucoup plus propre et plus agréable à utiliser, mais on n'efface pas 5 ans d'usure",
    ],
    en: [
      "Steam cleaning — that's added by Prestige Steam Restoration",
      "Advanced aesthetic restoration / detailed stainless polishing — Prestige too",
      "Repair or part replacement ($125 Diagnostic, parts + labor extra if you proceed)",
      "Forced disassembly of corroded, seized or fragile parts",
      "Built-in BBQs / outdoor kitchens — by evaluation",
      "Commercial BBQs — by evaluation",
      "Written summary report by email — that's with Prestige Steam Restoration",
      "\"Like-new\" guarantee — your BBQ will come out much cleaner and more pleasant to use, but we don't erase 5 years of wear",
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
    en: "If we go past 4h, we stop, we tell you, and offer to either stay within Signature limits or step up to Prestige Steam Restoration if the BBQ state warrants. No price change without your approval.",
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
    fr: "Le Signature, c'est l'équilibre entre prix raisonnable et résultat sérieux. Si votre BBQ a 10+ ans et a été négligé plusieurs saisons, la Restauration Prestige à 399 $ va plus loin avec la vapeur. Mais pour la majorité des BBQ après une saison ou deux de négligence, le Signature suffit.",
    en: "Signature is the balance between fair price and serious result. If your BBQ is 10+ years old and neglected for multiple seasons, Prestige Steam Restoration at $399 goes further with steam. But for most BBQs after a season or two of neglect, Signature is plenty.",
  },
  faq: [
    {
      q: { fr: "C'est quoi la vraie différence entre l'Entretien Essentiel et le Signature?", en: "What's the real difference between Essential Maintenance and Signature?" },
      a: {
        fr: "L'Entretien Essentiel est un nettoyage léger avec inspection — idéal pour préparer le BBQ pour la saison. Le Signature, c'est un vrai nettoyage approfondi : pré-grattage, deux applications de dégraissant si les zones sont tenaces, brossage intensif, on retourne dans les coins. Pour un BBQ utilisé tout l'été sans nettoyage sérieux, l'Essentiel ne décolle pas la graisse cuite. Le Signature, oui.",
        en: "Essential Maintenance is light cleaning with inspection — ideal for season prep. Signature is real deep cleaning: pre-scraping, two degreaser applications on stubborn zones, intensive brushing, comes back to corners. For a BBQ used all summer without serious cleaning, Essential won't lift baked grease. Signature will.",
      },
    },
    {
      q: { fr: "Pourquoi pas la vapeur dans le Nettoyage Signature?", en: "Why no steam in Signature?" },
      a: {
        fr: "La vapeur, c'est ce qui sépare un nettoyage approfondi d'une vraie restauration. Pour la majorité des BBQ après une saison ou deux, le dégraissage approfondi du Signature donne un excellent résultat. La vapeur (Restauration Prestige) vaut le coût quand le BBQ a été négligé plusieurs saisons, que les dépôts sont cuits-recuits, ou que c'est un BBQ premium de 10 ans et plus.",
        en: "Steam is what separates deep cleaning from real restoration. For most BBQs after a season or two, Signature's deep degreasing gets excellent results. Steam (Prestige Restoration) pays off when the BBQ has been neglected for several seasons, deposits are baked-and-rebaked, or it's a premium BBQ 10+ years old.",
      },
    },
    {
      q: { fr: "Vous garantissez un résultat « comme neuf »?", en: "Do you guarantee a \"like-new\" result?" },
      a: {
        fr: "Non. Notre objectif est de rendre votre BBQ plus propre, plus performant et plus agréable à utiliser — pas de le transformer en BBQ neuf. Un BBQ qui a deux saisons d'utilisation va ressortir spectaculaire avec le Signature. Un BBQ qui a 8 ans de carbone cuit ne redeviendra jamais neuf — mais on peut le ramener à un état où il fonctionne mieux, cuit mieux, et durera plus longtemps. On est honnête sur les limites avant de commencer.",
        en: "No. Our goal is to make your BBQ cleaner, better-performing and more pleasant to use — not to transform it into a new BBQ. A BBQ with two seasons of use will come out spectacular with Signature. A BBQ with 8 years of baked carbon will never look new — but we can bring it to a state where it functions better, cooks better, and lasts longer. We're honest about limits up front.",
      },
    },
    {
      q: { fr: "Combien de temps dure le résultat?", en: "How long does the result last?" },
      a: {
        fr: "Si vous utilisez votre BBQ 1-2 fois par semaine, un Nettoyage Signature tient bien jusqu'à la prochaine saison. Si vous l'utilisez 4-5 fois par semaine ou pour cuisiner gras (côtes levées, brisket), un entretien à mi-saison peut valoir la peine — souvent un Entretien Essentiel suffit à ce moment-là.",
        en: "If you use your BBQ 1–2× per week, Signature holds well until next season. If you use it 4–5× per week or cook fatty (ribs, brisket), a mid-season service can pay off — often an Essential Maintenance is enough at that point.",
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
        fr: "On le voit en cours de route et on vous le dit avant de partir. La réparation elle-même n'est pas incluse — c'est notre service Diagnostic & Réparation (125 $ pour le diagnostic à domicile, dont 55 $ crédités si la réparation est effectuée par BBQTECH, pièces et main-d'œuvre en sus). Si possible, on combine en une seule visite pour vous épargner un déplacement.",
        en: "We notice it as we work and tell you before leaving. The repair itself isn't included — that's our Diagnostic & Repair service ($125 for on-site diagnostic, with $55 credited if repair is done by BBQTECH, parts + labor extra). When possible, we combine into a single visit to save you a trip.",
      },
    },
  ],
  ctaFinalHeading: {
    fr: "Prêt à donner un vrai coup de propre à votre BBQ?",
    en: "Ready for a real deep clean?",
  },
  ctaFinalBody: {
    fr: "Le Nettoyage Signature, c'est notre forfait le plus populaire pour une raison : c'est l'équilibre entre prix raisonnable et résultat sérieux.",
    en: "Signature Cleaning is our most popular package for a reason: balance between fair price and serious result.",
  },
};

const prestige: PackageDetail = {
  key: "prestige",
  slug: { fr: "restauration-prestige-vapeur", en: "prestige-steam-restoration" },
  metaTitle: {
    fr: "Restauration Prestige — Remise en état BBQ premium | BBQTECH Gatineau & Ottawa",
    en: "Prestige Steam Restoration — Premium BBQ Restoration | BBQTECH Gatineau & Ottawa",
  },
  metaDescription: {
    fr: "Remise en état avancée à la vapeur pour BBQ premium, vieux ou très négligés. 399 $ + taxes. Inclut photos extensives et rapport sommaire. Gatineau et Ottawa.",
    en: "Advanced steam restoration for premium, old or heavily neglected BBQs. $399 + tax. Includes extensive photos and summary report. Gatineau and Ottawa.",
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
      "Vous voulez le maximum d'amélioration esthétique et de performance possible, sans le remplacer.",
      "Vous tenez à votre BBQ comme à un meuble premium — vous voulez le sauver, pas le remplacer.",
    ],
    en: [
      "Your BBQ is 8+ years old and has been neglected for multiple seasons.",
      "It's a premium BBQ: Napoleon Prestige, Weber Summit, Lynx, DCS, Twin Eagles, Viking, Fire Magic.",
      "Grease is baked-and-rebaked, sear plates are black, burners are no longer uniform.",
      "You want maximum aesthetic improvement and performance possible, without replacing it.",
      "You value your BBQ like a premium piece of furniture — you want to save it, not replace it.",
    ],
  },
  whoNotFor: {
    fr: [
      { situation: "BBQ de 1-3 ans, raisonnablement entretenu.", pointTo: "Nettoyage Signature à 299 $" },
      { situation: "Vous voulez juste préparer le BBQ pour la saison.", pointTo: "Entretien Essentiel à 199 $" },
    ],
    en: [
      { situation: "BBQ 1–3 years old, reasonably maintained.", pointTo: "Signature Cleaning at $299" },
      { situation: "You just want season prep.", pointTo: "Essential Maintenance at $199" },
    ],
  },
  whatIncluded: {
    fr: [
      {
        section: "Tout le Nettoyage Signature, plus",
        items: [
          "Inspection visuelle plus détaillée",
          "Démontage plus poussé si sécuritaire",
          "Test d'allumage et vérification approfondie des flammes et de l'uniformité de la cuisson",
          "Photos avant extensives (10-15+ angles)",
        ],
      },
      {
        section: "Nettoyage vapeur",
        items: [
          "Génératrice de vapeur à haute température utilisée sur les composantes appropriées",
          "Aide à décoller les graisses cuites qui résistent aux dégraissants seuls",
          "Sans produit chimique additionnel dans la cuve",
          "Adapté selon le matériau (inox, fonte, fonte émaillée, porcelaine, acier peint)",
        ],
      },
      {
        section: "Dégraissage avancé",
        items: [
          "Plusieurs applications de dégraissant sur les zones les plus encrassées",
          "Temps de contact prolongé contrôlé",
          "Brossage et scrubbing plus long et plus minutieux",
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
          "Estimation indicative de la durée de vie restante du BBQ",
        ],
      },
    ],
    en: [
      {
        section: "Everything in Signature, plus",
        items: [
          "More detailed visual inspection",
          "Deeper disassembly if safe",
          "Ignition test and thorough flame/cooking uniformity check",
          "Extensive before photos (10–15+ angles)",
        ],
      },
      {
        section: "Steam cleaning",
        items: [
          "High-temperature steam generator used on appropriate components",
          "Helps lift baked grease that resists degreaser alone",
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
          "Indicative estimate of remaining BBQ lifespan",
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
      { title: "Inspection détaillée (10-15 minutes)", body: "On prend le temps de bien évaluer l'état réel du BBQ. Marque, modèle, âge approximatif, accumulation, pièces critiques. On confirme la faisabilité avant de commencer." },
      { title: "Préparation de la zone (renforcée)", body: "Spill berm + tapis additionnels. Génératrice de vapeur installée. Shop-vac wet de grande capacité prêt. Protection renforcée des surfaces sensibles." },
      { title: "Démontage approfondi", body: "Toutes les composantes accessibles retirées : grilles, sear plates, brûleurs, drip tray, heat shields. On va plus loin que les autres forfaits, mais on ne force jamais une pièce corrodée." },
      { title: "Vapeur + dégraissage avancé", body: "Application de vapeur sur firebox, hood interior, composantes appropriées. Dégraissant en multiples passes. Temps de contact contrôlé. Brossage minutieux." },
      { title: "Composantes individuelles", body: "Chaque grille, chaque sear plate, chaque brûleur traité individuellement. Inspection détaillée. On documente l'état de chaque pièce." },
      { title: "Finition esthétique", body: "Inox poli avec le grain (selon le matériau). Knobs et poignées détaillés. Badges nettoyés sans produit agressif. Aspect global le plus propre possible." },
      { title: "Réassemblage, test, rapport", body: "Tout remonté avec attention. Test d'allumage et de fonctionnement complet. Photos extensives. Rapport sommaire envoyé par courriel après le service avec recommandations détaillées." },
    ],
    en: [
      { title: "Detailed inspection (10–15 minutes)", body: "We take time to properly assess the BBQ's real condition. Brand, model, approximate age, buildup, critical parts. We confirm feasibility before starting." },
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
    fr: "La Restauration Prestige prend le temps nécessaire pour bien faire le travail. Pour un BBQ extrêmement négligé, on peut proposer de scinder en deux visites. Toute condition particulière (BBQ très grand, encastré, commercial) peut nécessiter une estimation personnalisée — confirmée avant de commencer.",
    en: "Prestige Steam Restoration takes the time needed to do it right. For an extremely neglected BBQ, we may suggest splitting into two visits. Any special condition (very large, built-in, commercial BBQ) may require a custom estimate — confirmed before starting.",
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
      { situation: "BBQ très grand format (42-60 pouces)", amount: "Estimation personnalisée" },
      { situation: "BBQ encastré / cuisine extérieure", amount: "Estimation personnalisée sur place" },
      { situation: "BBQ commercial", amount: "Estimation personnalisée" },
      { situation: "Pizza oven, smoker box, griddle, sear station IR", amount: "Prix séparé" },
      { situation: "Polissage inox premium avancé (haute exigence)", amount: "Supplément possible" },
      { situation: "Deuxième visite (BBQ extrêmement négligé)", amount: "Supplément discuté à l'avance" },
    ],
    en: [
      { situation: "5th main burner and beyond", amount: "+$49 / burner" },
      { situation: "Very large format (42–60 inch)", amount: "Custom estimate" },
      { situation: "Built-in BBQ / outdoor kitchen", amount: "Custom on-site estimate" },
      { situation: "Commercial BBQ", amount: "Custom estimate" },
      { situation: "Pizza oven, smoker box, griddle, IR sear station", amount: "Separate price" },
      { situation: "Advanced premium stainless polish (high-spec)", amount: "Possible surcharge" },
      { situation: "Second visit (extremely neglected BBQ)", amount: "Surcharge discussed up front" },
    ],
  },
  comparisonNote: {
    fr: "La Restauration Prestige, c'est notre niveau le plus poussé. Si votre BBQ a 5 ans ou moins et a été entretenu, vous n'en avez probablement pas besoin — un Nettoyage Signature suffit. Mais pour un BBQ premium de 8-15 ans qui a vécu plusieurs saisons sans nettoyage sérieux, c'est l'option qui aide à le sauver.",
    en: "Prestige Steam Restoration is our highest level. If your BBQ is 5 years or less and has been maintained, you probably don't need it — Signature is enough. But for a premium 8–15-year-old BBQ that's lived multiple seasons without serious cleaning, it's the option that helps save it.",
  },
  faq: [
    {
      q: { fr: "Pourquoi ce forfait coûte plus cher?", en: "Why does this package cost more?" },
      a: {
        fr: "Parce qu'on y ajoute la vapeur, plusieurs passes de dégraissage, une finition plus détaillée et un rapport sommaire. Ça représente 5 à 7+ heures de travail sur place vs 3-4h pour le Signature. Pour les BBQ très grands, encastrés ou commerciaux, on peut faire une évaluation préalable et confirmer un prix personnalisé avant de procéder.",
        en: "Because we add steam, multiple degreaser passes, more detailed finishing and a summary report. That's 5–7+ hours of on-site work vs 3–4h for Signature. For very large, built-in or commercial BBQs, we can do a pre-evaluation and confirm a custom price before proceeding.",
      },
    },
    {
      q: { fr: "Vous garantissez « comme neuf »?", en: "Do you guarantee \"like-new\"?" },
      a: {
        fr: "Non. Un BBQ qui a 10-15 ans de carbone cuit, de rayures, de patine ne redeviendra jamais neuf — et c'est OK. Ce que la Restauration Prestige fait, c'est ramener le BBQ à l'état le plus propre et le plus fonctionnel raisonnablement possible selon son âge, son matériau et sa condition. Vous serez surpris du résultat, mais vous n'aurez pas un BBQ neuf — vous aurez votre BBQ, beaucoup plus agréable à utiliser.",
        en: "No. A BBQ with 10–15 years of baked carbon, scratches, patina will never look new — and that's OK. What Prestige Steam Restoration does is bring the BBQ to the cleanest and most functional state reasonably possible given its age, material and condition. You'll be surprised by the result, but you won't have a new BBQ — you'll have your BBQ, much more pleasant to use.",
      },
    },
    {
      q: { fr: "Mon Napoleon Prestige de 15 ans, c'est viable de le sauver ou je devrais le remplacer?", en: "My 15-year-old Napoleon Prestige — worth saving or should I replace?" },
      a: {
        fr: "Ça dépend de l'état. Un Napoleon Prestige bien construit peut souvent durer 18-20 ans avec entretien sérieux et remplacement des pièces critiques (brûleurs, sear plates, igniters). La Restauration Prestige va vous donner une réponse claire : on documente tout, on vous donne notre opinion honnête. Si le coût de la Restauration + pièces nécessaires dépasse 50 % du prix d'un BBQ neuf équivalent, on vous le dit franchement.",
        en: "Depends on condition. A well-built Napoleon Prestige can often last 18–20 years with serious maintenance and replacement of critical parts (burners, sear plates, igniters). Prestige Steam Restoration gives you a clear answer: we document everything, give honest opinion. If Restoration + needed parts exceeds 50% of a new equivalent BBQ, we tell you straight up.",
      },
    },
    {
      q: { fr: "Combien de temps dure le résultat?", en: "How long does the result last?" },
      a: {
        fr: "Avec entretien régulier ensuite (un Nettoyage Signature ou même Entretien Essentiel chaque saison), le résultat d'une Restauration Prestige peut tenir 3-5 ans avant qu'une nouvelle restauration soit nécessaire. Sans entretien, c'est plutôt 12-18 mois avant que la graisse recommence à s'accumuler sérieusement.",
        en: "With regular maintenance after (a Signature or even Essential Maintenance each season), the Prestige Steam Restoration result can hold 3–5 years before another restoration is needed. Without maintenance, more like 12–18 months before grease seriously rebuilds.",
      },
    },
    {
      q: { fr: "Vous prenez les outdoor kitchens et BBQ encastrés?", en: "Do you take outdoor kitchens and built-in BBQs?" },
      a: {
        fr: "Sur évaluation. Les BBQ encastrés demandent une approche différente parce qu'on ne peut pas les déplacer et qu'on travaille dans un espace contraint. On vient faire une évaluation sur place, on confirme la faisabilité et on donne un prix avant de procéder.",
        en: "By evaluation. Built-in BBQs need a different approach since they can't be moved and we work in tight quarters. We come for an on-site evaluation, confirm feasibility, give a price before proceeding.",
      },
    },
    {
      q: { fr: "Combien de pièces vais-je devoir remplacer après la Restauration?", en: "How many parts will I need to replace after Restoration?" },
      a: {
        fr: "Variable. Sur un BBQ premium de 10+ ans, c'est commun de devoir remplacer un ou deux brûleurs, parfois les igniters, parfois les sear plates si elles sont trop rouillées. Le rapport sommaire vous donne la liste exacte. La Restauration elle-même n'inclut pas les pièces — c'est le service Diagnostic & Réparation à 125 $ + pièces + main-d'œuvre (avec crédit de 55 $ si la réparation est effectuée par BBQTECH). On peut combiner les deux services en une visite si vous décidez de procéder pendant qu'on est sur place.",
        en: "Variable. On a 10+ year premium BBQ, it's common to need 1–2 burner replacements, sometimes igniters, sometimes sear plates if too rusted. The summary report gives you the exact list. The Restoration itself doesn't include parts — that's the $125 Diagnostic & Repair service + parts + labor (with $55 credit if BBQTECH does the repair). We can combine both services in one visit if you decide to proceed while we're there.",
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
    fr: "La Restauration Prestige, c'est notre niveau le plus poussé. Vapeur, multiples passes, finition détaillée, photos et rapport sommaire. Pour le BBQ que vous voulez sauver, pas remplacer.",
    en: "Prestige Steam Restoration is our highest level. Steam, multi-pass degreasing, detailed finish, photos and summary report. For the BBQ you want to save, not replace.",
  },
};

export const packageDetails: Record<PackageDetail["key"], PackageDetail> = {
  essential,
  signature,
  prestige,
};

export const packageOrder: PackageDetail["key"][] = ["essential", "signature", "prestige"];
