const Index = ({ children }) => {
	return (
		<h3>
			<a className='anchor' id={children} href={'#' + children}>
				{children}
			</a>
		</h3>
	)
}

export default Index
