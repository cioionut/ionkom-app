import 'bootstrap/dist/css/bootstrap.min.css'; // todo: apparently exist a better way to import this 'withCSS'?maybe

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}