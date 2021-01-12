# 이수업의 최종목표
 - 웹 애플리케이션 만들기
## 강의에서 배울 수 있는 것
 - JavaScript, Node.js runtime

- Node.js는 웹서버를 내장하고있다.

- cmd 창에서 node 파일이름 을 하고 실행중일때에는 웹페이지에서 접속이 가능하지만 컨트롤+c로 실행취소했을때에는 접속이 되지않음.

- 프로그래밍적으로 사용자에게 전송할 데이터를 전송하는것이 node js이다.

# JavaScript
- 자료형 종류 Number String Boolean Array Object ....

- syntax에는 자료형종류를 모아둘 것임

## Variable(변수)
- 변수를 생성할때에는 var을 붙여서 만드는 습관을 들여라 
  
  ex) var a = 1;

## URL
ex) http://opentutorials.org:3000/main?id=HTML&page=12
  
  - http == protocol [통신규칙]
 
  - opentutorials.org == host(domain) [주소]
 
  - main == path [컴퓨터에있는 어떤파일인지 나타냄]

  - 3000 == port [3000번포트에 접속된 주소에있는 웹서버 번호]
 
  - id=HTML&page=12 == query string [데이터 전달가능]

## CRUD
  - Create

  - Read

  - Update

 - Delete

## 제어문 (Flow control statements)
  - 조건문 conditional statements -> if,else

## Input
  - parameter : 입력되는 정보의 형식
  - Argument : 형식에 알맞게 실제로 입력한 값

## writeHead
  - wirtehead는 웹서버와 웹브라우저에서 확인을 위한 수단 (연결이 성공되었을땐 200, 실패했을땐 404)
  - https://sukth09.tistory.com/42 (참고)


## synchronous & asynchronous (동기 와 비동기)
  - sychronous (동기) -> 일을 동시에 하지않고 하나의 일만 하는것
  - asynchronous (비동기) -> 일을 동시에 하는 것 (효율적이지만 매우 복잡 -> node js의 특징)

## Package Manager
  - 소프트웨어를 부르는 것들 중 하나
  - 어떤 프로그램을 실행하는데에있어 필요한 부품들도 패키지 라고함
  - NPM : nodejs에서 가장 광범위하게 사용되는 패키지 매니저 (https://pm2.keymetrics.io/)


## form 태그 method 적을때 post
  - form태그로 서버에 데이터를 전송할때 그냥 보내면 보안상 위협이 있다. 그러므로 method를 post로 설정해야한다. (그렇다면 쿼리 스트링값이 가려져서 전송됨)

## Object(객체) vs Array(배열)
  - 객체 : 순서가 없는 수납공간
  - 배열 : 순서가 있는 수납공간

## refactoring
  - refactoring 이란 구동방식은 같지만 코드를 효율적으로 다시 바꾸는 것

## Module (모듈)
  - 배열 객체 함수 같은 정리정돈 도구 중 가장 큰 도구

##