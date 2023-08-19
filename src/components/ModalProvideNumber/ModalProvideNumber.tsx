import "./ModalProvideNumber.scss"

function ModalProvideNumber() {
    return (
        <div className="wrapper-modal-provive-number">
            <div className="top-modal-provide">
                <h4 className="title-modal-provide-number">Số thứ tự được cấp</h4>
                <h2 className="number-modal-provide">2001201</h2>
                <p className="desc-modal-provide">DV: Khám răng hàm mặt <strong>(tại quầy số 1)</strong></p>
            </div>
            <div className="footer-modal-provide">
                <div className="footer-modal-provide-child">
                    <p>Thời gian cấp:</p>
                    <p>Hạn sử dụng:</p>
                </div>
                <div className="footer-modal-provide-child1">
                    <p>09:30 11/10/2021</p>
                    <p>17:30 11/10/2021</p>
                </div>
            </div>
        </div>
    );
}

export default ModalProvideNumber;