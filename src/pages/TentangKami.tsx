import Layout from "@/components/Layout";
import { Target, Eye, Users, BookOpen } from "lucide-react";

const strukturOrganisasi = [
  { jabatan: "Ketua", nama: "Ustadz Ahmad Fauzi, Lc." },
  { jabatan: "Wakil Ketua", nama: "Ustadz Muhammad Ridwan, S.Pd.I" },
  { jabatan: "Sekretaris", nama: "Ustadz Hendra Saputra, M.Ag." },
  { jabatan: "Bendahara", nama: "Bapak Dedi Kurniawan" },
  { jabatan: "Div. Dakwah", nama: "Ustadz Asep Supriatna" },
  { jabatan: "Div. Pendidikan", nama: "Ustadzah Siti Nurjanah, S.Pd." },
];

const TentangKami = () => (
  <Layout>
    {/* Hero */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6">IKADI Kota Banjar</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Ikatan Dai Indonesia (IKADI) Kota Banjar adalah organisasi yang menghimpun para dai dan mubaligh di wilayah Kota Banjar, Jawa Barat. Kami berkomitmen untuk menyebarkan dakwah Islam yang rahmatan lil 'alamin.
        </p>
      </div>
    </section>

    {/* Visi Misi */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
              <Eye size={24} className="text-primary-foreground" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Visi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi organisasi dai terdepan dalam menyebarkan dakwah Islam yang moderat, berilmu, dan bermanfaat bagi masyarakat Kota Banjar dan sekitarnya.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center mb-4">
              <Target size={24} className="text-foreground" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Misi</h2>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>Menyelenggarakan kajian dan pendidikan Islam berkualitas</li>
              <li>Membina dan meningkatkan kompetensi para dai</li>
              <li>Membangun ukhuwah Islamiyah di tengah masyarakat</li>
              <li>Berperan aktif dalam pembangunan sosial keagamaan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Profil */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Sejarah</span>
          <h2 className="font-heading text-3xl font-bold mt-2">Profil Organisasi</h2>
        </div>
        <div className="bg-card rounded-xl p-8 border border-border space-y-4 text-muted-foreground leading-relaxed">
          <p>
            IKADI Kota Banjar didirikan sebagai wadah bagi para dai dan mubaligh untuk bersinergi dalam menyebarkan dakwah Islam. Organisasi ini merupakan cabang dari Ikatan Dai Indonesia (IKADI) yang berpusat di Jakarta.
          </p>
          <p>
            Sejak berdiri, IKADI Kota Banjar telah aktif menyelenggarakan berbagai kegiatan dakwah meliputi kajian rutin, tabligh akbar, pelatihan dai, serta program-program sosial kemanusiaan yang menyentuh berbagai lapisan masyarakat.
          </p>
          <p>
            Dengan semangat dakwah bil hikmah, IKADI Kota Banjar terus berkomitmen untuk menghadirkan Islam yang moderat, toleran, dan membawa rahmat bagi seluruh alam.
          </p>
        </div>
      </div>
    </section>

    {/* Struktur Organisasi */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Pengurus</span>
          <h2 className="font-heading text-3xl font-bold mt-2">Struktur Organisasi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {strukturOrganisasi.map((s, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold">{s.nama}</h3>
              <p className="text-sm text-gold font-medium mt-1">{s.jabatan}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default TentangKami;
