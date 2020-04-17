import { connect } from "react-redux";
import { userLoginFromToken } from "../actions/users";
import HomePage from "../components/HomePage";

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginFromToken: (token) => dispatch(userLoginFromToken(token)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
