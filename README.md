# sungwonind-ecatalog-2025
성원아이엔디 전자카탈로그 2025

## basename 설정

- 디폴트 상태로 해쉬 라우터를 사용합니다. (작업의 불편함 해소를 위해)
- 만약 브라우저 라우터를 사용해야 하는 경우 basename 설정을 해주어야합니다.

### 브라우저 라우터 basename 설정

- 브라우저 라우터를 사용할 경우 아래 파일들의 경로 설정을 해줍니다.
- 실제 배포될 URL 상의 경로를 설정합니다.
- 브라우저 라우터용 빌드 명령어 : yarn browserbuild / npm run browserbuild

#### .htaccess

- RewriteBase /URL상의 배포경로/

#### .env

- REACT_APP_BASE_NAME='/URL상의 배포 경로/'

#### package.json

- "homepage": "/URL 상의 배포 경로",
