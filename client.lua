-- Variáveis para controlar a interface
local janelaAutoPier = nil
local listaGrid = nil
local campoProposta = nil
local botaoEnviar = nil

-- Função para abrir o site/painel da AutoPier
function abrirAutoPier()
    -- Se o painel já estiver aberto, ele apenas fecha
    if isElement(janelaAutoPier) then
        destroyElement(janelaAutoPier)
        showCursor(false)
        return
    end

    -- Ativar a seta do mouse
    showCursor(true)

    -- Criar a janela principal (Centro da tela)
    janelaAutoPier = guiCreateWindow(0.35, 0.25, 0.30, 0.50, "AutoPier - Venda e Propostas", true)
    guiWindowSetSizable(janelaAutoPier, false)

    -- Criar a tabela (Gridlist) para mostrar as categorias e carros
    listaGrid = guiCreateGridList(0.05, 0.08, 0.90, 0.65, true, janelaAutoPier)
    
    -- Criar as colunas da tabela
    local colunaNome = guiGridListAddColumn(listaGrid, "Veículo", 0.4)
    local colunaCategoria = guiGridListAddColumn(listaGrid, "Categoria", 0.3)
    local colunaPreco = guiGridListAddColumn(listaGrid, "Preço (FIPE)", 0.25)

    -- Preencher a tabela com os carros que configuramos no config_veiculos.lua
    for _, carro in ipairs(ConfigAutoPier.Carros) do
        local linha = guiGridListAddRow(listaGrid)
        guiGridListSetItemText(listaGrid, linha, colunaNome, carro.nome, false, false)
        guiGridListSetItemText(listaGrid, linha, colunaCategoria, carro.categoria, false, false)
        guiGridListSetItemText(listaGrid, linha, colunaPreco, "$" .. carro.preco, false, false)
        
        -- Salva o ID do carro escondido na linha para sabermos qual carro foi clicado
        guiGridListSetItemData(listaGrid, linha, colunaNome, carro.id)
    end

    -- Campo de texto para o jogador digitar a proposta de valor
    campoProposta = guiCreateEdit(0.05, 0.76, 0.50, 0.08, "Digite sua proposta...", true, janelaAutoPier)

    -- Botão para enviar a proposta
    botaoEnviar = guiCreateButton(0.58, 0.76, 0.37, 0.08, "Enviar Oferta", true, janelaAutoPier)

    -- Lógica do botão Enviar
    addEventHandler("onClientGUIClick", botaoEnviar, function()
        local linhaSelecionada = guiGridListGetSelectedItem(listaGrid)
        
        -- Verificar se o jogador selecionou um carro na lista
        if linhaSelecionada == -1 then
            outputChatBox("[AutoPier] Selecione um veículo na lista primeiro!", 255, 150, 0)
            return
        end

        -- Pegar o ID do carro selecionado e o valor digitado
        local idCarro = guiGridListGetItemData(listaGrid, linhaSelecionada, colunaNome)
        local valorDigitado = tonumber(guiCreateGetText(campoProposta))

        -- Verificar se digitou um número válido
        if not valorDigitado or valorDigitado <= 0 then
            outputChatBox("[AutoPier] Digite um valor de proposta válido (apenas números).", 255, 150, 0)
            return
        end

        -- Envia a proposta para o arquivo server.lua processar o dinheiro e o veículo
        triggerServerEvent("AutoPier:enviarProposta", localPlayer, localPlayer, idCarro, valorDigitado)
        
        -- Fecha o painel após enviar
        destroyElement(janelaAutoPier)
        showCursor(false)
    end, false)
end

-- Comando no chat para abrir o site da AutoPier (/autopier)
addCommandHandler("autopier", abrirAutoPier)