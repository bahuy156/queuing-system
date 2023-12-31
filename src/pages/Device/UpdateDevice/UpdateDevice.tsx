import "./UpdateDevice.scss"
import { Input } from "antd";
import { Select } from "antd";
import { AiFillCaretDown } from "react-icons/ai"
import { IoClose } from "react-icons/io5"
import { DataTable } from "../../../types"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { updateDevice } from "../../../redux/actions/deviceActions";
import { addDiary } from "../../../redux/actions/diaryActoins";

interface PropsChild {
    handleClosePageUpdate: any
    selectedDeviceUpdate: DataTable | null
}

function UpdateDevice(props: PropsChild) {
    const dispatch: AppDispatch = useDispatch();

    const [codeValue, setCodeValue] = useState<string | undefined>("");
    const [ipValue, setIpValue] = useState<string | undefined>("");
    const [select, setSeclect] = useState<string | undefined>("")

    const deviceCodeValue = props.selectedDeviceUpdate?.code
    const ipAddressValue = props.selectedDeviceUpdate?.ip
    const deviceSelectValue = props.selectedDeviceUpdate?.name
    const id = props.selectedDeviceUpdate?.id

    const deviceServiceValue = props.selectedDeviceUpdate?.services
    const splitServiceValue = deviceServiceValue?.split(", ")

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

    useEffect(() => {
        setCodeValue(deviceCodeValue)
        setIpValue(ipAddressValue)
        setSeclect(deviceSelectValue)
    }, [deviceCodeValue, ipAddressValue, deviceSelectValue, props.selectedDeviceUpdate])

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

    const handleUpdate = async () => {
        if (id) {
            const updatedDevice: DataTable = {
                key: id,
                code: codeValue,
                ip: ipValue,
                name: select,
                status: "Hoạt động",
                connect: "Kết nối",
                services: String(deviceServiceValue),
            };

            const operation = `cập nhật thiết bị có mã ${codeValue}`
            const newDiary = {
                loginname: currAccount.username,
                time: nowDay,
                ip: "192.168.1.1",
                operation: `Thực hiện ${operation}`,
            }

            await dispatch(updateDevice(updatedDevice));
            props.handleClosePageUpdate();
            dispatch(addDiary(newDiary));
        } else {
            console.log("Không tìm thấy id cần cập nhật")
        }
    };

    return (
        <div className="wrapper-update-device">
            <h2 className="title-update-device">Quản lý thiết bị</h2>

            <div className="content-update-device">
                <h3 className="title-content-add-device">Thông tin thiết bị</h3>

                <div className="content-main-update-device">
                    <div className="content-main-update-device-child1">
                        <div className="content-main-update-device-child">
                            <div className="name-content-main-update-device-child">
                                <p>Mã thiết bị</p>
                                <span>*</span>
                            </div>
                            <Input value={codeValue} placeholder="Nhập mã thiết bị" onChange={(e) => setCodeValue(e.target.value)} />
                        </div>
                        <div className="content-main-update-device-child">
                            <div className="name-content-main-update-device-child">
                                <p>Tên thiết bị</p>
                                <span>*</span>
                            </div>
                            <Input value={select} placeholder="Nhập tên thiết bị" />
                        </div>
                        <div className="content-main-update-device-child">
                            <div className="name-content-main-update-device-child">
                                <p>Địa chỉ IP</p>
                                <span>*</span>
                            </div>
                            <Input value={ipValue} placeholder="Nhập địa chỉ IP" onChange={(e) => setIpValue(e.target.value)} />
                        </div>
                    </div>

                    <div className="content-main-update-device-child2">
                        <div className="content-main-update-device-child">
                            <div className="name-content-main-update-device-child">
                                <p>Loại thiết bị</p>
                                <span>*</span>
                            </div>
                            <Select
                                className="update-device-child-selected"
                                placeholder="Chọn loại thiết bị"
                                value={select}
                                suffixIcon={<AiFillCaretDown size={20} style={{ color: '#FF7506' }} />}
                                style={{ width: 572, height: 32 }}
                                onChange={(value: string) => setSeclect(value)}
                                options={[
                                    { value: "Kiosik", label: "Kiosik" },
                                    { value: "Display counter", label: "Display counter" },
                                ]}
                            />
                        </div>
                        <div className="content-main-update-device-child">
                            <div className="name-content-main-update-device-child">
                                <p>Tên đăng nhập</p>
                                <span>*</span>
                            </div>
                            <Input value={'bahuy156'} placeholder="Nhập tài khoản" />
                        </div>
                        <div className="content-main-update-device-child">
                            <div className="name-content-main-update-device-child">
                                <p>Mật khẩu</p>
                                <span>*</span>
                            </div>
                            <Input value={'123456'} placeholder="Nhập mật khẩu" />
                        </div>
                    </div>
                </div>

                <div className="content-bot-update-device">
                    <div className="name-content-bot-update-device">
                        <p>Dịch vụ sử dụng</p>
                        <span>*</span>
                    </div>
                    <div className="main-content-bot-update-device">
                        <div className="main-content-update-device-service">
                            {splitServiceValue?.map((item: any, index: any) => (
                                <button className="btn-service" key={index}>
                                    <span>{item}</span>
                                    <IoClose className="icon-btn-service" size={22} />
                                </button>
                            ))}
                        </div>
                        <Input className="input-update" placeholder="Nhập dịch vụ sử dụng" />
                    </div>
                </div>

                <div className="footer-content-update-device">
                    <span>*</span>
                    <p>Là trường thông tin bắt buộc</p>
                </div>
            </div>

            <div className="button-device">
                <button className="btn-cancel-update" onClick={() => props.handleClosePageUpdate()}>
                    <p>Hủy bỏ</p>
                </button>
                <button className="btn-add" onClick={handleUpdate}>
                    <p>Cập nhật</p>
                </button>
            </div>
        </div>
    );
}

export default UpdateDevice;