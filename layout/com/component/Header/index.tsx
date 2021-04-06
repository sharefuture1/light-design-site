import { Tooltip } from 'antd'
import styles from './index.less'
import { IPackageJson } from '@/@types/global.interface'

const Index = (props: IPackageJson) => {
      const { component, cname, version, homepage } = props
      
	return (
		<div className={`${styles._local} w_100 border_box flex flex_column`}>
			<div className='name_wrap border_box disable_a_hover transition_normal relative'>
				<Tooltip title='前往github查看组件源码' placement='right'>
					<a
						className='name relative'
						rel='nofollow noopener noreferrer'
						target='_blank'
						href={homepage}
					>
						{component} {cname}
						<svg
							className='icon_link absolute'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='24'
							height='24'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z' />
						</svg>
					</a>
				</Tooltip>
			</div>
			<p className='version'>version: {version}</p>
		</div>
	)
}

export default Index
