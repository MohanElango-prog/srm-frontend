import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Agents", href: "/agents" },
    {
      name: "Services",
      href: "/services",
      subItems: [
        { name: "Rentals", href: "/services/rentals" },
        { name: "Mobile Development", href: "/services/mobile-development" },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "Cloud Services", href: "/services/cloud-services" },
      ],
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
     <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-neutral-900/60">
        <Logo className="w-24 h-14 object-contain" />
        <button
          onClick={toggleMenu}
          className="p-2 text-white transition-colors hover:text-neutral-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-[64px]"></div>

      {/* Fullscreen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-neutral-900/95 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute top-0 right-0 p-6">
          <button
            onClick={toggleMenu}
            className="p-2 text-white transition-colors hover:text-neutral-300"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-full">
          <div className="space-y-8 text-center">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div className="space-y-4">
                    <button
                      onClick={toggleServices}
                      className="flex items-center justify-center space-x-2 text-2xl font-light text-white transition-colors hover:text-neutral-300 mx-auto"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          isServicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "space-y-4 overflow-hidden transition-all duration-300",
                        isServicesOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {item.subItems.map((subItem) => (
                        <div key={subItem.name}>
                          <a
                            href={subItem.href}
                            onClick={toggleMenu}
                            className="text-xl font-light text-neutral-300 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-2xl font-light text-white transition-colors hover:text-neutral-300"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};
