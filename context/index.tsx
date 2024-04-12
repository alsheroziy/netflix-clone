import { createContext } from 'react'
import {ChildrenProps, ContextType} from '@/types'
export const Context = createContext<ContextType | null>(null)

export default function GlobalContext({children}: ChildrenProps) {
	return (
		<Context.Provider value={null}>
			{children}
		</Context.Provider>
	)
}
