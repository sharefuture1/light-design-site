import { memo, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Menu from './component/Menu'
import Options from './component/Options'
import Header from './component/Header'
import Simulator from './component/Simulator'
import { IPackageJson } from '@/@types/global.interface'
import styles from './index.less'

interface IProps {
	changeMenuFoldStatus: () => void
	changeSimulatorFoldStatus: () => void
	children: React.ReactNode
	fold_menu: boolean
	fold_simulator: boolean
	package_json: IPackageJson
}

const Index = (props: IProps) => {
	const {
		changeMenuFoldStatus,
		changeSimulatorFoldStatus,
		children,
		fold_menu,
		fold_simulator,
		package_json
	} = props
	const { name, component } = package_json
	const [ state_visible_header, setStateVisibleHeader ] = useState(false)
	const { pathname } = useRouter()
      const pathnames = pathname.split('/')

	useEffect(
		() => {
			const visible = pathnames[1] === 'com' && pathnames.length === 4

			setStateVisibleHeader(visible)
		},
		[ pathname ]
	)

	const props_menu = {
            fold: fold_menu,
            component
	}

	const props_options = {
		changeMenuFoldStatus,
		changeSimulatorFoldStatus,
		fold_menu,
		fold_simulator
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
                              content_wrap w_100 border_box flex justify_center
                        `}
			>
				<div className='content border_box flex flex_column'>
                              <Options { ...props_options } />
					{state_visible_header && <Header {...props_header} />}
					{children}
				</div>
			</div>
			<Simulator {...props_simulator} />
		</div>
	)
}

export default memo(Index)
