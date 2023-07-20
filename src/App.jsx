import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/about" element={<AboutPage></AboutPage>} />
          <Route path="/contact" element={<ContactPage></ContactPage>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
