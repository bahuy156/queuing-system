import "./AddRole.scss"
import { Input } from "antd";
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface PropsChild {
    handleClosePageAdd: any
}

function AddRole(props: PropsChild) {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className="wrapper-add-role">
            <h2 className="title-add-role">Danh sách vai trò</h2>

            <div className="content-add-role">
                <h3 className="title-content-add-role">Thông tin vai trò</h3>
                <div className="content-add-role-child">
                    <div className="content-main-add-role">
                        <div className="content-main-add-role-child">
                            <div className="name-content-main-add-role-child">
                                <p>Tên vai trò</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập tên vai trò"
                            />
                        </div>
                        <div className="content-main-add-role-child">
                            <div className="name-content-main-add-role-child">
                                <p>Mô tả</p>
                                <span>*</span>
                            </div>
                            <div className="input-content-main-add-role-child">
                                <Input className="input-desc" placeholder="Mô tả dịch vụ" />
                            </div>
                        </div>
                        <div className="footer-content-add-role">
                            <span>*</span>
                            <p>Là trường thông tin bắt buộc</p>
                        </div>
                    </div>

                    <div className="content-bot-add-role">
                        <div className="title-content-bot-add-role">
                            <p>Phân quyền chức năng</p>
                            <span>*</span>
                        </div>
                        <div className="main-content-bot-add-role">
                            <div className="main-content-bot-add-role-child">
                                <h4 className="title-main-content-bot-add-role-child">Nhóm chức năng A</h4>
                                <div className="content-bot-add-role-child">
                                    <Checkbox className="checkbox-add-role-child" onChange={onChange} >Tất cả</Checkbox>
                                    <Checkbox className="checkbox-add-role-child" onChange={onChange} >Chức năng x</Checkbox>
                                    <Checkbox className="checkbox-add-role-child" onChange={onChange} >Chức năng y</Checkbox>
                                    <Checkbox className="checkbox-add-role-child" onChange={onChange} >Chức năng z</Checkbox>
                                </div>
                            </div>
                            <div className="main-content-bot-add-role-child">
                                <h4 className="title-main-content-bot-add-role-child">Nhóm chức năng B</h4>
                                <div className="content-bot-add-role-child">
                                    <Checkbox className="checkbox-add-role-child" onChange={onChange} >Tất cả</Checkbox>
                                    <Checkbox className="checkbox-add-role-child" onChange={onChange} >Chức năng x</Checkbox>
                                    <Checkbox className="checkbox-add-role-child" onChange={onChange} >Chức năng y</Checkbox>
                                    <Checkbox className="checkbox-add-role-child" onChange={onChange} >Chức năng z</Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-role">
                <button
                    className="btn-cancel-role"
                    onClick={() => props.handleClosePageAdd()}
                >
                    <p>Hủy bỏ</p>
                </button>
                <button
                    className="btn-add-role"
                    onClick={() => props.handleClosePageAdd()}
                >
                    <p>Thêm</p>
                </button>
            </div>
        </div>
    );
}

export default AddRole;