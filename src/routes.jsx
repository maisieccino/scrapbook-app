import React from "react";
import * as Icon from "react-feather";

import Home from "./containers/Home";
import Starred from "./containers/Starred";
import Tags from "./containers/Tags";
import Settings from "./containers/Settings";
import OpenFile from "./containers/OpenFile";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
    label: "Home",
    navigation: true,
    icon: <Icon.Home />,
  },
  {
    path: "/starred",
    exact: true,
    component: Starred,
    label: "Starred",
    navigation: true,
    icon: <Icon.Star />,
  },
  {
    path: "/tags",
    exact: true,
    component: Tags,
    label: "Tags",
    navigation: true,
    icon: <Icon.Tag />,
  },
  {
    path: "/settings",
    exact: true,
    component: Settings,
    label: "Settings",
    navigation: true,
    icon: <Icon.Settings />,
  },
  {
    path: "/openFile",
    exact: true,
    component: OpenFile,
  },
];
