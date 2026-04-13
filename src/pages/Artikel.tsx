import { useState } from "react";
import Layout from "@/components/Layout";
import { Search } from "lucide-react";
import kegiatan1 from "@/assets/kegiatan-1.jpg";
import kegiatan2 from "@/assets/kegiatan-2.jpg";

const categories = ["Semua", "Aqidah", "Fiqih", "Akhlak", "Keluarga", "Remaja"];

const allArticles = [
  { category: "Aqidah", title: "Mengenal Tauhid: Fondasi Keimanan Seorang Muslim", date: "10 April 2026", excerpt: "Tauhid merupakan pondasi utama dalam ajaran Islam. Mari mengenal lebih dalam tentang makna tauhid dan implementasinya.", image: kegiatan1 },
  { category: "Fiqih", title: "Panduan Lengkap Shalat Berjamaah dan Keutamaannya", date: "8 April 2026", excerpt: "Shalat berjamaah memiliki keutamaan 27 derajat dibanding shalat sendirian. Berikut panduan lengkapnya.", image: kegiatan2 },
  { category: "Akhlak", title: "Meneladani Akhlak Rasulullah dalam Kehidupan Sehari-hari", date: "5 April 2026", excerpt: "Rasulullah SAW adalah teladan terbaik. Bagaimana kita meneladani akhlak beliau di era modern?", image: kegiatan1 },
  { category: "Keluarga", title: "Membangun Keluarga Sakinah Mawaddah Warahmah", date: "2 April 2026", excerpt: "Tips dan panduan membangun keluarga yang bahagia menurut tuntunan Islam.", image: kegiatan2 },
  { category: "Remaja", title: "Pemuda Islam: Tantangan dan Peluang di Era Digital", date: "28 Maret 2026", excerpt: "Generasi muda Muslim menghadapi tantangan unik di era digital. Bagaimana menyikapinya dengan bijak?", image: kegiatan1 },
  { category: "Aqidah", title: "Beriman kepada Hari Akhir: Motivasi Hidup Muslim", date: "25 Maret 2026", excerpt: "Keimanan kepada hari akhir memberi motivasi untuk senantiasa berbuat baik dan menjauhi kemungkaran.", image: kegiatan2 },
];

const Artikel = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = allArticles.filter((a) => {
    const matchCat = activeCategory === "Semua" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Layout>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Artikel</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6">Artikel Dakwah</h1>
          <p className="text-muted-foreground">Kumpulan artikel dakwah dari para dai IKADI Kota Banjar untuk pencerahan umat.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === c ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <article key={i} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all group">
                <div className="aspect-video overflow-hidden">
                  <img src={a.image} alt={a.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">{a.category}</span>
                  <h3 className="font-heading font-semibold text-lg mt-2 mb-2 line-clamp-2 group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{a.excerpt}</p>
                  <p className="text-xs text-muted-foreground">{a.date}</p>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">Tidak ada artikel yang ditemukan.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Artikel;
