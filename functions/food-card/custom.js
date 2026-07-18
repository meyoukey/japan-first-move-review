export function onRequestGet({ request, next }) {
  const url = new URL(request.url);
  if (url.pathname !== "/food-card/custom") {
    return next();
  }

  url.pathname = "/food-card/custom/";
  return fetch(url.toString(), request);
}
