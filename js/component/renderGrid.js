const renderGrid = (DOM, length, height) => {
    const fieldSize = length * height;
    let HTML = `<div class="grid" style="grid-template-columns: repeat(${length}, 1fr); grid-template-rows: repeat(${height}, 1fr)">`;
    for (let i = 0; i < fieldSize; i++) {
        HTML += '<div class="spot"></div>';
    }
    HTML += '</div>';
    DOM.innerHTML = HTML;
    const DOMlist = {
        grid: document.querySelector('.grid'),
        spots: document.querySelectorAll('.spot')
    };
    return DOMlist;
}

export { renderGrid }