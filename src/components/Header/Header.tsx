import "./Header.scss"
import { BiSolidBell } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useState } from "react"
import { publicRoutes } from "../../routes"
import Notification from "../Notification/Notification"
import defaultLogo from "../../images/newuser.png"

interface PropsParent {
    headName: any
}

function Header(props: PropsParent) {
    const [activeNoti, setActiveNoti] = useState<boolean>(false)

    // handle get current account
    const getAccountStorage = () => {
        const accountStorage = localStorage.getItem("currentAccount")

        if (accountStorage) {
            return JSON.parse(accountStorage)
        } else {
            return null
        }
    }
    const currAccount = getAccountStorage();

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
                    <img src={currAccount.image === "" ? defaultLogo : currAccount.image} alt="" />
                    <div className="info-notification-default-child">
                        <span>Xin chào</span>
                        <p>{currAccount.username}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;