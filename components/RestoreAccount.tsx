import React, { useState, useEffect, ReactElement } from "react";
import { Button } from "antd";
import { LoadingOutlined, UnlockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Card } from "../styles/Styledcomponents.styles";

const RestoreAccount = (): ReactElement => {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(false);
    }, []);

    const handleGetWallet = () => {
        setLoading(true);
    }

    return (
        <Card>
            <UnlockOutlined
                style={{ fontSize:"3rem", margin: "2rem 0", display: "block" }}
            />

            <h2>Import Wallet</h2>
            <p>Use secret recovery phrase</p>
            <div className={"buttons"}>
                {!loading && (
                    <Link href={`/recover`} passHref>
                        <Button onClick={handleGetWallet}> Get Existing Wallet </Button>
                    </Link>
                )}
                {loading && (
                    <Button className={"disabledButton"} disabled>
                        <LoadingOutlined spin />
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default RestoreAccount;