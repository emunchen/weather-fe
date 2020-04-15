import { connect } from "react-redux";
import { fetchCities } from "../actions/cities";
import ProductGrid from "../components/ProductGrid";

const mapStateToprops = (state) => {
  return {
    cities: state.cities,
    isFetching: state.cities.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => dispatch(fetchCities()),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(ProductGrid);
