import { createPageMetadata } from "../lib/seo";
import ContactPageContent from "./contact-page";

export const metadata = createPageMetadata({
  title: "Contact 3 Pillars Holistic Health",
  description:
    "Contact 3 Pillars Holistic Health in Wheat Ridge, CO to schedule a consultation for acupuncture, Ayurveda, or herbal medicine.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
