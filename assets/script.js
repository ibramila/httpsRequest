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
const infoBtn = document.querySelector(".infoBtn");
const modalInfo = document.querySelector(".modalInfo");


addBtn.addEventListener("click", modalFunc);
closeModal.addEventListener("click", closeModalFunc);

function modalFunc() {
    modal.style.display = "block";
}
function closeModalFunc() {
    modal.style.display = "none";
}

function saveFunc() {
    modal.style.display = "none"

}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getUsers() {
    fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data) =>
            data.forEach(user => {
                // -------col-3
                let col_3 = document.createElement("div");
                col_3.classList.add("col-3");
                // ---------card-border
                let cardBorder = document.createElement("div");
                cardBorder.classList.add("card", "border-success", "mb-3");
                cardBorder.style.maxWidth = "18rem";
                // ---------card-header

                let card_header = document.createElement("div");
                card_header.classList.add("card-header", "bg-transparent", "border-success");
                card_header.innerText = `Name: ${user.name}`;
                // ---------card-body

                let card_body = document.createElement("div");
                card_body.classList.add("card-body", "text-success");
                // ---------card-title

                let card_title = document.createElement("h5");
                card_title.classList.add("card-title");
                card_title.innerText = `Surname: ${user.surname}`;
                // ---------card_text

                let card_text = document.createElement("h5");
                card_text.classList.add("card-text");
                card_text.innerText = `Gender: ${user.gender}`;
                // ---------card-footer

                let card_footer = document.createElement("div");
                card_footer.classList.add("card-footer", "bg-transparent", "border-success");
                // ---------trash-btn

                let trash = document.createElement("button");
                trash.classList.add("btn", "btn-white", "trash");
                trash.type = "button";
                // trash type 


                // ======i-trash
                let fa_trash = document.createElement("i");
                fa_trash.classList.add("fa-solid", "fa-trash");
                // ======info btn

                let info = document.createElement("button");
                info.classList.add("btn", "btn-white", "infoBtn");
                info.type = "button";

                // ======i-info

                let fa_info = document.createElement("i");
                fa_info.classList.add("fa-solid", "fa-circle-info");
                // =====edit-button

                let edit = document.createElement("button");
                edit.classList.add("btn", "btn-white", "editBtn");
                edit.type = "button";

                // edit i

                let fa_pen_to_square = document.createElement("i");
                fa_pen_to_square.classList.add("fa-solid", "fa-pen-to-square");


                col_3.appendChild(cardBorder);
                cardBorder.appendChild(card_header);
                cardBorder.appendChild(card_body);
                cardBorder.appendChild(card_footer);
                card_body.appendChild(card_title);
                card_body.appendChild(card_text);
                card_footer.appendChild(trash);
                trash.appendChild(fa_trash);
                card_footer.appendChild(info);
                info.appendChild(fa_info);
                card_footer.appendChild(edit);
                edit.appendChild(fa_pen_to_square);


                // infoBtn.onclick = modalInfo.setAttribute("display", "block")

                cards.appendChild(col_3);


                // infoBtn.addEventListener("click", infoFunc)

                // function infoFunc() {
                //     modalInfo.style.display = "block";
                // }

                // const col3 = document.querySelector("col-3");
                // const trashBtn = document.querySelector('.trash');
                // for (const btn of trashBtn) {
                //     btn.addEventListener('click', () => {

                //     });
                // }

            }));
}
getUsers();

save.addEventListener("click", async () => {
    const data = {
        "id": Math.floor((Math.random() * 100) + 1),
        "name": name.value,
        "surname": surname.value,
        "gender": gender,
        "title": title.value,
        "story": story.value
    }

    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    cardWrapper.innerHTML = "";
    getUsers();
});