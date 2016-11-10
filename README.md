# Node Express Typescript boilerplate

코딩을 하다 보면 작업 환경과 도구가 굉장히 중요하단 것을 알게 된다.
필자는 경험이 일천하여 처음 Node를 사용하면서 익숙하지 않은 환경에 어리버리 헤매다 보면 
시간도 낭비가 되지만 무엇 보다 코딩에 흥미를 잃고 좌절하게 된다.

후학들이 그렇게 되는 일이 줄었으면 좋겠다는 바램에 약소하나마 이 거푸집을 만들어 두기로 한다.
Nodejs와 npm이 이미 설치되어 있다고 보고 진행한다
상세한 내용은 [텍스트를](https://basarat.gitbooks.io/typescript/content/docs/quick/nodejs.html) 참고 바란다.
2016.11.10

작업할 디렉토리를 생성한 다음 change directory
>$ mkdir node-express-boilerplate
>$ cd node-express-boilerplate

npm 관리를 위해 package.json 생성
>$ npm init -y

typescript 설치
>$ npm install typescript --save-dev

typescript definition 설치(코드에서 사용할 패키지로 우선 Node와 Express)
typescript 2.0 이상 버전에서는 typings를 사용하지 않고 scope를 사용한다 카더라.
참 편리하다.
>$ npm install @types/node --save-dev
>$ npm install @types/express --save-dev

typescript option을 설정하기 위해 tsconfig.json 설치
>$ node ./node_modules/.bin/tsc --init

현재 디렉토리는 다음과 같다.

>$ ls -al
>total 24
>drwxr-xr-x   7 cheon  staff   238 Nov 10 14:04 .
>drwxr-xr-x  24 cheon  staff   816 Nov 10 13:07 ..
>drwxr-xr-x   8 cheon  staff   272 Nov 10 14:00 .idea
>-rw-r--r--   1 cheon  staff  1261 Nov 10 14:00 README.md
>drwxr-xr-x   5 cheon  staff   170 Nov 10 14:03 node_modules
>-rw-r--r--   1 cheon  staff   668 Nov 10 14:03 package.json
>-rw-r--r--   1 cheon  staff   148 Nov 10 14:04 tsconfig.json

node와 express를 가지고 typescript로 코딩할 준비가 끝났다.

버전관리를 위해 git commit을 하기로 한다.
>$ git init
>$ git add .
>$ git cm -m "node, express, typescript 개발 환경 거푸집 완성"

 

