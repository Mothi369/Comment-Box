let outputData={
    names:" ",
    comments:" "
}

let nameJ=document.getElementById("name")
let commentJ=document.getElementById("comment")
let boxJ=document.getElementById("box2")

//sending name and comment values to object i.e.,outputData
nameJ.addEventListener("change",function(ele){
    outputData.names=ele.target.value
})
commentJ.addEventListener("change",function(ele){
    outputData.comments=ele.target.value
})

function change(){
    let lcount=0
    let dcount=0

    //creating div inside box2(boxJ)
    let outputBox=document.createElement("div")
    outputBox.classList.add("outputBox")
    boxJ.appendChild(outputBox)

    //creating para tags for name and comment inside outputBox

    let nameV=document.createElement("p")
    nameV.textContent=outputData.names
    outputBox.appendChild(nameV)

    let commentV=document.createElement("p")
    commentV.textContent=outputData.comments
    outputBox.appendChild(commentV)

    
    

    //creating div tags for like,dislike and delete buttons

    let buttonMain=document.createElement("div")
    buttonMain.classList.add("buttonMain")
    outputBox.appendChild(buttonMain)

    let buttonSub=document.createElement("div")
    buttonSub.classList.add("buttonSub")
    buttonMain.appendChild(buttonSub)

    // creating buttons for like and dislike 

    

    let Likebtn=document.createElement("i")
    Likebtn.classList.add("outputbtn")
    Likebtn.style.padding="10px"
    buttonSub.appendChild(Likebtn)

    let disLikebtn=document.createElement("i")
    //disLikebtn.classList.add("outputbtn")
    disLikebtn.style.padding="10px"
    buttonSub.appendChild(disLikebtn)
    // count for likes and dislikes
    

   // setting initial values to buttons
    Likebtn.setAttribute("class","fa-solid fa-thumbs-up")
    //disLikebtn.innerHTML=`dislikee`
    disLikebtn.setAttribute("class","fa-solid fa-thumbs-down")

    Likebtn.addEventListener("click",function(){
        lcount += 1
        if(lcount>1){
            Likebtn.innerHTML=`  ${lcount} Likes`
        }else{
            Likebtn.innerHTML=` ${lcount} Like`
        }
        
    })
    
    disLikebtn.addEventListener("click",function(){
        dcount += 1
        if(dcount>1){
            disLikebtn.innerHTML=`  ${dcount} Disikes`
        }else{
            disLikebtn.innerHTML=` ${dcount} Disike`
        }
    })
    //creating separate tag for delete
    let deltag=document.createElement("div")
    buttonMain.appendChild(deltag)
    //creating buttons for delete
    let delbtn=document.createElement("i")
    delbtn.classList.add("delbtn")
    delbtn.style.color="red"
    deltag.appendChild(delbtn)
    //delbtn.innerHTML="delete"
    delbtn.setAttribute("class","fa-solid fa-trash")
    delbtn.addEventListener("click",function(){
        boxJ.removeChild(outputBox)
    })

}