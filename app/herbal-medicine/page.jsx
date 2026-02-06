import Image from "next/image";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Herbal Medicine in Wheat Ridge, CO",
  description:
    "Custom Chinese herbal formulas for immunity, digestion, energy, and balance in Wheat Ridge, CO. Book a consult at 3 Pillars Holistic Health.",
  path: "/herbal-medicine",
});

export default function HerbalMedicinePage() {
  const faqs = [
    {
      question: "What conditions can herbal medicine help with?",
      answer:
        "Chinese herbal medicine can support a wide range of concerns, including digestive issues, immune support, fatigue, hormonal imbalances, stress, sleep difficulties, and chronic conditions. Formulas are customized to your specific needs.",
    },
    {
      question: "Are Chinese herbs safe?",
      answer:
        "Yes. The formulas used are sourced from high-quality suppliers and prescribed by a trained practitioner. Herbs are chosen based on your constitution, medications, and health history to ensure safety and effectiveness.",
    },
    {
      question: "How long before I notice results?",
      answer:
        "Response time varies by person and condition, but many patients notice improvements within the first few weeks. Chronic conditions may require longer-term support.",
    },
    {
      question: "Do I need a consultation before taking herbs?",
      answer:
        "Yes. An herbal consultation is essential to determine the right formula and dosage for your unique constitution and current imbalances.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">HERBAL MEDICINE</p>
            <h1 className="hero-title">Herbal Medicine in Wheat Ridge, CO</h1>
            <p className="hero-body">
              Personalized Chinese herbal formulas to support immunity, balance
              digestion, and promote long-term wellness in Wheat Ridge, Colorado.
            </p>
            <a
              className="hero-cta"
              href="https://acusimple.com/access/10025/#/appointments/"
              rel="noopener noreferrer"
              target="_blank"
            >
              SCHEDULE A CONSULTATION
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
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-media">
          <Image
            src="/assets/images/Herbal-Medicine.webp"
            alt="Herbal medicine ingredients"
            width={2048}
            height={1366}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="intro-content">
          <p className="intro-eyebrow">Herbal Medicine</p>
          <h2>Custom Formulas for Lasting Balance</h2>
          <p>
            Nature has given us an incredible pharmacy. Chinese herbal medicine
            provides a tailored approach to addressing imbalances in mind and
            body, supporting your immune system and naturally boosting your
            energy. Each formula is crafted specifically for your unique needs.
            Chinese herbs are a safe and natural way to treat many common
            ailments, including cold and flu symptoms, digestive disorders,
            migraines, insomnia, fatigue, and a number of autoimmune and chronic
            health conditions.
          </p>
          <a className="intro-cta" href="/contact">
            ASK A QUESTION
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
        </div>
      </section>

      <section className="intro-section intro-section--text-only evergreen-section">
        <div className="intro-content">
          <p className="intro-eyebrow">Evergreen Herbs</p>
          <h2>Highest Quality Chinese Herbs</h2>
          <p>
            From &quot;seed to shelf,&quot; Evergreen ensures purity, safety and
            potency in our herbal extracts by following standards of current Good
            Manufacturing Practice (cGMP) established by the US Food and Drug
            Administration (FDA) and World Health Organization (WHO). Efforts put
            forth by their team of experts in chemistry, microbiology, and
            Chinese medicine result in a Certificate of Analysis (COA), which
            guarantees that your practitioner receives the highest quality
            product that is safe and effective.
          </p>
          <ul className="evergreen-points" aria-label="Evergreen quality standards">
            <li>cGMP compliant</li>
            <li>FDA & WHO aligned standards</li>
            <li>Certificate of Analysis (COA)</li>
          </ul>
          <a
            className="intro-cta"
            href="https://www.evherbs.com/about-us/why-evergreen-herbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHY EVERGREEN HERBS
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
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-inner">
          <h2>FAQ</h2>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-header">
          <p className="pricing-eyebrow">Get Started Today</p>
          <h2>Book An Appointment Now</h2>
        </div>

        <div className="pricing-cards single">
          <article className="pricing-card">
            <h3>Herbal Medicine</h3>
            <ul>
              <li>Herbal Medicine Consultation $125</li>
              <li>Follow-up Herbal Medicine Consultation $65</li>
            </ul>
            <a
              className="service-link"
              href="https://acusimple.com/access/10025/#/appointments/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCHEDULE NOW
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
          </article>
        </div>

        <div className="pricing-note">
          <h3>Fee Schedule</h3>
          <p>
            I am in-network with Humana CO and TriWest Healthcare Alliance. For
            patients with other insurance providers, many are able to be
            reimbursed for services by submitting a “superbill,” an invoice with
            specific insurance coding, to their insurance provider. I’m happy to
            provide you with a superbill for reimbursement.
          </p>
          <p>
            To find out about your policy’s acupuncture coverage, call the patient
            number on the back of your card and ask:
          </p>
          <ul>
            <li>Do I have out-of-network coverage for acupuncture?</li>
            <li>What percentage of the visit is covered?</li>
            <li>Is there a limit to how many visits per year?</li>
            <li>Do I have an out-of-network deductible to meet? If so, how much has been met?</li>
            <li>What diagnoses are covered?</li>
            <li>How do I submit super-bills?</li>
          </ul>
          <p>
            You can use your flexible spending and health savings account debit
            cards for services offered. These pretax accounts provided by some
            insurance companies are a great way to offset the cost of your
            out-of-pocket healthcare costs. And they’ll cover acupuncture!.
          </p>
          <p>
            I do offer a sliding scale for a limited number of patients in
            financial need. Please call or email to inquire about sliding scale
            pricing and treatment options.
          </p>
          <p>
            Please call to schedule house call appointments and Yoga Therapy
            sessions. Prices for these services vary depending on location and
            the number of participants.
          </p>
          <p>
            Cancellation Policy: Please provide 24-hour notice of cancellation. A
            fee of $45 will be charged for canceled appointments within less than
            24-hour notice.
          </p>
        </div>
      </section>
    </div>
  );
}
