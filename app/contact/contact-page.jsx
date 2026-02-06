"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import SuccessView from "../components/SuccessView";

const formsApiBaseUrl = (process.env.NEXT_PUBLIC_FORMS_API_BASE_URL ?? "").replace(/\/$/, "");
const formsContactFormId = process.env.NEXT_PUBLIC_FORMS_CONTACT_FORM_ID ?? "";
const turnstileSiteKey = process.env.NEXT_PUBLIC_FORMS_TURNSTILE_SITE_KEY ?? "";

const resolveFormsEndpoint = (formId) => {
  if (!formId) return "";
  return formsApiBaseUrl
    ? `${formsApiBaseUrl}/api/forms/${formId}/submissions`
    : `/api/forms/${formId}/submissions`;
};

const formatPhoneInput = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (!digits) return "";
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

export default function ContactPageContent() {
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState(null);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (!showSuccessOverlay) return;
    const timer = setTimeout(() => {
      setShowSuccessOverlay(false);
      setFormStatus("idle");
    }, 5000);
    return () => clearTimeout(timer);
  }, [showSuccessOverlay]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = resolveFormsEndpoint(formsContactFormId);

    if (!endpoint) {
      setFormError("Form is not configured yet.");
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const clean = (value) => (typeof value === "string" ? value.trim() : "");
    const turnstileToken = clean(formData.get("cf-turnstile-response"));

    if (turnstileSiteKey && !turnstileToken) {
      setFormError("Please complete the anti-spam check.");
      setFormStatus("error");
      return;
    }

    const payload = {
      name: clean(formData.get("name")),
      email: clean(formData.get("email")),
      message: clean(formData.get("message")),
    };
    const phone = clean(formData.get("phone"));
    if (phone) payload.phone = phone;

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      if (turnstileToken) {
        headers["X-Turnstile-Token"] = turnstileToken;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => null);
        setFormError(errorPayload?.error ?? "Submission failed. Please try again.");
        setFormStatus("error");
        return;
      }

      setFormStatus("success");
      setShowSuccessOverlay(true);
      setHasSubmitted(true);

      if (turnstileSiteKey && typeof window !== "undefined") {
        const turnstile = window.turnstile;
        turnstile?.reset?.();
      }
    } catch {
      setFormError("Submission failed. Please try again.");
      setFormStatus("error");
    }
  };

  const isFormLocked = hasSubmitted || formStatus === "submitting";

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
        <div className="about-hero-content is-middle alana-hero-content">
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
            rel="noopener noreferrer"
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
          <div className="contact-form-card">
            {showSuccessOverlay && (
              <div className="contact-form-overlay" role="status" aria-live="polite">
                <div className="contact-form-success">
                  <SuccessView label="Request sent" size="small" />
                  <div className="contact-form-success-copy">
                    <p>We received your message.</p>
                    <p>We’ll be in touch within one business day.</p>
                  </div>
                </div>
              </div>
            )}
            <form
              className={`contact-form ${showSuccessOverlay ? "is-blurred" : ""}`}
              onSubmit={handleSubmit}
              autoComplete="on"
            >
              {turnstileSiteKey && (
                <Script
                  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                  strategy="afterInteractive"
                />
              )}
              <h2>Schedule a Free Phone Consult</h2>
              <label>
                <span className="contact-label-text">
                  Full Name <span className="contact-required" aria-hidden="true">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  autoCapitalize="words"
                  spellCheck="false"
                  placeholder="Jane Doe"
                  required
                  disabled={isFormLocked}
                />
              </label>
              <label>
                <span className="contact-label-text">
                  Email <span className="contact-required" aria-hidden="true">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  inputMode="email"
                  placeholder="jane@example.com"
                  required
                  disabled={isFormLocked}
                />
              </label>
              <label>
                <span className="contact-label-text">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel-national"
                  inputMode="tel"
                  placeholder="(720) 232-7036"
                  onInput={(event) => {
                    event.currentTarget.value = formatPhoneInput(event.currentTarget.value);
                  }}
                  disabled={isFormLocked}
                />
                <span className="contact-field-hint">Optional, but helpful for faster follow-up.</span>
              </label>
              <label>
                <span className="contact-label-text">
                  How can I help? <span className="contact-required" aria-hidden="true">*</span>
                </span>
                <textarea
                  name="message"
                  rows="4"
                  autoComplete="off"
                  placeholder="Share what you would like support with, your goals, and any timing preferences."
                  maxLength={1200}
                  required
                  disabled={isFormLocked}
                />
                <span className="contact-field-hint">Include symptoms, goals, and preferred contact method.</span>
              </label>
              <div className="contact-form-actions">
                {turnstileSiteKey && (
                  <div
                    className="cf-turnstile"
                    data-sitekey={turnstileSiteKey}
                    data-appearance="interaction-only"
                  />
                )}
                <button className="service-link" type="submit" disabled={isFormLocked}>
                  {hasSubmitted
                    ? "REQUEST SENT"
                    : formStatus === "submitting"
                      ? "SENDING..."
                      : "SUBMIT REQUEST"}
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
                {formStatus === "error" && formError && (
                  <p className="contact-form-error" role="alert">
                    {formError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
