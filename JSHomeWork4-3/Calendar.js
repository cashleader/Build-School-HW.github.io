/*
        TODO:
        1.動態產生出日期
        2.可以添加行程
     */
// 宣告   
const today = new Date() //今天
let year = today.getFullYear() //年
let month = today.getMonth() //月份 1月是0

let currentIndex
//DOM
const yearMonthText = document.querySelector('.year-month')
const dateArea = document.querySelector('tbody')

const addModal = document.querySelector('#add-modal')
const editModal = document.querySelector('#edit-modal')

const addDateInput = document.querySelector('#add-date')
const addValueInput = document.querySelector('#add-value')
const editDateInput = document.querySelector('#edit-date')
const editValueInput = document.querySelector('#edit-value')

//function
function renderDate() {
    dateArea.innerHTML = ''

    yearMonthText.innerText = `${year}年 - ${month + 1}月`

    //這個月第一天禮拜幾?
    let firstDay = new Date(year, month, 1).getDay()
    //這個月有幾天?
    let dayOfMonth = new Date(year, month + 1, 0).getDate()

    let rows = Math.ceil((dayOfMonth + firstDay) / 7)
    let day = 1

    for (let row = 0; row < rows; row++) {
        let tr = document.createElement('tr')
        for (let col = 0; col < 7; col++) {
            let td = document.createElement('td')
            if (row == 0 && col < firstDay) {
                //上個月
                td.innerText = 'A'
            }
            else {
                if (day <= dayOfMonth) {
                    //這個月
                    let d = day
                    td.innerText = day

                    if (localStorage.getItem(`${year}-${month + 1}-${day}`) != null) {
                        let ul = document.createElement('ul')

                        let todoList = JSON.parse(localStorage.getItem(`${year}-${month + 1}-${day}`))
                        todoList.forEach((item, index) => {
                            let li = document.createElement('li')
                            li.innerText = item.title

                            li.onclick = function (e) {
                                editDateInput.value = `${year}-${month + 1}-${d}`
                                editValueInput.value = item.title

                                currentIndex = index

                                bootstrap.Modal.getOrCreateInstance(editModal).show()
                                e.stopPropagation()
                            }

                            ul.appendChild(li)
                        })
                        td.appendChild(ul)
                    }

                    td.onclick = function () {
                        addDateInput.value = `${year}-${month + 1}-${d}`
                        bootstrap.Modal.getOrCreateInstance(addModal).show()
                    }
                }
                else {
                    //下個月
                    td.innerText = 'B'
                }
                day++
            }
            tr.appendChild(td)
        }
        dateArea.appendChild(tr)
    }
}

function nextMonth() {
    month++
    if (month == 12) {
        year++
        month = 0
    }
    renderDate()
}

function previousMonth() {
    month--
    if (month == -1) {
        year--
        month = 11
    }
    renderDate()
}

function addTodoItem() {
    let date = addDateInput.value
    let todoItem = addValueInput.value

    let todoObj = {
        title: todoItem
    }

    let todoList = []

    if (localStorage.getItem(date) == null) {
        todoList.push(todoObj)
    } else {
        todoList = JSON.parse(localStorage.getItem(date))
        todoList.push(todoObj)
    }

    localStorage.setItem(date, JSON.stringify(todoList))

    bootstrap.Modal.getOrCreateInstance(addModal).hide()

    renderDate()
}

function editTodoItem() {
    let date = editDateInput.value
    let todoItem = editValueInput.value

    let todoList = JSON.parse(localStorage.getItem(date))

    todoList[currentIndex] = {
        title: todoItem
    }

    localStorage.setItem(date, JSON.stringify(todoList))

    bootstrap.Modal.getOrCreateInstance(editModal).hide()

    renderDate()
}

function deleteTodoItem() {
    let date = editDateInput.value

    let todoList = JSON.parse(localStorage.getItem(date))
    todoList.splice(currentIndex, 1)

    localStorage.setItem(date, JSON.stringify(todoList))

    bootstrap.Modal.getOrCreateInstance(editModal).hide()

    renderDate()
}

//window.onload
window.onload = function () {
    renderDate()
}