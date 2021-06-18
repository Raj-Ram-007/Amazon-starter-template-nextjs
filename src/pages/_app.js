import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";
import { QueryClient, QueryClientProvider } from "react-query";

const MyApp = ({ Component, pageProps }) => {
  // const queryCache = QueryCache();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
