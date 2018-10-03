import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCLlJQTl7jh2uQNZbLsdbvajxB8LCRD-uo',
      authDomain: 'manager-55985.firebaseapp.com',
      databaseURL: 'https://manager-55985.firebaseio.com',
      projectId: 'manager-55985',
      storageBucket: 'manager-55985.appspot.com',
      messagingSenderId: '137435554982'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
