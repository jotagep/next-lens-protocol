import { Provider } from 'urql'
import { client } from '../graphql/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
