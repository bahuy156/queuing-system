import "./UpdateService.scss"
import { Input } from "antd";
import { Checkbox } from 'antd';
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useEffect, useState } from "react";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { updateServives } from "../../../redux/actions/serviceActions";
import { DataTableSev } from "../../../types";

interface PropsChild {
    handleClosePageUpdate: any
    setSelectedServices: any
}

function UpdateService(props: PropsChild) {
    const dispatch: AppDispatch = useDispatch()

    const [codeValue, setCodeValue] = useState<string | undefined>("")
    const [nameValue, setNameValue] = useState<string | undefined>("")
    const [descValue, setDescValue] = useState<string | undefined>("")

    const sevCodeValue = props.setSelectedServices?.code;
    const sevNameValue = props.setSelectedServices?.servicename;
    const sevDescValue = props.setSelectedServices?.desc;
    const idUpdate = props.setSelectedServices?.id

    useEffect(() => {
        setCodeValue(sevCodeValue)
        setNameValue(sevNameValue)
        setDescValue(sevDescValue)
    }, [sevCodeValue, sevNameValue, sevDescValue])

    const handleUpdate = async () => {
        if (idUpdate) {
            const updateServices: DataTableSev = {
                key: idUpdate,
                code: codeValue,
                servicename: nameValue,
                desc: descValue,
                status: "Hoạt động",
            }

            await dispatch(updateServives(updateServices))
            props.handleClosePageUpdate()
        } else {
            console.log("Update không thành công")
        }
    }

    return (
        <div className="wrapper-update-service">
            <h2 className="title-update-service">Quản lý dịch vụ</h2>

            <div className="content-update-service">
                <h3 className="title-content-update-service">Thông tin dịch vụ</h3>

                <div className="content-main-update-service">
                    <div className="content-main-update-service-child1">
                        <div className="content-main-update-service-child">
                            <div className="name-content-main-update-service-child">
                                <p>Mã dịch vụ</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={codeValue}
                                placeholder="Nhập mã thiết bị"
                                onChange={(e) => setCodeValue(e.target.value)}
                            />
                        </div>
                        <div className="content-main-update-service-child">
                            <div className="name-content-main-update-service-child">
                                <p>Tên dịch vụ</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={nameValue}
                                placeholder="Nhập tên thiết bị"
                                onChange={(e) => setNameValue(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="content-main-update-service-child2">
                        <div className="content-main-update-service-child">
                            <div className="name-content-main-update-service-child">
                                <p>Mô tả</p>
                                <span>*</span>
                            </div>
                            <div className="input-content-main-update-service-child">
                                <Input
                                    value={descValue}
                                    className="input-desc"
                                    placeholder="Mô tả dịch vụ"
                                    onChange={(e) => setDescValue(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-bot-update-service">
                    <h3 className="title-bot-update-service">Quy tắc cấp số</h3>

                    <div className="content-bot-update-service-chill">
                        <div className="content-bot-update-service-chill1">
                            <Checkbox style={{ marginRight: 7 }} />
                            <p>Tăng tự động từ:</p>
                            <button>0001</button>
                            <span>đến</span>
                            <button>9999</button>
                        </div>
                        <div className="content-bot-update-service-chill2">
                            <Checkbox style={{ marginRight: 7 }} />
                            <p>Prefix:</p>
                            <button>0001</button>
                        </div>
                        <div className="content-bot-update-service-chill2">
                            <Checkbox style={{ marginRight: 7 }} />
                            <p>Surfix:</p>
                            <button>0001</button>
                        </div>
                        <div className="content-bot-update-service-chill2">
                            <Checkbox style={{ marginRight: 7 }} />
                            <p>Reset mỗi ngày</p>
                        </div>
                    </div>
                </div>

                <div className="footer-content-update-service">
                    <span>*</span>
                    <p>Là trường thông tin bắt buộc</p>
                </div>
            </div>

            <div className="button-service">
                <button
                    className="btn-cancel"
                    onClick={() => props.handleClosePageUpdate()}
                >
                    <p>Hủy bỏ</p>
                </button>
                <button
                    className="btn-update2"
                    onClick={handleUpdate}
                >
                    <p>Cập nhật</p>
                </button>
            </div>
        </div>
    );
}

export default UpdateService;