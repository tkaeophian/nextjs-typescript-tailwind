import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import Link from "next/link";

function SignUpForm() {
  return (
    <div className="px-4">
      <form
        action="/api/sign-up"
        method="post"
        className="grid w-full max-w-xl grid-cols-1 gap-6"
      >
        <div className="text-center tracking-tight text-slate-100">
          <Heading as="h2" size="6xl" className="mb-4 text-white last:mb-0">
            Get notified
          </Heading>
          <p className="mb-4 last:mb-0">
            Get notified about updates and be the first to get early access to
            the new, safer and smarter way to archive your files.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div className="relative">
            <label>
              <span className="sr-only">Email address</span>
              <input
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required={true}
                className="w-full rounded border border-slate-700 bg-slate-800 py-3 pl-3 pr-10 text-white placeholder-slate-400"
              />
            </label>
            <button
              type="submit"
              className="absolute bottom-0 right-0 top-0 flex items-center justify-center px-3 text-2xl text-slate-400"
            >
              <span className="sr-only">Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
          <p className="text-center text-xs text-slate-400">
            By subscribing to our newsletter you accept to receive recurring
            emails about our product and our company
          </p>
        </div>
      </form>
    </div>
  );
}

export function Footer() {
  return (
    <Bounded as="footer" className="bg-slate-800 pb-12 text-slate-100 md:pb-12">
      <div className="grid grid-cols-1 justify-items-center gap-20 md:gap-24">
        <SignUpForm />
        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight">
          Made with Love by{" "}
          <Link href="https://github.com/tkaeophian" className="text-white">
            tkaeophian
          </Link>
        </div>
      </div>
    </Bounded>
  );
}
