import Header from "../../components/Header/Header";
import { useState } from "react";
import ListProvideNum from "./ListProvideNum/ListProvideNum";
import NewNumber from "./NewNumber/NewNumber";
import DetailProvideNum from "./DetailProvideNum/DetailProvideNum";

function ProvideNum() {
    const [pageProvideNum, setPageProvideNum] = useState<string>("0");

    const handleOpenPageDetail = () => {
        setPageProvideNum("2")
    }

    return (
        <div>
            <Header headName='Cấp số' />
            {pageProvideNum === "0" ? (
                <ListProvideNum
                    handleOpentPageNewNum={() => setPageProvideNum("1")}
                    handleOpenPageDetail={handleOpenPageDetail}
                />
            ) : pageProvideNum === "1" ? (
                <NewNumber />
            ) : (
                <DetailProvideNum handleClosePageDetail={() => setPageProvideNum("0")} />
            )}
        </div>
    );
}

export default ProvideNum;