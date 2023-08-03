import "./Device.scss"
import Header from "../../components/Header/Header";
import { Select } from 'antd';
import { Input } from 'antd';

function Device() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="wrapper-device">
            <Header headName='Thiết bị' />
            <div className="main-device">
                <h3 className="title-main-device">Danh sách thiết bị</h3>

                <div className="top-main-device">
                    <div className="top-status-main-device">
                        <div className="status-main-child">
                            <p>Trạng thái hoạt động</p>
                            <Select
                                className="status-main-child-selected"
                                defaultValue="Tất cả"
                                style={{ width: 270 }}
                                onChange={handleChange}
                                options={[
                                    { value: 'Tất cả', label: 'Tất cả' },
                                    { value: 'Hoạt động', label: 'Hoạt động' },
                                    { value: 'Ngưng hoạt động', label: 'Ngưng hoạt động' },
                                ]}
                            />
                        </div>
                        <div className="status-main-child">
                            <p>Trạng thái kết nối</p>
                            <Select
                                className="status-main-child-selected"
                                defaultValue="Tất cả"
                                style={{ width: 270 }}
                                onChange={handleChange}
                                options={[
                                    { value: 'Tất cả', label: 'Tất cả' },
                                    { value: 'Kết nối', label: 'Kết nối' },
                                    { value: 'Ngưng Kết nối', label: 'Ngưng Kết nối' },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="top-search-main-device">
                        <p>Từ khóa</p>
                        <Input placeholder="Nhập từ khóa" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Device;