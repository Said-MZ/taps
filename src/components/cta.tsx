import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge>Get started!</Badge>
        </div>
        <div className="flex flex-col gap-2  max-w-2xl">
          <h2 className="text-2xl md:text-4xl tracking-tighter  font-regular text-center">
            Unlock Your Business Potential
          </h2>
          <p className="text-xs/relaxed sm:text-md/relaxed lg:text-lg/relaxed leading-relaxed tracking-tight text-muted-foreground">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
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
    </div>
  </div>
);
