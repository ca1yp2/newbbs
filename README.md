# 📝 React 게시판 (BBS)

React로 제작한 간단한 게시판(Bulletin Board System) 웹 애플리케이션입니다. Bootstrap을 테스트 해보기 위해 개발된 페이지입니다.

---

## 🚀 주요 기능

- Bootstrap을 활용한 반응형 UI 구성
- data의 json파일을 읽어 게시글 출력

## 🛠 사용 기술 스택

### 프론트엔드

| 기술 | 설명 |
|------|------|
| **React** | 사용자 인터페이스 구현 |
| **React Router DOM** | 페이지 라우팅 |
| **Axios** | 비동기 HTTP 통신 |
| **Bootstrap 5 / React-Bootstrap** | 반응형 UI 프레임워크 |
| **React Icons** | 다양한 아이콘 사용 |
| **React Testing Library** | 컴포넌트 테스트 지원 |

---

## 📁 폴더 구조

```
newbbs/
├── src/
│    ├── components/       # 재사용 가능한 UI 컴포넌트 (버튼, 헤더, 페이징, 테이블, 검색 등)
│    ├── css/              # 스타일 시트 및 스타일 관련 JS 파일
│    ├── pages/            # 페이지 단위 컴포넌트 (메인, 글쓰기, 수정, 조회, 에러 페이지 등)
│    ├── App.js            # 최상위 앱 컴포넌트
│    ├── index.js          # 진입점 파일 (렌더링 및 초기화)
│    ├── Layout.jsx        # 공통 레이아웃 컴포넌트
│    ├── App.test.js       # 앱 테스트 코드
│    └── setupTest.js      # 테스트 환경 설정 파일
├── package.json           # 프로젝트 의존성 및 설정
├── package-lock.json      # 의존성 버전 잠금 파일
├── README.md              # 프로젝트 설명서
└── .gitignore             # Git 무시 파일 목록
```

---

## 📦 설치 및 실행

```bash
# 1. 프로젝트 클론
git clone https://github.com/ca1yp2/newbbs.git
cd newbbs

# 2. 패키지 설치
npm install ( npm i )

# 3. 개발 서버 실행
npm start
```

---

## ✅ 향후 개선 사항

- 게시글 상세 보기, 작성, 수정, 삭제 기능 추가
- 로그인, 회원가입 기능 추가
- 데이터를 json파일이 아닌 DB에서 불러오게 DB 연결
- 게시글 수 조회, 페이징 기능 추가
- 검색 기능 추가

---

## 📄 라이선스

MIT 라이선스 (MIT License)

저작권 (c) 2025 ca1yp2

본 프로젝트는 학습 및 개인 포트폴리오 용도로 제작되었습니다. 
본 소프트웨어 및 관련 문서 파일(이하 "소프트웨어")을 무상으로 획득한 모든 사람에게
소프트웨어를 제한 없이 사용, 복사, 수정, 병합, 출판, 배포, 서브라이선스 및 판매할 권리를
허가합니다.

단, 위 저작권 표시와 이 허가 표시를 소프트웨어의 모든 복사본 또는 중요한 부분에 포함시켜야 합니다.

본 소프트웨어는 상품성, 특정 목적 적합성 및 비침해에 대한 보증 없이 "있는 그대로" 제공됩니다.
저작권자 또는 저작권 보유자는 소프트웨어 사용 또는 기타 거래와 관련하여 발생하는
어떠한 청구, 손해 또는 기타 책임에 대해서도 책임을 지지 않습니다.

---

MIT License

Copyright (c) 2025 ca1yp2

This project was created for learning and personal portfolio purposes.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
