import styled from 'styled-components'
import { blue, yellow } from './variables'


export const A = styled.a`
    color: ${blue};
    text-decoration: none;
    position: relative;

    &:after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: ${blue};
        height: 10%;
        transition: 0.15s;
        z-index: -1;
    }

    &:hover:after {
        height: 40%;
        background-color: ${yellow};
    }
`;


export const [H1, H2, H3, H4, H5, H6, Code, Blockquote] = ["h1", "h2", "h3", "h4", "h5", "h6", "code", "blockquote"]
    .map((tag) => styled[tag]`
        ${({ align }) => align && `text-align: ${align};`}
    `)