import "./NavTopUserLog.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

function NavTopUserLog() {
    return (
        <div className="wrapper-navtop-device-list">
            <h4 className="text-device-list1">Cài đặt hệ thống</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-list2">Nhật ký người dùng</h4>
        </div>
    );
}

export default NavTopUserLog;