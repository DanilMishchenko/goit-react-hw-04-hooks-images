import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

export const LoadMore = ({ onLoad }) => {
  return (
    <LoadMoreButton type="button" onClick={onLoad}>
      Load more
    </LoadMoreButton>
  );
};

LoadMore.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
