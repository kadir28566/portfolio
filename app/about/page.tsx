const CONTACT = {
  email: "kadir28566@gmail.com",
  github: "https://github.com/kadir28566",
  linkedin: "https://linkedin.com/in/abdülkadir-yılmaz",
  cvTr: "/Abdulkadir_Yilmaz_CV_TR.pdf",
  cvEn: "/Abdulkadir_Yilmaz_CV_EN.pdf",
};

export const metadata = {
  title: "Hakkımda — Abdülkadir Yılmaz",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Hakkımda
      </h1>

      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-dim">
        <p>
          Merhaba, ben Abdülkadir Yılmaz. Yazılım Mühendisliği mezunuyum ve ağırlıklı olarak backend geliştirme alanında kariyerimi şekillendiriyorum. 
          Java, Spring Boot ve RESTful servis geliştirme üzerine çalışıyor; ölçeklenebilir ve sürdürülebilir sistemler geliştirmeyi hedefliyorum.

          Üniversite boyunca farklı alanlarda projeler geliştirme fırsatı buldum. 
          Bilgisayarlı görü ve doğal dil işleme üzerine çalıştığım projeler sayesinde yapay zekâ uygulamalarının geliştirilme sürecini deneyimledim. 
          Bu deneyimler bana sadece model geliştirmeyi değil, bu modelleri gerçek yazılım sistemlerine entegre etmenin önemini de öğretti.

          Günümüzde odağım backend geliştirme olsa da, yapay zekâ ile yazılım mühendisliğinin kesişiminde yer alan projeler geliştirmek ilgimi çekmeye devam ediyor.
        </p>
        <p>
          Uzun vadede backend geliştirme alanında uzmanlaşmayı hedefliyorum. Bu doğrultuda yalnızca framework kullanmayı değil, HTTP, ağ iletişimi, veritabanları ve kullandığım teknolojilerin temel çalışma prensiplerini de öğrenmeye önem veriyorum.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          İletişim
        </h2>
        <div className="mt-3 space-y-1.5 font-mono text-sm">
          <p>
            <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
              {CONTACT.email}
            </a>
          </p>
          <p>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {CONTACT.github.replace("https://", "")}
            </a>
          </p>
          <p>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {CONTACT.linkedin.replace("https://", "")}
            </a>
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={CONTACT.cvTr}
            className="rounded border border-border px-4 py-2 text-sm text-ink-dim transition-colors hover:border-accent hover:text-ink"
          >
            CV indir (TR)
          </a>
          <a
            href={CONTACT.cvEn}
            className="rounded border border-border px-4 py-2 text-sm text-ink-dim transition-colors hover:border-accent hover:text-ink"
          >
            Download CV (EN)
          </a>
        </div>

      </div>
    </div>
  );
}
