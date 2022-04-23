import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ collection, onClick }) => {
  console.log(collection);
  return (
    <GalleryList>
      {collection.map(({ id, webformatURL, tags }) => (
        <GalleryItem key={id} onClick={() => onClick(id)}>
          <ImageGalleryItem webformatURL={webformatURL} tags={tags} />
        </GalleryItem>
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  collection: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};
