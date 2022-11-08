<h1 align="center">Welcome to Ramp API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1-blue.svg?cacheSeconds=2592000" />
  <a href="https://documenter.getpostman.com/view/1825277/UVsHUoN4" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

<p>This api is also hosted on https://ramp-api.onrender.com/</p>
<p>API Documentation is located at https://documenter.getpostman.com/view/1825277/2s8YYMo1KG</p>

## DEPLOYING
### 🏠 [Requirements](Requirements)
<ul>
	<li>node 16.18 and above</li>
	<li>NPM or Yarn</li>
	<li>MongoDB database </li>
</ul>

## Setting up and Running the API

### ✨ [Clone](Clone the repo)

```sh
  git clone https://github.com/Mangweli/RampAPI.git
  cd RampAPI
```

### ✨ [Dependancies](Install Dependancies)

```sh
  npm install or yarn
```

### ✨ [env](Environment Variables)

> Copy `.env.example` to `.env`

```sh
  cp .env.example .env 
```
edit .env file and enter your environment variables

## Run tests

```sh
npm test
```

## DEPLOYING WITH DOCKER
### 🏠 [Requirements](Requirements)

> Docker Installed on your machine or server

## Setting up and Running the API

### ✨ [Clone](Clone the repo)

```sh
  git clone  https://github.com/Mangweli/RampAPI.git
  cd RampAPI
```

### ✨ [Dependancies](Install Dependancies)

```sh
  npm install or yarn
```

### ✨ [env](Environment Variables)

> Copy `.env.example` to `.env`

```sh
  cp .env.example .env 
```
<ul>
	<li>Edit .env file and enter your environment variables</li>
	<li>Make sure DB_HOST is changed to  mysql</li>
</ul>


## Run Tests
```sh
docker-compose exec -T app npm test
```

## Running the App

```sh
npm start
```
<p>The app will be live on the port entered on the .env file</p>
<p>This can be accessed through any  browsers or any api simulation app</p>



## Author

👤 **Kingsley**

* Website: Author Website Here
* Twitter: [@Kmangwels](https://twitter.com/Kmangwels)
* Github: [@Mangweli](https://github.com/Mangweli)
* LinkedIn: [@Kingsley Amaitsa](https://linkedin.com/in/Kingsley Amaitsa)


## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Kingsley](https://github.com/Mangweli).<br />

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
