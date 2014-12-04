#pragma strict

public static var score: int = 0;
public static var historyscore: int = 0;
public var paused: boolean;
public static var curtime : float;

function OnGUI () {
	// Make a background box
	GUI.Box (Rect (10,10,100,40), "Score: "+Scoreb.score);
	GUI.Box (Rect (10,260,100,40), "NextSpeedup: "+(4-firedest.redinline));
		
	if(PlayerPrefs.HasKey("historyscore")){
		historyscore = PlayerPrefs.GetInt("historyscore");
	}
	
	GUI.Box (Rect (10,50,100,40), "HighScore: \n"+Scoreb.historyscore);
	GUI.Box (Rect (10,90,100,70), "Ax: "+Input.acceleration.x+"\nAy:"+Input.acceleration.y+"\nAz:"+Input.acceleration.z+"\nSpeed:"+cubemove.moveSpeed);
	
	curtime = audio.time;
	
	if (GUI.Button (Rect (10,160,100,100), "Pause")) {
		Time.timeScale = 0;
		audio.Pause();
		paused = true;
	}
	
	if (paused) {
			if (GUI.Button (new Rect (110,160,100,50), "continue")) {
				Time.timeScale = 1;
				audio.Play(44100);
				paused = false;
			}
			if (GUI.Button (new Rect (110,210,100,50), "Restart")) {
				Scoreb.score = 0;
				firedest.redinline = 0;
//				var clones = GameObject.FindGameObjectsWithTag ("buttlet");
//    			for (var clone in clones){
//        			Destroy(clone);
//   		 		}         						
				Application.LoadLevel(1);
				paused = false;
				Time.timeScale = 1;
			}
			if (GUI.Button (new Rect (110,260,100,50), "Quit")) {
				Application.LoadLevel(0);
			}
	}
	/*/ Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (10,90,80,20), "Level 1")) {
		firedest.levelcont = 1;
		Application.LoadLevel (Application.loadedLevel);
		
		if(Scoreb.score>Scoreb.historyscore){
			Scoreb.historyscore=Scoreb.score;
		}
		Scoreb.score=0;
	}
	
	if (GUI.Button (Rect (10,130,80,20), "Level 2")) {
		firedest.levelcont = 2;
		Application.LoadLevel (Application.loadedLevel);
		
		if(Scoreb.score>Scoreb.historyscore){
			Scoreb.historyscore=Scoreb.score;
		}
		Scoreb.score=0;
	}
	*/	
}


