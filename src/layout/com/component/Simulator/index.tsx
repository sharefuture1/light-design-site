import React from 'react'
import { Link } from 'umi'
import { CloudDownloadOutlined } from '@ant-design/icons'
import Logo from '@/component/Logo'
import styles from './index.less'

export default () => {
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
				<div className='option_items w_100 border_box flex justify_center align_center'>
					<div className='option_item flex flex_column justify_between align_center'>
						<div className='icon_wrap flex align_center'>
							<CloudDownloadOutlined />
						</div>
						<div className='type_items flex'>
							<span className='type_item flex justify_center align_center'>
								less
							</span>
							<span className='type_item flex justify_center align_center'>
								ts
							</span>
						</div>
					</div>
					<div className='option_item flex flex_column justify_between align_center'>
						<div className='icon_wrap flex align_center'>
							<CloudDownloadOutlined />
						</div>
						<div className='type_items flex'>
							<span className='type_item flex justify_center align_center'>
								wxss
							</span>
							<span className='type_item flex justify_center align_center'>
								js
							</span>
						</div>
					</div>
				</div>
				<div className='npm_wrap w_100 border_box flex justify_center align_center'>
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
