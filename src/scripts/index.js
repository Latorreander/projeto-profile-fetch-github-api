document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  getUserPrifile(userName);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13

  if(isEnterKeyPressed){
    getUserPrifile(userName)
  }
});


async function user(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  return await response.json();
}

function getUserPrifile(userName) {
  user(userName).then((userData) => {
    let userInfo = `<img src="${
      userData.avatar_url
    }" alt= "Foto do perfil do usuário"/>
                        <div class="data">
                            <h1>${
                              userData.name ?? "Não possui nome cadastrado 😥"
                            }</h1>
                            <P>${
                              userData.bio ?? "Não possui nome cadastrado 😥"
                            }</p>
                        </div>`;

    document.querySelector(".profile-data").innerHTML = userInfo;
  });
}
