import Header from "./components/Header"
import Container from "./components/others/Container"
import Title from "./components/others/Title"
import UserList from "./components/Main/UserList"
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
