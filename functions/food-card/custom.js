export function onRequestGet({ request }) {
  const url = new URL(request.url);
  url.pathname = "/food-card/custom/";
  return Response.redirect(url.toString(), 301);
}
