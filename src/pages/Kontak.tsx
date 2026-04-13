import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Youtube } from "lucide-react";

const Kontak = () => {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim! (Demo)");
    setForm({ nama: "", email: "", pesan: "" });
  };

  return (
    <Layout>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Kontak</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6">Hubungi Kami</h1>
          <p className="text-muted-foreground">Silakan hubungi kami untuk informasi lebih lanjut tentang kegiatan dan program IKADI Kota Banjar.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Nama</label>
                  <input
                    type="text"
                    required
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Pesan</label>
                  <textarea
                    required
                    rows={5}
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  <Send size={18} /> Kirim Pesan
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Alamat</h3>
                    <p className="text-sm text-muted-foreground">Jl. Dakwah No. 1, Kota Banjar, Jawa Barat 46311</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telepon</h3>
                    <p className="text-sm text-muted-foreground">+62 812-XXXX-XXXX</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">info@ikadikotabanjar.id</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="font-semibold mb-3">Media Sosial</h3>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Donasi */}
              <div className="mt-8 p-6 rounded-xl bg-secondary border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">Donasi Dakwah</h3>
                <p className="text-sm text-muted-foreground mb-3">Dukung program dakwah IKADI Kota Banjar melalui rekening:</p>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-sm font-medium">Bank Syariah Indonesia (BSI)</p>
                  <p className="text-lg font-heading font-bold text-primary mt-1">1234-5678-90</p>
                  <p className="text-xs text-muted-foreground mt-1">a.n. IKADI Kota Banjar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontak;
