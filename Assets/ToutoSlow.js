#pragma strict

public static var touchphase : int = 1;

function Update () {
	if (Input.touchCount > 0) {
		var touch = Input.GetTouch(0);
		
		// Handle finger movements based on touch phase.
		switch (touch.phase) {
			// Record initial touch position.
			case TouchPhase.Began:
				cubemove.sensitive = 3;
				touchphase = 2;
				break;
			
			// Determine direction by comparing the current touch
			// position with the initial one.
			//case TouchPhase.Moved:
			//	direction = touch.position - startPos;
			//	break;
			
			// Report that a direction has been chosen when the finger is lifted.
			case TouchPhase.Ended:
				cubemove.sensitive = 0.1;
				touchphase = 1;
				break;
		}
	}
}