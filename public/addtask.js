document.getElementById("bnt").addEventListener("submit", async function (e) {
    e.preventDefault()


    let title = document.getElementById("title").value
    // console.log(title);

    let discription = document.getElementById("dis").value
    // console.log(discription);
    // alert("submit")

    let obj = {
        title: title,
        discription: discription
    }
    try {
        let response = await axios.post("/api/task/addtask", obj)
        // console.log(response);

        if (response.data.sucess) {
            alert(response.data.message)
            window.location.href = "/task.html"
        } else {
            alert(response.data.message)
        }

    } catch (error) {
        alert("server error")
    }
})  