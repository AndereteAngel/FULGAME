import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cardPartido.css'; 

function Cardspartido() {
  return (
 
    <Card className='cardpartido' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Iniciar desafio</Card.Title>
        <Card.Text>
          Solo gana quien llega al final
        </Card.Text>
        <Button variant="primary">Desafio</Button>
      </Card.Body>
    </Card>
  
  );
}

export default Cardspartido;