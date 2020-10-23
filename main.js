

 function calculer(){
    let prim = parseFloat(document.getElementById('id1').value)
    let scnd = parseFloat(document.getElementById('id2').value)
 if(document.getElementById('addition').checked){
     var add = prim + scnd
     document.getElementById('affichage').innerHTML = add
 }
 else if(document.getElementById('soustraction').checked){
     var sous = prim - scnd
     document.getElementById('affichage').innerHTML = sous
 }
 else if(document.getElementById('multiplication').checked){
     var mult = prim * scnd
     document.getElementById('affichage').innerHTML = mult
 }
 else if(document.getElementById('division').checked){
     var div = prim / scnd     
     document.getElementById('affichage').innerHTML = div
 }
 else{
     alert('veuillez selectionner une option svp')
 }
 }

