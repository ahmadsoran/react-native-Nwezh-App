import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "react-native-rapi-ui";
import { Provider } from 'react-redux'
import { store } from "./src/services/store";

export default function App() {
  return (
    <Provider store={store}>

      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}
