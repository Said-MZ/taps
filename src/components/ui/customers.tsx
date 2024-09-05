"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Customers = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const customers = [
    {
      id: 1,
      logo: "/bursa.png",
    },
    {
      id: 2,
      logo: "/fajita.png",
    },
    {
      id: 3,
      logo: "/lamsa.png",
    },
    {
      id: 4,
      logo: "/marino.png",
    },
    {
      id: 5,
      logo: "/rozz.png",
    },
    {
      id: 6,
      logo: "/salma.png",
    },
    {
      id: 7,
      logo: "/shuffle.png",
    },
    // duplicate
    {
      id: 8,
      logo: "/bursa.png",
    },
    {
      id: 9,
      logo: "/fajita.png",
    },
    {
      id: 10,
      logo: "/lamsa.png",
    },
    {
      id: 11,
      logo: "/marino.png",
    },
    {
      id: 12,
      logo: "/rozz.png",
    },
    {
      id: 13,
      logo: "/salma.png",
    },
    {
      id: 14,
      logo: "/shuffle.png",
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
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <h3 className="mb-12 tracking-tighter text-center text-md sm:text-lg lg:max-w-xl font-regular">
          Trusted by Leading Brands and Businesses
        </h3>
        <div className="grid items-center grid-cols-5 gap-10">
          <div className="relative w-full col-span-4">
            <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-screen h-full bg-gradient-to-r from-background via-white/0 to-background"></div>
            <Carousel setApi={setApi} className="w-screen">
              <CarouselContent>
                {customers.map((customer, index) => (
                  <CarouselItem
                    className="basis-1/4 lg:basis-1/6"
                    key={customer.id}
                  >
                    <div className="flex items-center justify-center p-2 overflow-hidden rounded-md h-44 aspect-square bg-muted-foreground ">
                      <Image
                        src={customer.logo}
                        alt="customer Logo"
                        width={1260}
                        height={800}
                        className="saturate-0 mix-blend-multiply "
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
