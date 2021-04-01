import { ReactNode } from 'react'
import styles from './index.less'

interface IProps {
	children: ReactNode
	type?: 'default' | 'success' | 'warning' | 'error'
}

const Index = ({ children, ...props }: IProps) => {
	const { type = 'default' } = props

	return (
		<div
			className={`
                        ${styles._local} ${styles[type]}
                        border_box relative text_justify transition_normal flex flex_column
                  `}
		>
			{children}
		</div>
	)
}

export default Index
