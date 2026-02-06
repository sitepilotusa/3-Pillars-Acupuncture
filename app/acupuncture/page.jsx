import Image from "next/image";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Acupuncture in Wheat Ridge, CO",
  description:
    "Balance Method Acupuncture for pain relief, stress reduction, and whole-body healing in Wheat Ridge, CO. Book a consultation at 3 Pillars Holistic Health.",
  path: "/acupuncture",
});

export default function AcupuncturePage() {
  const faqs = [
    {
      question: "Does Acupuncture hurt?",
      answer:
        "Acupuncture involves the insertion of very thin needles, but acupuncture should not be a painful experience. I’m scared of needles myself! In fact, I never tell people I’m a nurse when I get my bloodwork done. That said, acupuncture is a very different experience than getting poked with a hypodermic needle like those used in medical settings. You may feel a quick prick on insertion of the needle, but after that the sensation should dissipate to a feeling of dullness, tingling, pressure, warmth or the feeling of energy traveling up or down the limbs.",
    },
    {
      question: "How many treatments will I need?",
      answer:
        "This all depends on the condition AND the person being treated. Most health issues require more than one treatment to resolve, but you should see improvement in as little as 1-3 treatments. Expect to have 3-6 treatments before reassessment. Chronic and severe conditions may require ten or more treatments before seeing significant benefit and resolution and often require 2-3 treatments per week in the initial stages of treatment. Throughout the process, you should see an overall improvement in your health as your main complaint improves as well.",
    },
    {
      question: "How often do I need to get Acupuncture?",
      answer:
        "Acupuncture is a cumulative process, and each treatment builds upon the last. The more consistently you get treated, the more quickly your condition will resolve. For severe or chronic issues coming in weekly may be recommended at first. The goal is to graduate to monthly maintenance and eventually seasonal balance treatments.",
    },
    {
      question: "How long is a treatment session?",
      answer:
        "The first visit takes 60-90 minutes including client intake questionnaire, assessment and treatment. Follow up visits are typically 45-60 minutes.",
    },
    {
      question: "How should I prepare for my 1st visit?",
      answer:
        "If you’re new to acupuncture please call for a 15-minute consult prior to scheduling online. On the day of your appointment be sure to eat before your treatment; a light snack or a meal a few hours before will do. Wear comfortable and loose clothing; pants that can go up to the knees and a t-shirt or tank top. Most acupuncture points used are below the knees and elbows, so no need to disrobe for treatments.",
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
            <p className="hero-eyebrow">ACUPUNCTURE SERVICES</p>
            <h1 className="hero-title">Acupuncture in Wheat Ridge, CO</h1>
            <p className="hero-body">
              Experience Balance Method Acupuncture focused on pain relief, stress
              reduction, and whole-body healing in Wheat Ridge, Colorado.
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
            src="/assets/images/accupuncture_img_intro.png"
            alt="Acupuncture treatment"
            width={461}
            height={500}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="intro-content">
          <p className="intro-eyebrow">Acupuncture</p>
          <h2>Experience the Healing Power</h2>
          <p>
            Acupuncture is the insertion of thin disposable sterile needles at
            specific points on the body to balance the system and promote the
            body’s innate healing response. According to the National Institutes
            of Health, acupuncture is beneficial for treating addiction,
            fibromyalgia, headaches, cramps, back pain, osteoarthritis, carpal
            tunnel, asthma, and much more. 3 Pillars specializes in “Balance
            Method Acupuncture.” Alana has studied extensively with Dr. Beth
            Bright and Dr. Eileen Han, both students of the late Dr. Richard
            Teh-Fu Tan the founder of Balance Method Acupuncture.
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
            <span>Traditional Chinese Medicine</span>
            <span>Ancient Healing for Modern Wellness</span>
          </h2>
          <div className="services-copy">
            <p>
              Explore time-honored therapies that support circulation, reduce
              inflammation, and help restore balance throughout the body.
            </p>
          </div>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <Image
              src="/assets/images/3-Pillars-Cupping-768x512-1.webp"
              alt="Cupping therapy"
              className="service-image"
              width={768}
              height={512}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className="service-body">
              <h3>Cupping</h3>
              <p>
                Cupping Therapy is an ancient healing modality used in Traditional
                Chinese Medicine for thousands of years. Cupping uses glass or
                plastic cups to create suction of the skin and superficial tissues
                to increase circulation, relieve pain, promote myofascial release,
                clear out toxins and reduce inflammation. Cupping has been used to
                enhance recovery time and soothe sore muscles for many athletes
                making it a popular therapy among weekend warriors as well as
                Olympic athletes.
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
              src="/assets/images/Herbal-Medicine.webp"
              alt="Herbal medicine"
              className="service-image"
              width={2048}
              height={1366}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className="service-body">
              <h3>Herbal Medicine</h3>
              <p>
                Nature has given us an incredible pharmacy. Chinese herbal
                medicine provides a tailored approach to addressing imbalances in
                mind and body, supporting your immune system and naturally
                boosting your energy. Each formula is crafted specifically for
                your unique needs. Chinese herbs are a safe and natural way to
                treat many common ailments, including cold and flu symptoms,
                digestive disorders, migraines, insomnia, fatigue, and a number
                of autoimmune and chronic health conditions.
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
              src="/assets/images/Moxibustion.webp"
              alt="Moxibustion therapy"
              className="service-image"
              width={768}
              height={513}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className="service-body">
              <h3>Moxibustion</h3>
              <p>
                ‘Moxa’ has long been used in East Asian cultures as a healing
                modality that predates Acupuncture. Moxa is a therapeutic
                technique in which the dried herb “Artemesiae vulgaris” (Mugwort)
                is burned on or near the body to strengthen the body, boost the
                immune system, energize the body, strengthen adrenal function,
                reduce inflammation, provide warmth, induce flow of Qi and blood,
                reduce swelling, and is an excellent adjunct therapy for
                conditions that are chronic and cold in nature.
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
              <h3>Acupuncture</h3>
              <ul>
              <li>Acupuncture New Client: 90 minutes: $140</li>
                <li>Follow-up Visit: 55 minutes:$85</li>
                <li>Cupping only: 30 minutes:$65</li>
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
            <h3>Herbal Medicine & Nutrition Therapy</h3>
            <ul>
              <li>
                Comprehensive care package (Acupuncture + Herbal Medicine +
                Nutrition Consultation): $250
              </li>
              <li>Herbal Consultation: 45 minutes: $65</li>
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
            out-of-pocket healthcare costs. And they’ll cover acupuncture! .
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
