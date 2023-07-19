import PropTypes from 'prop-types';
import style from './Button.module.css';

export const Button = ({ onClick, disabled }) => {
  return (
    <button className={style.button} disabled={disabled} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
