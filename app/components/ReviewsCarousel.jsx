"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Nicole Salois",
    meta: "3 months ago",
    text:
      "Alana has a ton of educational experience, highly skilled, and very knowledgeable at her craft. She has a natural gift with a calming and relaxing energy. She is a great listener and gives very helpful advice & feedback. She has helped me with a number of issues from hip pain to treating a burn scar. You are in good hands with her! She is a true healer!",
  },
  {
    name: "Valerie Epstein-Johnson",
    meta: "5 months ago",
    text:
      "I’ve loved my acupuncture sessions with Alana. She brings such a grounded, warm presence and deep knowledge and skill to her sessions. She is attuned to the way acupuncture touches emotion and trauma and holds all of it so sensitively.",
  },
  {
    name: "Colleen Osborne",
    meta: "5 months ago",
    text:
      "Great price. I have been getting acupuncture from Alana for several months now. She is warm and caring, super competent, and very easy to work with. I highly recommend her for acupuncture.",
  },
  {
    name: "Casey Endo",
    meta: "6 months ago",
    text:
      "I came to Alana while trying to get off ADHD meds after over 20 years and also while trying to get off all sleep meds at the same time. Within a couple of months of weekly acupuncture sessions and AM/PM herbs, I am now off all medications and I go to sleep before midnight, and usually wake up without an alarm clock around 7-7:30. I honestly don’t think I could have done this without her help and guidance.",
  },
  {
    name: "Tiffany Bucknam",
    meta: "8 months ago",
    text:
      "I began seeing Alana when I was working through symptoms of PTSD and physical and emotional exhaustion. Her care was exactly what I needed. Supportive, insightful, and exactly on point. I experienced tremendous changes in the 3 months that I worked with her intensely, and now have better energy than I’ve had in years.",
  },
  {
    name: "Terren Brandt",
    meta: "8 months ago",
    text:
      "I don't normally do reviews but the results from my first visit have been amazing. I’ve been having back pain that was consistently at an 8 or higher for over 6 months. I left the visit at a 4, which has been my normal for a very long time and was so happy.",
  },
  {
    name: "Bradley Roddy",
    meta: "9 months ago",
    text:
      "Alana is a true professional in acupuncture and holistic wellness. Her care goes beyond treatment—she empowers her clients with top-tier education to truly understand their bodies and elevate their health. Her passion, knowledge, and personalized approach make a lasting impact.",
  },
  {
    name: "Sarah Mandel",
    meta: "a year ago",
    text:
      "Alana is incredible! I’ve been having 2-3 migraines a week for 5-10 years, after only 2 sessions I already noticed a decrease in migraines and after 4 sessions I haven’t had a migraine in months! She is knowledgeable about a wide range of diseases and has multiple modalities she can treat them with.",
  },
];

export default function ReviewsCarousel() {
  const trackRef = useRef(null);
  const scrollRaf = useRef(null);
  const autoplayRef = useRef(null);
  const hoverRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 1;
    const card = track.querySelector(".review-card");
    if (!card) return track.clientWidth || 1;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    return card.getBoundingClientRect().width + gap;
  };

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, reviews.length - 1));
    const step = getStep();
    track.scrollTo({ left: step * clamped, behavior: "smooth" });
    setActiveIndex(clamped);
  };

  const handleScroll = () => {
    if (scrollRaf.current) {
      cancelAnimationFrame(scrollRaf.current);
    }

    scrollRaf.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;
      const step = getStep();
      const index = Math.round(track.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(index, reviews.length - 1)));
    });
  };

  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      if (hoverRef.current) return;
      const nextIndex = activeIndex + 1 > reviews.length - 1 ? 0 : activeIndex + 1;
      scrollToIndex(nextIndex);
    }, 6000);

    return () => {
      if (scrollRaf.current) {
        cancelAnimationFrame(scrollRaf.current);
      }
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <div className="reviews-carousel">
      <div
        className="reviews-track"
        ref={trackRef}
        onScroll={handleScroll}
        onMouseEnter={() => {
          hoverRef.current = true;
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
        }}
        onFocus={() => {
          hoverRef.current = true;
        }}
        onBlur={() => {
          hoverRef.current = false;
        }}
        aria-live="polite"
      >
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="review-header">
              <div>
                <p className="review-name">{review.name}</p>
                <p className="review-meta">{review.meta}</p>
              </div>
              <span className="review-quote" aria-hidden="true">
                “
              </span>
            </div>
            <p className="review-text">{review.text}</p>
          </article>
        ))}
      </div>

      <div className="reviews-nav" aria-label="Review navigation">
        <button
          type="button"
          className="reviews-nav-btn"
          onClick={() => scrollToIndex(activeIndex - 1)}
          aria-label="Previous review"
          disabled={activeIndex === 0}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15 6L9 12L15 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="reviews-dots" role="tablist" aria-label="Review list">
          {reviews.map((review, index) => (
            <button
              key={`${review.name}-${review.meta}`}
              type="button"
              className={`reviews-dot ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to review ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          className="reviews-nav-btn"
          onClick={() => scrollToIndex(activeIndex + 1)}
          aria-label="Next review"
          disabled={activeIndex === reviews.length - 1}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9 6L15 12L9 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
