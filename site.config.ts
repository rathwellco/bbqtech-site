import type { Bilingual } from "./src/i18n/utils";

export const siteConfig = {
  // ─── BUSINESS INFO ───
  name: "BBQTECH",
  legalName: "BBQTECH — Groupe Rathwell inc.",
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
    { href: "#pourquoi", label: { fr: "Pourquoi BBQTECH", en: "Why BBQTECH" } satisfies Bilingual },
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
    fr: "Bonjour BBQTECH, voici une photo de mon BBQ pour une recommandation de forfait.",
    en: "Hello BBQTECH, here is a photo of my BBQ for a package recommendation.",
  } satisfies Bilingual,

  // ─── HERO (HOME) ───
  hero: {
    h1: {
      fr: "Votre BBQ propre, prêt et plus agréable à utiliser pour la saison.",
      en: "Your BBQ clean, ready and easier to enjoy this season.",
    } satisfies Bilingual,
    sub: {
      fr: "Service mobile de nettoyage, entretien, restauration, assemblage et réparation de BBQ, grills, smokers et équipements de cuisson extérieure à Gatineau et Ottawa.",
      en: "Mobile cleaning, maintenance, restoration, assembly and repair for BBQs, grills, smokers and outdoor cooking equipment in Gatineau and Ottawa.",
    } satisfies Bilingual,
    support: {
      fr: "Gaz propane, gaz naturel, charbon, granules, kamado, griddle ou cuisine extérieure : nous adaptons l'approche selon l'équipement, son état, son accès et le service requis.",
      en: "Propane, natural gas, charcoal, pellet, kamado, griddle or outdoor kitchen: we adapt the approach based on the equipment, its condition, access and required service.",
    } satisfies Bilingual,
  },

  // ─── 5 PILLARS (positive positioning, no competitor-bashing) ───
  pillars: [
    {
      icon: "🚐",
      shortLabel: { fr: "Service mobile spécialisé", en: "Specialized mobile service" } satisfies Bilingual,
      title: { fr: "Service mobile spécialisé", en: "Specialized mobile service" } satisfies Bilingual,
      body: {
        fr: "BBQTECH se concentre sur les BBQ, grills, smokers et équipements de cuisson extérieure : nettoyage, entretien, assemblage, diagnostic et réparation de composantes accessibles.",
        en: "BBQTECH focuses on BBQs, grills, smokers and outdoor cooking equipment: cleaning, maintenance, assembly, diagnostic and repair of accessible components.",
      } satisfies Bilingual,
    },
    {
      icon: "💰",
      shortLabel: { fr: "Prix de base clairs", en: "Clear base pricing" } satisfies Bilingual,
      title: { fr: "Prix de base clairs", en: "Clear base pricing" } satisfies Bilingual,
      body: {
        fr: "Forfaits clairs : Entretien 199 $ + taxes, Nettoyage 299 $ + taxes, Restauration à partir de 399 $ + taxes. Assemblage à partir de 149 $ + taxes, diagnostic réparation 99 $ + taxes. Aucun changement de tarif sans votre accord.",
        en: "Clear packages: Maintenance $199 + taxes, Cleaning $299 + taxes, Restoration from $399 + taxes. Assembly from $149 + taxes, repair diagnostic $99 + taxes. No price change without your approval.",
      } satisfies Bilingual,
    },
    {
      icon: "📸",
      shortLabel: { fr: "Photos avant / après incluses", en: "Before / after photos included" } satisfies Bilingual,
      title: { fr: "Photos avant / après incluses", en: "Before / after photos included" } satisfies Bilingual,
      body: {
        fr: "Tous les forfaits incluent un minimum d'une photo extérieure et d'une photo intérieure avant / après. Photos additionnelles si des pièces usées, dommages, accumulation excessive ou recommandations doivent être documentés.",
        en: "Every package includes a minimum of one exterior and one interior before / after photo. Additional photos when worn parts, damage, heavy buildup or recommendations need to be documented.",
      } satisfies Bilingual,
    },
    {
      icon: "🔥",
      shortLabel: { fr: "Approche adaptée à votre équipement", en: "Approach adapted to your equipment" } satisfies Bilingual,
      title: { fr: "Approche adaptée à votre équipement", en: "Approach adapted to your equipment" } satisfies Bilingual,
      body: {
        fr: "Gaz propane, gaz naturel, charbon, granules, kamado, griddle ou cuisine extérieure : nous adaptons l'approche selon l'équipement, son état, son accès et le service requis.",
        en: "Propane, natural gas, charcoal, pellet, kamado, griddle or outdoor kitchen: we adapt the approach based on the equipment, its condition, access and required service.",
      } satisfies Bilingual,
    },
    {
      icon: "📍",
      shortLabel: { fr: "Service local et bilingue", en: "Local & bilingual" } satisfies Bilingual,
      title: { fr: "Service local et bilingue", en: "Local and bilingual service" } satisfies Bilingual,
      body: {
        fr: "BBQTECH est basé à Gatineau et dessert Gatineau, Aylmer, Hull, Plateau, Buckingham et Ottawa.",
        en: "BBQTECH is based in Gatineau and serves Gatineau, Aylmer, Hull, Plateau, Buckingham and Ottawa.",
      } satisfies Bilingual,
    },
  ],

  // ─── SERVICES (4 categories shown on homepage) ───
  services: [
    {
      slug: "nettoyage",
      icon: "🔥",
      name: { fr: "Nettoyage BBQ à domicile", en: "BBQ cleaning at home" } satisfies Bilingual,
      priceLabel: { fr: "À partir de 199 $ + taxes", en: "From $199 + taxes" } satisfies Bilingual,
      summary: {
        fr: "Service mobile de nettoyage et d'entretien à domicile pour BBQ, grills, smokers et équipements de cuisson extérieure. Choisissez entre Entretien, Nettoyage ou Restauration selon l'état de votre BBQ.",
        en: "Mobile cleaning and maintenance service at home for BBQs, grills, smokers and outdoor cooking equipment. Choose between Maintenance, Cleaning or Restoration based on your BBQ's condition.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Voir les forfaits", en: "View packages" } satisfies Bilingual,
      cardHref: "#forfaits",
    },
    {
      slug: "assemblage",
      icon: "🔧",
      name: { fr: "Assemblage BBQ", en: "BBQ assembly" } satisfies Bilingual,
      priceLabel: { fr: "À partir de 149 $ + taxes", en: "From $149 + taxes" } satisfies Bilingual,
      summary: {
        fr: "Assemblage à domicile d'un BBQ neuf chez le client. Modèles standards à partir de 149 $ + taxes. Grand format, pellet, kamado ou cuisine extérieure : soumission personnalisée.",
        en: "At-home assembly for a new BBQ. Standard models start at $149 + taxes. Large format, pellet, kamado or outdoor kitchen setups may require a custom quote.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Demander une soumission", en: "Request a quote" } satisfies Bilingual,
      cardHref: "/contact",
    },
    {
      slug: "reparation",
      icon: "🔧",
      name: { fr: "Diagnostic & Réparation", en: "Diagnostic & Repair" } satisfies Bilingual,
      priceLabel: { fr: "99 $ + taxes", en: "$99 + taxes" } satisfies Bilingual,
      summary: {
        fr: "Diagnostic à domicile pour identifier un problème de fonctionnement : allumage, flamme faible, brûleur défectueux, chaleur inégale ou composante brisée.",
        en: "On-site diagnostic to identify a functional issue: ignition problem, weak flame, faulty burner, uneven heat or broken component.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Réserver un diagnostic", en: "Book a diagnostic" } satisfies Bilingual,
      cardHref: "#reparation",
    },
    {
      slug: "commercial",
      icon: "🏢",
      name: { fr: "Entretien commercial / multi-unités", en: "Commercial / multi-unit maintenance" } satisfies Bilingual,
      priceLabel: { fr: "Sur soumission", en: "Custom quote" } satisfies Bilingual,
      summary: {
        fr: "Entretien régulier pour restaurants, food trucks, condos, propriétés à plusieurs unités ou équipements commerciaux. Programme adapté selon le type d'équipement, la fréquence, l'accès et le niveau de nettoyage requis.",
        en: "Regular maintenance for restaurants, food trucks, condos, multi-unit properties or commercial equipment. Program adapted to equipment type, frequency, access and required cleaning level.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Demander une soumission", en: "Request a quote" } satisfies Bilingual,
      cardHref: "/contact",
    },
  ],

  // ─── CLEANING PACKAGES (3 tiers — Essentiel / Signature / Prestige vapeur) ───
  packages: [
    {
      key: "essential",
      name: { fr: "Entretien", en: "Maintenance" } satisfies Bilingual,
      price: 199,
      priceLabel: { fr: "199 $ + taxes", en: "$199 + taxes" } satisfies Bilingual,
      surchargePerBurner: 49,
      method: {
        fr: "Inspection · Entretien saisonnier léger",
        en: "Inspection · Light seasonal upkeep",
      } satisfies Bilingual,
      useCase: {
        fr: "Pour un BBQ fonctionnel qui a besoin d'un entretien saisonnier léger, d'une inspection visuelle, d'un nettoyage de base et d'une remise en ordre avant la saison.",
        en: "For a functional BBQ that needs light seasonal upkeep, a visual inspection, basic cleaning and a tidy-up before the season.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Réserver mon service", en: "Book my service" } satisfies Bilingual,
      badge: null,
    },
    {
      key: "signature",
      name: { fr: "Nettoyage", en: "Cleaning" } satisfies Bilingual,
      price: 299,
      priceLabel: { fr: "299 $ + taxes", en: "$299 + taxes" } satisfies Bilingual,
      surchargePerBurner: 49,
      method: {
        fr: "Dégraissage approfondi · Composantes détaillées · Nettoyage annuel · Vapeur au besoin",
        en: "Deep degreasing · Detailed components · Annual cleaning · Steam as needed",
      } satisfies Bilingual,
      useCase: {
        fr: "Pour un BBQ utilisé régulièrement qui a besoin d'un nettoyage annuel plus approfondi. Selon l'état du BBQ et les matériaux, la vapeur peut être utilisée au besoin sur les composantes compatibles.",
        en: "For a BBQ used regularly that needs a more thorough annual cleaning. Depending on the BBQ's condition and materials, steam may be used as needed on compatible components.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Réserver mon service", en: "Book my service" } satisfies Bilingual,
      badge: { fr: "Recommandé", en: "Recommended" } satisfies Bilingual,
    },
    {
      key: "prestige",
      name: { fr: "Restauration", en: "Restoration" } satisfies Bilingual,
      price: 399,
      priceLabel: { fr: "À partir de 399 $ + taxes", en: "Starting at $399 + taxes" } satisfies Bilingual,
      surchargePerBurner: 49,
      method: {
        fr: "Multiples passes · Vapeur au besoin · Finition détaillée · Observations",
        en: "Multiple passes · Steam as needed · Detailed finish · Observations",
      } satisfies Bilingual,
      useCase: {
        fr: "Remise en état plus poussée pour les BBQ très encrassés, premium, négligés depuis longtemps ou nécessitant plus de temps. La vapeur peut être utilisée au besoin sur les composantes compatibles, selon l'état du BBQ et les matériaux.",
        en: "More advanced restoration for heavily soiled, premium, long-neglected BBQs or those needing more time. Steam may be used as needed on compatible components, depending on the BBQ's condition and materials.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Réserver mon service", en: "Book my service" } satisfies Bilingual,
      badge: null,
    },
  ],

  // ─── BASE SCOPE shared by all cleaning packages ───
  packagesBaseScope: {
    heading: { fr: "Tous les forfaits incluent", en: "All packages include" } satisfies Bilingual,
    items: {
      fr: [
        "Inspection visuelle de base",
        "Vérification de fonctionnement de base lorsque sécuritaire et applicable",
        "Nettoyage des composantes accessibles selon le forfait choisi",
        "Retrait des grilles et composantes accessibles lorsque sécuritaire",
        "Nettoyage du bac à graisse accessible",
        "Vacuum du firebox / de la cuve lorsque applicable",
        "Inspection des brûleurs accessibles lorsque applicable",
        "Photos avant / après incluses (minimum une extérieure et une intérieure)",
        "Recommandations sur les pièces usées ou endommagées",
        "Finition extérieure sur les surfaces compatibles",
      ],
      en: [
        "Basic visual inspection",
        "Basic function check when safe and applicable",
        "Cleaning of accessible components based on the selected package",
        "Removal of grates and accessible components when safe",
        "Accessible grease pan cleaning",
        "Firebox / cookbox vacuum when applicable",
        "Inspection of accessible burners when applicable",
        "Before / after photos included (minimum one exterior and one interior)",
        "Recommendations on worn or damaged parts",
        "Exterior finish on compatible surfaces",
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
      fr: "Notre nettoyage à domicile en ligne s'applique aux BBQ standards, mobiles et accessibles.",
      en: "Our online on-site cleaning applies to standard, mobile and accessible BBQs.",
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
      fr: "Diagnostic & Réparation",
      en: "Diagnostic & Repair",
    } satisfies Bilingual,
    subtitle: {
      fr: "Allumage, flamme faible, brûleur défectueux, chaleur inégale, composante brisée ou autre symptôme : diagnostic à domicile pour identifier le problème et les prochaines étapes.",
      en: "Ignition problem, weak flame, faulty burner, uneven heat, broken component or another symptom: on-site diagnostic to identify the issue and recommended next steps.",
    } satisfies Bilingual,
    diagnosticPriceLabel: { fr: "99 $ + taxes", en: "$99 + taxes" } satisfies Bilingual,
    diagnosticHeading: { fr: "Diagnostic à domicile", en: "On-site diagnostic" } satisfies Bilingual,
    mainBody: {
      fr: "Diagnostic à domicile pour identifier un problème de fonctionnement : allumage, flamme faible, brûleur défectueux, chaleur inégale, composante brisée ou autre symptôme à vérifier. Le diagnostic inclut le déplacement et l'identification du problème lorsque possible. Les pièces, réparations et main-d'œuvre additionnelle sont facturées séparément. Une estimation est confirmée avant de procéder.",
      en: "On-site diagnostic to identify a functional issue: ignition problem, weak flame, faulty burner, uneven heat, broken component or another symptom to inspect. The diagnostic includes the on-site visit and issue identification when possible. Parts, repairs and additional labor are billed separately. An estimate is confirmed before proceeding.",
    } satisfies Bilingual,
    tiers: [
      {
        priceLabel: { fr: "49 $ + taxes", en: "$49 + taxes" } satisfies Bilingual,
        name: { fr: "Diagnostic ajouté à un nettoyage", en: "Diagnostic added to a cleaning" } satisfies Bilingual,
        body: {
          fr: "Disponible seulement lorsqu'un forfait de nettoyage est effectué à la même visite. L'inspection visuelle de base est incluse avec le nettoyage. Le diagnostic s'applique lorsqu'un problème de fonctionnement doit être identifié : allumage, flamme faible, brûleur défectueux, chaleur inégale ou autre symptôme. Les pièces, réparations, main-d'œuvre additionnelle et visites futures sont facturées séparément. Une estimation est confirmée avant de procéder.",
          en: "Available only when a cleaning package is performed during the same visit. A basic visual inspection is included with cleaning packages. The diagnostic applies when a functional issue needs to be identified: ignition problem, weak flame, faulty burner, uneven heat or another symptom. Parts, repairs, additional labor and future visits are billed separately. An estimate is confirmed before proceeding.",
        } satisfies Bilingual,
      },
      {
        priceLabel: { fr: "À partir de 99 $ + taxes", en: "Starting at $99 + taxes" } satisfies Bilingual,
        name: { fr: "Installation / réparation", en: "Installation / repair" } satisfies Bilingual,
        body: {
          fr: "Si une pièce doit être remplacée et qu'une deuxième visite est nécessaire, l'installation est facturée à partir de 99 $ + taxes, pièces en sus. Une estimation est confirmée avant de procéder.",
          en: "If a part needs to be replaced and a second visit is required, installation is billed starting at $99 + taxes, parts extra. An estimate is confirmed before proceeding.",
        } satisfies Bilingual,
      },
    ],
    tiersHeading: { fr: "Autres situations", en: "Other situations" } satisfies Bilingual,
    inspectionDistinction: {
      fr: "Inspection visuelle de base incluse avec les forfaits de nettoyage. Pendant le service, BBQTECH peut signaler les pièces visiblement usées, endommagées ou à surveiller. Cette inspection ne remplace pas un diagnostic de réparation complet.",
      en: "Basic visual inspection included with cleaning packages. During the service, BBQTECH may point out visibly worn, damaged or concerning parts. This inspection does not replace a complete repair diagnostic.",
    } satisfies Bilingual,
    gasLimit: {
      fr: "BBQTECH n'intervient pas sur les installations de gaz réglementées. Les services se limitent aux composantes accessibles du BBQ et aux pièces pouvant normalement être nettoyées, retirées ou remplacées par un client selon les recommandations du fabricant. Nous ne modifions pas et ne certifions pas les lignes de gaz, raccordements permanents, conversions propane / gaz naturel ou installations encastrées. Lorsqu'un technicien certifié en gaz est requis, nous l'indiquons clairement et pouvons référer le client à un spécialiste qualifié.",
      en: "BBQTECH does not work on regulated gas installations. Services are limited to accessible BBQ components and parts that can normally be cleaned, removed or replaced by a customer according to manufacturer recommendations. We do not modify or certify gas lines, permanent connections, propane / natural gas conversions or built-in installations. When a certified gas technician is required, we clearly let the customer know and can refer them to a qualified specialist.",
    } satisfies Bilingual,
    diagnosticPrep: {
      fr: "Pour accélérer le diagnostic, préparez si possible : marque ; modèle ; numéro de série ; photos du BBQ ; photos de la pièce problématique ; description du symptôme ; type de gaz : propane ou gaz naturel.",
      en: "To speed up the diagnostic, please prepare when possible: brand; model; serial number; photos of the BBQ; photos of the problematic part; symptom description; gas type: propane or natural gas.",
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
          fr: "99 $ + taxes (ou 49 $ + taxes si ajouté à un nettoyage). Inspection du problème et identification des pièces ou travaux requis.",
          en: "$99 + taxes ($49 + taxes if added to a cleaning). Inspection of the issue and identification of required parts or work.",
        } satisfies Bilingual,
      },
      {
        number: "3",
        title: { fr: "Estimation transparente", en: "Transparent estimate" } satisfies Bilingual,
        desc: {
          fr: "Pièces, réparations et main-d'œuvre additionnelle détaillées avant tout travail.",
          en: "Parts, repairs and additional labor detailed before any work.",
        } satisfies Bilingual,
      },
      {
        number: "4",
        title: { fr: "Approbation + commande", en: "Approval + ordering" } satisfies Bilingual,
        desc: {
          fr: "Vous approuvez, on commande les pièces (OEM ou compatibles de qualité selon disponibilité).",
          en: "You approve, we order the parts (OEM or quality compatible based on availability).",
        } satisfies Bilingual,
      },
      {
        number: "5",
        title: { fr: "Installation / réparation", en: "Installation / repair" } satisfies Bilingual,
        desc: {
          fr: "Installation à domicile. Si une 2e visite est nécessaire pour installer la pièce commandée, l'installation est facturée à partir de 99 $ + taxes, pièces en sus.",
          en: "On-site installation. If a 2nd visit is required to install the ordered part, installation is billed starting at $99 + taxes, parts extra.",
        } satisfies Bilingual,
      },
    ],
    ctaLabel: { fr: "Réserver un diagnostic", en: "Book a diagnostic" } satisfies Bilingual,
  },

  packagesNote: {
    fr: "Prix valides pour BBQ standards, mobiles et accessibles jusqu'à 4 brûleurs principaux. Brûleur principal additionnel au-delà de 4 : +49 $ par brûleur. Les brûleurs latéraux, brûleurs arrière, zones infrarouges, modules spécialisés et accessoires peuvent être évalués séparément. Les BBQ encastrés, cuisines extérieures, équipements commerciaux, BBQ de très grande taille ou équipements très encrassés peuvent nécessiter une estimation personnalisée. Certaines composantes sont nettoyées seulement si accessibles et sécuritaires à manipuler — les pièces corrodées, saisies ou fragiles ne sont pas forcées.",
    en: "Prices apply to standard, mobile and accessible BBQs up to 4 main burners. Additional main burner beyond 4: +$49 per burner. Side burners, rear burners, infrared zones, specialty modules and accessories may be assessed separately. Built-in BBQs, outdoor kitchens, commercial equipment, very large BBQs or heavily soiled equipment may require a custom quote. Some components are cleaned only if accessible and safe to handle — corroded, seized or fragile parts will not be forced.",
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
        fr: "On termine le service et on vous envoie les photos avant / après incluses avec le service, ainsi que nos recommandations lorsque pertinent.",
        en: "We finish the service and send the before / after photos included with the service, along with recommendations when relevant.",
      } satisfies Bilingual,
    },
  ],

  // ─── COMMITMENTS ───
  commitments: [
    {
      icon: "🔒",
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
      icon: "👍",
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
      fr: "— Nicholas, opérateur · BBQTECH",
      en: "— Nicholas, operator · BBQTECH",
    } satisfies Bilingual,
  },

  // ─── FAQ ───
  faq: [
    {
      q: { fr: "Combien coûte un nettoyage de BBQ ?", en: "How much does a BBQ cleaning cost?" } satisfies Bilingual,
      a: {
        fr: "Nos forfaits sont à 199 $ + taxes (Entretien — entretien saisonnier léger), 299 $ + taxes (Nettoyage — nettoyage annuel plus approfondi) et à partir de 399 $ + taxes (Restauration — pour BBQ très encrassé, premium ou négligé depuis longtemps). Le forfait approprié dépend de l'état de votre BBQ. Envoyez-nous une photo pour une recommandation précise.",
        en: "Our packages are $199 + taxes (Maintenance — light seasonal upkeep), $299 + taxes (Cleaning — more thorough annual cleaning) and from $399 + taxes (Restoration — for heavily soiled, premium or long-neglected BBQs). The right package depends on your BBQ's condition. Send us a photo for a precise recommendation.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Est-ce que vous nettoyez seulement les BBQ au gaz ?", en: "Do you only clean gas BBQs?" } satisfies Bilingual,
      a: {
        fr: "Non. BBQTECH travaille aussi sur plusieurs types d'équipements de cuisson extérieure : BBQ au gaz propane ou naturel, BBQ au charbon, pellet grills, kamados, smokers, griddles, BBQ encastrés et cuisines extérieures. Certains équipements spécialisés, commerciaux, encastrés ou très encrassés peuvent nécessiter une estimation personnalisée. Envoyez-nous une photo et nous vous confirmerons la meilleure option.",
        en: "No. BBQTECH also works on several types of outdoor cooking equipment: propane or natural gas BBQs, charcoal BBQs, pellet grills, kamados, smokers, griddles, built-in BBQs and outdoor kitchens. Specialized, commercial, built-in or heavily soiled equipment may require a custom quote. Send us a photo and we'll confirm the best option.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Est-ce que BBQTECH travaille sur les installations de gaz ?", en: "Does BBQTECH work on gas installations?" } satisfies Bilingual,
      a: {
        fr: "Non. BBQTECH n'intervient pas sur les installations de gaz réglementées. Nos services se limitent aux composantes accessibles du BBQ et aux pièces pouvant normalement être nettoyées, retirées ou remplacées par un client selon les recommandations du fabricant. Nous ne modifions pas et ne certifions pas les lignes de gaz, raccordements permanents, conversions propane / gaz naturel ou installations encastrées. Lorsqu'un technicien certifié en gaz est requis, nous vous l'indiquons clairement et pouvons vous référer à un spécialiste qualifié.",
        en: "No. BBQTECH does not work on regulated gas installations. Our services are limited to accessible BBQ components and parts that can normally be cleaned, removed or replaced by a customer according to manufacturer recommendations. We do not modify or certify gas lines, permanent connections, propane / natural gas conversions or built-in gas installations. When a certified gas technician is required, we will clearly let you know and can refer you to a qualified specialist.",
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
        fr: "Le BBQ doit être accessible à l'heure prévue. Selon le service, nous pouvons avoir besoin d'un accès à l'eau extérieure et d'un espace de travail suffisant — idéalement environ 8' × 8' pour un nettoyage à domicile.",
        en: "The BBQ must be accessible at the scheduled time. Depending on the service, we may need outdoor water access and adequate work space — ideally about 8' × 8' for on-site cleaning.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Combien coûte l'assemblage d'un BBQ ?", en: "How much does BBQ assembly cost?" } satisfies Bilingual,
      a: {
        fr: "L'assemblage à domicile débute à 149 $ + taxes pour la plupart des BBQ standards. Certains modèles grands formats, complexes, pellet, kamado ou cuisines extérieures peuvent nécessiter une soumission personnalisée.",
        en: "On-site assembly starts at $149 + taxes for most standard BBQs. Larger, more complex models, pellet, kamado or outdoor kitchens may require a custom quote.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Y a-t-il un supplément pour les gros BBQ ?", en: "Is there a surcharge for larger BBQs?" } satisfies Bilingual,
      a: {
        fr: "Oui. Au-delà de 4 brûleurs principaux : +49 $ par brûleur principal additionnel, uniforme pour tous les forfaits. Les brûleurs latéraux, brûleurs arrière, zones infrarouges, modules spécialisés et accessoires peuvent être évalués séparément. Les BBQ encastrés, cuisines extérieures, équipements commerciaux, BBQ de très grande taille ou équipements très encrassés peuvent nécessiter une estimation personnalisée.",
        en: "Yes. Beyond 4 main burners: +$49 per additional main burner, uniform across all packages. Side burners, rear burners, infrared zones, specialty modules and accessories may be assessed separately. Built-in BBQs, outdoor kitchens, commercial equipment, very large BBQs or heavily soiled equipment may require a custom quote.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "L'inspection est-elle incluse avec un nettoyage ?", en: "Is an inspection included with a cleaning?" } satisfies Bilingual,
      a: {
        fr: "Oui. Tous les forfaits de nettoyage incluent une inspection visuelle de base des composantes accessibles. Si nous voyons une pièce usée, endommagée ou à surveiller, nous vous le signalons. Cette inspection ne remplace pas un diagnostic de réparation complet.",
        en: "Yes. Every cleaning package includes a basic visual inspection of accessible components. If we see a worn, damaged or concerning part, we will point it out. This inspection does not replace a complete repair diagnostic.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Quand est-ce qu'un diagnostic réparation s'applique ?", en: "When does a repair diagnostic apply?" } satisfies Bilingual,
      a: {
        fr: "Un diagnostic s'applique lorsqu'un problème de fonctionnement doit être identifié : allumage, flamme faible, brûleur qui ne fonctionne pas, chaleur inégale, problème d'allumeur ou autre symptôme. Le diagnostic réparation est 99 $ + taxes pour une visite dédiée.",
        en: "A diagnostic applies when a functional issue needs to be identified: ignition problem, weak flame, burner not working, uneven heat, igniter issue or another symptom. The repair diagnostic is $99 + taxes for a dedicated visit.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Si je réserve un nettoyage, pouvez-vous aussi vérifier un problème ?", en: "If I book a cleaning, can you also check a problem?" } satisfies Bilingual,
      a: {
        fr: "Oui. Si vous avez déjà réservé un nettoyage, un diagnostic de fonctionnement peut être ajouté à la même visite pour 49 $ + taxes. Les pièces, réparations et visites futures sont facturées séparément. Une estimation est confirmée avant de procéder.",
        en: "Yes. If you already booked a cleaning, a functional diagnostic can be added to the same visit for $49 + taxes. Parts, repairs and future visits are billed separately. An estimate is confirmed before proceeding.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Que se passe-t-il si une pièce doit être commandée ?", en: "What happens if a part needs to be ordered?" } satisfies Bilingual,
      a: {
        fr: "Si une pièce doit être remplacée, nous vous confirmons le coût avant de procéder. Si une deuxième visite est nécessaire pour installer la pièce, l'installation est facturée à partir de 99 $ + taxes, pièces en sus.",
        en: "If a part needs to be replaced, we confirm the cost before proceeding. If a second visit is required to install the part, installation is billed starting at $99 + taxes, parts extra.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Est-ce que vous offrez des services à l'année ?", en: "Do you offer services year-round?" } satisfies Bilingual,
      a: {
        fr: "Oui. BBQTECH offre ses services à l'année, selon les conditions météo, l'accessibilité du BBQ et la sécurité de la zone de travail. La demande est plus forte au printemps et en été, mais les services sont offerts à l'année lorsque les conditions le permettent.",
        en: "Yes. BBQTECH offers services year-round, depending on weather conditions, BBQ access and the safety of the work area. Demand is higher in spring and summer, but services are offered year-round when conditions allow.",
      } satisfies Bilingual,
    },
  ],

  // ─── CONTACT ───
  contact: {
    hours: { fr: "Ouvert 7 jours sur 7 · 8 h à 20 h", en: "Open 7 days a week · 8 AM to 8 PM" } satisfies Bilingual,
    season: {
      fr: "Services offerts à l'année selon les conditions météo, l'accessibilité du BBQ et la sécurité de la zone de travail.",
      en: "Services offered year-round depending on weather conditions, BBQ access and the safety of the work area.",
    } satisfies Bilingual,
    formHeading: { fr: "Réservez votre service BBQ", en: "Book your BBQ service" } satisfies Bilingual,
    formSub: {
      fr: "Réservation de nettoyage, appel de service, demande de soumission ou question. Réponse confirmée sous 24 h. Joignez des photos par SMS au 819-561-0762 ou par courriel à info@bbqtech.com pour une recommandation précise.",
      en: "Cleaning booking, service call, quote request, or general question. Confirmed reply within 24 h. Send photos by SMS to 819-561-0762 or email info@bbqtech.com for a precise recommendation.",
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

  // ─── GOOGLE PLACES API (address autocomplete on contact form) ───
  // Leave empty to fall back to HTML5 browser autofill only.
  // When set, the contact form will lazy-load the Google Maps JS API on
  // address-input focus and offer live Place suggestions restricted to Canada.
  // Setup: GCP project → enable Places API → create API key → restrict
  // HTTP referrers to https://bbqtech.com/* and https://*.pages.dev/* (preview).
  googleMapsApiKey: "",

  // ─── TRACKING ───
  // Single source: GTM. Configure GA4 + Google Ads + Meta Pixel etc. as
  // tags INSIDE the GTM container. The ga4Id / metaPixelId / googleAdsId
  // fields below are kept for reference / GTM-side use but are NOT loaded
  // by this codebase — only gtmId is read by Base.astro.
  // See DEPLOY.md → "Analytics & tracking" for the Cloudflare Tag Gateway
  // first-party routing (/analytics/*).
  tracking: {
    gtmId: "", // e.g. "GTM-XXXXXXX" — get from tagmanager.google.com
    ga4Id: "", // e.g. "G-XXXXXXXXXX" — reference only, configured inside GTM
    metaPixelId: "", // reference only — configured inside GTM if needed
    googleAdsId: "", // e.g. "AW-XXXXXXXXX" — reference only, configured inside GTM
  },

  // ─── SEO ───
  seo: {
    titleTemplate: {
      fr: "%s | BBQTECH — Nettoyage BBQ Gatineau & Ottawa",
      en: "%s | BBQTECH — BBQ Cleaning Gatineau · Ottawa",
    } satisfies Bilingual,
    homeTitle: {
      fr: "Nettoyage BBQ Gatineau & Ottawa | BBQTECH",
      en: "BBQ Cleaning Gatineau & Ottawa | BBQTECH",
    } satisfies Bilingual,
    defaultDescription: {
      fr: "Service mobile de nettoyage, entretien, assemblage et réparation de BBQ à Gatineau et Ottawa. Prix clairs, réservation simple, service local bilingue.",
      en: "Mobile BBQ cleaning, maintenance, assembly and repair service in Gatineau and Ottawa. Clear pricing, simple booking, local bilingual service.",
    } satisfies Bilingual,
    ogImage: "/og-default.svg",
  },

  // ─── SOCIAL ───
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },

  // ─── EQUIPMENT TYPES SERVICED ───
  equipmentTypes: {
    title: {
      fr: "Types de BBQ et équipements desservis",
      en: "Types of BBQs and outdoor cooking equipment we service",
    } satisfies Bilingual,
    intro: {
      fr: "BBQTECH n'est pas limité aux BBQ au gaz. Nous offrons des services de nettoyage, entretien, diagnostic, réparation légère et assemblage sur plusieurs types d'équipements de cuisson extérieure, selon l'état, l'accès, les composantes et la disponibilité des pièces.",
      en: "BBQTECH is not limited to gas BBQs. We provide cleaning, maintenance, diagnostic, light repair and assembly services for several types of outdoor cooking equipment, depending on condition, access, components and parts availability.",
    } satisfies Bilingual,
    list: {
      fr: [
        "BBQ au gaz propane",
        "BBQ au gaz naturel",
        "BBQ au charbon",
        "BBQ aux granules / pellet grills",
        "Kamado grills",
        "Smokers",
        "Griddles / plaques de cuisson extérieures",
        "BBQ encastrés",
        "Cuisines extérieures",
        "Fours à pizza extérieurs lorsque applicable",
        "Équipements commerciaux lorsque applicable",
      ],
      en: [
        "Propane BBQs",
        "Natural gas BBQs",
        "Charcoal BBQs",
        "Pellet grills",
        "Kamado grills",
        "Smokers",
        "Griddles / outdoor flat tops",
        "Built-in BBQs",
        "Outdoor kitchens",
        "Outdoor pizza ovens when applicable",
        "Commercial equipment when applicable",
      ],
    },
    note: {
      fr: "Certains équipements spécialisés, encastrés, commerciaux, très encrassés ou haut de gamme peuvent nécessiter une estimation personnalisée.",
      en: "Specialized, built-in, commercial, heavily soiled or premium equipment may require a custom quote.",
    } satisfies Bilingual,
    ctaText: {
      fr: "Pas certain si votre équipement est admissible ? Envoyez-nous une photo.",
      en: "Not sure if your equipment qualifies? Send us a photo.",
    } satisfies Bilingual,
  },

  // ─── BRANDS / MANUFACTURERS ───
  brands: {
    title: {
      fr: "Marques et manufacturiers",
      en: "Brands and manufacturers",
    } satisfies Bilingual,
    intro: {
      fr: "BBQTECH travaille avec plusieurs marques populaires de BBQ, grills, smokers et équipements de cuisson extérieure. Nous pouvons nettoyer, entretenir, diagnostiquer ou remplacer certaines composantes accessibles selon le modèle, l'état de l'appareil et la disponibilité des pièces.",
      en: "BBQTECH works with many popular brands of BBQs, grills, smokers and outdoor cooking equipment. We can clean, maintain, diagnose or replace certain accessible components depending on the model, condition of the unit and parts availability.",
    } satisfies Bilingual,
    list: [
      "Napoleon", "Weber", "Broil King", "Traeger", "Pit Boss",
      "Kamado Joe", "Big Green Egg", "Masterbuilt", "Char-Broil", "Blackstone",
      "Camp Chef", "Crown Verity", "Lynx", "DCS", "Twin Eagles",
      "Blaze", "Coyote", "Broilmaster", "Vermont Castings", "Nexgrill",
      "Monument Grills", "Member's Mark", "KitchenAid", "Cuisinart", "Coleman",
      "Centro", "Huntington", "Saber", "Bull BBQ", "Fire Magic",
      "Alfresco", "Hestan", "Yoder Smokers", "Louisiana Grills", "Green Mountain Grills",
    ],
    disclaimer: {
      fr: "La présence d'une marque dans cette liste ne signifie pas que BBQTECH est un centre de service autorisé ou affilié au manufacturier. Pour les réparations, BBQTECH privilégie les pièces d'origine ou des pièces compatibles de qualité lorsque disponibles. Certaines réparations peuvent nécessiter une commande de pièces ou une référence vers un technicien spécialisé.",
      en: "The presence of a brand in this list does not mean BBQTECH is an authorized service center or affiliated with the manufacturer. For repairs, BBQTECH prioritizes OEM parts or quality compatible parts when available. Some repairs may require parts ordering or referral to a specialized technician.",
    } satisfies Bilingual,
  },

  // ─── FOOTER ───
  footer: {
    description: {
      fr: "Service mobile de nettoyage, entretien, assemblage et réparation de BBQ à Gatineau et Ottawa. Trois forfaits clairs, service local bilingue.",
      en: "Mobile BBQ cleaning, maintenance, assembly and repair service in Gatineau and Ottawa. Three clear packages, local bilingual service.",
    } satisfies Bilingual,
    serviceAreas: ["Gatineau", "Aylmer", "Hull", "Plateau", "Buckingham", "Ottawa"],
    copyrightOwner: "BBQTECH — Groupe Rathwell inc.",
  },
};

export type SiteConfig = typeof siteConfig;
