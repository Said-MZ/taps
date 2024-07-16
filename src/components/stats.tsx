import { MoveDownLeft, MoveUpRight } from "lucide-react";

export const Stats = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            100
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            reviews gathered using our NFC technology.
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            99%
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            clients report improved feedback processes.
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-success" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            35%
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            boost in online ratings
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            85%
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            of businesses saw immediate results with our solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
);
