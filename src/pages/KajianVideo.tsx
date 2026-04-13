import Layout from "@/components/Layout";
import { Play } from "lucide-react";

const videos = [
  { title: "Keutamaan Ilmu dalam Islam", speaker: "Ustadz Ahmad Fauzi, Lc.", id: "dQw4w9WgXcQ" },
  { title: "Menjaga Hati di Era Digital", speaker: "Ustadz Muhammad Ridwan", id: "dQw4w9WgXcQ" },
  { title: "Adab Bermedia Sosial", speaker: "Ustadz Asep Supriatna", id: "dQw4w9WgXcQ" },
  { title: "Fiqih Puasa: Panduan Lengkap", speaker: "Ustadz Hendra Saputra", id: "dQw4w9WgXcQ" },
  { title: "Keluarga Sakinah", speaker: "Ustadzah Siti Nurjanah", id: "dQw4w9WgXcQ" },
  { title: "Pemuda dan Dakwah", speaker: "Ustadz Ahmad Fauzi, Lc.", id: "dQw4w9WgXcQ" },
];

const KajianVideo = () => (
  <Layout>
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Video</span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6">Kajian Video</h1>
        <p className="text-muted-foreground">Tonton ceramah dan kajian Islam dari para dai IKADI Kota Banjar.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden border border-border group">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.speaker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default KajianVideo;
