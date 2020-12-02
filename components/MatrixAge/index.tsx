import styles from './index.less'

const Index = () => {
	return (
		<div
			className={`border_box flex justify_between transition_normal cursor_point ${styles._local}`}
		>
			<div className='block' />
			<div className='block' />
			<div className='block' />
		</div>
	)
}

export default Index
