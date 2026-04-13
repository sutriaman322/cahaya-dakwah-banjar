import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-ikadi.png";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/artikel", label: "Artikel" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/kajian-video", label: "Kajian Video" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="IKADI Kota Banjar" width={40} height={40} className="w-10 h-10" />
          <div className="leading-tight">
            <span className="font-heading font-bold text-primary text-lg block">IKADI</span>
            <span className="text-xs text-muted-foreground">Kota Banjar</span>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-secondary hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary bg-secondary font-semibold"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-secondary ${
                    location.pathname === link.href
                      ? "text-primary bg-secondary font-semibold"
                      : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
