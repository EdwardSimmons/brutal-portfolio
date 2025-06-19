import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ThemeProvider } from "./components/themeProvider";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree, basepath: "/brutal-portfolio/" });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="ed-simmons-portfolio">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
