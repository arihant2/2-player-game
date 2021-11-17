var board = document.getElementById("board");
var jet1 = document.getElementById("jet1");
var jet2 = document.getElementById("jet2");
var match = 1;
var msg = document.getElementById('msg');
var health1 = document.getElementById('health1');
var health2 = document.getElementById('health2');

// function fn(player,event,keyLeft,keyRight,KeyShoot,bullets,bulletInitialPostion,health) {
function fn(player,event,keyLeft,keyRight,KeyShoot,bullets,bulletInitialPostion) {
	// // game end
	// if(health1.innerHTML==='0' || health2.innerHTML==='0') {
	// 	board.style.filter = "blur(2px)";
	// 	console.log(match);
	// 	match++;
	// 	over.innerHTML = "Round "+match;
	// 	over.style.display = "inline";
	// 	// return;
	// 	setTimeout(() => {
	// 		over.style.display = "none";		// 1000 ms = 1 second
	// 		board.style.filter = "none";
	// 		health1.innerHTML = '2';
	// 		health2.innerHTML = '2';
	// 	},1000);		// it means it will execute after 1 sec
	// }
	if(match > 5) {
		board.style.filter = "blur(2px)";
		over.innerHTML = "GAME OVER";
		over.style.display = "inline";
		msg.style.display = "none";
		// clearInterval(moveBullet);
		matches.innerHTML = --match;
		return;
	}

	// move player
	var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
	var right = parseInt(window.getComputedStyle(player).getPropertyValue("right"));

	if(event.key === keyLeft && left > 0)
		player.style.left = left - 10 + 'px';

	else if (event.key === keyRight && right > 0)
		player.style.left = left + 10 + 'px';


	// bullet
	if (event.key === KeyShoot) {
		var bullet = document.createElement("div");
		bullet.classList.add(bullets);
		// bullet.style.display = 'none';
		// bullet.style.visibility = 'hidden';
		board.appendChild(bullet);

		var moveBullet = setInterval(() => {
			// destroy enemy
			var bulletbound = bullet.getBoundingClientRect();

			if(bullets === 'bullets1') {
				var playerbound = jet2.getBoundingClientRect();
				if(
					// (bulletbound.x <= playerbound.x+10 || bulletbound.x >= playerbound.x-10) &&
					// (bulletbound.right >= playerbound.x-10 || bulletbound.x <= playerbound.right+10) &&
					bulletbound.right >= playerbound.left-10 &&
					bulletbound.left <= playerbound.right+10 &&
					// bulletbound.x == playerbound.x &&
					bulletbound.top == playerbound.bottom
				 ) {
					health2.innerHTML = parseInt(health2.innerHTML)-1;
					bullet.style.display = 'none';
					// bullet.style.filter = "none";
					clearInterval(moveBullet);
					// rock.parentElement.removeChild(rock);
					// board.removeChild(bullet);
					// console.log('p2',playerbound,'\nb2',bulletbound);
				}
			}
			else if(bullets === 'bullets2') {
				// { // if(bullets === 'bullets2')
				// var bullet2bound = bullet.getBoundingClientRect();
				var playerbound = jet1.getBoundingClientRect();
				// if(bulletbound.bottom == playerbound.top) {
				if(
					// (bulletbound.x <= playerbound.x+10 || bulletbound.x >= playerbound.x-10) &&
					// (bulletbound.right >= playerbound.x-10 || bulletbound.x <= playerbound.right+10) &&
					bulletbound.right >= playerbound.left-10 &&
					bulletbound.left <= playerbound.right+10 &&
					bulletbound.bottom == playerbound.top
				) {
					health1.innerHTML = parseInt(health1.innerHTML)-1;
					bullet.style.display = 'none';
			        // bullet.style.filter = "none";
					clearInterval(moveBullet);
					// console.log('p2',playerbound,'\nb1',bulletbound);
				}
			}

			// var bullet1bound = bullet.getBoundingClientRect();

			// if(bullets === 'bullets1' &&
				// bulletbound.left >= playerbound.left &&
				// bulletbound.right <= playerbound.right &&
				// bulletbound.top <= playerbound.bottom
				// bulletbound.bottom <= playerbound.bottom
			// ) {
				// rock.parentElement.removeChild(rock);

				// update score
			// 	document.getElementById('points').innerHTML = parseInt(document.getElementById('points').innerHTML)+1;
			// }

			// if(
			// 	bullet2bound.left >= player1bound.left &&
			// 	bullet2bound.right <= player1bound.right &&
			// 	bullet2bound.top <= player1bound.top &&
			// 	bullet2bound.bottom <= player1bound.bottom
			// ) {
			// 	document.getElementById('points').innerHTML = parseInt(document.getElementById('points').innerHTML)+1;
			// }

			// game end
			// if(health1.innerHTML==='0' || health2.innerHTML==='0') {
			// 	board.style.filter = "blur(2px)";
			// 	// console.log(match);
			// 	// match++;
			// 	over.innerHTML = "Round "+ ++match;
			// 	over.style.display = "inline";
			// 	// return;
			// 	setTimeout(() => {
			// 		over.style.display = "none";		// 1000 ms = 1 second
			// 		board.style.filter = "none";
			// 		health1.innerHTML = '2';
			// 		health2.innerHTML = '2';
			// 	},1000);		// it means it will execute after 1 sec
			// 	// clearInterval(moveBullet);
			// 	return mouseClickStart();
			// }
			if(health1.innerHTML==='0' || health2.innerHTML==='0') {
				msg.style.display = "inline";
				// matches.innerHTML = match;
			}


			// move bullet
			// if(player === jet1) {
			// 	var bulletbottom = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
			// 	// stops bullet from going outside game box
			// 	if(bulletbottom >= 500)
			// 		clearInterval(moveBullet);
			// 	bullet.style.bottom = bulletbottom + 3 + 'px';
			// }

			// if(player === jet2) {
			// 	var bullettop = parseInt(window.getComputedStyle(bullet).getPropertyValue("top"));
			// 	// stops bullet from going outside game box
			// 	if(bullettop >= 500)
			// 		clearInterval(moveBullet);
			// 	bullet.style.top = bullettop + 3 + 'px';
			// }

			// bullet.style.display = "inline";
			// bullet.style.visibility = 'visibile';
			var bulletPosition = parseInt(window.getComputedStyle(bullet).getPropertyValue(bulletInitialPostion));

			// stops bullet from going outside game box
			if(bulletPosition >= 500) {
				bullet.style.display = 'none';
				clearInterval(moveBullet);
			}


			if(player === jet1) bullet.style.bottom = bulletPosition + 2 + 'px';
			else bullet.style.top = bulletPosition + 2 + 'px';

			bullet.style.left = left + 'px';
		});

	}
}



function mouseClickStart() {
	// for starting of game, only!
	var start = document.getElementById('start');
	start.style.display = 'none';

	var over = document.getElementById('over');
	over.style.display = "inline";
	setTimeout(() => over.style.display = "none",1000);		// 1000 ms = 1 second, it means it will execute after 1 sec

	var matches = document.getElementById('matches');
	matches.innerHTML = '1';

	board.style.filter = "none";

	var p1won = document.getElementById('p1won');
	var p2won = document.getElementById('p2won');
	// var health1 = document.getElementById('health1');
	// var health2 = document.getElementById('health2');

	// if(health1.innerHTML==='0' || health2.innerHTML==='0') {
	// 	board.style.filter = "blur(2px)";
	// 	over.style.display = "inline";
	// 	return;
	// }

	// for whole process
	// var match = 1;
// 	if(match === 2) {
// 		clearInterval(moveBullet);
// return;
	// }

	// if(health1.innerHTML==='0' || health2.innerHTML==='0') {
	// 	var msg = document.getElementById('msg');
	// 	msg.style.display = "inline";
	// }



	// while(parseInt(health1.innerHTML)>0 && parseInt(health2.innerHTML)>0) {
	// if(parseInt(health1.innerHTML)>0 && parseInt(health2.innerHTML)>0) {
		window.addEventListener("keydown", e => {
			// game end
			if(health1.innerHTML==='0' || health2.innerHTML==='0') {
			// if(health1.innerHTML==='0' || health2.innerHTML==='0' || match>2) {
				if(health1.innerHTML!=='0') p1won.innerHTML = parseInt(p1won.innerHTML)+1;
				else p2won.innerHTML = parseInt(p2won.innerHTML)+1;

				board.style.filter = "blur(2px)";
				// console.log(match);
				// match++;
				over.innerHTML = "Round "+ ++match;
				// over.style.display = "inline";
				if(match<=5) over.style.display = "inline";
				matches.innerHTML = match;

				// }
				msg.style.display = "none";

				// return;
				setTimeout(() => {
					over.style.display = "none";		// 1000 ms = 1 second
					board.style.filter = "none";
					health1.innerHTML = '100';
					health2.innerHTML = '100';
				},1000);		// it means it will execute after 1 sec
				// return;
			}
			// else {
			// 	window.removeEventListener();
			// 	return;
			// }

		// window.addEventListener("keydown", e => {
			if(event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp")
			// if(match<3 && (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp"))
				// fn(jet1,e,"ArrowLeft","ArrowRight","ArrowUp","bullets1","bottom",health1);
				fn(jet1,e,"ArrowLeft","ArrowRight","ArrowUp","bullets1","bottom");
			if(event.key === "a" || event.key === "d" || event.key === "w")
			// if(match<3 && (event.key === "a" || event.key === "d" || event.key === "w"))
				// fn(jet2,e,"a","d","w","bullets2","top",health2);
				fn(jet2,e,"a","d","w","bullets2","top");
			// else {
		// 		board.style.filter = "blur(2px)";
		// over.innerHTML = "GAME OVER";
		// over.style.display = "inline";
		// msg.style.display = "none";
		// // clearInterval(moveBullet);
		// matches.innerHTML = --match;
			// }
		});
	// } else console.log('end');


	var count = 0
	var generateSnow = setInterval(() => {
		if(count++>200) clearInterval(generateSnow);

		var snow = document.createElement("div");
		snow.classList.add("snow");
		// var snowleft = parseInt(window.getComputedStyle(snow).getPropertyValue("left"));
		// while(count++ < 500) {
		snow.style.top = Math.floor(Math.random() * 700) + "px";
		snow.style.bottom = Math.floor(Math.random() * 700) + "px";
		snow.style.right = Math.floor(Math.random() * 700) + "px";
		snow.style.left = Math.floor(Math.random() * 700) + "px";
		// }
		// count++;

		// console.log(count);
		board.appendChild(snow);
	},50);

	// setInterval(clearInterval(moveBullet));
	// if(count>200) clearInterval(moveBullet);
}

