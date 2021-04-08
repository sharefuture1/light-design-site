import { IAppModelState } from '@/models/app'
import styles from './index.less'

interface IProps {
	anchors: IAppModelState['anchors']
	fold_menu: IAppModelState['fold_menu']
	fold_simulator: IAppModelState['fold_simulator']
	fold_anchors: IAppModelState['fold_anchors']
}

const Index = (props: IProps) => {
	const { anchors, fold_menu, fold_simulator, fold_anchors } = props

	return (
		<div
			className={`
                        ${styles._local} 
                        ${fold_menu ? styles.fold_menu : ''}
                        ${fold_simulator ? styles.fold_simulator : ''}
                        ${fold_anchors ? styles.fold_anchors : ''}
                        border_box fixed transition_normal
                  `}
		>
			<div className='anchors_items w_100 h_100 border_box flex align_center'>
				{anchors.map((item) => (
					<a className='anchor_item' href={'#' + item.name} key={item.name}>
						<span
							className={`name transition_normal ${item.active
								? 'active'
								: ''}`}
						>
							{item.name}
						</span>
						<span className='next'>&gt;</span>
					</a>
				))}
			</div>
		</div>
	)
}

export default Index
