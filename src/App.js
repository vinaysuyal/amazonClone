import logo from "./logo.svg";
import "./App.css";
import Header from "./Section/Header";
import MainPage from "./pages/MainPage.page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/Product.page";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/product/:productId", element: <ProductPage /> },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
