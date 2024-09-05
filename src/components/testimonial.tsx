"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const feedbacks = [
    {
      id: 1,
      by: "Maen",
      feedback: "ماشاءالله إشي مرتب ، الله يجزيك الخير.",
    },
    {
      id: 2,
      by: "Malik",
      feedback: "ريحت حالي من حمل الكروت الكرتونية 😂 .",
    },
    {
      id: 3,
      by: "Malik",
      feedback: "اشي ببيض الوجه الله يوفقكم ويرزقكم ❤️.",
    },
    {
      id: 4,
      by: "Ali Yasser",
      feedback:
        "لا جد مشاء الله عليكم شغل نضيف وجودة كثير حلوه ومرتبه مشاء الله عليكم ثقه والله",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl tracking-tighter text-left md:text-4xl lg:max-w-3xl font-regular">
            Praised by Businesses for Innovation and Results
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {feedbacks.map((_, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="flex flex-col justify-between p-6 rounded-md lg:col-span-2 min-h-46 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20">
                    <User className="w-8 h-8 mb-2 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {feedbacks[index].by}
                        </h3>
                        <p className="max-w-xs text-sm text-muted-foreground sm:text-base">
                          {feedbacks[index].feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
