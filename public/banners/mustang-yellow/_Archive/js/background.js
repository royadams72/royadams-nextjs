
	var stopAnimation = false;

	//EDIT x and y to determine the area for the explosions


	function looper() {
		if (!stopAnimation) {
			spawner();
			update(frameDelay);
			requestId = window.requestAnimationFrame(looper);
		}
	}