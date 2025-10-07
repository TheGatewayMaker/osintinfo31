import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  const labelClassName = "text-sm font-semibold tracking-wide text-foreground";
  const fieldClassName =
    "rounded-lg border-2 border-border/70 bg-background px-3 py-2 text-sm font-semibold text-foreground placeholder:text-foreground/45 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25 focus:outline-none transition-shadow";

  return (
    <Layout>
      <section className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-black md:text-4xl">Contact</h1>
        <p className="mt-2 text-foreground/70">
          We usually respond within 24 hours.
        </p>

        <div className="mt-6 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl px-7 font-semibold shadow-xl shadow-brand-500/20 transition-transform duration-200 hover:-translate-y-px"
          >
            <a
              href="https://t.me/Osint_Info_supportbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Contact on Telegram
            </a>
          </Button>
        </div>

        <div className="mt-4 text-center">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-semibold uppercase tracking-wide text-secondary-foreground">
            Or
          </span>
        </div>

        <form
          action="https://formspree.io/f/mqaydagp"
          method="POST"
          className="mt-8 mx-auto grid max-w-2xl gap-6 rounded-2xl border-2 border-border/80 bg-card/85 p-6 shadow-lg shadow-brand-500/10 ring-1 ring-brand-500/15 backdrop-blur dark:border-brand-300/35"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="firstName" className={labelClassName}>
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                className={fieldClassName}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="lastName" className={labelClassName}>
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                className={fieldClassName}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className={labelClassName}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={fieldClassName}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="whatsapp" className={labelClassName}>
              WhatsApp (optional)
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              className={fieldClassName}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className={labelClassName}>
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              required
              className={`${fieldClassName} resize-none`}
            />
          </div>
          <Button type="submit" className="h-11 rounded-xl px-6 font-semibold">
            Send
          </Button>
        </form>
      </section>
    </Layout>
  );
}
