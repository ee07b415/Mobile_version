#pragma strict

public var x : float;
public var y : float;
public var speed : float;
public var xinc: float = 0.0;
public var time : int = 91; 
public var CLKint : int = 0;
public static var loc : int =1;
var speedtime : float = 0.0;

function Start() {
	
}

function Update () {
	CLKint = parseInt(Scoreb.curtime);
	
	if(CLKint>=89){	
		if(Scoreb.score>Scoreb.historyscore){
			Scoreb.historyscore=Scoreb.score;
			PlayerPrefs.SetInt("historyscore", Scoreb.score);
		}
		Scoreb.score=0;
		firedest.redinline = 0;
		Application.LoadLevel (Application.loadedLevel);
	}
	
	if(firedest.speedup==10){
		speedtime = Scoreb.curtime;
		firedest.speedup=1;
	}
	
	if(Mathf.Abs(xinc)<6.2831853){
		if(speedtime>=Scoreb.curtime-5&&speedtime!=0.0){
			xinc = xinc + speed*Time.deltaTime*10;
		}else{
			xinc = xinc + speed*Time.deltaTime;
		}
	}else{
		xinc = 0;
		loc = 1;
	}
	
	x=4*Mathf.Sin(xinc);
	y=4*Mathf.Cos(xinc);
	transform.position.x = x;
	transform.position.y = y;
}