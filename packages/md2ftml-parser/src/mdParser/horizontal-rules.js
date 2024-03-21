/**
 * Parse horizontal rules (---, *** => ----)
 * @param text
 */
export const parseHR = text => {
  return text.replace(/(^---|^\*+|^_+)$/gm, '----');
};
