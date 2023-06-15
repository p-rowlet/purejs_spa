# 순수하게 JS로 만든 간단한 SPA웹

Single Page Application(SPA)은 react나 vue를 써야만 만들 수 있나요?
라는 질문에 대답해주기 위해서 만들어 본 간단한 물건. 
자바스크립트만 이용하여 간단한 Single Page Application을 만들어보았습니다.

## 구현한 것
- 간단한 about 페이지
- 간단한 list 페이지
- list를 불러오는 RESTAPI가 존재하는 node.js/express 서버 

- 최대한 보여주기 위해서 간단하게 만드려고 노력했습니다. 
보안 처리가 전혀 되어있지 않으므로, 배포 시 위험성을 장담할 수 없습니다.

- about에서 새로고침을 할 경우 사이트가 로딩되지 않습니다.
이 부분은 서버사이드 렌더링이 필요한 영역으로, 프론트엔드용 웹 서버를 따로 만들지 않았기 때문에 구현할 수 없었습니다.  

- shadow-dom을 활용한다면 더 깔끔한 결과물이 나왔을 것 같습니다.
나중에 기회가 되면 더 수정해보겠습니다.

## 환경변수 관련
mysql을 이용하여 데이터베이스를 구상하였습니다.
환경변수는 아래와 같이 구상하면 됩니다. (mysql 기본세팅 기준)
- DB_HOST=localhost
- DB_USER=root
- DB_DATABASE=list (list 스키마 만들 것)
- DB_PASSWORD= (mysql 비밀번호)