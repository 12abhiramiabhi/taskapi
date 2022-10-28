// const { response } = require("express");

const params = window.location.search
const id = new URLSearchParams(params).get('id')

async function fetchTask() {
    try {
        const response = await axios.get("/api/task/singletask/" + id)
        if (response.data.onetask) {
            console.log(response.data.onetask);
            const onetask = response.data.onetask
            // console.log(onetask.title);
            // console.log(onetask.discription);
            document.getElementById("title").value = onetask.title
            document.getElementById("dis").value = onetask.discription
        }
    } catch (error) {
        alert("server error")
    }
}
console.log(id);
fetchTask()

document.getElementById("bnt").addEventListener("submit", async function (e) {
    e.preventDefault()
    console.log(document.getElementById("title").value);
    console.log(document.getElementById("dis").value);
    const title = document.getElementById("title").value
    const discription = document.getElementById("dis").value
    let obj = {
        title: title,
        discription: discription
    }
    try {
        let response = await axios.patch("/api/task/updatetask/" + id, obj)
        if (response.data.success) {
            alert(response.data.message)
            window.location.href = "/task.html"
        } else {
            alert(response.data.message)
        }

    } catch (error) {
        alert("server error")
    }
})


