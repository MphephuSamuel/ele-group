export type Product = {
  id: number
  slug: string
  name: string
  parentCategory: string
  subcategory: string
  price: number
  unit: string
  tag: string
  image: string
  gallery: string[]
  desc: string
  directions: string
  caution: string
}

export const WHATSAPP_NUMBER = '27764238606'

export const categoryGroups = [
  { name: 'Chemicals', subcategories: ['General', 'Car'] },
  { name: 'Paper Products', subcategories: ['Toilet Paper', 'Garage Roll', 'Hand Towels', 'Serviette'] },
  { name: 'Trollies', subcategories: [] },
  { name: 'Mop', subcategories: [] },
  { name: 'Dustbins', subcategories: [] },
  { name: 'Brooms', subcategories: [] },
]

const image = (url: string) => `https://images.unsplash.com/${url}?auto=format&fit=crop&w=900&q=85`

export const products: Product[] = [
  { id: 1, slug: 'heavy-duty-refuse-bags', name: 'Heavy Duty Refuse Bags', parentCategory: 'Chemicals', subcategory: 'General', price: 189, unit: 'Pack of 100', tag: 'Best seller', image: image('photo-1604187351574-c75ca79f5807'), gallery: [image('photo-1604187351574-c75ca79f5807'), image('photo-1583947215259-38e31be8751f')], desc: 'Strong, leak-resistant bags for homes, offices and commercial sites.', directions: 'Use for general waste disposal. Do not use for hot liquids.', caution: 'Keep away from children and open flames.' },
  { id: 2, slug: 'multi-purpose-car-cleaner', name: 'Multi-Purpose Car Cleaner', parentCategory: 'Chemicals', subcategory: 'Car', price: 84, unit: '5 litre', tag: 'Everyday essential', image: image('photo-1583947215259-38e31be8751f'), gallery: [image('photo-1583947215259-38e31be8751f'), image('photo-1604187351574-c75ca79f5807')], desc: 'Concentrated cleaner for vehicle interiors, dashboards and washable surfaces.', directions: 'Dilute 1:10 for regular cleaning or use neat on stubborn marks.', caution: 'Do not mix with bleach. Avoid eye contact.' },
  { id: 3, slug: 'commercial-general-cleaner', name: 'Commercial General Cleaner', parentCategory: 'Chemicals', subcategory: 'General', price: 112, unit: '5 litre', tag: 'Popular', image: image('photo-1583947215259-38e31be8751f'), gallery: [image('photo-1583947215259-38e31be8751f')], desc: 'Reliable everyday cleaning concentrate for offices, facilities and homes.', directions: 'Dilute with water according to the surface and soil level.', caution: 'Wear gloves and never combine with other chemicals.' },
  { id: 4, slug: 'premium-2-ply-toilet-roll', name: 'Premium 2-Ply Toilet Roll', parentCategory: 'Paper Products', subcategory: 'Toilet Paper', price: 238, unit: 'Pack of 48', tag: 'Value pack', image: image('photo-1584622781564-1d987f7333c1'), gallery: [image('photo-1584622781564-1d987f7333c1')], desc: 'Soft, reliable 2-ply tissue for busy facilities and workplaces.', directions: 'Store in a clean, dry area.', caution: 'Keep packaging sealed until use.' },
  { id: 5, slug: 'industrial-garage-roll', name: 'Industrial Garage Roll', parentCategory: 'Paper Products', subcategory: 'Garage Roll', price: 179, unit: 'Pack of 2', tag: 'Workshop essential', image: image('photo-1600185365483-26d7a4cc7519'), gallery: [image('photo-1600185365483-26d7a4cc7519')], desc: 'High-absorbency paper roll for workshops, garages and maintenance teams.', directions: 'Tear off sheets as needed for spills and wiping.', caution: 'Keep away from sparks and open flames.' },
  { id: 6, slug: 'paper-hand-towel-roll', name: 'Paper Hand Towel Roll', parentCategory: 'Paper Products', subcategory: 'Hand Towels', price: 169, unit: 'Pack of 6', tag: 'Fast moving', image: image('photo-1600185365483-26d7a4cc7519'), gallery: [image('photo-1600185365483-26d7a4cc7519')], desc: 'Absorbent rolls for kitchens, bathrooms and service counters.', directions: 'Dispense one sheet at a time to reduce waste.', caution: 'Keep away from moisture before use.' },
  { id: 7, slug: 'white-serviette-pack', name: 'White Serviette Pack', parentCategory: 'Paper Products', subcategory: 'Serviette', price: 79, unit: 'Ream of 500', tag: 'Catering ready', image: image('photo-1568667256549-094345857637'), gallery: [image('photo-1568667256549-094345857637')], desc: 'Neat, practical serviettes for catering, takeaway counters and events.', directions: 'Store flat in a dry environment.', caution: 'Keep sealed to prevent moisture damage.' },
  { id: 8, slug: 'commercial-cleaning-trolley', name: 'Commercial Cleaning Trolley', parentCategory: 'Trollies', subcategory: 'Trollies', price: 849, unit: 'Each', tag: 'Bulk ready', image: image('photo-1584634731339-252c581abfc5'), gallery: [image('photo-1584634731339-252c581abfc5')], desc: 'Organised mobile storage for cleaning teams and facility staff.', directions: 'Load evenly and use on smooth, stable surfaces.', caution: 'Do not exceed the recommended load.' },
  { id: 9, slug: 'commercial-mop', name: 'Commercial Mop', parentCategory: 'Mop', subcategory: 'Mop', price: 99, unit: 'Each', tag: 'Everyday essential', image: image('photo-1584634731339-252c581abfc5'), gallery: [image('photo-1584634731339-252c581abfc5')], desc: 'Durable mop for regular floor care in homes and facilities.', directions: 'Rinse after use and hang to dry.', caution: 'Do not store wet in a sealed container.' },
  { id: 10, slug: 'wheelie-dustbin', name: 'Wheelie Dustbin', parentCategory: 'Dustbins', subcategory: 'Dustbins', price: 219, unit: 'Each', tag: 'Practical choice', image: image('photo-1601050690597-df0568f70950'), gallery: [image('photo-1601050690597-df0568f70950')], desc: 'Practical, easy-to-move waste bin for homes, offices and facilities.', directions: 'Use with a suitable refuse bag and clean regularly.', caution: 'Do not place hot ash or burning materials inside.' },
  { id: 11, slug: 'heavy-duty-broom', name: 'Heavy Duty Broom', parentCategory: 'Brooms', subcategory: 'Brooms', price: 129, unit: 'Each', tag: 'Popular', image: image('photo-1584634731339-252c581abfc5'), gallery: [image('photo-1584634731339-252c581abfc5')], desc: 'Strong bristles for dependable sweeping across indoor and outdoor areas.', directions: 'Sweep with steady strokes and rinse bristles when needed.', caution: 'Store upright in a dry area.' },
]

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
