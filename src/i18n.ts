import type { ScoredWine, Wine, WineCategory } from "./types";
import { wines } from "./data/wines";

export type Language = "en" | "fr";

type WineTranslation = Pick<
  Wine,
  "flavourNotes" | "chipPairings" | "whyChipsWork" | "expectation" | "lcboSearchTerms"
>;

type WineId = (typeof wines)[number]["id"];

export const ui = {
  en: {
    brand: "Tonight Wine",
    surpriseMe: "Surprise me",
    startQuiz: "Start quiz",
    chooseBottle: "choose the bottle",
    homeTitle: "What are we drinking tonight?",
    homeBody:
      "Answer five quick wine mood questions and get three bottle styles, tasting notes, and chips that make sense after the wine is chosen.",
    oneMoment: "One moment",
    pouring: "Pouring your picks",
    caveRecommends: "La cave recommends",
    topPours: "Your top 3 pours",
    retakeQuiz: "Retake quiz",
    back: "Back",
    next: "Next",
    seeResults: "See results",
    fullCellar: "The full cellar",
    allWines: "All wines",
    allWinesBody:
      "Browse every wine style in the recommendation dataset, including traits, tasting notes, snack pairings, and LCBO search links.",
    pick: "Pick",
    flavourNotes: "Flavour notes",
    chips: "Chips & snacks",
    lcboTerms: "LCBO search terms",
    searchLcbo: "Search LCBO",
    alcohol: "alcohol",
    traits: {
      sweetness: "Sweetness",
      acidity: "Acidity",
      body: "Body",
      tannin: "Tannin",
    },
    categories: {
      white: "white",
      rose: "rosé",
      red: "red",
      dessert: "dessert",
      sparkling: "sparkling",
      orange: "orange",
    } satisfies Record<WineCategory, string>,
    alcoholLevels: {
      low: "low",
      medium: "medium",
      high: "high",
    },
    questions: [
      {
        eyebrow: "Round 1",
        question: "What are we drinking tonight?",
        options: {
          white: "White",
          rose: "Rosé",
          sparkling: "Sparkling",
          red: "Red",
          dessert: "Sweet / dessert",
          surprise: "Surprise me",
        },
      },
      {
        eyebrow: "Round 2",
        question: "What vibe do you want?",
        options: {
          crisp: "Crisp & refreshing",
          fruity: "Fruity & easy",
          cozy: "Smooth & cozy",
          bold: "Bold & intense",
          weird: "Weird / nerdy / interesting",
        },
      },
      {
        eyebrow: "Round 3",
        question: "Dryness preference?",
        options: {
          dry: "Dry",
          offDry: "Off-dry",
          sweet: "Sweet",
          none: "No preference",
        },
      },
      {
        eyebrow: "Round 4",
        question: "Body preference?",
        options: {
          light: "Light",
          medium: "Medium",
          full: "Full",
          none: "No preference",
        },
      },
      {
        eyebrow: "Final pour",
        question: "Crowd mode?",
        options: {
          safe: "Safe crowd-pleaser",
          balanced: "Balanced",
          adventurous: "Adventurous",
        },
      },
    ],
  },
  fr: {
    brand: "La Bouteille du soir",
    surpriseMe: "Surprends-moi",
    startQuiz: "Commencer le quiz",
    chooseBottle: "Choisir la bouteille",
    homeTitle: "Qu’est-ce qu’on boit ce soir ?",
    homeBody:
      "Réponds à cinq questions rapides sur ton envie du moment et découvre trois styles de bouteilles, avec notes de dégustation et grignotines qui vont bien avec.",
    oneMoment: "Un instant",
    pouring: "On prépare ta sélection",
    caveRecommends: "La cave recommande",
    topPours: "Tes 3 meilleurs choix",
    retakeQuiz: "Refaire le quiz",
    back: "Retour",
    next: "Suivant",
    seeResults: "Voir les résultats",
    fullCellar: "Toute la cave",
    allWines: "Tous les vins",
    allWinesBody:
      "Parcours tous les styles de vin de la base de recommandations, avec profils de goût, notes de dégustation, accords avec des grignotines et liens de recherche LCBO.",
    pick: "Choix",
    flavourNotes: "Notes de dégustation",
    chips: "Croustilles et grignotines",
    lcboTerms: "Mots-clés LCBO",
    searchLcbo: "Rechercher à la LCBO",
    alcohol: "alcool",
    traits: {
      sweetness: "Douceur",
      acidity: "Acidité",
      body: "Corps",
      tannin: "Tanins",
    },
    categories: {
      white: "blanc",
      rose: "rosé",
      red: "rouge",
      dessert: "dessert",
      sparkling: "mousseux",
      orange: "orange",
    } satisfies Record<WineCategory, string>,
    alcoholLevels: {
      low: "faible",
      medium: "moyen",
      high: "élevé",
    },
    questions: [
      {
        eyebrow: "Tour 1",
        question: "Qu’est-ce qu’on boit ce soir ?",
        options: {
          white: "Blanc",
          rose: "Rosé",
          sparkling: "Mousseux",
          red: "Rouge",
          dessert: "Doux / dessert",
          surprise: "Surprends-moi",
        },
      },
      {
        eyebrow: "Tour 2",
        question: "Quelle ambiance tu veux ?",
        options: {
          crisp: "Vif et rafraîchissant",
          fruity: "Fruité et facile",
          cozy: "Souple et réconfortant",
          bold: "Corsé et intense",
          weird: "Original / pointu / intéressant",
        },
      },
      {
        eyebrow: "Tour 3",
        question: "Tu le veux plutôt sec ou sucré ?",
        options: {
          dry: "Sec",
          offDry: "Légèrement sucré",
          sweet: "Doux",
          none: "Aucune préférence",
        },
      },
      {
        eyebrow: "Tour 4",
        question: "Préférence de corps ?",
        options: {
          light: "Léger",
          medium: "Moyen",
          full: "Corsé",
          none: "Aucune préférence",
        },
      },
      {
        eyebrow: "Dernier verre",
        question: "Pour le groupe ?",
        options: {
          safe: "Valeur sûre",
          balanced: "Équilibré",
          adventurous: "Aventureux",
        },
      },
    ],
  },
} as const;

export const wineTranslations = {
  "vinho-verde": {
    flavourNotes: ["limonade", "pamplemousse rose", "zeste de lime", "pomme jaune", "fleur blanche"],
    chipPairings: ["croustilles sel et vinaigre", "croustilles tortilla à la lime"],
    whyChipsWork: "Son acidité vive rend les croustilles salées et acidulées encore plus éclatantes.",
    expectation: "Léger, presque pétillant, citronné, et parfait à ouvrir avant que le souper soit prêt.",
    lcboSearchTerms: ["Vinho Verde", "vin blanc portugais", "blanc faible en alcool"],
  },
  "sauvignon-blanc": {
    flavourNotes: ["groseille à maquereau", "melon miel", "pamplemousse", "pêche blanche", "fruit de la passion"],
    chipPairings: ["croustilles à l’aneth", "croustilles jalapeño"],
    whyChipsWork: "Son côté vert et citronné tranche les assaisonnements et garde chaque bouchée bien vive.",
    expectation: "Un blanc lumineux et énergique, plein d’agrumes avec une petite touche herbacée.",
    lcboSearchTerms: ["Sauvignon Blanc", "Sauvignon Blanc Nouvelle-Zélande", "Sauvignon Loire"],
  },
  albarino: {
    flavourNotes: ["zeste de citron", "pamplemousse", "melon miel", "nectarine", "salinité"],
    chipPairings: ["croustilles sel et vinaigre", "croustilles aux crevettes"],
    whyChipsWork: "La fraîcheur saline et citronnée rend les grignotines iodées et acidulées plus vibrantes.",
    expectation: "Un blanc côtier, avec agrumes éclatants, fruit à noyau juteux et salinité rafraîchissante.",
    lcboSearchTerms: ["Albariño", "Albarino", "Rías Baixas", "vin blanc espagnol"],
  },
  assyrtiko: {
    flavourNotes: ["lime", "fruit de la passion", "cire d’abeille", "silex", "salinité"],
    chipPairings: ["croustilles nature salées", "croustilles kettle"],
    whyChipsWork: "Sa fraîcheur extrême et son intensité minérale adorent le croustillant salé.",
    expectation: "Tranchant, volcanique, minéral, avec une fraîcheur presque mordante.",
    lcboSearchTerms: ["Assyrtiko", "vin de Santorin", "vin blanc grec"],
  },
  "gruner-veltliner": {
    flavourNotes: ["carambole", "groseille à maquereau", "haricot vert", "poivre blanc", "gravier concassé"],
    chipPairings: ["croustilles salées", "croustilles de légumes"],
    whyChipsWork: "Sa fraîcheur poivrée garde les grignotines salées et végétales bien vivantes.",
    expectation: "Vif, poivré, citronné, et discrètement l’un des blancs les plus faciles à accorder.",
    lcboSearchTerms: ["Grüner Veltliner", "Gruner Veltliner", "vin blanc autrichien"],
  },
  vermentino: {
    flavourNotes: ["lime", "pamplemousse", "pomme verte", "amande", "jonquille"],
    chipPairings: ["croustilles à l’huile d’olive", "craquelins aux herbes"],
    whyChipsWork: "Sa fraîcheur méditerranéenne et herbacée aime les grignotines salées et savoureuses.",
    expectation: "Solaire, herbacé, citronné, et facile à boire sans être banal.",
    lcboSearchTerms: ["Vermentino", "vin blanc de Sardaigne", "blanc côtier italien"],
  },
  sancerre: {
    flavourNotes: ["groseille à maquereau", "pamplemousse", "herbes fraîches", "silex", "fumée"],
    chipPairings: ["craquelins au fromage de chèvre", "croustilles sel et poivre"],
    whyChipsWork: "Les agrumes minéraux coupent magnifiquement les grignotines crémeuses et salées.",
    expectation: "Élégant, minéral, précis, avec toute l’énergie d’un Sauvignon Blanc tendu.",
    lcboSearchTerms: ["Sancerre", "Sauvignon Blanc de Loire", "Sauvignon Blanc français"],
  },
  "pinot-grigio": {
    flavourNotes: ["pêche blanche", "zeste de citron", "cantaloup", "amande verte", "gravier concassé"],
    chipPairings: ["croustilles classiques salées", "croustilles crème sure et oignon"],
    whyChipsWork: "Son fruit net et son corps léger l’aident à accompagner les snacks crémeux ou salés.",
    expectation: "Vif, simple, et merveilleusement sans complication.",
    lcboSearchTerms: ["Pinot Grigio", "Pinot Grigio italien", "Pinot Gris"],
  },
  riesling: {
    flavourNotes: ["lime", "pomme verte", "cire d’abeille", "jasmin", "pétrole"],
    chipPairings: ["croustilles épicées", "croustilles chili doux"],
    whyChipsWork: "Un peu de sucre calme le piquant pendant que l’acidité remet le palais à zéro.",
    expectation: "Un blanc électrique et fruité, parfois sec, parfois doucement sucré.",
    lcboSearchTerms: ["Riesling", "Riesling demi-sec", "Riesling allemand"],
  },
  gewurztraminer: {
    flavourNotes: ["litchi", "rose", "pamplemousse", "tangerine", "gingembre"],
    chipPairings: ["croustilles chili doux", "croustilles au cari"],
    whyChipsWork: "Le fruit parfumé joue très bien avec les épices chaudes et une pointe de douceur.",
    expectation: "Aromatique, ample, floral, et plus théâtral que le blanc moyen.",
    lcboSearchTerms: ["Gewürztraminer", "Gewurztraminer", "Gewürztraminer d’Alsace"],
  },
  chardonnay: {
    flavourNotes: ["pomme jaune", "vanille", "beurre"],
    chipPairings: ["croustilles au cheddar", "maïs soufflé beurré"],
    whyChipsWork: "La texture crémeuse et le fruit rond répondent aux saveurs beurrées et fromagées.",
    expectation: "Rond, réconfortant, parfois crémeux, parfois net selon la bouteille.",
    lcboSearchTerms: ["Chardonnay", "Chardonnay non boisé", "Bourgogne blanc"],
  },
  "chenin-blanc": {
    flavourNotes: ["coing", "pomme jaune", "poire", "camomille", "miel"],
    chipPairings: ["croustilles salées", "craquelins au fromage de chèvre"],
    whyChipsWork: "La haute acidité et la texture cireuse rendent les snacks salés ronds et frais.",
    expectation: "Acidulé, texturé, et plus complexe qu’il n’en a l’air.",
    lcboSearchTerms: ["Chenin Blanc", "Vouvray", "Chenin sud-africain"],
  },
  rose: {
    flavourNotes: ["fraise", "melon d’eau", "écorce d’orange"],
    chipPairings: ["croustilles all dressed", "croustilles nature salées"],
    whyChipsWork: "Son fruit rouge vif est assez flexible pour les assaisonnements salés et mélangés.",
    expectation: "Frais, rose, sec, et pratiquement fait pour grignoter sans cérémonie.",
    lcboSearchTerms: ["rosé sec", "rosé de Provence", "rosé ontarien"],
  },
  "provence-rose": {
    flavourNotes: ["fraise", "melon miel", "pétale de rose", "céleri", "melon d’eau"],
    chipPairings: ["croustilles au sel de mer", "craquelins aux herbes"],
    whyChipsWork: "La légèreté sèche et citronnée rend les snacks salés et herbacés propres et estivaux.",
    expectation: "Pâle, sec, vif, très “terrasse ensoleillée” comme style de rosé.",
    lcboSearchTerms: ["rosé de Provence", "rosé pâle sec", "rosé français"],
  },
  "sparkling-rose": {
    flavourNotes: ["framboise", "pamplemousse rose", "brioche"],
    chipPairings: ["croustilles kettle", "bouchées de poulet frit"],
    whyChipsWork: "Les bulles nettoient le sel et le gras pendant que le fruit rouge garde le tout ludique.",
    expectation: "Vif, pétillant, rose, et instantanément plus festif que prévu.",
    lcboSearchTerms: ["rosé mousseux", "cava rosé", "vin mousseux rosé"],
  },
  "chillable-deep-rose": {
    flavourNotes: ["grenade", "orange sanguine", "herbes séchées"],
    chipPairings: ["croustilles au paprika", "croustillants bruschetta tomate"],
    whyChipsWork: "Plus de couleur et de matière supportent la tomate et le paprika tout en restant frais.",
    expectation: "Plus foncé, plus juteux, et plus fait pour la table qu’un rosé pâle classique.",
    lcboSearchTerms: ["clarete", "rosé foncé", "rosé espagnol"],
  },
  "gamay-beaujolais": {
    flavourNotes: ["grenade", "ronce de mûre", "violette", "terreau", "pivoine"],
    chipPairings: ["croustilles ketchup", "bretzels salés"],
    whyChipsWork: "Le fruit rouge juteux et les tanins bas font ressortir les assaisonnements tomate-sucrés.",
    expectation: "Un rouge à rafraîchir, plein de cerise juteuse et sans prise de tête.",
    lcboSearchTerms: ["Beaujolais", "Gamay", "Beaujolais Villages"],
  },
  "lambrusco-amabile": {
    flavourNotes: ["cerise noire", "violette", "cola"],
    chipPairings: ["croustilles épicées", "croustillants de prosciutto"],
    whyChipsWork: "Les bulles rouges douces calment les épices et adorent les snacks salés et savoureux.",
    expectation: "Un rouge doux légèrement pétillant, froid, juteux, et parfait pour une table de grignotines.",
    lcboSearchTerms: ["Lambrusco Amabile", "Lambrusco doux", "rouge doux mousseux"],
  },
  "sweet-red-blend": {
    flavourNotes: ["confiture de mûre", "vanille", "chocolat au lait"],
    chipPairings: ["croustilles nacho", "bretzels enrobés de chocolat"],
    whyChipsWork: "Le fruit confituré et les tanins doux rendent les snacks salés, fromagés et chocolatés faciles.",
    expectation: "Souple, sucré, très fruité, et fait pour ceux qui ne veulent pas un rouge sec.",
    lcboSearchTerms: ["assemblage rouge doux", "rouge sucré confituré", "Apothic red"],
  },
  "pinot-noir": {
    flavourNotes: ["framboise", "cerise", "champignon", "vanille", "hibiscus"],
    chipPairings: ["croustilles à la truffe", "croustillants de champignons"],
    whyChipsWork: "Les notes terreuses accrochent les snacks savoureux pendant que le corps léger reste élégant.",
    expectation: "Fruit rouge soyeux et lumineux, avec un murmure terreux.",
    lcboSearchTerms: ["Pinot Noir", "Bourgogne rouge", "Pinot Noir ontarien"],
  },
  sangiovese: {
    flavourNotes: ["cerise", "tomate rôtie", "balsamique doux", "origan", "espresso"],
    chipPairings: ["croustilles pizza", "craquelins tomate basilic"],
    whyChipsWork: "L’acidité tomate et les herbes rejoignent naturellement les snacks salés à l’italienne.",
    expectation: "Un rouge acidulé, savoureux, gourmand, avec un charme rustique.",
    lcboSearchTerms: ["Chianti", "Sangiovese", "vin rouge toscan"],
  },
  barbera: {
    flavourNotes: ["cerise acidulée", "réglisse", "mûre", "herbes séchées", "poivre noir"],
    chipPairings: ["croustilles barbecue", "croustilles ketchup"],
    whyChipsWork: "Sa haute acidité empêche les snacks fumés et sucrés de devenir lourds.",
    expectation: "Juteux, vibrant, fruit noir, et dangereusement facile à boire.",
    lcboSearchTerms: ["Barbera", "Barbera d’Asti", "vin rouge italien"],
  },
  "cabernet-franc": {
    flavourNotes: ["fraise", "framboise", "poivron", "gravier concassé", "piment"],
    chipPairings: ["croustilles barbecue", "craquelins aux herbes"],
    whyChipsWork: "Le côté herbacé et le fruit rouge empêchent les snacks fumés-sucrés d’être lourds.",
    expectation: "Un rouge moyen avec petits fruits, fraîcheur, et une petite touche verte.",
    lcboSearchTerms: ["Cabernet Franc", "Cabernet Franc de Loire", "Cabernet Franc ontarien"],
  },
  merlot: {
    flavourNotes: ["cerise", "chocolat", "prune", "feuille de laurier", "vanille"],
    chipPairings: ["croustilles barbecue", "craquelins au cheddar"],
    whyChipsWork: "Le fruit moelleux et les tanins modérés vont bien avec les snacks fumés et fromagés.",
    expectation: "Souple, pruné, réconfortant, sans devenir trop intense.",
    lcboSearchTerms: ["Merlot", "Bordeaux rive droite", "Merlot californien"],
  },
  malbec: {
    flavourNotes: ["prune rouge", "mûre", "vanille", "tabac doux", "cacao"],
    chipPairings: ["croustilles barbecue fumé", "croustilles steakhouse"],
    whyChipsWork: "Le fruit noir et sa structure se marient bien avec la fumée et les gros assaisonnements.",
    expectation: "Sombre, souple, généreux, avec une petite énergie feu de camp.",
    lcboSearchTerms: ["Malbec", "Malbec argentin", "Malbec de Mendoza"],
  },
  zinfandel: {
    flavourNotes: ["mûre", "fraise", "confiture de pêche", "cannelle", "tabac doux"],
    chipPairings: ["croustilles barbecue épicé", "croustilles nacho"],
    whyChipsWork: "Le fruit mûr adoucit les épices pendant que le corps suit les grosses saveurs.",
    expectation: "Gros, juteux, épicé, et absolument pas timide.",
    lcboSearchTerms: ["Zinfandel", "Zinfandel californien", "Primitivo"],
  },
  "syrah-shiraz": {
    flavourNotes: ["bleuet", "prune noire", "chocolat au lait", "tabac", "poivre vert"],
    chipPairings: ["croustilles au poivre noir", "croustilles paprika fumé"],
    whyChipsWork: "Le poivre et la fumée du vin rappellent le snack sans se perdre.",
    expectation: "Sombre, poivré, savoureux, et excellent pour une soirée canapé dramatique.",
    lcboSearchTerms: ["Syrah", "Shiraz", "Syrah du Rhône nord"],
  },
  "cabernet-sauvignon": {
    flavourNotes: ["cerise noire", "cassis", "cèdre", "épices de pâtisserie", "graphite"],
    chipPairings: ["croustilles style ribeye", "croustillants au cheddar vieilli"],
    whyChipsWork: "Les snacks gras et fromagés assouplissent les tanins et rendent le fruit noir plus velouté.",
    expectation: "Structuré, intense, et prêt pour quelqu’un qui veut un vrai gros rouge.",
    lcboSearchTerms: ["Cabernet Sauvignon", "Cabernet de Napa", "Cabernet Bordeaux"],
  },
  "cotes-du-rhone-gsm": {
    flavourNotes: ["framboise", "mûre", "romarin", "épices de pâtisserie", "lavande"],
    chipPairings: ["croustilles au romarin", "croustilles barbecue"],
    whyChipsWork: "Son profil herbacé et poivré accompagne très bien les assaisonnements savoureux et les grignotines salées.",
    expectation: "Rustique, souple, et parfait pour les soupers entre amis.",
    lcboSearchTerms: ["Côtes du Rhône", "Cotes du Rhone", "assemblage GSM"],
  },
  grenache: {
    flavourNotes: ["fraise compotée", "prune grillée", "cuir", "herbes séchées", "orange sanguine"],
    chipPairings: ["croustilles au paprika", "croustilles chili doux"],
    whyChipsWork: "Le fruit mûr et les épices flattent les assaisonnements fumés-sucrés.",
    expectation: "Chaud, juteux, épicé, et très facile à vivre.",
    lcboSearchTerms: ["Grenache", "Garnacha", "vin du Rhône sud"],
  },
  mourvedre: {
    flavourNotes: ["mûre", "poivre noir", "cacao", "tabac", "viande rôtie"],
    chipPairings: ["croustilles fumées", "croustillants de bœuf séché"],
    whyChipsWork: "Les saveurs fumées et savoureuses font écho aux notes riches et carnées.",
    expectation: "Sombre, terreux, animal, et profondément savoureux.",
    lcboSearchTerms: ["Mourvèdre", "Mourvedre", "Monastrell"],
  },
  "nero-davola": {
    flavourNotes: ["cerise noire", "prune noire", "réglisse", "tabac", "piment"],
    chipPairings: ["croustilles à l’ail", "croustilles barbecue"],
    whyChipsWork: "Le fruit noir et la richesse herbacée aiment les snacks savoureux et costauds.",
    expectation: "Rouge sicilien corsé, avec fruit noir et chaleur méditerranéenne.",
    lcboSearchTerms: ["Nero d’Avola", "Nero d'Avola", "vin rouge sicilien"],
  },
  carmenere: {
    flavourNotes: ["framboise", "poivron", "prune noire", "vanille", "paprika"],
    chipPairings: ["croustilles jalapeño", "croustilles barbecue"],
    whyChipsWork: "Les contours poivrés et herbacés s’accordent naturellement aux snacks fumés et épicés.",
    expectation: "Fruit noir souple avec une personnalité un peu verte et épicée.",
    lcboSearchTerms: ["Carménère", "Carmenere", "vin rouge chilien"],
  },
  "tempranillo-rioja": {
    flavourNotes: ["cerise", "figue séchée", "cèdre", "tabac", "aneth"],
    chipPairings: ["croustilles au paprika", "croustilles style jambon"],
    whyChipsWork: "Le chêne savoureux et la cerise flattent le paprika fumé et les saveurs de charcuterie.",
    expectation: "Poli, savoureux, et réconfortant sans devenir lourd.",
    lcboSearchTerms: ["Rioja", "Tempranillo", "vin rouge espagnol"],
  },
  "montepulciano-dabruzzo": {
    flavourNotes: ["prune rouge", "mûre", "thym séché", "épices de pâtisserie", "mesquite"],
    chipPairings: ["croustilles pizza", "croustillants pain à l’ail"],
    whyChipsWork: "Le fruit rouge italien et les herbes font chanter tomate, ail et fromage.",
    expectation: "Rouge facile, fruité et savoureux, parfait avec un souper de semaine.",
    lcboSearchTerms: ["Montepulciano d’Abruzzo", "Montepulciano d'Abruzzo", "vin Montepulciano"],
  },
  nebbiolo: {
    flavourNotes: ["cerise", "rose", "cuir", "anis", "pot d’argile"],
    chipPairings: ["croustillants au fromage vieilli", "croustilles aux porcini"],
    whyChipsWork: "Le sel et l’umami aident à dompter les tanins pendant que les notes florales restent marquantes.",
    expectation: "Élégant mais accrocheur, avec roses, cerises et structure sérieuse.",
    lcboSearchTerms: ["Nebbiolo", "Barolo", "Barbaresco"],
  },
  xinomavro: {
    flavourNotes: ["framboise", "sauce aux prunes", "anis", "quatre-épices", "tabac"],
    chipPairings: ["croustilles aux olives", "croustilles à la truffe"],
    whyChipsWork: "Les snacks salés et savoureux assouplissent les tanins en rejoignant sa complexité terreuse.",
    expectation: "Un rouge grec puissant et savoureux, avec acidité tranchante et vraie structure.",
    lcboSearchTerms: ["Xinomavro", "vin rouge grec", "vin de Naoussa"],
  },
  aglianico: {
    flavourNotes: ["poivre blanc", "cerise noire", "fumée", "gibier", "prune épicée"],
    chipPairings: ["croustilles fumées", "croustillants au fromage vieilli"],
    whyChipsWork: "Les gros tanins et la profondeur fumée ont besoin de snacks salés et gras.",
    expectation: "Sombre, volcanique, structuré, et fait pour boire lentement.",
    lcboSearchTerms: ["Aglianico", "Taurasi", "vin rouge du sud de l’Italie"],
  },
  tannat: {
    flavourNotes: ["cassis", "prune", "réglisse", "fumée", "cardamome"],
    chipPairings: ["croustilles steakhouse", "croustilles au poivre"],
    whyChipsWork: "Les tanins massifs demandent des snacks riches et salés pour trouver l’équilibre.",
    expectation: "Énorme, musclé, profondément structuré, pour les envies de grosses saveurs.",
    lcboSearchTerms: ["Tannat", "vin rouge uruguayen", "vin de Madiran"],
  },
  furmint: {
    flavourNotes: ["citron meyer", "pomme verte", "gingembre", "fumée", "poivron vert"],
    chipPairings: ["croustilles sel et vinaigre", "croustilles crème sure"],
    whyChipsWork: "L’acidité laser traverse les snacks crémeux et fait briller les croustilles acidulées.",
    expectation: "Pointu, minéral, très frais, et vraiment gratifiant.",
    lcboSearchTerms: ["Furmint", "Furmint sec", "vin blanc hongrois"],
  },
  moscato: {
    flavourNotes: ["fleur d’oranger", "citron meyer", "mandarine", "poire", "chèvrefeuille"],
    chipPairings: ["croustilles épicées", "croustillants cannelle-sucre"],
    whyChipsWork: "Les bulles sucrées calment les épices et transforment les snacks salés en plaisir quasi dessert.",
    expectation: "Faible en alcool, doux, légèrement pétillant, et pur bonheur fruité.",
    lcboSearchTerms: ["Moscato d’Asti", "Moscato d'Asti", "vin mousseux doux"],
  },
  brachetto: {
    flavourNotes: ["fraise confite", "zeste d’orange", "cassis", "abricot", "crème"],
    chipPairings: ["bretzels au chocolat noir", "croustilles kettle aux petits fruits"],
    whyChipsWork: "Les bulles rouges douces adorent le croquant salé et les touches chocolatées.",
    expectation: "Un rouge dessert légèrement pétillant qui goûte les baies avec un clin d’œil.",
    lcboSearchTerms: ["Brachetto", "Brachetto d’Acqui", "rouge doux mousseux"],
  },
  port: {
    flavourNotes: ["prune", "cerise séchée", "chocolat", "raisin sec", "cannelle"],
    chipPairings: ["croustilles au fromage bleu", "amandes au chocolat noir"],
    whyChipsWork: "La grande douceur et la richesse demandent un contraste salé, puissant ou amer.",
    expectation: "Doux, fort, velouté, et fait pour de tout petits verres.",
    lcboSearchTerms: ["Porto", "Porto Ruby", "Porto Tawny"],
  },
  "dry-sherry": {
    flavourNotes: ["jacquier", "salinité", "citron confit", "noix du Brésil", "amande"],
    chipPairings: ["amandes marcona", "croustilles nature salées"],
    whyChipsWork: "Les snacks salés et noisettés rappellent le côté savoureux et vif du vin.",
    expectation: "Très sec, salin, noisetté, et glorieusement fait pour grignoter.",
    lcboSearchTerms: ["Fino Sherry", "Manzanilla Sherry", "Sherry sec"],
  },
  champagne: {
    flavourNotes: ["agrumes", "pomme jaune", "crème", "amande", "pain grillé"],
    chipPairings: ["croustilles nature", "poulet frit"],
    whyChipsWork: "Les bulles et l’acidité nettoient le gras et le sel de la meilleure façon.",
    expectation: "Bulles vives, grillées, élégantes, qui rendent tout immédiatement festif.",
    lcboSearchTerms: ["Champagne", "Champagne Brut", "vin mousseux français"],
  },
  cava: {
    flavourNotes: ["coing", "lime", "pomme jaune", "camomille", "amande"],
    chipPairings: ["croustilles salées", "maïs soufflé"],
    whyChipsWork: "Les bulles sèches et la fraîcheur citronnée rendent les snacks salés dangereusement addictifs.",
    expectation: "Bulles espagnoles abordables, fraîches, avec une touche grillée discrète.",
    lcboSearchTerms: ["Cava", "vin mousseux espagnol", "Cava Brut"],
  },
  prosecco: {
    flavourNotes: ["pomme verte", "melon miel", "poire", "lager", "crème"],
    chipPairings: ["croustilles nature", "croustilles chili doux"],
    whyChipsWork: "Les bulles fruitées et souples vont facilement avec les snacks salés et légèrement sucrés.",
    expectation: "Mousseux léger, amical, fruité, fait pour boire sans se compliquer.",
    lcboSearchTerms: ["Prosecco", "vin mousseux italien", "Prosecco extra dry"],
  },
  "orange-wine": {
    flavourNotes: ["pomme meurtrie", "jacquier", "huile de lin", "genièvre", "miel"],
    chipPairings: ["croustilles au cari", "noix épicées"],
    whyChipsWork: "La texture tannique et le côté funky aiment les snacks très épicés.",
    expectation: "Blanc texturé, accrocheur et funky, fait avec contact pelliculaire façon vin rouge.",
    lcboSearchTerms: ["vin orange", "vin de macération", "vin ambré"],
  },
} satisfies Partial<Record<WineId, WineTranslation>>;

export function localizeWine<T extends Wine>(wine: T, language: Language): T {
  if (language === "en") {
    return wine;
  }

  const translation =
    wine.id in wineTranslations
      ? wineTranslations[wine.id as keyof typeof wineTranslations]
      : undefined;

  if (!translation && typeof window !== "undefined" && window.location.hostname === "localhost") {
    console.warn(`Missing French translation for wine id: ${wine.id}`);
  }

  return translation ? ({ ...wine, ...translation } as T) : wine;
}

export function localizeWines<T extends Wine>(wines: T[], language: Language): T[] {
  return wines.map((wine) => localizeWine(wine, language));
}

export function localizeScoredWines(wines: ScoredWine[], language: Language): ScoredWine[] {
  return wines.map((wine) => localizeWine(wine, language));
}
