import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ collection, onClick }) => {
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
