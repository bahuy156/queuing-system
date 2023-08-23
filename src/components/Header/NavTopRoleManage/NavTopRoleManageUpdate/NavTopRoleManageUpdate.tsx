import "./NavTopRoleManageUpdate.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

interface PropsChild {
    handleBackList: any
}

function NavTopRoleManageUpdate(props: PropsChild) {
    return (
        <div className="wrapper-navtop-device-update">
            <h4 className="text-device-update1">Cài đặt hệ thống</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-update2" onClick={props.handleBackList} >Quản lý vai trò</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-update3">Cập nhật vai trò</h4>
        </div>
    );
}

export default NavTopRoleManageUpdate;