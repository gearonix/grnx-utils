import { act }             from '@testing-library/react-hooks'
import { renderHook }      from '@testing-library/react-hooks'
import { expect }          from 'vitest'

import { useBooleanState } from '../hooks'
import { renderChecks }    from './helpers'

describe('hook.use-boolean-state', () => {
  it('should render', () => {
    renderChecks(() => useBooleanState(false), 'object')
  })
  it('should render successfully', async () => {
    const { result } = renderHook(() => useBooleanState(false))

    act(() => {
      result.current.on()
    })

    expect(result.current.val).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.val).toBe(false)
  })
})
