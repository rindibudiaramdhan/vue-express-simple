# vue-node-hide-api-key

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Backend Setup

For this project, you need both the front-end and back-end running at the same time. You will also need an API key:
- In the `backend` folder, rename `.env.example` to `.env`
- Generate an APU key at https://api.openweathermap.org
- Add your API key to `backend/.env`

### Install dependencies
```
cd backend
npm install
```

### Launch the Backend
```
npm run dev
```