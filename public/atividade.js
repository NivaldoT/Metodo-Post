
/*document.getElementById('formulario').addEventListener('submit', function(event) {
    // Evita envio imediato
    event.preventDefault();

    // Coleta os valores
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const cel = document.getElementById('cel').value.trim();
    const data = document.getElementById('data').value.trim();
    const senha = document.getElementById('senha').value;
    const confir = document.getElementById('confir').value;

    // Exemplo de validação simples
    if (
        nome === '' ||
        email === '' ||
        cpf === '' ||
        cel === '' ||
        data === '' ||
        senha === '' ||
        confir === ''
    ) {
        alert('Todos os campos devem ser preenchidos!');
        return;
    }

    if (senha !== confir) {
        alert('As senhas não coincidem!');
        return;
    }

    // Se passou nas validações, envia o formulário
    this.submit();
});*/

document.getElementById('formulario').addEventListener('submit', function(event) 
{
    var correto = true;
    event.preventDefault();
   //alert(document.getElementById("nome").value);
   var nomec = document.getElementById("nome").value;
    var qtd = nomec.split(' ').length;
    if(qtd<2)
    {
        document.getElementById("nome").style.borderColor = 'red';
        alert('O campo nome deve ter dois nomes!');
        correto = false;
    }
    
    var email = document.getElementById("email").value;
    if(email.indexOf('@')==-1)
    {
        alert("email deve conter @");
        document.getElementById("email").style.borderColor = 'red';
        correto = false;
    }

    var cpf = document.getElementById("cpf").value;
    if(cpf.length!=11)
    {
        alert("cpf invalido");
        document.getElementById("cpf").style.borderColor = 'red';
        correto = false;
    }

    var cel = document.getElementById("cel").value;
    if(cel.length<8 || cel.length>9)
    {
        alert("telefone invalido");
        document.getElementById("cel").style.borderColor = 'red';
        correto = false;
    }

    var data = document.getElementById("data").value;
    var nascimento = new Date(data);
    var hoje = new Date();
    var idade =  hoje.getFullYear() - nascimento.getFullYear();
    if(idade < 16)
    {
        alert('Idade Mímina de 16 anos');
        document.getElementById("data").style.borderColor = 'red';
        correto = false;
    }

    var senha = document.getElementById("senha");
    var confir = document.getElementById("confir");
    if(confir.value!=senha.value)
    {
        alert('senha e confirmação nao bate') 
        document.getElementById("senha").style.borderColor = 'red';
        document.getElementById("confir").style.borderColor = 'red';  
        correto = false;
    }

   if(correto)
        this.submit();
})
/*var nome = document.getElementById('nome').value;
    var qtd = nome.split(' ').length;
    if(qtd<2)
    {
        nome.style.color='red';
        alert('O campo nome deve ter dois nomes!');
    }
    document.write('aaaaaa')*/ 