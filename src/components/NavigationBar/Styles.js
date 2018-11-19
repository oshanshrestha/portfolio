import styled from 'styled-components'
import { Flex } from '../../theme/grid'
import { blue, yellow, red } from '../../theme/variables';
import { Link } from 'react-router'

import media from '../../theme/media'

export const NavigationContainer = styled(Flex)`
    position: fixed;
    right: 2em;
    top: 2em;
    z-index: 99;
    padding: 10px;
    background-color: white;

    ${
        media.tablet`
            right: 0.25em;
        `
    }
    ${
        media.phone`
            top: 0;
            width: 100%;
            right: 0em;
            left: 0em;
            padding-left: 0px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 0.85em;
        `
    }
`;

export const NavItem = styled(Link)`
    margin-right: 30px;
    margin-left: 0px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${blue};
    transition: 0.15s ease;
    position: relative;
    text-decoration: none;

    ${
        media.phone`
            margin-right: 10px;
            margin-left: 10px;
        `
    }

    &:hover {
        color: ${yellow}
    }

    &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rbga(255, 255, 255, 0.0);
        transition: 0.15s ease;
        z-index: -1;
        transform: scale(1.2, 1.4)
    }

    &:hover:after {
        background: ${red};
    }


`;