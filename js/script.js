//ESERCIZIO 1

var firstList = document.getElementById("first-list");

var firstStudent = {
    Name: "Mario",
    Surname: "Rossi",
    Age: 20,
}

var firstStudentDisplay = "";

for(var key in firstStudent){
    firstStudentDisplay += "<li>" + key + ": " + firstStudent[key] + "</li>"
}

firstList.innerHTML = firstStudentDisplay;