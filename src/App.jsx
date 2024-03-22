import { Footer } from "./assets/components/Footer/Footer"
import { Header } from "./assets/components/Header/Header"
import { MainContentContainer } from "./assets/components/MainContentContainer/MainContentContainer"
import { Menu } from "./assets/components/Menu/Menu";

function App() {

  return (
    <>
      {/* <Menu/> */}
      <Header/>
      <main>
        <MainContentContainer/>
      </main>
      <Footer/>
    </>
  )
}

export default App
