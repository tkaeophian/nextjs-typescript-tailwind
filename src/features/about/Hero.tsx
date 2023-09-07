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
              About Todoop
            </h1>
            <p className="mb-6 last:mb-0">
              Life can feel overwhelming, but it doesn’t have to. Todoist lets
              you keep track of everything in one place, so you can get it all
              done and enjoy more peace of mind along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
