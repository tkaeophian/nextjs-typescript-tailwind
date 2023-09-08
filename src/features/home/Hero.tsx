import { Bounded } from "@/components/Bounded";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Index");

  return (
    <Bounded as="section" collapsible={false} className="bg-white pb-0 md:pb-0">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 justify-items-center gap-10">
          <div className="max-w-2xl text-center leading-relaxed">
            <h1 className="font-semibold tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0">
              {t("title")}
            </h1>
            <p className="mb-6 last:mb-0">{t("about")}</p>
          </div>
          <div className="w-full">
            <img
              loading="lazy"
              width="11260"
              height="5000"
              decoding="async"
              data-nimg="1"
              className="w-full"
              sizes="100vw"
              src="todo-unsplash.avif"
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
}
