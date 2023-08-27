import "./AddDevice.scss";
import { Input } from "antd";
import { Select } from "antd";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { addDevices } from "../../../redux/actions/deviceActions";
import { addDiary } from "../../../redux/actions/diaryActoins";

interface PropsChild {
    handleClosePageAdd: any;
}

function AddDevice(props: PropsChild) {
    const dispatch: AppDispatch = useDispatch();
    const dataAccount = useSelector((state: RootState) => state.account.datas)
    console.log(dataAccount.map((item) => item.loginname))

    const [codeValue, setCodeValue] = useState<string>("");
    const [ipValue, setIpValue] = useState<string>("");
    const [select, setSeclect] = useState<string>("")
    const [userNameValue, setUserNameValue] = useState<string>("");
    const [passValue, setPassValue] = useState<string>("");
    const [serviceValue, setServiceValue] = useState<string>("");

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

    const handleAddDevices = async () => {
        if (codeValue && ipValue && serviceValue) {
            const newDevice = {
                key: "",
                code: codeValue,
                name: select,
                ip: ipValue,
                status: "Hoạt động",
                connect: "Kết nối",
                services: serviceValue,
            };

            const operation = `thêm thiết bị ${select}`
            const newDiary = {
                loginname: currAccount.username,
                time: nowDay,
                ip: "192.168.1.1",
                operation: `Thực hiện ${operation}`,
            }

            await dispatch(addDevices(newDevice));
            props.handleClosePageAdd();
            dispatch(addDiary(newDiary));
        } else {
            alert("Vui lòng điền đầy đủ thông tin!");
        }
    };

    return (
        <div className="wrapper-add-device">
            <h2 className="title-add-device">Quản lý thiết bị</h2>

            <div className="content-add-device">
                <h3 className="title-content-add-device">Thông tin thiết bị</h3>

                <div className="content-main-add-device">
                    <div className="content-main-add-device-child1">
                        <div className="content-main-add-device-child">
                            <div className="name-content-main-add-device-child">
                                <p>Mã thiết bị</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={codeValue}
                                placeholder="Nhập mã thiết bị"
                                onChange={(e) => setCodeValue(e.target.value)}
                            />
                        </div>
                        <div className="content-main-add-device-child">
                            <div className="name-content-main-add-device-child">
                                <p>Tên thiết bị</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={select}
                                placeholder="Nhập tên thiết bị"
                            />
                        </div>
                        <div className="content-main-add-device-child">
                            <div className="name-content-main-add-device-child">
                                <p>Địa chỉ IP</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={ipValue}
                                placeholder="Nhập địa chỉ IP"
                                onChange={(e) => setIpValue(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="content-main-add-device-child2">
                        <div className="content-main-add-device-child">
                            <div className="name-content-main-add-device-child">
                                <p>Loại thiết bị</p>
                                <span>*</span>
                            </div>
                            <Select
                                className="add-device-child-selected"
                                placeholder="Chọn loại thiết bị"
                                onChange={(value: string) => setSeclect(value)}
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                style={{ width: 572, height: 32 }}
                                options={[
                                    { value: "Kiosik", label: "Kiosik" },
                                    { value: "Display counter", label: "Display counter" },
                                ]}
                            />
                        </div>
                        <div className="content-main-add-device-child">
                            <div className="name-content-main-add-device-child">
                                <p>Tên đăng nhập</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={userNameValue}
                                placeholder="Nhập tài khoản"
                                onChange={(e) => setUserNameValue(e.target.value)}
                            />
                        </div>
                        <div className="content-main-add-device-child">
                            <div className="name-content-main-add-device-child">
                                <p>Mật khẩu</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={passValue}
                                placeholder="Nhập mật khẩu"
                                onChange={(e) => setPassValue(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="content-bot-add-device">
                    <div className="name-content-bot-add-device">
                        <p>Dịch vụ sử dụng</p>
                        <span>*</span>
                    </div>
                    <Input
                        value={serviceValue}
                        className="input-add"
                        placeholder="Nhập dịch vụ sử dụng"
                        onChange={(e) => setServiceValue(e.target.value)}
                    />
                </div>

                <div className="footer-content-add-device">
                    <span>*</span>
                    <p>Là trường thông tin bắt buộc</p>
                </div>
            </div>

            <div className="button-device">
                <button
                    className="btn-cancel"
                    onClick={() => props.handleClosePageAdd()}
                >
                    <p>Hủy bỏ</p>
                </button>
                <button className="btn-add" onClick={handleAddDevices}>
                    <p>Thêm thiết bị</p>
                </button>
            </div>
        </div>
    );
}

export default AddDevice;