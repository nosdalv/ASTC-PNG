# Third-Party Notices

Este projeto contém código de terceiros. Os créditos e os termos de licença abaixo devem ser preservados ao redistribuir o projeto.

## ASTC decoder — Ishotihadus/mikunyan

O arquivo `decoder/astc.js` contém uma implementação de decoder ASTC que mantém a referência à fonte original:

- Projeto: **Ishotihadus/mikunyan**
- Arquivo de referência: `ext/decoders/native/astc.c`
- Fonte: https://github.com/Ishotihadus/mikunyan
- Licença: **MIT License**
- Copyright: **© 2017 Ishotihadus**

O próprio repositório `mikunyan` declara a MIT License em seu `LICENSE.txt`. Projetos posteriores de decodificação de texturas também registram o decoder ASTC como MIT e atribuem sua origem a `Ishotihadus/mikunyan`.

### MIT License — Ishotihadus/mikunyan

```text
The MIT License (MIT)

Copyright (c) 2017 Ishotihadus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## `worker.js`

`decoder/worker.js` é código de integração deste projeto. Ele importa `decodeASTC` de `decoder/astc.js`, executa a decodificação em um Web Worker e comunica progresso, resultado e erros para a página.

Não há uma biblioteca externa adicional importada pelo `worker.js`.

## Observação sobre licenças

A licença deste repositório cobre o código original do projeto. O código de terceiros permanece sujeito à sua própria licença e aos respectivos avisos de copyright.

Para informações sobre a licença do projeto como um todo, consulte o arquivo [`LICENSE`](LICENSE).
