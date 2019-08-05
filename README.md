#### React를 이용하여 글작성 기능 만들기

### 0. 개발 환경 셋팅

> node.js 설치
> plugin 설치

```
vscode-styled-jsx
react nitro essentials
prettier
eslint
```

> yarn 설치

### 1. React 프로젝트 세팅: Parcel로 프로젝트 구성

> yarn init -y

## 프리티어 설정

```
코드를 예쁘게 정리해줍니다.
yarn add prettier -D
```

## pacakge.json에 format 추가

```
"scripts": {
    "format": "prettier --write \"./**/*.{js,html,css}\""
},
```

## 플러그인 설정

```
단축키 ctrl+,
require config, format on save 체크
```

## eslint 설정

```
자바스크립트 문법을 검사해줍니다.
yarn add -D eslint eslint-config-prettier
```

## .eslintrc.json 생성

```
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

## Parcel 번들러 추가

> yarn add -D parcel-bundler

## package.json에 코드 추가

```
  "scripts": {
    "format": "prettier --write \"./**/*.{js,html,css}\"",
    "dev": "parcel index.html"
  }
```

## react 설치

> yarn add react react-dom

## index.js 파일 만들고 코드 추가

```
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));
```

```
그러면 eslint 에서 React를 안쓴다고 에러가 나오는것을 볼수있다.
그래서 React 용 별도의 플러그인들을 설치함
```

## eslint 플러그인 추가

> yarn add -D babel-eslint eslint-plugin-import eslint-plugin-react

## .eslintrc.json 수정

```
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "no-console": "warn"
  },
  "plugins": ["react", "import"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## App 컴포넌트를 만든다

```
src/App.js
import React, { Component } from "react";

export default class App extends Component {
  state = {};

  render()
  {
    return <div>hello react</div>;
  }
}
```

```
컴포넌트를 생성한 후 state 추가하면 에러가 발생한다.
클래스 속성은 ECMAScript에 새로 추가되는 스펙인데 바벨을 이용하여 사용할 수 있습니다. 기본적으로 parcel은 바벨을 사용하는데 우리가 바벨 설정을 오버라이드 해서 원하는 스펙을 추가할 수 있습니다.
```

> yarn add -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react

## .babelrc 생성

```
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

## .eslint.json 에 코드 추가

> "parser": "babel-eslint"

## .prettierrc 생성

```
{

}
```

## .index.js 파일에 App.js 추가

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

ReactDOM.render(<App />, document.getElementById("root"));

```

## yarn dev로 시작

```
localhost:1234에서 시작되는것이 보이나요 ?!

빌드가 계속 되도 당황하지 말고 기다려주세요!
```
