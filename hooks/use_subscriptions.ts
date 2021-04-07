import { useState, useLayoutEffect } from 'react'

const Index = <A, I>(app_state: A, init_state: I) => {
	const [ state, setState ] = useState<A | I>(init_state)

	useLayoutEffect(
		() => {
			setState(app_state)
		},
		[ app_state ]
	)

	return <A | I>state
}

export default Index
