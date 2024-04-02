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
import Host from "./components/Host";
import Dashboard, { loader as hostVansLoader } from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Reviews from "./pages/Host/Reviews";
import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/VanDetail";
import Register from "./pages/Register/Register";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./pages/Register/Login";
// import Singup, { action as signupAction } from "./pages/Register/Singup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="host" element={<Host />}>
        <Route index loader={hostVansLoader} element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" loader={hostVansLoader} element={<HostVans />} />
        <Route
          path="vans/:id"
          loader={vanDetailLoader}
          element={<HostVanDetail />}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="vans" loader={vansLoader} element={<Vans />} />
      <Route path="vans/:id" loader={vanDetailLoader} element={<VanDetail />} />
      <Route path="register" element={<Register />}>
        <Route
          index
          element={<Login />}
          loader={loginLoader}
          action={loginAction}
        />
        {/* <Route path="signup" element={<Singup />} action={signupAction} /> */}
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
