import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { BookOpen, Users, Calendar, Heart, Play, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mosque.jpg";
import kegiatan1 from "@/assets/kegiatan-1.jpg";
import kegiatan2 from "@/assets/kegiatan-2.jpg";

const programs = [
  { icon: BookOpen, title: "Kajian Rutin", desc: "Kajian ilmu agama setiap pekan bersama para dai pilihan." },
  { icon: Users, title: "Pembinaan Dai", desc: "Program peningkatan kapasitas dai dalam berdakwah." },
  { icon: Calendar, title: "Tabligh Akbar", desc: "Event dakwah besar untuk masyarakat umum." },
  { icon: Heart, title: "Sosial & Kemanusiaan", desc: "Program bakti sosial dan kepedulian umat." },
];

const articles = [
  { category: "Aqidah", title: "Mengenal Tauhid: Fondasi Keimanan Seorang Muslim", date: "10 April 2026", image: kegiatan1 },
  { category: "Fiqih", title: "Panduan Lengkap Shalat Berjamaah dan Keutamaannya", date: "8 April 2026", image: kegiatan2 },
  { category: "Akhlak", title: "Meneladani Akhlak Rasulullah dalam Kehidupan Sehari-hari", date: "5 April 2026", image: kegiatan1 },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Masjid" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6 animate-fade-in">
            IKADI Kota Banjar
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Menebar Dakwah, <br />
            <span className="text-gold">Membangun Umat</span>
          </h1>
          <p className="text-lg opacity-80 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Bersama IKADI Kota Banjar, memperkuat dakwah Islam yang rahmatan lil 'alamin di tengah masyarakat.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/tentang" className="px-6 py-3 bg-primary rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Tentang Kami
            </Link>
            <Link to="/kegiatan" className="px-6 py-3 border border-primary-foreground/30 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
              Lihat Kegiatan
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Quran Quote */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="font-arabic text-3xl md:text-4xl text-primary mb-4 leading-relaxed" dir="rtl">
          ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ
        </p>
        <p className="text-muted-foreground italic mb-2">
          "Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pengajaran yang baik."
        </p>
        <p className="text-sm text-muted-foreground font-medium">— QS. An-Nahl: 125</p>
      </div>
    </section>

    {/* Programs */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Program Kami</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Program Unggulan IKADI</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Articles Preview */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Artikel Terbaru</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Artikel Dakwah</h2>
          </div>
          <Link to="/artikel" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Lihat Semua <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <article key={i} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all group">
              <div className="aspect-video overflow-hidden">
                <img src={a.image} alt={a.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-gold uppercase tracking-wider">{a.category}</span>
                <h3 className="font-heading font-semibold text-lg mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="text-xs text-muted-foreground">{a.date}</p>
              </div>
            </article>
          ))}
        </div>
        <Link to="/artikel" className="mt-8 flex md:hidden items-center justify-center gap-2 text-primary font-semibold">
          Lihat Semua <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    {/* Video CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden bg-navy relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-14">
            <div className="text-primary-foreground">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Kajian Video</span>
              <h2 className="font-heading text-3xl font-bold mt-2 mb-4">Tonton Kajian Islam Kapan Saja</h2>
              <p className="opacity-70 mb-6">Akses ceramah dan kajian dari para dai IKADI Kota Banjar melalui channel YouTube kami.</p>
              <Link to="/kajian-video" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-foreground rounded-lg font-semibold hover:bg-gold-light transition-colors">
                <Play size={18} /> Tonton Sekarang
              </Link>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden bg-foreground/10">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Kajian IKADI"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Donasi */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Mari Bersama Menebar Kebaikan</h2>
        <p className="opacity-80 max-w-xl mx-auto mb-8">
          Dukung program dakwah IKADI Kota Banjar dengan berpartisipasi dalam kegiatan dan donasi untuk keberlanjutan dakwah.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/kontak" className="px-8 py-3 bg-gold text-foreground rounded-lg font-semibold hover:bg-gold-light transition-colors">
            Donasi Sekarang
          </Link>
          <Link to="/kontak" className="px-8 py-3 border border-primary-foreground/30 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
