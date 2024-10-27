import { useState } from 'react'

import './App.css'
import { Main } from './pages/Main'
import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { Board } from './pages/board/Board';
import { Personal } from './pages/board/Personal/Personal';
import { Clients } from './pages/board/Clients/Clients';
import { Messages } from './pages/board/Messages/Messages';

function App() {
  const [count, setCount] = useState(0)

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:  <Main />,
  //   },
  //   {
  //     path: "/board",
  //     element:  <Board />,
  //   },
  // ]);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />}>
        
       
      </Route>
      {/* */}
      <Route
          path="/board"
          element={<Board >
            <Outlet />
          </Board>}
          
        >
          <Route
          path="/board/personal"
          element={<Personal />}
        />
          <Route
            path="/board/clients"
            element={<Clients />}
          />
          <Route
            path="/board/messages"
            element={<Messages />}
          />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
