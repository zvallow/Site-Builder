import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, QUERIES } from '../../Styling';

const Block = styled.div`
    width: 10%;
    height: 100vh;
    background-color: ${COLORS.deepBlue};
    position: fixed;
    right: 0;
    top: 0;
    transform: none;
    transition: transform 0.5s;
    display: none;

    @media (${QUERIES.medium}) {
        width: 30%;
        display: block;
    }
`;

const ScrollCont = styled.div`
    transform: rotate(90deg);
    position: absolute;
    right: -5%;
    bottom: 250px;
    height: 30px;
    color: white;
    display: none;
    transition: opacity 0.5s 0.3s;

    p {
        display: inline-block;
        padding: 0;
    }

    @media (${QUERIES.medium}) {
        display: block;
    }
`;

const Line = styled.div`
    width: 150px;
    height: 1px;
    background-color: white;
    display: inline-block;
    margin: 0 30px 3px 0;
`;

class RightBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minimize: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.pageYOffset >= 500) {
            this.setState({
                minimize: true
            });
        } else {
            this.setState({
                minimize: false
            });
        }
    }

    render() {
        const { minimize } = this.state;
        return (
            <Block
                style={
                    minimize
                        ? {
                              transitionDuration: '.5s',
                              transform: 'translate(90%,0)'
                          }
                        : {}
                }
            >
                <ScrollCont
                    style={
                        minimize
                            ? {
                                  transition: 'opacity  .3s',
                                  opacity: '0'
                              }
                            : { opacity: '1' }
                    }
                >
                    <Line />
                    <p>Scroll Down</p>
                </ScrollCont>
            </Block>
        );
    }
}

export default RightBar;