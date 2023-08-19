import "./UpdateRole.scss"
import { Input } from "antd";
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

interface PropsChild {
    handleClosePageUpdate: any
}

function UpdateRole(props: PropsChild) {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className="wrapper-update-role">
            <h2 className="title-update-role">Danh sách vai trò</h2>

            <div className="content-update-role">
                <h3 className="title-content-update-role">Thông tin vai trò</h3>
                <div className="content-update-role-child">
                    <div className="content-main-update-role">
                        <div className="content-main-update-role-child">
                            <div className="name-content-main-update-role-child">
                                <p>Tên vai trò</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập tên vai trò"
                            />
                        </div>
                        <div className="content-main-update-role-child">
                            <div className="name-content-main-update-role-child">
                                <p>Mô tả</p>
                                <span>*</span>
                            </div>
                            <div className="input-content-main-update-role-child">
                                <Input className="input-desc" placeholder="Mô tả dịch vụ" />
                            </div>
                        </div>
                        <div className="footer-content-update-role">
                            <span>*</span>
                            <p>Là trường thông tin bắt buộc</p>
                        </div>
                    </div>

                    <div className="content-bot-update-role">
                        <div className="title-content-bot-update-role">
                            <p>Phân quyền chức năng</p>
                            <span>*</span>
                        </div>
                        <div className="main-content-bot-update-role">
                            <div className="main-content-bot-update-role-child">
                                <h4 className="title-main-content-bot-update-role-child">Nhóm chức năng A</h4>
                                <div className="content-bot-update-role-child">
                                    <Checkbox className="checkbox-update-role-child" onChange={onChange} >Tất cả</Checkbox>
                                    <Checkbox className="checkbox-update-role-child" onChange={onChange} >Chức năng x</Checkbox>
                                    <Checkbox className="checkbox-update-role-child" onChange={onChange} >Chức năng y</Checkbox>
                                    <Checkbox className="checkbox-update-role-child" onChange={onChange} >Chức năng z</Checkbox>
                                </div>
                            </div>
                            <div className="main-content-bot-update-role-child">
                                <h4 className="title-main-content-bot-update-role-child">Nhóm chức năng B</h4>
                                <div className="content-bot-update-role-child">
                                    <Checkbox className="checkbox-update-role-child" onChange={onChange} >Tất cả</Checkbox>
                                    <Checkbox className="checkbox-update-role-child" onChange={onChange} >Chức năng x</Checkbox>
                                    <Checkbox className="checkbox-update-role-child" onChange={onChange} >Chức năng y</Checkbox>
                                    <Checkbox className="checkbox-update-role-child" onChange={onChange} >Chức năng z</Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-role">
                <button
                    className="btn-cancel-role"
                    onClick={() => props.handleClosePageUpdate()}
                >
                    <p>Hủy bỏ</p>
                </button>
                <button
                    className="btn-update-role"
                    onClick={() => props.handleClosePageUpdate()}
                >
                    <p>Cập nhật</p>
                </button>
            </div>
        </div>
    );
}

export default UpdateRole