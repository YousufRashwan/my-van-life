import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Host from "./pages/Host";
import Vans from "./pages/Vans";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="host" element={<Host />} />
      <Route path="vans" element={<Vans />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
