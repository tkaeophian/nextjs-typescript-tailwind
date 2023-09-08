import { Bounded } from '@/components/Bounded'
import Image from 'next/image'

export function TextFeature() {
  return (
    <Bounded collapsible={false} as="section" className="bg-slate-100">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-10 lg:gap-28">
          <div className="grid grid-cols-1 gap-8">
            <Image
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              alt="Demo"
              src="/Icon.svg"
            />
            <div className="leading-relaxed">
              <h2 className="font-semibold tracking-tighter text-4xl md:text-6xl mb-4 last:mb-0">
                The future of NEXT todo application
              </h2>
              <p className="mb-7 last:mb-0">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mttis eroas. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non.
              </p>
            </div>
          </div>
          <ul className="grid gap-10">
            <li className="leading-relaxed">
              <h3 className="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">
                Never worry about forgetting things again
              </h3>
              <p className="mb-7 last:mb-0">
                Let Todoist remember it all for you. You can get tasks out of
                your head and onto your to-do list anytime, anywhere, on any
                device – even offline.
              </p>
            </li>
            <li className="leading-relaxed">
              <h3 className="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">
                Todoist helps millions of people feel more in control of their
                lives
              </h3>
              <p className="mb-7 last:mb-0">
                Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Morbi in sem quis dui placerat ornare.
              </p>
            </li>
            <li className="leading-relaxed">
              <h3 className="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">
                Focus your energy on the right things
              </h3>
              <p className="mb-7 last:mb-0">
                Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Morbi in sem quis dui placerat ornare.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Bounded>
  )
}
