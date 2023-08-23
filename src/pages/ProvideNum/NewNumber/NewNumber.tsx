import "./NewNumber.scss"
import { AiFillCaretDown } from "react-icons/ai";
import { Select } from "antd";
import { Modal } from 'antd';
import { useEffect, useState } from "react";
import ModalProvideNumber from "../../../components/ModalProvideNumber/ModalProvideNumber";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "../../../redux/actions/provideNumActions";
import { fetchAccount } from "../../../redux/actions/accountActions";

interface PropsChild {
    handleClosePageNewNumber: any
}

function NewNumber(props: PropsChild) {
    const dispatch: AppDispatch = useDispatch()
    const dataProvide = useSelector((state: RootState) => state.provideNum.datas)
    const dataCurAccount = useSelector((state: RootState) => state.account.datas)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [valueSelect, setValueSelect] = useState<string>("")

    const nameUser = dataCurAccount.map((item) => item.username)

    const sttProvice = dataProvide.map((item) => Number(item.stt))
    const maxSttProvide = Math.max(...sttProvice) + 1;

    const time = new Date()
    const day = time.getDate()
    const day2 = Number(day) < 10 ? `0${day}` : day
    const month = time.getMonth() + 1
    const month2 = Number(month) < 10 ? `0${month}` : month
    const year = time.getFullYear()
    const hours = time.getHours()
    const hours2 = Number(hours) < 10 ? `0${hours}` : hours
    const minute = time.getMinutes()
    const minute2 = Number(minute) < 10 ? `0${minute}` : minute
    const nowDay = `${hours2}:${minute2} - ${day2}/${month2}/${year}`
    const expiryDay = `${hours2}:${minute2} - ${day + 5}/${month2}/${year}`

    // handle add new number
    const handleAddNumber = async () => {
        if (valueSelect) {
            const newNumber = {
                stt: maxSttProvide.toString(),
                cusname: nameUser[0],
                sevname: valueSelect,
                timeprovide: nowDay,
                expiry: expiryDay,
                status: "Đang chờ",
                supply: "Hệ thống"
            }

            setIsModalOpen(true);
            await dispatch(addNumber(newNumber));
        } else {
            alert("Vui lòng chọn dịch vụ cần cấp số")
        }
    }

    // handle get data account
    useEffect(() => {
        dispatch(fetchAccount())
    }, [dispatch])

    // handle show modal
    const handleCancel = () => {
        setIsModalOpen(false);
        props.handleClosePageNewNumber()
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
                    onChange={(value: string) => setValueSelect(value)}
                    options={[
                        { value: "Khám tim mạch", label: "Khám tim mạch" },
                        { value: "Khám sản - Phụ khoa", label: "Khám sản - Phụ khoa" },
                        { value: "Khám răng hàm mặt", label: "Khám răng hàm mặt" },
                        { value: "Khám tai mũi họng", label: "Khám tai mũi họng" },
                    ]}
                />
                <div className="btn-content-main-new-num">
                    <button className="btn-cancel-new-num" onClick={() => props.handleClosePageNewNumber()} >Hủy bỏ</button>
                    <button className="btn-print-new-num" onClick={handleAddNumber} >In số</button>
                    <Modal
                        open={isModalOpen}
                        centered={true}
                        footer={null}
                        maskClosable={false}
                        onCancel={handleCancel}
                    >
                        <ModalProvideNumber
                            maxSttProvide={maxSttProvide - 1}
                            servives={valueSelect}
                            timeProvide={nowDay}
                            expiry={expiryDay}
                        />
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default NewNumber;