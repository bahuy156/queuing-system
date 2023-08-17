import "./DetailProvideNum.scss"
import { RiArrowGoBackFill } from "react-icons/ri"
import { GoDotFill } from "react-icons/go";

interface PropsChild {
    handleClosePageDetail: any
}

function DetailProvideNum(props: PropsChild) {
    return (
        <div className="wrapper-detail-provide-num">
            <div className="main-detail-provide-num">
                <h2 className="title-detail-provide-num">Quản lý cấp số</h2>

                <div className="content-detail-provide-num">
                    <h3 className="title-content-detail-provide-num">Thông tin cấp số</h3>

                    <div className="wrapper-content-main-detail-provide-num">
                        <div className="content-main-detail-provide-num">
                            <div className="content-main-detail-provide-num-child">
                                <p>Họ tên:</p>
                                <p>Tên dịch vụ:</p>
                                <p>Số thứ tự:</p>
                                <p>Thời gian cấp:</p>
                                <p>Hạn sử dụng:</p>
                            </div>
                            <div className="content-main-detail-provide-num-child2">
                                <p>Lê Huỳnh Ái Vân</p>
                                <p>Khám tim mạch</p>
                                <p>2001201</p>
                                <p>14:35 - 07/11/2021</p>
                                <p>18:00 - 07/11/2021</p>
                            </div>
                        </div>
                        <div className="content-main-detail-provide-num">
                            <div className="content-main-detail-provide-num-child">
                                <p>Nguồn cấp:</p>
                                <p>Trạng thái:</p>
                                <p>Số điện thoại:</p>
                                <p>Địa chỉ email:</p>
                            </div>
                            <div className="content-main-detail-provide-num-child2">
                                <p>Kiosk</p>
                                <div className="status-num-child-2">
                                    <GoDotFill className="icon-status-num-child-2" />
                                    <p>Đang chờ</p>
                                </div>
                                <p>0948523623</p>
                                <p>nguyendung@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-back-provide-num">
                <button className="btn-back-provide-num" onClick={() => props.handleClosePageDetail()} >
                    <div className="icon-back-provide-num"><RiArrowGoBackFill /></div>
                    <p>Quay lại</p>
                </button>
            </div>
        </div>
    );
}

export default DetailProvideNum;