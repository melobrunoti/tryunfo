import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    let isTrunfo;
    if (cardTrunfo) {
      isTrunfo = (
        <span className="trunfo-card" data-testid="trunfo-card">
          Super Trunfo
        </span>);
    }

    return (
      <div className={ cardTrunfo === false ? 'card' : 'especial-card' }>
        <div className="card-background">
          <div className="card-frame">
            <h3 className="default-card-name" data-testid="name-card">{ cardName }</h3>
            <div className="img-container">
              <img
                className="default-card-image"
                data-testid="image-card"
                src={ cardImage }
                /*  alt={ cardName } */
              />
            </div>
            <div className="card-description">
              <p className="desc-box" data-testid="description-card">{cardDescription}</p>
            </div>

            <span id="att1" className="default-card-att" data-testid="attr1-card">
              Atk:
              {cardAttr1}
            </span>
            <span className="default-card-att" data-testid="attr2-card">
              Hp:
              {cardAttr2}
            </span>
            <span className="default-card-att" data-testid="attr3-card">
              Mp:
              {cardAttr3}
            </span>
            <span
              className="default-card-rarity"
              data-testid="rare-card"
            >
              {cardRare}
            </span>

            <span>{isTrunfo}</span>
          </div>
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
