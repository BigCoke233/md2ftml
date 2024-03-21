/**
 * Protect content wrapped in `!!!`
 * which means user does not want something
 * to be parsed as markdown
 * @param text
 * @returns {{protectedText: *, escapedTexts: *[]}}
 */
export const protectEscapedText = text => {
  const reg = /(!!![\s\S]*?!!!)/g;
  let placeholderIndex = 0;
  const escapedTexts = [];

  function createPlaceholder() {
    return `{(ESCAPED:${placeholderIndex++})}`;
  }

  const protectedText = text.replace(reg, match => {
    const placeholder = createPlaceholder();
    escapedTexts.push(match);
    return placeholder;
  });

  return { protectedText, escapedTexts };
};

/**
 * Restore escaped content
 * @param text
 * @param escapedTexts
 * @returns {*}
 */
export const restoreEscapedText = (text, escapedTexts) => {
  let restored = text;
  escapedTexts.forEach((text, index) => {
    const placeholder = `{(ESCAPED:${index})}`;
    restored = restored.replace(placeholder, text);
  });
  return restored.replace(/!!!(.*?)!!!/g, '$1');
};
