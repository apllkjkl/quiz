var resposta1 = window.document.getElementById("resposta1")
var resposta2 = window.document.getElementById("resposta2")
var resposta3 = window.document.getElementById("resposta3")
var resposta4 = window.document.getElementById("resposta4")

var pergunta = window.document.getElementById("pergunta")
var numerodapergunta = 1

resposta1.addEventListener("click", clicar1)
resposta2.addEventListener("click", clicar2)
resposta3.addEventListener("click", clicar3)
resposta4.addEventListener("click", clicar4)

function clicar1() {
    if(numerodapergunta == 1) {
        alert("acertou!")
        pergunta.innerHTML = "QUAL DOS PERSONAGENS É HOMENS"
        resposta1.style.marginLeft = "15%"
        resposta1.innerHTML = "<img src=https://img.elo7.com.br/product/zoom/271C8CA/princesa-caroco-arquivos-digitais.jpg + width=200px height=200px>"
        resposta2.innerHTML = "<img src=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77b389c6-af26-4622-a586-c88b639116a2/dad13s2-e8e1f82a-c1d7-42e2-9a37-d95feeed11ec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YjM4OWM2LWFmMjYtNDYyMi1hNTg2LWM4OGI2MzkxMTZhMlwvZGFkMTNzMi1lOGUxZjgyYS1jMWQ3LTQyZTItOWEzNy1kOTVmZWVlZDExZWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0Pk1vH4FdprrjfsvQ90xQFIV_PsLiDEThwrGFhENS9s + width=200px height=200px>"
        resposta3.innerHTML = "<img src=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0a09a28-f872-439b-8f05-e5b1928ea92e/de2l0e9-237a54e3-4476-4d71-9f7f-3415ca74ea35.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwYTA5YTI4LWY4NzItNDM5Yi04ZjA1LWU1YjE5MjhlYTkyZVwvZGUybDBlOS0yMzdhNTRlMy00NDc2LTRkNzEtOWY3Zi0zNDE1Y2E3NGVhMzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wWNid5-z_kA9-fY40KC99P1wBzxvgukG-A5I6SGLsms + width=200px height=200px>"
        resposta4.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJx0VPlVwwxa-P19pErXXX8yWkL_kUlwfCm8n7wWaSS8YjyEeV6NAuw1qgZlYn76nPbM&usqp=CAU + width=200px height=200px>"
        numerodapergunta++
    }
}

function clicar2() {
    if(numerodapergunta == 3) {
        alert("acertou!")
        pergunta.innerHTML = ""
        resposta1.style.marginLeft = "15%"
        resposta1.innerHTML = ""
        resposta2.innerHTML = ""
        resposta3.innerHTML = ""
        resposta4.innerHTML = ""
        numerodapergunta++
        pergunta.innerHTML = "QUAL A MELHOR VERSAO"
        resposta1.style.marginLeft = "15%"
        resposta1.innerHTML = "<img src=https://cf.shopee.com.br/file/c6c48d62a1b7846fb5f1cbb9cd5b1fc6 width=200px>"
        resposta2.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8DEwXwBDGIRxo0p0iKX9h6oePm4GB7TyDTbLxRedUA55_2t0Va4RxL342sLrLM7Fo1M&usqp=CAU>"
        resposta3.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2CzNIKw1Wwpzi_7oLGPydFAPhv9MmBXIv0xuGg3zEEhVDXPTyltMhmbn1icm4gBubZY&usqp=CAU>"
        resposta4.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNS94Esn54AwRo9a8F7b6fh5mLLGPfpt5WCUaN4UoDUz3aE1TrTXeBQVD0uduwxLgr90&usqp=CAU>"
    }
        else if(numerodapergunta == 4) {
        alert("acertou!")
        numerodapergunta++
    }
}

function clicar3() {
    if(numerodapergunta == 5){
        alert("Acertou!")
    }
}


function clicar4() {
    if(numerodapergunta == 2) {
        alert("acertou!")
        pergunta.innerHTML = "QUAL DOS PERSONAGENS A SEGUIR SAO HOMENS"
        resposta1.style.marginLeft = "15%"
        resposta1.innerHTML = "<img src=https://img.elo7.com.br/product/zoom/271C8CA/princesa-caroco-arquivos-digitais.jpg + width=200px height=200px>"
        resposta2.innerHTML = "<img src=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77b389c6-af26-4622-a586-c88b639116a2/dad13s2-e8e1f82a-c1d7-42e2-9a37-d95feeed11ec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YjM4OWM2LWFmMjYtNDYyMi1hNTg2LWM4OGI2MzkxMTZhMlwvZGFkMTNzMi1lOGUxZjgyYS1jMWQ3LTQyZTItOWEzNy1kOTVmZWVlZDExZWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0Pk1vH4FdprrjfsvQ90xQFIV_PsLiDEThwrGFhENS9s + width=200px height=200px>"
        resposta3.innerHTML = "<img src=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0a09a28-f872-439b-8f05-e5b1928ea92e/de2l0e9-237a54e3-4476-4d71-9f7f-3415ca74ea35.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwYTA5YTI4LWY4NzItNDM5Yi04ZjA1LWU1YjE5MjhlYTkyZVwvZGUybDBlOS0yMzdhNTRlMy00NDc2LTRkNzEtOWY3Zi0zNDE1Y2E3NGVhMzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wWNid5-z_kA9-fY40KC99P1wBzxvgukG-A5I6SGLsms + width=200px height=200px>"
        resposta4.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJx0VPlVwwxa-P19pErXXX8yWkL_kUlwfCm8n7wWaSS8YjyEeV6NAuw1qgZlYn76nPbM&usqp=CAU + width=200px height=200px>"
        numerodapergunta++
        pergunta.innerHTML = "DE QUAL DESENHO O STEVE PIZZA É"
        resposta1.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__FwQFIwUJ30OivZnGddUJil65mAHrDl56VUyv7YTIGrkXg2EO_J2dmp_ScNox5CfeXk&usqp=CAU> "
        resposta2.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMG9j8UkS1bQhm5B7YBZ8aaCkuVGjG7N1E4z1F_2q8_sW9zVJ607UvTfRBdjQcgbN0bUQ&usqp=CAU>"
        resposta3.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuXoUba7zAOP2zR01Tm1gHX5IA55b5al_FG4TOYg6Ym-m2-yvEn8oPx22bdVC5dpHWSU&usqp=CAU>"
        resposta4.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseoQ2yztfxU7miu7M9puZYlqdw2RmOfJSjYWFy_mEynv9-uE0kXdlxxsQYMVZaw6yB28&usqp=CAU>"
    }

        
    }
    

    

