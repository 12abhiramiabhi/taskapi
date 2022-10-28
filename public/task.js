// console.log("haiii");

// const { deletetask } = require("../controller/taskControler");



async function callApi() {
    try {
        const response = await axios.get("/api/task/alltask")//api call chyyan//     
        // console.log(response.data.alltask[0]);
        if (response.data.success) {
            // console.log("success");
            let { alltask } = response.data
            let cardArray = alltask.map((onetask) => {
                // console.log(onetask.title);
                return ` <div class="main-container">
                <div class="main">
                    <div class="main-box">
                        
                        <h1 class="ta">${onetask.title}</h1>
                        <p class="para" id="dis">${onetask.discription}</p>
                        ${onetask.completed ? '<i class="fa-regular fa-circle-check"></i>' : '<i class="fa-regular fa-circle-xmark"></i>'}
                        ${onetask.completed ? "" : `<button class="bnt" data-id="${onetask._id}">compleated</button>`}

                       <a href="edittask.html?id=${onetask._id}"><button class="bnt">edit</button></a>
                        <button class="deletebtn" data-id="${onetask._id}">delete</button>
                        <p> ${onetask.createdAt}</p>
                    
                    </div>
                </div>
            </div>`
            }).join("  ")
            console.log(cardArray);
            document.querySelector(".wrapper").innerHTML = cardArray
        }
    } catch (error) {
        console.log(error);
    }
}
callApi()

document.querySelector(".wrapper").addEventListener("click", async function (e) {
    // alert("hai")
    if (e.target.innerHTML == "delete") {
        // alert("haiiii")
        try {
            const response = await axios.delete("/api/task/deletetask/" + e.target.dataset.id)
            if (response.data.success) {
                alert(response.data.message)
            }
            window.location.href = "/task.html"

            console.log(e.target.dataset.id);

        } catch (error) {
            alert("server error")
        }
    } else if (e.target.innerHTML == "compleated") {
        let id = e.target.dataset.id

        let obj = {
            completed: true,
        }
        let response = await axios.patch("/api/task/updatetask/" + id, obj)
        if (response.data.success) {
            alert(response.data.message)
            window.location.href = "/task.html"
        } else {
            alert(response.data.message)
        }
    }



    // console.log(e.target.innerHTML);
})

