import React from 'react';
import Rodal from 'rodal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Music from './Music';


import quotes from './quotes';
import QuoteList from './QuoteList';
import '../rodal.css';

class QuotesModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: [],
            selected: 0,
        };
    }

    componentDidMount() {
        this.setState({ quotes })
    }

    displayQuotes = () => {
        return this.state.quotes.map((quote, i) => {
            return <QuoteList
                key={i}
                view={this.props.view}
                visible={this.props.visible}
                selected={this.state.selected}
                quote={quote}
                index={i}
            />
        })
    }

    render() {
        const {visible, closed, handleModal } = this.props;
        const { quotes, selected } = this.state;

        return (
            <div style={{ height: '100%' }}>

                <Rodal
                    visible={visible}
                    onClose={handleModal}
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
                        selectedItem={selected}
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
                { visible && <Music sound={`/assets/audio/whoosh-in.mp3`} loop={false} /> }
                { closed && <Music sound={`/assets/audio/whoosh-out.mp3`} loop={false} /> }
                { visible && quotes[selected].sound && <Music sound={quotes[selected].sound} loop={true}/> }
            </div>
        )
    }
}

export default QuotesModal;