// Função para salvar a imagem no Local Storage
function saveImage() {
    const file = document.getElementById('imageInput').files[0];
    if (!file) {
        alert('Por favor, selecione uma imagem primeiro.');
        return;
    }

    const reader = new FileReader();
    const estilo = document.getElementById('estilo').value;

    reader.onloadend = function () {
        const dados = reader.result;
        const imageData = {
            name: file.name,
            estilo: estilo,
            size: file.size,
            data: dados
        };

        // Recupera o perfil existente do LocalStorage ou cria um novo se não existir
        let perfilAtualizado = JSON.parse(localStorage.getItem('dbsd')) || {
            nome: '',
            fotos: [],
            bio: '',
            exp: '',
            end: '',
            insta: '',
            face: '',
            email: '' 
        };

        // Adiciona a nova imagem ao array de fotos existente
        perfilAtualizado.fotos.push(imageData);

        // Salva o perfil atualizado no LocalStorage
        localStorage.setItem('dbsd', JSON.stringify(perfilAtualizado));
        alert('Imagem salva no LocalStorage.');
        mostrarFotosSalvas();
    };

    reader.readAsDataURL(file);
}
document.getElementById('btnSalvar').addEventListener('click', saveImage);

// Função para mostrar as fotos salvas no Local Storage
function mostrarFotosSalvas() {
    const perfilSalvo = JSON.parse(localStorage.getItem('dbsd'));
    const fotosDiv = document.getElementById('fotos');

    if (perfilSalvo && perfilSalvo.fotos) {
        // Limpa as fotos existentes na div
        fotosDiv.innerHTML = '';

        // Adiciona cada foto do perfil salvo
        perfilSalvo.fotos.forEach(foto => {
            const imgElement = document.createElement('img');
            imgElement.src = foto.data;
            imgElement.alt = foto.name;
            imgElement.width = 260;
            imgElement.height = 320;
            imgElement.classList.add('mx-3', 'mt-3');
            fotosDiv.appendChild(imgElement);
        });
    }
}

// Mostra as fotos salvas ao carregar a página
document.addEventListener('DOMContentLoaded', mostrarFotosSalvas);

// Função para salvar o perfil editado no Local Storage
function incluirPerfil() {
    const nome = document.getElementById('nome2').value;
    const bio = document.getElementById('bio2').value;
    const exp = document.getElementById('exp2').value;
    const end = document.getElementById('end2').value;
    const insta = document.getElementById('insta2').value;
    const face = document.getElementById('face2').value;
    const email = document.getElementById('e-mail2').value;

    // Recupera o perfil existente do LocalStorage ou cria um novo 
    let perfilAtualizado = JSON.parse(localStorage.getItem('dbsd')) ||{
        nome: '',
        fotos: [],
        bio: '',
        exp: '',
        end: '',
        insta: '',
        face: '',
        email: ''
    };

    // Atualiza os dados do perfil
    if(nome != '') perfilAtualizado.nome = nome;
    if(bio != '')perfilAtualizado.bio = bio;
    if(exp != '')perfilAtualizado.exp = exp;
    if(end != '')perfilAtualizado.end = end;
    if(insta != '')perfilAtualizado.insta = insta;
    if(face != '')perfilAtualizado.face = face;
    if(email != '')perfilAtualizado.email = email;

    // Salva o perfil atualizado no LocalStorage
    if(nome != ''|| bio != ''|| exp != ''|| end != ''|| insta != ''|| face != ''|| email != '')
    {localStorage.setItem('dbsd', JSON.stringify(perfilAtualizado));
    alert('Perfil salvo no LocalStorage.');
    mostrarPerfil();
    }else
    alert("Nenhuma alteração foi feita!")
}

// Função para perfil salvo no Local Storage
function mostrarPerfil() {
    const perfilSalvo = JSON.parse(localStorage.getItem('dbsd'));

    if (perfilSalvo) {
        document.getElementById('nome1').innerHTML = `<h3>${perfilSalvo.nome}</h3>`;
        document.getElementById('bio1').innerText = perfilSalvo.bio;
        document.getElementById('exp1').innerText = perfilSalvo.exp;
        document.getElementById('end1').innerText = perfilSalvo.end;
        document.getElementById('insta1').innerText = perfilSalvo.insta;
        document.getElementById('face1').innerText = perfilSalvo.face;
        document.getElementById('e-mail1').innerText = perfilSalvo.email;
    }
}

// Mostra o perfil salvo ao carregar a página
document.addEventListener('DOMContentLoaded', mostrarPerfil);


document.getElementById('salvaperfil').addEventListener('click', incluirPerfil);











