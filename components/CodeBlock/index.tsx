import { memo } from 'react'
import { message } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'
import styles from './index.less'

interface IProps {
	children: string
	className?: string
}

const Index = (props: IProps) => {
	const { children, className } = props
	const language: any = className.replace(/language-/, '')

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(children)

			message.success('已复制到粘贴板')
		} catch (e) {
			message.warning(e || '复制失败，浏览器不支持')
		}
	}

	return (
		<div
			className={`
                  ${styles._local}
                  relative
            `}
		>
			<button className='btn_copy absolute transition_normal' onClick={() => copy()}>
				<CopyOutlined />
			</button>
			<Highlight {...defaultProps} code={children} language={language} theme={theme}>
				{({ className, tokens, getLineProps, getTokenProps }) => (
					<pre className={className}>
						{tokens.map((line, i) => (
							<div {...getLineProps({ line, key: i })}>
								<span className={styles.line_number}>{i + 1}</span>
								{line.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</div>
	)
}

export default memo(Index)
