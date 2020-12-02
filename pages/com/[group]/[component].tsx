import { NextPage, NextPageContext } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import CodeBlock from '@/components/CodeBlock'
import request from '@/utils/use_request'
import styles from './index.less'

interface IProps {
	source: string
}

const components = {
	code: CodeBlock
}

const Index: NextPage<IProps> = ({ source }) => {
	return <div className={styles.markdown}>{hydrate(source, { components })}</div>
}

export const getServerSideProps = async ({ query: { component } }: NextPageContext) => {
	const data = await request.get(`/coms/getReadme?name=${component}`)
	const source = await renderToString(data, { components })

	return { props: { source } }
}

export default Index
