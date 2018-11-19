import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import { Container, Relative, MediaContainer } from '../../theme/grid';
import { Title } from './Styles';
import { H1, H2 } from '../../theme/types';

import '../../assets/animate.css';



export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            one: null,
            two: null,
            three: null,
            four: null
        }
    }

    stateController = (stateControl) => {
        if (this.state.one === null) {
            this.setState({
                one: stateControl
            })
        } else {
            if (this.state.two === null) {
                this.setState({
                    two: stateControl
                })
            } else {
                if (this.state.three === null) {
                    this.setState({
                        three: stateControl
                    })
                } else {
                    if (this.state.four === null) {
                        this.setState({
                            four: stateControl
                        })
                    }
                }
            }
        }
    }
    
    handleLike = () => {
        this.stateController(true)
    }
    handleDislike = () => {
        this.stateController(false)
    }

    render() {
        return (
            <Container marginBottom="100px" marginTop="50px">
                <Title>About Me</Title>

                <br/><br/>

                <Question
                question="Do you like country music?"
                states={this.state}
                condition={this.state["one"]}
                handleClick={[this.handleLike, this.handleDislike]}>
                    {
                        this.state.one !== null ? this.state.one ? <Answer text="Yayy!" />: <Answer text="Okay" /> : null
                    }
                    {
                        this.state.one !== null ?

                            <Question
                            question="And, how about pop?"
                            states={this.state}
                            condition={this.state["two"]}
                            handleClick={[this.handleLike, this.handleDislike]}>
                                {
                                    this.state.two !== null ? this.state.two ? <Answer text="Yayy!!" />: <Answer text="Okay" /> : null
                                }
                                {
                                    this.state.two !== null ?

                                        <Question
                                        question="And, do you like Taylor Swift?"
                                        states={this.state}
                                        condition={this.state["three"]}
                                        handleClick={[this.handleLike, this.handleDislike]}>
                                            {
                                                this.state.three !== null ?
                                                
                                                    <Relative>
                                                        <H1 className="animated flipInX" align='center'>WOOOHOOO!!! WE'RE BROTHERS, MAN!</H1>
                                                        <br/><br/>
                                                        <MediaContainer align="center" >
                                                            <ReactPlayer
                                                                controls={true}
                                                                url={require('../../assets/tripple-rampage.mp4')}
                                                            />
                                                        </MediaContainer>
                                                    </Relative>
                                                : null
                                            }
                                        </Question>
                                    : null
                                }
                            </Question>
                        : null
                    }
                </Question>
            </Container>
        );
    }
}

const Answer = (props) => {
    return <p className="animated flipInX">{ props.text }</p>
}

const Question = (props) => {
    return (
        <Relative className={ `animated flashFall bounceIn` }>
            <H2 align='right'>{ props.question }</H2>
            <p><span style={{ cursor: "pointer"}} onClick={props.condition == null ? props.handleClick[0] : null}>You do!</span></p>
            <p><span style={{ cursor: "pointer"}} onClick={props.condition == null ? props.handleClick[1] : null}>You don't.</span></p>
            { props.children }
        </Relative>
    )
}