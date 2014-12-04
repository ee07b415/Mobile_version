#pragma strict

public var bullet : GameObject;
public var bulletB : GameObject;
public var wave : int = 3;
var lasttime : float = 0.0;
var bluewave : int = 0;
public var angl = 6.2831853/8;
public var x : float;
public var y : float;

function Start () {
	wave = 3;
}

function Update () {
	var bulletInstance : GameObject;
	
	if(Scoreb.curtime-lasttime>=1.2){
		lasttime = Scoreb.curtime;
		for(var i : int = 0;i<4;i++){
				x = 0.1*Mathf.Sin(i*angl*2+bluewave%30*6.2831853/120);
				y = 0.1*Mathf.Cos(i*angl*2+bluewave%30*6.2831853/120);
				bulletInstance = Instantiate(bulletB, Vector2(x,y), GameObject.Find("enemy").transform.rotation);
		}
		bluewave++;
	}
	
	if(Scoreb.curtime>5.5&&wave==3){
			for(i= 0;i<8;i++){
				x = 0.1*Mathf.Sin(i*angl+0.12);
				y = 0.1*Mathf.Cos(i*angl+0.12);
				bulletInstance = Instantiate(bullet, Vector2(x,y), GameObject.Find("enemy").transform.rotation);
			}
			wave--;
	}
	
	
	
	if(Scoreb.curtime>49.1&&wave==2){
			for(i = 0;i<8;i++){
				x = 0.1*Mathf.Sin(angl*i+0.12);
				y = 0.1*Mathf.Cos(angl*i+0.12);
				bulletInstance = Instantiate(bullet, Vector2(x,y), GameObject.Find("enemy").transform.rotation);
			}
			wave--;
	}
	
}