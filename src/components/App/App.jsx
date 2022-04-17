import { Component } from 'react';
import axios from 'axios';
import { Container } from './Container.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';

const API_KEY = '21952569-4b44b40a7ae5579ea0d6f7f48';
axios.defaults.baseURL =
  'https://pixabay.com/api/?&image_type=photo&orientation=horizontal&per_page=12';

export class App extends Component {
  state = { searchQuery: '', page: 1 };

  searchMaterial = async values => {
    const url = `&q=${values}&key=${API_KEY}`;
    const materials = await axios.get(url);
    return console.log(materials);
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.searchMaterial} />
      </Container>
    );
  }
}
