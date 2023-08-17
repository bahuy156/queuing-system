import "./UpdateService.scss"
import { Input } from "antd";
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
interface PropsChild {
    handleClosePageUpdate: any
}

function UpdateService(props: PropsChild) {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

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
                                placeholder="Nhập mã thiết bị"
                            />
                        </div>
                        <div className="content-main-update-service-child">
                            <div className="name-content-main-update-service-child">
                                <p>Tên dịch vụ</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập tên thiết bị"
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
                                <Input className="input-desc" placeholder="Mô tả dịch vụ" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-bot-update-service">
                    <h3 className="title-bot-update-service">Quy tắc cấp số</h3>

                    <div className="content-bot-update-service-chill">
                        <div className="content-bot-update-service-chill1">
                            <Checkbox style={{ marginRight: 7 }} onChange={onChange} />
                            <p>Tăng tự động từ:</p>
                            <button>0001</button>
                            <span>đến</span>
                            <button>9999</button>
                        </div>
                        <div className="content-bot-update-service-chill2">
                            <Checkbox style={{ marginRight: 7 }} onChange={onChange} />
                            <p>Prefix:</p>
                            <button>0001</button>
                        </div>
                        <div className="content-bot-update-service-chill2">
                            <Checkbox style={{ marginRight: 7 }} onChange={onChange} />
                            <p>Surfix:</p>
                            <button>0001</button>
                        </div>
                        <div className="content-bot-update-service-chill2">
                            <Checkbox style={{ marginRight: 7 }} onChange={onChange} />
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
                    onClick={() => props.handleClosePageUpdate()}
                >
                    <p>Cập nhật</p>
                </button>
            </div>
        </div>
    );
}

export default UpdateService;