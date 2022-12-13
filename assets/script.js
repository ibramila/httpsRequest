const cards = document.querySelector(".row");
const addBtn = document.getElementById("addBtn");
const modal = document.querySelector(".modalAdd");
const closeModal = document.querySelector(".btn-close");
const save = document.querySelector(".save");
const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const title = document.querySelector(".title");
const story = document.querySelector(".story");
const gender = document.querySelector(".gender");

addBtn.addEventListener("click", modalFunc);
closeModal.addEventListener("click", closeModalFunc);
save.addEventListener("click", saveFunc);

function modalFunc() {
    modal.style.display = "block";
}
function closeModalFunc() {
    modal.style.display = "none";
}

function saveFunc() {
    modal.style.display = "none"

}
fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) =>
        data.forEach(user => {
            let card = `<div class="col-3">
                    <div class="card border-success mb-3" style="max-width: 18rem;">
                        <div class="card-header bg-transparent border-success">${user.name}</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">${user.surname}</h5>
                            <span class="card-text">${user.gender}</span>
                        </div>
                        <div class="card-footer bg-transparent border-success">
                        <button type="button" class="btn btn-white"><i class="fa-solid fa-trash"></i>
                        </button>
                        <button type="button" class="btn btn-white"><i class="fa-solid fa-circle-info"></i>
                        </button>
                        </div>
                    </div>
                </div>`
        }));