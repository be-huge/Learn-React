import PageDetail from "./components/PageDetail/PageDetail";
import HomePage from './Pages/HomePage/HomePage';

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/PageDetail/:name", element: <PageDetail /> },
];