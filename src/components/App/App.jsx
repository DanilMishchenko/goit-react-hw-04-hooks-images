import { useState, useEffect } from 'react';
import { Container } from './Container.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { searchQuery } from 'services/Api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMore } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export const App = () => {
  const [search, setSearch] = useState('');
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (!search) return;
    const searchImage = async (search, page) => {
      setLoading(true);
      try {
        const images = await searchQuery(search, page);
        setCollection(state => [...state, ...images]);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    searchImage(search, page);
  }, [search, page]);

  const handleSubmit = values => {
    setSearch(values);
    setCollection([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(state => state + 1);
  };

  const showModal = id => {
    const modalImg = collection.find(img => img.id === id);
    setModal(true);
    setModalImg(modalImg);
  };

  const closeModalOverlay = e => {
    if (e.currentTarget === e.target) {
      setModal(false);
    }
  };

  const closeModalButton = () => {
    setModal(false);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {collection.length !== 0 && (
        <ImageGallery collection={collection} onClick={showModal} />
      )}
      {loading && <Loader />}
      {collection.length !== 0 && <LoadMore onLoad={loadMore} />}
      {modal && (
        <Modal
          onCloseOverlay={closeModalOverlay}
          onCloseButton={closeModalButton}
        >
          <img src={modalImg.largeImageURL} alt={modalImg.tag} />
        </Modal>
      )}
    </Container>
  );
};
