import styled from 'styled-components'
import { yellow } from '../../theme/variables'

export const Background = styled.div`
    position: fixed;
    left: 10vw;
    top: 10vh;
    width: 80vw;
    height: 80vh;
    background-image: url(${require("../../assets/background.png")});
    background-color: ${yellow};
    background-size: 55%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -99;
    opacity: .1;
`;