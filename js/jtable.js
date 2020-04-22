export function jtable() {
    let container = document.querySelector(".content");
    let table = document.createElement("table");
    table.classList.add("table");
    container.append(table);
    $(".table").jtable({

    });
}