import { memo } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'

interface IProps {
	children: string
	className?: string
}

const Index = (props: IProps) => {
	const { children, className } = props
	const language: any = className.replace(/language-/, '')

	return (
		<Highlight {...defaultProps} code={children} language={language} theme={theme}>
			{({ className, tokens, getLineProps, getTokenProps }) => (
				<pre className={className}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default memo(Index)
