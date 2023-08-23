import "./NavTopDeviceAdd.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

interface PropsChild {
    handleBackList: any
}

function NavTopDeviceAdd(props: PropsChild) {
    return (
        <div className="wrapper-navtop-device-add">
            <h4 className="text-device-add1">Thiết bị</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-add2" onClick={props.handleBackList} >Danh sách thiết bị</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-add3">Thêm thiết bị</h4>
        </div>
    );
}

export default NavTopDeviceAdd;