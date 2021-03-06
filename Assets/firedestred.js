﻿#pragma strict
// level control
//  for level one initial direction
private var movephase	: int = 1;
public var initx	:  float;
public var inity	:  float;
public var bullettype : int;
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
		switch(movephase){
			case 1://straight line
					//Debug.Log(transform.position.x+" "+transform.position.y);
					transform.Translate(Vector2(initx/(Mathf.Sqrt(initx*initx+inity*inity)),inity/(Mathf.Sqrt(initx*initx+inity*inity))) * 3 * Time.deltaTime);
					if(Mathf.Abs(transform.position.y)>=5){		
						inity = inity-2*inity*Mathf.Floor(Mathf.Abs(transform.position.y)/5);
						transform.position = Vector2(transform.position.x,10*transform.position.y/Mathf.Abs(transform.position.y)-transform.position.y);
					}
					
					if(Mathf.Abs(transform.position.x)>=5){
						initx = initx-2*initx*Mathf.Floor(Mathf.Abs(transform.position.x)/5);
						transform.position = Vector2(10*transform.position.x/Mathf.Abs(transform.position.x)-transform.position.x,transform.position.y);
					}
					
					/*
					if(x<2.4&&y<2.4){
						if(Input.GetMouseButtonDown(0)){
							movephase=2;
						}
					}
					*///mouse test
					if(x<1.5&&y<1.5){
						if(ToutoSlow.touchphase == 2){
							movephase=2;
						}
					}
					
			break;
			case 2://Parabola
					var phase2x : float = GameObject.Find("You").transform.position.x-transform.position.x;
					var phase2y : float = GameObject.Find("You").transform.position.y-transform.position.y;
					transform.Translate(Vector2(phase2x/(Mathf.Sqrt(phase2x*phase2x+phase2y*phase2y)), phase2y/(Mathf.Sqrt(phase2x*phase2x+phase2y*phase2y))) * 3 * Time.deltaTime);
					initx = transform.position.x;
	 				inity = transform.position.y;
	 				/*
	 				if(Input.GetMouseButtonUp(0)){
							movephase=1;
					}
					*///mouse test
					
					if(ToutoSlow.touchphase == 1){
							movephase=1;
					}
					
			break;	
		}
	}
	
	//future bug place if bullet moving too fast, need better algorithm to detect colision
	if(x<0.14&&y<0.14){
		if(bullettype == 0){
			firedest.speedup = 10;
		}
		firedest.redinline-=bullettype;
		if(firedest.redinline<0) firedest.redinline = 0;
		
		Scoreb.score-=4*bullettype;
		Destroy (gameObject);
	}
}