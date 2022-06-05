let array = []

function addItem() {
    let list = document.getElementById('list')
    let input = document.getElementById('input').value

    let li = document.createElement('li')
    let div = document.createElement('div')
    let x = document.createElement('button')
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    array.push(input).value
    li.innerHTML = input
    li.style.fontWeight = 600

    x.innerHTML = 'X'
    x.style.fontWeight = 700 
    x.style.color = 'red'

    list.appendChild(li)
    li.appendChild(div)
    div.appendChild(x)
    div.appendChild(checkbox)

    //console.log(array)
}

function clearInput() {
    document.getElementById('input').value = " "
}


