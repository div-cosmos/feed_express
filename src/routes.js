import AppLayout from "./layouts/AppLayout/AppLayout";
import PageAbout from "./pages/PageAbout";
import PageContactUs from "./pages/PageContactUs";
import PageError from "./pages/PageError";
import PageHome from "./pages/PageHome";

const appLayoutChildRoutes = [
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/about",
    element: <PageAbout />,
  },
  {
    path: "/contact-us",
    element: <PageContactUs />,
  },
];

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageError />,
    children: appLayoutChildRoutes,
  },
];

export { routes };
