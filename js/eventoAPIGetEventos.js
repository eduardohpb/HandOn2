const container = document.querySelectorAll("#containerCards");
const url = "https://xp41-soundgarden-api.herokuapp.com/events";
const button = document.querySelector("#maisEventos");
let contador = 2;

function carregarPg() {
    fetch(url)
        .then((response) => response.json())
        .then(function (json) {
            let eventos = json;
            eventos.map(() => {
                htmlEventos = "";
                for (let i = 0; i < contador; i++) {
                    htmlEventos += `
        <article class="evento card p-5 m-3">
            <h2>${eventos[i].name} - ${eventos[i].scheduled.replace(":00.000Z", "")}</h2>
            <h4>${eventos[i].attractions}</h4>
            <p>${eventos[i].description}</p>
            <button ${eventos[i].getId} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Reserve seu ingresso</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><strong>Evento: </strong>${eventos[i].name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div class="mb-3" >
          <label for="nome" class="form-label">Nome</label>
          <input type="text" class="form-control" id="nome" aria-describedby="nome">
      </div>
      <div class="mb-3" >
          <label for="nome" class="form-label">Email</label>
          <input type="text" class="form-control" id="nome" aria-describedby="nome">
      </div>
      <div class="mb-3">
          <label for="lotacao" class="form-label">Quantidade de ingressos</label>
          <input type="number" class="form-control" id="lotacao" aria-describedby="lotacao">
      </div>
      <div class="mb-3">
          <label for="message-text" class="col-form-label">Id</label>
          <textarea class="form-control" id="message-text"></textarea>
      </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Reservar Ingresso</button>
      </div>
    </div>
  </div>
</div>


        </article>
                `;
                }

                container.forEach((element) => (element.innerHTML = htmlEventos));
            });
        })
        .catch(function () {
            console.log("error");
            alert("error");
        });
}

carregarPg();

button.addEventListener("click", () => {
    contador += 6
    carregarPg()
})