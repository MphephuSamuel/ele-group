export type Product = {
  id: number;
  slug: string;
  name: string;
  parentCategory: string;
  subcategory?: string;
  price: number;
  unit: string;
  tag: string;
  image: string;
  gallery: string[];
  desc: string;
  directions: string;
  caution: string;
};

type ProductDetails = Pick<
  Product,
  "price" | "unit" | "tag" | "subcategory" | "desc" | "directions" | "caution"
>;

export const productDetailsBySlug: Record<string, ProductDetails> = {
  "brooms-broom-grass": {
    price: 50,
    unit: "Each",
    tag: "Available",
    subcategory: "Brooms",
    desc: "Natural grass broom suitable for sweeping homes, yards and outdoor areas.",
    directions: "Use with gentle sweeping motions on dry surfaces.",
    caution: "Store in a dry place. Keep away from open flames.",
  },

  "brooms-bus-wash-broom-blue-complete": {
    price: 299,
    unit: "Each",
    tag: "Available",
    subcategory: "Vehicle cleaning",
    desc: "Blue broom designed for washing buses, trucks and other large vehicles.",
    directions: "Use with water and suitable vehicle-cleaning detergent.",
    caution: "Do not use on hot surfaces. Rinse and store dry after use.",
  },

  "brooms-house-broom-with-wire-assorted": {
    price: 65,
    unit: "Each",
    tag: "Available",
    subcategory: "Brooms",
    desc: "House broom with wire detailing, suitable for everyday sweeping and household cleaning.",
    directions:
      "Use with sweeping motions to collect dust, dirt and debris from floors and other suitable surfaces.",
    caution:
      "Store in a dry place after use. Avoid using on delicate surfaces that may be scratched by the wire.",
  },

  "brooms-plastic-leaf-rake-orange-ub": {
    price: 30,
    unit: "Each",
    tag: "Available",
    subcategory: "Garden tools",
    desc: "Orange plastic leaf rake suitable for collecting leaves, grass clippings and light garden debris.",
    directions:
      "Use to gently rake leaves and loose debris into piles for easy collection.",
    caution:
      "Avoid excessive force to prevent damage to the plastic tines. Store in a dry place after use.",
  },

  "brooms-whisker-broom-household": {
    price: 40,
    unit: "Each",
    tag: "Available",
    subcategory: "Brooms",
    desc: "Household whisker broom suitable for sweeping dust, dirt and small debris from floors and hard-to-reach areas.",
    directions:
      "Use short, gentle sweeping strokes to collect dust and debris.",
    caution:
      "Store in a dry place after use. Avoid excessive force to prevent damage to the bristles.",
  },

  "chemicals-black-dip-outside-cleaner-5kg": {
    price: 140,
    unit: "5kg",
    tag: "Available",
    subcategory: "Outdoor cleaners",
    desc: "Powerful cleaner for outside walkways, greenhouses, domestic and industrial floors, and toilets. Deodorises drains and removes stubborn oil and grease from tools, pavements and engines.",
    directions:
      "Dilute 5:1 for heavy-duty cleaning or 10:1 for medium-duty cleaning. Apply to the surface and rinse thoroughly as appropriate.",
    caution:
      "Wear protective gloves. Avoid contact with eyes, as spraying or splashing may cause irritation. If swallowed or splashed into the eyes, rinse the affected area and seek medical assistance.",
  },

  "chemicals-bleach-liquid-5point2-percent-25l": {
    price: 160,
    unit: "25L",
    tag: "Available",
    subcategory: "Bleach",
    desc: "Liquid bleach containing 5.2% bleach, suitable for washing clothing, floors and other surfaces.",
    directions:
      "Dilute with water at a 1:15 ratio. After cleaning the surface, rinse thoroughly with water. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children and avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-bleach-liquid-5point2-percent-5l": {
    price: 35,
    unit: "5L",
    tag: "Available",
    subcategory: "Bleach",
    desc: "Liquid bleach containing 5.2% bleach, suitable for washing clothing, floors and other surfaces.",
    directions:
      "Dilute with water at a 1:15 ratio. After cleaning the surface, rinse thoroughly with water. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children and avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },
  "chemicals-bubble-bath-liquid-5l": {
    price: 95,
    unit: "5L",
    tag: "Available",
    subcategory: "Bubble bath",
    desc: "Concentrated liquid bubble bath that produces plenty of foam for a relaxing bath.",
    directions:
      "Add 50–100 ml to the bathtub as you begin filling it with water to create lots of foam.",
    caution:
      "Avoid contact with eyes. If contact occurs, rinse thoroughly with water. If ingested, seek medical attention immediately. Do not induce vomiting. The product label advises drinking milk if ingested. If the product contacts the skin, rinse with water.",
  },

  "chemicals-bubble-bath-liquid-blue-5l": {
    price: 95,
    unit: "5L",
    tag: "Available",
    subcategory: "Bubble bath",
    desc: "Concentrated blue liquid bubble bath that produces plenty of foam for a relaxing bath.",
    directions:
      "Add 50–100 ml to the bathtub as you begin filling it with water to create lots of foam.",
    caution:
      "Avoid contact with eyes. If contact occurs, rinse thoroughly with water. If ingested, seek medical attention immediately. Do not induce vomiting. The product label advises drinking milk if ingested. If the product contacts the skin, rinse with water.",
  },

  "chemicals-bubble-bath-liquid-pink-5l": {
    price: 95,
    unit: "5L",
    tag: "Available",
    subcategory: "Bubble bath",
    desc: "Concentrated pink liquid bubble bath that produces plenty of foam for a relaxing bath.",
    directions:
      "Add 50–100 ml to the bathtub as you begin filling it with water to create lots of foam.",
    caution:
      "Avoid contact with eyes. If contact occurs, rinse thoroughly with water. If ingested, seek medical attention immediately. Do not induce vomiting. The product label advises drinking milk if ingested. If the product contacts the skin, rinse with water.",
  },
  "chemicals-dashboard-polish-25l": {
    price: 720,
    unit: "25L",
    tag: "Available",
    subcategory: "Dashboard polish",
    desc: "Dashboard polish that adds shine and leaves a fresh scent on vehicle interiors. Also suitable for surfaces such as countertops and tables.",
    directions:
      "Apply a small amount of undiluted dashboard polish to the surface and wipe with a clean cloth until no visible residue remains. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-dashboard-polish-5l": {
    price: 150,
    unit: "5L",
    tag: "Available",
    subcategory: "Dashboard polish",
    desc: "Dashboard polish that adds shine and leaves a fresh scent on vehicle interiors. Also suitable for surfaces such as countertops and tables.",
    directions:
      "Apply a small amount of undiluted dashboard polish to the surface and wipe with a clean cloth until no visible residue remains. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },
  "chemicals-dish-washing-liquid-25l": {
    price: 286,
    unit: "25L",
    tag: "Available",
    subcategory: "Dishwashing liquid",
    desc: "General-purpose dishwashing liquid concentrate that effectively removes dirt and grease from plates, cutlery and crockery.",
    directions:
      "Pour a small amount into water and mix thoroughly before washing dishes. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-dish-washing-liquid-5l": {
    price: 65,
    unit: "5L",
    tag: "Available",
    subcategory: "Dishwashing liquid",
    desc: "General-purpose dishwashing liquid concentrate that effectively removes dirt and grease from plates, cutlery and crockery.",
    directions:
      "Pour a small amount into water and mix thoroughly before washing dishes. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },
  "chemicals-drain-cleaner-powder-5kg": {
    price: 225,
    unit: "5kg",
    tag: "Available",
    subcategory: "Drain cleaners",
    desc: "Highly corrosive drain-cleaning powder containing active agents designed to help clear blocked drains.",
    directions:
      "Carefully add the powder to the drain according to the product label. Allow it to sit for 30 minutes, then flush with water only if the label directs you to do so.",
    caution:
      "DANGER: Highly corrosive. Avoid contact with skin and eyes. Keep dry, as the product may react with water and generate heat. Avoid breathing dust and prevent splashing. Keep the container tightly sealed and store safely. If swallowed, do not induce vomiting; seek immediate medical assistance. If the product contacts the eyes, rinse cautiously with plenty of water and seek urgent medical attention. Follow the manufacturer's safety data sheet before use.",
  },

  "chemicals-engine-cleaner-red-25l": {
    price: 320,
    unit: "25L",
    tag: "Available",
    subcategory: "Engine cleaners",
    desc: "Red engine cleaner designed to remove grease, oil and stubborn oily stains from engines and other suitable surfaces.",
    directions:
      "Dilute with water at a 1:3 ratio. Spray onto the surface or apply with a brush or cloth, then clean until the dirt and grease are removed. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-floor-polish-20l": {
    price: 1300,
    unit: "20L",
    tag: "Available",
    subcategory: "Floor care",
    desc: "Floor polish designed to enhance the appearance of suitable flooring, leaving a clean, polished finish.",
    directions:
      "Ensure the floor is clean and dry before application. Apply a thin, even layer according to the manufacturer's instructions and allow it to dry completely before walking on the surface.",
    caution:
      "Test on a small, inconspicuous area before use. Keep out of reach of children. Avoid contact with eyes and prolonged skin contact. Store in a cool, dry place with the container closed when not in use. Follow the product label for flooring compatibility and safety precautions.",
  },

  "chemicals-hand-grit-hand-cleaner-5kg": {
    price: 220,
    unit: "5kg",
    tag: "Available",
    subcategory: "Hand cleaners",
    desc: "Grit-based hand-cleaning paste designed to remove stubborn dirt and grime from hands.",
    directions:
      "Apply approximately one teaspoon-sized amount to one hand. Rub your hands together thoroughly, covering all surfaces, including between fingers, thumbs and the backs of your hands. Rinse with clean water. Keep the container closed when not in use.",
    caution:
      "If itching or skin redness occurs, stop using the product. Avoid contact with eyes. Keep out of reach of children and store in a cool, dry place.",
  },

  "chemicals-hand-washing-liquid-25l": {
    price: 260,
    unit: "25L",
    tag: "Available",
    subcategory: "Hand soaps",
    desc: "Pink liquid hand soap suitable for handwashing in businesses, schools, bathrooms and other shared facilities.",
    directions:
      "Apply a small amount of hand soap to your hands and wash thoroughly with water until all residue is removed. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-hand-washing-liquid-5l": {
    price: 60,
    unit: "5L",
    tag: "Available",
    subcategory: "Hand soaps",
    desc: "Pink liquid hand soap suitable for handwashing in businesses, schools, bathrooms and other shared facilities.",
    directions:
      "Apply a small amount of hand soap to your hands and wash thoroughly with water until all residue is removed. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-hp-auto-shampoo-for-carwash-25l": {
    price: 340,
    unit: "25L",
    tag: "Available",
    subcategory: "Car wash chemicals",
    desc: "Car wash shampoo designed for use with a high-pressure washer and foamer gun to produce a stream of foam for cleaning vehicle surfaces. Can also be used in a bucket with water.",
    directions:
      "For foamer-gun use, follow the manufacturer's dilution instructions and the high-pressure washer's operating guidelines. Alternatively, dilute in a bucket of water according to the product label and apply to the vehicle.",
    caution:
      "Keep out of reach of children. Avoid contact with eyes and prolonged skin contact. Do not ingest. Store in a cool, dry place with the container closed when not in use. Follow the product label for safety and dilution instructions.",
  },

  "chemicals-hp-foamer-soap-for-carwash-25l": {
    price: 260,
    unit: "25L",
    tag: "Available",
    subcategory: "Car wash chemicals",
    desc: "High-quality car wash soap formulated for use with a foamer gun and high-pressure washer to produce a thick stream of cleaning foam on vehicle surfaces.",
    directions:
      "Use with a compatible foamer gun and high-pressure washer. Follow the manufacturer's dilution instructions and equipment guidelines before applying the foam to the vehicle.",
    caution:
      "Keep out of reach of children. Avoid contact with eyes and prolonged skin contact. Do not ingest. Store in a cool, dry place with the container closed when not in use. Follow the product label for safety and dilution instructions.",
  },

  "chemicals-hp-foamer-soap-for-carwash-5l": {
    price: 60,
    unit: "5L",
    tag: "Available",
    subcategory: "Car wash chemicals",
    desc: "High-quality car wash soap formulated for use with a foamer gun and high-pressure washer to produce a thick stream of cleaning foam on vehicle surfaces.",
    directions:
      "Use with a compatible foamer gun and high-pressure washer. Follow the manufacturer's dilution instructions and equipment guidelines before applying the foam to the vehicle.",
    caution:
      "Keep out of reach of children. Avoid contact with eyes and prolonged skin contact. Do not ingest. Store in a cool, dry place with the container closed when not in use. Follow the product label for safety and dilution instructions.",
  },

  "chemicals-leather-conditioner-5l": {
    price: 320,
    unit: "5L",
    tag: "Available",
    subcategory: "Leather care",
    desc: "Leather conditioner suitable for leather products such as jackets, couches and sofas. Helps maintain the leather's condition and prevent drying, cracking and damage.",
    directions:
      "Apply a small amount to the leather surface using a clean cloth and gentle rubbing motions. Use regularly as appropriate to maintain the leather's condition. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },
  "chemicals-multi-washing-powder-5kg": {
    price: 130,
    unit: "5kg",
    tag: "Available",
    subcategory: "Washing powder",
    desc: "Multi-purpose washing powder with a breezy fragrance, optical brighteners and stain-removal properties for everyday laundry.",
    directions:
      "For handwashing, sprinkle a handful of powder into a bucket of clean water and mix until foamy. For best results, soak garments before washing as normal and rinse thoroughly. For automatic washing machines, add 75g–150g depending on the load size.",
    caution:
      "Wash your hands after use and apply hand cream if needed. If the product gets into the eyes, rinse thoroughly with water. If swallowed, contact a doctor or go to the nearest hospital immediately. Keep out of reach of children.",
  },

  "chemicals-oven-cleaner-degreaser-25l": {
    price: 275,
    unit: "25L",
    tag: "Available",
    subcategory: "Oven cleaners",
    desc: "Red liquid oven cleaner designed to remove grease and dirt from ovens. Also helps remove oil and grease from dishes before washing.",
    directions:
      "Apply undiluted inside the oven. Leave for 10 minutes, then wipe away grease and grime with a cloth. Use a clean cloth and water to remove all chemical residue. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-oven-cleaner-degreaser-5l": {
    price: 60,
    unit: "5L",
    tag: "Available",
    subcategory: "Oven cleaners",
    desc: "Red liquid oven cleaner designed to remove grease and dirt from ovens. Also helps remove oil and grease from dishes before washing.",
    directions:
      "Apply undiluted inside the oven. Leave for 10 minutes, then wipe away grease and grime with a cloth. Use a clean cloth and water to remove all chemical residue. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-pine-gel-general-cleaner-25kg": {
    price: 599,
    unit: "25kg",
    tag: "Available",
    subcategory: "General cleaners",
    desc: "Thick green pine gel general cleaner suitable for floors, walls and other washable surfaces. Cleans surfaces while leaving a fresh fragrance.",
    directions:
      "Dilute at the specified ratio of 5:1000, equivalent to 50ml per 10L of water. Apply to the surface, then rinse thoroughly with water to remove excess product. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-pine-gel-general-cleaner-5kg": {
    price: 140,
    unit: "5kg",
    tag: "Available",
    subcategory: "General cleaners",
    desc: "Thick green pine gel general cleaner suitable for floors, walls and other washable surfaces. Cleans surfaces while leaving a fresh pine fragrance.",
    directions:
      "Dilute at the specified ratio of 5:1000, equivalent to 50ml per 10L of water. Apply to the surface, then rinse thoroughly with water to remove excess product. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-pine-gel-general-cleaner-cherry-5kg": {
    price: 140,
    unit: "5kg",
    tag: "Available",
    subcategory: "General cleaners",
    desc: "Thick cherry-fragranced gel general cleaner suitable for floors, walls and other washable surfaces. Cleans surfaces while leaving a fresh cherry fragrance.",
    directions:
      "Dilute at the specified ratio of 5:1000, equivalent to 50ml per 10L of water. Apply to the surface, then rinse thoroughly with water to remove excess product. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-pine-gel-general-cleaner-lavender-5kg": {
    price: 140,
    unit: "5kg",
    tag: "Available",
    subcategory: "General cleaners",
    desc: "Thick lavender-fragranced gel general cleaner suitable for floors, walls and other washable surfaces. Cleans surfaces while leaving a fresh lavender fragrance.",
    directions:
      "Dilute at the specified ratio of 5:1000, equivalent to 50ml per 10L of water. Apply to the surface, then rinse thoroughly with water to remove excess product. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },
  "chemicals-scouring-liquid-25l": {
    price: 280,
    unit: "25L",
    tag: "Available",
    subcategory: "Scouring cleaners",
    desc: "Scouring liquid designed for cleaning and removing dirt and grime from suitable metal surfaces.",
    directions:
      "Dilute with water at a 1:10 ratio and apply to the surface to be cleaned. For stubborn dirt and grease, use undiluted only where suitable. Rinse the surface immediately after use. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-scouring-liquid-5l": {
    price: 65,
    unit: "5L",
    tag: "Available",
    subcategory: "Scouring cleaners",
    desc: "Scouring liquid designed for cleaning and removing dirt and grime from suitable metal surfaces.",
    directions:
      "Dilute with water at a 1:10 ratio and apply to the surface to be cleaned. For stubborn dirt and grease, use undiluted only where suitable. Rinse the surface immediately after use. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-softner-conditioner-fabric-5l": {
    price: 60,
    unit: "5L",
    tag: "Available",
    subcategory: "Fabric softeners",
    desc: "Fabric softener and conditioner designed to soften laundry and leave clothes feeling comfortable after washing.",
    directions:
      "For washing machines, mix 100ml with warm water. For handwashing, mix 60ml with warm water for a small wash. Add the diluted softener only during the final rinse. Do not pour directly onto clothes.",
    caution:
      "Avoid contact with eyes. If contact occurs, rinse thoroughly with water. If swallowed, seek immediate medical advice or contact a poison centre. Do not induce vomiting or give milk unless instructed by a medical professional. If the product contacts the skin, rinse thoroughly with water. Keep out of reach of children and store in a cool, dry place.",
  },

  "chemicals-superior-car-polish-5l": {
    price: 330,
    unit: "5L",
    tag: "Available",
    subcategory: "Car polish",
    desc: "High-quality car polish designed to enhance the appearance of vehicle exteriors and painted surfaces.",
    directions:
      "Apply a small amount to a clean cloth. Press the cloth against the vehicle's painted surface and rub gently to distribute the polish. Avoid applying excessive pressure, particularly around painted corners. Follow the manufacturer's instructions for application and removal.",
    caution:
      "Test on a small, inconspicuous area before use. Avoid contact with eyes and prolonged skin contact. Keep out of reach of children. Store in a cool, dry place with the container closed when not in use. Follow the product label for additional safety precautions.",
  },
  "chemicals-thick-bleach-5point2-percent-25l": {
    price: 280,
    unit: "25L",
    tag: "Available",
    subcategory: "Bleach",
    desc: "Thick liquid bleach containing 5.2% bleach, suitable for washing clothing, floors and other washable surfaces.",
    directions:
      "Dilute with water at a 1:15 ratio. After cleaning the surface, rinse thoroughly with water. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-thick-bleach-5point2-percent-5l": {
    price: 60,
    unit: "5L",
    tag: "Available",
    subcategory: "Bleach",
    desc: "Thick liquid bleach containing 5.2% bleach, suitable for washing clothing, floors and other washable surfaces.",
    directions:
      "Dilute with water at a 1:15 ratio. After cleaning the surface, rinse thoroughly with water. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention.",
  },

  "chemicals-toilet-bowl-cleaner-25l": {
    price: 510,
    unit: "25L",
    tag: "Available",
    subcategory: "Toilet cleaners",
    desc: "Liquid toilet bowl cleaner designed to remove dirt and grime from toilet bowls.",
    directions:
      "Flush the toilet, then dispense a generous amount of cleaner into the bowl. Use a toilet brush to spread the liquid around the inside of the bowl. Leave for 10 minutes, scrub thoroughly with the brush, then flush the toilet. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention. Never mix with bleach or other cleaning products.",
  },

  "chemicals-toilet-bowl-cleaner-5l": {
    price: 110,
    unit: "5L",
    tag: "Available",
    subcategory: "Toilet cleaners",
    desc: "Liquid toilet bowl cleaner designed to remove dirt and grime from toilet bowls.",
    directions:
      "Flush the toilet, then dispense a generous amount of cleaner into the bowl. Use a toilet brush to spread the liquid around the inside of the bowl. Leave for 10 minutes, scrub thoroughly with the brush, then flush the toilet. Keep the container closed when not in use.",
    caution:
      "May cause skin irritation. Keep out of reach of children. Avoid contact with eyes, nose and mouth. Do not ingest. Store in a cool, dry place. If the product gets into the eyes, rinse thoroughly with water and seek urgent professional medical attention. Never mix with bleach or other cleaning products.",
  },
  "chemicals-tyre-sheen-for-carwash-25l": {
    price: 850,
    unit: "25L",
    tag: "Available",
    subcategory: "Car wash chemicals",
    desc: "Effective tyre sheen that absorbs into thoroughly cleaned tyres to leave a beautiful finish. Its non-silicone-based formula is designed not to attract dust like traditional silicone-based tyre shine products.",
    directions:
      "Wash the tyres thoroughly and allow them to dry before applying the tyre sheen. Apply evenly to the tyre surface according to the manufacturer's instructions for a clean, finished appearance.",
    caution:
      "Keep out of reach of children. Avoid contact with eyes and prolonged skin contact. Do not ingest. Store in a cool, dry place with the container closed when not in use. Avoid applying to tyre treads, brake components or other surfaces where slipperiness could create a safety hazard.",
  },

  "dustbins-divided-dustbin-red-60l": {
    price: 580,
    unit: "Each",
    tag: "Available",
    subcategory: "Dustbins",
    desc: "Red 60-litre divided dustbin designed to help separate different types of waste in homes, offices, schools and other workplaces.",
    directions:
      "Place on a stable, level surface. Use the divided compartments to separate waste as needed. Empty regularly and clean the bin to maintain hygiene.",
    caution:
      "Do not exceed the bin's capacity. Handle waste carefully and avoid placing hot materials inside unless the bin is specifically designed for them. Clean regularly and keep the surrounding area hygienic.",
  },

  "dustbins-dustbin-kitchen-rounded-50l": {
    price: 140,
    unit: "Each",
    tag: "Available",
    subcategory: "Dustbins",
    desc: "Rounded 50-litre kitchen dustbin suitable for collecting everyday household and kitchen waste.",
    directions:
      "Place in a convenient location and use with a suitably sized bin liner if desired. Empty regularly and wash when necessary.",
    caution:
      "Do not overload the bin. Keep away from direct heat and open flames. Clean regularly to prevent odours and maintain hygiene.",
  },

  "dustbins-outdoor-dustbin-black-240l": {
    price: 850,
    unit: "Each",
    tag: "Available",
    subcategory: "Outdoor dustbins",
    desc: "Large black 240-litre outdoor dustbin suitable for collecting household, garden and general waste at homes, businesses and commercial premises.",
    directions:
      "Position on a firm, level surface accessible for waste collection. Place waste inside and keep the lid closed when not in use. Empty according to your waste collection schedule.",
    caution:
      "Do not exceed the bin's rated capacity. Keep the lid closed to help prevent pests and litter from escaping. Avoid placing hot ashes or burning materials inside.",
  },

  "dustbins-yellow-dustbin-with-footpedal-15l": {
    price: 165,
    unit: "Each",
    tag: "Available",
    subcategory: "Pedal dustbins",
    desc: "Compact 15-litre yellow dustbin with a foot pedal for hands-free opening, suitable for kitchens, bathrooms, offices and other indoor spaces.",
    directions:
      "Press the foot pedal to open the lid and dispose of waste. Release the pedal to close the lid. Empty and clean regularly.",
    caution:
      "Place on a stable surface. Avoid overfilling and keep fingers clear of the lid mechanism. Clean regularly to maintain hygiene.",
  },

  "dustbins-yellow-dustbin-with-footpedal-55l": {
    price: 350,
    unit: "Each",
    tag: "Available",
    subcategory: "Pedal dustbins",
    desc: "Large 55-litre yellow dustbin with a foot pedal for hands-free opening, suitable for kitchens, offices, schools and other busy environments.",
    directions:
      "Press the foot pedal to open the lid and dispose of waste. Release the pedal to close the lid. Empty regularly and clean the bin as needed.",
    caution:
      "Place on a stable, level surface. Avoid overfilling and keep fingers clear of the lid mechanism. Clean regularly to maintain hygiene.",
  },
};

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const categoryGroups = [
  { name: "Chemicals", subcategories: [] },
  { name: "Paper Products", subcategories: [] },
  { name: "Trollies", subcategories: [] },
  { name: "Mops", subcategories: [] },
  { name: "Dustbins", subcategories: [] },
  { name: "Brooms", subcategories: [] },
];

const categoryLabels: Record<string, string> = {
  brooms: "Brooms",
  chemicals: "Chemicals",
  dustbins: "Dustbins",
  mops: "Mops",
  "paper-products": "Paper Products",
  trollies: "Trollies",
};

const assetFiles = [
  ["brooms", "broom-grass.webp"],
  ["brooms", "bus-wash-broom-blue-complete-1.webp"],
  ["brooms", "bus-wash-broom-blue-complete-2.webp"],
  ["brooms", "bus-wash-broom-blue-complete-3.webp"],
  ["brooms", "bus-wash-broom-blue-complete-4.webp"],
  ["brooms", "house-broom-with-wire-assorted-1.webp"],
  ["brooms", "house-broom-with-wire-assorted-2.webp"],
  ["brooms", "plastic-leaf-rake-orange-ub.webp"],
  ["brooms", "whisker-broom-household.webp"],
  ["chemicals", "black-dip-outside-cleaner-5kg.webp"],
  ["chemicals", "bleach-liquid-5point2-percent-25L.webp"],
  ["chemicals", "bleach-liquid-5point2-percent-5L.webp"],
  ["chemicals", "bubble-bath-liquid-5L.webp"],
  ["chemicals", "bubble-bath-liquid-blue-5L.webp"],
  ["chemicals", "bubble-bath-liquid-pink-5L.webp"],
  ["chemicals", "dashboard-polish-25L.webp"],
  ["chemicals", "dashboard-polish-5L.webp"],
  ["chemicals", "dish-washing-liquid-25L.webp"],
  ["chemicals", "dish-washing-liquid-5L.webp"],
  ["chemicals", "drain-cleaner-powder-5kg.webp"],
  ["chemicals", "engine-cleaner-red-25L.webp"],
  ["chemicals", "floor-polish-20L.webp"],
  ["chemicals", "hand-grit-hand-cleaner-5kg.webp"],
  ["chemicals", "hand-washing-liquid-25L.webp"],
  ["chemicals", "hand-washing-liquid-5L.webp"],
  ["chemicals", "hp-auto-shampoo-for-carwash-25L.webp"],
  ["chemicals", "hp-foamer-soap-for-carwash-25L.webp"],
  ["chemicals", "hp-foamer-soap-for-carwash-5L.webp"],
  ["chemicals", "leather-conditioner-5L.webp"],
  ["chemicals", "multi-washing-powder-5kg.webp"],
  ["chemicals", "oven-cleaner-degreaser-25L.webp"],
  ["chemicals", "oven-cleaner-degreaser-5L.webp"],
  ["chemicals", "pine-gel-general-cleaner-25kg-1.webp"],
  ["chemicals", "pine-gel-general-cleaner-25kg-2.webp"],
  ["chemicals", "pine-gel-general-cleaner-5kg.webp"],
  ["chemicals", "pine-gel-general-cleaner-cherry-5kg.webp"],
  ["chemicals", "pine-gel-general-cleaner-lavender-5kg.webp"],
  ["chemicals", "scouring-liquid-25L.webp"],
  ["chemicals", "scouring-liquid-5L.webp"],
  ["chemicals", "softner-conditioner-fabric-5L.webp"],
  ["chemicals", "superior-car-polish-5L.webp"],
  ["chemicals", "thick-bleach-5point2-percent-25L.webp"],
  ["chemicals", "thick-bleach-5point2-percent-5L.webp"],
  ["chemicals", "toilet-bowl-cleaner-25L.webp"],
  ["chemicals", "toilet-bowl-cleaner-5L.webp"],
  ["chemicals", "tyre-sheen-for-carwash-25L.webp"],
  ["dustbins", "divided-dustbin-red-60L-1.webp"],
  ["dustbins", "divided-dustbin-red-60L-2.webp"],
  ["dustbins", "dustbin-kitchen-rounded-50L-1.webp"],
  ["dustbins", "dustbin-kitchen-rounded-50L-2.webp"],
  ["dustbins", "outdoor-dustbin-black-240L.webp"],
  ["dustbins", "yellow-dustbin-with-footpedal-15L-1.webp"],
  ["dustbins", "yellow-dustbin-with-footpedal-15L-2.webp"],
  ["dustbins", "yellow-dustbin-with-footpedal-55L-1.webp"],
  ["dustbins", "yellow-dustbin-with-footpedal-55L-2.webp"],
  ["mops", "extendible-microfibre-mop-broom-400mm-1.webp"],
  ["mops", "extendible-microfibre-mop-broom-400mm-2.webp"],
  ["mops", "extendible-microfibre-mop-broom-400mm-3.webp"],
  ["mops", "fan-mop-clip-and-wooden-stick-1.webp"],
  ["mops", "fan-mop-clip-and-wooden-stick-2.webp"],
  ["mops", "fan-mop-clip-and-wooden-stick-3.webp"],
  ["mops", "fan-mop-head-general-400g.webp"],
  ["mops", "hygienic-fan-mop-complete-yellow-1.webp"],
  ["mops", "hygienic-fan-mop-complete-yellow-2.webp"],
  ["mops", "round-cotton-mop-with-wooden-stick-400g.webp"],
  ["paper-products", "1-ply-toilet-paper-48R.webp"],
  ["paper-products", "2-ply-toilet-paper-48R.webp"],
  ["paper-products", "autocut-hand-towel-200mmx150m-6pack.webp"],
  [
    "paper-products",
    "box-of-3000-serviettes-for-take-away-outlets-2-ply-1.webp",
  ],
  [
    "paper-products",
    "box-of-3000-serviettes-for-take-away-outlets-2-ply-2.webp",
  ],
  ["paper-products", "center-perf-hand-towel-210mmx300m-4pack.webp"],
  [
    "paper-products",
    "decca-roll-hand-towel-premium-100mmx54m-8rolls-per-pack.webp",
  ],
  [
    "paper-products",
    "folded-hand-towels-12-packets-of-200-towels-2-ply-1.webp",
  ],
  [
    "paper-products",
    "folded-hand-towels-12-packets-of-200-towels-2-ply-2.webp",
  ],
  [
    "paper-products",
    "folded-hand-towels-12-packets-of-200-towels-2-ply-3.webp",
  ],
  ["paper-products", "garage-roll-150mm-2point4kg.webp"],
  ["paper-products", "garage-roll-200mm-4point8kg.webp"],
  ["trollies", "small-family-trolley-yellow-20L.webp"],
] as const;

function titleFromFilename(filename: string) {
  return filename
    .replace(".webp", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/Point/g, ".");
}

function slugFromFilename(category: string, filename: string) {
  return `${category}-${filename
    .replace(".webp", "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;
}

const groupedAssetFiles = Array.from(
  assetFiles.reduce((groups, [category, filename]) => {
    const numberedVariant = filename.match(/^(.*)-(\d+)\.webp$/i);
    const baseFilename = numberedVariant
      ? `${numberedVariant[1]}.webp`
      : filename;
    const key = `${category}/${baseFilename}`;
    const group = groups.get(key);

    if (group) {
      group.filenames.push(filename);
    } else {
      groups.set(key, { category, baseFilename, filenames: [filename] });
    }

    return groups;
  }, new Map<string, { category: (typeof assetFiles)[number][0]; baseFilename: string; filenames: string[] }>()),
).map(([, { category, baseFilename, filenames }]) => ({
  category,
  baseFilename,
  filenames: filenames.sort((first, second) => {
    const firstNumber = Number(first.match(/-(\d+)\.webp$/i)?.[1] ?? 0);
    const secondNumber = Number(second.match(/-(\d+)\.webp$/i)?.[1] ?? 0);
    return firstNumber - secondNumber;
  }),
}));

export const products: Product[] = groupedAssetFiles.map(
  ({ category, baseFilename, filenames }, index) => {
    const gallery = filenames.map(
      (filename) => `/images/${category}/${filename}`,
    );
    const slug = slugFromFilename(category, baseFilename);
    const details = productDetailsBySlug[slug];
    return {
      id: index + 1,
      slug,
      name: titleFromFilename(baseFilename),
      parentCategory: categoryLabels[category],
      subcategory: details?.subcategory ?? "",
      price: details?.price ?? 0,
      unit: details?.unit ?? "Each",
      tag: details?.tag ?? "Available",
      image: gallery[0],
      gallery,
      desc:
        details?.desc ??
        "Product description coming soon. Please contact us for more information.",
      directions:
        details?.directions ??
        "Usage instructions coming soon. Please contact us before use.",
      caution:
        details?.caution ??
        "Safety information coming soon. Follow the product label instructions.",
    };
  },
);

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
