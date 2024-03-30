const notesContainer=document.querySelector('.notes-container');
const addBtn=document.querySelector('.addbtn');
let notes=document.querySelectorAll('.inputbox');

function Show(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
Show();
function update(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}


addBtn.addEventListener('click',()=>{
    let inputbox=document.createElement('p');
    let img=document.createElement('img');
    inputbox.className='inputbox';
    inputbox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        update();
    }
    else if(e.target.tagName==="P")
    {
        notes=document.querySelectorAll(".inputbox");
        notes.forEach(nt=>{
            nt.onkeyup= function(){
                update();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})