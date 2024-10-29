import Card from 'react-bootstrap/Card';

function Cardcomp({member}) {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={member.url} />
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>
        {member.position}
        </Card.Text>
        <Card.Text>
        {member.achieved}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardcomp;