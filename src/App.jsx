import React from "react"
import PageCategory from "./Components/naim/Component/PageCategory";
import { BrowserRouter, Routes, Route } from "react-router";
import AddInfoPage from "./Components/AddInfoPage";
import Login from './Components/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Login/>} />
            <Route path="/:category" element={<PageCategory />} />
            <Route path="/groups/add-info" element={<AddInfoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
