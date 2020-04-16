import { connect } from "react-redux";
import { fetchCitySlug } from "../actions/cities";
import LoginPage from "../components/LoginPage";

const mapDispatchToProps = (dispatch) => {  };

const mapStateToProps = (state) => {
  return {
    city: state.cities.data,
  };
};

export default connect(null, null)(LoginPage);
