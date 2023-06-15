//github.com/apvarun/toastify-js/blob/master/README/md

const left=document.getElementsByClassName('left_side')[0];
const right=document.getElementsByClassName('right')[0];
const toast=document.getElementsByClassName('toasts')[0];

var taskmove=null;

///create a card 
function addTask(side, data){
    const card = document.createElement('div')
    card.classList.add('card')
    card.draggable=true;

    if(data.priority==="low"){
        card.classList.add('bg-primary')
    }else if(data.priority==='medium'){
            card.classList.add('bg-warning')
    }else{
            card.classList.add('bg-danger');
        }
    card.innerHTML=data.title;
    if(side==='left'){
        left.appendChild(card);
    }
    else{
        right.appendChild(card);
    }

    //drag start
    card.addEventListener('dragstart',(e)=>{dragstart(e)})
    /*on drag
    card.addEventListener('drag',(e)=>drag(e))
    */
    //drag end
    card.addEventListener('dragend',(e)=>{dragend(e)})
}
//append tasks
addTask('right',{
    title:"Hello guys👋",
    description: "lorem ipsum",
    priority:'low'
})
addTask('left',{
    title:"I am a developer",
    description: "lorem ipsum",
    priority:'high'
})
addTask('left',{
    title:"My name is Karthiga",
    description: "lorem ipsum",
    priority:'high'
})
addTask('left',{
    title:"I am from Chennai",
    description: "lorem ipsum",
    priority:'high'
})

//which card has to be dragged
function dragstart(e){
    console.log(e.target);
    e.target.classList.add('fade');
    taskmove=e.target;
}
//after dragged
function dragend(e){
    e.target.classList.remove('fade');
}

//dragged to R.H.S
right.addEventListener('dragover',(e)=>{
    console.log('drag end')
    e.preventDefault()
})
left.addEventListener('dragover',(e)=>{
    console.log('drag end')
    e.preventDefault()
})

right.addEventListener('drop',()=>{
    if(taskmove){
        right.append(taskmove)
        toast.style.display="flex"
        toasthidder()
    }
    console.log('dropped')
})
left.addEventListener('drop',()=>{
    if(taskmove){
        left.append(taskmove)
        toast.style.display="flex"
        toasthidder()
    }
    console.log('dropped')
    
})
/*function drag(e){
    console.log('dragging');
    e.target.classList.add('fade')
}*/
function toasthidder(){
    setTimeout(()=>{
         toast.style.display='none'
},2000)
}
