import React, { Component } from "react";

import Posts from "./Components/Posts.js";
import PostForm from "./Components/Postform.js";

import { Provider } from "react-redux";
import store from "./store.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
