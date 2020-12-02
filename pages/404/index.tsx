
import NavLink from '@/components/NavLink'
import styles from './index.less'

export default () => (
	<div
		className={`${styles._local} w_100vw h_100vh flex flex_column justify_center align_center`}
	>
		<div className='content_wrap flex flex_column align_center'>
			<span className='mark'>404</span>
			<div className='tips w_100 flex flex_column align_center'>
				<span className='not_found'>页面未找到</span>
				<NavLink className='link' to='/'>
					回到首页
				</NavLink>
			</div>
		</div>
	</div>
)
