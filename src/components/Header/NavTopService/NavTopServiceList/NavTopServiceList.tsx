import "./NavTopServiceList.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

function NavTopServiceList() {
    return (
        <div className="wrapper-navtop-device-list">
            <h4 className="text-device-list1">Dịch vụ</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-list2">Danh sách dịch vụ</h4>
        </div>
    );
}

export default NavTopServiceList;