import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { filterByName, filterByRarity, filterTrunfo, trunfoFilter } = this.props;
    return (
      <>
        <div>
          <label className="trunfo-box" htmlFor="trunfo-filter">
            Super Trunfo ?
            <input
              className="trunfo-box"
              type="checkbox"
              id="trunfo-filter"
              data-testid="trunfo-filter"
              onChange={ filterTrunfo }
            />
          </label>
        </div>
        <div>
          <label htmlFor="search-filter">
            <input
              placeholder="Pesquise sua carta"
              className="search-input"
              type="text"
              data-testid="name-filter"
              id="search-filter"
              onChange={ filterByName }
              disabled={ trunfoFilter }
            />
          </label>
        </div>
        <div>
          <label htmlFor="filter-rarity">
            <select
              className="rarity-select"
              id="filter-rarity"
              onChange={ filterByRarity }
              data-testid="rare-filter"
              disabled={ trunfoFilter }
            >
              <option>Todas</option>
              <option>Normal</option>
              <option>Raro</option>
              <option>Muito raro</option>
            </select>
          </label>
        </div>
      </>

    );
  }
}
export default Filters;

Filters.propTypes = {
  filterByName: PropTypes.func.isRequired,
  filterByRarity: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.func.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};
