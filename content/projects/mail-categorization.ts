import type { Project } from "@/lib/projects";

const project: Project = {
  slug: "mail-categorization",
  name: "Mail Categorization (E-posta Kategorilendirme)",
  tagline: "Gelen e-postaları makine öğrenmesiyle otomatik kategorize eden mikroservis",
  status: "personal",
  period: "2025",
  stack: [
    "Python",
    "FastAPI",
    "SQLAlchemy (SQLite/Postgres)",
    "scikit-learn / custom classifier",
    "Google Gmail API",
    "Jinja2 (templates)",
    "HTML/CSS/JS",
  ],
  role: "Full-stack geliştirici — backend, ML entegrasyonu ve temel frontend dashboard",
  problem:
    "Kullanıcıların gelen e-postalarını konu/etiket bazında otomatik sınıflandıracak bir çözüm ihtiyacı vardı; manuel sınıflandırma zaman alıyor ve tutarsız oluyordu.",
  approach: [
    "E-posta verisi çekmek için Google Gmail API ile gmail_service katmanı implement edildi.",
    "E-postaları önişleme ve özellik çıkarımı yapacak bir sınıflandırıcı (ml/classifier.py) geliştirildi.",
    "FastAPI tabanlı REST API ile klasifikasyon ve istatistik endpointleri sağlandı (routers/prediction.py, routers/stats.py).",
    "Sonuçlar veritabanında modeller aracılığıyla saklandı ve yönetici dashboard'unda gösterildi.",
    "Basit bir frontend dashboard (Jinja2 + JS) ile sınıflandırma sonuçları ve metrikler sunuldu.",
  ],
  highlights: [
    "Gmail API entegrasyonu ile gerçek e-posta akışı üzerinde çalışabilen uçtan uca prototip.",
    "Makine öğrenmesi tabanlı otomatik etiketleme ile manuel iş yükünde azalma potansiyeli.",
    "RESTful servisler sayesinde başka uygulamalara kolay entegrasyon.",
    "Basit dashboard ile anlık doğruluk/istatistik takibi.",
  ],
  challenges: [
    {
      title: "Sınırlı etiketli veri",
      detail:
        "Gerçek kullanıcı e-postalarından yeterli etiketli eğitim verisi toplamak zordu, bu yüzden veri artırma ve basit text-özelliği (bag-of-words/tf-idf) yaklaşımları tercih edildi.",
    },
  ],
  result:
    "Çalışır bir prototip elde edildi: Gmail'den e-posta çekip model ile kategori tahmini yapan, tahminleri veritabanına kaydeden ve dashboard üzerinden raporlayan bir uygulama. Prototip üretime geçmeden önce veri miktarı ve model değerlendirmesi artırılmalı.",
  links: [],
};

export default project;
