/**
 * Parse Italic Style (_text_, *text* => //text//)
 * @param text
 * @returns {string}
 */
export const parseItalic = text => {
  let parsed = text;

  // protect ***italic_bold*** pattern
  parsed = parsed.replace(/\*\*\*([^\s*]+)\*\*\*/g, '{(ITALICBOLD:$1)}');
  // protect **bold** pattern
  parsed = parsed.replace(/\*\*([^\s*]+)\*\*/g, '{(BOLD:$1)}');

  // _text_ => //text//
  parsed = parsed.replace(/_([^\s_]+)_/g, '//$1//');
  // *text* => //text//
  parsed = parsed.replace(/\*([^\s*]+)\*/g, '//$1//');

  // release ***italic_bold*** pattern
  parsed = parsed.replace(/\{\(ITALICBOLD:(.*?)\)}/g, '//**$1**//');
  // release **bold** pattern
  parsed = parsed.replace(/\{\(BOLD:(.*?)\)}/g, '**$1**');

  return parsed;
};

/**
 * Parse strike-through text (~~text~~ => --text--)
 * @param text
 * @returns {*}
 */
export const parseStrikethrough = text => {
  return text.replace(/~~(.*?)~~/g, '--$1--');
};

/**
 * Parse monospaced text / inline code (`text` => {{text}})
 * @param text
 * @returns {*}
 */
export const parseInlineCode = text => {
  return text.replace(/`(.*?)`/g, '{{$1}}');
};
