import React from 'react';
import Fade from 'react-reveal/Bounce';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Tooltip } from "reakit";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../rodal.css';

const QuoteList = ({view, index, quote, visible, selected}) => {
    return (
        <div key={index} style={{height: view.height * .75, backgroundColor: 'black'}}>
                <img src={quote.image} style={{height: '100%', minWidth: '970px'}} alt={quote.quote}/>
                <div className="legend" style={{
                    opacity: 0.75, 
                    fontSize: '14px',
                    bottom: quote.mark ? '150px' : '40px'
                }}>
                    <Fade big top when={visible ? selected === index : false}>
                        <div>
                            <p style={{fontSize: view.width < 500 ? '10px' : '14px'}}>
                                <FaQuoteLeft color="grey" size={40} style={{float: 'left', margin: '-25px 5px 0 0'}}/>
                                    {quote.quote}
                                <FaQuoteRight color="grey" size={40} style={{float: 'right', margin: '5px 0 0 5px'}} />
                            </p>
                            <div style={{textAlign: 'right'}}>
                                <h5 style={{margin: '25px 50px 0 0'}}>- {quote.source}</h5>
                            </div>
                            <Tooltip placement="top" style={{
                                fontSize: view.width < 500 ? '10px' : '14px', 
                                backgroundColor: 'rgba(1,1,1,1)', 
                                zIndex: 2}}>
                                <Tooltip.Arrow />{quote.explanation}
                            </Tooltip>
                        </div>
                    </Fade>
                </div>
            </div>
    )
}

export default QuoteList;