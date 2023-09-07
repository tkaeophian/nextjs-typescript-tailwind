export function Header({ locales = [], navigation, settings }: any) {
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
              src="https://nextjs-starter-prismic-multi-language.cdn.prismic.io/nextjs-starter-prismic-multi-language/6c67f91c-ab42-4a3c-9073-0d459633b489_logo.svg?fit=max&amp;w=384"
            />
          </a>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
            <ul className="flex flex-wrap gap-6 md:gap-10">
              <li className="font-semibold tracking-tight text-slate-800">
                <a href="/">Home</a>
              </li>
              <li className="font-semibold tracking-tight text-slate-800">
                <a href="/about">About</a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <span aria-hidden="true">🌐</span>
              <ul className="flex flex-wrap gap-3">
                <li className="first:font-semibold">
                  <a
                    aria-label="Change language to English - United States"
                    href="/"
                  >
                    EN
                  </a>
                </li>
                <li className="first:font-semibold">
                  <a
                    aria-label="Change language to French - France"
                    href="/fr-fr"
                  >
                    FR
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
