// type init table
export interface DataType {
    key: string;
    deviceCode: string | undefined;
    deviceName: string | undefined;
    ipAddress: string | undefined;
    statusActive: string,
    statusConnect: string,
    useServices: string;
}

// type account 
export interface DataAccount {
    id?: string,
    username: string,
    sdt: string,
    email: string,
    loginname: string,
    password: string,
    role: string,
    status: string,
}

// type table device
export interface DataTable {
    id?: string;
    key: string,
    code: string | undefined,
    name: string | undefined,
    ip: string | undefined,
    status: string,
    connect: string,
    services: string
}

// type table services
export interface DataTableSev {
    id?: string,
    key: string,
    code: string | undefined,
    servicename: string | undefined,
    desc: string | undefined,
    status: string
}

// type table detail service
export interface DataDetailService {
    key: string,
    stt: string,
    status: string
}

// type table provide number
export interface DataTableProvideNum {
    id?: string,
    stt: string,
    cusname: string,
    sevname: string,
    timeprovide: string,
    expiry: string,
    status: string,
    supply: string,
}

// type table report
export interface DataTableReport {
    key: string,
    stt: string,
    nameSev: string,
    timeProvide: string,
    status: string,
    supply: string,
}

// ty table list role 
export interface DataTableListRole {
    key: string,
    nameRole: string,
    userNum: string,
    desc: string,
}

// type table list account 
export interface DataTableListAccount {
    id?: string,
    key: string,
    nameLogin: string,
    name: string,
    phone: string,
    email: string,
    role: string,
    status: string,
}

// type table user log
export interface DataTableUserLog {
    key: string,
    nameLogin: string,
    time: string,
    ip: string,
    operations: string,
}