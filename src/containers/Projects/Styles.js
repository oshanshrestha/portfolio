import styled from 'styled-components'
import { red } from '../../theme/variables';

export const Thumbnail = styled.div`
    width: 360px;
    height: 240px;
    overflow: hidden;
    cursor: pointer;

    > img {
        width: 100%;
        transition: 0.3s ease;
        transform: scale(1.0);
    }

    > img:hover {
        transform: scale(1.15);
    }
`;

export const ImageContainer = styled.div`
    width: 80%;
    margin: 20px auto;
`;


export const Title = styled.h1`
    color: ${red}
    margin-top: 0;
    font-weight: bold;
`;