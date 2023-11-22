function cambiarColorLabel(id) {
   let label = document.querySelector(`label[for="${id}"]`);
   label.style.color = '#b926d3'
   label.style.fontSize = '18px'
}

function restaurarColorLabel(id) {
    let label = document.querySelector(`label[for="${id}"]`);
   label.style.color = 'black'
   label.style.fontSize = '15px'
}
