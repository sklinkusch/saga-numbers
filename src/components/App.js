import React from "react";
import "../styles/App.scss";
import { API_CALL_REQUEST } from "../actions/actionTypes";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }
  render() {
    const { message, fetching, error, getData } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div className="header pi">&pi;</div>
          <div className="subheader">Numbers</div>
          <div className="flex-container flex-row">
            <aside className="left quotation quotation-left sm-1 lg-1">
              <i className="fas fa-quote-left" />
            </aside>
            {message && <main className="message sm-10 lg-10">{message}</main>}
            {fetching && (
              <main className="fetching sm-10 lg-10 alert-warning">
                Fetching a quotation from the Numbers API
              </main>
            )}
            {error && (
              <main className="error sm-10 lg-10 alert-danger">
                An error occured.
              </main>
            )}
            {!message && !error && !fetching && (
              <main className="alert-primary sm-10 lg-10">
                Enter a number to get a quote
              </main>
            )}
            <aside className="right quotation quotation-right sm-1 lg-1">
              <i className="fas fa-quote-right" />
            </aside>
            <div className="input-form">
              <input type="number" min="0" ref={this.inputField} />
              {fetching ? (
                <button className="btn btn-warning" disabled>
                  Fetching...
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => getData(this.inputField.current.value)}
                >
                  Show info about this number
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    message: state.message,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: number => dispatch({ type: API_CALL_REQUEST, number })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
