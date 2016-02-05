## Functions

<dl>
<dt><a href="#addClass">addClass(c, e)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#ascendUntil">ascendUntil(e, c)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd></dd>
<dt><a href="#descendUntil">descendUntil(e, c)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd></dd>
<dt><a href="#removeClass">removeClass(c, e)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
</dl>

<a name="addClass"></a>
## addClass(c, e) ⇒ <code>boolean</code>
**Kind**: global function  
**Summary**: add a CSS class to an HTML element  
**Returns**: <code>boolean</code> - - whether the className has been added or not (returns false if className was already present)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>c</td><td><code>string</code></td><td><p>className to add</p>
</td>
    </tr><tr>
    <td>e</td><td><code>object</code></td><td><p>HTML element to affect</p>
</td>
    </tr>  </tbody>
</table>

<a name="ascendUntil"></a>
## ascendUntil(e, c) ⇒ <code>object</code> &#124; <code>undefined</code>
**Kind**: global function  
**Summary**: traverses the DOM by traveling up parentNodes until the provided condition returns true  
**Returns**: <code>object</code> &#124; <code>undefined</code> - node where condition is true, otherwise undefined  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>e</td><td><code>object</code></td><td><p>HTML element to start with</p>
</td>
    </tr><tr>
    <td>c</td><td><code>function</code></td><td><p>condition test function which will recursively be called with an HTML element argument</p>
</td>
    </tr>  </tbody>
</table>

<a name="descendUntil"></a>
## descendUntil(e, c) ⇒ <code>object</code> &#124; <code>undefined</code>
**Kind**: global function  
**Summary**: traverses the DOM by traveling down childNodes, iteratively, until the provided condition returns true  
**Returns**: <code>object</code> &#124; <code>undefined</code> - node where condition is true, otherwise undefined  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>e</td><td><code>object</code></td><td><p>HTML element to start with</p>
</td>
    </tr><tr>
    <td>c</td><td><code>function</code></td><td><p>condition test function which will recursively be called with an HTML element argument</p>
</td>
    </tr>  </tbody>
</table>

<a name="removeClass"></a>
## removeClass(c, e) ⇒ <code>boolean</code>
**Kind**: global function  
**Summary**: remove a CSS class from an HTMl element  
**Returns**: <code>boolean</code> - - whether the className has been removed or not (returns false if className wasn't present)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>c</td><td><code>string</code></td><td><p>className to add</p>
</td>
    </tr><tr>
    <td>e</td><td><code>object</code></td><td><p>HTML element to affect</p>
</td>
    </tr>  </tbody>
</table>

