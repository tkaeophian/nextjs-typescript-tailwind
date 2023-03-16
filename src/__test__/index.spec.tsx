import { render, screen } from '@testing-library/react';

import Index from '../pages/index';
import { NextIntlProvider } from 'next-intl';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      locale: 'en',
      locales: ['en', 'de'],
    };
  },
}));

describe('Index page tests', () => {
  it('should render same text passed into title prop', () => {
    render(
      <NextIntlProvider locale="en">
        <Index />
      </NextIntlProvider>
    );
  });
});
