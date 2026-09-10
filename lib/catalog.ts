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

export const WHATSAPP_NUMBER = "27764238606";

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
  ["chemicals", "bleach-liquid-5point2-percent -25L.webp"],
  ["chemicals", "bleach-liquid-5point2-percent -5L.webp"],
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
  ["chemicals", "hp-auto-shampoo-for-carwash_25L.webp"],
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
  ["chemicals", "thick-bleach-5point2-percent -25L.webp"],
  ["chemicals", "thick-bleach-5point2-percent -5L.webp"],
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
    return {
      id: index + 1,
      slug: slugFromFilename(category, baseFilename),
      name: titleFromFilename(baseFilename),
      parentCategory: categoryLabels[category],
      subcategory: "",
      price: 99,
      unit: "Each",
      tag: "Available",
      image: gallery[0],
      gallery,
      desc: "Reliable product for homes, businesses and facilities.",
      directions:
        "Use according to the product requirements and intended application.",
      caution: "Store safely and follow the product label instructions.",
    };
  },
);

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
