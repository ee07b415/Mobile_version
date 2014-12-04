#pragma strict

function OnGUI () {
	// Make a background box	
	GUI.Box (Rect (10,10,100,40), "HighScore: \n"+Scoreb.historyscore);
	
	if (GUI.Button (Rect (10,50,100,100), "Start Game")) {
		Application.LoadLevel(1);
	}
	
	if (GUI.Button (Rect (10,150,100,100), "Tutorial")) {
		Application.LoadLevel(2);
	}
}
