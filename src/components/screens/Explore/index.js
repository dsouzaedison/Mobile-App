import { connect } from 'react-redux';
import Explore from '../../templates/Explore';

const mapStateToProps = state => ({
    search: state.book.get('search'),
    checkInDate: state.book.get('checkInDate'),
    checkOutDate: state.book.get('checkOutDate')
});
const mapDispatchToProps = dispatch => ({
    onDatesSelect: ({ startDate, endDate }) => {
        dispatch(selectCheckInCheckout({ startDate, endDate }));
    },
    onSearchChange: (value) => {
        dispatch(setSearchValue({ value }));
    }
});
const mergeProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Explore);
