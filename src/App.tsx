import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
