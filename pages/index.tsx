import React from "react";
import type { NextPage } from "next";
import Head from "next/head"; 
import styled from "styled-components";
import CreateAccount from "../components/CreateAccount";
import RestoreAccount from "../components/RestoreAccount";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <title> Wallet Basics </title>
                <meta name="description" content="Learning wallet basics for Solana from scratch" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <HomeTitle>
                A crypto wallet to manage (" ") Solana digital assets, from Figment's learn dApp.
            </HomeTitle>

            <HomeGrid>
                <CreateAccount/>
                <RestoreAccount/>
            </HomeGrid>
        </>
    );
};

const HomeTitle = styled.h1`
padding: 0 3 rem;
margin: 3rem 1rem; 
line-height: 1.25; 
font-size: 1.5rem; 
font-weight: normal; 
text-align: center;

& > a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
        text-decoration: underline;
    }
}`;

const HomeGrid = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 800px;
width: 100%;`;


export default Home;