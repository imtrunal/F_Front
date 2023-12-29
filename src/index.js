import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import "../src/css/index.css"
import "../src/css/index.css"
import "../src/css/admin.css"
import "../src/css/bigpage.css"
import "../src/css/page.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/index"
import { composeWithDevTools } from "redux-devtools-extension";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./ErrorHandler";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
