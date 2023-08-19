import "./MenuBar.scss"
import LogoAlta from "../../images/Logo-alta.png"
import { RxDashboard } from "react-icons/rx"
import { FiMonitor } from "react-icons/fi"
import { TbMessageCircleQuestion } from "react-icons/tb"
import { LuFileBarChart } from "react-icons/lu"
import { TbSettings2 } from "react-icons/tb"
import { PiStack } from "react-icons/pi"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { FiLogOut } from "react-icons/fi"
import { NavLink, useNavigate } from "react-router-dom"
import { publicRoutes } from "../../routes";
import { useDispatch } from "react-redux"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { RootState } from "../../redux/reducer"
import { logoutAccount } from "../../redux/actions/actions"
import { useState } from "react"

function MenuBar() {
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

    const navaigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutAccount())
        navaigate("/")
    }

    // handle active navmenu last child
    const [active, setActive] = useState<boolean>(false)

    const handleActiveNavMenu = () => {
        setActive(true)
    }

    return (
        <div className="wrapper-menu">
            <div className="logo-menu">
                <img src={LogoAlta} alt="#" />
            </div>

            <div className="nav-menu">
                <NavLink to={publicRoutes[1].path} className="nav-menu-child" onClick={() => setActive(false)} >
                    <RxDashboard className="icon-nav" />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to={publicRoutes[2].path} className="nav-menu-child" onClick={() => setActive(false)} >
                    <FiMonitor className="icon-nav" />
                    <span>Thiết bị</span>
                </NavLink>

                <NavLink to={publicRoutes[3].path} className="nav-menu-child" onClick={() => setActive(false)} >
                    <TbMessageCircleQuestion className="icon-nav" />
                    <span>Dịch vụ</span>
                </NavLink>

                <NavLink to={publicRoutes[4].path} className="nav-menu-child" onClick={() => setActive(false)} >
                    <PiStack className="icon-nav" />
                    <span>Cấp số</span>
                </NavLink>

                <NavLink to={publicRoutes[5].path} className="nav-menu-child" onClick={() => setActive(false)} >
                    <LuFileBarChart className="icon-nav" />
                    <span>Báo cáo</span>
                </NavLink>

                <div className={active ? "nav-menu-child-active" : "nav-menu-child"}>
                    <TbSettings2 className="icon-nav" />
                    <span>Cài đặt hệ thống</span>
                    <HiOutlineDotsVertical className="icon-nav" />
                    <div className="sub-menu">
                        <NavLink to={publicRoutes[7].path} className="sub-menu-child" onClick={handleActiveNavMenu} >Quản lý vai trò</NavLink>
                        <NavLink to={publicRoutes[8].path} className="sub-menu-child" onClick={handleActiveNavMenu} >Quản lý tài khoản</NavLink>
                        <NavLink to={publicRoutes[9].path} className="sub-menu-child" onClick={handleActiveNavMenu} >Nhật ký người dùng</NavLink>
                    </div>
                </div>
            </div>

            <div className="logout-button" onClick={handleLogout} >
                <div className="logout-button-child">
                    <FiLogOut className="logout-icon" />
                    <span>Đăng xuất</span>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;