import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonial";
import { Customers } from "@/components/ui/customers";

export default function Home() {
  return (
    <main>
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
