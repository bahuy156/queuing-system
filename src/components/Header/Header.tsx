import "./Header.scss"
import { BiSolidBell } from "react-icons/bi"
import bahuyLogo from "../../images/bahuy.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { publicRoutes } from "../../routes"
import Notification from "../Notification/Notification"

interface PropsParent {
    headName: any
}

function Header(props: PropsParent) {
    const [activeNoti, setActiveNoti] = useState<boolean>(false)

    return (
        <div className="wrapper-header-default">
            <h3 className="title-header-default">{props.headName}</h3>

            <div className="header-default">
                <div className="wrapper-icon-notification-default">
                    <div
                        className={!activeNoti ? "icon-notification-default" : "icon-notification-default-active"}
                        onClick={() => setActiveNoti(!activeNoti)}
                    >
                        <BiSolidBell className={!activeNoti ? "icon-notification2" : "icon-notification2-active"} />
                    </div>
                    <div className={!activeNoti ? "main-notification" : "main-notification-active"}>
                        <Notification />
                    </div>
                </div>
                <Link to={publicRoutes[6].path} className="info-notification-default">
                    <img src={bahuyLogo} alt="" />
                    <div className="info-notification-default-child">
                        <span>Xin chào</span>
                        <p>Sa Mai Bá Huy</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
