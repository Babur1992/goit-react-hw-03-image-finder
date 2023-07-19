import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { query } = form.elements;

    onSubmit(query.value);
  };

  return (
    <header className={style.searchbar}>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.searchFormButton}>
          <span className={style.searchFormButtonlabel}>Search</span>
        </button>

        <input
          name="query"
          className={style.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          //   name="searchInput"
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
