export const getAssetURL= function(image) {
  return new URL(`../assets/img/${image}`,import.meta.url).href
}