import type { Project } from "@/lib/projects";

const project: Project = {
  slug: "querymate",
  name: "QueryMate",
  tagline:
    "Doğal dilde yazılan sorguları GPT-4o kullanarak SQL'e dönüştüren ve ilişkisel veritabanları üzerinde çalıştıran Text-to-SQL uygulaması.",
  status: "graduation",
  period: "Graduation Project · 2024-2025",
  stack: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "C#", "OpenAI GPT-4o API"],
  role:
    "Projenin analizinden geliştirilmesine kadar tüm süreci tek başıma yürüttüm. FastAPI tabanlı backend'i, GPT-4o entegrasyonunu ve C# masaüstü istemcisini geliştirdim.",
  problem:
    "SQL bilgisi olmayan kullanıcıların doğal dil kullanarak veritabanlarını sorgulayabilmesini sağlayan pratik bir araca ihtiyaç vardı. Amaç, kullanıcı sorgularını veritabanı şemasını dikkate alarak doğru SQL ifadelerine dönüştürmekti.",
  approach: [
    "FastAPI üzerinde doğal dil sorgularını alan REST API geliştirdim.",
    "Veritabanı şemasını modele prompt içerisinde göndererek GPT-4o'nun tablo ve kolon isimlerini doğru kullanmasını sağladım.",
    "LLM tarafından üretilen SQL sorgularını SQLAlchemy üzerinden çalıştırıp sonuçları JSON formatında döndürdüm.",
    "C# ile kullanıcıların doğal dil sorgularını yazıp sonuçları tablo halinde görüntüleyebildiği masaüstü arayüzü geliştirdim.",
  ],
  highlights: [
    "OpenAI GPT-4o kullanılarak doğal dil → SQL dönüşümü.",
    "Veritabanı şemasının prompt'a dinamik olarak eklenmesi.",
    "FastAPI + SQLAlchemy mimarisi ile SQL sorgularının güvenli çalıştırılması.",
    "Masaüstü istemcisi ile tablo bazlı sonuç görüntüleme.",
  ],
  challenges: [
    {
      title: "LLM çıktısının doğrudan SQL olmaması",
      detail:
        "GPT bazen SQL'i Markdown kod bloğu içerisinde döndürüyordu. SQL'in doğrudan çalıştırılabilmesi için çıktı ön işleme adımı ekledim.",
    },
    {
      title: "Doğru SQL üretimini artırmak",
      detail:
        "Model yalnızca kullanıcı sorgusuyla beslendiğinde tablo ve kolon isimlerinde hata yapabiliyordu. Veritabanı şemasını prompt'a ekleyerek doğruluk oranını artırdım.",
    },
  ],
  result:
    "QueryMate, doğal dil sorgularını SQL ifadelerine dönüştürüp ilişkisel veritabanlarında çalıştırabilen çalışan bir prototip olarak geliştirildi. Proje boyunca LLM entegrasyonu, REST API geliştirme ve SQLAlchemy ile veritabanı etkileşimi konularında deneyim kazandım.",
  links: [{ label: "Github", href: "https://github.com/kadir28566/text2sql" }],
};

export default project;
