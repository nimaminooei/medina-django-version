# استفاده از تصویر پایه Node.js
FROM node:22-alpine

# تنظیم دایرکتوری کاری
WORKDIR /app

# کپی کردن package.json و package-lock.json
COPY package*.json ./

RUN npm cache clean --force && npm install

RUN npm install --prefer-offline --no-audit --progress=false


COPY . .

EXPOSE 3000
# اجرای اپلیکیشن
CMD ["npm", "start"]
