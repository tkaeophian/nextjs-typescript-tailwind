import { render, screen } from '@testing-library/react';

import Index from '../pages/index';
import { NextIntlProvider } from 'next-intl';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      locale: 'en',
      locales: ['en', 'th'],
    };
  },
}));

describe('Index page tests', () => {
  it('should render same text passed into title prop', () => {
    const messages = require(`../../locales/en.json`);
    render(
      <NextIntlProvider locale="en" messages={messages}>
        <Index />
      </NextIntlProvider>
    );
  });
});
