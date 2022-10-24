import React from 'react';

const Quote = (quotesItem) => {
  return (
    <div>
      <i class="fa-solid fa-quote-left"></i>{quotesItem.quotesItem}
      <i class="fa-solid fa-quote-right"></i>{}
    </div>
  );
};

export default Quote;