import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export default function Purchase() {
  const { user } = useAuth();
  const [params] = useSearchParams();
  const initialSearches = useMemo(() => params.get("searches") || "", [params]);
  const accountEmail = user?.email || "";
  const labelClassName = "text-sm font-semibold tracking-wide text-foreground";
  const fieldClassName =
    "rounded-lg border-2 border-border/70 bg-background px-3 py-2 text-sm font-semibold text-foreground placeholder:text-foreground/45 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25 focus:outline-none transition-shadow";

  return (
    <Layout>
      <section className="container mx-auto py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-black">Purchase</h1>
        <p className="mt-2 text-foreground/70">
          Complete your purchase request below.
        </p>

        <form
          action="https://formspree.io/f/mqaydagp"
          method="POST"
          className="mt-8 grid gap-6 max-w-2xl mx-auto rounded-2xl border-2 border-border/80 bg-card/85 p-6 shadow-lg shadow-brand-500/10 ring-1 ring-brand-500/15 backdrop-blur dark:border-brand-300/35"
        >
          <input type="hidden" name="formType" value="purchase" />
          <input
            type="hidden"
            name="_subject"
            value="New balance purchase request"
          />
          <div className="grid gap-2">
            <label htmlFor="searches" className={labelClassName}>
              Number of Searches
            </label>
            <input
              id="searches"
              name="searches"
              inputMode="numeric"
              pattern="[0-9]*"
              defaultValue={initialSearches}
              required
              className={fieldClassName}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="accountEmail" className={labelClassName}>
              Account email on Osint Info
            </label>
            <input
              id="accountEmail"
              name="accountEmail"
              type="email"
              defaultValue={accountEmail}
              required
              className={fieldClassName}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="contactEmail" className={labelClassName}>
              Preferred contact email
            </label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              defaultValue={accountEmail}
              required
              className={fieldClassName}
            />
            <p className="text-xs font-semibold text-foreground/70">
              We&apos;ll send payment instructions and confirmations here.
            </p>
          </div>
          <div className="grid gap-2">
            <label htmlFor="alternateContact" className={labelClassName}>
              Alternate contact method (optional)
            </label>
            <input
              id="alternateContact"
              name="alternateContact"
              placeholder="Telegram, WhatsApp, Signal, etc."
              className={fieldClassName}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="paymentMethod" className={labelClassName}>
              Select Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              required
              className={`${fieldClassName} appearance-none`}
              defaultValue=""
            >
              <option value="" disabled>
                Select a method
              </option>
              <option>Crypto (LTC)</option>
              <option>Crypto (BTC)</option>
              <option>Crypto (XRP)</option>
              <option>Crypto (USDT)</option>
              <option>Paypal</option>
              <option>Bank Transaction</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="note" className={labelClassName}>
              Note (Optional)
            </label>
            <textarea
              id="note"
              name="note"
              rows={5}
              className={`${fieldClassName} resize-none`}
            />
          </div>
          <Button type="submit" className="h-11 rounded-xl px-6 font-semibold">
            Submit Purchase Request
          </Button>
        </form>
      </section>
    </Layout>
  );
}
