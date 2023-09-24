console.log("Let's get this party started!");

//a function to gather the input data from the user
function userInput (){
    const submitBtn = document.getElementById("submit");
    const search = document. getElementById("search");
    
    submitBtn.addEventListener("click", function (e){
        e.preventDefault();
        console.log (search.value)  
    });
};

userInput();


//
//-link "search" to submit button
//-make submit button clickable
//-send inputValue data through API using a "get request"
//-"post" returned values in the "result-container"
//-make "clear" button remove contents from the page


