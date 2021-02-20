import { memo, useState } from 'react'
import { useRouter } from 'next/router'
import { Modal, Radio, Tooltip } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { If, Then } from 'react-if'
import NavLink from '@/components/NavLink'
import Logo from '@/components/Logo'
import { base_url } from '@/utils/use_request'
import styles from './index.less'

const { Group, Button } = Radio

interface IProps {
	fold: boolean
	component: string
	name: string
}

const Index = (props: IProps) => {
	const { fold, component, name } = props
	const [ state_visible_modal, setStateVisibleModal ] = useState(false)
	const [ state_download_type, setStateDownloadType ] = useState<'ts' | 'js'>('ts')

	const { query } = useRouter()

	const donwload = () => {
		const file_type = state_download_type === 'ts' ? 'es6' : 'es5'

		location.href = `${base_url}/coms/downloadCom/${component}?file_type=${file_type}`
      }

	return (
		<div
			className={`
                        ${styles._local} 
                        ${fold ? styles.fold : ''} 
                        h_100vh border_box flex flex_column justify_center fixed top_0 right_0 
                  `}
		>
			<div className='simulator w_100 h_100 border_box'>
				<iframe className='iframe w_100' src='' frameBorder='0' />
			</div>
			<NavLink
				className='logo w_100 border_box flex justify_center align_center'
				to='/'
			>
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
			<If condition={Boolean(query.component)}>
				<Then>
					<div className='option_items_wrap w_100 border_box flex'>
						{state_visible_modal && (
							<Modal
								title={`下载 ${component} 组件`}
								width='400px'
								wrapClassName='modal_download'
								centered={true}
								closable={false}
								getContainer={false}
								visible={state_visible_modal}
								onCancel={() => setStateVisibleModal(false)}
								onOk={donwload}
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
								npm i {name}
							</div>
						</Tooltip>
					</div>
				</Then>
			</If>
		</div>
	)
}

export default memo(Index)
