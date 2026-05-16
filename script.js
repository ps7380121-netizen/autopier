// Lista de estoque da AutoPier Revendedora Premium (Preços zerados e categoria SUV adicionada)
const carros = [
    // ------------------ POPULARES ------------------
    { id: 1, nome: "VW Fusca", categoria: "Populares", preco: 50000, minima: 30000 },
    { id: 39, nome: "Chevrolet Opala", categoria: "Populares", preco: 100000, minima: 80000 },
    { id: 40, nome: "VW Gol", categoria: "Populares", preco: 150000, minima: 100000 },
    { id: 41, nome: "VW Saveiro", categoria: "Populares", preco: 1200000, minima: 1000000 },
    { id: 42, nome: "Toyota Corolla Hybrid", categoria: "Populares", preco: 1000000, minima: 800000 },
    { id: 43, nome: "Golf GTI", categoria: "Populares", preco: 1200000, minima: 1000000 },
    { id: 44, nome: "Volvo XC90", categoria: "Populares", preco: 2500000, minima: 2000000 },

    // ------------------ ESPORTIVOS ------------------
    { id: 2, nome: "Civic Type-R", categoria: "Esportivos", preco: 6000000, minima: 5000000 },
    { id: 3, nome: "Mustang GT", categoria: "Esportivos", preco: 1000000, minima: 300000 },
    { id: 4, nome: "Audi RS5", categoria: "Esportivos", preco: 3000000, minima: 1500000 },
    { id: 5, nome: "Lancer Evo X", categoria: "Esportivos", preco: 5000000, minima: 4000000 },
    { id: 6, nome: "Audi RS6", categoria: "Esportivos", preco: 8000000, minima: 6000000 },
    { id: 7, nome: "BMW M4 BodyKit", categoria: "Esportivos", preco: 10000000, minima: 8000000 },
    { id: 8, nome: "Nissan 370Z", categoria: "Esportivos", preco: 8000000, minima: 7000000 },
    { id: 9, nome: "Subaru Impreza", categoria: "Esportivos", preco: 13000000, minima: 10000000 },
    { id: 10, nome: "Mazda RX7", categoria: "Esportivos", preco: 8000000, minima: 6000000 },
    { id: 11, nome: "Silvia S15", categoria: "Esportivos", preco: 13000000, minima: 10000000 },
    { id: 12, nome: "Skyline R34", categoria: "Esportivos", preco: 13000000, minima: 10000000 },
    { id: 45, nome: "BMW X6", categoria: "Esportivos", preco: 4000000, minima: 3000000 },
    { id: 46, nome: "BMW i8", categoria: "Esportivos", preco: 5000000, minima: 4500000 },
    { id: 47, nome: "Nissan GTR-R35", categoria: "Esportivos", preco: 10000000, minima: 8000000 },
    { id: 48, nome: "Lamborghini Huracan", categoria: "Esportivos", preco: 10000000, minima: 8000000 },

    // ------------------ MOTOS ------------------
    { id: 30, nome: "BMW R1250", categoria: "Motos", preco: 14000000, minima: 13000000 },
    { id: 31, nome: "BMW S1000", categoria: "Motos", preco: 13000000, minima: 14000000 },
    { id: 32, nome: "CB1000", categoria: "Motos", preco: 1000000, minima: 800000 },
    { id: 33, nome: "XJ6", categoria: "Motos", preco: 500000, minima: 300000 },
    { id: 34, nome: "Harley", categoria: "Motos", preco: 0, minima: 0 },
    { id: 35, nome: "XT660", categoria: "Motos", preco: 0, minima: 0 },

    // ------------------ UTILITÁRIOS ------------------
    { id: 13, nome: "Amarok V6", categoria: "Utilitários", preco: 4000000, minima: 3000000 },
    { id: 36, nome: "Kombi", categoria: "Utilitários", preco: 27000000, minima: 25000000 },
    { id: 37, nome: "Brickade", categoria: "Utilitários", preco: 34000000, minima: 32000000 },
    { id: 38, nome: "Kuruma - Blindado", categoria: "Utilitários", preco: 30000000, minima: 28000000 },

    // ------------------ SUVS ------------------
    { id: 14, nome: "AMG G65", categoria: "SUVs", preco: 7000000, minima: 6000000 },
    { id: 15, nome: "Velar Range Rover", categoria: "SUVs", preco: 9000000, minima: 7500000 },
    { id: 16, nome: "Urus Lamborghini", categoria: "SUVs", preco: 7000000, minima: 5000000 },

    // ------------------ SUPER ------------------
    { id: 17, nome: "Corvette Z06", categoria: "Super", preco: 5000000, minima: 3000000 },
    { id: 18, nome: "BMW M8", categoria: "Super", preco: 5000000, minima: 3000000 },
    { id: 19, nome: "Honda NSX", categoria: "Super", preco: 8000000, minima: 6000000 },
    { id: 20, nome: "Audi R8", categoria: "Super", preco: 8000000, minima: 6000000 },
    { id: 21, nome: "McLaren 675 LT", categoria: "Super", preco: 5000000, minima: 3000000 },
    { id: 22, nome: "Supra MK5", category: "Super", preco: 8000000, minima: 6000000 },
    { id: 23, nome: "Porsche 911 GT3", categoria: "Super", preco: 10000000, minima: 8500000 },
    { id: 24, nome: "R35 Liberty Walk", categoria: "Super", preco: 13000000, minima: 10000000 },
    { id: 25, nome: "SVJ Lamborghini", categoria: "Super", preco: 6000000, minima: 5000000 },
    { id: 26, nome: "AMG GT63", categoria: "Super", preco: 14000000, minima: 12000000 },
    { id: 27, nome: "Bugatti Chiron", categoria: "Super", preco: 20000000, minima: 18000000 },
    { id: 28, nome: "Huracan STO", categoria: "Super", preco: 30000000, minima: 27000000 },
    { id: 29, nome: "AMG ONE", categoria: "Super", preco: 30000000, minima: 27000000 },
    { id: 49, nome: "Ferrari Fxxk-Evo", categoria: "Super", preco: 0, minima: 0 },

    // ------------------ HELICÓPTEROS ------------------
    { id: 50, nome: "Helicóptero R44", categoria: "Helicópteros", preco: 0, minima: 0 },
    { id: 51, nome: "Helicóptero Deluxe", categoria: "Helicópteros", preco: 0, minima: 0 },
    { id: 52, nome: "Helicóptero Volatus", categoria: "Helicópteros", preco: 0, minima: 0 }
];

let carroSelecionado = null;

// Função para renderizar os carros na tela
function carregarCarros(listaFiltrada = carros) {
    const vitrine = document.getElementById('vitrine-carros');
    vitrine.innerHTML = "";

    if (listaFiltrada.length === 0) {
        vitrine.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #a8a8b3;">Nenhum veículo disponível nesta categoria no momento.</p>`;
        return;
    }

    listaFiltrada.forEach(carro => {
        vitrine.innerHTML += `
            <div class="card-carro">
                <span class="categoria-tag">${carro.categoria}</span>
                <h3>${carro.nome}</h3>
                <p class="preco">R$ ${Math.floor(carro.preco)}</p>
                <button class="btn-proposta" onclick="abrirModal(${carro.id})">Fazer Proposta</button>
            </div>
        `;
    });
}

// Filtrar por categoria
function filtrar(categoria) {
    document.querySelectorAll('.btn-cat').forEach(btn => btn.classList.remove('ativo'));
    if(event) {
        event.target.classList.add('ativo');
    }

    if (categoria === 'Todos') {
        carregarCarros(carros);
    } else {
        const filtrados = carros.filter(c => c.categoria === categoria);
        carregarCarros(filtrados);
    }
}

// Controle do Pop-up de Propostas
function abrirModal(id) {
    carroSelecionado = carros.find(c => c.id === id);
    document.getElementById('modal-carro-nome').innerText = `Veículo: ${carroSelecionado.nome}`;
    document.getElementById('modal-carro-preco').innerText = `Preço de Tabela: R$ ${Math.floor(carroSelecionado.preco)}`;
    document.getElementById('modal-proposta').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal-proposta').style.display = 'none';
    document.getElementById('form-proposta').reset();
}

// Enviar a proposta e receber resposta
function enviarProposta(event) {
    event.preventDefault();
    
    const jogador = document.getElementById('nome-jogador').value;
    const valor = Number(document.getElementById('valor-proposta').value);

    // Formata o valor digitado como número inteiro na mensagem
    const valorFormatado = Math.floor(valor);

    if (valor < carroSelecionado.minima) {
        alert(`[AutoPier Premium] Olá ${jogador}, a gerência recusou sua oferta de R$ ${valorFormatado} pelo ${carroSelecionado.nome}. O valor está abaixo do limite aceitável para este veículo premium.`);
    } else {
        alert(`[AutoPier Premium] EXCELENTE NEGÓCIO, ${jogador}! Sua proposta de R$ ${valorFormatado} foi ACEITA! Entre em contato com a equipe no jogo para receber seu ${carroSelecionado.nome}.`);
        fecharModal();
    }
}

// Inicializar o site
carregarCarros();