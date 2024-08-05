# sesac-midterm-songsungwon
sesac midterm  - backend ( Node. js )
![img](https://github.com/user-attachments/assets/64767493-63ab-4b22-b516-e5b219d5a896)



1. config.json
   - 개발환경에 따른 변수를 달리 설정하는 것을 환경변수라 부르고, config.json / .env 모듈이 있는데 이번에는 config.json을 사용
   - 원래 시험에서는 배포된 서버의 내용을 담았지만, 현재는 development, test, production을 작성하여 현재 mysql의 주소를 설정하였다.
   - 추가로 mysql은 root말고 user를 통해서 sequelize orm을 사용하여 진행
  
2. 노드를 실행하기 위한 조건
   - npm init -y : package.json 파일 생성
   - npm install {express sequelize sequelize-cli mysql2} : 필요한 {} 모듈 설치
   - npx sequelize init : 기본적으로 sequelize orm에 필요한 config 파일 생성 - 위의 1번내용 보면 이해 (완료)
  
3. .gitignore
   - 현재 commit / push에서 git을 통해 관리되지 않도록 지정하는것
   - **node_modules를 통해 전체 루트에서 이제 **을 통해 node_modules를 찾아서 git을 통해 관리되지 않도록 파일 지정
  
4. api.http (not Postman)
   - 현재 포스트맨을 통해서가 아닌 REST Client 모듈을 우선 추가하고 실행가능
   - api.http라는 파일로 관리 되기에 git으로 관리 할 수 있음

5. Model, Controller, Router (MVC 모델)
   - model(_index) : 현재 index / Todo로 작성 -> index에서는 sequelize를 불러와서 todo 모델에 맞게 db.Todo / db.sequelize / db.Sequelize를 설정해서 module로 설정한다.
   - model(_Todo) : Todo의 속성값을 지정해서 그것을 통해서 이제 index에서 db.Todo 생성함
   - route(_todo) : express 모듈을 사용해서 router를 지정가능해진다. 또한 http(rest api) 사용을 통해 post, get, put, delete에 따른 url 사용을 route에서 진행한다ㅏ.
   - controller(_Ctodo) : controller에서 메서드를 만들어서 결국 app.js에서 불러와서 메서드 사용을 가능하게 한다ㅏ.

6. app.js
   - app.js에서는 express 모듈을 불러와서 route를 등록하며 route에 등록되어있는 url에 맞게 controller에 있는 로직들이 적용된다고 생각하면된다.
   - sequelize.sync를 사용해서 올바르게 연결되지 않으면 오류를 발생하도록 마지막 코드에 작성하였다.
  


______________________________________________________________________________________________________________________________________________________


sesac midterm - frontend 정리 (다음주 예정)

