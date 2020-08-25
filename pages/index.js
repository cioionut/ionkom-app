import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${siteTitle} - Everyone can inspire! Write your beliefs!`}></meta>
        <meta property="og:url" content="https://ionkom.com/"></meta>
        <meta
            name="description"
            content="Connect with people you admire, profesionists and creative people"
        />
      </Head>
      <section>
        <p>Home</p>
      </section>
    </Layout>
  )
}
