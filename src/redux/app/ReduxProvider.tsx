"use client"; // 🔴 Read Quote below

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store";

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProviders;
