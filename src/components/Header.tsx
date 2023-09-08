import { useLocale, useTranslations } from "next-intl";

export function Header() {
  const locale = useLocale();
  const t = useTranslations("Navigation");

  return (
    <header data-collapsible="true" className="px-6 py-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
          <a href="/">
            <img
              loading="lazy"
              width="160"
              height="20"
              decoding="async"
              data-nimg="1"
              src="/logo.svg"
            />
          </a>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
            <ul className="flex flex-wrap gap-6 md:gap-10">
              <li className="font-semibold tracking-tight text-slate-800">
                <a href="/">{t("home")}</a>
              </li>
              <li className="font-semibold tracking-tight text-slate-800">
                <a href="/about">{t("about")}</a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <span aria-hidden="true">🌐</span>
              <ul className="flex flex-wrap gap-3">
                <li className={locale == "en" ? "font-semibold" : ""}>
                  <a
                    aria-label="Change language to English - United States"
                    href="/en"
                  >
                    EN
                  </a>
                </li>
                <li className={locale == "th" ? "font-semibold" : ""}>
                  <a aria-label="Change language to French - France" href="/th">
                    TH
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
