const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');
jokeBtn.addEventListener('click',generateJoke);


function generateJoke(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.chucknorris.io/jokes/random')
    
    xhr.onreadystatechange = function () {
        if (this.readyState===4) { 
            if (this.status===200) {
                // console.log(JSON.parse(this.responseText).value);
                
                let joke =JSON.parse(this.responseText).value;

                joke = joke.replace(/Chuck Norris/gi, 'Rushikesh');
                jokeEl.innerHTML = joke;
                
            }
            else{
                    jokeEl.innerHTML = 'Something Went Wrong! (Not Funny)'
                }
            
        }
    }
    xhr.send();
}


