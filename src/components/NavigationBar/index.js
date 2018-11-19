import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './Styles';

class NavigationBar extends Component {
    render() {
        return (
            <NavigationContainer>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/aboutme">About Me</NavItem>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;