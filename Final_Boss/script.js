document.querySelector('.botao-conta').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('modal').classList.remove('hidden');
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('modal').classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = this.email.value.trim();
  const username = this.username.value.trim();
  const password = this.password.value.trim();
  const terms = this.terms.checked;
  const privacy = this.privacy.checked;

  const errors = [];

  if (!email.includes('@') || !email.includes('.')) {
    errors.push('Email inválido.');
  }

  if (username.length < 3) {
    errors.push('O nome de usuário deve ter pelo menos 3 caracteres.');
  }

  if (password.length < 6) {
    errors.push('A senha deve ter pelo menos 6 caracteres.');
  }

  if (!terms || !privacy) {
    errors.push('Você precisa aceitar os termos e a política de privacidade.');
  }

  if (errors.length > 0) {
    alert(errors.join('\n'));
  } else {
    alert('Cadastro realizado com sucesso!');
    this.reset();
    document.getElementById('modal').classList.add('hidden');
  }
});
