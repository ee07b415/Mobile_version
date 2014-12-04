#pragma strict
// level control
//  for level one initial direction
public var bluephase:  int = 1;
public var initx	:  float;
public var inity	:  float;
//level two initial direction
public var initdirection : int = 1;
public var inirecord : int;
//level two enemy finder for 2nd order line use
public var x : float;
public var y : float;
public var slope : float = 1.0;
public var inlock : int = 1; // in case of fly away, direction change can only happen once on each wall

function Start(){
	 x = GameObject.Find("enemy").transform.position.x;
	 y = GameObject.Find("enemy").transform.position.y;
	 initx = transform.position.x;
	 inity = transform.position.y;
	 inirecord = initdirection;
}

function Update () {

	var x : float = Mathf.Abs(GameObject.Find("You").transform.position.x-transform.position.x);
	var y : float = Mathf.Abs(GameObject.Find("You").transform.position.y-transform.position.y);

	// fire translate
	if(transform.position.y<6){
		switch(bluephase){
			case 1://straight line
					//Debug.Log(transform.position.x+" "+transform.position.y);
					transform.Translate(Vector2(initx/(Mathf.Sqrt(initx*initx+inity*inity)),inity/(Mathf.Sqrt(initx*initx+inity*inity))) * 3 * Time.deltaTime);
					
			break;
			case 2://Parabola
					var phase2x : float = GameObject.Find("You").transform.position.x-transform.position.x;
					var phase2y : float = GameObject.Find("You").transform.position.y-transform.position.y;
					transform.Translate(Vector2(phase2x/(Mathf.Sqrt(phase2x*phase2x+phase2y*phase2y)), phase2y/(Mathf.Sqrt(phase2x*phase2x+phase2y*phase2y))) * 3 * Time.deltaTime);
					initx = transform.position.x;
	 				inity = transform.position.y;					
			break;	
		}
	}
	
	if(Mathf.Abs(transform.position.x)>=5||Mathf.Abs(transform.position.y)>=5){
		Destroy (gameObject);
	}
	
	//future bug place if bullet moving too fast, need better algorithm to detect colision
	if(x<0.14&&y<0.14){		
		Scoreb.score=Scoreb.score-1;
		Destroy (gameObject);
	}
}