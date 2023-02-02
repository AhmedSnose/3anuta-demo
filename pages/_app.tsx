import type { AppProps } from 'next/app'
import { store , persistor } from '../store/store.js'
import { Provider } from 'react-redux'
import MainLayOut  from '../layouts/MainLayOut'
import { ToastContainer } from 'react-toastify';
import MainModal  from '../layouts/modal/MainModal'

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  // console.log(persistor , 'persistor');
  

  return (
    <Provider store={store}>
      <MainLayOut>
          <Component {...pageProps} />
        <ToastContainer />
       </MainLayOut>

      <MainModal />

    </Provider>
  )
}

export default MyApp
