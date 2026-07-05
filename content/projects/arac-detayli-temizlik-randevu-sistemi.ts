import type { Project } from "@/lib/projects";

const project: Project = {
  slug: "arac-detayli-temizlik-randevu-sistemi",
  name: "Randevu ve Rezervasyon Yönetim Sistemi",
  tagline:
    "Kapasite bazlı, çakışmasız randevu planlaması yapan ve bunu veritabanı seviyesinde garanti eden bir rezervasyon motoru.",
  status: "internship",
  period: "Staj Projesi · Şub–Mart 2026",
  stack: ["Spring Boot 3", "PostgreSQL", "React", "Ant Design", "Docker", "Nginx"],
  role:
    "Backend mimarisini ve veritabanı şemasını uçtan uca ben tasarladım; frontend tarafını da hayata geçirdim.",
  problem:
    "Somut ihtiyaç, bir oto detaylı temizlik işletmesi için randevu sistemi kurulmasıydı. Ama asıl çözülmesi gereken problem daha genel bir mühendislik sorusuydu: çalışan bazlı kapasiteyi (mesai saatleri, izin günleri, mevcut randevular) aynı anda hesaba katıp hem çakışma oluşturmayan hem de eşzamanlı isteklerde tutarlılığını koruyan bir randevu motoru nasıl kurulur? Bu deseni, tek bir işletmeye özgü kalmayacak, berber, klinik veya saha ekibi planlaması gibi herhangi bir kapasite bazlı rezervasyon problemine uygulanabilecek şekilde tasarladım; oto detaylı temizlik işletmesi bu tasarımın somutlaştığı ilk vaka oldu.",
  approach: [
    "Önce genel bir kapasite modeli kurguladım: 'kaynak' (bu vakada çalışan), kaynağın uygunluk kuralları (mesai saatleri + izinler) ve kaynağın verebileceği 'hizmet' türleri birbirinden ayrı varlıklar olarak modellendi.",
    "Bu genel modeli somut vakaya admin, employee, service_type, customer, appointments, employee_service (ManyToMany), employee_time_off, employee_working_hours tablolarıyla hayata geçirdim.",
    "appointments.status alanını boolean yerine VARCHAR yaptım (BOOKED, CANCELLED, COMPLETED, POSTPONED) çünkü randevu durumu ileride yeni durumlara açık olmalıydı; bu, genel modelin herhangi bir iş akışına uyarlanabilmesi için bilinçli bir tercihti.",
    "Uygun randevu saatlerini; çalışma saatleri, izinler ve mevcut randevuları aynı anda değerlendirerek dinamik olarak hesapladım.",
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
  links: [],
};

export default project;
