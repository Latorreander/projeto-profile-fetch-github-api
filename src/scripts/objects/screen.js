const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML =  `<div class="info">
        <img src="${user.avatarUrl}" alt="Foto do Perfil do Usuário"/>
        <div class="data">
        <h1>${user.name ?? "Não possui nome cadastrado 😥" }</h1>
        <p>${user.bio ?? "Não possui bio cadastrada 😥"}</p><br>
        <p>Seguidores:${user.followers}</p> 
        <p>Seguindo:${user.following}</p>
     </div>
     </div>`;

     let eventsInfo = ''
     user.events.forEach(event => eventsInfo +=
        `<li>${event.repo.name}<p>-      ${event.payload.commits[0].message}</p><li/>`);
        
        if(user.events.type === "PushEvent" || "CreateEvent"){
            this.userProfile.innerHTML += `<div class="events">
            <h2>Eventos</h2>
            <ul class="events-list">${eventsInfo}</ul>
            </div>`
        }

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);

        if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="repositories">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                        </div>`
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>USUÁRIO NÃO ENCONTRADO</h3>"
    }

}
export { screen }