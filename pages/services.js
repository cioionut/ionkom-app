import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export default function Services() {
  return (
    <Layout home>
      <Head>
        <title>{`${siteTitle} - Services`}</title>
      </Head>
      <section>
        <ul>
          <li>
            <Link href="https://vremea.ionkom.com">
              <a target="_blank">Weather</a>
            </Link>
          </li>
          <li>
            <Link href="https://cioionut.github.io/nlu-demo">
              <a target="_blank">Virtual Digital Asisstant</a>
            </Link>
          </li>
          <li>
            <Link href="https://cioionut.github.io/nlu-demo">
              <a target="_blank">Natural Language Understanding</a>
            </Link>
          </li>
          <li>Ionkom App</li>
        </ul>
      </section>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </Layout>
  )
}
