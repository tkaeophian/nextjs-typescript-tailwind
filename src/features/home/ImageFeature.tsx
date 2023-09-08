import { Bounded } from '@/components/Bounded'
import Image from 'next/image'

export function ImageFeature() {
  return (
    <Bounded as="section" className="bg-slate-100">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative">
          <div className="absolute -left-4 -top-4 w-1/3">
            <div className="aspect-h-1 aspect-w-1 bg-slate-200/50"></div>
          </div>
          <Image
            loading="lazy"
            width="2256"
            height="1252"
            decoding="async"
            data-nimg="1"
            className="relative w-full"
            sizes="100vw"
            src="/todo-white.avif"
            alt="Demo"
          />
        </div>
      </div>
    </Bounded>
  )
}
