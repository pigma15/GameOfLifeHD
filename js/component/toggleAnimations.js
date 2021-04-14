const toggleAnimations = (list, state) => {
    if (state) {
        const temp = document.querySelector(`${list}`)
        temp.classList.add('on');
    } else {
        const temp = document.querySelector(`${list}`)
        temp.classList.remove('on');
    }
}

export { toggleAnimations }