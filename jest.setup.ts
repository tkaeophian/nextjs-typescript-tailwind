import '@testing-library/jest-dom/extend-expect';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
// general cleanup
afterEach(async () => {
  console.log('after each')
});
