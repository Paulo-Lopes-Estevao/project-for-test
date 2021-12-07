# Agencia 87 - Teste

## Requisitos

### Rotas da aplicação

- [x] POST /users
- [x] PATCH /users/:user_id/admin
- [x] GET /users
- [x] GET /users/:user_id

## :computer: Instalação

```bash
# Clone este repositório
$ git clone https://github.com/herlanderbento/project-for-test

# Entre na pasta
$ cd project-for-test
```

# run project

migration table of project

```javascript
  yarn typeorm migration:run
```

## docker

```bash
$ docker-compose up -d
```

or

```bash
$ npm run dev
```

> port: 8888

> swagger docs: http://localhost:8888/api-docs/
