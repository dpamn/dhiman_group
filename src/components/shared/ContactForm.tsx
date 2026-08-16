"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui";
import { getFormspreeEndpoint, submitToFormspree } from "@/lib/formspree";

type FormState = "idle" | "submitting" | "success" | "error";

type ServiceOption = {
  value: string;
  label: string;
};

type ContactFormProps = {
  formIdPrefix: string;
  division: string;
  serviceOptions?: ServiceOption[];
  showServiceSelect?: boolean;
};

const defaultServiceOptions: ServiceOption[] = [
  { value: "general", label: "General Enquiry" },
  { value: "engineering", label: "Dhiman Engineering Company" },
  { value: "agro", label: "Naman Agro Udyog" },
  { value: "other", label: "Other" },
];

export function ContactForm({
  formIdPrefix,
  division,
  serviceOptions = defaultServiceOptions,
  showServiceSelect = true,
}: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const endpoint = getFormspreeEndpoint();
    if (!endpoint) {
      setErrorMessage(
        "Contact form is not configured yet. Please use phone or email to reach us.",
      );
      setState("error");
      return;
    }

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setState("submitting");
    setErrorMessage(null);

    const formData = new FormData(form);
    const payload: Record<string, string> = {
      division,
      _subject: `${division} enquiry`,
    };

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        payload[key] = value;
      }
    });

    try {
      await submitToFormspree(endpoint, payload);
      setState("success");
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
      setState("error");
    }
  }

  function handleSendAnother() {
    setState("idle");
    setErrorMessage(null);
    formRef.current?.reset();
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 aria-hidden="true" className="size-14 text-green-600" />
        <h3 className="font-display text-2xl font-bold text-brand-navy">
          Message sent!
        </h3>
        <p className="max-w-sm text-slate-600">
          Thank you for reaching out. Our team will get back to you within
          24–48 hours.
        </p>
        <button
          type="button"
          className="mt-2 text-sm font-semibold text-green-700 hover:text-brand-navy"
          onClick={handleSendAnother}
        >
          Send another message
        </button>
      </div>
    );
  }

  const nameId = `${formIdPrefix}-name`;
  const phoneId = `${formIdPrefix}-phone`;
  const emailId = `${formIdPrefix}-email`;
  const serviceId = `${formIdPrefix}-service`;
  const messageId = `${formIdPrefix}-message`;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-6 space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={nameId}
            className="mb-1.5 block text-sm font-semibold text-brand-navy"
          >
            Full Name{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            disabled={state === "submitting"}
            className="w-full rounded-control border border-slate-300 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20 disabled:cursor-not-allowed disabled:bg-slate-100"
          />
        </div>
        <div>
          <label
            htmlFor={phoneId}
            className="mb-1.5 block text-sm font-semibold text-brand-navy"
          >
            Phone Number{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
          </label>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            disabled={state === "submitting"}
            className="w-full rounded-control border border-slate-300 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20 disabled:cursor-not-allowed disabled:bg-slate-100"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={emailId}
          className="mb-1.5 block text-sm font-semibold text-brand-navy"
        >
          Email Address
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          disabled={state === "submitting"}
          className="w-full rounded-control border border-slate-300 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20 disabled:cursor-not-allowed disabled:bg-slate-100"
        />
      </div>

      {showServiceSelect ? (
        <div>
          <label
            htmlFor={serviceId}
            className="mb-1.5 block text-sm font-semibold text-brand-navy"
          >
            Service Required
          </label>
          <select
            id={serviceId}
            name="service"
            disabled={state === "submitting"}
            className="w-full rounded-control border border-slate-300 bg-white px-4 py-3 text-sm text-brand-navy focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20 disabled:cursor-not-allowed disabled:bg-slate-100"
          >
            <option value="">Select a service...</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div>
        <label
          htmlFor={messageId}
          className="mb-1.5 block text-sm font-semibold text-brand-navy"
        >
          Message{" "}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={5}
          placeholder="Describe your project or requirements..."
          disabled={state === "submitting"}
          className="w-full resize-none rounded-control border border-slate-300 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20 disabled:cursor-not-allowed disabled:bg-slate-100"
        />
      </div>

      {state === "error" && errorMessage ? (
        <p role="alert" className="text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <ArrowRight aria-hidden="true" className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
