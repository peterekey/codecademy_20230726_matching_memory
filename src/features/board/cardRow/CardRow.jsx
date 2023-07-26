import { Card } from './card/Card.jsx';
import propTypes from 'prop-types'

export const CardRow = ({ cards }) => {
  const content = cards.map(card => 
    <Card 
      key={card.id} 
      id={card.id} 
      contents={card.contents} 
  />)

  return <>{content}</>;
};

CardRow.propTypes = {
    cards: propTypes.array
}