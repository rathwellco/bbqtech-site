import type { Bilingual } from "./src/i18n/utils";

export const siteConfig = {
  // ─── BUSINESS INFO ───
  name: "BBQTech",
  legalName: "BBQTech — Groupe Rathwell inc.",
  tagline: {
    fr: "Nettoyage · Entretien · Réparation",
    en: "Cleaning · Maintenance · Repair",
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
      fr: "Service mobile spécialisé de nettoyage, entretien, diagnostic et réparation de BBQ à Gatineau et Ottawa. Méthodes adaptées selon l'état du BBQ, son accès et le forfait choisi.",
      en: "Specialized mobile service for BBQ cleaning, maintenance, diagnostic and repair in Gatineau and Ottawa. Methods adapted to your grill's condition, access, and the chosen package.",
    } satisfies Bilingual,
  },

  // ─── 5 PILLARS (positive positioning, no competitor-bashing) ───
  pillars: [
    {
      icon: "🚐",
      shortLabel: { fr: "Service mobile spécialisé", en: "Specialized mobile service" } satisfies Bilingual,
      title: { fr: "Service mobile spécialisé", en: "Specialized mobile service" } satisfies Bilingual,
      body: {
        fr: "BBQTech se concentre sur les BBQ : nettoyage, entretien, diagnostic et réparation de composantes accessibles.",
        en: "BBQTech focuses on BBQs: cleaning, maintenance, diagnostic and repair of accessible components.",
      } satisfies Bilingual,
    },
    {
      icon: "💰",
      shortLabel: { fr: "Forfaits clairs", en: "Clear packages" } satisfies Bilingual,
      title: { fr: "Forfaits clairs", en: "Clear packages" } satisfies Bilingual,
      body: {
        fr: "Essential, Signature et Prestige permettent de choisir le bon niveau de service selon l'état du BBQ, son accès et vos attentes.",
        en: "Essential, Signature and Prestige let you pick the right service level based on your BBQ's condition, access, and your expectations.",
      } satisfies Bilingual,
    },
    {
      icon: "🔥",
      shortLabel: { fr: "Approche adaptée", en: "Adapted approach" } satisfies Bilingual,
      title: { fr: "Approche adaptée à votre BBQ", en: "Approach adapted to your BBQ" } satisfies Bilingual,
      body: {
        fr: "Gaz propane, gaz naturel, pellet, kamado, griddle, cuisines extérieures ou BBQ premium : nous adaptons l'approche selon l'équipement.",
        en: "Propane gas, natural gas, pellet, kamado, griddle, outdoor kitchens or premium BBQs: we adapt the approach to your equipment.",
      } satisfies Bilingual,
    },
    {
      icon: "🛡️",
      shortLabel: { fr: "Zone de travail contrôlée", en: "Controlled work zone" } satisfies Bilingual,
      title: { fr: "Zone de travail contrôlée", en: "Controlled work zone" } satisfies Bilingual,
      body: {
        fr: "Selon le forfait choisi, nous pouvons utiliser une zone de travail protégée, un système de confinement, un nettoyage plus détaillé ou la vapeur.",
        en: "Depending on the chosen package, we can use a protected work zone, a containment system, more detailed cleaning, or steam.",
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

  // ─── SERVICES (4 categories shown on homepage) ───
  services: [
    {
      slug: "nettoyage",
      icon: "🔥",
      name: { fr: "Nettoyage BBQ", en: "BBQ Cleaning" } satisfies Bilingual,
      priceLabel: { fr: "Dès 195 $", en: "From $195" } satisfies Bilingual,
      summary: {
        fr: "Trois forfaits : Essential, Signature ou Prestige Steam Restoration. Selon l'état, la marque et l'accès de votre BBQ.",
        en: "Three packages: Essential, Signature, or Prestige Steam Restoration. Matched to the condition, brand, and access of your BBQ.",
      } satisfies Bilingual,
    },
    {
      slug: "entretien-saisonnier",
      icon: "🛡️",
      name: { fr: "Entretien saisonnier", en: "Seasonal Maintenance" } satisfies Bilingual,
      priceLabel: { fr: "Sur évaluation", en: "By assessment" } satisfies Bilingual,
      summary: {
        fr: "Forfait multi-visites : ouverture printanière, mise au point estivale, fermeture automnale. Prolonge la durée de vie de votre BBQ.",
        en: "Multi-visit package: spring opening, summer tune-up, fall close-down. Extends the life of your BBQ.",
      } satisfies Bilingual,
    },
    {
      slug: "assemblage",
      icon: "🔧",
      name: { fr: "Assemblage BBQ", en: "BBQ Assembly" } satisfies Bilingual,
      priceLabel: { fr: "Sur évaluation", en: "By assessment" } satisfies Bilingual,
      summary: {
        fr: "Assemblage professionnel d'un BBQ neuf, livré chez vous. Standard, grand format, pellet et kamado.",
        en: "Professional assembly of a new BBQ delivered to you. Standard, large format, pellet, and kamado.",
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

  // ─── CLEANING PACKAGES (3 tiers — Essential / Signature / Prestige) ───
  packages: [
    {
      key: "essential",
      name: { fr: "Essential", en: "Essential" } satisfies Bilingual,
      price: 195,
      priceLabel: { fr: "195 $ + taxes", en: "$195 + tax" } satisfies Bilingual,
      tagline: {
        fr: "Nettoyage d'entretien pour BBQ standards avec accès simple.",
        en: "Maintenance cleaning for standard BBQs with easy access.",
      } satisfies Bilingual,
      includes: {
        fr: [
          "Nettoyage au pressure washer",
          "Nettoyage des grilles + firebox",
          "Drip tray / bac à graisse",
          "Dégraissage intérieur de base",
          "Nettoyage extérieur",
          "Rinçage et finition",
        ],
        en: [
          "Pressure washer cleaning",
          "Grates + firebox",
          "Drip tray / grease pan",
          "Basic interior degreasing",
          "Exterior cleaning",
          "Rinse and finish",
        ],
      },
      conditions: {
        fr: "Accès simple, sans escaliers. Sans système de confinement (spill berm). Surface extérieure adéquate requise.",
        en: "Easy access, no stairs. No spill berm containment. Adequate outdoor surface required.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Réserver Essential", en: "Book Essential" } satisfies Bilingual,
      badge: null,
    },
    {
      key: "signature",
      name: { fr: "Signature", en: "Signature" } satisfies Bilingual,
      price: 295,
      priceLabel: { fr: "295 $ + taxes", en: "$295 + tax" } satisfies Bilingual,
      tagline: {
        fr: "Nettoyage approfondi avec zone de travail protégée.",
        en: "In-depth cleaning with a protected work zone.",
      } satisfies Bilingual,
      includes: {
        fr: [
          "Tout du forfait Essential",
          "Spill berm / confinement professionnel",
          "Nettoyage des brûleurs accessibles",
          "Grease management system",
          "Nettoyage intérieur approfondi",
          "Nettoyage extérieur détaillé",
          "Finition premium",
        ],
        en: [
          "Everything in Essential",
          "Spill berm / professional containment",
          "Accessible burner cleaning",
          "Grease management system",
          "Deep interior cleaning",
          "Detailed exterior cleaning",
          "Premium finish",
        ],
      },
      conditions: {
        fr: "Espace de travail 8' × 8' minimum. Sans escaliers. Accès à l'eau requis.",
        en: "Minimum 8' × 8' work area. No stairs. Water access required.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Réserver Signature", en: "Book Signature" } satisfies Bilingual,
      badge: { fr: "Recommandé", en: "Most popular" } satisfies Bilingual,
    },
    {
      key: "prestige",
      name: { fr: "Prestige Steam Restoration", en: "Prestige Steam Restoration" } satisfies Bilingual,
      price: 495,
      priceLabel: { fr: "À partir de 495 $ + taxes", en: "From $495 + tax" } satisfies Bilingual,
      tagline: {
        fr: "Restauration esthétique premium avec nettoyage vapeur.",
        en: "Premium aesthetic restoration with steam cleaning.",
      } satisfies Bilingual,
      includes: {
        fr: [
          "Tout du forfait Signature",
          "Nettoyage vapeur commerciale",
          "Restauration esthétique avancée",
          "Polissage inox premium lorsque applicable",
          "Inspection visuelle complète",
          "Vérification de fonctionnement de base",
          "Photos avant / après",
          "Rapport général de condition",
        ],
        en: [
          "Everything in Signature",
          "Commercial steam cleaning",
          "Advanced aesthetic restoration",
          "Premium stainless polishing where applicable",
          "Full visual inspection",
          "Basic function check",
          "Before / after photos",
          "General condition report",
        ],
      },
      conditions: {
        fr: "Recommandé pour BBQ premium, built-ins, outdoor kitchens ou BBQ très encrassés. Estimation personnalisée selon la marque et la configuration.",
        en: "Recommended for premium BBQs, built-ins, outdoor kitchens, or heavily soiled grills. Custom estimate based on brand and configuration.",
      } satisfies Bilingual,
      ctaLabel: { fr: "Demander une évaluation Prestige", en: "Request a Prestige assessment" } satisfies Bilingual,
      badge: { fr: "Premium", en: "Premium" } satisfies Bilingual,
    },
  ],

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
      fr: "Astuce : combinez avec un nettoyage Signature ou Prestige pour économiser une visite.",
      en: "Tip: combine with a Signature or Prestige cleaning to save a visit.",
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
    fr: "Prix de base clairs. Si l'état du BBQ, son accès ou la configuration nécessite un ajustement, on vous informe avant tout changement de service ou de tarif. Supplément de 100 $ pour BBQ de 5 brûleurs principaux et plus. Cuisines extérieures, built-ins et équipements très encrassés peuvent nécessiter une estimation personnalisée.",
    en: "Clear base pricing. If the BBQ's condition, access, or configuration requires an adjustment, we let you know before any change in service or price. $100 surcharge for BBQs with 5+ main burners. Outdoor kitchens, built-ins, and heavily soiled equipment may require a custom estimate.",
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
        fr: "Envoyez-nous une photo de votre BBQ + la marque et le modèle. On vous recommande le bon forfait sous 24 h. Essential = entretien standard, Signature = nettoyage approfondi avec confinement (recommandé), Prestige = restauration vapeur premium.",
        en: "Send us a photo of your BBQ + the brand and model. We'll recommend the right package within 24 h. Essential = standard maintenance, Signature = deep cleaning with containment (recommended), Prestige = premium steam restoration.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Combien de temps prend un nettoyage ?", en: "How long does a cleaning take?" } satisfies Bilingual,
      a: {
        fr: "Essential : 60 à 90 minutes. Signature : 90 à 120 minutes. Prestige : 2 à 3 heures selon l'état et la taille. Vous n'avez pas besoin d'être présent toute la durée — on planifie ensemble.",
        en: "Essential: 60 to 90 minutes. Signature: 90 to 120 minutes. Prestige: 2 to 3 hours depending on size and condition. You don't need to be there the whole time — we plan it together.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Y a-t-il un supplément pour les gros BBQ ?", en: "Is there a surcharge for larger BBQs?" } satisfies Bilingual,
      a: {
        fr: "Oui : +100 $ pour les BBQ de 5 brûleurs principaux et plus. Les cuisines extérieures, BBQ encastrés et équipements très encrassés peuvent nécessiter une estimation personnalisée — envoyez-nous une photo.",
        en: "Yes: +$100 for BBQs with 5 main burners or more. Outdoor kitchens, built-ins, and heavily soiled grills may require a custom estimate — send us a photo.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Comment fonctionne le diagnostic de réparation ?", en: "How does the repair diagnostic work?" } satisfies Bilingual,
      a: {
        fr: "Diagnostic à domicile pour 125 $ + taxes. Le technicien identifie les pièces nécessaires et envoie une estimation transparente (pièces + main-d'œuvre). 55 $ sont crédités sur la facture finale si la réparation est effectuée par BBQTech. Certaines réparations nécessitent une 2e visite selon la disponibilité des pièces. Astuce : combinez avec un nettoyage Signature ou Prestige pour économiser une visite.",
        en: "On-site diagnostic for $125 + tax. The technician identifies the parts needed and sends a transparent estimate (parts + labor). $55 is credited to the final invoice if BBQTech does the repair. Some repairs require a 2nd visit depending on parts availability. Tip: combine with a Signature or Prestige cleaning to save a visit.",
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
        fr: "Le BBQ doit être accessible à l'heure prévue. Selon le forfait, nous pouvons avoir besoin d'un accès à l'eau extérieure et d'un espace de travail suffisant. Pour le forfait Signature, un espace d'environ 8' × 8' est recommandé.",
        en: "The BBQ must be accessible at the scheduled time. Depending on the package, we may need outdoor water access and adequate work space. For the Signature package, an area of about 8' × 8' is recommended.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Vous servez Ottawa ?", en: "Do you serve Ottawa?" } satisfies Bilingual,
      a: {
        fr: "Oui. Gatineau (Aylmer, Hull, Plateau, Buckingham) et Ottawa. Frais de déplacement inclus dans le tarif du forfait.",
        en: "Yes. Gatineau (Aylmer, Hull, Plateau, Buckingham) and Ottawa. Travel fees are included in the package price.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Quels types de BBQ nettoyez-vous ?", en: "What types of BBQ do you clean?" } satisfies Bilingual,
      a: {
        fr: "BBQ au gaz (propane, naturel), fumoirs / pellet, kamado, griddle / plancha, cuisines extérieures intégrées. Marques Weber, Napoleon, Broil King, Lynx, DCS, Twin Eagles, Crown Verity et autres.",
        en: "Gas BBQs (propane, natural), smokers / pellet, kamado, griddle / plancha, built-in outdoor kitchens. Brands include Weber, Napoleon, Broil King, Lynx, DCS, Twin Eagles, Crown Verity, and more.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Faites-vous des réparations au gaz ?", en: "Do you do gas line repairs?" } satisfies Bilingual,
      a: {
        fr: "Non — la tuyauterie au gaz naturel résidentielle est réglementée RBQ. Nous référons un technicien certifié. Brûleurs, allumage, régulateur de propane portatif, grilles, plaques : oui, on s'en occupe.",
        en: "No — residential natural gas piping is RBQ-regulated. We refer a certified technician. Burners, ignition, portable propane regulators, grates, plates: yes, we handle those.",
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
      fr: "Service mobile professionnel de nettoyage, entretien et réparation de BBQ à Gatineau et Ottawa. Trois forfaits clairs : Essential 195 $, Signature 295 $, Prestige Steam dès 495 $.",
      en: "Professional mobile service for BBQ cleaning, maintenance, and repair in Gatineau and Ottawa. Three clear packages: Essential $195, Signature $295, Prestige Steam from $495.",
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
      fr: "Service mobile professionnel de nettoyage, entretien et réparation de BBQ à Gatineau et Ottawa. Trois forfaits clairs.",
      en: "Professional mobile service for BBQ cleaning, maintenance, and repair in Gatineau and Ottawa. Three clear packages.",
    } satisfies Bilingual,
    serviceAreas: ["Gatineau", "Aylmer", "Hull", "Plateau", "Buckingham", "Ottawa"],
    copyrightOwner: "BBQTech — Groupe Rathwell inc.",
  },
};

export type SiteConfig = typeof siteConfig;
