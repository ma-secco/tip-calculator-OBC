function calculateTip (event) {
    event.preventDefault ()
  
    let servicequal = document.getElementById('servicequal').value;
    let people = document.getElementById('people').value;
    let bill = document.getElementById('bill').value;

    if(bill == '' | servicequal == 0) {
        alert('Por favor preencha os campos corretamente')
        return;
    }

    if(people == '' | people <= 1){
        people = 1;
        document.getElementById('each').style.display = "none"
    }  
    else {
        document.getElementById('each').style.display = "block"
    }
    let total = (bill * servicequal) / people; {
        total = total.toFixed(2).replace(".",",");
        document.getElementById('tip').innerHTML = total;
        document.getElementById('totalTip').style.display = "block";
    
}   }

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsform").addEventListener('submit', calculateTip);

