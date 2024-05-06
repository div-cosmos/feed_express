import AppLayout from "./layouts/AppLayout/AppLayout";
import PageAbout from "./pages/PageAbout";
import PageContactUs from "./pages/PageContactUs";
import PageError from "./pages/PageError";
import PageHome from "./pages/PageHome";
import PageRestaurant from "./pages/PageRestaurant";

export const LINK_ROOT = "/";
export const LINK_ABOUT = "/about";
export const LINK_CONTACT_US = "/contact-us";
export const LINK_RESTAURANTS = "/restaurants";

const appLayoutChildRoutes = [
  {
    path: LINK_ROOT,
    loader: () => {
      console.log("hello this is main layout body loader");
      return 1;
    },
    element: <PageHome />,
  },
  {
    path: LINK_ABOUT,
    loader: () => {
      console.log("route loader for page about");
      return 1;
    },
    element: <PageAbout />,
  },
  {
    path: LINK_CONTACT_US,
    loader: () => {
      console.log("route loader for page contact us");
      return 1;
    },
    element: <PageContactUs />,
  },
  {
    path: LINK_RESTAURANTS + "/:resId",
    loader: () => {
      console.log("route loader for page restaurant");
      return 1;
    },
    element: <PageRestaurant />,
  },
];

const routes = [
  {
    path: LINK_ROOT,
    loader: () => {
      console.log("hello this is main layout loader");
      return 1;
    },
    element: <AppLayout />,
    children: appLayoutChildRoutes,
    errorElement: <PageError />,
  },

  {
    path: "/react",
    element: "Learning React",
  },
];

export { routes };
