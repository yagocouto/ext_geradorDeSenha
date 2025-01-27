# Gerador de Senhas para Sistemas - Extensão Chrome

Extensão prática desenvolvida para gerar senhas de forma rápida e eficiente para as solicitações diárias dos usuários.

## Recursos
- Geração de senhas seguras com diferentes combinações de caracteres.
- Interface intuitiva e fácil de usar.
- Personalização da quantidade de caracteres.
- Suporte a letras maiúsculas, minúsculas, números e caracteres especiais.

## Tecnologias Utilizadas
- **TypeScript** - Para melhor manutenção e segurança do código.
- **HTML5 e CSS3** - Para estrutura e estilização da interface.
- **JavaScript** - Para a lógica de geração de senhas.
- **Chrome API** - Para integração com o navegador.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/YagoCouto/gerador-de-senhas-extensao.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd gerador-de-senhas-extensao
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Compile o TypeScript para JavaScript:
   ```bash
   npx tsc
   ```

5. Carregue a extensão no Chrome:
   - Acesse `chrome://extensions/` no navegador.
   - Ative o "Modo do desenvolvedor".
   - Clique em "Carregar sem compactação" e selecione a pasta do projeto.

## Como Usar
1. Clique no ícone da extensão na barra de ferramentas do Chrome.
2. Escolha as opções desejadas (tamanho da senha, tipos de caracteres).
3. Copie a senha gerada e utilize-a onde for necessário.

## Estrutura do Projeto
```
├── src
│   ├── geradorDeSenha.ts  # Código principal
│   ├── geradorDeSenha.js  # Arquivo gerado pelo TypeScript
├── index.html             # Interface da extensão
├── manifest.json          # Configuração da extensão
├── style.css              # Estilização
├── icon_extensions.png    # Ícone da extensão
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Documentação do projeto
```

## Contribuição
Se desejar contribuir com melhorias para este projeto:
1. Fork o repositório.
2. Crie uma branch com sua nova funcionalidade:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie suas alterações:
   ```bash
   git commit -m "Adicionando nova funcionalidade"
   ```
4. Submeta um Pull Request.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido por [Yago Couto](https://github.com/YagoCouto).

