import { ReactNode, CSSProperties } from 'react'
import styles from './index.less'

interface IProps {
	children: ReactNode
	type?: 'text' | 'desc' | 'title'
	fontSize?: number | string
	fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 'inherit' | number
	style?: CSSProperties
}

const Index = ({ children, ...props }: IProps) => {
	const { type = 'text', fontSize, fontWeight, style } = props

	return (
		<span className={styles[type]} style={{ fontSize, fontWeight, ...style }}>
			{children}
		</span>
	)
}

export default Index
