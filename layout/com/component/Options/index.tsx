import { memo, useState, useEffect } from 'react'
import NavLink from '@/components/NavLink'
import { Modal, Switch } from 'antd'
import {
	HomeOutlined,
	GithubOutlined,
	UnorderedListOutlined,
	ReadOutlined,
	BookOutlined
} from '@ant-design/icons'
import styles from './index.less'

interface IProps {
	changeMenuFoldStatus: (status?: boolean) => void
	changeSimulatorFoldStatus: (status?: boolean) => void
	changeAnchorsFoldStatus: (status?: boolean) => void
	fold_menu: boolean
	fold_simulator: boolean
	fold_anchors: boolean
}

const Index = (props: IProps) => {
	const {
		changeMenuFoldStatus,
		changeSimulatorFoldStatus,
		changeAnchorsFoldStatus,
		fold_menu,
		fold_simulator,
		fold_anchors
	} = props
	const [ state_visible_options, setStateVisibleOptions ] = useState(false)

	useEffect(() => {
		if (fold_menu) return
		if (fold_simulator) return

		if (window.innerWidth < 1500) changeSimulatorFoldStatus(true)
	}, [])

	return (
		<div
			className={`
                        ${styles._local} 
                        ${fold_simulator ? styles.fold_simulator : ''} 
                        border_box flex flex_column fixed
                  `}
		>
			{state_visible_options && (
				<Modal
					visible={state_visible_options}
					title='更多'
					centered
					closable={false}
					onCancel={() => setStateVisibleOptions(false)}
					footer={null}
					className={styles.modal}
				>
					<div className='modal_wrap w_100 border_box flex flex_column'>
						<div className='option_items w_100 border_box flex'>
							<NavLink
								className='option_item border_box flex justify_center align_center use_hover'
								to='/'
							>
								<HomeOutlined className='icon' />
								<span className='text'>首页</span>
							</NavLink>
							<NavLink
								className='option_item border_box flex justify_center align_center use_hover'
								to='/'
							>
								<ReadOutlined className='icon' />
								<span className='text'>文档</span>
							</NavLink>
							<NavLink
								className='option_item border_box flex justify_center align_center use_hover'
								to='/'
							>
								<BookOutlined className='icon' />
								<span className='text'>白皮书</span>
							</NavLink>
							<NavLink
								className='option_item border_box flex justify_center align_center use_hover'
								to='https://github.com/MatrixAges/light-design'
								target='_blank'
							>
								<GithubOutlined className='icon' />
								<span className='text'>Github</span>
							</NavLink>
						</div>
						<div className='toggle_items w_100 border_box flex flex_column'>
							<div className='toggle_item w_100 border_box flex justify_between align_center'>
								<span className='label'>菜单</span>
								<Switch
									checkedChildren='打开'
									unCheckedChildren='折叠'
									checked={!fold_menu}
									onChange={() => changeMenuFoldStatus()}
								/>
							</div>
							<div className='toggle_item w_100 border_box flex justify_between align_center'>
								<span className='label'>模拟器</span>
								<Switch
									checkedChildren='打开'
									unCheckedChildren='折叠'
									checked={!fold_simulator}
									onChange={() => changeSimulatorFoldStatus()}
								/>
							</div>
							<div className='toggle_item w_100 border_box flex justify_between align_center'>
								<span className='label'>锚点导航</span>
								<Switch
									checkedChildren='打开'
									unCheckedChildren='折叠'
									checked={!fold_anchors}
									onChange={() => changeAnchorsFoldStatus()}
								/>
							</div>
						</div>
					</div>
				</Modal>
			)}
			<div
				className='btn_toggle option_wrap border_box flex justify_center align_center use_hover'
				onClick={() => setStateVisibleOptions(!state_visible_options)}
			>
				<UnorderedListOutlined />
			</div>
		</div>
	)
}

export default memo(Index)
