import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import ImageGrid from './component/ImageGrid';
import SearchBar from './component/SearchBar';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchImages();
  }, [page, query]);

  const fetchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/photos', {
      params: {
        client_id: 'YHCC6MFRiyGIu2paUb7Z5hBspC7fWdHwrmEF7bG4ltA',
        page,
        per_page: 10,
        query,
      },
    });

    setImages((prevImages) => [...prevImages, ...response.data]);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <h1>Infinite Image Scrolling App</h1>
      <SearchBar onSubmit={handleSearch} />
      <ImageGrid images={images} />
    </div>
  );
};

export default App;
