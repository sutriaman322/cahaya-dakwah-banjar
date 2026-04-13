import Layout from "@/components/Layout";
import { Calendar, MapPin, Clock } from "lucide-react";
import kegiatan1 from "@/assets/kegiatan-1.jpg";
import kegiatan2 from "@/assets/kegiatan-2.jpg";

const agenda = [
  { title: "Kajian Rutin Ahad Pagi", date: "Setiap Ahad", time: "07:00 - 09:00 WIB", location: "Masjid Agung Banjar", status: "Rutin" },
  { title: "Tabligh Akbar Bulan April", date: "20 April 2026", time: "09:00 - 12:00 WIB", location: "Gedung Serbaguna Kota Banjar", status: "Mendatang" },
  { title: "Pelatihan Dai Muda", date: "27 April 2026", time: "08:00 - 16:00 WIB", location: "Aula IKADI Kota Banjar", status: "Mendatang" },
  { title: "Kajian Fiqih Kontemporer", date: "Setiap Rabu", time: "19:30 - 21:00 WIB", location: "Masjid At-Taqwa", status: "Rutin" },
];

const dokumentasi = [
  { title: "Tabligh Akbar Maret 2026", image: kegiatan2, desc: "Kegiatan tabligh akbar bersama masyarakat Kota Banjar." },
  { title: "Kajian Rutin Mingguan", image: kegiatan1, desc: "Kajian ilmu agama rutin setiap pekan." },
  { title: "Bakti Sosial Ramadhan", image: kegiatan2, desc: "Program berbagi untuk masyarakat yang membutuhkan." },
  { title: "Pelatihan Dai Batch 5", image: kegiatan1, desc: "Program pembinaan dai muda IKADI." },
];

const Kegiatan = () => (
  <Layout>
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Kegiatan</span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6">Kegiatan & Agenda</h1>
        <p className="text-muted-foreground">Jadwal kajian, event, dan dokumentasi kegiatan IKADI Kota Banjar.</p>
      </div>
    </section>

    {/* Agenda */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-2xl font-bold mb-8">Jadwal Kajian & Event</h2>
        <div className="space-y-4">
          {agenda.map((a, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading font-semibold text-lg">{a.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${a.status === "Rutin" ? "bg-primary/10 text-primary" : "bg-gold/20 text-gold"}`}>
                    {a.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1"><Calendar size={14} />{a.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} />{a.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} />{a.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Dokumentasi */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold mb-8 text-center">Dokumentasi Kegiatan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dokumentasi.map((d, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden border border-border group">
              <div className="aspect-video overflow-hidden">
                <img src={d.image} alt={d.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-sm mb-1">{d.title}</h3>
                <p className="text-xs text-muted-foreground">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Kegiatan;
