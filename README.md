# Documentação de Especificações de Requistos de Software (SRS)

## Sistema de Gestão de Quitanda (Quitanda MVC)

**Padrão Internacional:** ISO/IEC/IEEE 29148:2018
**Versão:** 1.0.0
**Data:** 2026-04-14
**Autor:** DiogoTB

---

## 1. Introdução

### 1.1 Propósito

Este Documento descreve os requisitos do sistema **Quitanda MVC**, com o objetivo de:

* definir funcionalidade;
* padrionizar entendimentos entre os stakeholders;
* servir como base para desenvolvimento e teste;

---

### 1.2 Escopo

O Sistema permitirá:

* registro de entrada de produtos;
* controle de estoque;
* registro de vendas;
* visualização dos histórico da movimentações;

O Sistema será uma aplicação web frontend utilizando:

* HTML
* CSS
* JavaScript
* Arquitetura MVC
* Estrutura POO

Objetivos:

---

### 1.3 Definições e Acrônimos

Tabela de Termos e Definições

| Termos | Definições |
| - | - |
| Produto | Item Comercializado na quitanda |
| Entrada | Registro de chegada de produto |
| Saída | Registro de venda de Produto |
| Estoque | Quantidade disponível de produtos |

Lista de Acrônimos

* **SGQ:** Sistema de Gestão de Quitanda;
* **RF:** Requisitos Funcionais;
* **RNF:** Requisitos Não Funcionais;
* **UC:**  Casos de Uso;
* **CA:** Critérios de Aceitação;

### 1.4 Visão Geral do Documento

Este Documento está Organizado em:

* Introdução e Visão Geral;
* descrição do sistema;
* requistos detalhados;
* modelos UML;
* regras de negócio;

---

## 2. Descrição Geral do Sistema

### 2.1 Perspectiva do Sistema

O Sistema é standalone (frontend), operando em um navegador web.

```mermaid

flowchart TD
    Usuário --> Interface
    Interface --> Controller
    Controller --> Model
    Model --> Controller
    Controller --> Interface
    Interface --> Usuário

```

---

### 2.2 Funções do Sistema

O Sistema deve:

* Cadastrar produtos;
* Atualizar estoque;
* Registrar vendas;
* Validar Operações;
* Exibir dados;
  
---

### 2.3 Classes de Usuários

| Usuários | Descrição |
| - | - |
| Estoquista | Gerenciar estoque |
| Caixa | Realizar Venda |
| Repositor | Registrar Entradas |

---

### 2.4 Ambiente Operacional

* Navegadores Web (Chrome, Edge, Firefox, Brave);

---

### 2.5 Restrições

* não utiliza Banco de Dados;
* dados aramazenado na memória;
* sem autenticação;

---

### 2.6 Suposições

* Usuário possui conhecimento de Informática;
* Volume de dados é pequeno;

---

## 3. Requisitos do Sistema

### 3.1 Requisitos funcionais

#### RF-01: Cadastro de Produtos

**Descrição:** Permitir cadastrar um produto.
- Prioridade: Alta
- Versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 01

**Critérios de aceitação**
[] Entrada de dados: Nome, Categoria, Preço, Quantidade
[] Validação dos campos
[] Verificação de duplicidade
[] Saída: Notificação para o usuário

#### RF-02: Atualizar Estoque

**Descrição:** Permitir atualização de dados de itens existentes.
- Prioridade: Alta
- Versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 02

**Critérios de aceitação**
[] Verificar se item já está cadastrado
[] Entrada de Dados: Nome, Categoria, Preço, Quantidade
[] Validação de Campos
[] Saída: Notificação para o usuário

#### RF-03: Listagem de Estoque

**Descrição:** Exibir informações dos produtos cadastrados.
- Prioridade: Alta
- Versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 03

**Critérios de aceitação**
[] Listagem de produtos
[] Saída: Id, Nome, Categoria, Preço, Quantidade

#### RF-04: Registro de Vendas

**Descrição:** Permitir a venda de produtos.
- Prioridade: Alta
- Versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 04

**Critérios de aceitação**
[] Venda de Produtos Cadastrados
[] Verificação de Quantidade
[] Atualização do Estoque
[] Saída: Notificação para o usuário sobre a venda

#### RF-04: Histórico de movimentações

**Descrição:** Permitir o Registro de Movimentações (Entrada de Saída) de Produtos.
- Prioridade: Média
- Versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 05

**Critérios de aceitação**
[] Registro de Movimentações em uma Lista
[] Consulta das Movimentações
[] Verificação de Duplicidade
[] Saída: Notificação para o usuário

---

### 3.2 Requisitos Não Funcionais

#### RNF-001: Usabilidade
**Descrição:** Interface Simples e Intuitiva.

#### RNF-002: Desempenho
**Descrição:** Respostas Rápidas e Inferiores a 1 Segundo.

#### RNF-002: Arquitetura de Software MVC
**Descrição:** Estrutura da Arquitetura de Códigos em Padrão MVC (Model, View, Controller).

#### RNF-002: Confiabilidade
**Descrição:** Validação de Entrada de Dados Obrigatória.

---

## Regras do Negócio

Tabela de Regras
|Regras de Negócio|Descrição|
|-|-|
| RN-01 | Quantidade de produtos não pode ser negativa |
| RN-02 | Preço do produto não pode ser negativo |
| RN-03 | Venda só pode ser realizada se estoque for suficiente |
| RN-04 | Toda movimentação deve ser registrada |

Pode Existir Restrições para o Negócio (legais, locais, etc...).

## 5. Modelos do Sistema

### 5.1 Diagrama de Casos de Uso

Diagrama de casos de uso: O que o sistema deve fazer do ponto de vista do usuário.

```mermaid

flowchart LR
    Repositor --> UC1[Registrar Entrada]
    Caixa --> UC2[Registrar Venda]
    Estoquista --> UC3[Consultar Estoque]
    Estoquista --> UC4[Consultar Movimentação]

```

---

### 5.2 Diagrama de Classes UML

Diagrama de Classe UML: Estrutura do código, classes, atributos e métodos

```mermaid

classDiagram

    class Produto{
        -id
        -nome
        -categoria
        -preço
        -quantidade

        +venda(nome, quantidade, precoTotal)
        +entrada(nome, quantidade, preço)
    }

    class QuitandaModel{
        +addProduto(Produto)
        +sellProduto(Produto)
    }

    class QuitandaView{
        +renderEstoque()
        +renderVenda()
    }

    class QuitandaController{
        +handleAddProduto()
        +handleSellProduto()
        +handleUpdateProduto()
        +handleUpdateEstoque()
        +heandleRegistraMovimentacao()
    }

    QuitandaController --> QuitandaModel
    QuitandaController --> QuitandaView
    QuitandaModel --> Produto

```

---

### 5.3 Diagrama de Sequência

Diagrama de Sequência: Interação de objetos ao longo do tempo para realizar uma funcionalidade especifíca.

#### 5.3.1 Venda

```mermaid

sequenceDiagram
    Usuario ->> Controller: Solicitar venda
    Controller ->> Model: Atualizar estoque
    Model ->> Controller: Retorno
    Controller ->> View: Atualizar a interface

```

---

## 6. Análise de Risco

| Risco | Impacto | Mitigação |
| - | - | - |
| Perda de Dados | Alto | Usar LocalStorage |
| Entrada de Dados | Médio | Validar as Entradas de Dados |

---
## 7. Controle de Versões

### 7.1 Histórico de Alterações

| Versão | Data | Autor | Modificação |
|-|-|-|-|
| 1.0.0 | 2026-04-28 | Thayssa Maneo | Versão Inicial |

### 7.2 Aprovações

| Papel | Nome | Data | Assinatura |
|-|-|-|-|
| StakeHolder | Seu Joaquim | 2026-04-29 | [] |