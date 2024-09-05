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
    <div className="w-full py-20 lg:py-40 text-foreground bg-gradient-to-t from-primary/20 to-background">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <Image
                alt="taps logo"
                src="/logo.png"
                width={100}
                height={100}
                className="dark:invert"
              />
              <p className="max-w-lg text-lg leading-relaxed tracking-tight text-left text-foreground/75">
                Boost ratings with NFC technology solutions.
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <div className="flex flex-col max-w-lg text-sm leading-relaxed tracking-tight text-left text-foreground/75">
                <p>Amman, Jordan</p>
              </div>
              <div className="flex flex-col max-w-lg text-sm leading-relaxed tracking-tight text-left text-foreground/75">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-3">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-1 text-base"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between"
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
                        className="flex items-center justify-between"
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
