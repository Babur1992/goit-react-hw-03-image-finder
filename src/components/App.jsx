import { useState, useEffect } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Modal } from './Modal/Modal';


const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36775018-abad017b89dacc6f8ffcc7875';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (query.trim() === '') {
        setImages([]);
        return;
      }

      setIsLoading(true);

      try {
        const response = await axios.get(API_URL, {
          params: {
            key: API_KEY,
            q: query,
            page,
            per_page: 12,
          },
        });

        const data = response.data;
        const fetchedImages = data.hits.map(image => ({
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
        }));

        if (page === 1) {
          setImages(fetchedImages);
        } else {
          setImages(prevImages => [...prevImages, ...fetchedImages]);
        }
      } catch (error) {
        console.log('Error fetching images:', error);
      }

      setIsLoading(false);
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onSelect={openModal} />

      {images.length > 0 && !isLoading && (
        <button onClick={loadMoreImages}>Завантажити ще</button>
      )}
      <Modal isOpen={selectedImage !== null} onClose={closeModal}>
        {selectedImage && (
          <img src={selectedImage.largeImageURL} alt={selectedImage.id} />
        )}
      </Modal>
     
    </div>
  );
};
