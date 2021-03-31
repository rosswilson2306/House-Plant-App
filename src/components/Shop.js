import React, { useState } from 'react';

import ShopCard from './ShopCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropDown from './DropDown';
import Pagination from './common/Pagination';
import { paginate } from '../util/Paginate';
import { Plants } from '../util/Plants';

const Shop = ({ setStatus }) => {
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPlants, setAllPlants] = useState(Plants);

  const handlePageChange = page => {
    setCurrentPage(page);
    // console.log(page);
  };

  const plants = paginate(allPlants, currentPage, pageSize);

  return (
    <div>
      <div className="heading-container">
        <h1>Shop</h1>
      </div>
      <DropDown setStatus={setStatus} />
      <Container fluid>
        <Row>
          {plants.map(plant => {
            return (
              <Col>
                <ShopCard
                  key={plant.id}
                  price={plant.price}
                  description={plant.description}
                  src={plant.src}
                  name={plant.name}
                  plant={plant}
                  allPlants={allPlants}
                  setAllPlants={setAllPlants}
                />
              </Col>
            );
          })}
          {/* <Col>
            <ShopCard />
          </Col> */}
        </Row>
      </Container>
      <Row>
        <Pagination
          itemsCount={allPlants.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Row>
    </div>
  );
};

export default Shop;
