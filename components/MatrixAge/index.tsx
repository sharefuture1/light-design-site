import styles from './index.less'

const Index = ({ size = 1, bg = false }: { size?: number; bg?: boolean }) => {
	return (
		<div
			className={`
                        ${styles._local}
                        ${bg ? styles.bg : ''}
                        border_box flex justify_between cursor_point
                  `}
			style={{ transform: `scale(${size})` }}
		>
			<div className='block' />
			<div className='block' />
			<div className='block' />
		</div>
	)
}

export default Index
