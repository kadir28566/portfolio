export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "production" | "internship" | "in-progress";
  period: string;
  stack: string[];
  role: string;
  problem: string;
  approach: string[];
  highlights: string[];
  challenges: { title: string; detail: string }[];
  result: string;
  links: { label: string; href: string }[];
};

// NOT: "href: '#'" olan linkleri kendi GitHub / canlı demo adreslerinle değiştir.
export const projects: Project[] = [
  {
    slug: "arac-detayli-temizlik-randevu-sistemi",
    name: "Randevu ve Rezervasyon Yönetim Sistemi",
    tagline:
      "Kapasite bazlı, çakışmasız randevu planlaması yapan ve bunu veritabanı seviyesinde garanti eden bir rezervasyon motoru.",
    status: "internship",
    period: "Staj Projesi · Şub–Mart 2026",
    stack: [
      "Spring Boot 3",
      "PostgreSQL",
      "React",
      "Ant Design",
      "Docker",
      "Nginx",
    ],
    role:
      "Backend mimarisini ve veritabanı şemasını uçtan uca ben tasarladım; frontend tarafını da hayata geçirdim.",
    problem:
      "Somut ihtiyaç, bir oto detaylı temizlik işletmesi için randevu sistemi kurulmasıydı. Ama asıl çözülmesi gereken problem daha genel bir mühendislik sorusuydu: çalışan bazlı kapasiteyi (mesai saatleri, izin günleri, mevcut randevular) aynı anda hesaba katıp hem çakışma oluşturmayan hem de eşzamanlı isteklerde tutarlılığını koruyan bir randevu motoru nasıl kurulur? Bu deseni, tek bir işletmeye özgü kalmayacak, berber, klinik veya saha ekibi planlaması gibi herhangi bir kapasite bazlı rezervasyon problemine uygulanabilecek şekilde tasarladım; oto detaylı temizlik işletmesi bu tasarımın somutlaştığı ilk vaka oldu.",
    approach: [
      "Önce genel bir kapasite modeli kurguladım: 'kaynak' (bu vakada çalışan), kaynağın uygunluk kuralları (mesai saatleri + izinler) ve kaynağın verebileceği 'hizmet' türleri birbirinden ayrı varlıklar olarak modellendi.",
      "Bu genel modeli somut vakaya admin, employee, service_type, customer, appointments, employee_service (ManyToMany), employee_time_off, employee_working_hours tablolarıyla hayata geçirdim.",
      "appointments.status alanını boolean yerine VARCHAR yaptım (BOOKED, CANCELLED, COMPLETED, POSTPONED) çünkü randevu durumu ileride yeni durumlara açık olmalıydı; bu, genel modelin herhangi bir iş akışına uyarlanabilmesi için bilinçli bir tercihti.",
      "Uygun randevu saatlerini; çalışma saatleri, izin günleri ve mevcut randevuları aynı anda değerlendirerek dinamik olarak hesapladım.",
      "Geçmişte kalmış BOOKED randevuları otomatik COMPLETED yapan bir @Scheduled cron job yazdım, böylece randevu durumu manuel müdahale gerektirmeden kendini güncel tutuyor.",
    ],
    highlights: [
      "Randevu çakışmasını uygulama koduna değil, veritabanına garanti ettirdim: PostgreSQL'in btree_gist eklentisiyle bir EXCLUDE constraint tanımlayıp bunu WHERE (status = 'BOOKED') koşuluyla sınırladım. tsrange tipiyle her randevunun zaman aralığını temsil ettim; aynı kaynağın (employee_id) iki aralığı çakıştığında (&& operatörü) veritabanı kaydı otomatik reddediyor. Böylece iki BOOKED randevu asla aynı çalışan+saat aralığını paylaşamıyor, iptal edilen randevular ise engele takılmıyor.",
      "Bu yaklaşımın asıl değeri genellenebilirliği: aynı EXCLUDE constraint deseni, 'employee_id' yerine 'room_id', 'doctor_id' veya 'technician_id' konularak başka herhangi bir kapasite bazlı rezervasyon sistemine doğrudan taşınabilir.",
      "java.time.DayOfWeek ile isim çakışmasını önlemek için ayrı bir WorkDayOfWeek enum'u tanımladım.",
      "Sistemi çok aşamalı Dockerfile'lar, docker-compose.yml ve SPA yönlendirmesi için Nginx konfigürasyonu ile konteynerleştirdim.",
    ],
    challenges: [
      {
        title: "Randevu çakışmasını uygulama katmanında değil veritabanında engellemek",
        detail:
          "Eşzamanlı isteklerde uygulama seviyesinde yapılan 'önce kontrol et, sonra kaydet' mantığı yarış durumuna (race condition) açık kalıyordu: iki istek neredeyse aynı anda gelirse ikisi de kontrolü boş olarak geçip ikisi de kaydedilebiliyordu. Çözüm olarak çakışma kontrolünü tamamen PostgreSQL'in EXCLUDE constraint + btree_gist eklentisine devrettim; bu sayede kontrol ve kayıt tek bir atomik veritabanı işlemine indi ve garanti, uygulama kodundan bağımsız hale geldi.",
      },
      {
        title: "Uygun saatlerin dinamik hesaplanması",
        detail:
          "Çalışan bazlı mesai saatleri, izinler ve mevcut randevular üç ayrı kaynaktı. Bunları tek bir sorguda birleştirip önyüze temiz bir 'müsait saatler' listesi olarak sunmak, ilk tasarımda düşündüğümden daha fazla iterasyon gerektirdi; özellikle bir çalışanın aynı gün içinde birden fazla izin/randevu aralığına sahip olabildiği durumları doğru ele almak zaman aldı.",
      },
    ],
    result:
      "Sistem staj sürecinde uçtan uca tamamlandı ve Docker ile konteynerleştirilerek teslim edildi; randevu çakışması yaşanmadı. Kurduğum kapasite modeli, tek bir işletmeye özel bir çözüm değil, herhangi bir randevu/rezervasyon problemine uyarlanabilecek genel bir mimari olarak tasarlandı.",
    links: [
      
    ],
  },
 {
  slug: "surgbase",
  name: "SurgBase",
  tagline: "Sağlık turizmi platformuna admin paneli, yapay zekâ destekli tıbbi dosya analizi ve gerçek zamanlı mesajlaşma izleme sistemi.",
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
  role: "Admin panelini sıfırdan React + TypeScript + MUI v6 ile geliştirdim; tıbbi dosya analizi için Google Gemini API'sini Node.js backend'ine entegre ettim; hasta-doktor mesajlaşma altyapısını admin tarafında izlenebilir hale getirdim.",
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
},
  
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
