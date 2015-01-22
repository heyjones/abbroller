# Abbroller
This plugin will automatically expand / collapse the contents of an &lt;abbr&gt; tag based on the length of the string and the width of the container.

## How To Use
Initialize the plugin by targeting an object. By default, the plugin will match all &lt;th&gt; and &lt;td&gt; in a table, but you may provide an alternate pattern.
```JS
$(document).ready(function(){
  $('.table-abbroller').abbroller({
    pattern: 'th > abbr, td > abbr'
  });
});
```
Use the <abbr> tag like you normally would. I'm using &lt;td&gt; as an example but this plugin should work with anything (div, li, etc).
```HTML
<table class="table-abbroller">
  <thead>
    <tr>
      <th><abbr title="Abbreviation">Abbr</abbr></th>
    </tr>
  </thead>
</table>
```
If the width of the element is less than the parent, the title attribute of the &lt;attr&gt; tag will be displayed. Once the element is equal to the width of the parent the native behavior is restored.
