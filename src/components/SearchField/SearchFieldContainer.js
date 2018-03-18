import {connect} from 'react-redux';
import SearchField from './SearchField';
import {setSearchFilter} from '../../actions/SearchActions';

const mapDispatchToProps = dispatch => ({
  changeHandler: text => dispatch(setSearchFilter(text))
});

const SearchFieldContainer = connect(
  null,
  mapDispatchToProps
)(SearchField);

export default SearchFieldContainer;