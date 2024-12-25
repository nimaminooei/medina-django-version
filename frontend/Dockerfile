# استفاده از تصویر پایه Node.js
FROM node:16-alpine

# تنظیم دایرکتوری کاری
WORKDIR /app

# کپی کردن package.json و package-lock.json
COPY package.json ./
COPY package-lock.json ./

RUN npm install


COPY . .

EXPOSE 3000
# اجرای اپلیکیشن
CMD ["npm", "start"]
