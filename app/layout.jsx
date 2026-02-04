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
              <div className="footer-contact-links">
                <a className="footer-contact-link" href="mailto:alana@3pillarsholistichealth.com">
                  <span className="footer-contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 6h16v12H4z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m4 7 8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  alana@3pillarsholistichealth.com
                </a>
                <a className="footer-contact-link" href="tel:+17202327036">
                  <span className="footer-contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 4h4l2 4-3 2a12 12 0 0 0 5 5l2-3 4 2v4c0 1.1-.9 2-2 2-8.3 0-15-6.7-15-15 0-1.1.9-2 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  720-232-7036
                </a>
                <div className="footer-socials">
                  <a
                    className="footer-social-link"
                    href="https://www.facebook.com/people/3-Pillars-Acupuncture-Holistic-Health/61558587860628/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="3 Pillars on Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M13 9.5V8c0-.6.4-1 1-1h1.5V5H14c-2 0-3.5 1.5-3.5 3.5v1H9v2.5h1.5V19H13v-7H15l.5-2.5H13Z" />
                    </svg>
                  </a>
                  <a
                    className="footer-social-link"
                    href="https://www.instagram.com/3pillarsholistichealth/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="3 Pillars on Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect
                        x="5"
                        y="5"
                        width="14"
                        height="14"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
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
