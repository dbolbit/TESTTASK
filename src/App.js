import Header from "./components/Header"
import 'react-tooltip/dist/react-tooltip.css'
import Main from "./components/Main"
import Footer from "./components/Footer"
import {Provider} from "react-redux"
import {store} from "./store/store"
import {useEffect, useState} from "react"
import Spinner from "./components/others/Spinner"


function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    const timerId = setTimeout(() => setIsLoaded(true), 2000)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <div className="app">
      <Provider store={store}>
        {!isLoaded ? <Spinner/> :
          <>
            <Header/>
            <Main/>
            <Footer/>
          </>
        }
      </Provider>
    </div>
  )
}

export default App
