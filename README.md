# 📝 To-do List Backend

Este é o backend de uma aplicação de lista de tarefas (To-do List), desenvolvido em **Node.js com TypeScript**, utilizando **Express** para a criação da API e **Supabase** como banco de dados.

---

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Supabase (PostgreSQL + Auth + Storage)
- dotenv
- ts-node
- nodemon

---

## 📁 Estrutura do projeto
```bash
src/
├── index.ts # Ponto de entrada do servidor
├── routes/ # Definição das rotas da API
├── controllers/ # Lógica de cada rota
├── services/ # Lógica de negócio
├── config/ # Configurações como Supabase client
├── middlewares/ # Middlewares personalizados
└── models/ # Tipagens e interfaces
```
## ⚙️ Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/to-do-list-backend.git
cd to-do-list-backend
```

2. Instale as dependências 

`npm install`

3. Adicione as variáveis de ambiente

Crie um arquivo `.env` seguindo o arquivo modelo `.env-sample`. Após isso adiciona as variáveis de ambiente ao arquivo.

Exemplo: 
```
PORT=8001
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_service_role_key
...
```

4. Execute o projeto em modo de desenvolvimento:

`npm run dev`

### 📌 Observações

O projeto utiliza o Supabase apenas como backend (banco de dados, autenticação e storage). O servidor Express é tradicional, hospedável em qualquer plataforma como Railway, Render ou VPS.

A estrutura segue princípios de separação de responsabilidades para facilitar manutenção e escalabilidade.
