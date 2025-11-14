# YoLearn — Mobile Learning Companion

YoLearn is a React Native (Expo) prototype that recreates the dark teal Figma concept shared in the assignment.  
It ships five fully navigable screens with a shared design system, glowing microphone interactions, and a dynamic companion list sourced from a live API.

## Project Structure

```
src/
  api/               // axios clients & data mappers
  components/        // reusable UI primitives (chips, cards, mic, etc.)
  navigation/        // stack + tab navigation wiring
  screens/           // Home, Companion, Chat, Library, Tools
  theme/             // colors, spacing, typography tokens
App.tsx              // entry point
```

## Design Highlights

- Gradient-backed layout with reusable `AppBackground`.
- Animated, glowing microphone CTA via `MicButton`.
- Component-driven layout (chips, pills, cards) with `StyleSheet.create` for every style (no inline styles).
- Axios-powered companion feed with loading/error states (`https://dummyjson.com/users`).
- Custom themed bottom tabs (`YoLearn`, `Tools`) feeding into stack-based flows.

## Prerequisites

- Node.js 18+
- npm 8+ (bundled with Node)
- Expo CLI (`npm install --global expo` optional but recommended)
- Xcode (for iOS simulator) and/or Android Studio (for Android emulator)

## Setup

Install dependencies once:

```bash
cd /Users/vs/yoLearn-assignment
npm install
```

## Run (Development)

Start Metro bundler and choose your platform:

```bash
npx expo start
```

Then:

- Press `a` for an Android emulator.
- Scan the QR code with Expo Go for on-device testing.

## Build

### Android APK (local)

```bash
npx expo run:android --variant release
```

The signed APK/AAB will be generated inside `android/app/build/outputs/`.

