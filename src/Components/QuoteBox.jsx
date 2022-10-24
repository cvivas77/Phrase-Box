import React, { useState } from 'react';
import quotes from '../quotes.json'
import Author from './Author';
import Quote from './Quote';

function QuoteBox(){
  const colors = ["#C0C0C0", "#808080", "#808000", "#008000", "	#008080", "#000080", "#9B59B6", "#ABEBC6", "#F9E79F", "#A9DFBF", "#059FA7", "#050EA7", "#7105A7", "#A7050F", "#6CECE9"]
  const [counter, setCounter] = useState(Math.floor(Math.random() * quotes.length));
  const nextQuote = () => {
    setCounter(Math.floor(Math.random() * quotes.length));
  }
  let getQuotes = quotes[counter].quote;
  let getAuthor = quotes[counter].author;
  let colorsLength = Math.floor(Math.random() * colors.length);
  let getColorRandom = colors[colorsLength]
  document.body.style = `background: ${getColorRandom}; color: ${getColorRandom}`;
    return (
      <div className='Content'>
        <div className='phrase'><Quote quotesItem = {getQuotes}/></div>
        <div className='author'><Author authorsItem = {getAuthor}/></div>
        <div className='btn'>
            
            <img src="https://svgsilh.com/svg/2027886.svg" alt="" onClick={nextQuote} style = {{background: getColorRandom}} />
        </div>
      </div>
    );
  

} 

export default QuoteBox;