import styled from "styled-components";
import { Button, Input } from "antd";

export const Card = styled.div`
margin: 1rem 1.5rem;
max-width: 20rem;
text-align: left;
color: inherit;
background-color: #fafafa;
text-decoration: none;
border: 1px solid #efefef;
border-radius: 5px;
transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15 ease;

&: hover,
&: focus,
&: active {
    border-color: #ddd;
    background-color: #f7f7f7;
}

& > h2 {
    margin: 0 0 1rem 0;
    font-size: 1.25rem;
    line-height: 1.5;
}

& > p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
}

div.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem auto 0.5rem;
}

.disabledButton {
    width: 150px;
}
`;

export const Box = styled.div`
`