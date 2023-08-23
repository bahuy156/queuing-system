import "./NavTopServiceDetail.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

interface PropsChild {
    handleBackList: any
}

function NavTopServiceDetail(props: PropsChild) {
    return (
        <div className="wrapper-navtop-device-detail">
            <h4 className="text-device-detail1">Dịch vụ</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-detail2" onClick={props.handleBackList} >Danh sách dịch vụ</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-detail3">Chi tiết</h4>
        </div>
    );
}

export default NavTopServiceDetail;