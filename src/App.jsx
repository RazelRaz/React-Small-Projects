import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import ProductPage from "./pages/ProductPage"





function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/about" element={<AboutPage></AboutPage>} />
          <Route path="/product/:id/:name" element={<ProductPage></ProductPage>} />
          <Route path="/contact" element={<ContactPage></ContactPage>} />

          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
