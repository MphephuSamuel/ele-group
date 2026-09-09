'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { categoryGroups, products, type Product, whatsappLink } from '@/lib/catalog'
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Clock3,
  HeartHandshake,
  Menu,
  Minus,
  PackageCheck,
  Phone,
  Plus,
  Search,
  ShoppingCart,
  Sparkles,
  Truck,
  X,
  MessageCircle,
} from 'lucide-react'

const categories = [{ name: 'All products', count: products.length }, ...categoryGroups.map((category) => ({ ...category, count: products.filter((product) => product.parentCategory === category.name).length }))]

type CartItem = Product & { quantity: number }

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('All products')
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 4
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const filteredProducts = useMemo(() => products.filter((product) => {
    const query = search.toLowerCase().trim()
    const matchesParent = activeCategory === 'All products' || product.parentCategory === activeCategory
    const matchesSubcategory = !activeSubcategory || product.subcategory === activeSubcategory
    return matchesParent && matchesSubcategory && (!query || `${product.name} ${product.parentCategory} ${product.subcategory} ${product.desc}`.toLowerCase().includes(query))
  }), [activeCategory, activeSubcategory, search])
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / pageSize))
  const visibleProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize)

  useEffect(() => { setPage(1) }, [activeCategory, activeSubcategory, search])

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function addToCart(product: Product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      return [...current, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  function updateQuantity(id: number, change: number) {
    setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0))
  }

  const checkoutMessage = `Hello Ele Group, I would like to place an order:\n\n${cart.map((item) => `• ${item.name} x${item.quantity} — R${item.price * item.quantity}`).join('\n')}\n\nEstimated total: R${cartTotal}\n\nPlease confirm availability and delivery.`

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="topbar"><div className="shell topbar-inner"><span>Reliable supplies. Delivered with care.</span><div className="topbar-links"><a href="tel:+27764238606"><Phone size={14} /> 076 423 8606</a><span className="hidden sm:inline">Mon–Fri, 08:00–17:00</span></div></div></div>
      <header className="site-header"><div className="shell header-inner">
        <a href="#top" className="brand" aria-label="Ele Group home"><span className="brand-mark">E</span><span><strong>ELE</strong><small>GROUP</small></span></a>
        <nav className={`main-nav ${mobileMenu ? 'is-open' : ''}`}><a href="#shop" onClick={() => setMobileMenu(false)}>Shop supplies</a><a href="#about" onClick={() => setMobileMenu(false)}>About us</a><a href="#delivery" onClick={() => setMobileMenu(false)}>Delivery</a><a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a></nav>
        <div className="header-actions"><button className="cart-button" onClick={() => setCartOpen(true)} aria-label={`Open cart, ${cartCount} items`}><ShoppingCart size={20} /><span className="hidden sm:inline">Your cart</span>{cartCount > 0 && <b>{cartCount}</b>}</button><button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu"><Menu size={22} /></button></div>
      </div></header>

      <section className="hero" id="top"><div className="shell hero-grid"><div className="hero-copy"><div className="eyebrow"><Sparkles size={15} /> Your dependable supply partner</div><h1>Everything you need.<br /><em>Delivered simply.</em></h1><p>From cleaning essentials to workplace supplies, Ele Group helps homes, businesses and facilities stay stocked and ready.</p><div className="hero-actions"><a href="#shop" className="button button-primary">Browse supplies <ArrowRight size={17} /></a><a href={whatsappLink('Hello Ele Group, I would like help choosing supplies.')} className="button button-quiet"><MessageCircle size={18} /> Chat on WhatsApp</a></div><div className="hero-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>S</span></div><span>Trusted by businesses across<br /><strong>Gauteng &amp; beyond</strong></span></div></div><div className="hero-image"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=90" alt="Cardboard boxes prepared for delivery" /><div className="hero-note"><Truck size={20} /><span><strong>Fast, friendly delivery</strong><small>Local delivery available</small></span></div></div></div></section>

      <section className="benefits"><div className="shell benefits-grid"><div><PackageCheck size={22} /><span><strong>Quality checked</strong><small>Products you can rely on</small></span></div><div><Truck size={22} /><span><strong>Delivery made easy</strong><small>To your door, on schedule</small></span></div><div><HeartHandshake size={22} /><span><strong>Human service</strong><small>Real help when you need it</small></span></div><div><Clock3 size={22} /><span><strong>Quick response</strong><small>Order on WhatsApp today</small></span></div></div></section>

      <section className="shop-section" id="shop"><div className="shell"><div className="section-heading"><div><div className="eyebrow">Our everyday essentials</div><h2>Stock up with confidence.</h2></div><p>Browse our most requested supplies. Need something specific? <a href={whatsappLink('Hello Ele Group, I am looking for a product not listed in your catalogue.')}>Ask us on WhatsApp.</a></p></div><div className="shop-toolbar"><div className="category-list">{categories.map((category) => <div className="category-group" key={category.name}><button className={activeCategory === category.name && !activeSubcategory ? 'active' : ''} onClick={() => { setActiveCategory(category.name); setActiveSubcategory(null) }}>{category.name}<span>{category.count}</span></button>{category.subcategories?.length ? <div className="subcategory-list">{category.subcategories.map((subcategory) => <button key={subcategory} className={activeSubcategory === subcategory ? 'active' : ''} onClick={() => { setActiveCategory(category.name); setActiveSubcategory(subcategory) }}>{subcategory}</button>)}</div> : null}</div>)}</div><label className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search supplies..." aria-label="Search supplies" /></label></div><div className="product-grid">{visibleProducts.map((product) => <article className="product-card" key={product.id}><Link href={`/products/${product.slug}`} className="product-card-link"><div className="product-image"><img src={product.image} alt={product.name} /><span>{product.tag}</span></div><div className="product-details"><span className="product-category">{product.parentCategory} · {product.subcategory}</span><h3>{product.name}</h3><p>{product.desc}</p><div className="product-bottom"><div><strong>R{product.price}</strong><small>{product.unit}</small></div><button className="add-button" onClick={() => addToCart(product)}>Add to cart</button></div><details><summary>Usage &amp; caution <ChevronDown size={15} /></summary><p><strong>Directions:</strong> {product.directions}<br /><strong>Caution:</strong> {product.caution}</p></details></div></Link><button className="quick-add" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}><Plus size={19} /></button></article>)}</div>{filteredProducts.length > 0 && <div className="pagination" aria-label="Product pagination"><button disabled={page === 1} onClick={() => setPage((current) => current - 1)}>Previous</button><span>Page {page} of {pageCount}</span><button disabled={page === pageCount} onClick={() => setPage((current) => current + 1)}>Next</button></div>}{visibleProducts.length === 0 && <div className="empty-state"><Search size={28} /><h3>No supplies found</h3><p>Try another search or browse all products.</p><button onClick={() => { setSearch(''); setActiveCategory('All products') }}>Clear filters</button></div>}</div></section>

      <section className="delivery-section" id="delivery"><div className="shell delivery-card"><div><div className="eyebrow">Need a bigger order?</div><h2>We make bulk buying feel easy.</h2><p>Tell us what you need, where you are, and when you need it. We will put together a practical quote for your business or event.</p><a href={whatsappLink('Hello Ele Group, I would like a quote for a bulk order.')} className="button button-light">Request a bulk quote <ArrowRight size={17} /></a></div><div className="delivery-list"><div><span>01</span><p><strong>Send your list</strong><small>Message us on WhatsApp</small></p></div><div><span>02</span><p><strong>We confirm</strong><small>Availability and pricing</small></p></div><div><span>03</span><p><strong>We deliver</strong><small>Reliable, local delivery</small></p></div></div></div></section>

      <footer id="about" className="footer"><div className="shell footer-grid"><div><a href="#top" className="brand brand-footer"><span className="brand-mark">E</span><span><strong>ELE</strong><small>GROUP</small></span></a><p>General supply and delivery for homes, businesses and teams that keep things moving.</p></div><div><h3>Explore</h3><a href="/shop">Shop supplies</a><a href="/delivery">Bulk orders</a><a href="/contact">Get in touch</a></div><div id="contact"><h3>Contact</h3><a href="tel:+27764238606">076 423 8606</a><a href={whatsappLink('Hello Ele Group, I have a question.')}>WhatsApp us</a><span>Gauteng, South Africa</span></div></div><div className="shell footer-bottom"><span>© 2026 Ele Group. All rights reserved.</span><span>Built for better supply.</span></div></footer>

      {cartOpen && <div className="cart-overlay" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setCartOpen(false) }}><aside className="cart-drawer" aria-label="Shopping cart"><div className="cart-header"><div><span className="eyebrow">Your order</span><h2>Cart <small>({cartCount})</small></h2></div><button onClick={() => setCartOpen(false)} aria-label="Close cart"><X size={22} /></button></div>{cart.length === 0 ? <div className="cart-empty"><ShoppingCart size={34} /><h3>Your cart is empty</h3><p>Add a few essentials and they will appear here.</p><button className="button button-primary" onClick={() => setCartOpen(false)}>Browse supplies</button></div> : <><div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt="" /><div><strong>{item.name}</strong><small>R{item.price} · {item.unit}</small><div className="quantity"><button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity"><Minus size={14} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity"><Plus size={14} /></button></div></div><b>R{item.price * item.quantity}</b></div>)}</div><div className="cart-summary"><div><span>Estimated total</span><strong>R{cartTotal}</strong></div><p>Delivery fees, if applicable, will be confirmed on WhatsApp.</p><a className="button button-whatsapp" href={whatsappLink(checkoutMessage)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Checkout on WhatsApp</a><button className="clear-cart" onClick={() => setCart([])}>Clear cart</button></div></>}</aside></div>}
    </main>
  )
}
