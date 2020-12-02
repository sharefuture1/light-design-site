import React, { memo } from 'react'
import { Switch, Case } from 'react-if'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import Com from './com'

const Index: any = (props: any) => {
	const { dispatch, children, fold_menu, fold_simulator } = props
	const { pathname } = useRouter()
	const pathnames = pathname.split('/')

	const props_com = {
		fold_menu,
		fold_simulator,
		changeMenuFoldStatus () {
			dispatch({
				type: 'app/updateState',
				payload: { fold_menu: !fold_menu }
			})
		},
		changeSimulatorFoldStatus () {
			dispatch({
				type: 'app/updateState',
				payload: { fold_simulator: !fold_simulator }
			})
		}
      }
      
	if (pathnames[1] === 'com') {
		return (
			<Com {...props_com}>
				<Switch>
					<Case condition={pathnames.length === 2}>{children}</Case>
					<Case condition={pathnames.length === 3}>{children}</Case>
					<Case condition={pathnames.length === 4}>{children}</Case>
				</Switch>
			</Com>
		)
	}

	return children
}

const getData = ({ app: { fold_menu, fold_simulator } }: { app: any }) => ({
	fold_menu,
	fold_simulator
})

export default memo(connect(getData)(Index))
