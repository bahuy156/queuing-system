import "./NavTopRoleManageList.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

function NavTopRoleManageList() {
    return (
        <div className="wrapper-navtop-device-list">
            <h4 className="text-device-list1">Cài đặt hệ thống</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-list2">Quản lý vai trò</h4>
        </div>
    );
}

export default NavTopRoleManageList;