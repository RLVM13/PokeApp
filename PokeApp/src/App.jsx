
import { BrowserRouter } from 'react-router-dom' //enrutamiento SPA
import Header from './components/Header'
import MiMain from './components/MiMain'
import Footer from './components/Footer'
import './styles/styles.scss'

function App() {
  
  return (
    <>
      <div>
        <BrowserRouter >
          <Header />
          <MiMain />
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
