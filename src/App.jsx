import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Main from "./Pages/Main";

function App() {
  const router = createBrowserRouter([
    { index: true, element: <Main /> },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    
    </>
  );
}

export default App;
