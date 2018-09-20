
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Character from './Character';



const HomeLayout = ({ characters }) => (
  <Container>
    <Row>
      {

      characters.map(character =>
        <Col sm="3">
          <Character
            key={character.id}
            name={character.name}
            image={character.image}
          />
        </Col>
      )}
    </Row>
  </Container>
);

export default HomeLayout;
