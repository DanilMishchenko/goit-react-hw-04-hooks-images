import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return <img src={webformatURL} alt={tags} />;
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
