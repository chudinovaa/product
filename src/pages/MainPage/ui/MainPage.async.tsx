import { lazy } from 'react'

export const MainPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error for temporary check
    setTimeout(() => { resolve(import('./MainPage')) }, 1500)
}))
