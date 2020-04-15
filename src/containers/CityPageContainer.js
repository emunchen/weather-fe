import { connect } from "react-redux";
import { fetchCitySlug } from "../actions/cities";
import CityPage from "../components/CityPage";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCitySlug: (slug) => dispatch(fetchCitySlug(slug)),
  };
};

const mapStateToProps = (state) => {
  return {
    city: state.cities.data
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
