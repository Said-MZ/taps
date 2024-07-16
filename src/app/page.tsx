import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonial";
import { Customers } from "@/components/ui/customers";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Customers />
      <Stats />
      <Testimonials />
      <Features />
      <Pricing />
      <CTA />
      <FAQ />
    </main>
  );
}
