import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './quoteStyle.css';

const Quotes = () => {
  const [quote, setQuotes] = useState({
    author: '',
    text: '',
  });
  const getter = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };
  return (
    <div className="bg">
      <div>
        <Card
          border="success"
          style={{
            width: '18rem',
            margin: '0 auto',
            justifyContent: 'center',
            verticalAlign: 'middle',
            marginTop: '12%',
            height: '300px',
          }}
        >
          <Card.Header>{quote.author}</Card.Header>
          <Card.Body>
            <Card.Text>{quote.text}</Card.Text>
          </Card.Body>
        </Card>
        <Button
          variant="success"
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          onClick={getter}
        >
          Next quote
        </Button>
      </div>
    </div>
  );
};

export default Quotes;
