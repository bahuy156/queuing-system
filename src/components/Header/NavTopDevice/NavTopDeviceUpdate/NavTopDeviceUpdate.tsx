import "./NavTopDeviceUpdate.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

interface PropsChild {
    handleBackList: any
}

function NavTopDeviceUpdate(props: PropsChild) {
    return (
        <div className="wrapper-navtop-device-update">
            <h4 className="text-device-update1">Thiết bị</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-update2" onClick={props.handleBackList} >Danh sách thiết bị</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-update3">Cập nhật thiết bị</h4>
        </div>
    );
}

export default NavTopDeviceUpdate;