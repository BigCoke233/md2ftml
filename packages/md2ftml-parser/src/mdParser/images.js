/**
 * Parse images (![]() => [[image url]] or image block component)
 * @param text
 * @returns {*}
 */
export const parseImage = text => {
  return text.replace(/!\[(.*?)]\((.*?)\)/g, (str, alt, url) => {
    if (alt.length === 0) {
      return `[[image ${url}]]`;
    } else {
      return `[[include component:image-block
|name=${url}
|caption=${alt}
]]`;
    }
  });
};
