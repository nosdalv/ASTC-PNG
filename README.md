# ASTC → PNG

Conversor **100% offline** para transformar texturas `.astc` em imagens `.png` diretamente no navegador.

O projeto foi feito para ser simples, leve e funcionar localmente, sem enviar os arquivos selecionados para nenhum servidor.

## ✨ Recursos

- 🖼️ Conversão de ASTC para PNG
- ⚡ Decodificação local
- 🔒 **100% offline**
- 🚫 Nenhum upload de arquivos
- 📊 Barra de progresso durante a decodificação
- 📐 Detecta automaticamente a resolução e o bloco ASTC pelo cabeçalho
- 🧩 Suporte a texturas ASTC 2D
- 📱 Pode ser usado em dispositivos móveis
- 🌐 Não depende de CDN ou serviço externo

## 📁 Estrutura

```text
ASTC-PNG/
├── LICENSE
├── THIRD-PARTY-NOTICES.md
├── README.md
├── index.html
└── decoder/
    ├── astc.js
    └── worker.js
```

## 🚀 Como usar

1. Baixe ou clone este repositório.
2. Abra `index.html` em um navegador.
3. Selecione um arquivo `.astc`.
4. Clique em **CONVERTER PARA PNG**.
5. Aguarde a decodificação.
6. Baixe o PNG gerado.

Não é necessário instalar Node.js ou outra dependência para utilizar o conversor.

> Dependendo das políticas de segurança do navegador, abrir arquivos HTML diretamente pelo sistema pode apresentar limitações. Se isso acontecer, use um servidor local simples.

## 🔐 Privacidade

O conversor foi desenvolvido para funcionar localmente no dispositivo.

Os arquivos `.astc` selecionados não são enviados para a internet pelo projeto. A conversão acontece no próprio navegador.

## ⚠️ Limitações

Atualmente o conversor é destinado a **texturas ASTC 2D**.

O formato ASTC possui diferentes tamanhos de bloco. O conversor lê as informações do cabeçalho do arquivo e utiliza esses valores durante a decodificação.

## 📜 Licença

O código original desenvolvido para este projeto é disponibilizado sob a **MIT License**. Consulte o arquivo [`LICENSE`](LICENSE).

O projeto também contém código de terceiros. Os respectivos créditos e condições de licença devem ser preservados. Consulte [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md).

## 🙏 Créditos

O decoder ASTC presente em `decoder/astc.js` mantém a referência à implementação original:

**Ishotihadus/mikunyan**  
`ext/decoders/native/astc.c`

O projeto `mikunyan` é disponibilizado sob a MIT License. A implementação ASTC é identificada como derivada dessa fonte também por projetos de decodificação de texturas que documentam seus créditos.

Fonte:

https://github.com/Ishotihadus/mikunyan

Para os avisos e o texto da licença de terceiros, consulte [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md).

## 🛠️ Objetivo

Este projeto nasceu da necessidade de visualizar e converter texturas ASTC de maneira simples, local e acessível, especialmente em dispositivos onde ferramentas tradicionais podem ser difíceis de utilizar.

Se este projeto for útil para você, fique à vontade para dar uma ⭐ no repositório!
