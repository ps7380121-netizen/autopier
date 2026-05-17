// ⚠️ CONFIGURAÇÃO DO SEU DISCORD: Link do seu Webhook oficial preservado abaixo
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1505523094175875132/bblXy3qVk4zAN5XmhuyjEzDt3tjrokYAlVKoqm5350LouxtDpr34nnxIRajQxUo7nqT_";

const carros = [
    // ------------------ POPULARES (Com controle de estoque) ------------------
    { id: 1, nome: "VW Fusca", categoria: "Populares", preco: 50000, minima: 30000, estoque: 2 },
    { id: 39, nome: "Chevrolet Opala", categoria: "Populares", preco: 100000, minima: 80000, estoque: 5 },
    { id: 40, nome: "VW Gol", categoria: "Populares", preco: 150000, minima: 100000, estoque: 5 },
    { id: 41, nome: "VW Saveiro", categoria: "Populares", preco: 1200000, minima: 1000000, estoque: 14 },
    { id: 42, nome: "Toyota Corolla Hybrid", categoria: "Populares", preco: 1000000, minima: 800000, estoque: 21 },
    { id: 43, nome: "Golf GTI", categoria: "Populares", preco: 1200000, minima: 1000000, estoque: 20 },
    { id: 44, nome: "Volvo XC90", categoria: "Populares", preco: 2500000, minima: 2000000, estoque: 29 },

    // ------------------ ESPORTIVOS (Com controle de estoque) ------------------
    { id: 2, nome: "Civic Type-R", categoria: "Esportivos", preco: 6000000, minima: 5000000, estoque: 1 },
    { id: 3, nome: "Mustang GT", categoria: "Esportivos", preco: 1000000, minima: 300000, estoque: 0 },
    { id: 4, nome: "Audi RS5", categoria: "Esportivos", preco: 3000000, minima: 1500000, estoque: 0 },
    { id: 5, nome: "Lancer Evo X", categoria: "Esportivos", preco: 5000000, minima: 4000000, estoque: 0 },
    { id: 6, nome: "Audi RS6", categoria: "Esportivos", preco: 8000000, minima: 6000000, estoque: 0 },
    { id: 7, nome: "BMW M4 BodyKit", categoria: "Esportivos", preco: 10000000, minima: 8000000, estoque: 0 },
    { id: 8, nome: "Nissan 370Z", categoria: "Esportivos", preco: 8000000, minima: 7000000, estoque: 0 },
    { id: 9, nome: "Subaru Impreza", categoria: "Esportivos", preco: 13000000, minima: 10000000, estoque: 3 },
    { id: 10, nome: "Mazda RX7", categoria: "Esportivos", preco: 8000000, minima: 6000000, estoque: 0 },
    { id: 11, nome: "Silvia S15", categoria: "Esportivos", preco: 13000000, minima: 10000000, estoque: 0 },
    { id: 12, nome: "Skyline R34", categoria: "Esportivos", preco: 13000000, minima: 10000000, estoque: 8 },
    { id: 45, nome: "BMW X6", categoria: "Esportivos", preco: 4000000, minima: 3000000, estoque: 11 },
    { id: 46, nome: "BMW i8", categoria: "Esportivos", preco: 5000000, minima: 4500000, estoque: 0 },
    { id: 47, nome: "Nissan GTR-R35", categoria: "Esportivos", preco: 10000000, minima: 8000000, estoque: 12 },
    { id: 48, nome: "Lamborghini Huracan", categoria: "Esportivos", preco: 10000000, minima: 8000000, estoque: 0 },

    // ------------------ MOTOS (Com controle de estoque) ------------------
    { id: 30, nome: "BMW R1250", categoria: "Motos", preco: 14000000, minima: 13000000, estoque: 1 },
    { id: 31, nome: "BMW S1000", categoria: "Motos", preco: 13000000, minima: 14000000, estoque: 0 },
    { id: 32, nome: "CB1000", categoria: "Motos", preco: 1000000, minima: 800000, estoque: 8 },
    { id: 33, nome: "XJ6", categoria: "Motos", preco: 500000, minima: 300000, estoque: 3 },
    { id: 34, nome: "Harley", categoria: "Motos", preco: 800000, minima: 500000, estoque: 5 },
    { id: 35, nome: "XT660", categoria: "Motos", preco: 170000, minima: 120000, estoque: 1 },

    // ------------------ UTILITÁRIOS (Com controle de estoque) ------------------
    { id: 13, nome: "Amarok V6", categoria: "Utilitários", preco: 4000000, minima: 3000000, estoque: 0 },
    { id: 36, nome: "Kombi", categoria: "Utilitários", preco: 27000000, minima: 25000000, estoque: 1 },
    { id: 37, nome: "Brickade", categoria: "Utilitários", preco: 34000000, minima: 32000000, estoque: 0 },
    { id: 38, nome: "Kuruma - Blindado", categoria: "Utilitários", preco: 30000000, minima: 28000000, estoque: 2 },
    { id: 53, nome: "Toyota Hilux", categoria: "Utilitários", preco: 4000000, minima: 3000000, estoque: 18 },

    // ------------------ SUVS (Com controle de estoque) ------------------
    { id: 14, nome: "AMG G65", categoria: "SUVs", preco: 7000000, minima: 6000000, estoque: 0 },
    { id: 15, nome: "Velar Range Rover", categoria: "SUVs", preco: 9000000, minima: 7500000, estoque: 1 },
    { id: 16, nome: "Lamborghini Urus ", categoria: "SUVs", preco: 7000000, minima: 5000000, estoque: 0 },

    // ------------------ SUPER (Com controle de estoque) ------------------
    { id: 17, nome: "Corvette Z06", categoria: "Super", preco: 5000000, minima: 3000000, estoque: 0 },
    { id: 18, nome: "BMW M8", categoria: "Super", preco: 5000000, minima: 3000000, estoque: 0 },
    { id: 19, nome: "Honda NSX", categoria: "Super", preco: 8000000, minima: 6000000, estoque: 0 },
    { id: 20, nome: "Audi R8", categoria: "Super", preco: 8000000, minima: 6000000, estoque: 0 },
    { id: 21, nome: "McLaren 675 LT", categoria: "Super", preco: 5000000, minima: 3000000, estoque: 0 },
    { id: 22, nome: "Supra MK5", categoria: "Super", preco: 8000000, minima: 6000000, estoque: 2 },
    { id: 23, nome: "Porsche 911 GT3", categoria: "Super", preco: 10000000, minima: 8500000, estoque: 2 },
    { id: 24, nome: "R35 Liberty Walk", categoria: "Super", preco: 13000000, minima: 10000000, estoque: 0 },
    { id: 25, nome: "SVJ Lamborghini", categoria: "Super", preco: 6000000, minima: 5000000, estoque: 0 },
    { id: 26, nome: "AMG GT63", categoria: "Super", preco: 14000000, minima: 12000000, estoque: 0 },
    { id: 27, nome: "Bugatti Chiron", categoria: "Super", preco: 20000000, minima: 18000000, estoque: 2 },
    { id: 28, nome: "Huracan STO", categoria: "Super", preco: 30000000, minima: 27000000, estoque: 2 },
    { id: 29, nome: "AMG ONE", categoria: "Super", preco: 30000000, minima: 27000000, estoque: 2 },
    { id: 49, nome: "Ferrari Fxxk-Evo", categoria: "Super", preco: 18000000, minima: 16000000, estoque: 0 },

    // ------------------ HELICÓPTEROS (Com controle de estoque) ------------------
    { id: 50, nome: "Helicóptero R44", categoria: "Helicópteros", preco: 20000000, minima: 18000000, estoque: 0 },
    { id: 51, nome: "Helicóptero Deluxe", categoria: "Helicópteros", preco: 26000000, minima: 24000000, estoque: 0 },
    { id: 52, nome: "Helicóptero Volatus", categoria: "Helicópteros", preco: 35000000, minima: 32000000, estoque: 0 },

    // ------------------ IMPORTADOS & ENCOMENDAS (Estoque aberto) ------------------
    { id: 100, nome: "📦 Encomenda Especial / Veículo Importado", categoria: "Importados", preco: 3000000, minima: 3000000, estoque: 999 }
];

let categoriaAtual = 'Todos';
let estoqueExibido = [...carros];
let carroSelecionado = null;

function carregarCarros(listaFiltrada = estoqueExibido) {
    const vitrine = document.getElementById('vitrine-carros');
    vitrine.innerHTML = "";

    if (listaFiltrada.length === 0) {
        vitrine.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #a8a8b3; padding: 20px;">Nenhum veículo encontrado.</p>`;
        return;
    }

    listaFiltrada.forEach(carro => {
        const classeEspecial = (carro.categoria === 'Super' || carro.categoria === 'Helicópteros' || carro.categoria === 'Importados') ? 'card-carro premium-glow' : 'card-carro';
        const textoPreco = carro.preco === 0 ? "Sob Consulta (Faça sua Oferta)" : `R$ ${Math.floor(carro.preco).toLocaleString('pt-BR')}`;
        
        // Lógica visual do Estoque Dinâmico
        let textoEstoque = `<p style="font-size: 0.8rem; color: #4cd62b; margin: 5px 0;">📦 Em Estoque: ${carro.estoque} un.</p>`;
        let botaoAcao = `<button class="btn-proposta" onclick="abrirModal(${carro.id})">Fazer Proposta</button>`;
        
        if (carro.id === 100) {
            textoEstoque = `<p style="font-size: 0.8rem; color: #dfb14e; margin: 5px 0;">📦 Disponível para Pedidos VIP</p>`;
        } else if (carro.estoque <= 0) {
            textoEstoque = `<p style="font-size: 0.8rem; color: #e83f5b; margin: 5px 0;">❌ SEM ESTOQUE DISPONÍVEL</p>`;
            botaoAcao = `<button class="btn-proposta" style="background: #2e2e38; color: #737380; cursor: not-allowed;" disabled>ESGOTADO</button>`;
        } else if (carro.estoque === 1) {
            textoEstoque = `<p style="font-size: 0.8rem; color: #dfb14e; margin: 5px 0; font-weight: bold;">⚠️ ÚLTIMA UNIDADE NO SHOWROOM!</p>`;
        }

        vitrine.innerHTML += `
            <div class="${classeEspecial}">
                <span class="categoria-tag">${carro.categoria}</span>
                <h3>${carro.nome}</h3>
                ${textoEstoque}
                <p class="preco">${textoPreco}</p>
                ${botaoAcao}
            </div>
        `;
    });
}

function filtrar(categoria) {
    categoriaAtual = categoria;
    document.querySelectorAll('.btn-cat').forEach(btn => btn.classList.remove('ativo'));
    
    if(event && event.target.classList.contains('btn-cat')) {
        event.target.classList.add('ativo');
    }

    aplicarFiltrosEBusca();
}

function filtrarPorTexto() {
    aplicarFiltrosEBusca();
}

function aplicarFiltrosEBusca() {
    const termo = document.getElementById('campo-busca').value.toLowerCase();
    
    let resultado = carros;
    if (categoriaAtual !== 'Todos') {
        resultado = resultado.filter(c => c.categoria === categoriaAtual);
    }
    
    if (termo.trim() !== "") {
        resultado = resultado.filter(c => c.nome.toLowerCase().includes(termo));
    }
    
    estoqueExibido = resultado;
    carregarCarros(estoqueExibido);
}

function ordenarPreco(ordem) {
    if (ordem === 'crescente') {
        estoqueExibido.sort((a, b) => a.preco - b.preco);
    } else {
        estoqueExibido.sort((a, b) => b.preco - a.preco);
    }
    carregarCarros(estoqueExibido);
}

function abrirModal(id) {
    carroSelecionado = carros.find(c => c.id === id);
    document.getElementById('modal-carro-nome').innerText = `Veículo: ${carroSelecionado.nome}`;
    
    const textoPreco = carroSelecionado.preco === 0 ? "Sob Consulta" : `R$ ${Math.floor(carroSelecionado.preco).toLocaleString('pt-BR')}`;
    document.getElementById('modal-carro-preco').innerText = `Preço de Tabela: ${textoPreco}`;
    
    if(carroSelecionado.id === 100) {
        document.getElementById('nome-jogador').placeholder = "Seu Nome/ID + Carro desejado (Ex: Passaporte 20 - BMW M3)";
    } else {
        document.getElementById('nome-jogador').placeholder = "Seu Nome ou Passaporte/ID";
    }
    
    document.getElementById('modal-proposta').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal-proposta').style.display = 'none';
    document.getElementById('form-proposta').reset();
}

function enviarProposta(event) {
    event.preventDefault();
    
    const jogador = document.getElementById('nome-jogador').value;
    const valor = Number(document.getElementById('valor-proposta').value);
    const vendedor = document.getElementById('vendedor-select').value;
    const valorFormatado = Math.floor(valor).toLocaleString('pt-BR');

    if (valor < carroSelecionado.minima) {
        alert(`[AutoPier Premium] Olá ${jogador}, a gerência recusou sua oferta de R$ ${valorFormatado} pelo ${carroSelecionado.nome}. O valor está abaixo do limite aceitável.`);
    } else {
        alert(`[AutoPier Premium] EXCELENTE NEGÓCIO! Sua proposta de R$ ${valorFormatado} foi ENVIADA com sucesso! Verifique nosso Discord para concluir a retirada.`);
        
        // Diminui o estoque caso não seja encomenda ilimitada
        if (carroSelecionado.id !== 100 && carroSelecionado.estoque > 0) {
            carroSelecionado.estoque -= 1;
            carregarCarros(estoqueExibido); 
        }

        const comissao = Math.floor(valor * 0.05).toLocaleString('pt-BR');
        const txtVendedor = vendedor === "Nenhum" ? "❌ Venda direta pelo site (Sem vendedor)" : `👔 ${vendedor} (Comissão: R$ ${comissao})`;

        if (DISCORD_WEBHOOK_URL && DISCORD_WEBHOOK_URL.trim() !== "") {
            const dadosDiscord = {
                embeds: [{
                    title: carroSelecionado.id === 100 ? "📦 Nova Solicitação de Importado / Encomenda!" : "📥 Nova Proposta Aceita no Site!",
                    color: carroSelecionado.id === 100 ? 3447003 : 14643534, 
                    fields: [
                        { name: "👤 Cliente / Detalhes", value: jogador, inline: false },
                        { name: "🚘 Veículo Solicitado", value: carroSelecionado.nome, inline: true },
                        { name: "🏷️ Categoria", value: carroSelecionado.categoria, inline: true },
                        { name: "💰 Valor Ofertado", value: `R$ ${valorFormatado}`, inline: false },
                        { name: "💼 Atendido por", value: txtVendedor, inline: false },
                        { name: "📦 Estoque Atualizado", value: `${carroSelecionado.id === 100 ? "Ilimitado" : carroSelecionado.estoque + " un."}`, inline: true }
                    ],
                    footer: { text: "AutoPier Revendedora Premium | Sistema de Vendas RP" },
                    timestamp: new Date()
                }]
            };

            fetch(DISCORD_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosDiscord)
            }).catch(err => console.log("Erro ao enviar para o Discord:", err));
        }

        fecharModal();
    }
}

// Inicializar a vitrine ao carregar a página
carregarCarros();