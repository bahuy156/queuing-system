import "./NewNumber.scss"
import { AiFillCaretDown } from "react-icons/ai";
import { Select } from "antd";
import { Modal } from 'antd';
import { useState } from "react";
import ModalProvideNumber from "../../../components/ModalProvideNumber/ModalProvideNumber";

interface PropsChild {
    handleClosePageNewNumber: any
}

function NewNumber(props: PropsChild) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="main-new-num">
            <h2 className="title-main-new-num">Cấp số mới</h2>

            <div className="content-main-new-num">
                <h1 className="title-content-new-num">Cấp số mới</h1>
                <p className="desc-content-new-num">Dịch vụ khách hàng lựa chọn</p>
                <Select
                    className="service-customer-content-main-selected"
                    placeholder="Chọn dịch vụ"
                    suffixIcon={
                        <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                    }
                    options={[
                        { value: "Khám tim mạch", label: "Khám tim mạch" },
                        { value: "Khám sản - Phụ khoa", label: "Khám sản - Phụ khoa" },
                        { value: "Khám răng hàm mặt", label: "Khám răng hàm mặt" },
                        { value: "Khám tai mũi họng", label: "Khám tai mũi họng" },
                    ]}
                />
                <div className="btn-content-main-new-num">
                    <button className="btn-cancel-new-num" onClick={() => props.handleClosePageNewNumber()} >Hủy bỏ</button>
                    <button className="btn-print-new-num" onClick={showModal} >In số</button>
                    <Modal
                        open={isModalOpen}
                        centered={true}
                        footer={null}
                        maskClosable={false}
                        onCancel={handleCancel}
                    >
                        <ModalProvideNumber />
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default NewNumber;