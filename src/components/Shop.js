import React from 'react';
import ShopCard from './ShopCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropDown from './DropDown';

const Shop = ({ setStatus }) => {
  return (
    <div>
      <div className="heading-container">
        <h1>Shop</h1>
      </div>
      <DropDown setStatus={setStatus} />
      <Container fluid>
        <Row>
          <Col>
            <ShopCard />
          </Col>
          <Col>
            <ShopCard />
          </Col>
          <Col>
            <ShopCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
