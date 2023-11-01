import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home/Home';

// function que contiene las rutas
const AppRoutes = () => {
  // Create the router object with the defined routes
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/login', element: <Login />},
    { path: '/*', element: <NotFound /> },
  ]);

  // Return the router object
  return routes;
};

export default AppRoutes;

