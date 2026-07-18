export function onRequestGet({ request, next }) {
  const url = new URL(request.url);
  if (url.pathname !== "/food-card/custom") {
    return next();
  }

  url.pathname = "/food-card/custom/";
  return Response.redirect(url.toString(), 301);
}
