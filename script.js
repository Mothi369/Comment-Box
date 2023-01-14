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

    let outputBox=document.createElement("div")
    let nameV=document.createElement("p")
    let commentV=document.createElement("p")
    let buttonMain=document.createElement("div")
    let buttonSub=document.createElement("div")
    let Likebtn=document.createElement("i")
    let disLikebtn=document.createElement("i")
    let deltag=document.createElement("div")
    let delbtn=document.createElement("i")
    //creating div inside box2(boxJ)
    
    outputBox.classList.add("outputBox")
    boxJ.appendChild(outputBox)

    //creating para tags for name and comment inside outputBox

    
    nameV.textContent=outputData.names
    outputBox.appendChild(nameV)

    
    commentV.textContent=outputData.comments
    outputBox.appendChild(commentV)

    
    

    //creating div tags for like,dislike and delete buttons

    
    buttonMain.classList.add("buttonMain")
    outputBox.appendChild(buttonMain)

    
    buttonSub.classList.add("buttonSub")
    buttonMain.appendChild(buttonSub)

    // creating buttons for like and dislike 

    

    
    Likebtn.classList.add("outputbtn")
    Likebtn.style.padding="10px"
    buttonSub.appendChild(Likebtn)

    
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
    
    buttonMain.appendChild(deltag)
    //creating buttons for delete
    
    delbtn.classList.add("delbtn")
    delbtn.style.color="red"
    deltag.appendChild(delbtn)
    //delbtn.innerHTML="delete"
    delbtn.setAttribute("class","fa-solid fa-trash")
    delbtn.addEventListener("click",function(){
        boxJ.removeChild(outputBox)
    })

}