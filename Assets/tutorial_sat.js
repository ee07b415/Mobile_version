#pragma strict

var x : float;
var y : float;
var speed : float;
var xinc: float = 0.0;
public static var tutorloc : int =1;

function Start () {

}

function Update () {
	//renderer.enabled=false;
	if(Mathf.Abs(xinc)<6.2831853){
			xinc = xinc + speed*Time.deltaTime;
	}else{
		xinc = 0;
		tutorloc = 1;
	}
	
	x=4*Mathf.Sin(xinc);
	y=4*Mathf.Cos(xinc);
	transform.position.x = x;
	transform.position.y = y;
}