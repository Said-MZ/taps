import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonial";
import { Customers } from "@/components/ui/customers";
import Divider from "@/components/ui/divider";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Customers />
      <Divider clipPath="polygon(0 100%, 100% 0, 100% 100%)" />

      <Stats />
      <Divider />

      <Testimonials />
      <Divider clipPath="polygon(0 100%, 100% 0, 100% 100%)" />

      <Features />
      <Divider />

      <Pricing />
      <Divider clipPath="polygon(0 100%, 100% 0, 100% 100%)" />

      <CTA />
      <Divider />

      <FAQ />
    </main>
  );
}
