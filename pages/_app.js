import Layout from '../components/Layout'
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css'

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
