import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import Home from "./page/Home"
import Page from "./page/Page"
import SPList from "./page/SPList"
import ProDetails from "./page/ProDetails"
import Blog from "./page/Blog"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/page" element={<Page />}></Route>
    <Route path="/shop-list" element={<SPList />}></Route>
    <Route path="/Product-Details" element={<ProDetails />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
