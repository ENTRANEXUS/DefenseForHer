import { footerSections, footerSocialLinks } from "../../constants/footer";
import { siteConfig } from "../../constants/site";

export default function Footer() {
  return (
    <div>
      <div className="border-t border-zinc-800 pt-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-500 leading-relaxed">
        {footerSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="space-y-2">
              <div className="flex items-center gap-1 text-zinc-400 font-bold font-mono text-[10px] uppercase tracking-wider">
                <Icon className="w-4 h-4 text-red-600" /> {section.title}
              </div>
              <p>{section.text}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-zinc-800/80 pt-4 text-[11px] uppercase tracking-[0.24em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <span>{siteConfig.copyright}</span>
        {footerSocialLinks.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {footerSocialLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-zinc-300">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
