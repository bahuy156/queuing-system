import "./UpdateDevice.scss"
import { Input } from "antd";
import { Select } from "antd";
import { AiFillCaretDown } from "react-icons/ai"
import { IoClose } from "react-icons/io5"
import { DataTable } from "../../../types"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../../redux/reducer";
import { updateDevice } from "../../../redux/actions/actions"

interface PropsChild {
    handleClosePageUpdate: any
    selectedDeviceUpdate: DataTable | null
}

function UpdateDevice(props: PropsChild) {
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

    const [codeValue, setCodeValue] = useState<string | undefined>("");
    const [ipValue, setIpValue] = useState<string | undefined>("");
    const [select, setSeclect] = useState<string | undefined>("")

    const deviceCodeValue = props.selectedDeviceUpdate?.code
    const ipAddressValue = props.selectedDeviceUpdate?.ip
    const deviceSelectValue = props.selectedDeviceUpdate?.name

    const deviceServiceValue = props.selectedDeviceUpdate?.services
    const splitServiceValue = deviceServiceValue?.split(", ")

    const id = props.selectedDeviceUpdate?.key
    console.log(id);

    useEffect(() => {
        setCodeValue(deviceCodeValue)
        setIpValue(ipAddressValue)
        setSeclect(deviceSelectValue)
    }, [deviceCodeValue, ipAddressValue, deviceSelectValue, props.selectedDeviceUpdate])

    const handleUpdate = () => {
        if (id) {
            const updatedDevice: DataTable = {
                key: id,
                code: codeValue,
                ip: ipValue,
                name: select,
                status: "Hoạt động",
                connect: "Kết nối",
                services: "",
            };

            dispatch(updateDevice(id, updatedDevice));
            props.handleClosePageUpdate();
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