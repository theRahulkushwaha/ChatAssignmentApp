# 🧑‍💬 React Native Chat App - Corider Assignment Clone

A custom-built React Native Chat Application replicating the Corider Assignment UI.  
This project focuses on **custom UI**, **message pagination**, **bottom input actions**, and **trip header menu** — exactly as shown in the assignment's reference.

---

## 📦 Features

- Clean, modern chat UI with custom layout
- Chat bubbles styled by sender (`self` vs others)
- Trip header with:
  - Trip name
  - Route info
  - Menu (👥 Members, 📞 Share Number, 🚫 Report)
- Input bar:
  - Left: text input
  - Right: send button and options menu (Video/Image with green background)
- API-powered message loading with pagination
- Date grouping for chats

---

## 📸 Screenshots

### 🎯 Target UI (Provided Assignment Screenshot)

![image](https://github.com/user-attachments/assets/54064899-8a5f-438a-9fbc-8fc9a690c21e)


### ✅ Achieved UI (My Custom Implementation)

![image](https://github.com/user-attachments/assets/4456f8a0-5176-4249-a5ee-3ade8e30dd71)
![image](https://github.com/user-attachments/assets/bf15ad89-8a4d-4ba8-a2b7-b18a9e23cd84)
![image](https://github.com/user-attachments/assets/a702c915-8d16-4612-bc1e-ac9e94bc47dc)



---

## 🚀 Installation Guide

### 🧰 Prerequisites

- Node.js & npm
- React Native CLI (`npx react-native`)
- Android Studio or Xcode setup for emulator/device testing

### 📥 Steps

```bash
# Clone the repository
git clone https://github.com/your-username/chat-app-assignment.git
cd chat-app-assignment

# Install dependencies
npm install

# (iOS only) Install pods
cd ios && pod install && cd ..

# Start Metro
npm start

# Run on Android
npm run android

# Or on iOS
npm run ios
