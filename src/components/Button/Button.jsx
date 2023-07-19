
import Button from './Button';


export const ImageGallery = ({ images, onLoadMore }) => {
  let showLoadMore = true;

  const handleLoadMore = () => {
    onLoadMore();
  };

  const handleImageLoad = () => {
    showLoadMore = true;
  };

  return (
    <div>
      <ul className="gallery">
        {images.map(image => (
          <li key={image.id} className="gallery-item">
            <img
              src={image.webformatURL}
              alt={image.id}
              onLoad={handleImageLoad}
            />
          </li>
        ))}
      </ul>
      {showLoadMore && images.length > 0 && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </div>
  );
};
