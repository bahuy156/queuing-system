import "./NavTopReportList.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

function NavTopReportList() {
    return (
        <div className="wrapper-navtop-device-list">
            <h4 className="text-device-list1">Báo cáo</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-list2">Lập báo cáo</h4>
        </div>
    );
}

export default NavTopReportList;