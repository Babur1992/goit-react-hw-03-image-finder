// import PropTypes from 'prop-types';
// import { useEffect } from 'react';
// import style from './Modal.mpdul.css';

// export const Modal = ({ onClose, image }) => {
//   const handleCloseClick = e => {
//     if (e.target.tagName !== 'IMG') {
//       onClose();
//     }
//   };
//   useEffect(() => {
//     const handleKeyDown = e => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   return (
//     <div className={style.overlay} onClick={handleCloseClick}>
//       <div className={style.modal}>
//         <img src={image} alt="" />
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   image: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox';

import style from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };
  handleImageClick = () => {
    const { image } = this.props;
    const instance = basicLightbox.create(`<img src="${image}" alt="" />`);
    instance.show();

    instance.on('close', () => {
      this.props.onClose();
    });
  };

  handleCloseClick = e => {
    if (e.target.tagName !== 'IMG') {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <div className={style.overlay} onClick={this.handleCloseClick}>
        <div className={style.modal} onClick={this.handleImageClick}>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
