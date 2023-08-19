import LoginLayout from "../layouts/LoginLayout";
import Dashboard from "../pages/Dashboard";
import Device from "../pages/Device";
import Login from "../pages/Login";
import ProvideNum from "../pages/ProvideNum/ProvideNum";
import Report from "../pages/Report/Report";
import Services from "../pages/Services";
import AccountManage from "../pages/SystemSetting/AccountManage/AccountManage";
import RoleManage from "../pages/SystemSetting/RoleManage/RoleManage";
import UserLog from "../pages/SystemSetting/UserLog/UserLog";
import User from "../pages/User/User";

export const publicRoutes = [
    { path: "/", component: Login, layout: LoginLayout },
    { path: "/home", component: Dashboard },
    { path: "/device", component: Device },
    { path: "/services", component: Services },
    { path: "/numLevel", component: ProvideNum },
    { path: "/report", component: Report },
    { path: "/user", component: User },
    { path: "/roleManage", component: RoleManage },
    { path: "/accountManage", component: AccountManage },
    { path: "/userlog", component: UserLog },
];
