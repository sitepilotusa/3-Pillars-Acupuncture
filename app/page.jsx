import Image from "next/image";
import ReviewsCarousel from "./components/ReviewsCarousel";
import { createPageMetadata } from "./lib/seo";

export const metadata = createPageMetadata({
  title: "Acupuncture, Ayurveda & Herbal Medicine in Wheat Ridge, CO",
  description:
    "3 Pillars Holistic Health offers acupuncture, Ayurveda, herbal medicine, and nutrition therapy in Wheat Ridge, CO. Personalized care and wellness services.",
  path: "/",
});

export default function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">LASTING SOLUTIONS FOR HEALTH & VITALITY</p>
            <h1 className="hero-title">
              <span>Acupuncture</span>
              <span>Herbal Medicine</span>
              <span>Nutrition Therapy</span>
            </h1>
            <p className="hero-body">
              Reclaim your health with Acupuncture & Wellness Services in a safe and
              healing space, located in Wheat Ridge, CO.
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
            alt="Acupuncture session"
            width={461}
            height={500}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="intro-content">
          <h2>Acupuncture & Wellness In Wheat Ridge</h2>
          <p>
            At 3 Pillars Holistic Health we believe that healthcare should address
            body, mind, and spirit which is why your story matters as much as your
            symptoms.
          </p>
          <p className="intro-eyebrow">You are in the right place if…</p>
          <ul className="intro-list">
            <li>Chronic pain is keeping you from doing what you love</li>
            <li>You’ve tried everything, but have yet to find lasting relief</li>
            <li>Fatigue or exhaustion keep you from being present and productive</li>
            <li>High Stress has you feeling overwhelmed, anxious, or unable to relax</li>
            <li>You sleep poorly despite trying meds or every tip, trick, and app</li>
            <li>
              You suffer from a chronic health condition and have been told
              “everything looks fine,” or that medications with unwanted side
              effects are the only solutions…
            </li>
          </ul>
          <p>
            Whether you suffer from chronic pain, chronic health conditions, or
            stress, anxiety, and insomnia, we work together to bring you back into
            balance using Acupuncture, Herbal Medicine, and Nutrition Therapy to
            get to the root of imbalance and disease. As a Registered Nurse,
            Licensed Acupuncturist, and Herbalist, Alana offers a unique blend of
            Western clinical knowledge and Eastern healing modalities to promote
            health and vitality.
          </p>
          <a className="intro-cta" href="/contact">
            LEARN MORE ABOUT US
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
        <div className="services-header">
          <h2 className="services-heading">
            <span>Personalized Holistic</span>
            <span>Healing Tailored Specifically for You</span>
          </h2>
          <div className="services-copy">
            <p>
              We offer a variety of services to help you achieve optimal wellness
              through a natural and personalized approach. Our team focuses on your
              unique needs, providing support with nutritional counseling, yoga
              therapy, acupuncture, and herbal remedies.
            </p>
            <a className="services-cta" href="/contact">
              LEARN MORE
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

        <div className="services-grid">
          <article className="service-card">
            <Image
              src="/assets/images/acupuncture_img.png"
              alt="Acupuncture treatment"
              className="service-image"
              width={364}
              height={220}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className="service-body">
              <h3>Acupuncture</h3>
              <p>
                Acupuncture, using thin, sterile needles at key points, bolsters
                the body&apos;s innate healing mechanisms. By working with the
                body&apos;s Qi (chee) &quot;vital force&quot; or the energy that
                animates all life,
                Acupuncture can calm the nervous system, promote circulation, and
                stimulate the release of chemical mediators to promote healing. The
                National Institutes of Health recognizes Acupuncture as a
                beneficial modality for treating pain, fibromyalgia, headaches,
                and asthma. 3 Pillars specializes in &quot;Balance Method
                Acupuncture,&quot; from the teachings of Dr. Richard Teh-Fu Tan.
              </p>
              <a className="service-link" href="/contact">
                LEARN MORE
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
              src="/assets/images/nutrition_therapy_img.png"
              alt="Nutrition therapy support"
              className="service-image"
              width={364}
              height={220}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className="service-body">
              <h3>Nutrition Therapy</h3>
              <p>
                Personalized nutritional guidance, blending Ayurvedic and
                Traditional Chinese Medicine, focuses on whole foods to enhance
                wellness and correct imbalances. Tailored elimination diets help
                manage autoimmune and chronic illnesses, embodying the philosophy
                of food as medicine for optimal health.
              </p>
              <a className="service-link" href="/contact">
                LEARN MORE
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
              src="/assets/images/ayurveda_img.png"
              alt="Herbal medicine ingredients"
              className="service-image"
              width={364}
              height={220}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className="service-body">
              <h3>Herbal Medicine</h3>
              <p>
                Custom herbal formulas are tailored to treat individual symptoms
                and the root cause of imbalance. Traditional Chinese Medicine is
                useful in the treatment of chronic illnesses (digestive disorders,
                autoimmune conditions), acute conditions (colds, flu, allergies),
                mental health (insomnia, stress, anxiety, depression), and hormonal
                imbalances (menstrual issues, fertility, menopause). TCM helps
                strengthen the immune system and boosts energy levels without side
                effects compared to pharmaceutical drugs.
              </p>
              <a className="service-link" href="/contact">
                LEARN MORE
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

      <section className="practitioner-section">
        <div className="practitioner-bio">
          <div className="practitioner-details">
            <h2 className="practitioner-heading">Alana Foeller</h2>
            <p className="practitioner-credentials">
              MS.Ac, L.Ac, RN, BSN, Certified Ayurvedic Practitioner
            </p>
            <div className="practitioner-copy">
              <p>
                Alana Foeller is a nationally certified Acupuncturist and wellness
                expert based in Wheat Ridge, CO. She holds a Bachelor of Science in
                Human Performance, Sport & Nutrition, a Bachelor’s of Science in
                Nursing, and a Master’s in Acupuncture. Alana’s own transformative
                experiences with yoga and Ayurvedic medicine became her foundation for
                healing. With over a decade of clinical experience as a Registered
                Nurse and continued studies in Acupuncture and Herbal Medicine,
                Alana’s background in healthcare and the healing arts makes her a
                highly qualified and unique practitioner to address a wide variety of
                health concerns.
              </p>
              <p>
                She focuses on a collaborative relationship with her clients,
                fostering a supportive environment for healing. Alana tailors each
                treatment to individual needs, aiming for holistic well-being. Alana
                is committed to guiding her clients towards a healthier, more
                balanced life through integrated and personalized care. Discover more
                about Alana’s approach to acupuncture and wellness in Wheat Ridge,
                CO.
              </p>
            </div>
          </div>
          <div className="practitioner-media">
            <Image
              src="/assets/images/bbout_alana_img.png"
              alt="Alana Foeller"
              className="practitioner-image"
              width={461}
              height={530}
              sizes="(max-width: 900px) 100vw, 360px"
            />
          </div>
        </div>

        <div className="conditions-block">
          <h3 className="practitioner-subhead">
            Alana Foeller specializes in treating a variety of conditions through
            acupuncture and holistic health practices in Wheat Ridge, CO. Her
            expertise covers:
          </h3>

          <div className="conditions-grid">
            <article className="condition-card">
              <img
                src="/assets/icons/pain_management_icon.svg"
                alt="Pain management icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Pain Management</h4>
                <p className="condition-text">
                  Effective relief for back, neck, & sciatic pain, knee pain, TMJ,
                  shoulder pain, carpal tunnel, fibromyalgia, arthritis, neuropathy.
                </p>
              </div>
            </article>
            <article className="condition-card">
              <img
                src="/assets/icons/musculoskeletal_injuries_icon.svg"
                alt="Musculoskeletal injuries icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Musculoskeletal Injuries</h4>
                <p className="condition-text">
                  Treatment for sprains, strains, muscle tension, athletic injuries.
                </p>
              </div>
            </article>
            <article className="condition-card">
              <img
                src="/assets/icons/digestive_health_icon.svg"
                alt="Digestive health icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Digestive Health</h4>
                <p className="condition-text">
                  Solutions for constipation, hemorrhoids, IBS, acid reflux and
                  digestive disorders.
                </p>
              </div>
            </article>
            <article className="condition-card">
              <img
                src="/assets/icons/mental_well_being_icon.svg"
                alt="Mental well-being icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Mental Well-being</h4>
                <p className="condition-text">
                  Support for stress, anxiety, depression, PTSD, trauma.
                </p>
              </div>
            </article>
            <article className="condition-card">
              <img
                src="/assets/icons/womens_health_icon-1.svg"
                alt="Women’s health icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Women’s Health</h4>
                <p className="condition-text">
                  Fertility, hormone balance, menstrual disorders, morning sickness,
                  labor induction.
                </p>
              </div>
            </article>
            <article className="condition-card">
              <img
                src="/assets/icons/post_covid_recovery_icon.svg"
                alt="Post-Covid recovery icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Post-Covid Recovery</h4>
                <p className="condition-text">
                  Addressing fatigue, chronic pain, and respiratory and digestive
                  complications.
                </p>
              </div>
            </article>
            <article className="condition-card">
              <img
                src="/assets/icons/allergies_sinus_issues_icon.svg"
                alt="Allergies and sinus issues icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Allergies and Sinus Issues</h4>
                <p className="condition-text">
                  Providing relief from seasonal or chronic allergies.
                </p>
              </div>
            </article>
            <article className="condition-card">
              <img
                src="/assets/icons/sleep_disorders_icon.svg"
                alt="Sleep disorders icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Sleep Disorders</h4>
                <p className="condition-text">
                  Effective treatment for insomnia and other common sleep issues,
                  promoting better rest.
                </p>
              </div>
            </article>
            <article className="condition-card">
              <img
                src="/assets/icons/auto_immune_conditions_icon.svg"
                alt="Autoimmune conditions icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Autoimmune Conditions</h4>
                <p className="condition-text">
                  Tailored approaches for autoimmune challenges.
                </p>
              </div>
            </article>
            <article className="condition-card">
              <img
                src="/assets/icons/headaches_icon.svg"
                alt="Headaches icon"
                className="condition-icon"
              />
              <div className="condition-content">
                <h4 className="condition-title">Headaches</h4>
                <p className="condition-text">Alleviating various types of headaches.</p>
              </div>
            </article>
          </div>

          <p className="practitioner-footer">
            Alana’s comprehensive approach in Wheat Ridge, CO, combines acupuncture
            with her vast knowledge in nutrition and Ayurvedic medicine, offering
            clients a unique path to healing and overall well-being.
          </p>
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-header">
          <h2 className="reviews-heading">
            <span>Real Results Through</span>
            <span>The 3 Pillars Approach</span>
          </h2>
          <p className="reviews-copy">
            Our clients’ journeys reflect the effectiveness of our holistic
            approach, focusing on the balance of mind, body, and spirit. Here’s
            what some of our valued clients have to say about their experiences:
          </p>
        </div>
        <ReviewsCarousel />
      </section>

      <section className="map-section">
        <div className="map-header">
          <h2>Visit Our Wheat Ridge Location</h2>
          <p>6500 W 44th Ave, Wheat Ridge, CO 80033</p>
        </div>
        <div className="map-frame">
          <iframe
            title="3 Pillars Holistic Health location"
            src="https://www.google.com/maps?q=6500%20W%2044th%20Ave%2C%20Wheat%20Ridge%2C%20CO%2080033&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
