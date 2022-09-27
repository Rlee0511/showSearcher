const form=document.querySelector('form');

form.addEventListener('submit',async function(e){
    e.preventDefault();
    console.log("SUBMITTED!");
    const searchTerm= this.elements.q.value;
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    searchImg(response.data);
})

const searchImg= (shows) =>{
    for(let result of shows){
    const img= document.createElement('img');
    img.src= result.show.image.medium;
    document.body.append(img);
    }
};