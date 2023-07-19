import React, { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import style from './ImageGallery.module.css';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(imageSrc) {
    this.setState({
      selectedImage: imageSrc,
    });

    const modal = basicLightbox.create(`
      <div class="overlay">
        <div class="modal">
          <img src="${imageSrc}" alt="Large Image" />
        </div>
      </div>
    `);
    modal.show();
  }

  closeModal() {
    this.setState({
      selectedImage: null,
    });
  }

  render() {
    const { images } = this.props;
    const { selectedImage } = this.state;

    return (
      <div>
        <ul className={style.gallery}>
          {images.map(image => (
            <li
              key={image.id}
              onClick={() => this.openModal(image.largeImageURL)}
            >
              <img src={image.webformatURL} alt={image.id} />
            </li>
          ))}
        </ul>

        {selectedImage && (
          <section className={style.container}>
            <div className={style.overlay} onClick={this.closeModal}>
              <div className={style.modal}>
                <img
                  className={style.galleryItem}
                  src={selectedImage}
                  alt="Large Image"
                />
              </div>
            </div>
          </section>
        )}

        {selectedImage && <div id="modal-container"></div>}
      </div>
    );
  }
}
