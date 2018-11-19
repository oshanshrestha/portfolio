import React from 'react'
import {
    HeroImage,
    RevealP
} from './Styles'
import WhenInView from '../../components/WhenInView'


import { Container } from '../../theme/grid'



export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <HeroImage>
                    <h1>Oshan Shrestha</h1>
                    <h2>Web Developer</h2>
                </HeroImage>
                <WhenInView>
                    {
                        ({ IsInView }) => 
                            <RevealP hide={ !IsInView }>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
                                pharetra sapien. Cras cursus libero quis ligula faucibus, id pulvinar
                                urna viverra. Suspendisse sit amet ex eu est lobortis fringilla.
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus
                                a volutpat ex. Phasellus quam augue, rhoncus a ante et, malesuada
                                dictum felis. Aliquam erat nunc, commodo ac ipsum vitae, molestie
                                interdum libero. Suspendisse potenti. Ut dapibus est vitae aliquet tincidunt.
                                Etiam auctor ullamcorper scelerisque. Quisque viverra vitae elit id iaculis.
                            </RevealP>
                    }

                </WhenInView>
                
            </Container>
        )
    }
}