import { parseHeadings, parseSetextHeadings } from './mdParser/headings';
import {
  parseInlineCode,
  parseItalic,
  parseStrikethrough,
} from './mdParser/decorations';
import { parseLink } from './mdParser/links';
import { parseImage } from './mdParser/images';
import { parseCodeBlock, protectCodeBlock } from './mdParser/codeblocks';
import { parseOrderedList, parseUnorderedList } from './mdParser/lists';
import { parseFootnote } from './mdParser/footnotes';
import { parseHR } from './mdParser/horizontal-rules';
import { protectEscapedText, restoreEscapedText } from './mdParser/escaping';
import { protectHtmlFrame, restoreHtmlFrame } from './mdParser/iframes';
import { parseFrameTags, parseHtmlTags } from './mdParser/html-tags';
import { parseTable } from './mdParser/table';

const MDParser = {
  /* === Markdown Elements === */

  parseHeadings,
  parseSetextHeadings,

  parseItalic,
  parseStrikethrough,
  parseInlineCode,

  parseLink,
  parseImage,

  protectCodeBlock,
  parseCodeBlock,

  parseUnorderedList,
  parseOrderedList,

  parseFootnote,
  parseHR,

  parseTable,

  /* === MD2FTML Features === */

  protectEscapedText,
  restoreEscapedText,

  parseHtmlTags,

  /* === Handle Exceptions === */

  protectHtmlFrame,
  restoreHtmlFrame,
  parseFrameTags,

  /* === Entry method === */

  /**
   * MDParser.parse()
   *
   * method that converts markdown to FTML
   */
  parse: md => {
    let parsed = md;

    // protect text that require no parsing
    const codeBlockProtection = MDParser.protectCodeBlock(parsed);
    parsed = codeBlockProtection.protectedText;

    parsed = MDParser.parseFrameTags(parsed);
    const iframes = MDParser.protectHtmlFrame(parsed);
    parsed = iframes.protectedText;

    const escaped = MDParser.protectEscapedText(parsed);
    parsed = escaped.protectedText;

    // block elements
    parsed = MDParser.parseTable(parsed);
    parsed = MDParser.parseUnorderedList(parsed);
    parsed = MDParser.parseOrderedList(parsed);
    parsed = MDParser.parseHR(parsed);
    parsed = MDParser.parseHeadings(parsed);
    parsed = MDParser.parseSetextHeadings(parsed);

    // inline elements
    parsed = MDParser.parseItalic(parsed);
    parsed = MDParser.parseStrikethrough(parsed);
    parsed = MDParser.parseInlineCode(parsed);
    parsed = MDParser.parseLink(parsed);
    parsed = MDParser.parseImage(parsed);
    parsed = MDParser.parseFootnote(parsed);

    parsed = MDParser.parseHtmlTags(parsed);

    // restore and parse code block
    parsed = MDParser.restoreEscapedText(parsed, escaped.escapedTexts);
    parsed = MDParser.restoreHtmlFrame(parsed, iframes.htmlFrames);
    parsed = MDParser.parseCodeBlock(parsed, codeBlockProtection.codeBlocks);

    return parsed;
  },
};

export default MDParser;
