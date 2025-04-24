# 환경

### 사용스택
TypeScript, ReactJS, Vite, React-router, Axios, React-query, React-Hook-Form, Zod, TailwindCSS

>추가 사용 스택: Zustand, Swiper, @mui/icons-material, Recharts, React-datepicker, React-perfect-scrollbar-z

### 실행방법

```bash
pnpm install
```

```bash
pnpm dev
```

### 트리구조

```bash

📦src
 ┣ 📂api
 ┃ ┣ 📂mock
 ┃ ┃ ┗ 📜graph-api-data.ts
 ┃ ┣ 📜axios.ts
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂buttons
 ┃ ┃ ┃ ┣ 📂anchor
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂icon-button
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂primary-button
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂tab-button
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂inputs
 ┃ ┃ ┃ ┣ 📂input-date-picker
 ┃ ┃ ┃ ┃ ┣ 📂input-date-range
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂input-date-single
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📂input-time-picker
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂input-number
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂input-radio
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂input-select
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂input-text
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂loading
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂table
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂dashboard
 ┃ ┃ ┣ 📂accordion
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂charts
 ┃ ┃ ┃ ┗ 📂bar-chart
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂count-card
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂tab-menu
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┣ 📂configs
 ┃ ┗ 📜dashboard.ts
 ┣ 📂hooks
 ┃ ┗ 📜use-data-query.ts
 ┣ 📂layouts
 ┃ ┣ 📂header-component
 ┃ ┃ ┣ 📂header-nav
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂header-title
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂header-util
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂main-layout
 ┃   ┗ 📜index.tsx
 ┣ 📂pages
 ┃ ┣ 📂data-integrity
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂operational-statistical
 ┃ ┃ ┣ 📂view-page
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂write-page
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂stores
 ┃ ┣ 📜use-data-store.ts
 ┃ ┗ 📜use-tab-store.ts
 ┣ 📂types
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📜button.ts
 ┃ ┃ ┃ ┣ 📜form.tsx
 ┃ ┃ ┃ ┣ 📜input-date-picker.ts
 ┃ ┃ ┃ ┣ 📜inputs.ts
 ┃ ┃ ┃ ┗ 📜select.ts
 ┃ ┃ ┗ 📂dashboard
 ┃ ┃ ┃ ┗ 📜dashboard.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜querys.ts
 ┃ ┣ 📂stores
 ┃ ┃ ┗ 📜store.ts
 ┃ ┗ 📜swiper.d.ts
 ┣ 📂utils
 ┃ ┣ 📂dashboard
 ┃ ┃ ┗ 📜convert-data-type.ts
 ┃ ┣ 📂schema
 ┃ ┃ ┗ 📜schema.ts
 ┃ ┗ 📜button-props.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┣ 📜query-client-boundary.tsx
 ┗ 📜router.tsx
 
```

# CSS
> tailwindcss 사용, 아래 추가 사항은 index.css에 작성  <br />
> Libray: date-picker, react-swiper scrollbar <br />
> Animate: loading-spinner, loading-text


## 입력부, 출력부 구현
> 샘플 데이터 기반으로 Zustand에서 상태 관리 <br />
> '출력부' 각 UI에 맞게 데이터 가공은 /utils/dashboard/convert-data-type.ts에 함수들 분리

### [리스트 데이터]
Mock 데이터는 src/api/mock 폴더의 graph-api-data.ts 경로의 blinkCharging 와 chargePoint 사용
```
const blinkCharging = [
    {
        regDate: '2025-05-01',
        station: {
            put: 100392,
            patch: 239483,
            delete: 12384,
            getNPost: 49283,
            failed: 0,
        },
        tariff: {
            put: 29384,
            patch: 384920,
            delete: 18274,
            getNPost: 18293,
            failed: 0,
        },
    },
]
const chargePoint = [
    {
        regDate: '2025-05-01',
        station: {
            put: 184567,
            patch: 139234,
            delete: 24485,
            getNPost: 132938,
            failed: 0,
        },
        tariff: {
            put: 93842,
            patch: 210394,
            delete: 158384,
            getNPost: 11284,
            failed: 0,
        },
    },
]
```

### [입력부 페이지]
1. Input Radio로 추가 될 데이터 유형 구분 'blinkCharging' | 'chargePoint'
2. Submit시 stores 데이터에 regDate 빠른 순으로 정렬하여 추가
3. Reset, Submit 구현.
4. Submit 시 스키마 체크 후 완료 될 시 '출력부' 페이지로 이동하여 갱신 된 데이터 노출

### [출력부 페이지]
1. 검색바 영역
    - components/common/inputs/input-date-picker 내부에 date-picker, date-range, time 등의 input 컴포넌트 커스텀 작업
    - 입력단 내에 Mui/Icons 컴포넌트를 이용하여 아이콘 삽입
    - react-query로 핸들링 (일부 개선필요 - 리스트 호출 + 로딩등의 상태)
    - 실제 구현X, params만 변경
2. 상단 카드
    - store의 값으로 /utils/dashboard/convert-data-type.ts 내부 함수 파라미터엥 사용하여 맞는 형태 반환
    - Swiper를 이용하여 6개 이상 출력 시 x축 스크롤 생성
    - 해당 regDate의 blinkPoint와 chargePoint 값 총 합산
    - 좌측부터 생성되며 swiper-wrapper 의 1/6 비율 값 유지
3. Accordion
    - 공통 컴포넌트화, boolean으로 제어
    - children을 사용하여 부모에서 컨텐츠를 props 하여 사용
    - max-height, rotate를 이용한 transition 구현
4. Bar Chart
    - store의 값으로 /utils/dashboard/convert-data-type.ts 내부 함수 파라미터엥 사용하여 맞는 형태 반환
5. Table
    - store의 값으로 /utils/dashboard/convert-data-type.ts 내부 함수 파라미터엥 사용하여 맞는 형태 반환
    - t-head, table colgroup 의 속성등은 상수 사용
    - t-body tr이 6개 초과 시 scrollbar 기능 사용 (UI 이슈로 head table, body table 두개로 나누어 관리)

### [공통 요소]
1. Form
    - 기존 register 방식에서 controller 방식을 채택 (타 라이브러리와 활용을 위해)
    - 공통 컴포넌트와 연동 되게 작업
2. Schema
    - /utils/schema/schema.ts 내부에 유형별 정의
3. Stores
    - Zustand를 이용하여 UI에 이용 되는 data init data, set data 관리
    - data 등록 시 regDate 기준으로 빠른 날짜부터 정렬
    - tab 의 현재 값 관리 (unmount 또는 새로고침 이전까지)
4. Component
    - /pages 외의 route 별 컴포넌트, /layouts, /common, /dashboard로 구성
5. Constants
    - 현재 /configs/dashboard.ts에 정의
6. tab
    - stores에서 상태 관리
    - button의 idx로 isActive 부분 설정