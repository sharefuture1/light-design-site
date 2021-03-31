const Index = ({ children }) => {
	return (
		<h3>
			<a id={children} href={'#' + children}>
				{children}
			</a>
		</h3>
	)
}

export default Index
