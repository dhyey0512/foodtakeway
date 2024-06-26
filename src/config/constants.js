/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ConfigurationContext from "../../src/context/Configuration";

const ConfigurableValues = () => {
  const configuration = useContext(ConfigurationContext);
  console.log("configuration", configuration);
  const SERVER_URL = "https://enatega-multivendor.up.railway.app/";
  const WS_SERVER_URL = "wss://enatega-multivendor.up.railway.app/";
  const GOOGLE_CLIENT_ID = "442864222-ssqh12c3eddt4e7qi7iv8f9ieumr7arg.apps.googleusercontent.com";
  const STRIPE_PUBLIC_KEY = "pk_test_51PCnGaSDOwoCcgiGetFgd4rkSm1NTmig9MkBWrxGkRkDY10hOjnrrMFQjiEw3NwLlBDsOIr1hWRHovH9Av9v6Xl000BQ80t0zg";
  const PAYPAL_KEY = configuration.clientId;
  const GOOGLE_MAPS_KEY = "AIzaSyAPcowzAMDsWl-TU8yhHFldClstNfF9zvQ";
  const AMPLITUDE_API_KEY = configuration.webAmplitudeApiKey;
  const LIBRARIES = "places,drawing,geometry,localContext,visualization".split(
    ","
  );
  const COLORS = {
    GOOGLE: configuration.googleColor,
  };
  const SENTRY_DSN = configuration.webSentryUrl;
  const SKIP_EMAIL_VERIFICATION = configuration.skipEmailVerification;
  const SKIP_MOBILE_VERIFICATION = configuration.skipMobileVerification;

  return {
    SERVER_URL,
    WS_SERVER_URL,
    GOOGLE_CLIENT_ID,
    COLORS,
    PAYPAL_KEY,
    STRIPE_PUBLIC_KEY,
    GOOGLE_MAPS_KEY,
    AMPLITUDE_API_KEY,
    LIBRARIES,
    SENTRY_DSN,
    SKIP_EMAIL_VERIFICATION,
    SKIP_MOBILE_VERIFICATION
  };
};

export default ConfigurableValues;
