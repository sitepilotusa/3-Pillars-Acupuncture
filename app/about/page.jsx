import Image from "next/image";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "About Alana Foeller",
  description:
    "Meet Alana Foeller, a licensed acupuncturist and certified Ayurvedic practitioner serving Wheat Ridge, CO. Learn about her holistic approach to care.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <section className="about-hero" aria-label="Alana Foeller">
        <div className="about-hero-media">
          <Image
            src="/assets/images/Foeller-Fall2024-2-scaled.jpg"
            alt="Alana Foeller"
            fill
            priority
            sizes="100vw"
          />
          <div className="about-hero-overlay" aria-hidden="true" />
        </div>
        <div className="about-hero-content is-middle">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow">About</p>
              <h1 className="hero-title">Alana Foeller</h1>
              <p className="hero-body">
                Learn about Alana’s background, philosophy, and holistic approach
                to care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="about-intro">
          <div className="about-details">
            <h2 className="about-heading">Alana Foeller</h2>
            <ul className="about-credentials">
              <li>MS.Ac (Masters of Science in Acupuncture)</li>
              <li>L.Ac (Licensed Acupuncturist – Colorado)</li>
              <li>RN, BSN (Bachelor of Science in Nursing)</li>
              <li>Certified Ayurvedic Practitioner / Yoga Therapist</li>
            </ul>
          </div>
          <div className="about-media">
            <Image
              src="/assets/images/bbout_alana_img.png"
              alt="Alana Foeller"
              className="about-portrait"
              width={461}
              height={530}
              sizes="(max-width: 900px) 100vw, 360px"
            />
          </div>
          <p className="about-intro-text">
            Alana has been on a personal and professional journey of health and
            wellness since 2000. In college, she worked as a Student Athletic
            Trainer, and upon moving to Denver in 2003, she began her health and
            fitness career as a Certified Personal Trainer. She later graduated
            from MSU Denver with a Bachelor of Science in Human Performance and
            Sport & Nutrition. This became her foundation for teaching clients
            how to take their health into their own hands using exercise and
            nutrition. She was introduced to Yoga, and after experiencing the
            mind and body benefits of the practice, she completed a 200-hour Yoga
            Teacher Training, and later went on to become a Certified Yoga
            Therapist and Ayurvedic Practitioner. Studying Ayurvedic Medicine
            changed the way she viewed health. It was a complete system of
            medicine that addressed the whole person and promoted prevention,
            treatment, health, and vitality. Through incorporating Ayurvedic
            daily practices, nutrition therapy, and herbal medicine she was able
            to resolve her chronic digestive issues and heal her gut.
          </p>
        </div>
        <div className="about-copy">
          <p>
            While she loved her career in fitness and wellness, being in her 30s
            without benefits made her rethink her career path. She had a vision
            of integrating Eastern and Western medicine to practice the best of
            both disciplines and pursued a degree in Nursing. Alana earned her
            BSN at CU College of Nursing and has been practicing as a Registered
            Nurse since 2014. She quickly learned that Western Medicine, while
            great at managing acute illness and traumatic injuries, is failing
            at managing chronic disease. She wanted to focus on prevention over
            pharmacology and balance over bandaids, which brought her back to
            Eastern Medicine and the pursuit of a Master’s degree in Acupuncture
            and Traditional Chinese Medicine.
          </p>
          <p>
            3 Pillars Holistic Health was born from her collective experience in
            healthcare and combines Acupuncture, Ayurveda (Herbal and Lifestyle
            medicine), and Nutrition Therapy into an integrative system that
            promotes health and wellness to clients of all ages. Alana practices
            Balance Method Acupuncture as taught by the late Dr. Richard Teh-Fu
            Tan and specializes in treating pain (chronic and acute), digestive
            issues, Women’s health, insomnia, and mental health issues including
            trauma, PTSD, anxiety, depression, and chronic stress. She is
            passionate about food as medicine and teaches her clients how to use
            nutrition to create better health and treat diseases. Her clients
            love that she not only treats their physical symptoms but helps them
            find relief from mental and emotional suffering using an integrated
            approach. 3 Pillars Holistic Health is for anyone seeking pain
            relief, better health, and more happiness in their lives.
          </p>
        </div>
      </section>
    </div>
  );
}
