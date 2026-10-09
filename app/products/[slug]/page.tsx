import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, ShoppingCart } from "lucide-react";
import { getProduct, products, whatsappLink } from "@/lib/catalog";
import { ProductGallery } from "@/components/product-gallery";
import { SiteHeader } from "@/components/site-header";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  return product
    ? { title: `${product.name} | Ele Group`, description: product.desc }
    : { title: "Product | Ele Group" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const orderMessage = `Hello Ele Group, I would like to order ${product.name} (${product.unit}) at R${product.price}. Please confirm availability and delivery.`;
  return (
    <>
      <SiteHeader />
      <main className="product-page">
        <div className="shell">
          <Link href="/#shop" className="product-back">
            <ArrowLeft size={16} /> Back to supplies
          </Link>
          <div className="product-detail-grid">
            <ProductGallery name={product.name} images={product.gallery} />
            <article className="product-detail-copy">
              <span className="eyebrow">
                {product.parentCategory} · {product.subcategory}
              </span>
              <h1>{product.name}</h1>
              <p className="product-detail-description">{product.desc}</p>
              <div className="product-detail-price">
                <strong>R{product.price}</strong>
                <span>{product.unit}</span>
              </div>
              <div className="product-info-block">
                <h2>Usage</h2>
                <p>{product.directions}</p>
              </div>
              <div className="product-info-block">
                <h2>Caution</h2>
                <p>{product.caution}</p>
              </div>
              <div className="product-detail-actions">
                <a
                  className="button button-primary"
                  href={whatsappLink(orderMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} /> Order on WhatsApp
                </a>
                <Link className="button button-quiet" href="/#shop">
                  <ShoppingCart size={18} /> Continue shopping
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
