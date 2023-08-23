import "./NavTopAccountManageList.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

function NavTopAccountManageList() {
    return (
        <div className="wrapper-navtop-device-list">
            <h4 className="text-device-list1">Cài đặt hệ thống</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-list2">Quản lý tài khoản</h4>
        </div>
    );
}

export default NavTopAccountManageList;