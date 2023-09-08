import { StateCreator, create as actualCreate } from 'zustand'

import { act } from 'react-dom/test-utils'

const storeResetFns = new Set<() => void>()

export const create = <S>(createState: StateCreator<S>) => {
  const store = actualCreate(createState)
  const initialState = store.getState()
  storeResetFns.add(() => store.setState(initialState, true))
  return store
}

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

beforeEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()))
})
// general cleanup
afterEach(async () => {
  //   console.log('after each')
})
