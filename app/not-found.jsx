import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-card">
        <p className="not-found-eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist or has moved.</p>
        <Link className="intro-cta" href="/">
          Back to Home
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
        </Link>
      </div>
    </div>
  );
}
