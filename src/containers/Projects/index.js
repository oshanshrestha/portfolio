import React, { Component } from 'react';
import { Container, Flex, Index, Relative  } from '../../theme/grid'
import { Thumbnail, ImageContainer, Title } from './Styles'

import ParallaxImage from 'react-image-parallax2'

import { A } from '../../theme/types'

class Projects extends Component {
    render() {
        return (
            <Container>
                <Title>Open-Source Projects</Title>
                <Relative marginBottom="50px" marginTop="100px">
                    <Index>
                        <h1>01</h1>
                    </Index>
                    <h1>yarn add <A href="https://facebook.com/shrestha.oshan">react-coder</A></h1>
                </Relative>
                <Flex marginBottom="100px" justify="center">
                    <Thumbnail>
                        <img src={require("../../assets/thumbnail1.jpg")} alt="thumbnail"/>
                    </Thumbnail>
                </Flex>
                
                <Relative marginBottom="50px">
                    <Index>
                        <h1>02</h1>
                    </Index>
                    <h1>yarn add <A href="https://instagram.com/shrestha_oshan">javascript-dev</A></h1>
                </Relative>
                <ImageContainer>
                    <ParallaxImage
                        reduceHeight={0.1}
                        src={require('../../assets/main-image.jpg')}
                    ></ParallaxImage>
                </ImageContainer>
                
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            </Container>
        );
    }
}

export default Projects;