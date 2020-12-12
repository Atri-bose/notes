function myfunc(){let i =  new Date();
    let h;
    let t;
    if (i.getHours > 12){h = i.getHours-12;
    t = "PM";}
    else{h = i.getHours;
        t = "AM";};
    v.innerHTML = `<strong>${h.toString + ":" + (i.getMinutes).toString+":"+(i.getSeconds).toString}</strong>`;}
;
function shownote() {
    let s = ``;
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        let arr = JSON.parse(localStorage.getItem(key))
        const value = arr[0];
        if (arr.length===1){s = s + `<div class="cardu-body" id = ${value}>
        <h5 class="card-title" id="head">${key}</h5>
        <p class="card-text" id="Text">${value}</p>
        <button  class="butn btn-secondary" id = "${key}" style = "font-family: 'Times New Roman', Times, serif;width: 5 rem">Delete Note</button>
        </div>`;}
        else{
        s = s + `<div class="cardu-body" id = ${value}>
        <h5 class="card-title " id="head">${key}</h5>
        <h5 class="card-title " id="head" style="float:right">${arr[2].replace("T"," ")}</h5>
        <p class="card-text " id="Text">${value}</p>
        <button  class="butn btn-secondary" id = "${key}" style = "font-family: 'Times New Roman', Times, serif;width: 5 rem">Delete Note</button>
        </div>`;
        setTimeout(function(){
       {if(Notification.permission === "granted"){var n = new Notification(key)}else{alert(key)}localStorage.removeItem(key);shownote();}},arr[1]);};
    }
    document.querySelector('#d').innerHTML = s;
    let arr = document.getElementsByClassName('butn');
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        element.addEventListener('click', function () {
            localStorage.removeItem(element.id);
            element.parentElement.innerHTML = '';
        })
    }
}
shownote()
function addnote(e) {
    let h = document.getElementById('head').value;
    let t = document.getElementById('Text').value;
    let d = document.getElementById('time').value;
    if (d.value){
    let d3 = d.split("-");
    let d4 = d3[2].split(" ");
    let da = d3[1]+"-"+d3[0]+"-"+d4[0]+" "+d4[1];
    // let dt = new Date(da).getTime() - new Date().getTime()
    let d2 =  new Date(d).getTime() - new Date().getTime() ;
    console.log(d2);
    localStorage.setItem(h, JSON.stringify([t,d2,d]));}
    else{localStorage.setItem(h,JSON.stringify([t]))}
   document.getElementById("cont").innerHTML = `<button  id = 'btn1'class="btn btn-primary">+ New Note</button>`
    
    shownote()
}

document.getElementById('btn1').addEventListener('click', function () {
    document.querySelector('.card-body').innerHTML = `<textarea class="card-title bdr" id="head" placeholder =" Enter heading here"></textarea>
          <br>
          <textarea class="card-text bdr" id="Text"placeholder ="Enter Text here"></textarea>
          <br>
          Notification time:<input type="datetime-local" name="a" id="time" >
          <br>
          <button id='btn' class="btn btn-primary">Add Note</button>
          `
    document.getElementById('btn').addEventListener('click', addnote)
})
document.getElementById('btn2').addEventListener('click', function (){localStorage.clear();
 shownote()
})

// let m = new Map()