import "./DetailProvideNum.scss";
import { RiArrowGoBackFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

interface PropsChild {
    handleClosePageDetail: any;
    selectedProvideNum: any;
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
                                <p>{props.selectedProvideNum.cusname}</p>
                                <p>{props.selectedProvideNum.sevname}</p>
                                <p>{props.selectedProvideNum.stt}</p>
                                <p>{props.selectedProvideNum.timeprovide}</p>
                                <p>{props.selectedProvideNum.expiry}</p>
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
                                <p>{props.selectedProvideNum.supply}</p>
                                <div className="status-num-child-2">
                                    <GoDotFill
                                        className={
                                            props.selectedProvideNum.status === "Đang chờ" ? "icon-status-waiting"
                                                : props.selectedProvideNum.status === "Đã sử dụng" ? "icon-status-used"
                                                    : "icon-status-skip"
                                        }
                                    />
                                    <p>{props.selectedProvideNum.status}</p>
                                </div>
                                <p>0948523623</p>
                                <p>aivan@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-back-provide-num">
                <button
                    className="btn-back-provide-num"
                    onClick={() => props.handleClosePageDetail()}
                >
                    <div className="icon-back-provide-num">
                        <RiArrowGoBackFill />
                    </div>
                    <p>Quay lại</p>
                </button>
            </div>
        </div>
    );
}

export default DetailProvideNum;