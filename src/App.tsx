import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { TheView } from "./components/TheView";

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <TheView />
    </>
  );
}

export default App;
