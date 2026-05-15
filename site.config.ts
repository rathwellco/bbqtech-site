import type { Bilingual } from "./src/i18n/utils";

export const siteConfig = {
  // ─── BUSINESS INFO ───
  name: "BBQTech",
  legalName: "BBQTech — Groupe Rathwell inc.",
  tagline: {
    fr: "Réparation · Nettoyage · Entretien",
    en: "Repair · Cleaning · Maintenance",
  } satisfies Bilingual,
  phone: "819-790-0414",
  phoneRaw: "+18197900414",
  email: "hello@bbqtech.com",
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
    { href: "#pourquoi", label: { fr: "Pourquoi BBQTech", en: "Why BBQTech" } satisfies Bilingual },
    { href: "#tarifs", label: { fr: "Tarifs", en: "Pricing" } satisfies Bilingual },
    { href: "#faq", label: { fr: "FAQ", en: "FAQ" } satisfies Bilingual },
  ],
  cta: {
    primary: {
      label: { fr: "Soumission gratuite", en: "Free Quote" } satisfies Bilingual,
      hrefPath: "/contact",
    },
    callLabel: { fr: "Appeler 819-790-0414", en: "Call 819-790-0414" } satisfies Bilingual,
  },

  // ─── HERO (HOME) ───
  hero: {
    h1: {
      fr: "Votre BBQ, nettoyé à la vapeur sur votre patio — dès 289 $.",
      en: "Your BBQ, steam-cleaned on your deck — from $289.",
    } satisfies Bilingual,
    sub: {
      fr: "On arrive avec une vapeur commerciale, on installe un berm anti-déversement autour de votre grill, et on vous le remet propre, sans toxique. Vous ne déplacez rien. Opérateur local Gatineau · Ottawa. Tarifs publiés.",
      en: "We roll up with a commercial steam cleaner, lay a spill berm around your grill, and hand it back food-safe. You don't move a thing. Local Gatineau · Ottawa operator. Transparent pricing.",
    } satisfies Bilingual,
  },

  // ─── 4 PILLARS (LOCKED) ───
  pillars: [
    {
      icon: "🔥",
      shortLabel: { fr: "Vapeur commerciale 300°+", en: "Commercial steam 300°+" } satisfies Bilingual,
      title: { fr: "Vapeur commerciale 300°+", en: "Commercial steam 300°+" } satisfies Bilingual,
      body: {
        fr: "Pas de produits chimiques agressifs. Une vapeur commerciale 300°+ qui décolle la graisse, désinfecte et sécurise les grilles. Couplée à des produits Hawco biodégradables, sécuritaires pour patios.",
        en: "No harsh chemicals. A 300°+ commercial steam cleaner that lifts grease, sanitizes, and makes grates food-safe. Paired with Hawco biodegradable products, deck-safe.",
      } satisfies Bilingual,
    },
    {
      icon: "🛡️",
      shortLabel: { fr: "Berm anti-déversement", en: "Spill berm protection" } satisfies Bilingual,
      title: { fr: "Berm anti-déversement", en: "Spill berm protection" } satisfies Bilingual,
      body: {
        fr: "Un berm de confinement professionnel installé autour de votre BBQ. Aucun ruissellement sur votre patio, votre stone ou votre gazon. Aucun concurrent dans la région ne fait ça.",
        en: "A professional containment berm installed around your BBQ. Zero runoff on your deck, stone, or grass. No competitor in the region offers this.",
      } satisfies Bilingual,
    },
    {
      icon: "🏠",
      shortLabel: { fr: "Service à domicile", en: "On-site service" } satisfies Bilingual,
      title: { fr: "Service à domicile", en: "On-site service" } satisfies Bilingual,
      body: {
        fr: "Votre BBQ reste où il est. On vient à vous avec tout l'équipement — vapeur, berm, produits. Vous n'avez rien à déplacer, rien à transporter.",
        en: "Your BBQ stays where it is. We come to you with all the equipment — steam, berm, products. Nothing to move, nothing to haul.",
      } satisfies Bilingual,
    },
    {
      icon: "📍",
      shortLabel: { fr: "Opérateur local Gatineau", en: "Local Gatineau operator" } satisfies Bilingual,
      title: { fr: "Opérateur local Gatineau · Ottawa", en: "Local Gatineau · Ottawa operator" } satisfies Bilingual,
      body: {
        fr: "Bilingue, physiquement basé à Gatineau. Pas une équipe envoyée de Toronto ou de Montréal. Ligne directe avec l'opérateur. Service en français et anglais sans détour.",
        en: "Bilingual, physically based in Gatineau. Not a crew shipped from Toronto or Montréal. Direct line to the operator. Service in French and English, no runaround.",
      } satisfies Bilingual,
    },
  ],

  // ─── SERVICES ───
  services: [
    {
      slug: "nettoyage",
      icon: "🔥",
      name: { fr: "Nettoyage en profondeur", en: "Deep Cleaning" } satisfies Bilingual,
      priceLabel: { fr: "Dès 289 $", en: "From $289" } satisfies Bilingual,
      summary: {
        fr: "Vapeur commerciale, berm anti-déversement, à domicile. Tarif fixe selon la taille du grill.",
        en: "Commercial steam, spill berm, on-site. Fixed tier pricing based on grill size.",
      } satisfies Bilingual,
    },
    {
      slug: "entretien-saisonnier",
      icon: "🛡️",
      name: { fr: "Entretien saisonnier", en: "Seasonal Maintenance" } satisfies Bilingual,
      priceLabel: { fr: "599 $ / 3 visites", en: "$599 / 3 visits" } satisfies Bilingual,
      summary: {
        fr: "Forfait 3 visites : ouverture printemps, mise au point estivale, fermeture automne. Économisez 138 $ vs visites séparées.",
        en: "3-visit package: spring deep clean, summer tune-up, fall close-down. Save $138 vs. one-off visits.",
      } satisfies Bilingual,
    },
    {
      slug: "assemblage",
      icon: "🔧",
      name: { fr: "Assemblage BBQ", en: "BBQ Assembly" } satisfies Bilingual,
      priceLabel: { fr: "Dès 129 $", en: "From $129" } satisfies Bilingual,
      summary: {
        fr: "Assemblage professionnel d'un BBQ neuf, livré chez vous. Standard 129 $ · grand format / pellet / kamado 179 $.",
        en: "Professional assembly of a new BBQ delivered to you. Standard $129 · large / pellet / kamado $179.",
      } satisfies Bilingual,
    },
    {
      slug: "reparation",
      icon: "🛠️",
      name: { fr: "Réparation BBQ", en: "BBQ Repair" } satisfies Bilingual,
      priceLabel: { fr: "Sur évaluation", en: "By assessment" } satisfies Bilingual,
      summary: {
        fr: "Brûleurs, allumage, régulateur, grilles, plaques. Évaluation sur place, devis transparent avant tout travail.",
        en: "Burners, ignition, regulator, grates, plates. On-site assessment, transparent quote before any work.",
      } satisfies Bilingual,
    },
  ],

  // ─── PRICING TIERS (DEEP CLEANING) ───
  pricingTiers: [
    {
      label: { fr: "Standard 2-4 brûleurs", en: "Standard 2-4 burner" } satisfies Bilingual,
      example: { fr: "Weber Spirit, Napoléon Rogue, BBQ d'entrée", en: "Weber Spirit, Napoleon Rogue, entry-level" } satisfies Bilingual,
      price: 289,
    },
    {
      label: { fr: "Grand 5-6 brûleurs", en: "Large 5-6 burner" } satisfies Bilingual,
      example: { fr: "Weber Genesis, Napoléon Prestige", en: "Weber Genesis, Napoleon Prestige" } satisfies Bilingual,
      price: 349,
    },
    {
      label: { fr: "Premium intégré 27-36\"", en: "Premium 27-36\" built-in" } satisfies Bilingual,
      example: { fr: "Napoléon Built-In, DCS, Lynx", en: "Napoleon Built-In, DCS, Lynx" } satisfies Bilingual,
      price: 399,
    },
    {
      label: { fr: "Premium double couvercle 42-60\"", en: "Premium 42-60\" double-hood" } satisfies Bilingual,
      example: { fr: "Twin Eagles, Hestan, cuisine extérieure complète", en: "Twin Eagles, Hestan, full outdoor kitchen" } satisfies Bilingual,
      price: 449,
    },
  ],

  // ─── PROCESS ───
  process: [
    {
      number: "1",
      title: { fr: "Évaluation", en: "Assessment" } satisfies Bilingual,
      description: {
        fr: "Vous nous envoyez une photo + le modèle. On vous retourne un tarif fixe par message ou téléphone.",
        en: "Send us a photo + the model. We send back a fixed price by text or phone.",
      } satisfies Bilingual,
    },
    {
      number: "2",
      title: { fr: "Rendez-vous", en: "Booking" } satisfies Bilingual,
      description: {
        fr: "On confirme une plage horaire. Pas de fenêtre de 4 heures — on respecte votre temps.",
        en: "We lock in a time slot. No 4-hour window — we respect your time.",
      } satisfies Bilingual,
    },
    {
      number: "3",
      title: { fr: "Service à domicile", en: "On-site service" } satisfies Bilingual,
      description: {
        fr: "On arrive avec vapeur, berm et produits. Le BBQ reste sur place. 90 à 150 minutes selon la taille.",
        en: "We arrive with steam, berm, and products. The BBQ stays put. 90 to 150 minutes depending on size.",
      } satisfies Bilingual,
    },
    {
      number: "4",
      title: { fr: "Suivi", en: "Follow-up" } satisfies Bilingual,
      description: {
        fr: "On vous remet le BBQ propre, prêt à utiliser. Photos avant/après. Garantie de reprise si non satisfait.",
        en: "We hand back a clean, food-safe BBQ. Before/after photos. Re-do guarantee if not satisfied.",
      } satisfies Bilingual,
    },
  ],

  // ─── COMMITMENTS (replaces fake testimonials) ───
  commitments: [
    {
      icon: "🛡️",
      title: { fr: "Assuré", en: "Insured" } satisfies Bilingual,
      body: { fr: "Couverture responsabilité civile complète.", en: "Full liability coverage." } satisfies Bilingual,
    },
    {
      icon: "💰",
      title: { fr: "Tarifs fixes publiés", en: "Transparent fixed pricing" } satisfies Bilingual,
      body: { fr: "Pas de devis caché. Vous savez ce que vous payez avant le rendez-vous.", en: "No hidden quotes. You know what you pay before we show up." } satisfies Bilingual,
    },
    {
      icon: "✅",
      title: { fr: "Reprise garantie", en: "Re-do guarantee" } satisfies Bilingual,
      body: { fr: "Non satisfait du résultat ? On revient sans frais.", en: "Not happy with the result? We come back at no cost." } satisfies Bilingual,
    },
    {
      icon: "🇨🇦",
      title: { fr: "Service bilingue", en: "Bilingual service" } satisfies Bilingual,
      body: { fr: "Communication en français ou anglais, sans détour.", en: "Communication in French or English, no runaround." } satisfies Bilingual,
    },
  ],

  // ─── PHILOSOPHY (operator quote — replaces fake testimonials) ───
  philosophy: {
    headline: { fr: "Notre philosophie", en: "Our philosophy" } satisfies Bilingual,
    quote: {
      fr: "« Un BBQ propre, c'est pas juste esthétique — c'est sécuritaire pour votre famille et ça prolonge la vie de l'équipement. Je nettoie chaque BBQ comme si c'était le mien. Vapeur commerciale, berm de confinement, produits sécuritaires. Toronto et Montréal ne vivent pas à Gatineau. Moi, oui. »",
      en: "\"A clean BBQ isn't just about looks — it's food safety for your family and longer equipment life. I clean every BBQ like it's my own. Commercial steam, containment berm, safe products. Toronto and Montréal don't live in Gatineau. I do.\"",
    } satisfies Bilingual,
    attribution: {
      fr: "— Nicholas, opérateur · BBQTech",
      en: "— Nicholas, operator · BBQTech",
    } satisfies Bilingual,
  },

  // ─── FAQ (homepage) ───
  faq: [
    {
      q: { fr: "Combien de temps prend un nettoyage en profondeur ?", en: "How long does a deep cleaning take?" } satisfies Bilingual,
      a: {
        fr: "Entre 90 et 150 minutes selon la taille du grill et son état. Vous n'avez pas besoin d'être présent toute la durée — on planifie ensemble.",
        en: "Between 90 and 150 minutes depending on grill size and condition. You don't need to be there the whole time — we plan it together.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Pourquoi 289 $ alors que d'autres demandent moins ?", en: "Why $289 when others charge less?" } satisfies Bilingual,
      a: {
        fr: "Les services à 100-199 $ utilisent un grattage chimique sans confinement. Nous utilisons une vapeur commerciale 300°+ avec un berm anti-déversement et des produits Hawco biodégradables. Le résultat est plus propre, plus sécuritaire, et votre patio reste intact. Grill Hero (Toronto) facture 299,99 $ — on est local, légèrement moins cher, et on garantit la reprise.",
        en: "Services at $100-199 use chemical scrubbing with no containment. We use 300°+ commercial steam with a spill berm and Hawco biodegradable products. The result is cleaner, safer, and your deck stays intact. Grill Hero (Toronto) charges $299.99 — we're local, slightly cheaper, and we guarantee the re-do.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Vous servez Ottawa ?", en: "Do you serve Ottawa?" } satisfies Bilingual,
      a: {
        fr: "Oui. Gatineau (Aylmer, Hull, Plateau, Buckingham) et Ottawa. Frais de déplacement déjà inclus dans le tarif fixe.",
        en: "Yes. Gatineau (Aylmer, Hull, Plateau, Buckingham) and Ottawa. Travel fees are already included in the fixed price.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Quels types de BBQ nettoyez-vous ?", en: "What types of BBQ do you clean?" } satisfies Bilingual,
      a: {
        fr: "BBQ au gaz (propane, naturel), fumoirs / pellet grills, kamado, griddle / plancha, cuisines extérieures intégrées. Si vous n'êtes pas sûr du tier, envoyez-nous une photo.",
        en: "Gas BBQs (propane, natural), smokers / pellet grills, kamado, griddle / plancha, built-in outdoor kitchens. If you're unsure about the tier, send us a photo.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Faites-vous des réparations de tuyauterie au gaz ?", en: "Do you do gas line repairs?" } satisfies Bilingual,
      a: {
        fr: "Non. La tuyauterie au gaz naturel résidentielle est réglementée RBQ. Nous référons un technicien certifié si nécessaire. Brûleurs, allumage, régulateur de propane portatif — oui, on s'en occupe.",
        en: "No. Residential natural gas piping is RBQ-regulated. We refer a certified technician if needed. Burners, ignition, portable propane regulators — yes, we handle those.",
      } satisfies Bilingual,
    },
    {
      q: { fr: "Quand commence et finit la saison ?", en: "When does the season start and end?" } satisfies Bilingual,
      a: {
        fr: "Avril à octobre. Hors saison, on prend des rendez-vous d'assemblage et de fermeture sur demande.",
        en: "April to October. Off-season, we take assembly and close-down appointments on request.",
      } satisfies Bilingual,
    },
  ],

  // ─── CONTACT ───
  contact: {
    hours: { fr: "Lun–Sam · 8h00–18h00", en: "Mon–Sat · 8:00 AM–6:00 PM" } satisfies Bilingual,
    season: { fr: "Saison : Avril à Octobre", en: "Season: April to October" } satisfies Bilingual,
    formHeading: { fr: "Demande de soumission", en: "Request a quote" } satisfies Bilingual,
    formSub: {
      fr: "Réponse sous 24 h pendant la saison. Pour un service plus rapide, appelez directement.",
      en: "Reply within 24 h during the season. For faster service, call directly.",
    } satisfies Bilingual,
  },

  // ─── FORMS (Cloudflare Function relays to Zoho) ───
  forms: {
    provider: "cloudflare-function" as const,
    endpoint: "/api/lead",
    successQuery: "sent=1",
  },

  // ─── TURNSTILE (placeholder — Nicholas to provide real key) ───
  turnstileSiteKey: "0x4AAAAAADAqUwa51-U7rdhD", // TODO: replace with bbqtech.com Turnstile site key

  // ─── TRACKING (add post-launch) ───
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
      fr: "BBQTech | Nettoyage, réparation et entretien BBQ — Gatineau · Ottawa",
      en: "BBQ Cleaning & Repair Gatineau · Ottawa | BBQTech",
    } satisfies Bilingual,
    defaultDescription: {
      fr: "Service mobile de nettoyage à la vapeur, réparation et entretien de BBQ à Gatineau et Ottawa. Tarifs publiés dès 289 $. Berm anti-déversement, à domicile.",
      en: "Mobile steam-cleaning, repair and maintenance for BBQs in Gatineau and Ottawa. Transparent pricing from $289. Spill berm protection, on-site service.",
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
      fr: "Nettoyage, réparation et entretien de BBQ. Service mobile à Gatineau et Ottawa. Vapeur commerciale, tarifs publiés.",
      en: "BBQ cleaning, repair, and maintenance. Mobile service in Gatineau and Ottawa. Commercial steam, transparent pricing.",
    } satisfies Bilingual,
    serviceAreas: ["Gatineau", "Aylmer", "Hull", "Plateau", "Buckingham", "Ottawa"],
    copyrightOwner: "BBQTech — Groupe Rathwell inc.",
  },
};

export type SiteConfig = typeof siteConfig;
