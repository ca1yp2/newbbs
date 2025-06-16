import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Main from './pages/Main'
import View from './pages/View'
import Write from './pages/Write'
import Edit from './pages/Edit'
import Pass from './pages/Pass'
import NoPage from './pages/NoPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout title="REACT 게시판" />}>
          <Route index element={<Main />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/write" element={<Write />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/pass/:id" element={<Pass />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App