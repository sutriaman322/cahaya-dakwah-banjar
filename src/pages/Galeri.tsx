import { useState } from "react";
import Layout from "@/components/Layout";
import kegiatan1 from "@/assets/kegiatan-1.jpg";
import kegiatan2 from "@/assets/kegiatan-2.jpg";
import heroImg from "@/assets/hero-mosque.jpg";

const photos = [
  { src: kegiatan1, alt: "Kajian rutin IKADI", caption: "Kajian Rutin Ahad Pagi" },
  { src: kegiatan2, alt: "Tabligh akbar", caption: "Tabligh Akbar 2026" },
  { src: heroImg, alt: "Masjid Kota Banjar", caption: "Masjid Agung Kota Banjar" },
  { src: kegiatan1, alt: "Halaqah ilmu", caption: "Halaqah Ilmu Mingguan" },
  { src: kegiatan2, alt: "Pelatihan dai", caption: "Pelatihan Dai Muda" },
  { src: heroImg, alt: "Kegiatan sosial", caption: "Bakti Sosial Ramadhan" },
  { src: kegiatan1, alt: "Seminar dakwah", caption: "Seminar Dakwah Digital" },
  { src: kegiatan2, alt: "Musyawarah daerah", caption: "Musyawarah Daerah IKADI" },
];

const Galeri = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Galeri</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6">Galeri Foto</h1>
          <p className="text-muted-foreground">Dokumentasi kegiatan dakwah IKADI Kota Banjar.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group rounded-xl overflow-hidden aspect-square relative"
              >
                <img src={p.src} alt={p.alt} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors flex items-end">
                  <span className="text-primary-foreground font-medium text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-4xl w-full animate-fade-in">
            <img src={photos[selected].src} alt={photos[selected].alt} className="w-full rounded-xl" />
            <p className="text-primary-foreground text-center mt-4 font-heading">{photos[selected].caption}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Galeri;
