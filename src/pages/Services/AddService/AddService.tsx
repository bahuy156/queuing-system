import "./AddService.scss"
import { Input } from "antd";
import { Checkbox } from 'antd';
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useState } from "react"
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { addServices } from "../../../redux/actions/serviceActions";
import { addDiary } from "../../../redux/actions/diaryActoins";

interface PropsChild {
    handleClosePageAdd: any
}

function AddService(props: PropsChild) {
    const dispatch: AppDispatch = useDispatch()

    const [codeValue, setCodeValue] = useState<string>("");
    const [nameValue, setNameValue] = useState<string>("");
    const [descValue, setDescValue] = useState<string>("");

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

    // handle get current account
    const getAccountStorage = () => {
        const accountStorage = localStorage.getItem("currentAccount")

        if (accountStorage) {
            return JSON.parse(accountStorage)
        } else {
            return null
        }
    }

    const currAccount = getAccountStorage();

    const handleAddServices = async () => {
        if (codeValue && nameValue && descValue) {
            const newServices = {
                key: "",
                code: codeValue,
                servicename: nameValue,
                desc: descValue,
                status: "Hoạt động"
            }

            const operation = `thêm dịch vụ ${nameValue.toLowerCase()}`
            const newDiary = {
                loginname: currAccount.username,
                time: nowDay,
                ip: "192.168.1.1",
                operation: `Thực hiện ${operation}`,
            }

            await dispatch(addServices(newServices))
            props.handleClosePageAdd()
            dispatch(addDiary(newDiary));
        } else {
            alert("Vui lòng điền đầy đủ thông tin!");
        }
    }

    return (
        <div className="wrapper-add-service">
            <h2 className="title-add-service">Quản lý dịch vụ</h2>

            <div className="content-add-service">
                <h3 className="title-content-add-service">Thông tin dịch vụ</h3>

                <div className="content-main-add-service">
                    <div className="content-main-add-service-child1">
                        <div className="content-main-add-service-child">
                            <div className="name-content-main-add-service-child">
                                <p>Mã dịch vụ</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập mã thiết bị"
                                onChange={(e) => setCodeValue(e.target.value)}
                            />
                        </div>
                        <div className="content-main-add-service-child">
                            <div className="name-content-main-add-service-child">
                                <p>Tên dịch vụ</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập tên thiết bị"
                                onChange={(e) => setNameValue(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="content-main-add-service-child2">
                        <div className="content-main-add-service-child">
                            <div className="name-content-main-add-service-child">
                                <p>Mô tả</p>
                                <span>*</span>
                            </div>
                            <div className="input-content-main-add-service-child">
                                <Input
                                    className="input-desc"
                                    placeholder="Mô tả dịch vụ"
                                    onChange={(e) => setDescValue(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-bot-add-service">
                    <h3 className="title-bot-add-service">Quy tắc cấp số</h3>

                    <div className="content-bot-add-service-chill">
                        <div className="content-bot-add-service-chill1">
                            <Checkbox style={{ marginRight: 7 }} />
                            <p>Tăng tự động từ:</p>
                            <button>0001</button>
                            <span>đến</span>
                            <button>9999</button>
                        </div>
                        <div className="content-bot-add-service-chill2">
                            <Checkbox style={{ marginRight: 7 }} />
                            <p>Prefix:</p>
                            <button>0001</button>
                        </div>
                        <div className="content-bot-add-service-chill2">
                            <Checkbox style={{ marginRight: 7 }} />
                            <p>Surfix:</p>
                            <button>0001</button>
                        </div>
                        <div className="content-bot-add-service-chill2">
                            <Checkbox style={{ marginRight: 7 }} />
                            <p>Reset mỗi ngày</p>
                        </div>
                    </div>
                </div>

                <div className="footer-content-add-service">
                    <span>*</span>
                    <p>Là trường thông tin bắt buộc</p>
                </div>
            </div>

            <div className="button-service">
                <button
                    className="btn-cancel"
                    onClick={() => props.handleClosePageAdd()}
                >
                    <p>Hủy bỏ</p>
                </button>
                <button
                    className="btn-add"
                    onClick={handleAddServices}
                >
                    <p>Thêm dịch vụ</p>
                </button>
            </div>
        </div>
    );
}

export default AddService;