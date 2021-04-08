import NavLink from '@/components/NavLink'
import styles from './index.less'

const Index = () => {
	return (
		<div
			className={`${styles._local} w_100vw h_100vh border_box flex justify_center align_center`}
		>
			<div className='content_wrap flex flex_column justify_center align_center'>
				<span className='slogan cursor_point'>贴近自然的UI组件库 T123</span>
				<span className='description'>Light Design，自然之美</span>
                        <NavLink
                              className='btn_start flex justify_center align_center'
					to='/com'
				>
					现在开始
				</NavLink>
			</div>
		</div>
	)
}

export default Index
