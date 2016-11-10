# Node Express Typescript boilerplate

##TL;DR (급한 분은 이것만 보세요)
> git clone
> cd node-express-boilerplate
> npm install
> enjoy coding...

## 들어가는 말
코딩을 하다 보면 작업 환경과 도구가 굉장히 중요하단 것을 알게 된다.
필자는 경험이 일천하여 처음 Node를 사용하면서 익숙하지 않은 환경에 어리버리 헤매다 보면 
시간도 낭비가 되지만 무엇 보다 코딩에 흥미를 잃고 좌절하게 된다.

후학들이 그렇게 되는 일이 줄었으면 좋겠다는 바램에 약소하나마 이 거푸집을 만들어 두기로 한다.
Nodejs와 npm이 이미 설치되어 있다고 보고 진행한다
상세한 내용은 [텍스트를](https://basarat.gitbooks.io/typescript/content/docs/quick/nodejs.html) 참고 바란다.
2016.11.10

## 1. 환경 설정
작업할 디렉토리를 생성한 다음 change directory
```
$ mkdir node-express-boilerplate
$ cd node-express-boilerplate
```
npm 관리를 위해 package.json 생성
```
$ npm init -y
```
typescript 설치
global 설치가 아니다.
compile시 local tsc compiler를 구동해야 compile context가 맞는다.
```
$ npm install typescript --save-dev
```
typescript definition 설치(코드에서 사용할 패키지로 우선 Node와 Express)
typescript 2.0 이상 버전에서는 typings를 사용하지 않고 scope를 사용한다 카더라.
참 편리하다.
```
$ npm install @types/node --save-dev
$ npm install @types/express --save-dev
```
typescript option을 설정하기 위해 tsconfig.json 설치
```
$ node ./node_modules/.bin/tsc --init
```

현재 디렉토리는 다음과 같다.

```
$ ls -al
total 24
drwxr-xr-x   7 cheon  staff   238 Nov 10 14:04 .
drwxr-xr-x  24 cheon  staff   816 Nov 10 13:07 ..
drwxr-xr-x   8 cheon  staff   272 Nov 10 14:00 .idea
-rw-r--r--   1 cheon  staff  1261 Nov 10 14:00 README.md
drwxr-xr-x   5 cheon  staff   170 Nov 10 14:03 node_modules
-rw-r--r--   1 cheon  staff   668 Nov 10 14:03 package.json
-rw-r--r--   1 cheon  staff   148 Nov 10 14:04 tsconfig.json
```

node와 express를 가지고 typescript로 코딩할 준비가 끝났다.

버전관리를 위해 git commit을 하기로 한다.
```
$ git init
$ git add .
$ git cm -m "node, express, typescript 개발 환경 거푸집 완성"
```
## 2. 작동 확인 테스트
```
$ vi index.ts
 _refer file content_
```
compile한 다음 실행해 보자
```
$ ./node_modules/.bin/tsc
$ node index
 Example app listening on port 3000!
```
성공이다.

## 3. 자동화
이와 같이 코딩하고 컴파일하고 실행시켜서 확인하는 것은 매우 번거롭다.
자동화 해야 한다.
```
$ npm install ts-node --save-dev
$ npm install nodemon --save-dev
```

package.json의 scripts항이 다음과 같이 추가 한다.
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "npm run build:live",
  "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./index.ts"
},
```

이제 npm start 하면 코드가 변경될 때 마다 자동으로 컴파일한 다음 실행하게 된다.
```
$ npm start
```

됐다. 커밋하자
```
$ git add .
$ git cm -m "nodemon 추가하고 test app ok"
```

## 4. Setup TDD with Jasmine

Jasmine typescript definition 설치
```
$ npm install @types/jasmine --save-dev
```
Jasmine-ts 설치
```
$ npm install jasmine-ts --save-dev
$ npm install jasmine-spec-reporter --save-dev
$ ./node_modules/.bin/jasmine-ts init
```
spec/support/jasmine.json 생성
```
{
  "reporters": [
    {
      "name": "jasmine-spec-reporter",
      "options": {
        "displayStacktrace": "all"
      }
    }
  ]
}
```

package.json 수정
```
{
  "scripts": {
    "test": "jasmine-ts 'path/to/specs/**/*.spec.ts'"
  }
}
```

학인해 보자
```
$ npm test
1 spec, 0 failures
Finished in 0.012 seconds

Executed 1 of 1 spec SUCCESS in 0.012 sec.
```



