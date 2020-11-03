import { HomePage, LoginPage, RegisterPage } from "../../pages";

export const dataRouteDashboard = [
  {
    name: "Home Page",
    component: HomePage,
    exact: true,
    path: "/",
    nav: "false",
  },
];

export const dataRouteAuth = [
  {
    name: "Login Page",
    component: LoginPage,
    exact: true,
    path: "/",
    nav: "false",
  },
  {
    name: "Register Page",
    component: RegisterPage,
    exact: true,
    path: "/register",
    nav: "false",
  },
];

export const noUserImage =
  "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
