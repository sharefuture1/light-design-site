import React, { memo } from 'react'
import { Prism } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface IProps {
	language?: string
	value: string
}

const Index = (props: IProps) => {
	const { language, value } = props

	return (
		<Prism language={language} style={prism}>
			{value}
		</Prism>
	)
}

export default memo(Index)
