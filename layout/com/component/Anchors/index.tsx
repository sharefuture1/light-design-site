import styles from './index.less'

const Index = (props: any) => {
	const { anchors } = props

	return (
		<div className={`${styles._local} border_box flex align_center fixed none`}>
			{anchors.map((item: string) => (
				<a className='anchor_item' href={'#' + item} key={item}>
					{item}
				</a>
			))}
		</div>
	)
}

export default Index
