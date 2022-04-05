const open_modal_1 = document.getElementById('open_modal_1');
const open_modal_2 = document.getElementById('open_modal_2');
const open_modal_3 = document.getElementById('open_modal_3');
const open_modal_4 = document.getElementById('open_modal_4');
const modal_containter = document.querySelector('#modal_container');
const close_modal_1 = document.querySelector('#close_modal1');
const modal = document.getElementById('menu_1_details');

let last_div ="";

open_modal_1.addEventListener('click', ()=>{
    modal_containter.classList.add('show');
    hiddenDetails();


});
open_modal_2.addEventListener('click', ()=>{
    modal_containter.classList.add('show');
    hiddenDetails();


});
open_modal_3.addEventListener('click', ()=>{
    modal_containter.classList.add('show');
    hiddenDetails();


});
open_modal_4.addEventListener('click', ()=>{
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
            let element = document.getElementById(i);
            element.getElementsByClassName("number")[0].style.backgroundColor = "grey";
            changeColorclass(element);
            }
            break;

        case 'menu_2_details': 
            allCodeColorOff()
            for (i=6 ; i < 7; i++){
            document.getElementById(i).style.backgroundColor='grey';
            document.getElementById(i).getElementsByClassName("number")[0].style.backgroundColor = "grey";
            let element = document.getElementById(i);
            changeColorclass(element);
            }
            break;

        case 'menu_3_details': 
            allCodeColorOff()
            for (i=9 ; i < 18; i++){
            document.getElementById(i).style.backgroundColor='grey';
            document.getElementById(i).getElementsByClassName("number")[0].style.backgroundColor = "grey";
            let element = document.getElementById(i);
            changeColorclass(element);
            }
            break;

        case 'menu_4_details': 
            allCodeColorOff()
            for (i=19 ; i < 23; i++){
            document.getElementById(i).style.backgroundColor='grey';
            document.getElementById(i).getElementsByClassName("number")[0].style.backgroundColor = "grey";
            let element = document.getElementById(i);
            changeColorclass(element);
            }
            break;

        case 'menu_5_details': 
            allCodeColorOff()
            for (i=25 ; i < 33; i++){
            document.getElementById(i).style.backgroundColor='grey';
            document.getElementById(i).getElementsByClassName("number")[0].style.backgroundColor = "grey";
            let element = document.getElementById(i);
            changeColorclass(element);
            
            }
            break;

        case 'menu_6_details': 
            allCodeColorOff()
            for (i=34 ; i < 38; i++){
            document.getElementById(i).style.backgroundColor='grey';
            document.getElementById(i).getElementsByClassName("number")[0].style.backgroundColor = "grey";
            let element = document.getElementById(i);
            changeColorclass(element);
            }
            break;

        case 'menu_7_details': 
            allCodeColorOff()
            for (i=39 ; i < 46; i++){
            document.getElementById(i).style.backgroundColor='grey';
            document.getElementById(i).getElementsByClassName("number")[0].style.backgroundColor = "grey";
            let element = document.getElementById(i);
            changeColorclass(element);
            }
            break;
    }

    
    
}


function changeColorclass(element){
    for (j = 0; j < element.getElementsByClassName("purple").length; j++){
        element.getElementsByClassName("purple")[j].style.backgroundColor = "grey"
        element.getElementsByClassName("purple")[j].style.color = "purple"
    }
    for (j = 0; j < element.getElementsByClassName("red").length; j++){
        element.getElementsByClassName("red")[j].style.backgroundColor = "grey"
        element.getElementsByClassName("red")[j].style.color = "red"
    }
    for (j = 0; j < element.getElementsByClassName("cyan").length; j++){
        element.getElementsByClassName("cyan")[j].style.backgroundColor = "grey"
        element.getElementsByClassName("cyan")[j].style.color = "cyan"
    }
    for (j = 0; j < element.getElementsByClassName("blue").length; j++){
        element.getElementsByClassName("blue")[j].style.backgroundColor = "grey"
        element.getElementsByClassName("blue")[j].style.color = "blue"
    }
    for (j = 0; j < element.getElementsByClassName("white").length; j++){
        element.getElementsByClassName("white")[j].style.backgroundColor = "grey"
        element.getElementsByClassName("white")[j].style.color = "white";
    }
    for (j = 0; j < element.getElementsByClassName("green").length; j++){
        element.getElementsByClassName("green")[j].style.backgroundColor = "grey"
        element.getElementsByClassName("green")[j].style.color = "green";
    }
    

}


function allCodeColorOff(){
    for (i=1 ; i < 46; i++){
        document.getElementById(i).style.backgroundColor='#404854';

        document.getElementsByClassName("number")[(i - 1)].style.backgroundColor = "#404854";

        let element = document.getElementById(i);

        for (j = 0; j < element.getElementsByClassName("purple").length; j++){
            element.getElementsByClassName("purple")[j].style.backgroundColor = "#404854";
            element.getElementsByClassName("purple")[j].style.color = "#c0bdbd";
        }
        for (j = 0; j < element.getElementsByClassName("red").length; j++){
            element.getElementsByClassName("red")[j].style.backgroundColor = "#404854";
            element.getElementsByClassName("red")[j].style.color = "#c0bdbd";
        }
        for (j = 0; j < element.getElementsByClassName("cyan").length; j++){
            element.getElementsByClassName("cyan")[j].style.backgroundColor = "#404854";
            element.getElementsByClassName("cyan")[j].style.color = "#c0bdbd";
        }
        for (j = 0; j < element.getElementsByClassName("blue").length; j++){
            element.getElementsByClassName("blue")[j].style.backgroundColor = "#404854";
            element.getElementsByClassName("blue")[j].style.color = "#c0bdbd";
        }
        for (j = 0; j < element.getElementsByClassName("white").length; j++){
            element.getElementsByClassName("white")[j].style.backgroundColor = "#404854";
            element.getElementsByClassName("white")[j].style.color = "#c0bdbd";
        }
        for (j = 0; j < element.getElementsByClassName("green").length; j++){
            element.getElementsByClassName("green")[j].style.backgroundColor = "#404854"
            element.getElementsByClassName("green")[j].style.color = "#c0bdbd";
        }
    }
}