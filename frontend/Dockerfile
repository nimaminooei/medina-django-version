# استفاده از تصویر پایه Node.js
FROM node:20

# تنظیم دایرکتوری کاری
WORKDIR /app

# کپی کردن package.json و package-lock.json
COPY package*.json ./

RUN npm cache clean --force && npm install

RUN npm install --prefer-offline --no-audit --progress=false

# کپی کردن سایر فایل‌ها
COPY . .

EXPOSE 3000
# اجرای اپلیکیشن
CMD ["npm", "start"]
