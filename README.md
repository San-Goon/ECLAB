## 개발 환경 실행 방법
Node v20.11.0
```sh
npm install
npm run dev
```

## 사용된 기술
* TypeScript
* React v18
* Next.js v14 (App Router)
* CSS Module
* dayjs

## 폴더구조
```bash
    ├── public                 # 폰트, 이미지 등 
    ├── model                  # 타입
    ├── app                     
        ├── ec-report
           ├──_component        # 페이지 구현을 위한 컴포넌트
           ├──_lib              # fetch 함수    
        ├── counselor           
        ├── student             
    ├── README.md               
    └── ...
```

## 프로젝트 설명
next.js@14 (app router), typescript, CSS Module 를 이용하여 개발했습니다.
server component 를 최대한 사용해 SSR 을 구현했습니다.
middleware 를 사용해 /ec-report/student, /ec-report/counselor 를 제외한 주소로 접근시 /ec-report/student 로 접근하도록 구현하였습니다.
모바일과 PC UI 간의 break point 는 768px 입니다.
실제 학생과 관리자 페이지의 API 는 다를 수 있음을 감안하여 app 에서 api request 를 하도록 설계했습니다.
Pre-college -> Pre-College 변환을 임시로 하드코딩 변환으로 해뒀는데 논의를 통해 맞춰나가야 하는 부분입니다. (추가 예외사항 처리 등)
active 된 버튼을 클릭 시 console 에 메시지가 표시되도록 했습니다.
figma 에 제공된 화면처럼 Delevered Date 가 비어있는 경우에 response 에서 어떻게 넘겨줄지 몰라 예외처리 하지 못했습니다.




