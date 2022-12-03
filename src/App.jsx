import { useRoutes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { routes } from "./configs/routes";

function App() {
  const routeElements = useRoutes(routes);

  return <>{routeElements}</>;
}

export default App;
