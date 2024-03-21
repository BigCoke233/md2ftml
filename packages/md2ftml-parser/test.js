// eslint-disable-next-line node/file-extension-in-import
import MD2FTML from './dist/es/index.js';

const converter = new MD2FTML();
console.log(
  converter.parse(`
3***453***35### \`565\`
#### _text_
####### ~~v9~~0
###### \`67\`
_**test**_ ***italic bold*** ~~**bold**~~

- test
  - \`test
  - tsaf\`
- tesv
- tet
_____

1. item
2. item
  1. item
  2. item
  3. item
3. item

Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem

<span class="text">span text</span>

***

!!!
~~~java
public static void main(String[] args) {
  // *text*
}
~~~
!!!

<html>
<div class="test">
    <p>123</p>
</div>
</html>

\`\`\`
test

test
\`\`\`

setext heading 1
test wrap
==

<!--comment-->

| test | 234 | header |
| ---- | --- | ------ |
| dont | pick | me |
| what | the | fuck |

test heading 2
---

[Hounds](entity-5) 
![Google](https://www.google.com/) 
![](https://www.google.com/) 
[Google](google.com)[^footnote]
`),
);
