export function ImageFeature() {
  return (
    <section
      data-collapsible="true"
      className="px-6 py-20 md:py-32 bg-slate-100"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative">
          <div className="absolute -left-4 -top-4 w-1/3">
            <div className="aspect-h-1 aspect-w-1 bg-slate-200/50"></div>
          </div>
          <img
            loading="lazy"
            width="2256"
            height="1252"
            decoding="async"
            data-nimg="1"
            className="relative w-full"
            sizes="100vw"
            src="https://images.prismic.io/nextjs-starter-prismic-multi-language/6a6ca6ed-cf57-4444-9ed8-aec7c7d111d4_Light%402x.png?auto=compress%2Cformat&amp;fit=max&amp;w=3840"
          />
        </div>
      </div>
    </section>
  );
}
