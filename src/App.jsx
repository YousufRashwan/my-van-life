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
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/VanDetail";
import Register from "./pages/Register/Register";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./pages/Register/Login";
import Singup, {
  action as signupAction,
  loader as signupLoader,
} from "./pages/Register/Singup";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import { requireAuth } from "./api";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="host" element={<Host />}>
        <Route index loader={hostVansLoader} element={<Dashboard />} />
        <Route
          path="income"
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
          element={<Income />}
        />
        <Route
          path="vans"
          loader={hostVansLoader}
          errorElement={<Error />}
          element={<HostVans />}
        />
        <Route
          path="vans/:id"
          loader={hostVanDetailLoader}
          errorElement={<Error />}
          element={<HostVanDetail />}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route
          path="reviews"
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
          element={<Reviews />}
        />
      </Route>
      <Route
        path="vans"
        loader={vansLoader}
        errorElement={<Error />}
        element={<Vans />}
      />
      <Route
        path="vans/:id"
        loader={vanDetailLoader}
        errorElement={<Error />}
        element={<VanDetail />}
      />
      <Route path="register" element={<Register />}>
        <Route
          index
          loader={loginLoader}
          action={loginAction}
          element={<Login />}
        />
        <Route
          path="signup"
          loader={signupLoader}
          action={signupAction}
          element={<Singup />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
