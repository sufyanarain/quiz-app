var questionarry = [{
        question: "full form of pc is?",
        answer: "personal computer",

        options: [
            "proper computer",
            "personal computer",
            "personal cpu",
            "pure computer"
        ]
    },

    {
        question: "full form of ram is?",
        answer: "random access memory",

        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "reuse access memory"
        ]
    },

    {
        question: "full form of cpu is?",
        answer: "central processing unit",

        options: [
            "central program unit",
            "central processing unit",
            "control program unit",
            "none of the obove"
        ]
    },

    {
        question: "full form of lcd is?",
        answer: "liquid crystal display",

        options: [
            "liquid cold display",
            "light crystal display",
            "liquid crystal display",
            "none of the obove"
        ]
    },

]

////////////******push data to local storage*********/////////////
function submitData(e){
    e.preventDefault();

    var user123 = document.getElementById("userName");
    

    // user.innerHTML = input.value;
    var userName = document.getElementById("nameInput").value;
    // console.log(userName)
    window.localStorage.setItem("user",userName);

    // var getData = localStorage.getItem("user");
    // console.log(getData);

    // user123.innerHTML = getData;
    // console.log(getData)
    

}
var user123 = document.getElementById("userName");
// var userName = document.getElementById("nameInput").value;
var getData = localStorage.getItem("user");

user123.innerHTML = "Welcome , " + getData ;
console.log(user123.innerHTML,getData)



///*********************change page first page to quiz page*************
function change(){
    window.location.href = ("index.html");

}



// **************show question in html from object*************
function showQuestion(e) {
    //show question
    var questionElement = document.getElementById("questionElement")
    questionElement.innerHTML = questionarry[e].question;

    //show options
    var optionElement = document.getElementsByClassName("card-text")
    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = questionarry[e].options[i]

    }

}

// ******question count and score variable decration************
var questionCount = 0;
var score = 0;


// ************next question function **********
function next() {
    validity(questionCount)
    questionCount++
    var q = window.localStorage.setItem("questionCount1",questionCount)
    // console.log(qData)
    if(questionarry.length == questionCount){
    window.location.href = ("score.html");


    }
// **** calling show question and remove active class funtion on every hit next 
    showQuestion(questionCount)
    
    removeActiveClass()

    
}



// **********  put active class function********
function putActiveClass(e) {
    removeActiveClass()
    e.classList.add("active")
}

// **************remove active class function***** 
function removeActiveClass() {
    var optionElement = document.getElementsByClassName("active")
    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].classList.remove("active")
    }
}


// *********** checking question validity and increas score ***********
function validity(e) {
    var optionElement = document.getElementsByClassName("active")
    
    if (optionElement[0].innerHTML == questionarry[e].answer) {
        score += 10
        console.log(score)
        // break
    } 

// ********pushing score to local storage *********
window.localStorage.setItem("score",score);



}


   




