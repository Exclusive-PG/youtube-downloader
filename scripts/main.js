const urlInput =document.querySelector(".urlInput");


const btnUrlInput = document.querySelector(".btn-url-input");

btnUrlInput.addEventListener("click",()=>{
    console.log(urlInput.value)
    sendUrlToDownloader(urlInput.value)
})

async function sendUrlToDownloader(url){
    // await fetch(`http://localhost:3500/download?URL=${url}`,{
    //     method: 'POST', 
    //     headers: {
    //       'Content-Type': "text/plain"
    //     },
    //     body: JSON.stringify(url)
      
    //   }).then(function(response) {
    //     return response.json();
    // }).then(data=> console.log(data))
    window.location.href= `http://localhost:3500/download?URL=${url}`;
}