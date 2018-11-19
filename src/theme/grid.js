import styled, { css } from 'styled-components'
import { yellow } from './variables'
import media from './media'


export const Div = styled.div`
    ${({ marginBottom }) => marginBottom && css`
        margin-bottom: ${marginBottom};
    `}
    ${({ marginLeft }) => marginLeft && css`
        margin-left: ${marginLeft};
    `}
    ${({ marginRight }) => marginRight && css`
        margin-right: ${marginRight};
    `}
    ${({ marginTop }) => marginTop && css`
        margin-top: ${marginTop};
    `}
`;


export const Container = styled(Div)`
    padding: 60px 120px 0px 120px;

    ${media.tablet`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    `}
    ${media.phone`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    `}
    
`;
export const MediaContainer = styled(Div)`
    display: flex;
    flex-direction: column;
    padding: 5px;

    ${({ align }) => align && css`
        align-items: ${ align };
    `}

    & > div {
        width: 640px !important;
    }
    ${
        media.phone`
            & > div {
                width: calc(100% - 10px) !important;
                height: auto !important;
            }
        `
    }
`;


export const Relative = styled(Div)`
    position: relative;
`;

export const Index = styled(Div)`
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.5;
    z-index: -1;

    h1 {
        font-size: 4em;
        font-weight: bold;
        margin: 0;
        color: ${yellow};
    }
`;


export const Flex = styled(Div)`
    display: flex;

    ${({ justify }) => justify && css`
        justify-content: ${justify};
    `}
    ${({ align }) => align && css`
        align-content: ${align};
    `}
    ${({ column }) => column && css`
        flex-direction: column;
    `}
`;