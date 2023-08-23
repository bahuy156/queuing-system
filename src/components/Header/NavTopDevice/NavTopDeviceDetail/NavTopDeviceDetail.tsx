import "./NavTopDeviceDetail.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

interface PropsChild {
    handleBackList: any
}

function NavTopDeviceDetail(props: PropsChild) {
    return (
        <div className="wrapper-navtop-device-detail">
            <h4 className="text-device-detail1">Thiết bị</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-detail2" onClick={props.handleBackList} >Danh sách thiết bị</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-detail3">Chi tiết thiết bị</h4>
        </div>
    );
}

export default NavTopDeviceDetail;