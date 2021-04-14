import NavLink from '@/components/NavLink'
import styles from './index.less'

const Index = () => {
	return (
		<div
			className={`${styles._local} w_100vw h_100vh border_box flex justify_center align_center`}
		>
			<div className='taichi_wrap fixed top_0 left_0 w_100vw h_100vh'>
				<div className='taichi'>
					<div className='white-circle' />
					<div className='black-circle' />
				</div>
                  </div>
                  <div className="taichi_mask fixed top_0 left_0 w_100vw h_100vh"></div>
                  <div className='content_wrap flex flex_column justify_center align_center'>
				<span className='slogan cursor_point transition_normal'>贴近自然的UI组件库</span>
				<span className='description'>Light Design，自然之美</span>
				<NavLink className='btn_start flex justify_center align_center' to='/com'>
					现在开始
				</NavLink>
			</div>
		</div>
	)
}

export default Index
