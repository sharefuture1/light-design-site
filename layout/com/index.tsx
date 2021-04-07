import { memo, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Menu from './component/Menu'
import Anchors from './component/Anchors'
import Options from './component/Options'
import Header from './component/Header'
import Simulator from './component/Simulator'
import useResponsive from '@/hooks/use_responsive'
import { IPackageJson } from '@/@types/global.interface'
import { IAppModelState } from '@/models/app'
import styles from './index.less'

interface IProps {
	changeMenuFoldStatus: (status?: boolean) => void
	changeSimulatorFoldStatus: (status?: boolean) => void
	changeAnchorsFoldStatus: (status?: boolean) => void
	children: React.ReactNode
	fold_menu: IAppModelState['fold_menu']
	fold_simulator: IAppModelState['fold_simulator']
	fold_anchors: IAppModelState['fold_anchors']
	package_json: IPackageJson
	anchors: IAppModelState['anchors']
}

const Index = (props: IProps) => {
	const {
		changeMenuFoldStatus,
		changeSimulatorFoldStatus,
		changeAnchorsFoldStatus,
		children,
		fold_menu,
		fold_simulator,
		fold_anchors,
		package_json,
		anchors
	} = props
	const { name, component } = package_json
	const [ state_visible_page_component, setStateVisiblePageComponent ] = useState(true)
	const { pathname } = useRouter()
	const { is_client, is_mobile } = useResponsive()
	const pathnames = pathname.split('/')

	useEffect(
		() => {
			const visible = pathnames[1] === 'com' && pathnames.length === 4

			setStateVisiblePageComponent(visible)
		},
		[ pathname ]
	)

	const props_menu = {
		fold: fold_menu,
		component
	}

	const props_anchors = {
		anchors,
		fold_menu,
		fold_simulator,
		fold_anchors
	}

	const props_options = {
		changeMenuFoldStatus,
		changeSimulatorFoldStatus,
		changeAnchorsFoldStatus,
		fold_menu,
		fold_simulator,
		fold_anchors
	}

	const props_simulator = {
		fold: fold_simulator,
		component,
		name
	}

	const props_header = {
		...package_json
	}

	return (
		<div className={`${styles._local} w_100 border_box flex justify_center`}>
			<Menu {...props_menu} />
			<div
				className={`
                              ${fold_menu ? 'fold_menu' : ''} 
                              ${fold_simulator ? 'fold_simulator' : ''} 
                              content_wrap w_100 border_box flex justify_center transition_normal
                        `}
			>
				<div className='content border_box flex flex_column'>
					{state_visible_page_component && (
						<div className='w_100 border_box flex flex_column'>
							<Anchors {...props_anchors} />
							<Header {...props_header} />
						</div>
					)}
					<Options {...props_options} />
					{children}
				</div>
			</div>
			<Simulator {...props_simulator} />
		</div>
	)
}

export default memo(Index)
