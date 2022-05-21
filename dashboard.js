
let dataBase = JSON.parse(localStorage.getItem("studentData"))
let trash = JSON.parse(localStorage.getItem("trash")) || []
display(dataBase)

function display(data) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    data.forEach(function (elem, index) {
        const tr = document.createElement('tr');
        tr.setAttribute("class", "tr")

        const td1 = document.createElement('td');
        td1.innerText = elem.name

        const td2 = document.createElement('td');
        td2.innerText = elem.course

        const td3 = document.createElement('td');
        td3.innerText = elem.unit

        const td4 = document.createElement('td');
        const img = document.createElement('img');
        img.setAttribute("class", "studentImg")
        img.src = elem.image_url
        td4.append(img)

        const td5 = document.createElement('td');
        td5.innerText = elem.batch

        const td6 = document.createElement('td');
        td6.innerText = "Remove"
        td6.setAttribute("class", "remove")
        td6.addEventListener("click", function () {
            removeFun(elem, index)
        })

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)


        if (elem.batch == "Batch-1") {
            count1++;
        }
        else if (elem.batch == "Batch-2") {
            count2++;
        }
        else {
            count3++;
        }
    })
    document.querySelector('#Batch-1').innerText = "Batch01 - " + "(" + count1 + ")" + "Students"
    document.querySelector('#Batch-2').innerText = "Batch02 - " + "(" + count2 + ")" + "Students"
    document.querySelector('#Batch-3').innerText = "Batch03 - " + "(" + count3 + ")" + "Students"
}

function removeFun(elem, index) {
    dataBase.splice(index, 1)
    localStorage.setItem("studentData", JSON.stringify(dataBase))
    trash.push(elem)
    localStorage.setItem("trash", JSON.stringify(trash))
    window.location.reload()
}
