/**
 * Protect code blocks in case parsed invalidly
 * @param text
 * @returns {{codeBlocks: *[], protectedText: *}}
 */
export const protectCodeBlock = text => {
  const reg = /(```[\s\S]*?```|~~~[\s\S]*?~~~)/g;
  let placeholderIndex = 0;
  const codeBlocks = [];

  // create placeholder for each code block
  function createPlaceholder() {
    return `{(CODEBLOCK:${placeholderIndex++})}`;
  }

  const protectedText = text.replace(reg, match => {
    const placeholder = createPlaceholder();
    codeBlocks.push(match);
    return placeholder;
  });

  return { protectedText, codeBlocks };
};

/**
 * Restore protected code blocks and parse them
 * @param text
 * @param codeBlocks
 * @returns {*}
 */
export const parseCodeBlock = (text, codeBlocks) => {
  // restore original code blocks
  let restored = text;
  codeBlocks.forEach((codeBlock, index) => {
    const placeholder = `{(CODEBLOCK:${index})}`;
    restored = restored.replace(placeholder, codeBlock);
  });

  // parse code blocks
  return restored.replace(
    /(?:```|~~~)(.*?)\r?\n([\s\S]*?)\s+(?:```|~~~)/g,
    (match, p1, p2) => {
      if (p1) {
        return `[[code type="${p1}"]]\r\n${p2}\r\n[[/code]]`;
      } else {
        return `[[code]]\r\n${p2}\r\n[[/code]]`;
      }
    },
  );
};
