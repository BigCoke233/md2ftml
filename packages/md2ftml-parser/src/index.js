/**
 * Markdown to FTML
 *
 * @author Eltrac
 * @version 0.0.1
 */

import MDParser from './mdParser';
import FTMLParser from './ftmlParser';

export default class MD2FTML {
  constructor() {
    this.version = '0.0.1';

    /**
     * MD2FTML.parse()
     *
     * entry method that converts markdown to FTML
     * or the other way around
     */

    this.parse = (text, from = 'markdown') => {
      let parsed = text;

      if (from === 'markdown') {
        parsed = MDParser.parse(parsed);
      } else if (from === 'ftml' || from === 'wikidot') {
        parsed = FTMLParser.parse(parsed);
      }

      return parsed;
    };
  }
}

export const md2ftml = new MD2FTML();
