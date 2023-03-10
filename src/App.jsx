import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout";
import PlumbedLayout from "./components/PlumbedLayout";
import { SearchProvider } from "./context/SearchContext";
import { SettingProvider } from "./context/SettingContext";
import AdvanceSearch from "./pages/AdvanceSearch";
import Articles from "./pages/Articles";
import Dashboard from "./pages/Dashboard";
import DataInfo from "./pages/DataInfo";
import Home from "./pages/Home";
import Plumbed from "./pages/Plumbed";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="search" element={<Dashboard />} />
        <Route path="infos" element={<DataInfo />} />
        <Route path="articles/:source/:id" element={<Articles />} />
        <Route path="advanceSearch" element={<AdvanceSearch />} />
      </Route>
      <Route path="/plumbed" element={<PlumbedLayout />}>
        <Route index element={<Plumbed />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <>
      <SettingProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </SettingProvider>
    </>
  );
};

export default App;
