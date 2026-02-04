import Image from "next/image";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Contact 3 Pillars Holistic Health",
  description:
    "Contact 3 Pillars Holistic Health in Wheat Ridge, CO to schedule a consultation for acupuncture, Ayurveda, or herbal medicine.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <section className="about-hero" aria-label="Contact hero">
        <div className="about-hero-media">
          <Image
            src="/assets/images/Foeller-Fall2024-2-scaled.jpg"
            alt="3 Pillars Holistic Health"
            fill
            priority
            sizes="100vw"
          />
          <div className="about-hero-overlay" aria-hidden="true" />
        </div>
        <div className="about-hero-content is-middle">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow">Contact</p>
              <h1 className="hero-title">Get in Touch</h1>
              <p className="hero-body">
                I’d love to support you on your path to feeling better. Get in
                touch with me here, or schedule online.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="intro-section">
        <div className="intro-content">
          <p className="intro-eyebrow">Contact</p>
          <h2 className="intro-heading">Get in Touch</h2>
          <p>
            I’d love to support you on your path to feeling better. Get in touch
            with me here, or schedule online.
          </p>
          <div className="contact-details">
            <p>6500 W 44th Ave, Wheat Ridge, CO 80033, United States</p>
            <p>
              <a href="tel:17202327036">+1 (720)-232-7036</a>
            </p>
            <p>
              <a href="mailto:alana@3pillarsholistichealth.com">
                alana@3pillarsholistichealth.com
              </a>
            </p>
          </div>
          <a
            className="intro-cta"
            href="https://www.google.com/maps/dir//6500+W+44th+Ave,+Wheat+Ridge,+CO+80033/@39.776381,-105.1511324,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e5d6acab334cfe1:0x8e15d007f59723ca!2m2!1d-105.0687315!2d39.7764101?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            GET DIRECTIONS
            <span className="cta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 5L20 12L13 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <div className="contact-map">
            <iframe
              title="3 Pillars Holistic Health location"
              src="https://www.google.com/maps?q=6500%20W%2044th%20Ave%2C%20Wheat%20Ridge%2C%20CO%2080033&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        <div className="intro-media">
          <form className="contact-form">
            <h2>Schedule a Free Phone Consult</h2>
            <label>
              Full Name
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              How can I help?
              <textarea name="message" rows="4" required />
            </label>
            <button className="service-link" type="submit">
              SUBMIT REQUEST
              <span className="cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 5L20 12L13 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
