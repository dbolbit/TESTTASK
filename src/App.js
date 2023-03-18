import Header from "./components/Header"
import 'react-tooltip/dist/react-tooltip.css'
import Main from "./components/Main"
import Footer from "./components/Footer"
import {Provider} from "react-redux"
import {store} from "./store/store"


function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header/>
        <Main/>
        <Footer/>
      </Provider>
    </div>
  )
}

export default App
