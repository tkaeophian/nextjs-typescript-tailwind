import { Bounded } from "./Bounded";
import Link from "next/link";

export function Header({ locales = [], navigation, settings } : any) {
  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
        <Link href="/">
          {/* {prismic.isFilled.image(settings.data.logo) && (
            <PrismicNextImage field={settings.data.logo} />
          )} */}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
          
        </nav>
      </div>
    </Bounded>
  );
}