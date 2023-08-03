import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Device from "../pages/Device";
import NumLevel from "../pages/NumLevel/NumLevel";
import Report from "../pages/Report/Report";
import Services from "../pages/Services";
import SystemSetting from "../pages/SystemSetting/SystemSetting";

export const publicRoutes = [
    { path: "/", component: Dashboard, overview: DashboardLayout },
    { path: "/device", component: Device },
    { path: "/services", component: Services },
    { path: "/numLevel", component: NumLevel },
    { path: "/report", component: Report },
    { path: "/systemSetting", component: SystemSetting },
];
