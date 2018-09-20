
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Character from './Character';
import Spinner from 'react-spinkit';


const HomeLayout = ({ isLoading, characters }) => (
  <Container>

    {
      isLoading
        ? <Spinner name="ball-beat" />
        : <Row>
          {
            characters.map(character =>
              <Col sm="3" key={character.id}>
                <Character
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
              </Col>
            )}
        </Row>
    }

  </Container>
);

export default HomeLayout;
