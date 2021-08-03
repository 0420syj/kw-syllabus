#
## :mortar_board: 광운대 강의계획서 검색기

> https://0420syj.github.io/kw-syllabus/  
> 광운대학교 학부 강의 계획서를 검색 및 조회할 수 있는 서비스입니다.  
> 강의계획서를 조회하려면 로그인이 필요합니다.  
>> [stupid-kw](https://github.com/soonoo/stupid-kw "해당 repo로 이동")에서 기능을 추가하여 제작하였습니다.  
>> 오픈소스 사용을 허가해주신 원작자분께 감사드립니다. :relieved:  
#
### :page_facing_up: 강의계획서 데이터 현황

- 2010년 1학기부터 2021년 2학기까지
- 정규학기(계절학기 제외)만 조회가능
#
### :computer: 로컬에서 실행하기

이 프로젝트는 Node.js와 Yarn을 사용합니다.  
NPM 대신 Yarn 설치를 권장합니다. 

#### 1. Node.js 설치
아래 홈페이지에서 Node.js를 설치합니다.  
https://nodejs.org/en/download 

#### 2. Yarn 설치
아래 홈페이지에서 Yarn을 설치합니다.  
https://yarnpkg.com/en/docs/install 

#### 3. 강의계획서 검색기를 클론합니다.
```
$ git clone https://github.com/0420syj/kw-syllabus
```

#### 4. 프로젝트 실행에 필요한 패키지를 설치합니다.
```
$ cd kw-syllabus
$ yarn install
```

#### 5. 프로젝트를 실행합니다.
```
$ yarn start
```

#### 6. 브라우저 실행 후 localhost:3000으로 접속합니다.
