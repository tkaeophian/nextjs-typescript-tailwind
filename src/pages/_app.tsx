import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';
import { NextIntlProvider } from 'next-intl';

const ErrorFallback = () => (
  <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-4xl font-bold">:(</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Ooops!!</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Ooops, something went wrong</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          onClick={() => window.location.assign(window.location.origin)}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Refresh
        </button>
        <a href="/support" className="text-sm font-semibold text-gray-900">
          Contact support <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </main>
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ErrorBoundary>
  );
}
