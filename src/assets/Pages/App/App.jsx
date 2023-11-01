// import AppRoutes from "../../Routes/index.jsx";
import { useRoutes, BrowserRouter } from 'react-router-dom';
// importamos los componentes
import Navbar from "../../Components/Navbar";
import NotFound from "../../Components/NotFound";
// importamos las paginas
import Home from "../Home/Home";
import Login from "../LogIn/Login";
import MyOrders from "../MyOrders/MyOrders";
import Categories from "../Categorias/Categories";
import QuienesSomos from '../QuienesSomos/QuienesSomos';

// creamos un array de objetos con las rutas a enlazar
const AppRoutes = () => {
  // usamos useRoutes para crear el arbol de rutas
  let routesElements = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/Categories", element: <Categories /> },
    { path: "/myorders", element: <MyOrders /> },
    { path: "/QuienesSomos", element: <QuienesSomos /> },
    { path: "/*", element: <NotFound /> },

  ]);

  return routesElements;
}

// Funcion para rendereizar el componente AppRoutes
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>

  );
};

export default App;