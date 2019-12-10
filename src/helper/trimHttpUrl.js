/**
 * This function trims the request url
 * @param {url}  url 
 */
export const trimHttpURL = (url) => {
  const regex = /https:\/\/swapi\.co\/api\//gi;
  if(url) return  url.replace(regex, '');
}
