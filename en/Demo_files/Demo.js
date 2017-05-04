// Created by iWeb 3.0.4 local-build-20170504

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="498" height="296" style="height: 296px; left: 109px; position: absolute; top: 92px; width: 498px; z-index: 1; "><param name="src" value="Media/2016%20Demo%2024fps-medium.m4v" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="498" height="296" style="height: 296px; left: 109px; position: absolute; top: 92px; width: 498px; z-index: 1; "><param name="src" value="Demo_files/2016%20Demo%2024fps-medium.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/2016%20Demo%2024fps-medium.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="498" height="296" data="Media/2016%20Demo%2024fps-medium.m4v" style="height: 296px; left: 109px; position: absolute; top: 92px; width: 498px; z-index: 1; "><param name="src" value="Media/2016%20Demo%2024fps-medium.m4v"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Demo_files/DemoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
