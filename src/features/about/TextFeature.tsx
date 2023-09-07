export function TextFeature() {
  return (
    <section data-collapsible="true" className="px-6 py-20 md:py-32 bg-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
          <div className="relative max-w-xs md:col-span-5 md:max-w-none">
            <div className="absolute -left-6 -top-6 w-2/3">
              <div className="aspect-h-1 aspect-w-1 bg-slate-100/50"></div>
            </div>
            <img
              loading="lazy"
              width="912"
              height="1214"
              decoding="async"
              data-nimg="1"
              className="relative w-full"
              sizes="100vw"
              src="https://images.prismic.io/nextjs-starter-prismic-multi-language/18b3498f-9fbf-42cc-a362-d776fc55d85a_laptop_image.png?auto=compress%2Cformat&amp;fit=max&amp;w=3840"
            />
          </div>
          <div className="max-w-prose self-end leading-relaxed md:col-span-7">
            <h2 className="font-semibold tracking-tighter text-4xl md:text-6xl mb-8 last:mb-0">
              The future of Todoop application
            </h2>
            <h3 className="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">
              Life can feel overwhelming, but it doesn’t have to. Todoist lets
              you keep track of everything in one place, so you can get it all
              done and enjoy more peace of mind along the way.
            </h3>
            <p className="mb-7 last:mb-0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mttis eroas. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
