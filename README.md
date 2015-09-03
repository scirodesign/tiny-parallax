# tiny-parallax
A very simple and easy to use parallax plugin that is less than 2kb. I was annoyed using other parallax plugins that were too heavy, performed poorly and were too complex.



<br>
<b>USEAGE :</b>

jQuery("element").tinyparallax();
<br>
<br>
<br>
<b>Options :</b>

There are of course some simple options to help customize the end result

<ul>
<li>movePercent : Amount of parallax movement (decimal value - default is 0.1)</li>
<li>offset : manual offset to start parallax (offset the parallax image Ex. -200)</li>
<li>mobile : allow on mobile? (boolean value true/false)</li>
<li>direction : up or down (takes string of "up" / "down")</li>
</ul>
<br>
<br>
<b>Examples with options:</b>

jQuery("element").tinyparallax({<b>mobile:false, movePercent : 0.4</b>});<br>
--Results in no parallax on mobile and more movement per scroll
<br><br>
jQuery("element").tinyparallax({<b>movePercent : 0.05</b>});<br>
--Results in less movement per scroll
