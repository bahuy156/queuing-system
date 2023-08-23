import "./NavTopAccountManageAdd.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

interface PropsChild {
    handleBackList: any
}

function NavTopAccountManageAdd(props: PropsChild) {
    return (
        <div className="wrapper-navtop-device-add">
            <h4 className="text-device-add1">Cài đặt hệ thống</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-add2" onClick={props.handleBackList} >Quản lý tài khoản</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-add3">Thêm tài khoản</h4>
        </div>
    );
}

export default NavTopAccountManageAdd;