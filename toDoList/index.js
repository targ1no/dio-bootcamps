let array = []

function addItem() {
    const list = document.getElementById('list')
    const input = document.getElementById('input').value

    const li = document.createElement('li')
    const div = document.createElement('div')
    const x = document.createElement('button')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');

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

}

function clearInput() {
    document.getElementById('input').value = " "
}

