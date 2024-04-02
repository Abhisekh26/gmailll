import Navebar from "./Component/Navebar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Signup from "./Component/Signup";
import Signin from "./Component/Signin";
import Compose from "./Component/Compose";


function App() {
  var appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Navebar/>,
      children:[
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path:"/signin",
          element:<Signin></Signin>
        },
        {
          path:"/compose",
          element:<Compose></Compose>
        }
      ]
    }
  ])
  return (
    <div>
   <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
