/**
 * Parse Links ([]() => [link text] or [[[link|text]]])
 * @param text
 * @returns {*}
 */
export const parseLink = text => {
  return text.replace(/(?<!!)\[(.*?)]\((.*?)\)/g, (str, text, url) => {
    // if no '/' and '.' found, then use [[[url|text]]] pattern
    if (url.indexOf('/') === -1) {
      return `[[[${url}|${text}]]]`;
    }
    // use [url text] pattern
    else {
      return `[${url} ${text}]`;
    }
  });
};
