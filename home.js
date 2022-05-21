const submit = document.querySelector('#submit');
submit.addEventListener("click", takeDataFun)

let dataBase = JSON.parse(localStorage.getItem("studentData")) || []

function ContObj(name, course, unit, image_url, batch) {
    this.name = name
    this.course = course
    this.unit = unit
    this.image_url = image_url
    this.batch = batch
}

function takeDataFun() {
    event.preventDefault()

    const name = document.querySelector('#name').value;
    const course = document.querySelector('#course').value;
    const unit = document.querySelector('#unit').value;
    const img_url = document.querySelector('#url').value;
    const batch = document.querySelector('#batch').value;

    var contData = new ContObj(name, course, unit, img_url, batch)
    dataBase.push(contData)
    localStorage.setItem("studentData", JSON.stringify(dataBase))
    window.location.reload()
}

let count1 = 0;
let count2 = 0;
let count3 = 0;

dataBase.forEach(function (elem) {
    if (elem.batch == "Batch-1") {
        count1++;
    }
    else if (elem.batch == "Batch-2") {
        count2++;
    }
    else {
        count3++;
    }
    document.querySelector('#Batch-1').innerText = "Batch01 - " + "(" + count1 + ")" + "Students"
    document.querySelector('#Batch-2').innerText = "Batch02 - " + "(" + count2 + ")" + "Students"
    document.querySelector('#Batch-3').innerText = "Batch03 - " + "(" + count3 + ")" + "Students"
})

// https://i.pinimg.com/originals/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.png