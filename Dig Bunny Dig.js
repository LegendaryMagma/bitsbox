fill('buried')
r = stamp('rabbit3',150)

function loop() {
	stamp('dig', r.x , r.y)
	r.move(RIGHT,20)
	r.wrap()
	r.front()
	if (random(50) == 1)
 	 r.rotate(random(360),1000)
	}
