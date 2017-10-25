# react-router-v4-exercise
A n exercise using and setting up react router v4

NOTE: see [Issues](#issues-while-working) for most current progress

## Getting Started

Setup project and run webpack server for development:

```
git clone git@github.com:ar-to/react-router-v4-exercise.git
cd webpack-exercise
yarn install
yarn run dev
```
check http://localhost:8080/

run express server to test for production (still working):

`node Server`

check http://localhost:8081/

## Router Setup

`yarn add react-router-dom reactstrap@next`

add `historyApiFallback: true` to webpack.config.js to redirect to index.js when 404s see [webpack docs](https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback). Also see this [issue](https://github.com/ReactTraining/react-router/issues/5065) or [create-react-app docs](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#serving-apps-with-client-side-routing) for more information about using different servers.

```
devServer: {
  contentBase: './public/dist',
  historyApiFallback: true
},
```

## Resources Used

These sources were used to make this repo:

[React Router v4](https://youtu.be/l9eyot_IXLY)
[Medium](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
[React Router v4 Docs](https://reacttraining.com/react-router/)
[Reactstrap](https://reactstrap.github.io/) - react/bootstrap


## Issues while working

- routes do not work the same way as when serving files via a server. Read [this](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually) for more information.  - NOT FIXED!