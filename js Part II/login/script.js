const user = document.getElementById('user');
const password = document.getElementById('pwd');
const form = document.getElementById('form');

const htmlError = '<div id="error"></div>'

form.addEventListener('submit', (event) => {
    document.getElementById('container').innerHTML = htmlError;
    const errorElement = document.getElementById('error');

    let messages = []
    if (user.value === '' || user.value == null) {
      messages.push('Usuário é obrigatório!')
    }
  
    if (password.value.length <= 6) {
      messages.push('Insira uma senha com mais de 6 caracteres!')
    }
  
    if (password.value.length >= 20) {
      messages.push('A senha excedeu 20 caracteres')
    }
  
    if (password.value === user.value) {
      messages.push('Insira uma senha diferente do nome de usuário!')
    }
  
    if (messages.length > 0) {
      event.preventDefault()
      errorElement.innerText = messages.join('\n')
    }
})