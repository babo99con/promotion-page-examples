FROM node:22-bookworm-slim

WORKDIR /app

# 의존성 설치
COPY package.json package-lock.json ./
RUN npm ci

# 소스 복사 및 빌드
COPY . .
RUN npm run build

# 서버 포트 안내
EXPOSE 3000

# 컨테이너 실행 시 웹 서버 시작
CMD ["npm", "start", "--", "--hostname", "0.0.0.0", "--port", "3000"]
