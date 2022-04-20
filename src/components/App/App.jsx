import { Component } from 'react';
import { Container } from './Container.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { searchImage } from 'services/Api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMore } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    search: '',
    collection: [],
    page: 1,
    loading: false,
    modal: false,
    modalImg: null,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.searchImage(search, page);
    }
  }

  handleSubmit = values => {
    this.setState({ search: values, collection: [], page: 1 });
  };

  searchImage = async (search, page) => {
    this.setState({ loading: true });
    try {
      const images = await searchImage(search, page);
      this.setState(prevState => ({
        collection: [...prevState.collection, ...images],
      }));
    } catch (err) {
      console.log(err.message);
    } finally {
      this.setState({ loading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  showModal = id => {
    const modalImg = this.state.collection.find(img => img.id === id);
    this.setState({ modal: true, modalImg: modalImg });
  };

  closeModalOverlay = e => {
    if (e.currentTarget === e.target) {
      this.setState({ modal: false });
    }
  };

  closeModalButton = () => {
    this.setState({ modal: false });
  };

  render() {
    const { collection, loading, modal, modalImg } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {collection.length !== 0 && (
          <ImageGallery collection={collection} onClick={this.showModal} />
        )}
        {loading && <Loader />}
        {collection.length !== 0 && <LoadMore onLoad={this.loadMore} />}
        {modal && (
          <Modal
            onCloseOverlay={this.closeModalOverlay}
            onCloseButton={this.closeModalButton}
          >
            <img src={modalImg.largeImageURL} alt={modalImg.tag} />
          </Modal>
        )}
      </Container>
    );
  }
}
