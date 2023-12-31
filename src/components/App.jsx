import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Empty } from './UseMemo/UseMemo';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Api } from './Appi/Appi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(13);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const fetchImages = () => {
      setIsLoading(true);
      Api.fetchImages(query, page)
        .then(res => {
          setImages(prevState => [...prevState, ...res.data.hits]);
          setTotal(res.data.total);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    if (query.length > 0) fetchImages();
  }, [page, query]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const hasImages = useMemo(() => {
    return images.length > 0;
  }, [images]);

  const hasLoading = useMemo(() => {
    return !hasImages && isLoading;
  }, [isLoading, hasImages]);

  const hasButton = useMemo(() => {
    return hasImages ? page < Math.ceil(total / 12) : false;
  }, [page, total, hasImages]);

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {hasImages ? (
        <ImageGallery
          onClickImage={image => setCurrent(image)}
          images={images}
        />
      ) : (
        !isLoading && <Empty />
      )}
      {hasLoading && <Loader />}
      {hasButton && (
        <Button disabled={isLoading} onClick={() => setPage(page + 1)} />
      )}

      {current && <Modal onClose={() => setCurrent(null)} image={current} />}
    </div>
  );
}
