import "./globals.css";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Header from "./components/Header";
import { baseMetadata, businessName, defaultImage, siteUrl } from "./lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = baseMetadata;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#localbusiness`,
  name: businessName,
  url: siteUrl,
  description:
    "Acupuncture, Ayurveda, and herbal medicine in Wheat Ridge, CO. Personalized holistic care and wellness services.",
  image: defaultImage,
  telephone: "+1-720-232-7036",
  email: "alana@3pillarsholistichealth.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6500 W 44th Ave",
    addressLocality: "Wheat Ridge",
    addressRegion: "CO",
    postalCode: "80033",
    addressCountry: "US",
  },
  areaServed: "Wheat Ridge, CO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <footer
          className="site-footer"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <div className="footer-inner">
            <div className="footer-brand">
              <Image
                src="/assets/images/3-Pillars-Logo-V-2.png"
                alt="3 Pillars Holistic Health"
                width={567}
                height={233}
                sizes="140px"
              />
              <p className="footer-name" itemProp="name">
                3 Pillars Acupuncture & Holistic Health
              </p>
              <p className="footer-tagline">
                Acupuncture, herbal medicine, and holistic wellness in Wheat Ridge,
                CO.
              </p>
            </div>

            <div className="footer-contact">
              <p className="footer-heading">Visit</p>
              <address
                className="footer-address"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">6500 W 44th Ave</span>
                <span>
                  <span itemProp="addressLocality">Wheat Ridge</span>,
                  <span itemProp="addressRegion"> CO</span>
                  <span itemProp="postalCode"> 80033</span>
                </span>
              </address>
              <p className="footer-subtext">Appointments by consultation.</p>
              <a
                className="footer-cta"
                href="https://acusimple.com/access/10025/#/appointments/"
                target="_blank"
                rel="noreferrer"
              >
                Schedule Now
              </a>
            </div>

            <div className="footer-nav">
              <p className="footer-heading">Explore</p>
              <nav aria-label="Footer navigation">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/acupuncture">Acupuncture</a>
                <a href="/ayurveda">Ayurveda</a>
                <a href="/herbal-medicine">Herbal Medicine</a>
                <a href="/contact">Contact</a>
                <a href="/community-partners">Community Partners</a>
              </nav>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 3 Pillars Acupuncture & Holistic Health. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
