import React, { useState } from 'react'
import { Link } from 'umi'
import { Modal, Radio } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import Logo from '@/component/Logo'
import styles from './index.less'

export default () => {
	const [ state_visible_modal, setStateVisibleModal ] = useState(false)

	return (
		<div
			className={`${styles._local} h_100vh border_box flex flex_column justify_center fixed top_0 right_0`}
		>
			<div className='simulator w_100 h_100 border_box'>
				<iframe
					className='iframe w_100'
					src='https://vant-contrib.gitee.io/vant/mobile.html?hide_nav=1&weapp=1#/zh-CN/custom-style'
					frameBorder='0'
				/>
			</div>
			<div className='option_items_wrap w_100 border_box flex'>
				<Modal
					title='下载组件'
					width='400px'
					wrapClassName='modal_download'
					centered={true}
					getContainer={false}
					visible={state_visible_modal}
					onCancel={() => setStateVisibleModal(false)}
				>
					<div className='download_items flex justify_center'>
						<Radio.Group value='large'>
							<Radio.Button value='large'>less ts</Radio.Button>
							<Radio.Button value='default'>wxss js</Radio.Button>
						</Radio.Group>
					</div>
				</Modal>
				<div
					className='icon_download_wrap border_box flex flex_column justify_center align_center use_hover'
					onClick={() => setStateVisibleModal(true)}
				>
					<DownloadOutlined className='icon_download' />
				</div>
				<div className='npm_wrap w_100 border_box flex justify_center align_center use_hover'>
					npm i @matrixage/lightd-button
				</div>
			</div>
			<Link className='logo w_100 border_box flex justify_center align_center' to='/'>
				<Logo size={1.3} />
				<div className='logo_text flex flex_column'>
					<span className='text'>Light Design</span>
					<div className='flex justify_between'>
						<span className='slogan'>自</span>
						<span className='slogan'>然</span>
						<span className='slogan'>之</span>
						<span className='slogan'>美</span>
					</div>
				</div>
			</Link>
		</div>
	)
}
