import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import NLUinAction from '../../components/nluinaction'


export default function About() {
  return (
    <Layout home>
        <Head>
            <title>{`${siteTitle} - Natural Language Understanding`}</title>
        </Head>
        <NLUinAction />
    </Layout>
  )
}
