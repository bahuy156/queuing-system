import "./Header.scss"
import { BiSolidBell } from "react-icons/bi"
import bahuyLogo from "../../images/bahuy.png"

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
                <div className="info-notification-default">
                    <img src={bahuyLogo} alt="" />
                    <div className="info-notification-default-child">
                        <span>Xin chào</span>
                        <p>Sa Mai Bá Huy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
