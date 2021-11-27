gdjs.AboutCode = {};
gdjs.AboutCode.GDGameTitleObjects1= [];
gdjs.AboutCode.GDGameTitleObjects2= [];
gdjs.AboutCode.GDGameTitleObjects3= [];
gdjs.AboutCode.GDBtnStartObjects1= [];
gdjs.AboutCode.GDBtnStartObjects2= [];
gdjs.AboutCode.GDBtnStartObjects3= [];
gdjs.AboutCode.GDTitleLogoObjects1= [];
gdjs.AboutCode.GDTitleLogoObjects2= [];
gdjs.AboutCode.GDTitleLogoObjects3= [];
gdjs.AboutCode.GDTxtBackObjects1= [];
gdjs.AboutCode.GDTxtBackObjects2= [];
gdjs.AboutCode.GDTxtBackObjects3= [];
gdjs.AboutCode.GDTxtExitObjects1= [];
gdjs.AboutCode.GDTxtExitObjects2= [];
gdjs.AboutCode.GDTxtExitObjects3= [];
gdjs.AboutCode.GDTxtAboutObjects1= [];
gdjs.AboutCode.GDTxtAboutObjects2= [];
gdjs.AboutCode.GDTxtAboutObjects3= [];
gdjs.AboutCode.GDTxtAboutGameObjects1= [];
gdjs.AboutCode.GDTxtAboutGameObjects2= [];
gdjs.AboutCode.GDTxtAboutGameObjects3= [];
gdjs.AboutCode.GDSourceCodeObjects1= [];
gdjs.AboutCode.GDSourceCodeObjects2= [];
gdjs.AboutCode.GDSourceCodeObjects3= [];
gdjs.AboutCode.GDTxtItchIoObjects1= [];
gdjs.AboutCode.GDTxtItchIoObjects2= [];
gdjs.AboutCode.GDTxtItchIoObjects3= [];
gdjs.AboutCode.GDCopyrightObjects1= [];
gdjs.AboutCode.GDCopyrightObjects2= [];
gdjs.AboutCode.GDCopyrightObjects3= [];

gdjs.AboutCode.conditionTrue_0 = {val:false};
gdjs.AboutCode.condition0IsTrue_0 = {val:false};
gdjs.AboutCode.condition1IsTrue_0 = {val:false};


gdjs.AboutCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("bgm_played"), true);
}if (gdjs.AboutCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("bgm_vol").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("bgm_vol")));
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("bgm_vol")));
}}

}


{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isMusicOnChannelPaused(runtimeScene, 1);
}if (gdjs.AboutCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}if (gdjs.AboutCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bakutabaku-musik.mp3", 1, true, 42, 1);
}}

}


};gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDSourceCodeObjects1Objects = Hashtable.newFrom({"SourceCode": gdjs.AboutCode.GDSourceCodeObjects1});gdjs.AboutCode.eventsList1 = function(runtimeScene) {

{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.AboutCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://github.com/Galang23/baku-tabaku-android/", runtimeScene);
}}

}


};gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDTxtItchIoObjects1Objects = Hashtable.newFrom({"TxtItchIo": gdjs.AboutCode.GDTxtItchIoObjects1});gdjs.AboutCode.eventsList2 = function(runtimeScene) {

{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.AboutCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://caksono.itch.io/baku-tabaku", runtimeScene);
}}

}


};gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDTxtBackObjects1Objects = Hashtable.newFrom({"TxtBack": gdjs.AboutCode.GDTxtBackObjects1});gdjs.AboutCode.eventsList3 = function(runtimeScene) {

{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.AboutCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.AboutCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.AboutCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.AboutCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SourceCode"), gdjs.AboutCode.GDSourceCodeObjects1);

gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDSourceCodeObjects1Objects, runtimeScene, true, false);
}if (gdjs.AboutCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.AboutCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TxtItchIo"), gdjs.AboutCode.GDTxtItchIoObjects1);

gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDTxtItchIoObjects1Objects, runtimeScene, true, false);
}if (gdjs.AboutCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.AboutCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TxtBack"), gdjs.AboutCode.GDTxtBackObjects1);

gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDTxtBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.AboutCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.AboutCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.AboutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AboutCode.GDGameTitleObjects1.length = 0;
gdjs.AboutCode.GDGameTitleObjects2.length = 0;
gdjs.AboutCode.GDGameTitleObjects3.length = 0;
gdjs.AboutCode.GDBtnStartObjects1.length = 0;
gdjs.AboutCode.GDBtnStartObjects2.length = 0;
gdjs.AboutCode.GDBtnStartObjects3.length = 0;
gdjs.AboutCode.GDTitleLogoObjects1.length = 0;
gdjs.AboutCode.GDTitleLogoObjects2.length = 0;
gdjs.AboutCode.GDTitleLogoObjects3.length = 0;
gdjs.AboutCode.GDTxtBackObjects1.length = 0;
gdjs.AboutCode.GDTxtBackObjects2.length = 0;
gdjs.AboutCode.GDTxtBackObjects3.length = 0;
gdjs.AboutCode.GDTxtExitObjects1.length = 0;
gdjs.AboutCode.GDTxtExitObjects2.length = 0;
gdjs.AboutCode.GDTxtExitObjects3.length = 0;
gdjs.AboutCode.GDTxtAboutObjects1.length = 0;
gdjs.AboutCode.GDTxtAboutObjects2.length = 0;
gdjs.AboutCode.GDTxtAboutObjects3.length = 0;
gdjs.AboutCode.GDTxtAboutGameObjects1.length = 0;
gdjs.AboutCode.GDTxtAboutGameObjects2.length = 0;
gdjs.AboutCode.GDTxtAboutGameObjects3.length = 0;
gdjs.AboutCode.GDSourceCodeObjects1.length = 0;
gdjs.AboutCode.GDSourceCodeObjects2.length = 0;
gdjs.AboutCode.GDSourceCodeObjects3.length = 0;
gdjs.AboutCode.GDTxtItchIoObjects1.length = 0;
gdjs.AboutCode.GDTxtItchIoObjects2.length = 0;
gdjs.AboutCode.GDTxtItchIoObjects3.length = 0;
gdjs.AboutCode.GDCopyrightObjects1.length = 0;
gdjs.AboutCode.GDCopyrightObjects2.length = 0;
gdjs.AboutCode.GDCopyrightObjects3.length = 0;

gdjs.AboutCode.eventsList4(runtimeScene);
return;

}

gdjs['AboutCode'] = gdjs.AboutCode;
