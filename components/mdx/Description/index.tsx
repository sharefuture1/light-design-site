import { ReactNode } from 'react'
import styles from './index.less'

interface IProps {
	children: ReactNode
	type?: 'default' | 'success' | 'warning' | 'error'
	title?: string
}

const Index = ({ children, ...props }: IProps) => {
	const { type = 'default', title = '提示' } = props

	return (
		<div
			className={`
                        ${styles._local} ${styles[type]}
                        border_box relative text_justify transition_normal
                  `}
		>
			<span className='absolute title border_box flex justify_center align_center'>
				{title}
			</span>
			<span className='text'>{children}</span>
		</div>
	)
}

export default Index
