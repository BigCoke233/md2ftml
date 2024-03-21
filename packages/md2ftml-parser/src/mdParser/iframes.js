/**
 * Protect Html iFrame ([[html]] syntax)
 * @param text
 * @returns {{htmlFrames: *[], protectedText: *}}
 */
export const protectHtmlFrame = text => {
  const reg = /(\[\[html]][\s\S]*?\[\[\/html]])/g;
  let placeholderIndex = 0;
  const htmlFrames = [];

  function createPlaceholder() {
    return `{(HTML:${placeholderIndex++})}`;
  }

  const protectedText = text.replace(reg, match => {
    const placeholder = createPlaceholder();
    htmlFrames.push(match);
    return placeholder;
  });

  return { protectedText, htmlFrames };
};

/**
 * Resotre iFrames, no further parsing needed
 * @param text
 * @param htmlFrames
 * @returns {*}
 */
export const restoreHtmlFrame = (text, htmlFrames) => {
  let restored = text;
  htmlFrames.forEach((text, index) => {
    const placeholder = `{(HTML:${index})}`;
    restored = restored.replace(placeholder, text);
  });
  return restored;
};
