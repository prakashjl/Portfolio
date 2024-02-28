var TabLinks=document.getElementsByClassName("tabLinks");
var TabContents=document.getElementsByClassName("tabContents");

function openTab(TabName){
    for(TabLink of TabLinks){
        TabLinks.classList.remove("skillLink")
    }
    for(TabContent of TabContents){
        TabContents.classList.remove("skillTab")
    }
    event.currentTarget.classList.add("skillLink")
    document.getElementById(TabName).classList.add("skillTab")
}

var sidemenu= document.getElementById("sideMenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

///////////////////////////////////////////

const scriptURL = 'https://docs.google.com/spreadsheets/d/1s3aW_Hx-Q45-eOylSEeYpR2Wx3iNQk4tY4FYq_LBjQY/edit#gid=0'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Message Sent Successfully"
                         setTimeout(function(){
                            msg.innerHTML=""
                        },5000)
                        form.reset();
                           })
      .catch(error => console.error('Error!', error.message))
  })