import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Like from './common/Like';

const ShopCard = props => {
  const {
    name,
    price,
    description,
    src,
    allPlants,
    setAllPlants,
    plant
  } = props;

  const handleLike = plant => {
    const localPlants = [...allPlants];
    const index = localPlants.indexOf(plant);
    localPlants[index] = { ...localPlants[index] };
    localPlants[index].liked = !localPlants[index].liked;
    setAllPlants(localPlants);

    console.log(plant);
  };

  return (
    <Card style={{ width: '18rem' }} className="mb-5">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Like onClick={() => handleLike(plant)} plant={plant} />
        <Card.Text>
          {description}
          <br />
          <br />
          {`From £${price}.00`}
        </Card.Text>
        <Button variant="success">See options</Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
