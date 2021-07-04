import { Provider } from "react-redux";
import { store, persistor } from "../app/store";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "react-query/devtools";

const MyApp = ({ Component, pageProps }) => {
  // const queryCache = QueryCache();
  const queryClient = new QueryClient();

  return (
    <>
      <AuthProvider session={pageProps.session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <Component {...pageProps} />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </AuthProvider>
    </>
  );
};

export default MyApp;
