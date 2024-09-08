function addNote() {
    const canario = document.getElementById('noteInput');
    const sabia = document.getElementById('notesList');
    
    if (canario.value.trim() !== '') {
        const beijaFlor = document.createElement('li');

        // Obter a data e hora atual
        const dataAtual = new Date();
        const horaDoPicaPau = dataAtual.toLocaleString('pt-BR', { hour12: true }); // Formata a data e hora

        // Criar um elemento span para a data e hora
        const carimboDeData = document.createElement('span');
        carimboDeData.textContent = horaDoPicaPau + " - ";
        carimboDeData.style.color = '#888'; // Estilo para o carimbo de data
        carimboDeData.style.marginRight = '10px';

        // Adicionar o texto da nota
        beijaFlor.appendChild(carimboDeData);
        beijaFlor.append(canario.value);

        // Criar botão de excluir
        const botaoTucano = document.createElement('button');
        botaoTucano.textContent = 'Excluir';
        botaoTucano.className = 'delete-btn';
        botaoTucano.onclick = function() {
            sabia.removeChild(beijaFlor);
        };
        
        beijaFlor.appendChild(botaoTucano);
        sabia.appendChild(beijaFlor);
        
        canario.value = ''; // Limpar o campo de entrada após adicionar a nota
    } else {
        alert('Por favor, digite uma nota!');
    }
}
