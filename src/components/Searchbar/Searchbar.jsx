import { Formik } from 'formik';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  SearchbarHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ search }, actions) => {
    onSubmit(search);
    actions.resetForm();
  };

  return (
    <SearchbarHeader>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchButton type="submit">
            <BiSearchAlt2 size="20px" />
          </SearchButton>
          <SearchInput
            type="search"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchbarHeader>
  );
};
