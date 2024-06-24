let url = "https://universities.hipolabs.com/search?name=india";
getFacts();
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        let li = document.createElement('li');
        li.innerText = data;
        let ul = document.querySelector('ul');
        ul.appendChild(li);
    }  catch(e){
        console.log("error - ",e);
    }
}