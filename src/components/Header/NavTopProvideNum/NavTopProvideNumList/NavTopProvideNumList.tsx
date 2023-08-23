import "./NavTopProvideNumList.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

function NavTopProvideNumList() {
    return (
        <div className="wrapper-navtop-device-list">
            <h4 className="text-device-list1">Cấp số</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-list2">Danh sách cấp số</h4>
        </div>
    );
}

export default NavTopProvideNumList;