import type { WineId } from "./wines";

export type WineGuideRegion = {
  label: string;
  expect: string;
  searchTerms: string[];
};

export type WineGuide = {
  summary: string;
  whatItIs: string;
  whereToLook: string;
  regions: WineGuideRegion[];
  buyingTip: string;
  sourceUrls: string[];
};

function guide({
  summary,
  whatItIs,
  whereToLook,
  regions,
  buyingTip,
}: Omit<WineGuide, "sourceUrls">): WineGuide {
  return { summary, whatItIs, whereToLook, regions, buyingTip, sourceUrls: [] };
}

export const wineGuidesByWineId = {
  "vinho-verde": guide({
    summary: "Light, citrusy, sometimes gently spritzy, and made for easy refreshing pours.",
    whatItIs:
      "Vinho Verde is a northern Portuguese wine region, not one grape. Most bottles are crisp white blends from local grapes like Loureiro, Alvarinho, Arinto, Avesso, Azal, and Trajadura.",
    whereToLook:
      "Search Vinho Verde, Portugal white wine, Loureiro, Alvarinho, or low alcohol white.",
    regions: [
      { label: "Portugal - Vinho Verde", expect: "Lean, lemony, green-apple fresh, floral, and sometimes lightly fizzy.", searchTerms: ["Vinho Verde", "Loureiro"] },
      { label: "Moncao e Melgaco", expect: "Alvarinho-led bottles with more peach, citrus oil, body, and texture.", searchTerms: ["Alvarinho", "Moncao Melgaco"] },
      { label: "Lima / Cavado / Ave", expect: "Often floral and grapefruit-bright, especially when Loureiro is involved.", searchTerms: ["Loureiro Vinho Verde"] },
    ],
    buyingTip: "Basic Vinho Verde is the party move; single-grape Alvarinho or Loureiro is the more serious upgrade.",
  }),
  "sauvignon-blanc": guide({
    summary: "A sharp, aromatic white with citrus, herbs, tropical fruit, and a bright finish.",
    whatItIs:
      "Sauvignon Blanc is a white grape that swings from grassy and mineral in cool places to peachy and tropical in warmer ones.",
    whereToLook: "Search Sauvignon Blanc, New Zealand Sauvignon Blanc, Loire Sauvignon, Sancerre, or Chile Sauvignon.",
    regions: [
      { label: "New Zealand - Marlborough", expect: "Loud passion fruit, grapefruit, gooseberry, lime, and green herbal snap.", searchTerms: ["Marlborough Sauvignon Blanc"] },
      { label: "France - Loire", expect: "More mineral and restrained, with citrus, flint, grass, and white flowers.", searchTerms: ["Sancerre", "Pouilly-Fume"] },
      { label: "Chile / California", expect: "Chile is fresh and herbal; California tends fuller with melon, peach, and sometimes oak.", searchTerms: ["Chile Sauvignon Blanc", "Fume Blanc"] },
    ],
    buyingTip: "Choose New Zealand for maximum volume; choose Loire or Sancerre for mineral elegance.",
  }),
  albarino: guide({
    summary: "A coastal white with citrus, peachy fruit, high acidity, and a salty edge.",
    whatItIs:
      "Albarino is an Atlantic white grape from Spain and Portugal. In Portugal, it is usually called Alvarinho.",
    whereToLook: "Search Albarino, Rias Baixas, Alvarinho, Spanish white wine, or Vinho Verde Alvarinho.",
    regions: [
      { label: "Spain - Rias Baixas", expect: "Lime, grapefruit, nectarine, saline minerality, and seafood-ready acidity.", searchTerms: ["Rias Baixas", "Albarino"] },
      { label: "Portugal - Moncao e Melgaco", expect: "Richer Alvarinho with peach, citrus oil, flowers, and more body.", searchTerms: ["Alvarinho", "Moncao Melgaco"] },
      { label: "New World", expect: "Usually fruitier and rounder, with peach, melon, and citrus.", searchTerms: ["California Albarino", "Oregon Albarino"] },
    ],
    buyingTip: "For the textbook bottle, start with Rias Baixas Albarino.",
  }),
  assyrtiko: guide({
    summary: "A razor-bright Greek white with lemon, salt, mineral smoke, and serious acidity.",
    whatItIs:
      "Assyrtiko is Greece's famous high-acid white grape, especially tied to Santorini and volcanic soils.",
    whereToLook: "Search Assyrtiko, Santorini wine, Greek white wine, or PDO Santorini.",
    regions: [
      { label: "Greece - Santorini", expect: "Very dry, saline, lemony, smoky-mineral, and intense.", searchTerms: ["Santorini Assyrtiko"] },
      { label: "Greece - Mainland", expect: "Still crisp, but often fruitier and less volcanic.", searchTerms: ["Greek Assyrtiko"] },
      { label: "New World", expect: "Emerging versions with lime, green apple, salt, and clean freshness.", searchTerms: ["Australian Assyrtiko"] },
    ],
    buyingTip: "Santorini costs more, but it is the clearest expression of the grape.",
  }),
  "gruner-veltliner": guide({
    summary: "A crisp Austrian white with citrus, green notes, white pepper, and food-pairing power.",
    whatItIs:
      "Gruner Veltliner is Austria's signature white grape. It can be feather-light and zippy or richer and more textured.",
    whereToLook: "Search Gruner Veltliner, Austrian white wine, Kamptal, Kremstal, or Wachau.",
    regions: [
      { label: "Austria - Weinviertel", expect: "Bright, affordable lime, green apple, white pepper, and light body.", searchTerms: ["Weinviertel Gruner"] },
      { label: "Austria - Kamptal / Kremstal", expect: "More precise citrus, herbs, pepper, minerality, and medium body.", searchTerms: ["Kamptal Gruner", "Kremstal Gruner"] },
      { label: "Austria - Wachau", expect: "Richer and more serious, with stone fruit, texture, pepper, and a long finish.", searchTerms: ["Wachau Gruner"] },
    ],
    buyingTip: "Casual Gruner is great for snacks; Kamptal, Kremstal, or Wachau feels more dinner-worthy.",
  }),
  vermentino: guide({
    summary: "A sunny Mediterranean white with citrus, herbs, almond, and salty freshness.",
    whatItIs:
      "Vermentino is a coastal white grape found in Italy and southern France, where it can also be called Rolle.",
    whereToLook: "Search Vermentino, Sardinia white wine, Vermentino di Sardegna, Liguria white, or Rolle.",
    regions: [
      { label: "Italy - Sardinia", expect: "Salty, citrusy, herbal, and often a little more textured.", searchTerms: ["Vermentino di Sardegna"] },
      { label: "Italy - Liguria / Tuscany", expect: "Lean coastal lemon, green herbs, and mineral freshness.", searchTerms: ["Liguria Vermentino"] },
      { label: "France - Provence / Languedoc", expect: "Fresh, floral, herbal whites, often under the Rolle name.", searchTerms: ["Rolle wine", "Provence white"] },
    ],
    buyingTip: "Sardinia is the easiest search for a classic salty coastal profile.",
  }),
  sancerre: guide({
    summary: "Elegant Loire Sauvignon Blanc with citrus, herbs, flint, and a clean mineral finish.",
    whatItIs:
      "Sancerre is a Loire Valley appellation, usually white Sauvignon Blanc. The label is about place more than grape name.",
    whereToLook: "Search Sancerre, Loire Sauvignon Blanc, French Sauvignon Blanc, or Centre-Loire.",
    regions: [
      { label: "France - Sancerre", expect: "Flinty, citrusy, grassy, precise, and very dry.", searchTerms: ["Sancerre"] },
      { label: "France - Pouilly-Fume", expect: "A close cousin with smoky mineral notes and citrus-herbal freshness.", searchTerms: ["Pouilly-Fume"] },
      { label: "France - Touraine", expect: "More affordable Loire Sauvignon with fruitier citrus and herbs.", searchTerms: ["Touraine Sauvignon"] },
    ],
    buyingTip: "If Sancerre is pricey, Touraine Sauvignon often scratches the same itch.",
  }),
  "pinot-grigio": guide({
    summary: "A light, crisp, easy white with lemon, pear, melon, and refreshing simplicity.",
    whatItIs:
      "Pinot Grigio and Pinot Gris are the same grape. Italian Grigio is usually crisp; Alsace Gris is often richer.",
    whereToLook: "Search Pinot Grigio, Pinot Gris, Italian Pinot Grigio, Veneto Pinot Grigio, or Alsace Pinot Gris.",
    regions: [
      { label: "Italy - Veneto / Friuli", expect: "Light, crisp, lemony, pear-like, and very easy drinking.", searchTerms: ["Italian Pinot Grigio"] },
      { label: "France - Alsace", expect: "Richer Pinot Gris with spice, honeyed fruit, body, and sometimes sweetness.", searchTerms: ["Alsace Pinot Gris"] },
      { label: "Oregon / Ontario", expect: "Pear, apple, citrus, medium body, and clean acidity.", searchTerms: ["Oregon Pinot Gris", "Ontario Pinot Gris"] },
    ],
    buyingTip: "Choose Italian Pinot Grigio for crisp safety; choose Alsace Pinot Gris for richer texture.",
  }),
  riesling: guide({
    summary: "Electric acidity, lime, peach, flowers, and sometimes a touch of sweetness.",
    whatItIs:
      "Riesling is a high-acid aromatic grape that can be dry, off-dry, sweet, still, or sparkling.",
    whereToLook: "Search Riesling, German Riesling, off-dry Riesling, dry Riesling, Ontario Riesling, or Alsace Riesling.",
    regions: [
      { label: "Germany - Mosel", expect: "Light, floral, limey, peachy, often lower alcohol and off-dry.", searchTerms: ["Mosel Riesling"] },
      { label: "France - Alsace", expect: "Usually dry, fuller, citrusy, mineral, and structured.", searchTerms: ["Alsace Riesling"] },
      { label: "Ontario / Australia", expect: "Ontario is high-acid apple-citrus; Australia is bone-dry lime and mineral.", searchTerms: ["Ontario Riesling", "Clare Valley Riesling"] },
    ],
    buyingTip: "Check alcohol: lower ABV often means more sweetness; higher ABV usually means drier.",
  }),
  gewurztraminer: guide({
    summary: "A dramatic aromatic white with lychee, rose, ginger, spice, and plush texture.",
    whatItIs:
      "Gewurztraminer is a highly aromatic white grape. It is usually fuller and lower-acid than many crisp whites.",
    whereToLook: "Search Gewurztraminer, Alsace Gewurztraminer, or aromatic white wine.",
    regions: [
      { label: "France - Alsace", expect: "Rose, lychee, ginger, spice, fuller body, sometimes off-dry.", searchTerms: ["Alsace Gewurztraminer"] },
      { label: "Germany / Austria", expect: "Spicy and floral, sometimes a little leaner.", searchTerms: ["German Gewurztraminer"] },
      { label: "Canada / New Zealand", expect: "Fruitier and approachable with lychee, peach, rose, and soft acidity.", searchTerms: ["Ontario Gewurztraminer"] },
    ],
    buyingTip: "Excellent with spicy snacks, curry chips, and aromatic cheeses.",
  }),
  chardonnay: guide({
    summary: "The shape-shifter: crisp and mineral in one bottle, buttery and creamy in another.",
    whatItIs:
      "Chardonnay is an adaptable white grape. Oak and malolactic fermentation can make it creamy, buttery, and vanilla-like.",
    whereToLook: "Search Chardonnay, unoaked Chardonnay, Chablis, white Burgundy, California Chardonnay, or Ontario Chardonnay.",
    regions: [
      { label: "France - Chablis", expect: "Lean, lemony, mineral, high-acid, and usually not obviously oaky.", searchTerms: ["Chablis", "unoaked Chardonnay"] },
      { label: "France - Burgundy", expect: "Layered citrus, apple, hazelnut, cream, mineral, and sometimes oak.", searchTerms: ["White Burgundy"] },
      { label: "California / Ontario", expect: "California often gets richer; Ontario can range from crisp to creamy.", searchTerms: ["California Chardonnay", "Ontario Chardonnay"] },
    ],
    buyingTip: "Search unoaked if you dislike butter and vanilla.",
  }),
  "chenin-blanc": guide({
    summary: "A high-acid white with apple, quince, honey, chamomile, and texture.",
    whatItIs:
      "Chenin Blanc is a versatile grape that can be dry, off-dry, sparkling, or sweet.",
    whereToLook: "Search Chenin Blanc, Vouvray, Savennieres, South African Chenin, or Loire white.",
    regions: [
      { label: "France - Vouvray", expect: "Apple, quince, honey, flowers, high acidity; dryness varies.", searchTerms: ["Vouvray"] },
      { label: "France - Savennieres", expect: "Dry, structured, mineral, waxy, serious, and more savory.", searchTerms: ["Savennieres"] },
      { label: "South Africa", expect: "Often great value with apple, pear, tropical fruit, honey, and acidity.", searchTerms: ["South African Chenin"] },
    ],
    buyingTip: "Read the back label if you need dry; Chenin can cover the whole sweetness map.",
  }),
  rose: guide({
    summary: "Pink wine that can be dry, fruity, crisp, juicy, pale, deep, still, or sparkling.",
    whatItIs:
      "Rose is a style, not one grape. It usually comes from red grapes with short skin contact for color without full red-wine tannin.",
    whereToLook: "Search dry rose, Provence rose, Ontario rose, Spanish rosado, Italian rosato, or sparkling rose.",
    regions: [
      { label: "France - Provence", expect: "Pale, dry, crisp, delicate strawberry, melon, citrus, and herbs.", searchTerms: ["Provence rose"] },
      { label: "Spain - Rosado", expect: "Often deeper, fruitier, more savory, and food-friendly.", searchTerms: ["Spanish rosado"] },
      { label: "Italy / Ontario", expect: "Italy can be cherry-orange and savory; Ontario is fresh and patio-friendly.", searchTerms: ["Italian rosato", "Ontario rose"] },
    ],
    buyingTip: "For dry and crisp, choose Provence-style; for food, try Spanish or Italian rose.",
  }),
  "provence-rose": guide({
    summary: "Pale, dry, crisp rose with subtle strawberry, melon, citrus, herbs, and patio energy.",
    whatItIs:
      "Provence-style rose usually means pale, dry southern French rose made from grapes like Grenache, Cinsault, Syrah, Mourvedre, and Rolle.",
    whereToLook: "Search Provence rose, Cotes de Provence, pale dry rose, French rose, or Mediterranee rose.",
    regions: [
      { label: "France - Cotes de Provence", expect: "Pale, delicate, dry, citrusy, herbal, and refreshing.", searchTerms: ["Cotes de Provence rose"] },
      { label: "France - Bandol Rose", expect: "More structured and savory, often with Mourvedre depth.", searchTerms: ["Bandol rose"] },
      { label: "New World Provence-style", expect: "Similar pale crisp shape, often a bit fruitier and more direct.", searchTerms: ["pale dry rose"] },
    ],
    buyingTip: "For the classic pale dry style, search Cotes de Provence first.",
  }),
  "sparkling-rose": guide({
    summary: "Bubbly, pink, bright, and festive, with berry fruit plus crisp acidity.",
    whatItIs:
      "Sparkling rose is a style made in many regions, from Champagne-method bottles to Cava, Prosecco rose, Cremant, and simple tank-method bubbles.",
    whereToLook: "Search sparkling rose, rose Cava, pink sparkling wine, Cremant rose, or Prosecco rose.",
    regions: [
      { label: "France - Champagne Rose", expect: "Red berries, citrus, toast, cream, fine bubbles, and a higher price.", searchTerms: ["rose Champagne"] },
      { label: "Spain - Cava Rosado", expect: "Dry, crisp, affordable, berry-fruited, and snack-friendly.", searchTerms: ["rose Cava"] },
      { label: "Italy / France", expect: "Prosecco rose is soft and fruity; Cremant rose is crisp with pastry notes.", searchTerms: ["Prosecco rose", "Cremant rose"] },
    ],
    buyingTip: "For value, try rose Cava or Cremant before Champagne rose.",
  }),
  "chillable-deep-rose": guide({
    summary: "Darker, juicier rose that drinks halfway between rose and a light chillable red.",
    whatItIs:
      "Deep rose or clarete has more color, fruit, and sometimes more grip than pale rose.",
    whereToLook: "Search clarete, deep rose, Spanish rosado, dark rose, Tavel, or rosato.",
    regions: [
      { label: "Spain - Clarete / Rosado", expect: "Pomegranate, blood orange, herbs, color, bite, and food-flexibility.", searchTerms: ["clarete", "Spanish rosado"] },
      { label: "France - Tavel", expect: "Fuller southern French rose with red fruit, spice, and light grip.", searchTerms: ["Tavel rose"] },
      { label: "Italy - Cerasuolo / Rosato", expect: "Cherry, orange zest, savory notes, deeper color, and structure.", searchTerms: ["Cerasuolo d'Abruzzo"] },
    ],
    buyingTip: "Serve it cool like a light red, not ice cold.",
  }),
  "gamay-beaujolais": guide({
    summary: "A juicy, chillable red with red fruit, flowers, low tannin, and easy drinking.",
    whatItIs:
      "Gamay is the grape; Beaujolais is the famous French region. It is usually light, fruity, and great slightly chilled.",
    whereToLook: "Search Beaujolais, Gamay, Beaujolais-Villages, Cru Beaujolais, or Ontario Gamay.",
    regions: [
      { label: "France - Beaujolais / Villages", expect: "Fresh cherry, raspberry, violet, low tannin, and chillable ease.", searchTerms: ["Beaujolais-Villages"] },
      { label: "France - Cru Beaujolais", expect: "Morgon is deeper, Fleurie is floral, Moulin-a-Vent is fuller.", searchTerms: ["Cru Beaujolais", "Morgon"] },
      { label: "Ontario", expect: "Bright cherry-cranberry fruit, good acidity, and often great value.", searchTerms: ["Ontario Gamay"] },
    ],
    buyingTip: "Beaujolais-Villages is great for parties; Morgon or Moulin-a-Vent adds depth.",
  }),
  "lambrusco-amabile": guide({
    summary: "A lightly sweet fizzy red from Italy that loves salty snacks and cured meats.",
    whatItIs:
      "Lambrusco is a family of red sparkling wines from Emilia-Romagna. Amabile means gently sweet.",
    whereToLook: "Search Lambrusco Amabile, sweet Lambrusco, sparkling sweet red, or Emilia-Romagna Lambrusco.",
    regions: [
      { label: "Italy - Emilia-Romagna", expect: "Black cherry, violet, cola, refreshing acidity, and sweetness depending on label.", searchTerms: ["Lambrusco Amabile"] },
      { label: "Lambrusco di Sorbara", expect: "Lighter, floral, brighter, often drier and more delicate.", searchTerms: ["Lambrusco di Sorbara"] },
      { label: "Lambrusco Grasparossa", expect: "Darker, fruitier, more purple, and better with richer snacks.", searchTerms: ["Lambrusco Grasparossa"] },
    ],
    buyingTip: "Pick Amabile for sweet-fruity fizz; pick Secco for a drier savory style.",
  }),
  "sweet-red-blend": guide({
    summary: "Soft, sweet, jammy red wine for people who do not want a dry red.",
    whatItIs:
      "Sweet red blend is a modern commercial style rather than one grape or protected region.",
    whereToLook: "Search sweet red blend, jammy sweet red, Apothic red, semi-sweet red, or smooth red blend.",
    regions: [
      { label: "California", expect: "Jammy blackberry, vanilla, chocolate, soft tannin, and easy sweetness.", searchTerms: ["California sweet red blend"] },
      { label: "Ontario / Canada", expect: "Often lighter but still soft, fruity, and approachable.", searchTerms: ["Ontario sweet red"] },
      { label: "International blends", expect: "Look for smooth, sweet, jammy, or soft on the label.", searchTerms: ["sweet red wine"] },
    ],
    buyingTip: "Search by sweetness words, not grape names.",
  }),
  "pinot-noir": guide({
    summary: "A silky lighter red with cherry, raspberry, flowers, earth, and low tannin.",
    whatItIs:
      "Pinot Noir is a delicate red grape famous in Burgundy and grown worldwide. It shows climate very clearly.",
    whereToLook: "Search Pinot Noir, Burgundy red, Bourgogne Rouge, Ontario Pinot Noir, Oregon Pinot Noir, or New Zealand Pinot Noir.",
    regions: [
      { label: "France - Burgundy", expect: "Earthy, elegant red cherry, mushroom, flowers, acidity, and subtle structure.", searchTerms: ["Bourgogne Pinot Noir"] },
      { label: "Oregon / Ontario", expect: "Cherry, cranberry, spice, earth, freshness, and food-friendly balance.", searchTerms: ["Oregon Pinot Noir", "Ontario Pinot Noir"] },
      { label: "California / New Zealand", expect: "California is riper and plusher; New Zealand is bright with herbal edges.", searchTerms: ["California Pinot Noir", "New Zealand Pinot Noir"] },
    ],
    buyingTip: "Choose Burgundy or Ontario for earthy elegance; California for riper fruit.",
  }),
  sangiovese: guide({
    summary: "A tangy Italian red with cherry, tomato, herbs, leather, and food-loving acidity.",
    whatItIs:
      "Sangiovese is Tuscany's signature grape and the backbone of Chianti, Brunello, and many Tuscan reds.",
    whereToLook: "Search Chianti, Chianti Classico, Sangiovese, Tuscan red wine, Brunello, or Rosso di Montalcino.",
    regions: [
      { label: "Italy - Chianti Classico", expect: "Sour cherry, tomato leaf, herbs, acidity, and firm tannin.", searchTerms: ["Chianti Classico"] },
      { label: "Italy - Brunello", expect: "Deeper, darker cherry, leather, spice, structure, and age-worthiness.", searchTerms: ["Brunello"] },
      { label: "New World", expect: "Usually fruitier and softer with cherry and plum.", searchTerms: ["California Sangiovese"] },
    ],
    buyingTip: "Chianti Classico is the easy win for pizza and tomato snacks.",
  }),
  barbera: guide({
    summary: "A juicy northern Italian red with high acidity, low tannin, cherry, blackberry, and herbs.",
    whatItIs:
      "Barbera is a Piedmont red grape that gives lots of freshness and fruit without massive tannin.",
    whereToLook: "Search Barbera, Barbera d'Asti, Barbera d'Alba, or Piedmont red wine.",
    regions: [
      { label: "Italy - Barbera d'Asti", expect: "Bright tart cherry, blackberry, herbs, high acidity, and easy food pairing.", searchTerms: ["Barbera d'Asti"] },
      { label: "Italy - Barbera d'Alba", expect: "Often fuller and richer, sometimes with more oak.", searchTerms: ["Barbera d'Alba"] },
      { label: "New World", expect: "Riper fruit, rounder texture, and less sharp acidity.", searchTerms: ["California Barbera"] },
    ],
    buyingTip: "Choose Barbera when you want red-wine acidity without aggressive tannin.",
  }),
  "cabernet-franc": guide({
    summary: "A fresh medium red with raspberry, strawberry, herbs, bell pepper, and savory edges.",
    whatItIs:
      "Cabernet Franc is a parent of Cabernet Sauvignon and Merlot. Cool climates make it leafy and mineral; warmer ones make it richer.",
    whereToLook: "Search Cabernet Franc, Loire Cabernet Franc, Chinon, Bourgueil, Ontario Cabernet Franc, or Niagara Cabernet Franc.",
    regions: [
      { label: "France - Loire / Chinon", expect: "Raspberry, herbs, green pepper, graphite, light-medium body, and freshness.", searchTerms: ["Chinon"] },
      { label: "Ontario", expect: "Red fruit, herbs, pepper, sometimes oak spice, and food-friendly acidity.", searchTerms: ["Ontario Cabernet Franc"] },
      { label: "Bordeaux / blends", expect: "Adds perfume, freshness, and herbal complexity.", searchTerms: ["Bordeaux blend"] },
    ],
    buyingTip: "Great if you like red fruit and herbs more than heavy jam.",
  }),
  merlot: guide({
    summary: "A plush, plummy red with chocolate, cherry, soft texture, and cozy energy.",
    whatItIs:
      "Merlot is a major Bordeaux grape that can be soft and fruity or structured and serious.",
    whereToLook: "Search Merlot, Right Bank Bordeaux, Saint-Emilion, Pomerol, California Merlot, or Chile Merlot.",
    regions: [
      { label: "France - Right Bank Bordeaux", expect: "Plum, cherry, earth, cedar, graphite, and savory structure.", searchTerms: ["Saint-Emilion", "Pomerol"] },
      { label: "California / Washington", expect: "Riper, softer, fuller plum, chocolate, vanilla, and blackberry.", searchTerms: ["California Merlot"] },
      { label: "Chile", expect: "Good value plum and herbs, sometimes with a green peppery edge.", searchTerms: ["Chile Merlot"] },
    ],
    buyingTip: "For softness, choose California or Chile; for structure, look at Bordeaux blends.",
  }),
  malbec: guide({
    summary: "A dark, smooth red with plum, blackberry, cocoa, smoke, and steakhouse vibes.",
    whatItIs:
      "Malbec is originally French but became Argentina's signature red grape, especially in Mendoza.",
    whereToLook: "Search Malbec, Argentina Malbec, Mendoza Malbec, Cahors, or high altitude Malbec.",
    regions: [
      { label: "Argentina - Mendoza", expect: "Plush dark fruit, plum, cocoa, violet, soft tannin, and generous body.", searchTerms: ["Mendoza Malbec"] },
      { label: "Argentina - Uco Valley", expect: "Higher altitude freshness, flowers, mineral edge, and sharper fruit.", searchTerms: ["Uco Valley Malbec"] },
      { label: "France - Cahors", expect: "More rustic, tannic, earthy, leathery, and firm.", searchTerms: ["Cahors"] },
    ],
    buyingTip: "Mendoza is safest for crowds; Cahors is more rustic and nerdy.",
  }),
  zinfandel: guide({
    summary: "A big ripe red with blackberry, strawberry jam, cinnamon, and warm alcohol.",
    whatItIs:
      "Zinfandel is California's famous bold red grape. In Italy, the related grape is Primitivo.",
    whereToLook: "Search Zinfandel, California Zinfandel, old vine Zinfandel, Primitivo, or Puglia Primitivo.",
    regions: [
      { label: "California", expect: "Jammy blackberry, strawberry, spice, sweet tobacco, high alcohol, and body.", searchTerms: ["California Zinfandel"] },
      { label: "Italy - Puglia / Primitivo", expect: "Ripe dark fruit, spice, softer tannin, and rustic dried-fruit notes.", searchTerms: ["Primitivo"] },
      { label: "Lodi / Sonoma", expect: "Lodi is plush and ripe; Sonoma can be brighter and more structured.", searchTerms: ["Lodi Zinfandel", "Sonoma Zinfandel"] },
    ],
    buyingTip: "Old Vine often means richer fruit and more concentration.",
  }),
  "syrah-shiraz": guide({
    summary: "A dark, peppery, savory red with black fruit, smoke, meat, and spice.",
    whatItIs:
      "Syrah and Shiraz are the same grape. Syrah often signals savory Rhone style; Shiraz often signals richer Australian style.",
    whereToLook: "Search Syrah, Shiraz, Northern Rhone Syrah, Crozes-Hermitage, Australian Shiraz, or Barossa Shiraz.",
    regions: [
      { label: "France - Northern Rhone", expect: "Savory pepper, smoke, olive, meat, black fruit, and structure.", searchTerms: ["Crozes-Hermitage"] },
      { label: "Australia - Barossa / McLaren Vale", expect: "Richer blackberry, chocolate, eucalyptus, spice, full body, and alcohol.", searchTerms: ["Barossa Shiraz"] },
      { label: "Chile / South Africa / California", expect: "Dark, spicy, smoky, and often strong value.", searchTerms: ["Chile Syrah", "South African Syrah"] },
    ],
    buyingTip: "Choose Rhone Syrah for savory pepper; choose Shiraz for bigger fruit.",
  }),
  "cabernet-sauvignon": guide({
    summary: "A structured big red with black currant, black cherry, cedar, graphite, and firm tannin.",
    whatItIs:
      "Cabernet Sauvignon is one of the world's most planted reds. It loves warmth and often benefits from oak.",
    whereToLook: "Search Cabernet Sauvignon, Napa Cabernet, Bordeaux Cabernet, Chile Cabernet, Coonawarra Cabernet, or Cabernet blend.",
    regions: [
      { label: "Napa Valley", expect: "Powerful ripe black fruit, vanilla oak, full body, high alcohol, and plush tannin.", searchTerms: ["Napa Cabernet"] },
      { label: "Bordeaux - Left Bank", expect: "Cassis, cedar, graphite, tobacco, savory structure, and firm tannin.", searchTerms: ["Left Bank Bordeaux"] },
      { label: "Chile / Australia", expect: "Chile gives minty value; Australia often adds blackcurrant and eucalyptus.", searchTerms: ["Chile Cabernet", "Coonawarra Cabernet"] },
    ],
    buyingTip: "For steakhouse power, Napa or Chile; for old-school structure, Bordeaux.",
  }),
  "cotes-du-rhone-gsm": guide({
    summary: "A rustic southern French blend with red and black fruit, herbs, pepper, and dinner-party charm.",
    whatItIs:
      "GSM usually means Grenache, Syrah, and Mourvedre. Cotes du Rhone is a southern Rhone region where Grenache often leads.",
    whereToLook: "Search Cotes du Rhone, GSM blend, Grenache Syrah Mourvedre, Southern Rhone, or Rhone red.",
    regions: [
      { label: "France - Cotes du Rhone", expect: "Rustic herbs, pepper, red fruit, blackberry, medium-full body, and value.", searchTerms: ["Cotes du Rhone"] },
      { label: "France - Chateauneuf-du-Pape", expect: "More powerful ripe fruit, herbs, spice, alcohol, and earthy depth.", searchTerms: ["Chateauneuf-du-Pape"] },
      { label: "Australia / California GSM", expect: "Riper raspberry, blackberry, spice, and plush body.", searchTerms: ["GSM blend"] },
    ],
    buyingTip: "Cotes du Rhone is one of the safest LCBO value searches for red wine.",
  }),
  grenache: guide({
    summary: "A warm juicy red grape with raspberry, strawberry, spice, herbs, and generous alcohol.",
    whatItIs:
      "Grenache is called Garnacha in Spain. It often appears in blends but can be beautiful on its own.",
    whereToLook: "Search Grenache, Garnacha, Southern Rhone wine, Spanish Garnacha, or old vine Garnacha.",
    regions: [
      { label: "France - Southern Rhone", expect: "Raspberry, herbs, spice, warmth, usually blended with Syrah and Mourvedre.", searchTerms: ["Southern Rhone Grenache"] },
      { label: "Spain - Aragon / Priorat", expect: "Darker, mineral, spicy, powerful old-vine Garnacha.", searchTerms: ["Spanish Garnacha"] },
      { label: "Australia / California", expect: "Ripe strawberry, raspberry, spice, fuller body, and soft tannin.", searchTerms: ["California Grenache"] },
    ],
    buyingTip: "Search Garnacha for value; search Grenache for Rhone-style warmth.",
  }),
  mourvedre: guide({
    summary: "A dark, earthy, savory red with blackberry, pepper, tobacco, game, and firm tannin.",
    whatItIs:
      "Mourvedre is called Monastrell in Spain. It matters in Bandol, GSM blends, and intense single-varietal reds.",
    whereToLook: "Search Mourvedre, Monastrell, Bandol, Jumilla, or GSM blend.",
    regions: [
      { label: "France - Bandol", expect: "Serious earth, meat, dark fruit, structure, and age-worthy depth.", searchTerms: ["Bandol"] },
      { label: "Spain - Jumilla / Yecla", expect: "Riper, fruitier, darker Monastrell with strong value.", searchTerms: ["Monastrell", "Jumilla"] },
      { label: "Australia / California", expect: "Plum, spice, earth, body, and savory depth in Rhone-style blends.", searchTerms: ["Mourvedre", "GSM blend"] },
    ],
    buyingTip: "If Bandol is expensive, Jumilla Monastrell is the friendlier value lane.",
  }),
  "nero-davola": guide({
    summary: "A bold Sicilian red with black cherry, plum, licorice, herbs, and Mediterranean warmth.",
    whatItIs:
      "Nero d'Avola is Sicily's best-known red grape, ranging from rich and dark to fresher and floral.",
    whereToLook: "Search Nero d'Avola, Sicilian red wine, Sicilia DOC, or Italy red wine.",
    regions: [
      { label: "Sicily", expect: "Black cherry, plum, licorice, herbs, chocolate, warm finish.", searchTerms: ["Nero d'Avola"] },
      { label: "Vittoria / Cerasuolo di Vittoria", expect: "Blended with Frappato for a fresher, floral, cherry-driven style.", searchTerms: ["Cerasuolo di Vittoria"] },
      { label: "New World", expect: "Rare, but usually ripe, dark-fruited, and spicy.", searchTerms: ["Nero d'Avola"] },
    ],
    buyingTip: "For lighter Sicily, search Cerasuolo di Vittoria; for bold, search straight Nero d'Avola.",
  }),
  carmenere: guide({
    summary: "A smooth Chilean red with black fruit, bell pepper, paprika, herbs, and soft tannins.",
    whatItIs:
      "Carmenere is originally from Bordeaux but is now strongly linked with Chile.",
    whereToLook: "Search Carmenere, Chilean red wine, Chile Carmenere, or Colchagua Carmenere.",
    regions: [
      { label: "Chile - Colchagua / Rapel", expect: "Dark fruit, paprika, herbs, soft tannin, chocolate, and smoky spice.", searchTerms: ["Colchagua Carmenere"] },
      { label: "Chile - Maipo", expect: "Fresher and more structured with minty herbal notes.", searchTerms: ["Maipo Carmenere"] },
      { label: "Bordeaux / blends", expect: "Rare as a solo bottle; mostly historical or a tiny blending role.", searchTerms: ["Carmenere blend"] },
    ],
    buyingTip: "If you like peppery Cabernet Franc, Carmenere is the plush darker cousin.",
  }),
  "tempranillo-rioja": guide({
    summary: "A Spanish red with cherry, leather, tobacco, dill-vanilla oak, and savory structure.",
    whatItIs:
      "Tempranillo is Spain's key red grape. Rioja is the most famous region, often using Crianza, Reserva, and Gran Reserva aging categories.",
    whereToLook: "Search Rioja, Tempranillo, Ribera del Duero, Crianza, Reserva, or Spanish red wine.",
    regions: [
      { label: "Spain - Rioja", expect: "Cherry, leather, tobacco, dill, vanilla oak, and savory finish.", searchTerms: ["Rioja Reserva"] },
      { label: "Spain - Ribera del Duero", expect: "Darker, fuller blackberry, plum, oak, and firm tannin.", searchTerms: ["Ribera del Duero"] },
      { label: "Spain - Toro", expect: "Bigger, warmer, more alcoholic, and very intense.", searchTerms: ["Toro wine"] },
    ],
    buyingTip: "Crianza is great value; Reserva adds more oak-aged complexity.",
  }),
  "montepulciano-dabruzzo": guide({
    summary: "A rustic Italian red with plum, blackberry, herbs, baking spice, and a smoky edge.",
    whatItIs:
      "Montepulciano is a popular Italian red grape, most often seen as Montepulciano d'Abruzzo.",
    whereToLook: "Search Montepulciano d'Abruzzo, Abruzzo red, Montepulciano wine, or Italian red wine.",
    regions: [
      { label: "Italy - Abruzzo", expect: "Red plum, blackberry, dried thyme, baking spice, smoky-sweet finish.", searchTerms: ["Montepulciano d'Abruzzo"] },
      { label: "Riserva styles", expect: "More oak, darker fruit, spice, tannin, and richness.", searchTerms: ["Montepulciano d'Abruzzo Riserva"] },
      { label: "Value Italian reds", expect: "Savory, fruity, food-friendly, and excellent with pizza or tomato sauce.", searchTerms: ["Italian Montepulciano"] },
    ],
    buyingTip: "A great weeknight Italian red when you want fruit, herbs, and enough structure for pasta.",
  }),
  nebbiolo: guide({
    summary: "A pale-looking but powerful Italian red with rose, cherry, tar, leather, and huge tannin.",
    whatItIs:
      "Nebbiolo is Piedmont's great red grape, famous in Barolo and Barbaresco.",
    whereToLook: "Search Nebbiolo, Barolo, Barbaresco, Langhe Nebbiolo, or Piedmont red wine.",
    regions: [
      { label: "Italy - Barolo", expect: "Powerful tannin, rose, cherry, tar, licorice, leather, and age-worthiness.", searchTerms: ["Barolo"] },
      { label: "Italy - Barbaresco", expect: "Still serious, often a little more elegant and approachable.", searchTerms: ["Barbaresco"] },
      { label: "Italy - Langhe Nebbiolo", expect: "More affordable, earlier-drinking red fruit, roses, and lighter structure.", searchTerms: ["Langhe Nebbiolo"] },
    ],
    buyingTip: "Start with Langhe Nebbiolo before spending Barolo money.",
  }),
  xinomavro: guide({
    summary: "A Greek red with sour cherry, tomato, olive, herbs, high acid, and firm tannin.",
    whatItIs:
      "Xinomavro is a serious Greek red grape often compared to Nebbiolo for acidity, tannin, and savory complexity.",
    whereToLook: "Search Xinomavro, Greek red wine, Naoussa wine, or Amyndeon.",
    regions: [
      { label: "Greece - Naoussa", expect: "Structured sour cherry, tomato, olive, herbs, leather, and firm tannin.", searchTerms: ["Naoussa Xinomavro"] },
      { label: "Greece - Amyndeon", expect: "Cooler, fresher, lighter red fruit, flowers, and acidity.", searchTerms: ["Amyndeon Xinomavro"] },
      { label: "Greek blends / rose", expect: "Adds acidity and structure; can also make serious rose.", searchTerms: ["Greek Xinomavro rose"] },
    ],
    buyingTip: "Give it food or air; young Xinomavro can feel sharp by itself.",
  }),
  aglianico: guide({
    summary: "A dark southern Italian red with smoke, black cherry, pepper, earth, and powerful tannin.",
    whatItIs:
      "Aglianico is a major southern Italian red grape, especially in Campania and Basilicata.",
    whereToLook: "Search Aglianico, Taurasi, Aglianico del Vulture, or Southern Italy red wine.",
    regions: [
      { label: "Italy - Taurasi / Campania", expect: "Powerful smoke, dark cherry, leather, earth, tannin, and acidity.", searchTerms: ["Taurasi"] },
      { label: "Italy - Aglianico del Vulture", expect: "Volcanic mineral, dark fruit, spice, and firm structure.", searchTerms: ["Aglianico del Vulture"] },
      { label: "New World", expect: "Rare, but usually bold, savory, dark-fruited, and structured.", searchTerms: ["Aglianico"] },
    ],
    buyingTip: "This is a slow-sipping red; decant it or give it rich food.",
  }),
  tannat: guide({
    summary: "A massive dark red with black fruit, smoke, licorice, and serious tannic structure.",
    whatItIs:
      "Tannat is famous in southwest France and Uruguay. Tannin is very much part of the experience.",
    whereToLook: "Search Tannat, Uruguay red wine, Madiran, or bold tannic red.",
    regions: [
      { label: "Uruguay", expect: "Dark fruit, smoother tannin, cocoa, smoke, black plum, and approachable power.", searchTerms: ["Uruguay Tannat"] },
      { label: "France - Madiran", expect: "Very structured, rustic, tannic, black-fruited, earthy, and age-worthy.", searchTerms: ["Madiran"] },
      { label: "Argentina / New World", expect: "Ripe, dark, full-bodied, often softer and fruitier.", searchTerms: ["Argentina Tannat"] },
    ],
    buyingTip: "Do not send tannin-haters here.",
  }),
  furmint: guide({
    summary: "A high-acid Hungarian white with lemon, apple, ginger, smoke, and mineral bite.",
    whatItIs:
      "Furmint is Hungary's key white grape, famous in Tokaj. It can make dry whites and legendary sweet wines.",
    whereToLook: "Search Furmint, dry Furmint, Hungarian white wine, Tokaji dry, or Tokaj.",
    regions: [
      { label: "Hungary - Tokaj", expect: "Dry versions show lemon, green apple, smoke, ginger, mineral, and high acidity.", searchTerms: ["dry Furmint"] },
      { label: "Sweet Tokaji", expect: "Apricot, honey, saffron, orange peel, and sweetness balanced by acidity.", searchTerms: ["Tokaji Aszu"] },
      { label: "Slovenia / Austria", expect: "Rare, crisp, mineral, apple-driven, and food-friendly.", searchTerms: ["Furmint"] },
    ],
    buyingTip: "Search dry Furmint if you do not want dessert wine.",
  }),
  moscato: guide({
    summary: "Low-alcohol, floral, sweet, often lightly fizzy, with orange blossom, peach, and pear.",
    whatItIs:
      "Moscato usually means Muscat Blanc, especially Moscato d'Asti from Piedmont.",
    whereToLook: "Search Moscato d'Asti, Moscato, sweet sparkling wine, Asti, or Muscat.",
    regions: [
      { label: "Italy - Moscato d'Asti", expect: "Light fizz, sweetness, low alcohol, orange blossom, peach, pear, and honeysuckle.", searchTerms: ["Moscato d'Asti"] },
      { label: "Italy - Asti", expect: "More sparkling pressure, sweet, floral, fruity, simple, and celebratory.", searchTerms: ["Asti Spumante"] },
      { label: "New World Moscato", expect: "Usually sweet, peachy, fruity, simple, and approachable.", searchTerms: ["Moscato"] },
    ],
    buyingTip: "Serve very cold; it is great with spicy chips or dessert-ish snacks.",
  }),
  brachetto: guide({
    summary: "A sweet lightly fizzy red from Piedmont with strawberry, rose, raspberry, and dessert energy.",
    whatItIs:
      "Brachetto is an aromatic red grape from Piedmont, often made as sweet sparkling Brachetto d'Acqui.",
    whereToLook: "Search Brachetto, Brachetto d'Acqui, sweet sparkling red, or Piedmont dessert wine.",
    regions: [
      { label: "Italy - Brachetto d'Acqui", expect: "Sweet red bubbles, strawberry, raspberry, rose, light body, and low alcohol.", searchTerms: ["Brachetto d'Acqui"] },
      { label: "Italy - Piedmont", expect: "Still or sparkling versions, usually fragrant and sweet-fruited.", searchTerms: ["Piedmont Brachetto"] },
      { label: "Alternative lane", expect: "Lambrusco Amabile is darker but gives similar sweet red fizz.", searchTerms: ["Lambrusco Amabile"] },
    ],
    buyingTip: "Perfect with chocolate, berries, vanilla ice cream, or spicy-salty snacks.",
  }),
  port: guide({
    summary: "A sweet fortified Portuguese wine with dark fruit, chocolate, caramel, nuts, or dried fruit.",
    whatItIs:
      "Port is fortified wine from Portugal's Douro Valley. Styles include Ruby, LBV, Vintage, Tawny, and White Port.",
    whereToLook: "Search Port, Ruby Port, Tawny Port, Late Bottled Vintage Port, LBV Port, or White Port.",
    regions: [
      { label: "Portugal - Ruby / LBV", expect: "Blackberry, cherry, chocolate, sweetness, rich fruit, and youthful power.", searchTerms: ["Ruby Port", "LBV Port"] },
      { label: "Portugal - Tawny", expect: "Caramel, nuts, dried fig, orange peel, toffee, and smooth oxidative depth.", searchTerms: ["Tawny Port"] },
      { label: "Portugal - White Port", expect: "Honey, citrus peel, nuts; can be dry or sweet and good chilled.", searchTerms: ["White Port"] },
    ],
    buyingTip: "Ruby or LBV for chocolate; Tawny for nuts, caramel, and cheese.",
  }),
  "dry-sherry": guide({
    summary: "Bone-dry, salty, nutty, briny, and one of the best wines for snacks.",
    whatItIs:
      "Dry Sherry is fortified wine from Jerez. Fino and Manzanilla are pale and briny; Amontillado and Oloroso are deeper and nuttier.",
    whereToLook: "Search Fino Sherry, Manzanilla Sherry, dry Sherry, Amontillado, or Oloroso.",
    regions: [
      { label: "Spain - Jerez / Fino", expect: "Very dry almond, saline, lemon peel, delicate savory snap.", searchTerms: ["Fino Sherry"] },
      { label: "Spain - Sanlucar / Manzanilla", expect: "More coastal and briny, with sea salt, chamomile, and almond.", searchTerms: ["Manzanilla Sherry"] },
      { label: "Spain - Amontillado / Oloroso", expect: "Darker hazelnut, walnut, dried fruit, and more body.", searchTerms: ["Amontillado", "Oloroso Sherry"] },
    ],
    buyingTip: "Start with Fino or Manzanilla for salty snacks; choose Amontillado for nutty depth.",
  }),
  champagne: guide({
    summary: "Classic French bubbles with high acid, fine fizz, citrus, apple, toast, cream, and almond.",
    whatItIs:
      "Champagne is a protected sparkling region in France, usually based on Chardonnay, Pinot Noir, and Meunier.",
    whereToLook: "Search Champagne, Brut Champagne, Blanc de Blancs, Blanc de Noirs, or French sparkling wine.",
    regions: [
      { label: "Champagne - Brut NV", expect: "Dry citrus, apple, toast, almond, cream, and fine bubbles.", searchTerms: ["Brut Champagne"] },
      { label: "Blanc de Blancs", expect: "Usually Chardonnay: lemon, chalk, apple, elegance, and high acidity.", searchTerms: ["Blanc de Blancs"] },
      { label: "Blanc de Noirs / Rose", expect: "More red-fruit depth, fuller body, and berry character.", searchTerms: ["Blanc de Noirs", "rose Champagne"] },
    ],
    buyingTip: "For value, try Cremant or Cava; for celebration, Champagne still hits hardest.",
  }),
  cava: guide({
    summary: "Spanish traditional-method bubbles with citrus, apple, almond, toast, and strong value.",
    whatItIs:
      "Cava is Spanish sparkling wine made by bottle fermentation, often from Macabeo, Xarel-lo, and Parellada.",
    whereToLook: "Search Cava, Brut Cava, Spanish sparkling wine, Cava Reserva, or Cava Rosado.",
    regions: [
      { label: "Spain - Penedes / Catalonia", expect: "Dry citrus, apple, almond, light toast, and high acidity.", searchTerms: ["Brut Cava"] },
      { label: "Cava Reserva / Gran Reserva", expect: "More lees aging, creaminess, toast, nuts, and Champagne-like texture.", searchTerms: ["Cava Reserva"] },
      { label: "Cava Rosado", expect: "Pink, berry-fruited, crisp, dry, and great with salty snacks.", searchTerms: ["Cava Rosado"] },
    ],
    buyingTip: "Cava is one of the best sparkling value picks when Champagne is too much.",
  }),
  prosecco: guide({
    summary: "Easy Italian bubbles with pear, apple, melon, flowers, and a soft fruity profile.",
    whatItIs:
      "Prosecco is Italian sparkling wine made mainly from Glera, usually by tank method to keep the fruit fresh.",
    whereToLook: "Search Prosecco, Italian sparkling wine, Extra Dry Prosecco, Prosecco DOC, or Valdobbiadene Prosecco Superiore.",
    regions: [
      { label: "Italy - Prosecco DOC", expect: "Friendly pear, green apple, honeydew, soft bubbles, and easy drinking.", searchTerms: ["Prosecco DOC"] },
      { label: "Conegliano Valdobbiadene DOCG", expect: "More precise pear, apple, flowers, mineral, and finer bubbles.", searchTerms: ["Valdobbiadene Prosecco"] },
      { label: "Prosecco Rose", expect: "Glera plus Pinot Noir: strawberry, pear, citrus, and soft fruity fizz.", searchTerms: ["Prosecco rose"] },
    ],
    buyingTip: "Extra Dry Prosecco often tastes fruitier than Brut, despite the name.",
  }),
  "orange-wine": guide({
    summary: "White grapes made like red wine: amber color, texture, tannin, dried fruit, tea, and herbs.",
    whatItIs:
      "Orange wine is made from white grapes fermented with skins, adding color, grip, texture, and savory complexity.",
    whereToLook: "Search orange wine, skin contact white, amber wine, natural wine, Georgian wine, or qvevri wine.",
    regions: [
      { label: "Georgia", expect: "Amber color, tea, dried apricot, herbs, tannin, and earthy depth.", searchTerms: ["Georgian orange wine"] },
      { label: "Italy / Slovenia / Friuli", expect: "Textured citrus peel, dried fruit, tea, herbs, and mineral grip.", searchTerms: ["Friuli orange wine"] },
      { label: "Natural wine shelves", expect: "Can be funky, floral, tannic, clean, cloudy, or experimental.", searchTerms: ["skin contact white"] },
    ],
    buyingTip: "It is not orange-flavored, and it can be more challenging than a normal crisp white.",
  }),
  viognier: guide({
    summary: "A plush aromatic white with peach, apricot, flowers, perfume, and soft acidity.",
    whatItIs:
      "Viognier is a full-bodied aromatic white grape famous in Condrieu in the northern Rhone.",
    whereToLook: "Search Viognier, Condrieu, Rhone white, California Viognier, or Australian Viognier.",
    regions: [
      { label: "France - Condrieu", expect: "Apricot, peach, flowers, oily texture, perfume, and richness.", searchTerms: ["Condrieu"] },
      { label: "France - Rhone / Languedoc", expect: "More affordable peach, apricot, flowers, body, and soft acidity.", searchTerms: ["French Viognier"] },
      { label: "California / Australia", expect: "Riper apricot, tropical fruit, fuller body, and sometimes higher alcohol.", searchTerms: ["California Viognier"] },
    ],
    buyingTip: "Choose Viognier when someone wants white wine but not sharp acidity.",
  }),
  verdejo: guide({
    summary: "A Spanish white with lime, grapefruit, fennel, herbs, and crisp bitter-almond freshness.",
    whatItIs:
      "Verdejo is a Spanish white grape most associated with Rueda. It is usually citrusy, herbal, and affordable.",
    whereToLook: "Search Verdejo, Rueda, Spanish white wine, or Rueda Verdejo.",
    regions: [
      { label: "Spain - Rueda", expect: "Lime, grapefruit, fennel, herbs, melon, and crisp acidity.", searchTerms: ["Rueda Verdejo"] },
      { label: "Barrel-aged Verdejo", expect: "Richer citrus, herbs, nuts, cream, and more texture.", searchTerms: ["barrel fermented Verdejo"] },
      { label: "Iberian blends", expect: "Citrus and herbal freshness in Spanish or Portuguese blends.", searchTerms: ["Iberian white wine"] },
    ],
    buyingTip: "A strong value pick for Sauvignon Blanc fans who want something different.",
  }),
  picpoul: guide({
    summary: "A lemony, salty southern French white that is light, crisp, and seafood-friendly.",
    whatItIs:
      "Picpoul is a high-acid white grape. The common label is Picpoul de Pinet from the Mediterranean Languedoc.",
    whereToLook: "Search Picpoul, Picpoul de Pinet, French coastal white, or Languedoc white wine.",
    regions: [
      { label: "France - Picpoul de Pinet", expect: "Lemon, lime, saline, green apple, light body, and sharp acidity.", searchTerms: ["Picpoul de Pinet"] },
      { label: "Languedoc blends", expect: "Adds acidity and citrus snap to southern French white blends.", searchTerms: ["Languedoc white"] },
      { label: "New World", expect: "Rare but usually crisp, citrusy, and coastal-feeling.", searchTerms: ["Picpoul"] },
    ],
    buyingTip: "Great alternative to Vinho Verde or Albarino when you want salty citrus freshness.",
  }),
  fiano: guide({
    summary: "A southern Italian white with pear, honey, nuts, herbs, and textured freshness.",
    whatItIs:
      "Fiano is a Campanian white grape that can be richer, nuttier, and more age-worthy than many crisp whites.",
    whereToLook: "Search Fiano, Fiano di Avellino, Campania white wine, or Southern Italy white.",
    regions: [
      { label: "Italy - Fiano di Avellino", expect: "Pear, honey, hazelnut, herbs, mineral, medium body, and acidity.", searchTerms: ["Fiano di Avellino"] },
      { label: "Sicily / Puglia", expect: "Riper pear, citrus, almond, and rounder body.", searchTerms: ["Sicilian Fiano"] },
      { label: "Australia", expect: "Fresh, textural, pear-citrus driven, and modern.", searchTerms: ["Australian Fiano"] },
    ],
    buyingTip: "Choose Fiano when you want a white with texture, not just acidity.",
  }),
  godello: guide({
    summary: "A Spanish white with citrus, apple, pear, minerals, and Chardonnay-like texture without heavy oak.",
    whatItIs:
      "Godello is a quality white grape from northwest Spain, especially Valdeorras and Bierzo.",
    whereToLook: "Search Godello, Valdeorras, Bierzo white, Spanish white wine, or Galicia white wine.",
    regions: [
      { label: "Spain - Valdeorras", expect: "Lemon, apple, pear, mineral, medium body, and clean acidity.", searchTerms: ["Valdeorras Godello"] },
      { label: "Spain - Bierzo", expect: "Fresh citrus, orchard fruit, herbs, texture, and mineral edge.", searchTerms: ["Bierzo Godello"] },
      { label: "Spain - Monterrei", expect: "Riper stone fruit, citrus, and rounded texture.", searchTerms: ["Monterrei Godello"] },
    ],
    buyingTip: "Recommend Godello to Chardonnay drinkers who want less butter and more mineral freshness.",
  }),
  falanghina: guide({
    summary: "A bright southern Italian white with lemon, peach, herbs, flowers, and coastal freshness.",
    whatItIs:
      "Falanghina is a Campanian white grape that is usually fresh, citrusy, floral, and easy with food.",
    whereToLook: "Search Falanghina, Campania white wine, Southern Italy white, or Beneventano Falanghina.",
    regions: [
      { label: "Italy - Campania", expect: "Lemon, peach, white flowers, herbs, almond, and fresh finish.", searchTerms: ["Campania Falanghina"] },
      { label: "Benevento / Sannio", expect: "Affordable citrus, apple, stone fruit, and clean texture.", searchTerms: ["Beneventano Falanghina"] },
      { label: "New World", expect: "Rare, but generally fruit-forward and crisp when found.", searchTerms: ["Falanghina"] },
    ],
    buyingTip: "A safe pick for Pinot Grigio fans who want more personality.",
  }),
  mencia: guide({
    summary: "A fresh Spanish red with red fruit, flowers, herbs, pepper, and a mineral edge.",
    whatItIs:
      "Mencia is a northwest Spanish red grape that can feel like Pinot Noir, Cabernet Franc, and Syrah met halfway.",
    whereToLook: "Search Mencia, Bierzo, Ribeira Sacra, Spanish red wine, or northwest Spain red.",
    regions: [
      { label: "Spain - Bierzo", expect: "Red cherry, raspberry, herbs, pepper, mineral, medium body, and freshness.", searchTerms: ["Bierzo Mencia"] },
      { label: "Spain - Ribeira Sacra", expect: "Lighter, more floral, more mineral, and very fresh.", searchTerms: ["Ribeira Sacra Mencia"] },
      { label: "Portugal - Jaen", expect: "Same grape, with red fruit, herbs, acidity, and a rustic edge.", searchTerms: ["Jaen red wine"] },
    ],
    buyingTip: "Great for Pinot Noir or Cabernet Franc drinkers who want something nerdier.",
  }),
  "touriga-nacional": guide({
    summary: "Portugal's powerful red grape with blackberry, violet, cocoa, spice, and firm structure.",
    whatItIs:
      "Touriga Nacional is a key Port grape and one of Portugal's most important dry red varieties.",
    whereToLook: "Search Touriga Nacional, Portuguese red wine, Douro red, Dao red, or dry Portuguese red.",
    regions: [
      { label: "Portugal - Douro", expect: "Dark, structured blackberry, plum, cocoa, violet, spice, and full body.", searchTerms: ["Douro red"] },
      { label: "Portugal - Dao", expect: "More elegant violet, red-black fruit, freshness, and moderate structure.", searchTerms: ["Dao red"] },
      { label: "Port blends", expect: "Adds perfume, tannin, and black fruit to fortified styles.", searchTerms: ["Port", "Touriga Nacional"] },
    ],
    buyingTip: "For dry wine, search Douro red or Dao red rather than Port.",
  }),
  negroamaro: guide({
    summary: "A southern Italian red with black cherry, plum, dried herbs, cocoa, and warm rustic depth.",
    whatItIs:
      "Negroamaro is a red grape from Puglia, often used in Salice Salentino and bold value reds.",
    whereToLook: "Search Negroamaro, Salice Salentino, Puglia red wine, or Southern Italy red.",
    regions: [
      { label: "Italy - Puglia", expect: "Dark fruit, dried herbs, cocoa, tobacco, medium-full body, and warmth.", searchTerms: ["Puglia Negroamaro"] },
      { label: "Italy - Salice Salentino", expect: "Rustic cherry, plum, herbs, leather, and firm-ish tannin.", searchTerms: ["Salice Salentino"] },
      { label: "Italy - blends", expect: "Often blended for softness, fruit, and savory southern Italian charm.", searchTerms: ["Puglia red blend"] },
    ],
    buyingTip: "A good value lane for warm Italian reds beyond Chianti.",
  }),
  dolcetto: guide({
    summary: "A Piedmont red with dark fruit, almond bitterness, low acidity, and soft-to-medium tannin.",
    whatItIs:
      "Dolcetto means little sweet one, but the wine is usually dry. It is fruitier and easier than Nebbiolo.",
    whereToLook: "Search Dolcetto, Dolcetto d'Alba, Piedmont red wine, or Italian red wine.",
    regions: [
      { label: "Italy - Dolcetto d'Alba", expect: "Black cherry, plum, violet, almond, low acidity, and easy drinking.", searchTerms: ["Dolcetto d'Alba"] },
      { label: "Italy - Dogliani", expect: "More structured and serious, with darker fruit and depth.", searchTerms: ["Dogliani"] },
      { label: "New World", expect: "Rare, usually soft, fruity, and casual with dark berry notes.", searchTerms: ["Dolcetto"] },
    ],
    buyingTip: "Do not assume Dolcetto is sweet; it is usually a dry red.",
  }),
  blaufrankisch: guide({
    summary: "A fresh central European red with black cherry, pepper, herbs, acidity, and spicy structure.",
    whatItIs:
      "Blaufrankisch is associated with Austria, Hungary, and central Europe, combining dark fruit with freshness and spice.",
    whereToLook: "Search Blaufrankisch, Austrian red wine, Burgenland red, Lemberger, or Kekfrankos.",
    regions: [
      { label: "Austria - Burgenland", expect: "Black cherry, blackberry, pepper, herbs, fresh acidity, and firm spice.", searchTerms: ["Burgenland Blaufrankisch"] },
      { label: "Hungary - Kekfrankos", expect: "Often rustic and spicy with cherry, earth, herbs, and acidity.", searchTerms: ["Kekfrankos"] },
      { label: "Germany / USA - Lemberger", expect: "Fruitier and approachable with cherry, pepper, and moderate body.", searchTerms: ["Lemberger wine"] },
    ],
    buyingTip: "Recommend it to fans of Cabernet Franc, Mencia, or lighter Syrah.",
  }),
  zweigelt: guide({
    summary: "A bright Austrian red with cherry, raspberry, spice, low tannin, and chillable energy.",
    whatItIs:
      "Zweigelt is Austria's most planted red grape, a crossing of Blaufrankisch and St. Laurent.",
    whereToLook: "Search Zweigelt, Austrian red wine, chillable red, or Burgenland Zweigelt.",
    regions: [
      { label: "Austria - Burgenland / Niederoesterreich", expect: "Cherry, raspberry, pepper, soft tannin, light-medium body, and freshness.", searchTerms: ["Zweigelt"] },
      { label: "Austria - Reserve styles", expect: "Darker plum, spice, chocolate, more body, and more tannin.", searchTerms: ["Zweigelt Reserve"] },
      { label: "Canada / New World", expect: "Rare, but usually bright, juicy, red-fruited, and chillable.", searchTerms: ["Ontario Zweigelt"] },
    ],
    buyingTip: "Serve slightly chilled; it bridges Gamay and Pinot Noir nicely.",
  }),
} satisfies Record<WineId, WineGuide>;
