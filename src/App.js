import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';
import Dofus from './images/dofus.png'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
      filter: '',
      rarityFilter: 'Todas',
      trunfoFilter: false,

    };
  }

  onSaveButtonClick= () => {
    const {
      deck,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const savedCard = {
      deck,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo === true,
      deck: [...deck, savedCard],
    }));

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  checkButton = () => {
    const
      {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;

    let result = false;

    if (
      cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
    ) {
      result = true;
    }

    const total = 210;
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > total) {
      result = true;
    }

    const max = 90;
    if (Number(cardAttr1) > max
        || Number(cardAttr2) > max
        || Number(cardAttr3) > max) {
      result = true;
    }

    if (Number(cardAttr1) < 0
        || Number(cardAttr2 < 0)
        || Number(cardAttr3 < 0)) {
      result = true;
    }

    this.setState({ isSaveButtonDisabled: result });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({ [name]: value }), () => {
      this.checkButton();
    });
  }

  filterByName = ({ target }) => this.setState({ filter: target.value });

  filterByRarity = ({ target }) => this.setState({ rarityFilter: target.value });

  filterTrunfo= ({ target }) => this.setState({ trunfoFilter: target.checked });

  // ref (https://newbedev.com/javascript-how-to-add-delete-button-in-react-js-code-example)
  delete(card) {
    const { deck } = this.state;
    const myDeck = deck.filter((c) => c.cardName !== card.cardName);
    this.setState({ deck: myDeck });
    const trunfo = myDeck.filter((c) => c.cardTrunfo);
    if (trunfo) this.setState({ hasTrunfo: false });
  }

  render() {
    const { deck, filter, rarityFilter, trunfoFilter } = this.state;
    return (
      <main>
        <header>
          <img className="logo" src={Dofus} alt="logo" />
        </header>
        <div className="container">
          <Form
            { ... this.state }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
          />
        </div>

        <div className="card-model">

          <Card
            { ... this.state }
          />
        </div>
        <div className="filters">
          <Filters
            filterByName={ this.filterByName }
            filterByRarity={ this.filterByRarity }
            filterTrunfo={ this.filterTrunfo }
          />
        </div>

        <div className="deck">
          {

            trunfoFilter ? deck.filter((card) => card.cardTrunfo)
              .map((card) => (
                <div className="card-container" key={ card.cardName }>
                  <Card
                    { ... card }
                  />
                  <button
                    type="button"
                    data-testid="delete-button"
                    onClick={ this.delete.bind(this, card) }
                  >
                    excluir
                  </button>
                </div>
              ))

              : deck.filter((card) => card.cardName.includes(filter))
                .filter((card) => {
                  if (rarityFilter === 'Normal') {
                    return card.cardRare === 'Normal';
                  }
                  if (rarityFilter === 'Raro') {
                    return card.cardRare === 'Raro';
                  }
                  if (rarityFilter === 'Muito raro') {
                    return card.cardRare === 'Muito raro';
                  }
                  return card;
                }).map((card) => (
                  <div className="card-container" key={ card.cardName }>
                    <Card
                      { ... card }
                    />
                    <button
                      className="delete-button"
                      type="button"
                      data-testid="delete-button"
                      onClick={ this.delete.bind(this, card) }
                    >
                      excluir
                    </button>
                  </div>))

          }

        </div>
      </main>

    );
  }
}

export default App;
