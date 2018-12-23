import React from 'react';
import Rodal from 'rodal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Bounce from 'react-reveal/Bounce';

import quotes from './quotes';
import '../rodal.css';

class QuotesModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            quotes: [],
            selected: 0
        };
    }

    componentDidMount() {
        this.setState({ quotes })
    }

    handleModal = () => {
        this.setState({ visible: this.state.visible ? false : true });
    }

    displayQuotes = () => {
        return this.state.quotes.map((quote, i) => {
            return <div key={i} style={{height: this.props.view.height * .75, backgroundColor: 'black'}}>
                <img src={quote.image} style={{height: '100%', minWidth: '970px'}}/>
                <div className="legend" style={{opacity: 0.75, fontSize: '14px'}}>
                    <Bounce when={this.state.visible ? this.state.selected === i : false}>
                        <div>
                            <p>{quote.quote}</p>
                        </div>
                    </Bounce>
                </div>
                
            </div>
        })
    }

    render() {
        console.log(this.state.selected)
        return (
            <div style={{ height: '100%' }}>
                <div onClick={this.handleModal} style={{ height: '100%', width: '300px', backgroundColor: 'red' }}>
                </div>

                <Rodal
                    visible={this.state.visible}
                    onClose={this.handleModal}
                    showCloseButton={false}
                    animation="slideLeft"
                    duration={1000}
                    customMaskStyles={{ backgroundColor: 'rgba(0,0,0,.9)' }}
                    height={
                        // this.props.view.width < 1020 ? 
                        this.props.view.height * .8 }
                    width={this.props.view.width < 1250 ? this.props.view.width * .8 : 1000}
                >
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        onChange={index => this.setState({selected: index})}
                        selectedItem={this.state.selected}
                    >
                        {this.displayQuotes()}
                    </Carousel>
                </Rodal>
            </div>
        )
    }
}

export default QuotesModal;