"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";

export default function MenstrualEquityReportPage() {
const [submitting, setSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState("");


async function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();


setSubmitting(true);
setError("");

const form = event.currentTarget;
const formData = new FormData(form);

try {
  const response = await fetch("https://formspree.io/f/mpqvvjad", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    setSubmitted(true);
    form.reset();
  } else {
    setError("Something went wrong. Please try again.");
  }
} catch {
  setError(
    "Something went wrong. Please check your connection and try again."
  );
} finally {
  setSubmitting(false);
}


}

return (
<main className="report-page"> <div className="report-decoration report-decoration-gold"></div> <div className="report-decoration report-decoration-green"></div>

  {/* HERO */}
  <section className="report-hero">
    <Container>
      <div className="report-hero-grid">
        <div className="report-hero-image">
          <Image
            src="/images/eBook-cover.png"
            alt="The State of Menstrual Equity in Africa 2026 report"
            width={700}
            height={700}
            priority
          />
        </div>

        <div className="report-hero-content">
          <span className="section-label">
            RESEARCH REPORT
          </span>

          <h1>
            The State of Menstrual
            Equity in Africa 2026
          </h1>

          <p className="report-intro">
            Exploring menstrual health, period poverty, access,
            dignity and opportunity for women and girls across Africa.
          </p>

          <a
            href="#download-report"
            className="report-download-button"
          >
            Download Your Report
          </a>
        </div>
      </div>
    </Container>
  </section>

  {/* WHAT'S INSIDE */}
  <section className="report-overview">
    <Container>
      <div className="report-overview-grid">
        <div className="report-overview-content">
          <span className="section-label">
            ABOUT THE REPORT
          </span>

          <h2>What&apos;s Inside</h2>

          <p>
            The State of Menstrual Equity in Africa 2026 brings
            together research, published evidence and insights
            to explore the realities of menstrual health across
            the continent. Drawing on trusted global organisations,
            academic literature and public health data, the report
            examines the barriers women and girls continue to face,
            while highlighting opportunities for meaningful action
            and long-term change.
          </p>
        </div>

        <div className="report-overview-image">
          <Image
            src="/images/state-of-menstrual-equity-mockup.png"
            alt="State of Menstrual Equity in Africa 2026 report"
            width={700}
            height={700}
          />
        </div>
      </div>
    </Container>
  </section>

  {/* DOWNLOAD FORM */}
  <section
    className="report-download-section"
    id="download-report"
  >
    <Container>
      <div className="report-download-heading">
        <span className="section-label">
          GET THE REPORT
        </span>

        <h2>Download Your Free Copy</h2>

        <p>
          Fill in your details below to access the full report.
        </p>
      </div>

      {!submitted ? (
        <form
          className="report-form"
          onSubmit={handleSubmit}
        >
          <div className="report-form-grid">
            <div className="form-field">
              <label htmlFor="first-name">
                First Name *
              </label>

              <input
                id="first-name"
                name="firstName"
                type="text"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="last-name">
                Last Name *
              </label>

              <input
                id="last-name"
                name="lastName"
                type="text"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="job-title">
                Job Title
              </label>

              <input
                id="job-title"
                name="jobTitle"
                type="text"
              />
            </div>

            <div className="form-field">
              <label htmlFor="organisation">
                Organisation
              </label>

              <input
                id="organisation"
                name="organisation"
                type="text"
              />
            </div>

            <div className="form-field">
              <label htmlFor="country">
                Country
              </label>

              <input
                id="country"
                name="country"
                type="text"
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
              />
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
              />
            </div>
          </div>

          <label className="report-checkbox">
            <input
              type="checkbox"
              name="marketingConsent"
              value="Yes"
            />

            <span>
              I&apos;d like to receive updates from A Thousand Women.
            </span>
          </label>

          {error && (
            <p className="report-form-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="report-submit-button"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Download Report"}
          </button>
        </form>
      ) : (
        <div className="report-success">
          <div className="report-success-icon">
            ✓
          </div>

          <h3>Thank you!</h3>

          <p>
            Your report is ready to download.
          </p>

          <a
            href="/pdf/state-of-menstrual-equity.pdf"
            download
            className="report-submit-button"
          >
            Download Report
          </a>
        </div>
      )}
    </Container>
  </section>
</main>


);
}
