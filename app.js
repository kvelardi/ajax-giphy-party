// console.log("Let's get this party started!");

const search = document. getElementById("search");

const submitBtn = document.getElementById("submitBtn");

// axios
async function getData(){

    giphy =`https://api.giphy.com/v1/gifs/search?q=${search.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`

const response = await axios.get(giphy);

const data = response.data.data;
    console.log (data);

    let i = [];
// create a loop to loop through the data array
for (i = 0; i < data.length; i++){
    
        // inside of the loop create an img tag
        const results = document.getElementById ('results');

        const img = document.createElement ('img');

        // use what ever variable u create for the image with a .src = <address of the url so something like data[i].images.medium_image.url
        img.src = data[i].images.original.url;

        // // use inerHTML to push the img to the actual html page
        results.appendChild(img);

     
    }
};

// console.log ('this line is after axios');


submitBtn.addEventListener("click", function (evt){
    evt.preventDefault();
    getData();
});


