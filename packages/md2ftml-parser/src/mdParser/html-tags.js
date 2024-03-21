/**
 * Use <tags> instead of [[tags]]
 * @param text
 * @returns {*}
 */
export const parseHtmlTags = text => {
  let parsed = text.replace(/<!--(.*?)-->/g, '[!--$1--]');
  parsed = parsed.replace(/<(.*?)>/g, '[[$1]]');
  return parsed;
};

/**
 * Exception: <html> tags needs to be convert to
 * [[html]] before [[html]] frame protection
 * @param text
 */
export const parseFrameTags = text => {
  return text.replace(/<(\/?)html>/g, '[[$1html]]');
};
