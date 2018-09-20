
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const Character = ({ name, image }) => (
    <Card className="mb-5">
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
        </CardBody>
    </Card>
);
Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Character;
