
var row=document.createElement("div");
row.setAttribute("class","row");

function data() {
    let values=document.getElementById('form').value;
    if(values == ''){
        alert("Enter the number between 1-1330");
    }
    else if(values<=0)
    {
        alert("Enter the number between 1-1330");
    }
    else if(values>1330)
    {
        alert('Please enter number below 1330')
    }
    else
    {
      getdata();  
    }
}

async function getdata(){
    try{
        let values=document.getElementById('form').value;
    var res=await fetch(`https://api-thirukkural.vercel.app/api?num=${values}`);
var res1=await res.json();

 row.innerHTML=

 // //  Tamil kural data
 `
<div class="col-md-6 " >
          <div class="container3">
          <div ><h2 class="head2">THIRUKKURAL IN தமிழ்</h2></div>
              <div class="kural-count-tam">குறள்-${res1.number}</div>
              <div class="kural-title-tam">
              <p class="sect_tam">பால்:${res1.sect_tam}</p>
              <p class="chapgrp_tam">இயல்:${res1.chapgrp_tam}</p>
              </div>
          <div class="kural-tam">
          <p class="line1">${res1.line1}</p>
          <p class="line2">${res1.line2}</p>
          </div>
          <div class="kural-meaning-tam">
          <p class="tam_exp">${res1.tam_exp}</p>
          </div> 
        </div>
      </div>

      <div class="col-md-6">
    <div class="container3">
        <div><h2 class="head3">THIRUKKURAL IN ENGLISH</h2></div>
        <div class="kural-count-eng">Kural-${res1.number}</div>
        <div class="kural-title-eng">
        <p class="sect_eng">Section:${res1.sect_eng}</p>
    <p class="chapgrp_eng">Chapter-group:${res1.chapgrp_eng}</p>
        </div>
        <div class="kural-eng">
        <p class="eng">${res1.eng}</p>
        </div>
        <div class="kural-meaning-eng">
        <p class="eng_exp">${res1.eng_exp}</p>
        </div>
    </div>
</div>` 


}
catch (error) {
    
  }
document.body.append(row);
}
getdata();