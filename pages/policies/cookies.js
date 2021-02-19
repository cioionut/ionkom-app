import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row, Col } from 'react-bootstrap'


export default function Cookies() {
  const pageTitle = `Cookie Policy | Ionkom`;
  return (
    <Layout home>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
        <meta
            name="description"
            content="Learn more about Ionkom's privacy policy and practices, including what types of info Ionkom receives and how info is used and shared."
        />                
        <link rel="canonical" href={ currentUrl } key="canonical" />
      </Head>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h1>About Cookies</h1>
            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files containing a string of characters that can be placed on your computer or mobile device that uniquely identifies your browser or device. We may use technologies like cookies, pixels and local storage to deliver, secure, and understand products, services, and ads.
            </p>
            <h2>What are cookies used for?</h2>
            <p>Cookies and other technologies allow a site or services to know if your computer or device has visited it before. These technologies can then be used to deliver products, services, and ads, help us understand how the site or service is being used, help you navigate between pages efficiently, help remember your preferences, and generally improve your experience in using our services. Cookies can also help ensure marketing you see online is more relevant to you and your interests.</p>
            <h2>Why does Ionkom use cookies and similar technologies?</h2>
            <p>We use cookies, pixels, local storage, and similar technologies to show you relevant content, improve your experience, and help protect Ionkom and our users. We may use these technologies to deliver the service, provide you with a service that is easy to use, enables you to move around the Service and use its features, such as accessing secure areas, and store information so that Ionkom responds faster. We may use these technologies to collect information about how you use the Service, for example which pages you go to most often and if you get error messages from certain pages. We may use these technologies to allow us to remember choices you make (such as your user name, language or the region you're in) and tailor the Service to provide enhanced features and content for you. These cookies can also be used to remember changes you've made to text size, font and other parts of pages that you can customize. Ionkom or our advertising partners may use these technologies to deliver advertising that is relevant to your interests. These technologies can remember that your device has visited a site or service, and may also be able to track your device's browsing activity on other sites or services other than Ionkom. This information may be shared with organizations outside Ionkom, such as advertisers and/or advertising networks to deliver the advertising, and to help measure the effectiveness of an advertising campaign. *We may use these technologies to understand, improve, and research products and services.</p>
            <h2>How long will cookies stay on my device?</h2>
            <p>The length of time a cookie will stay on your computer or mobile device depends on whether it is a "persistent" or "session" cookie. Session cookies will only stay on your device until you stop browsing. Persistent cookies stay on your computer or mobile device until they expire or are deleted.</p>
            <h2>First and third party cookies</h2>
            <p>First-party cookies are cookies that belong to Ionkom, third-party cookies are cookies that another party places on your device through our Service. Third-party cookies may be placed on your device by someone providing a service for Ionkom, for example to help us understand how our service is being used. Third-party cookies may also be placed on your device by our business partners so that they can use them to advertise products and services to you elsewhere on the Internet.</p>
            <h2>How to control cookies or other collection mechanisms</h2>
            <p>
              Follow the instructions provided by your website or mobile browser (usually located within the "Help", "Tools" or "Edit" facility) to modify your cookie settings. Please note that if you set your browser to disable cookies or other technologies, you may not be able to access certain parts of our Service and other parts of our Service may not work properly.
            </p>
            <p>
              To learn more about the choices that advertisers provide generally for individuals to influence how information about their online activities over time and across third-party Web sites or online services is collected and used, visit the Network Advertising Initiative at <a href="http://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener">http://www.networkadvertising.org/managing/opt_out.asp</a>,
               the Digital Advertising Alliance at <a href="http://www.aboutads.info/" target="_blank" rel="noopener">http://www.aboutads.info/</a>, or the European Digital Advertising Alliance at <a href="http://youronlinechoices.eu/" target="_blank" rel="noopener">http://youronlinechoices.eu/</a>.
            </p>
            <p>  
              In addition, your browser or device may offer settings that allow you to choose whether browser cookies are set and to delete them. These controls vary by browser, and manufacturers may change both the settings they make available and how they work at any time. 
            </p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-ie/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener">Internet Explorer</a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preference" target="_blank" rel="noopener">Firefox</a>
              </li>
              <li>
                <a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a>
              </li>
              <li>
                <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener">Safari Mobile</a>
              </li>
              <li>
                <a href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/" target="_blank" rel="noopener">Opera</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <p>If you have questions about this Cookie Notice, please contact our data protection officer at <a href="mailto:dpo@ionkom.com">dpo@ionkom.com</a></p>
        </Row>
      </Container>
    </Layout>
  )
}
