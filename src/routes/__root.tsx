import { lazy, Suspense } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "@/components/nav";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

const RootLayout = () => (
  <div className="max-w-screen-sm m-auto">
    <Nav />
    <Outlet />
  </div>
);

export const Route = createRootRoute({
  component: () => (
    <>
      <RootLayout />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
