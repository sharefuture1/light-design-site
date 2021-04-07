import { useState, useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const Index = () => {
	const [ is_client, setIsClient ] = useState(false)
      const is_mobile = useMediaQuery({ maxWidth: 767 })

	useLayoutEffect(() => {
		if (typeof window !== 'undefined') setIsClient(true)
	}, [])

	return {
		is_client,
		is_mobile: is_client ? is_mobile : false
	}
}

export default Index
