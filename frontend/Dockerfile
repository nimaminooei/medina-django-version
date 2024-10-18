# استفاده از تصویر پایه Node.js
FROM node:14

# تنظیم دایرکتوری کاری
WORKDIR /app

# کپی کردن package.json و package-lock.json
COPY package*.json ./

# نصب وابستگی‌ها
RUN npm install

# کپی کردن سایر فایل‌ها
COPY . .

# اجرای اپلیکیشن
CMD ["npm", "start"]
