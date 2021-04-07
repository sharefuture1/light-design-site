import { memo, ReactElement } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import store from 'store'
import usePWA from '@/hooks/use_pwa'
import useSubscriptions from '@/hooks/use_subscriptions'
import { IAppModelState } from '@/models/app'
import Com from './com'

interface IProps extends IAppModelState {
	dispatch: (params: any) => void
	children: ReactElement
}

const Index = (props: IProps) => {
	const {
		dispatch,
		children,
		fold_menu,
		fold_simulator,
		fold_anchors,
		package_json,
		anchors
	} = props
	const app_fold_menu = useSubscriptions(fold_menu, false)
	const app_fold_simulator = useSubscriptions(fold_simulator, false)
	const app_fold_anchors = useSubscriptions(fold_anchors, true)
	const router = useRouter()
	const { pathname } = router
      const pathnames = pathname.split('/')
      
      usePWA()

	const props_com = {
		fold_menu: app_fold_menu,
            fold_simulator: app_fold_simulator,
            fold_anchors:app_fold_anchors,
		package_json,
		anchors,
		changeMenuFoldStatus (status?: boolean) {
			dispatch({
				type: 'app/updateState',
				payload: { fold_menu: status || !fold_menu }
			})

			store.set('fold_menu', status || !fold_menu)
		},
		changeSimulatorFoldStatus (status?: boolean) {
			dispatch({
				type: 'app/updateState',
				payload: { fold_simulator: status || !fold_simulator }
			})

			store.set('fold_simulator', status || !fold_simulator)
            },
            changeAnchorsFoldStatus (status?: boolean) {
			dispatch({
				type: 'app/updateState',
				payload: { fold_anchors: status || !fold_anchors }
			})

			store.set('fold_anchors', status || !fold_anchors)
		},
	}

	if (pathnames[1] === 'com') {
		if (pathnames.length === 2 || pathnames.length === 3 || pathnames.length === 4) {
			return <Com {...props_com}>{children}</Com>
		} else {
			router.push('/404')
		}
	}

	return children
}

const getData = ({
	app: { fold_menu, fold_simulator, fold_anchors, package_json, anchors }
}: {
	app: IAppModelState
}) => ({
	fold_menu,
	fold_simulator,
	fold_anchors,
	package_json,
	anchors
})

export default memo(connect(getData)(Index))
