/**
 * Parse Headings (# => +)
 * @param text
 * @returns {*}
 */
export const parseHeadings = text => {
  const reg = /^(#{1,6}) (.*)$/gm;
  return text.replace(reg, (str, p1, p2) => {
    if (p1 && p1.length <= 6) {
      // max heading level = 6
      const titleMark = p1.replaceAll(/#/g, '+');
      return `${titleMark} ${p2}`;
    }
    return str; // if not match, return original
  });
};

/**
 * Parse Setext Headings (multiple lines headings)
 * @param text
 */
export const parseSetextHeadings = text => {
  return text.replace(/^(.+)(?:\r\n|\r|\n)(-+|=+)$/gm, (str, p1, p2) => {
    const titleText = p1.replace(/\r?\n/g, ' ');
    if (p2.indexOf('=') !== -1) {
      return `+ ${titleText}`;
    } else {
      return `++ ${titleText}`;
    }
  });
};
