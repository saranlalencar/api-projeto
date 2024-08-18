# Use a imagem base do Node.js
FROM node:16

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta em que a aplicação vai rodar
EXPOSE 5173

# Define o comando para iniciar a aplicação
CMD ["npm", "start"]
