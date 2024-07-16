import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Features = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge>Smart Tech</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-2xl md:text-4xl tracking-tighter lg:max-w-3xl font-regular text-left">
            Enhance Your Customer Engagement
          </h2>
          <p className="text-xs/relaxed sm:text-md/relaxed lg:text-lg/relaxed leading-relaxed tracking-tight text-muted-foreground">
            Utilize NFC/QR codes to easily boost your ratings.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Effortless Feedback</p>
                <p className="text-muted-foreground text-sm">
                  Quick and simple customer feedback collection.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Increased Visibility</p>
                <p className="text-muted-foreground text-sm">
                  Boost online presence with higher ratings.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Customer Convenience</p>
                <p className="text-muted-foreground text-sm">
                  Easy-to-use NFC/QR code technology.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Reliable Insights</p>
                <p className="text-muted-foreground text-sm">
                  Gather accurate customer feedback.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Engagement</p>
                <p className="text-muted-foreground text-sm">
                  Strengthen customer-business interaction.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Cost-Effective</p>
                <p className="text-muted-foreground text-sm">
                  Affordable solution for better reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
