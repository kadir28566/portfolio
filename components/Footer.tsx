const CONTACT = {
  email: "kadir28566@gmail.com",
  github: "https://github.com/kadir28566",
  linkedin: "https://linkedin.com/in/abdülkadir-yılmaz",
};

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Abdülkadir Yılmaz</p>
        <div className="flex gap-4 font-mono">
          <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
            e-posta
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            github
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
