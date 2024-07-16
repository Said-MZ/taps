import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <div className="w-full py-32 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl max-w-lg tracking-tighter text-left font-regular">
              Transform Your Customer Feedback Experience
            </h1>
            <p className="text-xs/relaxed sm:text-md/relaxed lg:text-lg/relaxed leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Empower your business with cutting-edge NFC and QR code technology
              for seamless ratings and reviews.
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            <Button
              className="gap-4 w-64 sm:w-auto sm:max-w-72 mx-auto sm:mx-0"
              variant="outline"
            >
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button className="gap-4 w-64 sm:w-auto sm:max-w-72 mx-auto sm:mx-0">
              Check our Products <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square"></div>
          <div className="bg-muted rounded-md row-span-2"></div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </div>
);
