// Created by iWeb 3.0.4 local-build-20170923

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="500" height="297" style="height: 297px; left: 100px; position: absolute; top: 91px; width: 500px; z-index: 1; "><param name="src" value="Media/2017%20Website%20Demo.m4v" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="500" height="297" style="height: 297px; left: 100px; position: absolute; top: 91px; width: 500px; z-index: 1; "><param name="src" value="Demo_files/2017%20Website%20Demo.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/2017%20Website%20Demo.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="500" height="297" data="Media/2017%20Website%20Demo.m4v" style="height: 297px; left: 100px; position: absolute; top: 91px; width: 500px; z-index: 1; "><param name="src" value="Media/2017%20Website%20Demo.m4v"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Demo_files/DemoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
