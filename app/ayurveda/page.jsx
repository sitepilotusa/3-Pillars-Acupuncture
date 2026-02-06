import Image from "next/image";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Ayurveda in Wheat Ridge, CO",
  description:
    "Personalized Ayurvedic consultations, nutrition therapy, and lifestyle guidance in Wheat Ridge, CO. Restore balance with 3 Pillars Holistic Health.",
  path: "/ayurveda",
});

export default function AyurvedaPage() {
  const faqs = [
    {
      question: "How can Ayurveda help improve my health?",
      answer:
        "Ayurveda addresses the root causes of imbalance in your constitution (Doshas), helping manage conditions like digestive issues, stress, skin disorders, and chronic pain by restoring natural harmony.",
    },
    {
      question: "What can I expect from an Ayurvedic consultation?",
      answer:
        "Ayurveda offers personalized treatments based on individual constitutions, making it adaptable for most people. However, it’s always recommended to consult a qualified Ayurvedic practitioner for specific health concerns. During a consultation, the practitioner will assess your physical and emotional health, lifestyle, and dietary habits to create a customized plan focused on restoring balance and promoting overall well-being.",
    },
    {
      question: "How often should I receive Abhyanga?",
      answer:
        "For optimal results, Abhyanga can be done weekly or monthly, depending on your individual needs and lifestyle. Some practitioners recommend daily self-massage.",
    },
    {
      question: "How does Nutrition Therapy differ from regular dieting?",
      answer:
        "Unlike dieting, Nutrition Therapy is tailored to individual health needs and focuses on nourishing the body with whole foods to prevent and treat health conditions, not just weight loss.",
    },
    {
      question: "Can Nutrition Therapy help with chronic health conditions?",
      answer:
        "Yes, Nutrition Therapy can be highly effective in managing and improving chronic conditions such as diabetes, heart disease, digestive disorders, and autoimmune diseases.",
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
            <p className="hero-eyebrow">AYURVEDA SERVICES</p>
            <h1 className="hero-title">Ayurveda in Wheat Ridge, CO</h1>
            <p className="hero-body">
              Restore balance through personalized Ayurvedic care, nutrition
              guidance, and lifestyle support in Wheat Ridge, Colorado.
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
            alt="Herbal medicine and Ayurveda"
            width={2048}
            height={1366}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="intro-content">
          <p className="intro-eyebrow">Ayurveda</p>
          <h2>Ancient Wisdom for Modern Wellness</h2>
          <p>
            Ayurveda is a 5,000 year old system of medicine with roots in India
            that can be traced back to origins documented in the Vedas. Ayurveda,
            loosely translated as ‘Knowledge of Life,’ offers a holistic approach
            focused on living a healthy and balanced life in harmony with nature.
            Ayurveda focuses on maintaining and restoring health by achieving
            balance in the body, mind, and spirit through diet, daily routine,
            herbal medicine, Panchakarma (cleansing practices), Yoga and Rasayana
            (rejuvenation). According to Ayurveda, all of creation can be
            described in terms of five elements or qualities: space (ether), air,
            fire, water, and earth. The elements combine into three Doshas: Vata,
            consisting of space and air; Pitta, consisting primarily of fire but
            also having an oily, watery aspect, and Kapha, consisting of water
            and earth. Each person is born with a unique constitution (Prakriti)
            or proportion of the Doshas. An Ayurvedic consultation helps you
            understand your constitution as well as your imbalances and provides
            tools to help restore balance and optimal health.
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

      <section className="services-section">
        <div className="services-header is-centered">
          <h2 className="services-heading">
            <span>Ayurvedic Medicine</span>
            <span>Ancient Healing for Modern Wellness</span>
          </h2>
          <div className="services-copy">
            <p>
              Support balance through restorative bodywork, nutrition guidance,
              and therapeutic movement.
            </p>
          </div>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <Image
              src="/assets/images/Abhyanga.jpg"
              alt="Abhyanga treatment"
              className="service-image"
              width={750}
              height={503}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className="service-body">
              <h3>Abhyanga</h3>
              <p>
                Abhyanga is a traditional Ayurvedic treatment in which warm
                medicinal oil is gently applied to the body to calm the nervous
                system and promote health. This deeply relaxing treatment improves
                circulation and strength, provides moisture, and nourishes the
                skin and internal organs. It is calming and grounding and promotes
                sleep. Abhyanga can be used to aid in detox and weight loss. If you
                are in need of a gentle nervous system reset, or suffer from
                dryness and aching or cracking joints this form of self-care is
                for you.
              </p>
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
            </div>
          </article>

          <article className="service-card">
            <Image
              src="/assets/images/unsplash.jpg"
              alt="Nutrition therapy"
              className="service-image"
              width={1024}
              height={682}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className="service-body">
              <h3>Nutrition Therapy</h3>
              <p>
                Personalized nutrition using Ayurvedic and Traditional Chinese
                Medicine nutrition therapy with a focus on food as medicine and
                whole food clean eating to support health and wellness, prevent
                disease, and address current imbalances leading to disease and
                disharmony. An elimination diet will sometimes be helpful for
                those with food sensitivities, autoimmune and chronic illness.
                Eliminating foods YOU cannot digest and focusing on foods as
                medicine that nourish you and help you thrive is often the key to
                optimal health.
              </p>
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
            </div>
          </article>

          <article className="service-card">
            <Image
              src="/assets/images/3-Pillars-Yoga-Medicine-3.jpg"
              alt="Yoga therapy"
              className="service-image"
              width={750}
              height={500}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className="service-body">
              <h3>Yoga Therapy</h3>
              <p>
                Yoga Therapy is a specialized practice designed to correct
                structural and musculoskeletal imbalances, promoting optimal
                physical function and alignment. It offers relief for conditions
                like insomnia, digestive problems, and chronic stress. By
                improving posture and reducing pain and tension, Yoga Therapy
                helps restore balance to the body and mind. Additionally, it plays
                a role in managing neurological disorders such as Parkinson’s
                disease and multiple sclerosis, providing a holistic approach to
                enhance overall quality of life and well-being.
              </p>
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
            </div>
          </article>
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

        <div className="pricing-cards">
          <article className="pricing-card">
            <h3>Abhyanga</h3>
            <ul>
              <li>Ayurvedic Bodywork (therapeutic oil application - 75 minutes: $150</li>
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

          <article className="pricing-card">
            <h3>Ayurveda & Nutrition Therapy</h3>
            <ul>
              <li>
                Custom Dietary & Lifestyle recommendations (tele-health or in
                person): $150
              </li>
              <li>*additional cost for herbs</li>
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
