const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2fa5784288msh153caa3f716b61fp15dd72jsn5e953fe445ad',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(data => {
        data.map((item) => {
        const image = item.image
        const movie = `<div class="myimage"><img src="${image}"><div>`
        document.querySelector(".original__movies").innerHTML += movie
        })
    })
	.catch(err => console.error(err));