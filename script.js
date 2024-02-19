let questions = document.querySelectorAll(".question");


let showans = true;

questions.forEach((question) =>{
    const icon = question.querySelector(".plusBtn");
    const ans = question.querySelector(".answer");
    console.log(icon.src)
    icon.addEventListener("click" , () =>{
        console.log("icon was clicked")
        if(showans){
            ans.classList.remove("hide")
            icon.src = "./images/icon-minus.svg"
            showans = false;
        }
        else if(!showans){
            ans.classList.add("hide");
            icon.src = "./images/icon-plus.svg"
            showans = true;
        }

    })
});