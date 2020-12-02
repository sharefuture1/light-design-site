import styles from './index.less'

const Index = () => {
	return (
		<div className={styles.loading_wrap}>
			<div className='loading'>
				<div className='icon_source_bottom icon_source' />
				<div className='icon_source_top icon_source' />
			</div>
		</div>
	)
}

export default Index
