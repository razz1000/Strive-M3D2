const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': 'e0c8be0859msh065ae65afa87e2dp131799jsna821c595eae0'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=queen', options)
	.then(response => response.json())
	.then(songs => {
        console.log(songs.data[0].duration)

        
        let div1 = document.getElementById("id_1");

        for(let i = 0; i < songs.data.length; i++) {
            let newCol = document.createElement("div")
            newCol.classList.add("col-sm-4")
            
            console.log(newCol)

            newCol.innerHTML = `<div class="card"">
            <img src="${songs.data[i].album.cover}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${songs.data[i].title}</h5>
              <p class="card-text">${"This album has a duration of: " + songs.data[i].duration + " min"}</p>
              <a href="${songs.data[i].link}" class="btn btn-primary">BUY NOW</a>
            </div>
          </div>
            `
            div1.appendChild(newCol)


        }
    })
    



    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica', options)
        .then(response => response.json())
        .then(songs => {
            console.log(songs.data[0].duration)

        
            let div2 = document.getElementById("id_2");
    
            for(let i = 0; i < songs.data.length; i++) {
                let newCol = document.createElement("div")
                newCol.classList.add("col-sm-4")
                
                console.log(newCol)
    
                newCol.innerHTML = `<div class="card"">
                <img src="${songs.data[i].album.cover}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${songs.data[i].title}</h5>
                  <p class="card-text">${"This album has a duration of: " + songs.data[i].duration + " min"}</p>
                  <a href="${songs.data[i].link}" class="btn btn-primary">BUY NOW</a>
                </div>
              </div>
                `
                div2.appendChild(newCol)
    
    
            }
    



        })




     fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=nsync', options)
            .then(response => response.json())
            .then(songs => {
                console.log(songs.data[0].duration)

        
                let div3 = document.getElementById("id_3");
        
                for(let i = 0; i < songs.data.length; i++) {
                    let newCol = document.createElement("div")
                    newCol.classList.add("col-sm-4")
                    
                    console.log(newCol)
        
                    newCol.innerHTML = `<div class="card"">
                    <img src="${songs.data[i].album.cover}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${songs.data[i].title}</h5>
                      <p class="card-text">${"This album has a duration of: " + songs.data[i].duration + " min"}</p>
                      <a href="${songs.data[i].link}" class="btn btn-primary">BUY NOW</a>
                    </div>
                  </div>
                    `
                    div3.appendChild(newCol)
        
        
                }            
            })







/*             .catch(err => console.error(err)); */