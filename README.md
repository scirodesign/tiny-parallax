# tiny-parallax
A very simple and easy to use parallax plugin that is less than 2kb. I was annoyed using other parallax plugins that were too heavy. 




<b>USEAGE :</b>

jQuery("element").tinyparallax();
<br>
<br>
<b>Options :</b>

There are of course some simple options to help customize the end result

<ul>
<li>movePercent : Amount of parallax movement</li>
<li>offset : manual offset to start parllax (can be negative)</li>
<li>mobile : allow on mobile?</li>
<li>direction : up or down "up" / "down"</li>
</ul>
<br>
<br>
<b>Examples with options:</b>

jQuery("element").tinyparallax({<b>mobile:false, movePercent : 0.4</b>});
--Results in no parallax on mobile and more movement per scroll
<br>
jQuery("element").tinyparallax({<b>movePercent : 0.05</b>});
--Results in less movement per scroll
