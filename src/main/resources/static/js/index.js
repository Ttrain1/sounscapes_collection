
//Imported Components
const entry = document.querySelector('#app')
const { HomeWrapper } = require('/homeWrapper')
const { Header } = require('/header')


//App Components
const header = new Header()



//Imported Tools




//Build App
HomeWrapper.innerHTML += header.render()



//Bootstrap Application
entry.appendChild(HomeWrapper)



//Artists
//function APIRequest(getArtists) {
//const getArtists = () => {
//
//	fetch('/api/artists')
//	.then((res)=>res.json())
//	.then((data)=>{
//		let output='<button class ="btn">Artist<button>';
//		data.forEach(function(artist){
//			output += `
//			<ul class="artistList">
//				<li class="artistItem">Artist Name: ${artist.artistName}</li>
//				<li class="artistImage">Artist Image: ${artist.artistImage}</li>
//				<li class="artistHometown">Artist Home Town: ${artist.artistHometown}</li>
//			</ul>
//			`
//		})
//	})}
//
//document.querySelector('getArtists').addEventListener('click', getArtists);
//}

// const artist = {
// 	artistName: 
// 	artistImage:
// 	artistHometown:
// }

// module.export = {
// 	getArtists()
// 	}

//Albums


//Songs