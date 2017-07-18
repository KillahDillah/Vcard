
let myInfo = document.querySelector("body")

let request = new XMLHttpRequest ();
request.open ("GET", "https://api.github.com/users/KillahDillah");
request.addEventListener("load", requestListener);
request.send ()

function requestListener (){
	let info = JSON.parse(this.responseText)
		let list = `
		<div class="container">
			<h1 id="header"> ${info.name} </h1>
		</div>
		<div class="content">
			<div class="all_basics">
			<h2 id="basics"> The Basics </h2>
				<li> Name: ${info.name} </li>
				<li> GitHub URL :${info.url}</li>
				<li> Email : leahmiller1969@gmail.com</li>
				<li> Company: ${info.company} </li>
				<li> Website : ${info.blog} </li>
			</div>
			<div class="content2">	
			<h2 id="story"> The Story </h2>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</p>
			</div>
			<div class="photo">
			</div>
		</div>	
		`		
		myInfo.innerHTML += list
}





