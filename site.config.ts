import type { Bilingual } from "./src/i18n/utils";

export const siteConfig = {
  // ─── BUSINESS INFO ───
  name: "BBQTech",
  legalName: "BBQTech — Groupe Rathwell inc.",
  tagline: {
    fr: "Nettoyage / entretien · Assemblage · Réparation",
    en: "Cleaning / maintenance · Assembly · Repair",
  } satisfies Bilingual,
  phone: "819-561-0762",
  phoneRaw: "+18195610762",
  email: "info@bbqtech.com",
  city: "Gatineau · Ottawa",
  region: "QC",
  country: "CA",
  url: "https://bbqtech.com",

  // ─── BRAND ───
  colors: {
    primary: "#000000",
    primaryDark: "#0a0a0a",
    accent: "#E81B1B",
    accentHover: "#c41616",
    dark: "#111111",
    light: "#F5F5F5",
    grey: "#333333",
    steel: "#1a1a1a",
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Montserrat', sans-serif",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap",
  },

  // ─── NAV ───
  nav: [
    { href: "#services", label: { fr: "Services", en: "Services" } satisfies Bilingual },
    { href: "#forfaits", label: { fr: "Forfaits", en: "Packages" } satisfies Bilingual },
    { href: "#reparation", label: { fr: "Réparation", en: "Repair" } satisfies Bilingual },
    { href: "#pourquoi", label: { fr: "Pourquoi BBQTech", en: "Why BBQTech" } satisfies Bilingual },
    { href: "#faq", label: { fr: "FAQ", en: "FAQ" } satisfies Bilingual },
  ],
  // ─── BOOKING URL (Zoho Calendar — placeholder until provided) ───
  // When set to a non-empty string, all "Réserver" CTAs link to this URL
  // (in a new tab). When empty, they fall back to /contact.
  bookingUrl: "",

  cta: {
    primary: {
      label: { fr: "Réserver mon service", en: "Book my service" } satisfies Bilingual,
      hrefPath: "/contact",
    },
    secondary: {
      label: { fr: "Demander une soumission", en: "Request a quote" } satisfies Bilingual,
      hrefPath: "/contact",
    },
    sms: {
      label: { fr: "Envoyer une photo par SMS", en: "Send a photo by SMS" } satisfies Bilingual,
      shortLabel: { fr: "📸 SMS · 819-561-0762", en: "📸 SMS · 819-561-0762" } satisfies Bilingual,
    },
    callLabel: { fr: "Appeler 819-561-0762", en: "Call 819-561-0762" } satisfies Bilingual,
  },

  // SMS body prefilled when user taps the photo-by-SMS link
  smsBody: {
    fr: "Bonjour BBQTech, voici une photo de mon BBQ pour une recommandation de forfait.",
    en: "Hello BBQTech, here is a photo of my BBQ for a package recommendation.",
  } satisfies Bilingual,

  // ─── HERO (HOME) ───
  hero: {
    h1: {
      fr: "Nettoyage BBQ professionnel à domicile — dès 195 $.",
      en: "Professional on-site BBQ cleaning — from $195.",
    } satisfies Bilingual,
    sub: {
      fr: "Service mobile spécialisé de nettoyage, entretien, assemblage, diagnostic et réparation de BBQ à Gatineau et Ottawa. Trois forfaits simples : Essential, Signature ou VIP: Steam Clean.",
      en: "Specialized mobile service for BBQ cleaning, maintenance, assembly, diagnostic and repair in Gatineau and Ottawa. Three simple packages: Essential, Signature, or VIP: Steam Clean.",
    } satisfies Bilingual,
  },

  // ─── 5 PILLARS (positive positioning, no competitor-bashing) ───
  pillars: [
    {
      icon: "🚐",
      shortLabel: { fr: "Service mobile spécialisé", en: "Specialized mobile service" } satisfies Bilingual,
      title: { fr: "Service mobile spécialisé", en: "Specialized mobile service" } satisfies Bilingual,
      body: {
        fr: "BBQTech se concentre sur les BBQ : nettoyage, entretien, assemblage, diagnostic et réparation de composantes accessibles.",
        en: "BBQTech focuses on BBQs: cleaning, maintenance, assembly, diagnostic and repair of accessible components.",
      } satisfies Bilingual,
    },
    {
      icon: "💰",
      shortLabel: { fr: "Forfaits clairs", en: "Clear packages" } satisfies Bilingual,
      title: { fr: "Forfaits clairs", en: "Clear packages" } satisfies Bilingual,
      body: {
        fr: "Essential, Signature et Steam Clean permettent de choisir le bon niveau de service selon l'état du BBQ, son accès et vos attentes.",
        en: "Essential, Signature and Steam Clean let you pick the right service level based on your BBQ's condition, access, and your expectations.",
      } satisfies Bilingual,
    },
    {
      icon: "🔥",
      shortLabel: { fr: "Approche adaptée", en: "Adapted approach" } satisfies Bilingual,
      title: { fr: "Approche adaptée à votre BBQ", en: "Approach adapted to your BBQ" } satisfies Bilingual,
      body: {
        fr: "BBQ au gaz propane ou naturel, pellet smoker, kamado, griddle, barbecue au charbon ou équipement premium : nous adaptons l'approche selon l'équipement.",
        en: "Propane or natural gas BBQ, pellet smoker, kamado, griddle, charcoal barbecue or premium equipment: we adapt our approach to your gear.",
      } satisfies Bilingual,
    },
    {
      icon: "🛡️",
      shortLabel: { fr: "Zone de travail contrôlée", en: "Controlled work zone" } satisfies Bilingual,
      title: { fr: "Zone de travail contrôlée", en: "Controlled work zone" } satisfies Bilingual,
      body: {
        fr: "Selon le forfait choisi, nous pouvons utiliser une zone de travail protégée, un système de confinement, un nettoyage vapeur ou une méthode plus simple.",
        en: "Depending on the chosen package, we can use a protected work zone, a containment system, steam cleaning, or a simpler method.",
      } satisfies Bilingual,
    },
    {
      icon: "📍",
      shortLabel: { fr: "Service local et bilingue", en: "Local & bilingual" } satisfies Bilingual,
      title: { fr: "Service local et bilingue", en: "Local and bilingual service" } satisfies Bilingual,
      body: {
        fr: "BBQTech est basé à Gatineau et dessert Gatineau, Aylmer, Hull, Plateau, Buckingham et Ottawa.",
        en: "BBQTech is based in Gatineau and serves Gatineau, Aylmer, Hull, Plateau, Buckingham and Ottawa.",
      } satisfies Bilingual,
    },
  ],

  // ─── SERVICES (3 categories shown on homepage) ───
  services: [
    {
      slug: "nettoyage",
      icon: "🔥",
      name: { fr: "Nettoyage / entretien BBQ", en: "BBQ Cleaning / Maintenance" } satisfies Bilingual,
      priceLabel: { fr: "Dès 195 $", en: "From $195" } satisfies Bilingual,
      summary: {
        fr: "Trois forfaits simples : Essential, Signature ou Steam Clean. Adaptés à l'état du BBQ et au niveau de nettoyage souhaité.",
        en: "Three simple packages: Essential, Signature or Steam Clean. Matched to your BBQ's condition and the desired cleaning level.",
      } satisfies Bilingual,
    },
    {
      slug: "assemblage",
      icon: "🔧",
      name: { fr: "Assemblage BBQ", en: "BBQ Assembly" } satisfies Bilingual,
      priceLabel: { fr: "195 $ + taxes", en: "$195 + tax" } satisfies Bilingual,
      summary: {
        fr: "Assemblage à domicile d'un BBQ neuf chez le client. Tarif standard pour la plupart des modèles. Grand format, pellet, kamado ou cuisine extérieure : soumission personnalisée.",
        en: "On-site assembly of a new BBQ at your home. Standard pricing for most models. Large format, pellet, kamado or outdoor kitchen: custom quote.",
      } satisfies Bilingual,
    },
    {
      slug: "reparation",
      icon: "🛠️",
      name: { fr: "Diagnostic & Réparation", en: "Diagnostic & Repair" } satisfies Bilingual,
      priceLabel: { fr: "Diagnostic 125 $", en: "Diagnostic $125" } satisfies Bilingual,
      summary: {
        fr: "Diagnostic à domicile professionnel. 55 $ crédités si la réparation est effectuée par BBQTech. Pièces et main-d'œuvre en sus.",
        en: "Professional on-site diagnostic. $55 credited if BBQTech does the repair. Parts and labor extra.",
      } satisfies Bilingual,
    },
  ],

  // ─── CLEANING PACKAGES (3 tiers — Essential / Signature / Steam Clean) ───
  packages: [
    {
      key: "essential",
      name: { fr: "Essential", en: "Essential" } satisfies Bilingual,
      price: 195,
      priceLabel: { fr: "195 $ + taxes", en: "$195 + tax" } satisfies Bilingual,
      method: {
        fr: "Pressure washer · Sans berm",
        en: "Pressure washer · No berm",
      } satisfies Bilingual,
      useCase: {
        fr: "Pour BBQ standards accessibles facilement.",
        en: "For standard BBQs with easy access.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Réserver Essential", en: "Book Essential" } satisfies Bilingual,
      badge: null,
    },
    {
      key: "signature",
      name: { fr: "Signature", en: "Signature" } satisfies Bilingual,
      price: 295,
      priceLabel: { fr: "295 $ + taxes", en: "$295 + tax" } satisfies Bilingual,
      method: {
        fr: "Pressure washer · Avec berm de confinement",
        en: "Pressure washer · With containment berm",
      } satisfies Bilingual,
      useCase: {
        fr: "Recommandé pour mieux contrôler la zone de travail.",
        en: "Recommended for better control of the work zone.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Réserver Signature", en: "Book Signature" } satisfies Bilingual,
      badge: { fr: "Recommandé", en: "Recommended" } satisfies Bilingual,
    },
    {
      key: "steam-clean",
      name: { fr: "VIP: Steam Clean", en: "VIP: Steam Clean" } satisfies Bilingual,
      price: 395,
      priceLabel: { fr: "395 $ + taxes", en: "$395 + tax" } satisfies Bilingual,
      method: {
        fr: "Berm de confinement · Nettoyage vapeur",
        en: "Containment berm · Steam cleaning",
      } satisfies Bilingual,
      useCase: {
        fr: "Pour un nettoyage plus détaillé des zones applicables.",
        en: "For more detailed cleaning of applicable areas.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Réserver VIP: Steam Clean", en: "Book VIP: Steam Clean" } satisfies Bilingual,
      badge: { fr: "VIP", en: "VIP" } satisfies Bilingual,
    },
  ],

  // ─── BASE SCOPE shared by all cleaning packages ───
  packagesBaseScope: {
    heading: { fr: "Tous les forfaits incluent", en: "All packages include" } satisfies Bilingual,
    items: {
      fr: [
        "Nettoyage des grilles",
        "Nettoyage de la cuve / firebox",
        "Nettoyage du bac à graisse",
        "Dégraissage des composantes accessibles",
        "Nettoyage extérieur",
        "Rinçage",
        "Recommandations de base si des pièces semblent usées ou endommagées",
      ],
      en: [
        "Grates cleaning",
        "Firebox cleaning",
        "Grease pan cleaning",
        "Degreasing of accessible components",
        "Exterior cleaning",
        "Rinse",
        "Basic recommendations if parts appear worn or damaged",
      ],
    },
  },

  // ─── CUSTOM QUOTE section (after PricingTable) ───
  customQuote: {
    title: {
      fr: "Certains BBQ nécessitent une soumission personnalisée",
      en: "Some BBQs require a custom quote",
    } satisfies Bilingual,
    intro: {
      fr: "Les forfaits en ligne s'appliquent aux BBQ standards, mobiles et accessibles.",
      en: "Online packages apply to standard, mobile and accessible BBQs.",
    } satisfies Bilingual,
    cueLine: {
      fr: "Demandez une soumission si votre BBQ est :",
      en: "Request a quote if your BBQ is:",
    } satisfies Bilingual,
    cases: {
      fr: [
        "encastré",
        "intégré à une cuisine extérieure",
        "commercial",
        "très encrassé",
        "difficile d'accès",
        "non mobile",
        "de très grande taille",
        "combiné à une demande de réparation",
        "un smoker, pellet smoker, griddle, kamado ou barbecue au charbon nécessitant une évaluation",
      ],
      en: [
        "built-in",
        "integrated into an outdoor kitchen",
        "commercial",
        "heavily soiled",
        "difficult to access",
        "non-mobile",
        "very large",
        "combined with a repair request",
        "a smoker, pellet smoker, griddle, kamado or charcoal barbecue requiring assessment",
      ],
    },
    outro: {
      fr: "Envoyez-nous une photo du BBQ et de son emplacement. Nous vous recommanderons la meilleure option.",
      en: "Send us a photo of the BBQ and its location. We'll recommend the best option.",
    } satisfies Bilingual,
    primaryCta: {
      fr: "Demander une soumission personnalisée",
      en: "Request a custom quote",
    } satisfies Bilingual,
  },

  // ─── REPAIR / DIAGNOSTIC ───
  repair: {
    title: {
      fr: "Diagnostic & Réparation BBQ à domicile",
      en: "On-site BBQ Diagnostic & Repair",
    } satisfies Bilingual,
    subtitle: {
      fr: "Brûleurs, allumage, régulateur, grilles, plaques. Diagnostic professionnel avant de remplacer.",
      en: "Burners, ignition, regulator, grates, plates. Pro diagnostic before you replace.",
    } satisfies Bilingual,
    diagnosticPriceLabel: { fr: "125 $ + taxes", en: "$125 + tax" } satisfies Bilingual,
    diagnosticHeading: { fr: "Diagnostic à domicile", en: "On-site diagnostic" } satisfies Bilingual,
    creditNote: {
      fr: "55 $ crédités sur la facture finale si la réparation est effectuée par BBQTech.",
      en: "$55 credited to the final invoice if the repair is done by BBQTech.",
    } satisfies Bilingual,
    disclaimer: {
      fr: "Pièces et main-d'œuvre en sus. Certaines réparations nécessitent une deuxième visite selon la disponibilité des pièces.",
      en: "Parts and labor extra. Some repairs require a second visit depending on parts availability.",
    } satisfies Bilingual,
    comboNote: {
      fr: "Astuce : combinez avec un nettoyage Signature ou VIP: Steam Clean pour économiser une visite.",
      en: "Tip: combine with a Signature or VIP: Steam Clean cleaning to save a visit.",
    } satisfies Bilingual,
    diagnosticPrep: {
      fr: "Pour accélérer le diagnostic, préparez si possible la marque, le modèle, le numéro de série, des photos des pièces problématiques et une description du symptôme : allumage, flamme faible, brûleur endommagé, régulateur, grilles, plaques, etc.",
      en: "To speed up the diagnostic, prepare if possible the brand, model, serial number, photos of problem parts, and a description of the symptom: ignition, weak flame, damaged burner, regulator, grates, plates, etc.",
    } satisfies Bilingual,
    processHeading: { fr: "Comment ça fonctionne", en: "How it works" } satisfies Bilingual,
    steps: [
      {
        number: "1",
        title: { fr: "Photos + description", en: "Photos + description" } satisfies Bilingual,
        desc: {
          fr: "Envoyez-nous le problème par SMS au 819-561-0762 ou par courriel.",
          en: "Send us the issue by SMS to 819-561-0762 or email.",
        } satisfies Bilingual,
      },
      {
        number: "2",
        title: { fr: "Diagnostic à domicile", en: "On-site diagnostic" } satisfies Bilingual,
        desc: {
          fr: "125 $ + taxes. Inspection pro, identification des pièces nécessaires.",
          en: "$125 + tax. Pro inspection, identification of parts needed.",
        } satisfies Bilingual,
      },
      {
        number: "3",
        title: { fr: "Estimation transparente", en: "Transparent estimate" } satisfies Bilingual,
        desc: {
          fr: "Pièces + main-d'œuvre détaillées avant tout travail.",
          en: "Parts + labor detailed before any work.",
        } satisfies Bilingual,
      },
      {
        number: "4",
        title: { fr: "Approbation + commande", en: "Approval + ordering" } satisfies Bilingual,
        desc: {
          fr: "Vous approuvez, on commande les pièces (OEM ou compatibles selon disponibilité).",
          en: "You approve, we order the parts (OEM or compatible based on availability).",
        } satisfies Bilingual,
      },
      {
        number: "5",
        title: { fr: "Installation des pièces", en: "Parts installation" } satisfies Bilingual,
        desc: {
          fr: "Installation à domicile — possiblement une 2e visite si commande externe.",
          en: "On-site installation — possibly a 2nd visit if external order.",
        } satisfies Bilingual,
      },
    ],
    ctaLabel: { fr: "Réserver un diagnostic", en: "Book a diagnostic" } satisfies Bilingual,
  },

  packagesNote: {
    fr: "Prix valides pour BBQ au gaz propane ou naturel standards, mobiles et accessibles jusqu'à 4 brûleurs principaux. Supplément de 100 $ pour les BBQ de plus de 4 brûleurs. Certains smokers, pellet smokers, griddles, kamados et barbecues au charbon peuvent aussi être admissibles selon leur état, leur taille et leur configuration. Les BBQ encastrés, cuisines extérieures, équipements commerciaux ou cas particuliers nécessitent une soumission personnalisée.",
    en: "Prices apply to standard, mobile and accessible propane or natural gas BBQs (also commonly called gas grills) up to 4 main burners. Add $100 for BBQs with more than 4 burners. Some smokers, pellet smokers, griddles, kamados and charcoal barbecues may also be eligible depending on their condition, size and configuration. Built-in BBQs, outdoor kitchens, commercial equipment and special cases require a custom quote.",
  } satisfies Bilingual,

  // ─── PROCESS (5 steps) ───
  process: [
    {
      number: "1",
      title: { fr: "Réservez votre service en ligne", en: "Book your service online" } satisfies Bilingual,
      description: {
        fr: "Choisissez votre forfait ou votre diagnostic via notre formulaire de réservation. Si vous n'êtes pas certain, choisissez « Demande de soumission ».",
        en: "Choose your package or diagnostic via our booking form. If you're not sure, pick \"Request a quote\".",
      } satisfies Bilingual,
    },
    {
      number: "2",
      title: { fr: "Envoyez une photo si nécessaire", en: "Send a photo if needed" } satisfies Bilingual,
      description: {
        fr: "Une photo du BBQ, de la marque/modèle et de l'emplacement nous aide à recommander le bon forfait et à éviter les surprises.",
        en: "A photo of the BBQ, brand/model and location helps us recommend the right package and avoid surprises.",
      } satisfies Bilingual,
    },
    {
      number: "3",
      title: { fr: "On confirme les détails", en: "We confirm the details" } satisfies Bilingual,
      description: {
        fr: "Nous validons l'accès, l'eau disponible, le type de BBQ, le nombre de brûleurs et toute condition particulière.",
        en: "We confirm access, available water, BBQ type, number of burners, and any special conditions.",
      } satisfies Bilingual,
    },
    {
      number: "4",
      title: { fr: "Service à domicile", en: "On-site service" } satisfies Bilingual,
      description: {
        fr: "Vous n'avez pas besoin d'être présent pendant toute la durée du service. L'important est que le BBQ soit accessible à l'heure prévue.",
        en: "You don't need to be present for the entire service. What matters is that the BBQ is accessible at the scheduled time.",
      } satisfies Bilingual,
    },
    {
      number: "5",
      title: { fr: "Résultat + recommandations", en: "Result + recommendations" } satisfies Bilingual,
      description: {
        fr: "On termine le service, on vous informe s'il y a des pièces usées ou des réparations recommandées, et on vous envoie des photos lorsque pertinent.",
        en: "We finish the service, let you know about worn parts or recommended repairs, and send photos when relevant.",
      } satisfies Bilingual,
    },
  ],

  // ─── COMMITMENTS ───
  commitments: [
    {
      icon: "🛡️",
      title: { fr: "Assuré", en: "Insured" } satisfies Bilingual,
      body: { fr: "Couverture responsabilité civile complète.", en: "Full liability coverage." } satisfies Bilingual,
    },
    {
      icon: "💰",
      title: { fr: "Prix de base clairs", en: "Clear base pricing" } satisfies Bilingual,
      body: {
        fr: "Aucun changement sans votre accord. Si l'état du BBQ, son accès ou la configuration nécessite un ajustement, on vous informe avant tout changement de service ou de tarif.",
        en: "No change without your approval. If the BBQ's condition, access, or configuration requires an adjustment, we inform you before any change in service or price.",
      } satisfies Bilingual,
    },
    {
      icon: "✅",
      title: { fr: "Service à la hauteur", en: "Service that holds up" } satisfies Bilingual,
      body: {
        fr: "Si quelque chose inclus dans le forfait n'est pas à la hauteur, contactez-nous rapidement et nous corrigerons la situation.",
        en: "If something included in the package falls short, contact us quickly and we'll make it right.",
      } satisfies Bilingual,
    },
    {
      icon: "🇨🇦",
      title: { fr: "Service bilingue", en: "Bilingual service" } satisfies Bilingual,
      body: { fr: "Communication en français ou anglais, sans détour.", en: "French or English, no runaround." } satisfies Bilingual,
    },
  ],

  // ─── PHILOSOPHY ───
  philosophy: {
    headline: { fr: "Notre philosophie", en: "Our philosophy" } satisfies Bilingual,
    quote: {
      fr: "« Mon objectif est simple : offrir un service BBQ professionnel, clair et bien structuré. Chaque appareil est différent, alors on adapte l'approche selon l'état du BBQ, son accès et le résultat recherché. »",
      en: "\"My goal is simple: deliver a professional, clear and well-structured BBQ service. Every grill is different, so we adapt our approach to the BBQ's condition, access, and the desired result.\"",
    } satisfies Bilingual,
    attribution: {
      fr: "— Nicholas, opérateur · BBQTech",
      en: "— Nicholas, operator · BBQTech",
    } satisfies Bilingual,
  },

  // ─── FAQ ───
  faq: [
    {
      q: { fr: "Quel forfait dois-je choisir ?", en: "Which package should I pick?" } satisfies Bilingual,
      a: {
        fr: "Essential = pressure washer sans berm. Signature = pressure washer avec berm de confinement (recommandé). VIP: Steam Clean = berm + nettoyage vapeur. Pas certain ? Envoyez-nous une photo du BBQ et de son emplacement.",
        en: "Essential = pressure washer, no berm. Signature = pressure washer with containment berm (recommended). VIP: Steam Clean = berm + steam cleaning. Not sure? Send us a photo of the BBQ and its location.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Est-ce que vous nettoyez seulement les BBQ au gaz ?", en: "Do you only clean gas BBQs?" } satisfies Bilingual,
      a: {
        fr: "Nos forfaits standards sont principalement conçus pour les BBQ au gaz propane ou naturel. Nous pouvons aussi nettoyer certains smokers, pellet smokers, griddles, kamados et barbecues au charbon, selon leur état, leur taille et leur configuration. Envoyez-nous une photo et nous vous confirmerons la meilleure option.",
        en: "Our standard packages are primarily designed for propane or natural gas BBQs. We can also clean some smokers, pellet smokers, griddles, kamados and charcoal barbecues, depending on their condition, size and configuration. Send us a photo and we'll confirm the best option.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Dois-je être présent pendant le service ?", en: "Do I need to be present during the service?" } satisfies Bilingual,
      a: {
        fr: "Non, pas nécessairement. Tant que le BBQ est accessible à l'heure prévue et que nous avons accès à l'eau lorsque requis, vous n'avez pas besoin d'être présent pendant tout le service. Nous planifions les détails avec vous à l'avance.",
        en: "Not necessarily. As long as the BBQ is accessible at the scheduled time and we have water access when required, you don't need to be there the whole time. We plan the details with you in advance.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Pourquoi envoyer une photo ?", en: "Why send a photo?" } satisfies Bilingual,
      a: {
        fr: "Une photo nous aide à valider la taille, l'état, l'accès et le type de BBQ. Cela permet de recommander le bon forfait et de réduire les surprises sur place.",
        en: "A photo helps us check the size, condition, access, and type of BBQ. It lets us recommend the right package and reduce surprises on-site.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "De quoi avez-vous besoin sur place ?", en: "What do you need on-site?" } satisfies Bilingual,
      a: {
        fr: "Le BBQ doit être accessible à l'heure prévue. Selon le forfait, nous pouvons avoir besoin d'un accès à l'eau extérieure et d'un espace de travail suffisant. Pour les forfaits Signature et VIP: Steam Clean, un espace d'environ 8' × 8' est recommandé.",
        en: "The BBQ must be accessible at the scheduled time. Depending on the package, we may need outdoor water access and adequate work space. For Signature and VIP: Steam Clean packages, an area of about 8' × 8' is recommended.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Combien coûte l'assemblage d'un BBQ ?", en: "How much does BBQ assembly cost?" } satisfies Bilingual,
      a: {
        fr: "L'assemblage à domicile est de 195 $ + taxes pour la plupart des BBQ standards. Certains modèles grands formats, complexes, pellet, kamado ou cuisines extérieures peuvent nécessiter une soumission personnalisée.",
        en: "On-site assembly is $195 + tax for most standard BBQs. Larger, more complex models, pellet, kamado or outdoor kitchens may require a custom quote.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Y a-t-il un supplément pour les gros BBQ ?", en: "Is there a surcharge for larger BBQs?" } satisfies Bilingual,
      a: {
        fr: "Oui. Les BBQ de plus de 4 brûleurs principaux ont un supplément de 100 $. Les BBQ encastrés, cuisines extérieures, équipements commerciaux ou configurations particulières nécessitent une soumission personnalisée.",
        en: "Yes. BBQs with more than 4 main burners carry a $100 surcharge. Built-in BBQs, outdoor kitchens, commercial equipment or special configurations require a custom quote.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Comment fonctionne le diagnostic de réparation ?", en: "How does the repair diagnostic work?" } satisfies Bilingual,
      a: {
        fr: "Diagnostic à domicile pour 125 $ + taxes. Le technicien identifie les pièces nécessaires et envoie une estimation transparente (pièces + main-d'œuvre). 55 $ sont crédités sur la facture finale si la réparation est effectuée par BBQTech. Certaines réparations nécessitent une 2e visite selon la disponibilité des pièces. Astuce : combinez avec un nettoyage Signature ou VIP: Steam Clean pour économiser une visite.",
        en: "On-site diagnostic for $125 + tax. The technician identifies the parts needed and sends a transparent estimate (parts + labor). $55 is credited to the final invoice if BBQTech does the repair. Some repairs require a 2nd visit depending on parts availability. Tip: combine with a Signature or VIP: Steam Clean cleaning to save a visit.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Quand commence et finit la saison ?", en: "When does the season start and end?" } satisfies Bilingual,
      a: {
        fr: "Avril à octobre. Hors saison, on prend les assemblages et fermetures sur demande.",
        en: "April to October. Off-season, we take assembly and close-down bookings on request.",
      } satisfies Bilingual,
    },
  ],

  // ─── CONTACT ───
  contact: {
    hours: { fr: "Lun–Sam · 8h00–18h00", en: "Mon–Sat · 8:00 AM–6:00 PM" } satisfies Bilingual,
    season: { fr: "Saison : Avril à Octobre", en: "Season: April to October" } satisfies Bilingual,
    formHeading: { fr: "Réservez votre service BBQ", en: "Book your BBQ service" } satisfies Bilingual,
    formSub: {
      fr: "Réservation de nettoyage, appel de service, demande de soumission ou question. Réponse confirmée sous 24 h pendant la saison. Joignez des photos par SMS au 819-561-0762 ou par courriel à info@bbqtech.com pour une recommandation précise.",
      en: "Cleaning booking, service call, quote request, or general question. Confirmed reply within 24 h during the season. Send photos by SMS to 819-561-0762 or email info@bbqtech.com for a precise recommendation.",
    } satisfies Bilingual,
  },

  // ─── FORMS (Cloudflare Function relays to Zoho) ───
  forms: {
    provider: "cloudflare-function" as const,
    endpoint: "/api/lead",
    successQuery: "sent=1",
  },

  // ─── TURNSTILE ───
  turnstileSiteKey: "0x4AAAAAADAqUwa51-U7rdhD", // TODO: replace with bbqtech.com Turnstile site key

  // ─── TRACKING ───
  tracking: {
    ga4Id: "",
    gtmId: "",
    metaPixelId: "",
    googleAdsId: "",
  },

  // ─── SEO ───
  seo: {
    titleTemplate: {
      fr: "%s | BBQTech — Nettoyage BBQ Gatineau · Ottawa",
      en: "%s | BBQTech — BBQ Cleaning Gatineau · Ottawa",
    } satisfies Bilingual,
    homeTitle: {
      fr: "BBQTech | Nettoyage BBQ professionnel à Gatineau et Ottawa",
      en: "BBQ Cleaning & Repair Gatineau · Ottawa | BBQTech",
    } satisfies Bilingual,
    defaultDescription: {
      fr: "Service mobile professionnel de nettoyage, entretien, assemblage, diagnostic et réparation de BBQ à Gatineau et Ottawa. Trois forfaits simples : Essential 195 $, Signature 295 $, VIP: Steam Clean 395 $.",
      en: "Professional mobile service for BBQ cleaning, maintenance, assembly, diagnostic and repair in Gatineau and Ottawa. Three simple packages: Essential $195, Signature $295, VIP: Steam Clean $395.",
    } satisfies Bilingual,
    ogImage: "/og-default.svg",
  },

  // ─── SOCIAL ───
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },

  // ─── FOOTER ───
  footer: {
    description: {
      fr: "Service mobile spécialisé de nettoyage, entretien, assemblage, diagnostic et réparation de BBQ à Gatineau et Ottawa. Trois forfaits simples.",
      en: "Specialized mobile service for BBQ cleaning, maintenance, assembly, diagnostic and repair in Gatineau and Ottawa. Three simple packages.",
    } satisfies Bilingual,
    serviceAreas: ["Gatineau", "Aylmer", "Hull", "Plateau", "Buckingham", "Ottawa"],
    copyrightOwner: "BBQTech — Groupe Rathwell inc.",
  },
};

export type SiteConfig = typeof siteConfig;
