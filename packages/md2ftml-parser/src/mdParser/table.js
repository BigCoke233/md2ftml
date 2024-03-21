export const parseTable = text => {
  let parsed = text;

  const regHeader = /(^\|(?:\s?[^-]*?\s?\|)+$)(\r?\n^\|(?:\s?-+\s?\|)+$)/gm;
  const regBody = /^\|(?:\s?-+\s?\|)+$\r?\n(^\|(?:\s?[^-]*?\s?\|)+$)/gm;

  // parse table header
  parsed = parsed.replace(regHeader, (str, rawHeader, divide) => {
    const header = rawHeader
      .replace(/\|(?![^|\r\n]*$)/g, '||~')
      .replace(/\|$/g, '||');
    return `${header}${divide}`; //
  });

  // parse table body and remove divide
  parsed = parsed.replace(regBody, (str, body) => {
    return body.replaceAll('|', '||');
  });

  return parsed;
};
