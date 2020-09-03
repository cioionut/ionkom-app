import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${siteTitle}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
        <meta
            name="description"
            content="Learn how to become more productive and share your experience. Ionkom provides many useful online services that makes your life easier"
        />
      </Head>
      <section>
        <p>Let's make some time!</p>
      </section>
    </Layout>
  )
}
