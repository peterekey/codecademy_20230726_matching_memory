import { Card } from './card/Card.jsx';
import PropTypes from 'prop-types'

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
    cards: PropTypes.array
}