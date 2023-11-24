export function cambiarColorLabel(ids) {
    // Si ids no es un array, lo convertimos en un array
    if (!Array.isArray(ids)) {
        ids = [ids];
    }
    ids.forEach(id => {
        let label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            label.style.color = '#b926d3';
            label.style.fontSize = '18px';
        }
    });
}

export function restaurarColorLabel(ids) {
    // Si ids no es un array, lo convertimos en un array
    if (!Array.isArray(ids)) {
        ids = [ids];
    }
    ids.forEach(id => {
        let label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            label.style.color = 'black';
            label.style.fontSize = '15px';
        }
    });
}
