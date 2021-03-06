let newUser = document.querySelector('#newUser')
let newUserDisplay = document.querySelector('.newPlayerResponse')
document.querySelector('.response').addEventListener('click',()=> inputCheck(newUser.value))
let url = "https://api.spacetraders.io/"

function serverCheck(){
    fetch(url+"game/status")
    .then(x=>x.json())
    .then(
        x=>(x.status.includes('currently online'))?
        document.querySelector('#serverStatus').innerText = "Game is Online":
        document.querySelector('#serverStatus').innerText = "Game is Offline"
        )
}

function inputCheck(x){
    fetch(url+`users/${x}/token`,{method:'post'})
    .then(x=>x.json())
    .then(x=>{
        newUserDisplay.innerText += `username: ${x.user.username} \n token: ${x.token} \n please immediatley record username and token`;
    })
}

serverCheck()
