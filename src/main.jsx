import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import ShowDetails from "./ShowDetails";
import Root from "./Root";
import { SearchProvider } from "./SearchContext"; // Fixed import

// Set up the router
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<App />} /> {/* Use `index` for the root path */}
        <Route path="/details/:countryName" element={<ShowDetails />} />
      </Route>

  )
);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
    <RouterProvider router={router} />
    </SearchProvider>

  </StrictMode>
);
