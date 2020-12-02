import React, { memo } from 'react'
import { Prism } from 'react-syntax-highlighter'

interface IProps {
	language?: string
	value: string
}

const Index = (props: IProps) => {
	const { language, value } = props

	return (
		<Prism language={language}>
			{value}
		</Prism>
	)
}

export default memo(Index)
