const open_modal_1 = document.getElementById('open_modal_1');
const modal_containter = document.querySelector('#modal_container');
const close_modal_1 = document.querySelector('#close_modal1');
const modal = document.getElementById('menu_1_details');


let last_div ="";

open_modal_1.addEventListener('click', ()=>{
    modal_containter.classList.add('show');
    hiddenDetails();


});

close_modal_1.addEventListener('click', ()=>{
    modal_containter.classList.remove('show');
})




function show_div(divName){
  
  if (document.getElementById(divName).style.display == "none")

{
    if (last_div != ""){
        document.getElementById(last_div).style.display = "none";
    }

  document.getElementById(divName).style.display = "block";
  last_div = divName;
  changeCodeColor(divName);   

}
  else{
    document.getElementById(divName).style.display = "none";
    last_div = divName;
  }
}


function hiddenDetails(){
    for (i = 1 ; i < 8 ; i++){
    document.getElementById('menu_'+i+'_details').style.display = "none";
   
    }
}


function changeCodeColor(divNumber){

    switch(divNumber){
        case 'menu_1_details':
            allCodeColorOff()
            for (i=1 ; i < 8; i++){
            document.getElementById(i).style.backgroundColor='grey';
            }
            break;

        case 'menu_2_details': 
        allCodeColorOff()
        for (i=9 ; i < 18; i++){
            document.getElementById(i).style.backgroundColor='grey';
            }
            break;
    }
}



function allCodeColorOff(){
    for (i=1 ; i < 46; i++){
        document.getElementById(i).style.backgroundColor='#646464';
    }
}