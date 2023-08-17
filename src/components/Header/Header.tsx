import "./Header.scss"
import { BiSolidBell } from "react-icons/bi"
import bahuyLogo from "../../images/bahuy.png"
import { Link } from "react-router-dom"
import { publicRoutes } from "../../routes"

interface PropsParent {
    headName: any
}

function Header(props: PropsParent) {
    return (
        <div className="wrapper-header-default">
            <h3 className="title-header-default">{props.headName}</h3>

            <div className="header-default">
                <div className="icon-notification-default">
                    <BiSolidBell className="icon-notification2" />
                </div>
                <Link to={publicRoutes[7].path} className="info-notification-default">
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
