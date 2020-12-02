import { memo, useState } from 'react'
import NavLink from '@/components/NavLink'
import { Modal, Radio, Tooltip } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import Logo from '@/components/Logo'
import styles from './index.less'

const { Group, Button } = Radio

interface IProps {
	fold: boolean
	component_name: string
}

const Index = (props: IProps) => {
	const { fold, component_name } = props
	const [ state_visible_modal, setStateVisibleModal ] = useState(false)
	const [ state_download_type, setStateDownloadType ] = useState('ts')

	return (
		<div
			className={`
                        ${styles._local} 
                        ${fold ? styles.fold : ''} 
                        h_100vh border_box flex flex_column justify_center fixed top_0 right_0 
                  `}
		>
			<div className='simulator w_100 h_100 border_box'>
				<iframe
					className='iframe w_100'
					src='https://vant-contrib.gitee.io/vant/mobile.html?hide_nav=1&weapp=1#/zh-CN/custom-style'
					frameBorder='0'
				/>
			</div>
			<NavLink className='logo w_100 border_box flex justify_center align_center' to='/'>
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
			</NavLink>
			<div className='option_items_wrap w_100 border_box flex'>
				{state_visible_modal && (
					<Modal
						title={`下载 ${component_name} 组件`}
						width='400px'
						wrapClassName='modal_download'
						centered={true}
						closable={false}
						getContainer={false}
						visible={state_visible_modal}
						onCancel={() => setStateVisibleModal(false)}
					>
						<div className='download_items flex justify_center'>
							<Group
								value={state_download_type}
								onChange={({ target: { value } }) => {
									setStateDownloadType(value)
								}}
							>
								<Button value='ts'>less ts</Button>
								<Button value='js'>wxss js</Button>
							</Group>
						</div>
					</Modal>
				)}
				<Tooltip title='下载组件'>
					<div
						className='icon_download_wrap border_box flex flex_column justify_center align_center use_hover'
						onClick={() => setStateVisibleModal(true)}
					>
						<DownloadOutlined className='icon_download' />
					</div>
				</Tooltip>
				<Tooltip title='点击复制'>
					<div className='npm_wrap w_100 border_box flex justify_center align_center use_hover'>
						npm i @matrixage/lightd-button
					</div>
				</Tooltip>
			</div>
		</div>
	)
}

export default memo(Index)
