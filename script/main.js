console.log('main.js');

function fn1(){
    if (document.getElementById('benzinCetvorocikl').checked){
        document.getElementById('nijeBenzin').style.display = 'none';
        document.getElementById('naBenzin').style.display = 'table-row';
    } else if (document.getElementById('nijeBenzinCetvorocikl').checked){
        document.getElementById('naBenzin').style.display = 'none';
        document.getElementById('nijeBenzin').style.display = 'table-row';
    }
}

function fn2(){
    if (document.getElementById('benzinTricikl').checked){
        document.getElementById('nijeBenzin3').style.display = 'none';
        document.getElementById('naBenzin3').style.display = 'table-row';
    } else if (document.getElementById('nijeBenzinTricikl').checked){
        document.getElementById('naBenzin3').style.display = 'none';
        document.getElementById('nijeBenzin3').style.display = 'table-row';
    }
}