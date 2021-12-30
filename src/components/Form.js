import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      hasTrunfo,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div>
        <form>
          <h1>Adicionar Nova Carta</h1>
          <label htmlFor="cardName">
            Nome
            <input
              value={ cardName }
              type="text"
              name="cardName"
              data-testid="name-input"
              id="cardName"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            Descricao
            <textarea
              value={ cardDescription }
              type="text"
              name="cardDescription"
              data-testid="description-input"
              id="cardDescription"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr1">
            Atack Damage
            <input
              value={ cardAttr1 }
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              id="cardAttr1"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            Health Power
            <input
              value={ cardAttr2 }
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              id="cardAttr2"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            Mana  Power
            <input
              value={ cardAttr3 }
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              id="cardAttr3"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            image
            <input
              value={ cardImage }
              type="text"
              name="cardImage"
              data-testid="image-input"
              id="cardImage"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardTrunfo">
            Raridade
            <select
              value={ cardRare }
              data-testid="rare-input"
              name="cardRare"
              id="cardTrunfo"
              onChange={ onInputChange }
            >

              <option value="Normal">Normal</option>
              <option value="Raro">Raro</option>
              <option value="Muito raro">Muito raro</option>

            </select>
          </label>
          <div>
            {hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
              : (
                <label htmlFor="cardTrunfo">
                  Super Trunfo?
                  <input
                    type="checkbox"
                    name="cardTrunfo"
                    data-testid="trunfo-input"
                    id="cardTrunfo"
                    onChange={ onInputChange }
                    checked={ cardTrunfo }
                  />
                </label>
              )}
          </div>
          <button
            type="button"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
