import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faq: { id: number; question: string; answer: string }[] = [
  {
    id: 1,
    question: "What is NFC technology?",
    answer:
      "NFC (Near Field Communication) allows for wireless data transfer between devices.",
  },
  {
    id: 2,
    question: "How do QR codes work?",
    answer: "QR codes can be scanned using a smartphone to access information.",
  },
  {
    id: 3,
    question: "Can I customize the NFC cards?",
    answer: "Yes, we offer customization options for our NFC cards.",
  },
  {
    id: 4,
    question: "How can this technology boost my ratings?",
    answer:
      "It simplifies the feedback process, encouraging more customers to leave reviews.",
  },
  {
    id: 5,
    question: "Is there a setup fee?",
    answer: "No, there is no setup fee for our plans.",
  },
];

export const FAQ = () => (
  <div className="w-full py-20 lg:py-40">
    {" "}
    <div className="container mx-auto">
      {" "}
      <div className="flex flex-col gap-10">
        {" "}
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          {" "}
          <Badge variant="outline">FAQ</Badge>{" "}
          <div className="flex gap-2 flex-col max-w-3xl">
            {" "}
            <h2 className="text-xl md:text-4xl tracking-tighter font-regular text-center ">
              Find answers to common questions about our NFC/QR solutions.
            </h2>{" "}
            <p className="text-xs/relaxed sm:text-md/relaxed lg:text-lg/relaxed leading-relaxed tracking-tight text-muted-foreground">
              {" "}
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.{" "}
            </p>{" "}
          </div>{" "}
          <div>
            {" "}
            <Button className="gap-4" variant="outline">
              {" "}
              Reach out <PhoneCall className="w-4 h-4" />{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="max-w-3xl w-full mx-auto">
          {" "}
          <Accordion type="single" collapsible className="w-full">
            {" "}
            {faq.map((question, index) => (
              <AccordionItem key={question.id} value={"index-" + index}>
                {" "}
                <AccordionTrigger> {question.question}</AccordionTrigger>{" "}
                <AccordionContent>{question.answer}</AccordionContent>{" "}
              </AccordionItem>
            ))}{" "}
          </Accordion>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
