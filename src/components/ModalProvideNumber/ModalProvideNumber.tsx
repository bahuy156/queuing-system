import "./ModalProvideNumber.scss"

interface PropsChild {
    maxSttProvide: any,
    servives: any,
    timeProvide: any,
    expiry: any
}

function ModalProvideNumber(props: PropsChild) {
    return (
        <div className="wrapper-modal-provive-number">
            <div className="top-modal-provide">
                <h4 className="title-modal-provide-number">Số thứ tự được cấp</h4>
                <h2 className="number-modal-provide">{props.maxSttProvide}</h2>
                <p className="desc-modal-provide">DV: {props.servives} <strong>(tại quầy số 1)</strong></p>
            </div>
            <div className="footer-modal-provide">
                <div className="footer-modal-provide-child">
                    <p>Thời gian cấp:</p>
                    <p>Hạn sử dụng:</p>
                </div>
                <div className="footer-modal-provide-child1">
                    <p>{props.timeProvide}</p>
                    <p>{props.expiry}</p>
                </div>
            </div>
        </div>
    );
}

export default ModalProvideNumber;