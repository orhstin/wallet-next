import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Button, Alert, Popconfirm } from "antd";
import PhraseBox from "../components/PhraseBox";
import { useGlobalState } from "../context";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Phrase: NextPage = () => {
    const [loading , setLoading] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const { setAccount, mnemonic, setMnemonic } = useGlobalState();

    const router = useRouter();

    useEffect(() => {
        const generatedMnemonic = "";

        setMnemonic(generatedMnemonic);

        const seed = new Uint8Array();

        const newAccount = null;

        setAccount(newAccount);
    }, []);

    const showPopconfirm = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        router.push("/wallet");
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const warning = "Keep this phrase secret..."
    return(
        <>
            <h1 className={"title"}>Secret Recovery Phrase</h1>

            <p>
                This recovery phrase is generated with private keys.
            </p>
            <Alert message={warning} type="warning" />

            <p>
                Store somewhere safe bozo.
            </p>

            <PhraseBox mnemonic={mnemonic}></PhraseBox>

            {!loading && (
                <Popconfirm
                    title="Did you copy the phrase"
                    visible={visible}
                    onConfirm={handleOk}
                    okButtonProps={{ loading: loading}}
                    onCancel = {handleCancel}
                    cancelText={"No"}
                    okText={"Yes"}>
                        <Button type="primary" onClick={showPopconfirm}>
                            Finish
                        </Button>
                </Popconfirm>
            )}
            {loading && <LoadingOutlined style={{ fontSize: 24 }} spin />}
        </>
    );
};
export default Phrase;