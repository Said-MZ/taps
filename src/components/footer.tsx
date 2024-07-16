import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
      items: [
        {
          title: "Smart Stand",
          href: "/smart_stand",
        },
        {
          title: "Smart Card",
          href: "/smart_card",
        },
        {
          title: "Smart Chip",
          href: "/smart_chip",
        },
        {
          title: "Menus",
          href: "/Menus",
        },
      ],
    },
    {
      title: "Products",
      description: "Boost ratings with NFC technology solutions.",
      items: [
        {
          title: "Smart Stand",
          href: "/smart_stand",
        },
        {
          title: "Smart Card",
          href: "/smart_card",
        },
        {
          title: "Smart Chip",
          href: "/smart_chip",
        },
        {
          title: "Menus",
          href: "/Menus",
        },
      ],
    },
    {
      title: "Company",
      description: "Revolutionizing feedback with innovative NFC solutions.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Testimonials",
          href: "/testimonials",
        },
        {
          title: "Customers",
          href: "/customers",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-primary/20 text-foreground">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <Image
                alt="taps logo"
                src="/logo.png"
                width={100}
                height={100}
                className="dark:invert"
              />
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                Boost ratings with NFC technology solutions.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                <p>Amman, Jordan</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-foreground/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
