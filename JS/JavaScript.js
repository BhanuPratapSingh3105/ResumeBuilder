let i = 2;
let j = 2;
let k = 2;
let l = 2;
let m = 2;



let left = document.querySelector('.left')
let container =document.querySelector('.container')
let right = document.querySelector('.right')



        
    


//----------------------------------------index----------------------------------------------



// --------------------------------------------Template----------------------------------------------------------

let profile = document.querySelector('#profile')
let popup = document.querySelector('.popup')
let overlay = document.querySelector('.overlay')
let experiencepop = document.querySelector('.experiencePopup')
let experience = document.querySelector('#experience')
let educationpop = document.querySelector('.educationpop')
let education = document.querySelector('#education')
let projectpop = document.querySelector('.projectpop')
let project = document.querySelector('#projects')
let languagepop = document.querySelector('.languagepop')
let language = document.querySelector('#language')
let skillpop = document.querySelector('.skillpop')
let skills = document.querySelector('#skills')
let contactpop = document.querySelector('.contactpop')
let contact = document.querySelector('#contact')
let volunteerform1 = document.querySelector('.volunteerform1')
let addwala = document.querySelector('.addwala')
let PrintPopup = document.querySelector('.PrintPopup')
let printpage = document.querySelector('#printpage')


function closepop() {
    PrintPopup.style.transform = "scale(0)"
    contactpop.style.transform = "scale(0)"
    skillpop.style.transform = "scale(0)"
    languagepop.style.transform = "scale(0)"
   projectpop.style.transform = "scale(0)"
   educationpop.style.transform = "scale(0)"
    experiencepop.style.transform = "scale(0)"
    popup.style.transform = "scale(0)"
    document.querySelector('.overlay').style.display = "none"
    }
function offs(){

    document.querySelector('.Bpopup').style.display = "none";
}
function off() {
    document.querySelector('.overlay').style.display = "none";
    popup.style.transform = "scale(0)"
    educationpop.style.transform = "scale(0)"
    experiencepop.style.transform = "scale(0)"
    projectpop.style.transform = "scale(0)"
   languagepop.style.transform = "scale(0)"
    skillpop.style.transform = "scale(0)"
    contactpop.style.transform = "scale(0)"
    PrintPopup.style.transform = "scale(0)"
}
printpage.addEventListener('click', () => {

    PrintPopup.style.transform = "scale(1)"
    document.querySelector('.overlay').style.display = "block"

})
profile.addEventListener('click', () => {

    popup.style.transform = "scale(1)"
    document.querySelector('.overlay').style.display = "block"

})

experience.addEventListener('click', () => {

    experiencepop.style.transform = "scale(1)"
    document.querySelector('.overlay').style.display = "block"

})

education.addEventListener('click', () => {

    educationpop.style.transform = "scale(1)"
    document.querySelector('.overlay').style.display = "block"

})

project.addEventListener('click', () => {

    projectpop.style.transform = "scale(1)"
    document.querySelector('.overlay').style.display = "block"

})



skills.addEventListener('click', () => {

    skillpop.style.transform = "scale(1)"
    document.querySelector('.overlay').style.display = "block"

})

language.addEventListener('click', () => {

    languagepop.style.transform = "scale(1)"
    document.querySelector('.overlay').style.display = "block"

})

contact.addEventListener('click', () => {
   
    contactpop.style.transform = "scale(1)"
    document.querySelector('.overlay').style.display = "block"

})


 function AddItems(position){

 if(position === "experience"){
    let experienceform = document.querySelector('#experienceform')
 
    let div1 = document.createElement("div")
    div1.classList.add('expform')
   
    div1.innerHTML = `<hr class = "hrStyle">
    <h2>Experience</h2>
    <div class="form" >
    <div>
        <label for="JobTitle">Job Title</label><br>
        <input type="text" id="JobTitle${i}"><br><br />
        <label for="Employer">Employer or Company</label><br>
        <input type="text" id="Employer${i}"><br><br />
    </div>
    <div> 
     <label for="StartDates${i}">Employment Starting Dates</label><br>
    <input type="date" id="StartDates${i}" ><br><br />
    <label for="EndDates${i}">Employment Ending Dates</label><br>
    <input type="date" id="EndDates${i}" ><br><br />
    </div>

</div>
<label>Job Description</label>
<textarea id="JobDescr${i}"></textarea>`

experienceform.append(div1)

let experBox1 = document.querySelector('#experBox1')
let experdiv = document.createElement('div')

experdiv.innerHTML = `<hr>  <div class="box">
<div class="year_company">
<h5 id="EnploymentDate${i}"></h5>
<h5 id="companyname${i}"></h5>
</div>
<div class="text">
<h4 id="yourRole${i}"></h4>
<p id="jobDescription${i}"></p>
</div>
</div>`
experBox1.append(experdiv)
i++;
}
if(position === 'education'){
    let educBox = document.querySelector('#educBox')
    let eduform = document.createElement("div")
    eduform.classList.add('expform')

    eduform.innerHTML = `<hr class = "hrStyle"> <h2>Education</h2>
    <div class="form">
    <div>
    <label for="Degree">Degree</label><br>
    <input type="text" id="Degree${j}" ><br><br />
    <label for="Starting">Starting Year</label><br>
    <input type="date" id="Starting${j}" ><br><br />
</div>
<div>
    <label for="University">School or University</label><br>
    <input type="text" id="University${j}" ><br><br />
    <label for="Ending">Ending Year</label><br>
    <input type="date" id="Ending${j}" ><br><br />
</div>
</div>`
educBox.append(eduform)


let ul = document.querySelector('#edu')

let li = document.createElement('li')
li.innerHTML = `   
<h5><span id="startDate${j}"></span> - <span id="endDate${j}"></span></h5>
<h4 id="universe${j}"> </h4>
<h4 id="deg${j}"> </h4>`

ul.append(li)
j++
}
if(position === 'project'){

    let ProjForm = document.querySelector('#ProjForm')
    let ProjFormdiv = document.createElement("div")
    ProjFormdiv.innerHTML = ` <hr class = "hrStyle"> 
    <h2>Projects</h2>
            
    <div class="form">
        <div>
            <label for="ProjectTitle">Project Title</label><br>
            <input type="text" id="ProjectTitle${k}" ><br><br />
            <label for="Project">Project Starting Date </label><br>
            <input type="date" id="Project${k}" ><br><br />
        </div>
        <div>
            <label for="ProjectDate">Project type</label><br>
            <input type="text" id="ProjectDate${k}" ><br><br />
            <label for="Purpose">Project Ending Date</label><br>
            <input type="date" id="Purpose${k}" ><br><br />

        </div>
       
    </div>
    <label for="ProjectDescr${k}">Project Description</label>
    <textarea id="ProjectDescr${k}"></textarea>`
    
    ProjForm.append(ProjFormdiv);
 
    let projectBox = document.querySelector('#projectBox')
    let projBox = document.createElement("div")
    projBox.innerHTML =` <hr>
    <div >
   
    <div class="box" style="overflow-wrap: anywhere;">
        <div class="year_company">
<h5 id="proTitle${k}"></h5>
<h5 >To:-<span id="proStartDate${k}"></span> <br>From:-<span id="proEndDate${k}"></span></h5>
        </div>
        <div class="text">
        <h4 id="projType${k}"></h4>
        <p id="projDescription${k}"></p>
    </div>
</div>

`
projectBox.append(projBox)
k++
}

if(position === 'skill'){

    let skill = document.querySelector('#skill')
    let skillBox = document.createElement("div")
    skillBox.innerHTML = ` <hr class = "hrStyle"> 
    <h2>Skills</h2>
    
    <div class="form">
        <div>
            <label for="Skillname">Skill</label><br>
            <input type="text" id="Skillname${l}"><br><br />

        </div>
        <div>
            <label for="skillLevel">Level %</label><br>
            <input type="number" id="skillLevel${l}" ><br><br />

        </div>
    </div>`
    skill.append(skillBox)

    let skillpac = document.querySelector('#skillBox')
    let skillpacinn = document.createElement("div")
    skillpacinn.classList.add('box')
   skillpacinn.innerHTML=`      
   <h4 id="skillName${l}"></h4>
   <div class="percent">
   <div style="width:50%;" id='wid${l}'></div>
</div>`
skillpac.append(skillpacinn)
l++
}

if(position === 'language'){
    let skillpac = document.querySelector('#langul')
    let skillinn = document.querySelector('li')
    skillinn.innerHTML = `  
    
    <span class="text" id="lang${m}"></span>
   
    <div class="percent">
    <div style="width:50%;" id="widlang${m}" class="widthlan"></div>

`
skillpac.append(skillinn)

let langBox = document.querySelector('#langBox')
let langBoxinn = document.createElement("div")

langBoxinn.innerHTML= `  <hr class = "hrStyle">
<div class="form">
<div>
    <label for="Language">Language</label><br>
    <input type="text" id="Language${m}"><br><br />

</div>
<div>
    <label for="LangSkill Level">Skill Level</label><br>
    <input type="number" id="LangSkillLevel${m}" ><br><br />

</div>
</div>`
langBox.append(langBoxinn)
m++
}


}

function startfun(vals){
    if(vals === "profile"){

    if(document.querySelector("#profTextArea").value != ""){
        document.querySelector("#profileInfo").textContent = document.querySelector("#profTextArea").value;
        off();
    }

    if(document.querySelector("#name").value != ""){
        document.querySelector("#userName").textContent = document.querySelector("#name").value;
        off();
    }
    if(document.querySelector("#role").value != ""){
        document.querySelector("#userRole").textContent = document.querySelector("#role").value;
        off();
    }
    else
    off();
}
    if(vals === "experience"){
         showexperience();
    }
    if(vals === "education"){
        showeducation();
        
    }
    if(vals === "project"){
        showproject();
        
    }
    if(vals === "Skill"){
        showskills();
        
    }
    if(vals === "language"){
        showlanguage();
        
    }
    if(vals === "contact"){
        showcontact();
        
    }
    else
    off();
}
function showexperience(){
   let e;
for(e = 1; e < i; e++){
 if(document.querySelector(`#JobTitle${e}`).value != ""){
    document.querySelector(`#yourRole${e}`).textContent = document.querySelector(`#JobTitle${e}`).value;
    off();
 }

 if(document.querySelector(`#StartDates${e}`).value != ""){
    let check = document.querySelector(`#StartDates${e}`).value
    console.log(check.getFullYear())
    var expstart = (document.querySelector(`#StartDates${e}`).value).slice(0,4);
    var expstartmonth = (document.querySelector(`#StartDates${e}`).value).slice(5,7);
    // console.log(expstart)
    // off();
}
if(document.querySelector(`#EndDates${e}`).value != ""){
    var expend = (document.querySelector(`#EndDates${e}`).value).slice(0,4);
    var expsEndmonth = (document.querySelector(`#EndDates${e}`).value).slice(5,7);
    // document.querySelector(`#expEnd${e}`).textContent = document.querySelector(`#EndDates${e}`).value;
    // off();
    // console.log(expend)
}
var totalexpinYear = expend - expstart;
var totalexpinMonth = expsEndmonth - expstartmonth


if(totalexpinYear < 0 || totalexpinMonth < 0){
   
    document.querySelector(`#EnploymentDate${e}`).textContent ="";
}
if(totalexpinYear == 0){
    
    if(totalexpinMonth < 0){
        document.querySelector(`#EnploymentDate${e}`).textContent = "";
    }
    else if(totalexpinMonth == 0){
        document.querySelector(`#EnploymentDate${e}`).textContent= "Less than month"
    }
    else{
        document.querySelector(`#EnploymentDate${e}`).textContent = `${totalexpinMonth}` + "Month Experience";
    }
    
}
if(totalexpinYear > 1){
    document.querySelector(`#EnploymentDate${e}`).textContent = `${totalexpinYear}` + " Year Experience";
}
 
if(document.querySelector(`#Employer${e}`).value != ""){
    document.querySelector(`#companyname${e}`).textContent = document.querySelector(`#Employer${e}`).value;
    off();
}
 if(document.querySelector(`#JobDescr${e}`).value != ""){
    document.querySelector(`#jobDescription${e}`).textContent = document.querySelector(`#JobDescr${e}`).value;
    off();
}


else
off()
}
}

function showeducation(){
    let f;
    for(f = 1; f < j; f++){
     if(document.querySelector(`#Degree${f}`).value != ""){
        document.querySelector(`#deg${f}`).textContent = document.querySelector(`#Degree${f}`).value;
        off();
     }
    
     if(document.querySelector(`#Starting${f}`).value != ""){
        document.querySelector(`#startDate${f}`).textContent = document.querySelector(`#Starting${f}`).value;
        off();
    }
    if(document.querySelector(`#University${f}`).value != ""){
        document.querySelector(`#universe${f}`).textContent = document.querySelector(`#University${f}`).value;
        off();
    }
     if(document.querySelector(`#Ending${f}`).value != ""){
        document.querySelector(`#endDate${f}`).textContent = document.querySelector(`#Ending${f}`).value;
        off();
    }
    else
    off()
    }
}
function showproject(){
    let g;
    for(g = 1; g < k; g++){
     if(document.querySelector(`#ProjectTitle${g}`).value != ""){
        document.querySelector(`#proTitle${g}`).textContent = document.querySelector(`#ProjectTitle${g}`).value;
        off();
     }
    
     if(document.querySelector(`#Project${g}`).value != ""){
        document.querySelector(`#proStartDate${g}`).textContent = ((document.querySelector(`#Project${g}`).value).split("-").reverse().join("-")).slice(3);
        off();
    }
    if(document.querySelector(`#ProjectDate${g}`).value != ""){
        document.querySelector(`#projType${g}`).textContent = document.querySelector(`#ProjectDate${g}`).value;
        off();
    }
     if(document.querySelector(`#Purpose${g}`).value != ""){
        document.querySelector(`#proEndDate${g}`).textContent = ((document.querySelector(`#Purpose${g}`).value).split("-").reverse().join("-")).slice(3);
        off();
    }
     if(document.querySelector(`#ProjectDescr${g}`).value != ""){
        document.querySelector(`#projDescription${g}`).textContent = document.querySelector(`#ProjectDescr${g}`).value;
        off();
    }
    else
    off()
    }
}
function showskills(){
    let h;
    for(h = 1; h < l; h++){
      
     if(document.querySelector(`#Skillname${h}`).value != ""){
        document.querySelector(`#skillName${h}`).textContent = document.querySelector(`#Skillname${h}`).value;
        off();
     }
    
     if(document.querySelector(`#skillLevel${h}`).value != ""){
        let Slevel = document.querySelector(`#skillLevel${h}`).value;
        console.log(Slevel);
        document.querySelector(`#wid${h}`).style.width = Slevel + "%";
        off();
    }

    else
    off()
    }
}
function showlanguage(){
    let a;
    for(a = 1; a < m; a++){
        if(document.querySelector(`#Language${a}`).value != ""){
            document.querySelector(`#lang${a}`).textContent = document.querySelector(`#Language${a}`).value;
        off();
     }
    
     if(document.querySelector(`#LangSkillLevel${a}`).value != ""){
        var Llevel = document.querySelector(`#LangSkillLevel${a}`).value;
        document.querySelector(`#widlang${a}`).style.width = Llevel + "%";
        off();
    }
 
    else
    off()
    }
}
function showcontact(){
      var RB = 0;
     if(document.querySelector(`#Phone`).value != ""){
        if(document.querySelector(`#Phone`).value.length === 10){
        document.querySelector(`#conPhone`).textContent = document.querySelector(`#Phone`).value;
        RB++;
     }
     else{
        alert("enter correct Mobile Number");
      
        RB--;
     }
     }
     if(document.querySelector(`#Email`).value != ""){
        let email = document.querySelector(`#Email`).value;
        let substr = email.slice(-10);
        if(substr === "@gmail.com"){
        document.querySelector(`#conEmail`).textContent = document.querySelector(`#Email`).value;
        RB++;
    }
    else{
    alert("enter correct email");
    RB--;
 
}
     }
    if(document.querySelector(`#Address`).value != ""){
        document.querySelector(`#conAdress`).textContent = document.querySelector(`#Address`).value;
            
    }
   if(RB === 2){
    off();
}
if(document.querySelector(`#Email`).value === "" && document.querySelector(`#Address`).value === "" && document.querySelector(`#Phone`).value === ""){
    off()
}
if(document.querySelector(`#Email`).value === "" && document.querySelector(`#Address`).value != "" && document.querySelector(`#Phone`).value === ""){
    alert("Enter Mobile number and Email Id !")

}
if(document.querySelector(`#Email`).value === "" || document.querySelector(`#Phone`).value === ""){
    alert("Mobile number and Email are mandatory !")
}
if(document.querySelector(`#Address`).value === ""){
    document.querySelector('.fa-map-marker').style.display ="none";
}

}



printpage.addEventListener("click", () =>{
    document.getElementById("printsect").innerHTML = document.getElementById('cont').innerHTML;
    
})

function printContent(part){
    var allpagecontent = PrintPopup.innerHTML;
    PrintPopup.innerHTML == document.getElementById("printsect").innerHTML
    window.print();
    PrintPopup.innerHTML= allpagecontent;   
}



document.querySelector("#imgFile").addEventListener("change", function (){
    
const image = this.files[0]
if(image.size < 2000000) {
const reader = new FileReader();
reader.onload = ()=> {
    const allImg = document.querySelector(".imgBx").querySelectorAll('img');
    allImg.forEach(item=> item.remove());
    const imgUrl = reader.result;
    const img = document.createElement('img');
    img.src = imgUrl;
    document.querySelector(".imgBx").appendChild(img);
 
}
reader.readAsDataURL(image);
} else {
alert("Image size more than 2MB");
}
})
