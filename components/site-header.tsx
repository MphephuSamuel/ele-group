"use client";

import { useState } from "react";
import { Menu, Phone, ShoppingCart } from "lucide-react";

type SiteHeaderProps = {
  cartCount?: number;
  onCartOpen?: () => void;
};

export function SiteHeader({ cartCount = 0, onCartOpen }: SiteHeaderProps) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Reliable supplies. Delivered with care.</span>
          <div className="topbar-links">
            <a href="tel:+27764238606">
              <Phone size={14} /> 076 423 8606
            </a>
            <span className="hidden sm:inline">Mon-Fri, 08:00-17:00</span>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="/#top" className="brand" aria-label="Ele Group home">
            <span className="brand-mark">E</span>
            <span>
              <strong>ELE</strong>
              <small>GROUP</small>
            </span>
          </a>
          <nav className={`main-nav ${mobileMenu ? "is-open" : ""}`}>
            <a href="/#shop" onClick={() => setMobileMenu(false)}>
              Shop supplies
            </a>
            <a href="/#about" onClick={() => setMobileMenu(false)}>
              About us
            </a>
            <a href="/#delivery" onClick={() => setMobileMenu(false)}>
              Delivery
            </a>
            <a href="/#contact" onClick={() => setMobileMenu(false)}>
              Contact
            </a>
          </nav>
          <div className="header-actions">
            {onCartOpen ? (
              <button
                className="cart-button"
                onClick={onCartOpen}
                aria-label={`Open cart, ${cartCount} items`}
              >
                <ShoppingCart size={20} />
                <span className="hidden sm:inline">Your cart</span>
                {cartCount > 0 && <b>{cartCount}</b>}
              </button>
            ) : (
              <a className="cart-button" href="/#shop">
                <ShoppingCart size={20} />
                <span className="hidden sm:inline">Your cart</span>
              </a>
            )}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
