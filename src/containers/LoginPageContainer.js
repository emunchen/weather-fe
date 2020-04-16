import LoginPage from "../components/LoginPage";
import { connect } from "react-redux";
import { userLogin } from "../actions/users";

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (email, password) => dispatch(userLogin(email, password)),
  };
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
