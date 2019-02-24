let rootNode = document.getElementById('root');

// Your code goes here
const ZERO = 0;
const TEN = 10;
const TWO = 2;
let add = document.getElementsByClassName('add-btn')[ZERO];
add.onclick = function() {
    let text = document.getElementsByTagName('input')[ZERO]
    const ul = document.getElementById('todo-list')
    const exist = document.getElementById('exist')
    const container = document.getElementsByClassName('container')[ZERO]
    if(text.value.trim().length > ZERO && ul.childNodes.length <= TEN) {
        let newLi = document.createElement('li')
        ul.appendChild(newLi).setAttribute('draggable','true')
        let i = document.createElement('i')
        newLi.appendChild(i).innerText = 'check_box_outline_blank';
        newLi.appendChild(i).setAttribute('class', 'material-icons check-box')
        doneOrNot(i);
        let newP = document.createElement('p');
        newLi.appendChild(newP).setAttribute('class', 'todo-text')
        newLi.appendChild(newP).innerText = text.value;
        let bin = document.createElement('i');
        newLi.appendChild(bin).setAttribute('class', 'material-icons bin')
        newLi.appendChild(bin).innerText = 'delete'
        bin.onclick = function() {
            ul.removeChild(newLi)
            add.disabled = false
            text.disabled = false
        }
    } else if (ul.childNodes.length >= TEN) {
        add.disabled = true
        text.disabled = true

        if ( exist === null){
            const limit = document.createElement('h3')
            let h3Text = document.createTextNode('Maximum item per list are created')
            limit.appendChild(h3Text)
            container.insertBefore(limit, container.childNodes[TWO]).setAttribute('id', 'exist');
        }
    } 
}
const doneOrNot = (el) => {
    el.addEventListener('click', function(){
        if(this.textContent === 'check_box_outline_blank'){
            this.textContent = 'check_box'
        }
    });
};