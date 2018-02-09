import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedBook } from '../actions/index';

class BookList extends Component {
	renderList() {
		return this.props.books.map( (book) => {
			return (
					<li 
						onClick = { () => this.props.selectedBook(book) }
						key = { book.title } className = "list-group-item">
						{ book.title }
					</li>
				)


		});
	}

	render() {
		return(
				<ul className = "list-group col-md-4">
					{ this.renderList() }
				</ul>
			);
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectedBook: selectedBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);