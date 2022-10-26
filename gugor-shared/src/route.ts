import envVariables from "./envVariables";

const API_URI =
  envVariables.NODE_ENV === "prod"
    ? envVariables.PROD_API_URI
    : envVariables.DEV_API_URI;

/**
 * Formats api uri for a route.
 * @param apiRoute - The route to the API.
 * @returns Absolute URI to the API.
 */
function route(apiRoute: string) {
  return `${API_URI}${apiRoute}`;
}

export default route;
