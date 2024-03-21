/**
 * Footnotes
 * @param text
 * @returns {*}
 */

export const parseFootnote = text => {
  return text.replace(/\[\^(.*?)]/g, '[[footnote]] $1 [[/footnote]]');
};
