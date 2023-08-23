import "./NavTopServiceUpdate.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

interface PropsChild {
    handleBackList: any
}

function NavTopServiceUpdate(props: PropsChild) {
    return (
        <div className="wrapper-navtop-device-update">
            <h4 className="text-device-update1">Dịch vụ</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-update2" onClick={props.handleBackList} >Danh sách dịch vụ</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-update3">Cập nhật</h4>
        </div>
    );
}

export default NavTopServiceUpdate;