import "./NavTopProvideNumAdd.scss"
import { MdKeyboardArrowRight } from "react-icons/md"

interface PropsChild {
    handleBackList: any
}

function NavTopProvideNumAdd(props: PropsChild) {
    return (
        <div className="wrapper-navtop-device-add">
            <h4 className="text-device-add1">Cấp số</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-add2" onClick={props.handleBackList} >Danh sách cấp số</h4>
            <MdKeyboardArrowRight className="icon-nav-top" />
            <h4 className="text-device-add3">Cấp số mới</h4>
        </div>
    );
}

export default NavTopProvideNumAdd;