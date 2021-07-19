//ESERCIZIO 1

var firstList = document.getElementById("first-list");

var firstStudent = {
    Name: "Francesco",
    Surname: "Viola",
    Age: 20,
}

var firstStudentDisplay = "";

for(var key in firstStudent){
    firstStudentDisplay += "<li>" + key + ": " + firstStudent[key] + "</li>"
}

firstList.innerHTML = firstStudentDisplay;

//ESERCIZIO 2

var secondList = document.getElementById("second-list");

var studentsList = [
    {
        Name: "Mario",
        Surname: "Rossi",
        Age: 19,
    },

    {
        Name: "Luigi",
        Surname: "Verdi",
        Age: 23,
    }
    
    
]

var studentInput = {
    Name: prompt("Inserire nome"),
    Surname: prompt("Inserire cognome"),
    Age: parseInt(prompt("Inserire età")),
}

studentsList.push(studentInput);

var secondStudentDisplay = "";

for(var i = 0; i < studentsList.length; i++){

    for(var key in studentsList[i]){
        secondStudentDisplay += "<li>" + key + ": " + studentsList[i][key] + "</li>"
    }

}

secondList.innerHTML = secondStudentDisplay;
