import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import plant1 from '../img/plant-1.jpg';

const ShopCard = () => {
  return (
    <Card style={{ width: '18rem' }} className="mb-5">
      <Card.Img variant="top" src={plant1} />
      <Card.Body>
        <Card.Title>Spider Plant</Card.Title>
        <Card.Text>
          From our hard to kill range.
          <br />
          <br />
          From £30.00
        </Card.Text>
        <Button variant="success">See options</Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
