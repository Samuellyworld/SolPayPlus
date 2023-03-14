# SolPayPlus

The backend server for SolPayPlus. It is an [Express.js](https://expressjs.com/) API which uses [Solana Pay](https://docs.solanapay.com/). The API documentation can be found [here](https://documenter.getpostman.com/view/9070802/2s93JnU6dp).


## Flow Diagram 🔄

![image](https://i.postimg.cc/WpCZ6cjy/flow-1.jpg)

## Architecture Diagram 🏛️

![image](https://i.postimg.cc/WzgMCsPX/architecture.jpg)


# Pre-requisites ⏮️
- Install [Node.js](https://nodejs.org/en/) version 8.0.0+

# Getting started 🎬
- Clone the repository 🧬
```
$ git clone  https://github.com/Samuellyworld/SolPayPlus
```
- Install dependencies ⏬
```
$ cd SolPayPlus
$ npm install
```

- Build and run the project ⌛️
```
$ npm start
```
  Navigate to `http://localhost:<port>/`



## Building the project 👷🏾‍♂️

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and starts the project. Can be invoked with `npm start`                           |
| `dev`                     | Runs full build before starting all watch tasks. Can be invoked with `npm run dev`                |



