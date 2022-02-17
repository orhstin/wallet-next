import React, { useState, ReactElement } from "react";
import { message } from "antd";
import { useGlobalState } from "../context";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
const converter = require("number-to-words");
import { LoadingOutlined } from "@ant-design/icons";
import { refreshBalance } from "../utils";
import {
    CheckContainer,
    CheckImage,
    CheckFrom,
    Processed,
    CheckDate,
    RecipientInput,
    AmountInput,
    SignatureInput,
    AmountText,
    RatioText,
} from "../styles/Styledcomponents.styles";

type FormT = {
    from: string;
    to: string;
    amount: number;
    isSigned: boolean;
};

const defaultForm: FormT = {
    from: "",
    to: "",
    amount: 0,
    isSigned: false,
};

const TransactionModal = (): ReactElement => {
    const { network, account, balance, setBalance } = useGlobalState();
    const [ form, setForm ] = useState<FormT>(defaultForm);
    const [ sending, setSending ] = useState<boolean>(false);
    const [ transactionSig, setTransactionSig ] = useState<string>("");

    const onFieldChange = (field: string, value: string) => {
        if (field === "amount" && !!value.match(/\D+/)) {
            console.log(value);
            return;
        }

        setForm({
            ...form,
            [field]: value,
        });
    };

    const transfer = async () => {
        if(!account) return;

        try {
            console.log("Sign and send not yet implemented1");
            const connection = "";
            setTransactionSig("");

            const instructions = {};

            const transaction = {};

            const signers =[{}];

            setSending(true);

            const confirmation="";
            setTransactionSig(confirmation);
            setSending(false);

            if (network) {
                const updatedBalance = await refreshBalance(network ,account);
                setBalance(updatedBalance);
                message.success(`Transaction confirmed`);
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown Error";
            message.error(`Transaction failed, please check your inputs: ${errorMessage}`);
            setSending(false);
        }
    };

    return (
        <>
            <CheckContainer>
                <CheckImage src="/check.jpeg" alt="Check" />
                <CheckFrom>{`FROM: ${account?.publicKey}`}</CheckFrom>

                {transactionSig && (
                    <Processed href={`https://solscan.io/tx/${transactionSig}?cluster=devnet`} target="_blank">
                        Processed - View on Solscan
                    </Processed>
                )}

                <CheckDate>
                    {new Date().toString().split(" ").slice(1, 4).join(" ")}
                </CheckDate>
                <RecipientInput 
                    value={form.to}
                    onChange={(e) => onFieldChange("to", e.target.value)}
                 />
                <AmountInput
                    value={form.amount}
                    onChange={(e) => onFieldChange("amount", e.target.value)}
                />
                <AmountText>
                    {form.amount <= 0 ? "" : converter.toWords(form.amount)}
                </AmountText>
                {sending ? (
                    <LoadingOutlined 
                        style={{
                            fontSize: 24,
                            position: "absolute",
                            top: "69%",
                            left: "73%",
                        }}
                        spin
                        />
                ) : (
                    <SignatureInput
                        onClick={transfer}
                        disabled={
                            !balance ||
                            form.amount / LAMPORTS_PER_SOL > balance ||
                            !form.to ||
                            form.amount == 0
                        }
                        type="primary"
                        >
                            Sign and Send
                    </SignatureInput>
                )}
                <RatioText>1 $SOL = 1,000,000,000 $L</RatioText>
            </CheckContainer>
        </>
    )
}

export default TransactionModal;