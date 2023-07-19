import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';

export const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className={style.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image.webformatURL}
          onClick={() => onClickImage(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClickImage: PropTypes.func.isRequired,
};
