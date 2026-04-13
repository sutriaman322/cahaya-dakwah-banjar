import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo-ikadi.png";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="IKADI" width={48} height={48} className="w-12 h-12 brightness-200" loading="lazy" />
            <div>
              <h3 className="font-heading font-bold text-xl">IKADI</h3>
              <p className="text-sm opacity-70">Kota Banjar</p>
            </div>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Ikatan Dai Indonesia Kota Banjar. Menebar dakwah, membangun umat, memperkuat ukhuwah Islamiyah.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-gold">Menu</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/tentang", label: "Tentang Kami" },
              { to: "/artikel", label: "Artikel Dakwah" },
              { to: "/kegiatan", label: "Kegiatan" },
              { to: "/kajian-video", label: "Kajian Video" },
              { to: "/galeri", label: "Galeri" },
              { to: "/kontak", label: "Kontak" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-70 hover:opacity-100 hover:text-gold transition-all">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-gold">Kontak</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 opacity-70">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Kota Banjar, Jawa Barat, Indonesia
            </li>
            <li className="flex items-center gap-2 opacity-70">
              <Phone size={16} className="shrink-0" />
              +62 812-XXXX-XXXX
            </li>
            <li className="flex items-center gap-2 opacity-70">
              <Mail size={16} className="shrink-0" />
              info@ikadikotabanjar.id
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-gold">Media Sosial</h4>
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-gold hover:text-foreground transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4 text-center text-xs opacity-50">
        © {new Date().getFullYear()} IKADI Kota Banjar. Hak Cipta Dilindungi.
      </div>
    </div>
  </footer>
);

export default Footer;
