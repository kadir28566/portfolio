import type { Project } from "@/lib/projects";

const project: Project = {
  slug: "surgbase",
  name: "SurgBase",
  tagline:
    "Sağlık turizmi platformuna admin paneli, yapay zekâ destekli tıbbi dosya analizi ve gerçek zamanlı mesajlaşma izleme sistemi.",
  status: "internship",
  period: "Staj Projesi · May–Haz 2026",
  stack: [
    "React",
    "TypeScript",
    "MUI v6",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Socket.IO",
    "Google Gemini API",
    "i18next",
  ],
  role:
    "Admin panelini sıfırdan React + TypeScript + MUI v6 ile geliştirdim; tıbbi dosya analizi için Google Gemini API'sini Node.js backend'ine entegre ettim; hasta-doktor mesajlaşma altyapısını admin tarafında izlenebilir hale getirdim.",
  problem:
    "Yurt dışından gelen hastaların tıbbi görüntü ve raporlarının hızla değerlendirilmesi, doktor-hasta iletişiminin yönetilebilmesi ve tüm sürecin merkezi bir admin panelinden takip edilebilmesi gerekiyordu. Mevcut sistemde bu işlemler için admin arayüzü hiç yoktu.",
  approach: [
    "Hasta listesi, doktor yönetimi (ekleme/düzenleme/silme) ve hasta-doktor atama ekranlarından oluşan tam kapsamlı bir admin paneli tasarladım.",
    "Tıbbi dosyaların JWT korumalı bir endpoint üzerinden sunulmasını ve tarayıcıda doğrudan görüntülenmesini sağladım; blob URL yaklaşımıyla Authorization header sorununu çözdüm.",
    "Tekil dosya analizi ve çoklu dosya analizi için ayrı Gemini API endpoint'leri yazdım; prompt mühendisliği ile hastanın adres bilgisini veritabanından çekerek yapay zekanın lojistik maliyet tahmini yapabilmesini sağladım.",
    "Admin panelinden atamalar ekranı üzerinden doktor-hasta konuşmalarını read-only modda izleyebilmek için MongoDB tabanlı konuşma verilerini Express controller'a bağladım.",
    "Dosya yükleme akışına çift katmanlı doğrulama ekledim: adres bilgisi eksik hastalarda hem frontend hem backend seviyesinde yükleme engellendi.",
    "MUI v6 breakpoint sistemi ile admin panelini mobil uyumlu hale getirdim; veri yoğun tablolarda kritik olmayan sütunları mobilde gizledim.",
  ],
  highlights: [
    "Google Gemini API ile tekil ve çoklu tıbbi dosya analizi: X-ray, MRI, CT ve biyopsi raporları üzerinden otomatik tıbbi değerlendirme ve lojistik maliyet tahmini.",
    "Admin paneli atamalar ekranından doktor-hasta mesajlaşma geçmişine read-only erişim; Socket.IO + MongoDB mimarisi üzerine yeni bir admin katmanı inşa edildi.",
    "Hasta profil verisi (adres) Prisma ORM ile veritabanından çekilip Gemini prompt'una dinamik olarak enjekte edilerek lokasyon bazlı maliyet analizi mümkün kılındı.",
    "JWT interceptor mimarisini anlayarak dosya servis endpoint'ini bu altyapıya entegre ettim; img src yerine axios + blob URL yaklaşımıyla kimlik doğrulamalı medya görüntüleme sağladım.",
  ],
  challenges: [
    {
      title: "TypeScript ile ilk kez çalışmak",
      detail:
        "Projeye katıldığımda React deneyimim JavaScript üzerineydi. ApiResponse<T> generic tipi, DoctorsListResponse gibi tutarsız tip tanımları ve MUI v6'nın Grid API değişiklikleri başlangıçta zorlandığım noktalardı. Tip sistemini kavradıkça derleme zamanında hata yakalamak geliştirme sürecini hızlandırdı.",
    },
    {
      title: "Browser ile backend arasındaki JWT uçurumu",
      detail:
        "img src ile dosya URL'sine doğrudan erişim yapıldığında tarayıcı Authorization header gönderemediğinden 401 hatası alıyordum. Dosyayı axios ile blob olarak indirip URL.createObjectURL ile tarayıcıya sunarak sorunu çözdüm.",
    },
    {
      title: "İki veritabanı mimarisine yeni özellik eklemek",
      detail:
        "Proje PostgreSQL (kullanıcı, hasta, doktor verileri) ve MongoDB (mesajlaşma) birlikte kullanıyor. Admin konuşma izleme özelliğini eklerken Express controller'da Mongoose modelleriyle çalışırken Prisma ORM ile de ayrı sorgular yazmam gerekti.",
    },
  ],
  result:
    "Admin paneli ve yapay zekâ destekli dosya analizi staj süresince production ortamına alındı. Doktorlar hasta dosyaları üzerinde tek tıkla Gemini analizi isteyebiliyor; admin ekibi doktor-hasta konuşmalarını ve atamaları merkezi bir panelden takip edebiliyor.",
  links: [],
};

export default project;
