import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import CodeBlock from '@/components/CodeBlock'
import request from '@/utils/use_request'
import styles from './index.less'

interface IProps {
	component: string
	source: string
}

const components = {
	code: CodeBlock
}

const Index: NextPage<IProps> = ({ component, source }) => {
	return (
		<div className={styles.markdown}>
			<Head>
				<title>Light Design - {component}</title>
				<meta name='description' content={`Light Design - ${component}组件`} />
			</Head>
			{hydrate(source, { components })}
		</div>
	)
}

export const getServerSideProps = async ({ query: { component } }: NextPageContext) => {
	const data = await request.get(`/coms/getReadme?name=${component}`)
	const source = await renderToString(data, { components })

	return { props: { component, source } }
}

export default Index
