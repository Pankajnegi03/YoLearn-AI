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

- Press `i` to launch the iOS simulator.
- Press `a` for an Android emulator.
- Scan the QR code with Expo Go for on-device testing.

## Build

### Android APK (local)

```bash
npx expo run:android --variant release
```

The signed APK/AAB will be generated inside `android/app/build/outputs/`.

### iOS (.ipa via EAS)

```bash
npx eas build --platform ios
```

Follow the CLI prompts to create an Expo Application Services build. Supply the resulting link as part of your delivery.

> 💡 Sign in with an Expo account before running `eas build`. For ad-hoc or simulator builds, append `--profile preview`.

## Testing Checklist

- [ ] Home screen renders glowing mic, welcome message, chips, and suggestion cards.
- [ ] Companion screen loads remote companions (observe loading and error states).
- [ ] Chat screen shows static conversation, action pills, and mic CTA.
- [ ] Library screen lists mock lessons with action buttons.
- [ ] Tools screen renders tabs and static tool cards.

## Troubleshooting

- Delete the Metro cache if hot reload behaves oddly:

  ```bash
  npx expo start -c
  ```

- For API failures (network offline), the Companion screen will fallback to an inline error message. Retry once connectivity is restored.

## License

Prototype project supplied for the YoLearn assignment; no external distribution intended.
