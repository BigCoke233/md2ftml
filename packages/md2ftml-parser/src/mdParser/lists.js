/**
 * Parse Unordered List (- item, * item => * item)
 * @param text
 */
export const parseUnorderedList = text => {
  return text.replace(/(\s?)- (.*?)/g, '$1* $2');
};

/**
 * Parse Ordered List (- item, * item => * item)
 * @param text
 */
export const parseOrderedList = text => {
  return text.replace(/(\s?)(\d+)\. (.*?)/g, '$1# $3');
};
