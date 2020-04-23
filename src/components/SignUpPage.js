import React from "react";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    if (email && password) {
      this.props.userLogin(email, password);
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="min-h-screen w-full p-6 flex justify-center items-center">
        <div className="w-full max-w-xs">
          <div className="bg-white border p-8 shadow rounded w-full mb-6">
            <h1 className="mb-6 text-lg text-gray-900 font-thin">
              Login to your account
            </h1>
            <form onSubmit={this.handleSubmit}>
              <fieldset className="mb-4">
                <label className="block text-sm text-gray-900 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                  name="email"
                  value={email || ""}
                  onChange={this.handleChange}
                  required
                  autoFocus
                />
              </fieldset>

              <fieldset className="mb-4">
                <div className="w-full flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-900 mb-2"
                  >
                    Password
                  </label>
                  <a
                    className="text-xs font-thin text-blue no-underline hover:underline"
                    href="#"
                  >
                    Forgotten password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                  name="password"
                  value={password || ""}
                  onChange={this.handleChange}
                  required
                />
              </fieldset>

              <div className="pt-1 pb-5 text-sm text-gray-darker font-thin">
                <label>
                  <input
                    className="mr-1"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />{" "}
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="block w-full bg-black text-white hover:text-black hover:bg-gray-300 rounded-sm py-3 text-sm tracking-wide"
              >
                Sign in
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-gray-600 font-thin">
            Don't have an account yet?{" "}
            <a
              href="/signup"
              className="text-blue-500 no-underline hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    );
  }
}
