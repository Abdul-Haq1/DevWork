document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq() {
    const student = document.querySelector("#userName").value;

    const res = await fetch(`/api`);
    const data = await res.json();

    console.log(data);
    document.querySelector('#personName').textContent = data.name

}