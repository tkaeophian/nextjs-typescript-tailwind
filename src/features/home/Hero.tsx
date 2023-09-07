export function Hero() {
  return (
    <section
      data-collapsible="false"
      className="px-6 py-20 md:py-32 bg-white pb-0 md:pb-0"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 justify-items-center gap-10">
          <div className="max-w-2xl text-center leading-relaxed">
            <h1 className="font-semibold tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0">
              Keep your life organized
            </h1>
            <p className="mb-6 last:mb-0">
              Life can feel overwhelming, but it doesn’t have to. Todoop lets
              you keep track of everything in one place, so you can get it all
              done and enjoy more peace of mind along the way.
            </p>
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
              src="https://images.prismic.io/nextjs-starter-prismic-multi-language/e08b85f5-0bb9-44d5-9a07-b9ccb8975456_10cc9671-43f6-4ac5-8320-3f9bc2314d2f_app-screen-dark.jpg?auto=compress%2Cformat&amp;rect=0%2C0%2C1228%2C545&amp;w=3840&amp;fit=max"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
