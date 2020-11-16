import React, { memo, useState } from 'react'
import { Link } from 'umi'
import { Tooltip } from 'antd'
import {
	HomeOutlined,
	FileSearchOutlined,
	ReadOutlined,
	GithubOutlined,
	UnorderedListOutlined,
	CloseOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined
} from '@ant-design/icons'
import { If, Then, Else } from 'react-if'
import styles from './index.less'

interface IProps {
	changeMenuFoldStatus: () => void
	changeSimulatorFoldStatus: () => void
	fold_menu: boolean
	fold_simulator: boolean
}

const Index = (props: IProps) => {
	const {
		changeMenuFoldStatus,
		changeSimulatorFoldStatus,
		fold_menu,
		fold_simulator
	} = props
	const [ state_visible_options, setStateVisibleOptions ] = useState(false)

	return (
		<div
			className={`
                        ${styles._local} 
                        ${fold_simulator ? styles.fold_simulator : ''} 
                        border_box flex flex_column fixed transition_normal
                  `}
		>
			<div
				className={`
                              ${state_visible_options ? 'visible' : ''} 
                              option_items flex flex_column
                        `}
			>
				<Tooltip title={`${fold_menu ? '展开' : '收起'}菜单`} placement='left'>
					<div
						className='option_item option_wrap border_box flex justify_center align_center use_hover'
						onClick={() => changeMenuFoldStatus()}
					>
						<MenuFoldOutlined />
					</div>
				</Tooltip>
				<Tooltip title={`${fold_simulator ? '展开' : '收起'}模拟器`} placement='left'>
					<div
						className='option_item option_wrap border_box flex justify_center align_center use_hover'
						onClick={() => changeSimulatorFoldStatus()}
					>
						<MenuUnfoldOutlined />
					</div>
				</Tooltip>
				<Tooltip title='首页' placement='left'>
					<Link
						className='option_item option_wrap border_box flex justify_center align_center use_hover'
						to='/'
					>
						<HomeOutlined />
					</Link>
				</Tooltip>
				<Tooltip title='文档' placement='left'>
					<Link
						className='option_item option_wrap border_box flex justify_center align_center use_hover'
						to='/'
					>
						<FileSearchOutlined />
					</Link>
				</Tooltip>
				<Tooltip title='白皮书' placement='left'>
					<Link
						className='option_item option_wrap border_box flex justify_center align_center use_hover'
						to='/'
					>
						<ReadOutlined />
					</Link>
				</Tooltip>
				<Tooltip title='Github' placement='left'>
					<Link
						className='option_item option_wrap border_box flex justify_center align_center use_hover'
						to='/'
					>
						<GithubOutlined />
					</Link>
				</Tooltip>
			</div>
			<div
				className='btn_toggle option_wrap border_box flex justify_center align_center use_hover'
				onClick={() => setStateVisibleOptions(!state_visible_options)}
			>
				<If condition={state_visible_options}>
					<Then>
						<CloseOutlined />
					</Then>
					<Else>
						<UnorderedListOutlined />
					</Else>
				</If>
			</div>
		</div>
	)
}

export default memo(Index)
