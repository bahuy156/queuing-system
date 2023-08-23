import "./NavTopDeviceList.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

function NavTopDeviceList() {
    return (
        <div className="wrapper-navtop-device-list">
            <h4 className="text-device-list1">Thiết bị</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-list2">Danh sách thiết bị</h4>
        </div>
    );
}

export default NavTopDeviceList;