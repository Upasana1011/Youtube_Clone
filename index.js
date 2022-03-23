let api = "AIzaSyCBFEIwOu5cLZbCEskHpihsD3jq_T6G4fs";
let disp = document.getElementById("disp");

async function searchvdo() {
    try {
        let name = document.getElementById("name").value;
        let res = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${name}&key=${api}&type=video&maxResults=20&part=snippet`);
        let data = await res.json();
        console.log("data is:", data);
        let arrayvdo = data.items;
        display(arrayvdo)
    }
    catch (err) {
        console.log("error is:", err);
    }
    finally {
        console.log("done");
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", searchvdo);
trendingvdo();

let inputBox = document.getElementById("name");
inputBox.oninput = debounc;

let id;
function debounc() {
    clearTimeout(id);
    id = setTimeout(function () {
        searchvdo();
    }, 500)
}

const display = (arr) => {
    console.log(arr);
    disp.innerHTML = null;
    arr.forEach(({ snippet, id: { videoId } }) => {
        // console.log(snippet);
        let div = document.createElement("div");
        div.style.border = "1px solid gray";

        let img = document.createElement("img");
        let url = snippet.thumbnails.medium.url;
        img.src = url;
        img.style.width = "100%";

        let title = snippet.title;
        let h4 = document.createElement("h4");
        h4.innerHTML = title;

        let data = { arr, snippet, videoId };
        div.append(img, h4);

        div.addEventListener("click", function () {
            // alert("clicked")
            showvdo(data)
        })
        disp.append(div);

    });

}

var showvdo = (data) => {
    console.log(data);
    localStorage.setItem("clickvdo", JSON.stringify(data));
    window.open("video.html");
}

async function trendingvdo() {
    try {
        let res = await fetch(`https://www.googleapis.com/youtube/v3/search?q=trendingsong&key=${api}&type=video&maxResults=20&part=snippet`);
        let data = await res.json();
        console.log("data is:", data);
        let arrayvdo = data.items;
        display(arrayvdo);
    }
    catch (err) {
        console.log("error is:", err);
    }
    finally {
        console.log("done");
    }
}
