import Image from "next/image";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Community Partners",
  description:
    "Explore trusted community referral partners in Wheat Ridge and the Denver metro area recommended by 3 Pillars Holistic Health.",
  path: "/community-partners",
});

const partners = [
  {
    category: "Breathwork",
    items: [
      {
        name: "Indigo Breath and Wellness, Inc.",
        details: [
          { label: "Location", value: "I-25 & Colorado Blvd, Denver, CO" },
          { label: "Phone", value: "303-551-5220", href: "tel:3035515220" },
          {
            label: "Website",
            value: "indigobreathandwellness.com",
            href: "https://indigobreathandwellness.com/",
          },
        ],
        description:
          "At Indigo Breath and Wellness, clients are guided in functional breathing practices to enhance efficiency and ease of everyday breathing. The practice specializes in Biodynamic Breathwork and Trauma System, supporting the release of stored tension and emotional energy held in the body. Ideal for individuals seeking enhanced health, improved performance, and a deeper sense of presence.",
        offer: "25% off the first session or 20% off a package",
      },
    ],
  },
  {
    category: "Chiropractic Care",
    items: [
      {
        name: "Iselin Chiropractic",
        details: [
          { label: "Address", value: "7835 W 38th Ave, Wheat Ridge, CO 80033" },
          { label: "Phone", value: "303-433-7373", href: "tel:3034337373" },
          {
            label: "Website",
            value: "iselinchiropractic.com",
            href: "https://iselinchiropractic.com/",
          },
        ],
        description:
          "With over 25 years of experience, Iselin Chiropractic offers gentle, personalized chiropractic care that focuses on identifying root causes and creating individualized treatment plans. Common conditions treated include headaches, migraines, back and sciatic pain, sports injuries, car accident injuries, and extremity pain.",
        offer: "$99 initial visit including exam and X-rays",
      },
    ],
  },
  {
    category: "Coaching",
    items: [
      {
        name: "Cat the Coach (Catherine Peters)",
        details: [
          { label: "Phone", value: "303-408-1549", href: "tel:3034081549" },
          {
            label: "Email",
            value: "catherine@cpeterscoaching.com",
            href: "mailto:catherine@cpeterscoaching.com",
          },
          {
            label: "Website",
            value: "catthecoach.com",
            href: "https://www.catthecoach.com/",
          },
        ],
        description:
          "Cat the Coach is a Professional Certified Coach supporting high-achieving professionals in recovering from burnout, regulating stress, and creating sustainable success. Her neuroscience-informed, energy-based coaching complements mind-body healing modalities.",
        offer: "Free consultation + 10% off all services",
      },
      {
        name: "Stacie Ledden Consulting LLC",
        details: [
          { label: "Location", value: "Denver & Worldwide" },
          {
            label: "Email",
            value: "info@stacieledden.com",
            href: "mailto:info@stacieledden.com",
          },
          {
            label: "Website",
            value: "stacieledden.com",
            href: "https://www.stacieledden.com/",
          },
        ],
        description:
          "Stacie Ledden is a creative strategist working with purpose-driven organizations and entrepreneurs on leadership development, vision and values, marketing, and community engagement.",
        offer: "15% off the first coaching session or marketing assessment",
      },
    ],
  },
  {
    category: "Dentistry",
    items: [
      {
        name: "Reclaim Integrative Dentistry & Implant Center",
        details: [
          {
            label: "Address",
            value: "7900 W 44th Ave, Suite 101, Wheat Ridge, CO 80033",
          },
          { label: "Phone", value: "303-228-5488", href: "tel:3032285488" },
          {
            label: "Website",
            value: "reclaimdentistry.com",
            href: "https://www.reclaimdentistry.com/",
          },
        ],
        description:
          "Reclaim Integrative Dentistry offers advanced holistic dental care focused on biological, airway-centered, and restorative dentistry. Their comprehensive approach supports whole-body wellness under one roof.",
      },
    ],
  },
  {
    category: "Financial Planning & Wealth Management",
    items: [
      {
        name: "Nathan Richter, Financial Advisor",
        details: [
          { label: "Organization", value: "Clarity Wealth Group of Thrivent" },
          { label: "Address", value: "445 Union Blvd, Suite 105, Lakewood, CO 80228" },
          {
            label: "Phone",
            value: "303-962-6265 ext. 105",
            href: "tel:3039626265",
          },
        ],
        description:
          "Nathan Richter helps individuals and families gain clarity around retirement, income, risk, tax, and estate planning, serving as a long-term financial resource.",
      },
    ],
  },
  {
    category: "Fitness",
    items: [
      {
        name: "SPENGA Wheat Ridge",
        details: [
          { label: "Address", value: "5305 W 38th Ave, Suite E, Wheat Ridge, CO 80212" },
          { label: "Phone", value: "720-807-3630", href: "tel:7208073630" },
          {
            label: "Website",
            value: "wheatridgeco.spenga.com",
            href: "https://wheatridgeco.spenga.com/",
          },
        ],
        description:
          "SPENGA offers a science-backed 60-minute workout combining Spin, Strength, and Yoga to build endurance, strength, and stress resilience.",
        offer: "1 week free",
      },
      {
        name: "Vital Training Systems",
        details: [
          { label: "Address", value: "5250 W 38th Ave, Wheat Ridge, CO 80212" },
          { label: "Phone", value: "303-472-0383", href: "tel:3034720383" },
          {
            label: "Website",
            value: "vitaltrainingsystems.com",
            href: "https://vitaltrainingsystems.com/",
          },
        ],
        description:
          "Vital offers various training programs including strength, group, personal, high intensity interval, energy system development, and Kickboxing and MMA coaching all under one roof. Their mission is to train the mind, body and soul for everyday challenges. They value continuous education and constantly study safe, efficient and effective body development.",
        offer: "1st class is free",
      },
    ],
  },
  {
    category: "Functional Medicine",
    items: [
      {
        name: "Dr. Shelley Meyer - Highlands Health and Wellness",
        details: [
          {
            label: "Locations",
            value: [
              "2949 Federal Blvd, Suite 200B, Denver, CO 80211",
              "3729 W 32nd Ave, Denver, CO 80211",
            ],
          },
          { label: "Phone", value: "303-916-1064", href: "tel:3039161064" },
          {
            label: "Website",
            value: "highlandshealthwellness.com",
            href: "https://www.highlandshealthwellness.com/",
          },
        ],
        description:
          "Highlands Health and Wellness provides root-cause functional medicine care supporting hormone health, digestion, microbiome balance, energy, weight management, and life-stage transitions such as perimenopause and menopause.",
      },
    ],
  },
  {
    category: "Healers (spiritual, clairvoyant, energy work)",
    items: [
      {
        name: "Helgrid Randolph",
        details: [
          { label: "Location", value: "Phone & Zoom (Denver-based)" },
          { label: "Phone", value: "720-883-7990", href: "tel:7208837990" },
          {
            label: "Website",
            value: "helgridrandolph.com",
            href: "https://www.helgridrandolph.com/",
          },
          {
            label: "Scheduling",
            value: "helgridrandolph.com/book-online",
            href: "https://helgridrandolph.com/book-online/",
          },
        ],
        description:
          "Helgrid offers clairvoyant readings and healings to clear energetic blocks, bring clarity, and support new experiences. She also teaches classes on energetic boundaries and self-clearing practices.",
        offer: "$175 first reading (regularly $210) with code 3 PILLARS",
      },
      {
        name: "Mani Powers - Spiritual Counselor",
        details: [
          { label: "Address", value: "6965 W 29th Ave, Wheat Ridge, CO 80033" },
          {
            label: "Phone",
            value: "720-329-9513 (text preferred)",
            href: "tel:7203299513",
          },
          {
            label: "Email",
            value: "manipowers47@gmail.com",
            href: "mailto:manipowers47@gmail.com",
          },
        ],
        description:
          "Mani assists clients in identifying and transforming energetic patterns using breathwork, shamanic journeying, and clairvoyant insight.",
      },
    ],
  },
  {
    category: "Massage Therapy",
    items: [
      {
        name: "Kalindi Carlson, LMT",
        details: [
          { label: "Location", value: "Wheat Ridge, CO" },
          { label: "Phone", value: "720-205-2320", href: "tel:7202052320" },
          {
            label: "Scheduling",
            value: "soaringheart.schedulista.com",
            href: "https://soaringheart.schedulista.com/",
          },
        ],
        offer: "$10 off first visit",
      },
    ],
  },
  {
    category: "Medical Intuitive",
    items: [
      {
        name: "Luna Pottery",
        details: [
          { label: "Location", value: "Lakewood, CO or Mobile" },
          { label: "Phone", value: "303-434-6632", href: "tel:3034346632" },
          {
            label: "Email",
            value: "tanyakeith@gmail.com",
            href: "mailto:tanyakeith@gmail.com",
          },
          { label: "Instagram", value: "Luna Pottery" },
        ],
        description:
          "Luna Pottery offers medical intuitive sessions to help connect physical symptoms with emotional and mental patterns, supporting clarity, vitality, and holistic healing.",
      },
    ],
  },
  {
    category: "Mortgage, Lending & Real Estate",
    items: [
      {
        name: "Janet Hopkins",
        details: [
          { label: "Phone", value: "303-910-8797", href: "tel:3039108797" },
          {
            label: "Email",
            value: "janet@yourcastle.com",
            href: "mailto:janet@yourcastle.com",
          },
          {
            label: "Website",
            value: "janethopkinsproperties.com",
            href: "https://www.janethopkinsproperties.com/",
          },
        ],
        description:
          "Janet provides expert guidance in real estate and mortgage lending, helping clients understand how financial decisions impact long-term homeownership and wealth.",
      },
    ],
  },
  {
    category: "Pelvic Floor Therapy",
    items: [
      {
        name: "OWN Your Pelvic Health",
        details: [
          { label: "Address", value: "4901 W 38th Ave, Denver, CO 80212" },
          { label: "Phone", value: "720-509-9154", href: "tel:7205099154" },
          {
            label: "Website",
            value: "ownyourpelvichealth.com",
            href: "https://www.ownyourpelvichealth.com/",
          },
          {
            label: "Scheduling",
            value: "ownyourpelvichealth.com/request-an-appointment",
            href: "https://www.ownyourpelvichealth.com/request-an-appointment",
          },
        ],
        description:
          "A women's health focused pelvic floor therapy practice offering holistic care for bladder, bowel, sexual health, pelvic pain, and movement-related concerns.",
        offer: "10% off evaluation",
      },
    ],
  },
  {
    category: "Physical Therapy",
    items: [
      {
        name: "Accelerate Health Integrative Medicine",
        details: [
          {
            label: "Locations",
            value: [
              "600 N Grant St, Suite 202, Denver, CO 80203",
              "2599 Wadsworth Blvd, Lakewood, CO 80214",
            ],
          },
          { label: "Phone", value: "720-536-8589", href: "tel:7205368589" },
          {
            label: "Website",
            value: "acceleratehealthdenver.com",
            href: "https://acceleratehealthdenver.com/",
          },
        ],
        description:
          "Accelerate Health helps patients recover from pain and injury by restoring movement, strength, and biomechanics for long-term wellness.",
      },
    ],
  },
  {
    category: "Qi Gong",
    items: [
      {
        name: "Catalyst (Colleen Osborne)",
        details: [
          { label: "Location", value: "In-person (Wheat Ridge) & Virtual" },
          {
            label: "Studio Address",
            value: "5810 W 38th Ave, Suite 3, Wheat Ridge, CO 80033",
          },
          { label: "Phone", value: "303-884-0602", href: "tel:3038840602" },
          {
            label: "Website",
            value: "catalystcolleen.com",
            href: "https://www.catalystcolleen.com/",
          },
          {
            label: "Email",
            value: "Colleen_Osborne@msn.com",
            href: "mailto:Colleen_Osborne@msn.com",
          },
        ],
        description:
          "Colleen teaches Qi Gong, a mindful movement practice from Chinese Medicine that reduces stress, calms the nervous system, and supports emotional balance.",
        offer: "One free online class or 10% off the first private lesson",
      },
    ],
  },
  {
    category: "Regenerative Medicine",
    items: [
      {
        name: "Revive Medical Wellness",
        details: [
          { label: "Address", value: "11310 Huron St, Suite 230, Northglenn, CO 80234" },
          { label: "Phone", value: "720-477-3377", href: "tel:7204773377" },
          {
            label: "Website",
            value: "revivemedicalwellness.net",
            href: "https://www.revivemedicalwellness.net/",
          },
        ],
        description:
          "Revive Medical Wellness specializes in hormone balance, peptides, PRP, joint health, weight management, and regenerative skin treatments.",
      },
      {
        name: "ViveWell Health",
        details: [
          { label: "Address", value: "12001 W 63rd Pl, Suite 201, Arvada, CO 80004" },
          { label: "Phone", value: "303-565-8483", href: "tel:3035658483" },
          {
            label: "Scheduling",
            value: "vivewell.health/discovery-session-booking",
            href: "https://vivewell.health/discovery-session-booking/",
          },
        ],
        description:
          "ViveWell Health offers regenerative medicine services designed to improve vitality, strength, and emotional well-being.",
      },
    ],
  },
  {
    category: "Sound Healing",
    items: [
      {
        name: "Rondi Kirby",
        details: [
          { label: "Phone", value: "415-306-3826", href: "tel:4153063826" },
          {
            label: "Website",
            value: "rondikirby.com",
            href: "https://rondikirby.com/",
          },
          {
            label: "Location",
            value: "Colorado School of Healing Arts & community venues",
          },
        ],
        description:
          "Rondi offers community sound baths and private sound healing sessions using Himalayan bowls, gongs, and other instruments to deeply relax the nervous system.",
      },
    ],
  },
  {
    category: "Therapy & Mental Health",
    items: [
      {
        name: "Etc Hospitality Healing Center",
        details: [
          { label: "Address", value: "16500 S Golden Rd, Unit 105, Golden, CO 80403" },
          { label: "Phone", value: "216-262-4445", href: "tel:2162624445" },
          {
            label: "Website",
            value: "etc-hospitality.com",
            href: "https://www.etc-hospitality.com/",
          },
          {
            label: "Email",
            value: "connect@etc-hospitality.com",
            href: "mailto:connect@etc-hospitality.com",
          },
        ],
        description:
          "A licensed natural medicine (psilocybin) healing center supporting preparation, facilitation, and integration in partnership with licensed facilitators.",
      },
      {
        name: "Focal Points Therapy",
        details: [
          { label: "Address", value: "5810 W 38th Ave, Ste. 17, Wheat Ridge, CO 80212" },
          { label: "Phone", value: "720-336-5852", href: "tel:7203365852" },
          {
            label: "Website",
            value: "focalpointstherapy.com",
            href: "https://www.focalpointstherapy.com/",
          },
          {
            label: "Scheduling",
            value: "focalpointstherapy.com",
            href: "https://www.focalpointstherapy.com/",
          },
        ],
        description:
          "As the owner of Focal Points Therapy, Valerie Epstein-Johnson, LPC, ATR-BC, guides adults of all ages in growing from loss and change into lives aligned with personal values and a grounded body/mind/spirit system. Utilizing somatic therapies like EFT tapping and low-dose Ketamine Assisted Therapy, and creative arts-integrated verbal therapy, Valerie helps you heal from family of origin wounds, grief, and trauma, and supports you in developing your true Self, becoming more grounded and expanded at the same time. Specialties include motherless daughters, wise eldering, end-of-life, perimenopause/menopause, neurodivergence support, spiritual trauma and growth, and psychedelic journey preparation and integration.",
        offer:
          "A 60-minute introductory session, free of charge, to all 3 Pillars Holistic Health patients, to sample Focal Points Therapy offerings and assess goodness of fit, in-person at Focal Points or by Zoom.",
      },
      {
        name: "Grit Therapy",
        details: [
          { label: "Address", value: "4251 Kipling St, Wheat Ridge, CO 80033" },
          { label: "Phone", value: "720-600-7447", href: "tel:7206007447" },
          {
            label: "Website",
            value: "grittherapy.com",
            href: "https://www.grittherapy.com/",
          },
        ],
        offer: "50% off first visit",
      },
      {
        name: "Jana Lomax - Shift Healing | Health Psychology",
        details: [
          {
            label: "Address",
            value: "3000 Youngfield St, Suite 302, Wheat Ridge, CO 80215 & Teletherapy",
          },
          { label: "Phone", value: "303-800-3458", href: "tel:3038003458" },
          {
            label: "Website",
            value: "shifthealing.net",
            href: "https://shifthealing.net/",
          },
          {
            label: "Scheduling",
            value: "shifthealing.clientsecure.me",
            href: "https://shifthealing.clientsecure.me/",
          },
        ],
        description:
          "Shift Healing specializes in supporting individuals navigating trauma, grief, chronic illness, and health-related stress.",
      },
      {
        name: "Kerry Jessup Counseling & Art Therapy",
        details: [
          { label: "Location", value: "Telehealth & In-person (Wheat Ridge)" },
          { label: "Address", value: "6990 W 38th Ave, Suite 206, Wheat Ridge, CO 80033" },
          { label: "Phone", value: "720-663-8368", href: "tel:7206638368" },
          {
            label: "Email",
            value: "therapy@kerryjessup.com",
            href: "mailto:therapy@kerryjessup.com",
          },
          {
            label: "Website",
            value: "kerryjessup.com",
            href: "https://www.kerryjessup.com/",
          },
        ],
        description:
          "Specializing in adults 18+, EMDR, trauma/PTSD, anxiety, depression, and art therapy. Accepting Kaiser insurance.",
      },
      {
        name: "New Roots Therapy LLC",
        details: [
          { label: "Location", value: "Telehealth (Colorado & Florida)" },
          { label: "Phone", value: "720-727-7438", href: "tel:7207277438" },
          {
            label: "Website",
            value: "newrootstherapyllc.com",
            href: "https://www.newrootstherapyllc.com/",
          },
        ],
        description:
          "Client-centered, strengths-based therapy with a focus on trauma, anxiety, grief, perinatal mental health, EMDR, and Ego State Therapy.",
      },
    ],
  },
  {
    category: "Yoga & Healing Arts",
    items: [
      {
        name: "Evolition",
        details: [
          { label: "Address", value: "5810 W 38th Ave, Suite 3, Wheat Ridge, CO 80212" },
          { label: "Phone", value: "303-906-3696", href: "tel:3039063696" },
          {
            label: "Website",
            value: "myevolition.com",
            href: "https://www.myevolition.com/",
          },
        ],
        description:
          "Evolition offers alignment-based yoga, functional mobility, Qi Gong, and community healing events.",
        offer:
          "First class free (email Tiffany at tiffany@myevolition.com for access code)",
      },
      {
        name: "Mend & Bend - Sara Mahowald",
        details: [
          { label: "Location", value: "Denver, CO" },
          { label: "Phone", value: "719-252-6610", href: "tel:7192526610" },
          {
            label: "Website",
            value: "mendbend.com",
            href: "https://www.mendbend.com/",
          },
        ],
        description:
          "Sara is a Certified Iyengar Yoga Teacher specializing in scoliosis, back care, and accessible yoga for beginners. She also hosts community mending and hand-sewing workshops.",
      },
    ],
  },
];

const renderDetailValue = (detail) => {
  if (Array.isArray(detail.value)) {
    return (
      <span className="partner-detail-lines">
        {detail.value.map((line) => (
          <span className="partner-detail-line" key={line}>
            {line}
          </span>
        ))}
      </span>
    );
  }

  if (detail.href) {
    return (
      <a href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel={detail.href.startsWith("http") ? "noreferrer" : undefined}>
        {detail.value}
      </a>
    );
  }

  return detail.value;
};

export default function CommunityPartnersPage() {
  return (
    <div>
      <section className="about-hero" aria-label="Community partners hero">
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
        <div className="about-hero-content is-middle alana-hero-content">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow">Community</p>
              <h1 className="hero-title">Referral Partners</h1>
              <p className="hero-body">
                Below is a curated list of trusted community referral partners,
                organized alphabetically by service type.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-hero">
        <p>Community</p>
        <h2>Referral Partners</h2>
        <p>
          Below is a curated list of trusted community referral partners,
          organized alphabetically by service type.
        </p>
      </section>

      <section className="partners-section">
        {partners.map((group) => (
          <div className="partners-group" key={group.category}>
            <h2 className="partners-heading">{group.category}</h2>
            <div className="partners-grid">
              {group.items.map((item) => (
                <article className="partner-card section-card" key={item.name}>
                  <h3>{item.name}</h3>
                  <ul className="partner-details">
                    {item.details.map((detail, index) => (
                      <li key={`${item.name}-${detail.label}-${index}`}>
                        <span className="partner-label">{detail.label}:</span>{" "}
                        {renderDetailValue(detail)}
                      </li>
                    ))}
                  </ul>
                  {item.description && (
                    <p className="partner-description">{item.description}</p>
                  )}
                  {item.offer && (
                    <p className="partner-offer">
                      <span className="partner-offer-label">
                        Special Offer for 3 Pillars Patients:
                      </span>{" "}
                      {item.offer}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
