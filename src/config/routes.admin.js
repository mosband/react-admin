import { addRoutes } from "@/utils/routesUtils";
import Home from "@/pages/Home";
import Bar from "@/pages/EchartsDemo/Bar";
import Line from "@/pages/EchartsDemo/Line";
import Pie from "@/pages/EchartsDemo/Pie";

export const menuRoutes = [
  {
    path: "/home",
    title: "首页",
    icon: "home",
    component: Home
  },
  {
    path: "/echarts",
    title: "Echarts 示例",
    icon: "area-chart",
    children: [
      {
        path: "/echarts/bar",
        title: "柱状图",
        component: Bar
      },
      {
        path: "/echarts/line",
        title: "折线图",
        component: Line
      },
      {
        path: "/echarts/pie",
        title: "饼状图",
        component: Pie
      }
    ]
  }
];

export const routes = [];

addRoutes(routes, menuRoutes);

export const defaultRoute = menuRoutes[0];
