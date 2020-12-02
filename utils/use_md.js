const handleMarkdown = config => {
	config.module.rules.push({
		test: /\.md$/,
		use: 'raw-loader'
	})
}

module.exports = {
	handleMarkdown: handleMarkdown
}
