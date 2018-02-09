import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookActive from '../containers/book_active';

export default class App extends Component {
  render() {
    return (
      	<div>
      		<BookList />
      		<BookActive />
      	</div>
    );
  }
}
