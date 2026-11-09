"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { occasionOptions, site } from "@/lib/site";

type FormFields = {
  name: string;
  phone: string;
};

export function ContactForm() {
  const occasionRef = useRef<HTMLSelectElement>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>(
    {},
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const selectedOccasion = new URLSearchParams(window.location.search).get(
      "occasion",
    );
    if (
      selectedOccasion &&
      occasionOptions.some((option) => option === selectedOccasion)
    ) {
      if (occasionRef.current) occasionRef.current.value = selectedOccasion;
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const nextErrors: Partial<Record<keyof FormFields, string>> = {};

    if (!name) nextErrors.name = site.contactPage.requiredError;
    if (!phone) nextErrors.phone = site.contactPage.requiredError;
    setErrors(nextErrors);
    setReady(false);

    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      site.contactPage.whatsappMessageTitle,
      `${site.contactPage.whatsappMessageLabels.name}: ${name}`,
      `${site.contactPage.whatsappMessageLabels.phone}: ${phone}`,
      `${site.contactPage.whatsappMessageLabels.occasion}: ${String(formData.get("occasion") ?? "")}`,
      `${site.contactPage.whatsappMessageLabels.deliveryDate}: ${String(formData.get("deliveryDate") ?? "")}`,
      `${site.contactPage.whatsappMessageLabels.details}: ${String(formData.get("details") ?? "").trim()}`,
    ].join("\n");
    const url = `${site.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setReady(true);
  }

  return (
    <form className="soft-card p-5 sm:p-8 lg:p-10" onSubmit={handleSubmit} noValidate>
      <h2 className="font-cairo text-2xl font-extrabold text-plum-dark">
        {site.contactPage.formHeading}
      </h2>
      <p className="mt-2 text-sm text-body-muted">
        {site.contactPage.formDescription}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            className="mb-2 block font-cairo text-sm font-bold text-ink"
            htmlFor="contact-name"
          >
            {site.contactPage.nameLabel}
          </label>
          <input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            className="contact-control"
            id="contact-name"
            name="name"
            placeholder={site.contactPage.namePlaceholder}
            required
            type="text"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-rose-deep" id="name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            className="mb-2 block font-cairo text-sm font-bold text-ink"
            htmlFor="contact-phone"
          >
            {site.contactPage.phoneLabel}
          </label>
          <input
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={Boolean(errors.phone)}
            autoComplete="tel"
            className="contact-control"
            dir="ltr"
            id="contact-phone"
            name="phone"
            placeholder={site.contactPage.phonePlaceholder}
            required
            type="tel"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-rose-deep" id="phone-error">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            className="mb-2 block font-cairo text-sm font-bold text-ink"
            htmlFor="contact-occasion"
          >
            {site.contactPage.occasionLabel}
          </label>
          <select
            className="contact-control"
            id="contact-occasion"
            name="occasion"
            ref={occasionRef}
          >
            <option value="">{site.contactPage.occasionPlaceholder}</option>
            {occasionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="mb-2 block font-cairo text-sm font-bold text-ink"
            htmlFor="delivery-date"
          >
            {site.contactPage.deliveryDateLabel}
          </label>
          <input
            className="contact-control"
            id="delivery-date"
            name="deliveryDate"
            type="date"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            className="mb-2 block font-cairo text-sm font-bold text-ink"
            htmlFor="gift-details"
          >
            {site.contactPage.detailsLabel}
          </label>
          <textarea
            className="contact-control min-h-28 resize-y"
            id="gift-details"
            name="details"
            placeholder={site.contactPage.detailsPlaceholder}
            rows={4}
          />
        </div>
      </div>

      <button
        className="primary-button mt-5 min-h-[52px] w-full cursor-pointer sm:w-auto sm:px-8"
        type="submit"
      >
        {site.contactPage.submitAction}
      </button>
      {ready && (
        <p className="mt-4 text-sm font-semibold text-plum" role="status">
          {site.contactPage.whatsappReadyNote}
        </p>
      )}
    </form>
  );
}
