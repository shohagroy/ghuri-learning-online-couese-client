import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
