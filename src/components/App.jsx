import { useState, useEffect } from 'react';
import './App.css';
import fetchImages from '../api';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState({ src: '', alt: '' });

  const searchImages = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      setError(false);
      setLoading(true);

      try {
        const { results } = await fetchImages(query.split('/')[1], page);
        setImages((prevImages) => [...prevImages, ...results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const openModal = (image) => {
    setImageUrl(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={searchImages} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal src={imageUrl.src} alt={imageUrl.alt} modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default App;