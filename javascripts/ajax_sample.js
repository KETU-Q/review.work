let number = 0;

let titleArea = document.getElementById("title")
let contentArea = document.getElementById("content")
let videoArea = document.getElementById("video")

let button = document.getElementById("btn")

function getData() {
    button.addEventListener("click", () => {

        // 1. Generate XMLHttpRequest object
        const request = new XMLHttpRequest(); //-- 1
        // Set event handlers in the XMLHttpRequest object and configure processing during communication
        request.onreadystatechange = function () { //-- 2-1
            if (request.readyState == 4) { //-- 2-2
                if (request.status == 200) {
                    titleArea.innerhtml = request.response[number].title;
                    contentArea.innerhtml = request.response[number].content;
                    videoArea.setAttribute("src", request.response[number].url);
                    number = number == request.response.length - 1 ? 0 : (number + 1)
                }
            }
        };
        // Send request
        request.open("GET", "ajax.json"); //-- 3-1
        request.responseType = "json"; //-- 3-2
        request.send(null); //-- 3-3
    });
}

window.onload = getData; 