#pragma strict
var menuStyle: GUIStyle;
var curTime : float = 0;
function OnGUI () {
	// Make a background box	
	//GUI.Box (Rect (10,10,100,40), "HighScore: \n"+Scoreb.historyscore);
	
	curTime= parseInt(Time.time);
	if(curTime>=0&&curTime<=2)
		GUI.Label (Rect (10, 10, 100, 20), "Welcom to the firework world!", menuStyle);
	if(curTime>=3&&curTime<=5)
		GUI.Label (Rect (10, 10, 100, 20), "This is a quick tutorial", menuStyle);
	if(curTime>=6&&curTime<=8)
		GUI.Label (Rect (10, 10, 100, 20), "This is a quick tutorial", menuStyle);
		
		
	GUI.Label (Rect (10, 30, 100, 20), "timeInTutorial:"+curTime, menuStyle);
	
	if (GUI.Button (Rect (10,50,100,100), "ReStart")) {
		Application.LoadLevel(2);
	}
	
	if (GUI.Button (Rect (10,150,100,100), "BackToMenu")) {
		Application.LoadLevel(0);
	}
}