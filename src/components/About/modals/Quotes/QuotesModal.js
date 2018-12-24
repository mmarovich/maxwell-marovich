import React from 'react';
import Rodal from 'rodal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import LazyLoad from 'react-lazyload';


import quotes from './quotes';
import QuoteList from './QuoteList';
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
            return <QuoteList
                key={i}
                view={this.props.view}
                visible={this.state.visible}
                selected={this.state.selected}
                quote={quote}
                index={i}
            />
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <div
                    onClick={this.handleModal}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '100%',
                        width: '300px',
                        padding: '10px',
                        backgroundColor: 'rgba(50,50,50,1)',
                        margin: 'auto',
                        backgroundImage: 'url(' + require(`../../../../assets/images/quotes.png`) + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h1 style={{ color: 'white', fontSize: '50px', lineHeight: '80px' }}>Sayings To Live By</h1>
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
                        this.props.view.height * .8}
                    width={this.props.view.width < 1250 ? this.props.view.width * .8 : 1000}
                >
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        onChange={index => this.setState({ selected: index })}
                        selectedItem={this.state.selected}
                        infiniteLoop={true}
                        transitionTime={200}
                    /* I'd like to have an infinite scroll here, however the scroll doesn't start until
                        the carousel is clicked.  I'd like it to start on carousel load. */
                    // autoPlay={true}
                    // interval={5000}
                    // stopOnHover={true}
                    >
                        {this.displayQuotes()}
                    </Carousel>
                </Rodal>
            </div>
        )
    }
}

export default QuotesModal;