<code>
  <h1 align="center">Bulletproof Node.js Template </h1>
</code>

<div align="center">
  <img src="https://img.shields.io/github/repo-size/IshaanOhri/Bulletproof-NodeJS-Template?logo=github" hspace="5">
  <img src="https://img.shields.io/github/license/IshaanOhri/Bulletproof-NodeJS-Template" hspace="5">
  <img src="https://img.shields.io/github/last-commit/IshaanOhri/Bulletproof-NodeJS-Template?logo=git">
</div>

<br>

<p align="center">
An industrial level NodeJS template that uses tools like TypeScript, Prettier, ESLint, Husky, PM2 and many more. The template also incorporates the MVC architecture.
</p>

<br>

## Steps to start server

<i>In-order to use <code>docker</code>, switch to <code>docker</code> branch</i>

#### Clone repository
```
git clone https://github.com/IshaanOhri/Bulletproof-NodeJS-Template
```

#### Switch branch
```
git checkout pm2
```

#### Install packages
```
npm install
```

#### Development environment:

- Create `dev.env` file and add environment variables according to `env.example`:
```
touch ./src/config/dev.env
```
- Start server:
```
npm run dev
```

#### Production environment:
- Build project
```
npm run-script build
```
- Install `pm2` as global package
```
sudo npm install -g pm2
```
- Change contents of `ecosystem.config.js` if required
- Start server:
```
npm start
```

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License
The project is distributed under the MIT License. See [LICENSE](https://github.com/IshaanOhri/Bulletproof-NodeJS-Template/blob/master/LICENSE) for more information.

## Author
- [Ishaan Ohri](https://github.com/IshaanOhri)

## Tech Stacks / Tools used

<p>
<p>
  <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/nodejs.png" height=40 hspace=10>
  <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/typescript.png" height=40 hspace=10>
</p>
</p>

<br>

<p align="center">
  <a href="https://www.linkedin.com/in/ishaanohri/">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/linkedin.png" width="30" height="30" hspace="20">
  </a>

  <a href="mailto:ishaan99ohri@gmail.com">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/mail.png" width="30" height="30" hspace="20">
  </a>

  <a href="https://stackoverflow.com/users/11712463/ishaan-ohri">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/stackoverflow.png" width="30" height="30" hspace="20">
  </a>

  <a href="https://www.instagram.com/ohri_8/">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/instagram.png" width="30" height="30" hspace="20">
  </a>

  <a href="https://github.com/IshaanOhri">
    <img src="https://github.com/IshaanOhri/IshaanOhri/blob/master/assets/github.png" width="30" height="30" hspace="20">
  </a>
</p>
