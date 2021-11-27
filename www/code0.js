gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDGameTitleObjects1= [];
gdjs.MainMenuCode.GDGameTitleObjects2= [];
gdjs.MainMenuCode.GDGameTitleObjects3= [];
gdjs.MainMenuCode.GDBtnStartObjects1= [];
gdjs.MainMenuCode.GDBtnStartObjects2= [];
gdjs.MainMenuCode.GDBtnStartObjects3= [];
gdjs.MainMenuCode.GDTitleLogoObjects1= [];
gdjs.MainMenuCode.GDTitleLogoObjects2= [];
gdjs.MainMenuCode.GDTitleLogoObjects3= [];
gdjs.MainMenuCode.GDEnableMusicObjects1= [];
gdjs.MainMenuCode.GDEnableMusicObjects2= [];
gdjs.MainMenuCode.GDEnableMusicObjects3= [];
gdjs.MainMenuCode.GDTxtExitObjects1= [];
gdjs.MainMenuCode.GDTxtExitObjects2= [];
gdjs.MainMenuCode.GDTxtExitObjects3= [];
gdjs.MainMenuCode.GDTxtAboutObjects1= [];
gdjs.MainMenuCode.GDTxtAboutObjects2= [];
gdjs.MainMenuCode.GDTxtAboutObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("bgm_played"), true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("bgm_vol").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("bgm_vol")));
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("bgm_vol")));
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isMusicOnChannelPaused(runtimeScene, 1);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bakutabaku-musik.mp3", 1, true, 42, 1);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDBtnStartObjects1Objects = Hashtable.newFrom({"BtnStart": gdjs.MainMenuCode.GDBtnStartObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDBtnStartObjects1Objects = Hashtable.newFrom({"BtnStart": gdjs.MainMenuCode.GDBtnStartObjects1});gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDBtnStartObjects1, gdjs.MainMenuCode.GDBtnStartObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDBtnStartObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBtnStartObjects2[i].setAnimationName("BtnStartPressed");
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDTxtExitObjects1Objects = Hashtable.newFrom({"TxtExit": gdjs.MainMenuCode.GDTxtExitObjects1});gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDTxtAboutObjects1Objects = Hashtable.newFrom({"TxtAbout": gdjs.MainMenuCode.GDTxtAboutObjects1});gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "About", false);
}}

}


};gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStart"), gdjs.MainMenuCode.GDBtnStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDBtnStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDBtnStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDBtnStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBtnStartObjects1[i].setAnimationName("BtnStartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStart"), gdjs.MainMenuCode.GDBtnStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDBtnStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDBtnStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDBtnStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBtnStartObjects1[i].setAnimationName("BtnStartHover");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TxtExit"), gdjs.MainMenuCode.GDTxtExitObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDTxtExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TxtAbout"), gdjs.MainMenuCode.GDTxtAboutObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDTxtAboutObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects3.length = 0;
gdjs.MainMenuCode.GDBtnStartObjects1.length = 0;
gdjs.MainMenuCode.GDBtnStartObjects2.length = 0;
gdjs.MainMenuCode.GDBtnStartObjects3.length = 0;
gdjs.MainMenuCode.GDTitleLogoObjects1.length = 0;
gdjs.MainMenuCode.GDTitleLogoObjects2.length = 0;
gdjs.MainMenuCode.GDTitleLogoObjects3.length = 0;
gdjs.MainMenuCode.GDEnableMusicObjects1.length = 0;
gdjs.MainMenuCode.GDEnableMusicObjects2.length = 0;
gdjs.MainMenuCode.GDEnableMusicObjects3.length = 0;
gdjs.MainMenuCode.GDTxtExitObjects1.length = 0;
gdjs.MainMenuCode.GDTxtExitObjects2.length = 0;
gdjs.MainMenuCode.GDTxtExitObjects3.length = 0;
gdjs.MainMenuCode.GDTxtAboutObjects1.length = 0;
gdjs.MainMenuCode.GDTxtAboutObjects2.length = 0;
gdjs.MainMenuCode.GDTxtAboutObjects3.length = 0;

gdjs.MainMenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
