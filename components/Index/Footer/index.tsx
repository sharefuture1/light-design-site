import styles from './index.less'

const Index = () => {
	return (
		<div
			className={`${styles._local} w_100 border_box flex justify_center align_center fixed bottom_0 left_0`}
		>
			<footer className='footer w_100 border_box flex justify_center align_center relative'>
                        <a
                              className='transition_normal'
					href='https://github.com/MatrixAge'
					target='_blank'
					rel='noopener noreferrer'
				>
					Design and made by Matrixage
				</a>
			</footer>
		</div>
	)
}

export default Index
