import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Redux Store and Redux Persist
import { useStore } from "../store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// Styles
import "slick-carousel/slick/slick.css";
import "../assets/scss/main.css";
import "../assets/scss/react-scss.css";
import "../assets/fonts/fontawesome-5/css/all.min.css";
import "../assets/scss/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag("config", "G-YQWGTLJ21G", {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-YQWGTLJ21G`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YQWGTLJ21G', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div>
            <Component {...pageProps} />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
