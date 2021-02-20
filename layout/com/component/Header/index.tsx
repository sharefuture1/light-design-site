import styles from './index.less'
import { IPackageJson } from '@/@types/global.interface'

const Index = (props: IPackageJson) => {
	const { component, version, homepage } = props

	return (
		<div className={`${styles._local} w_100 border_box flex flex_column`}>
			<a
				className='name_wrap border_box disable_a_hover transition_normal'
				rel='nofollow noopener noreferrer'
				target='_blank'
				href={homepage}
			>
				<span className='name'>{component}</span>
			</a>
			<p className='version'>version: {version}</p>
		</div>
	)
}

export default Index
