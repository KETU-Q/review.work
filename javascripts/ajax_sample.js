let number = 0;

const titleArea = document.getElementById("title")
const contentArea = document.getElementById("content")
const videoArea = document.getElementById("video")
const button = document.getElementById("btn")

let data = [];

// function getData() {
//     button.addEventListener("click", () => {

//         // 1. Generate XMLHttpRequest object
//         const request = new XMLHttpRequest(); //-- 1
//         // Set event handlers in the XMLHttpRequest object and configure processing during communication
//         request.onreadystatechange = function () { //-- 2-1
//             if (request.readyState == 4) { //-- 2-2
//                 if (request.status == 200) {
//                     titleArea.innerHTML = request.response[number].title;
//                     contentArea.innerHTML = request.response[number].content;
//                     videoArea.setAttribute("src", request.response[number].url);
//                     number = number == request.response.length - 1 ? 0 : (number + 1)
//                 }
//             }
//         };
//         // Send request
//         request.open("GET", "ajax.json"); //-- 3-1
//         request.responseType = "json"; //-- 3-2
//         request.send(null); //-- 3-3
//     });
// }

function getData() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                data = request.response

            }
        }
    };
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
}
function changeVideo() {

    button.addEventListener("click", (e) => {
        if (data.length == 0) {
            getData()
        }
        titleArea.innerHTML = data[number].title;
        contentArea.innerHTML = data[number].content;
        videoArea.setAttribute("src", data[number].url);
        number == 2 ? (number = 0) : number++;
    });
}



window.onload = changeVideo; 