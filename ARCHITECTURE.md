# MTBS-Pintar Architecture Overview

## Project Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                          App.tsx (Entry Point)                   │
│                    • Initializes SQLite Database                 │
│                    • Renders AppNavigator                        │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                    AppNavigator.tsx (Navigation)                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Stack.Navigator (Root Level)                             │   │
│  │  ├─ Welcome (WelcomeScreen) - Starting point            │   │
│  │  └─ MainTabs (Tab-based navigation)                     │   │
│  └──────────────────────────────────────────────────────────┘   │
│         │                                                         │
│         ▼                                                         │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Tab.Navigator (MainTabs)                                 │   │
│  │  ├─ Beranda    (🏠 Home)          - BerandaScreen       │   │
│  │  ├─ Catatan    (📝 Notes)         - CatatanScreen       │   │
│  │  ├─ Pengingat  (🔔 Reminders)    - PengingatScreen     │   │
│  │  └─ Profil     (👤 Profile)      - ProfilScreen        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  Overlay Screens (navigated from MainTabs):                      │
│  • CekKondisiScreen (Health Assessment)                          │
│  • TandaBahayaScreen (Warning Signs)                             │
│  • TindakanScreen (Action Recommendations)                       │
│  • TanyaJawabScreen (FAQ)                                        │
└─────────────────────────────────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
  ┌──────────────┐ ┌────────────┐ ┌──────────────┐
  │ Components   │ │ Database   │ │ Screens      │
  ├──────────────┤ ├────────────┤ ├──────────────┤
  │ CustomButton │ │ Queries:   │ │ 9 Screen     │
  │ CustomHeader │ │ • Get...() │ │ Components   │
  │ MenuCard     │ │ • Add...() │ │              │
  └──────────────┘ │ • Delete()│ │              │
                   │           │ │              │
                   │ Tables:   │ │              │
                   │ • questions
                   │ • check_   │ │              │
                   │   history  │ │              │
                   │ • reminders│ │              │
                   │ • children │ │              │
                   └────────────┘ └──────────────┘
```

## Data Flow Architecture

```
User Interaction (Tap Screen)
         │
         ▼
Component Event Handler
         │
         ▼
Call Database Function (db.ts)
         │
         ▼
Execute SQLite Query
         │
         ▼
Return Data to Component
         │
         ▼
Update Component State
         │
         ▼
Re-render UI
```

## File Organization

### Component Layer (src/components/)

```
Reusable UI Components
├── CustomButton.tsx      - Styled buttons with variants
├── CustomHeader.tsx      - Navigation headers
└── MenuCard.tsx         - Menu item cards
```

### Screen Layer (src/screens/)

```
User-facing Screens
├── WelcomeScreen.tsx      - Onboarding/splash
├── BerandaScreen.tsx      - Home menu
├── CekKondisiScreen.tsx   - Health assessment
├── TandaBahayaScreen.tsx  - Warning signs
├── TindakanScreen.tsx     - Action recommendations
├── TanyaJawabScreen.tsx   - FAQ
├── CatatanScreen.tsx      - Assessment history
├── PengingatScreen.tsx    - Reminders management
└── ProfilScreen.tsx       - User profile
```

### Navigation Layer (src/navigation/)

```
Navigation Configuration
└── AppNavigator.tsx - Centralized routing setup
    ├── Stack.Navigator (root)
    └── Tab.Navigator (main app)
```

### Database Layer (src/database/)

```
Data Persistence
└── db.ts - SQLite interface
    ├── Table Creation
    ├── Data Seeding
    ├── Query Functions
    └── Error Handling
```

### Utils Layer (src/utils/) - _Reserved for future_

```
Shared Utilities
└── (Future utility functions)
```

## Navigation State Machine

```
┌────────────┐
│  Welcome   │
└─────┬──────┘
      │ "Mulai" button pressed
      ▼
┌────────────────────────┐
│    MainTabs            │
├────────────────────────┤
│ ┌──────┬────┬──────┬──────┐
│ │ 🏠   │ 📝 │ 🔔   │ 👤   │
│ │ Home │Note│Alert │Prof  │
│ └──────┴────┴──────┴──────┘
└────────────────────────┘
      │ Tab pressed / Menu item tapped
      ▼
┌────────────────────────┐
│  Overlay Screens      │
│  • CekKondisi         │
│  • TandaBahaya        │
│  • Tindakan           │
│  • TanyaJawab         │
└────────────────────────┘
      │ Back button pressed
      ▼
┌────────────────────────┐
│    MainTabs (Back)    │
└────────────────────────┘
```

## Database Schema with Relationships

```
┌─────────────────────────┐
│      questions          │
├─────────────────────────┤
│ id (PK)                 │
│ question_text           │
│ category                │
│ answer_type             │
│ created_at              │
└─────────────────────────┘
          │
          │ 1:M
          ▼
┌─────────────────────────┐
│   check_history         │
├─────────────────────────┤
│ id (PK)                 │
│ date_checked            │
│ result_summary          │
│ details                 │
│ status                  │
│ created_at              │
└─────────────────────────┘

┌─────────────────────────┐
│     reminders           │
├─────────────────────────┤
│ id (PK)                 │
│ title                   │
│ description             │
│ reminder_date           │
│ reminder_time           │
│ is_completed            │
│ created_at              │
└─────────────────────────┘

┌─────────────────────────┐
│      children           │
├─────────────────────────┤
│ id (PK)                 │
│ name                    │
│ date_of_birth           │
│ gender                  │
│ blood_type              │
│ created_at              │
└─────────────────────────┘
```

## Component Prop Flow

```
AppNavigator
  │
  ├─► Stack.Navigator
  │    │
  │    ├─► WelcomeScreen (navigation prop)
  │    └─► MainTabs
  │         │
  │         ├─► Tab.Navigator
  │         │    │
  │         │    ├─► BerandaScreen (navigation prop)
  │         │    ├─► CatatanScreen (navigation prop)
  │         │    ├─► PengingatScreen (navigation prop)
  │         │    └─► ProfilScreen (navigation prop)
  │         │
  │         └─► Overlay Screens
  │              ├─► CekKondisiScreen (navigation prop)
  │              ├─► TandaBahayaScreen (navigation prop)
  │              ├─► TindakanScreen (navigation prop)
  │              └─► TanyaJawabScreen (navigation prop)
  │
  └─► Components (SharedProps)
       ├─► CustomButton
       ├─► CustomHeader
       └─► MenuCard
```

## Initialization Sequence

```
1. App.tsx Loads
   ├─ useEffect() called
   ├─ initDB() invoked
   │  ├─ SQLite.openDatabaseSync('mtbs_pintar.db')
   │  ├─ Create 4 tables (if not exist)
   │  ├─ Seed 6 initial questions
   │  └─ Log "✅ Database berhasil diinisialisasi"
   │
   └─ AppNavigator rendered
      ├─ NavigationContainer
      ├─ Stack.Navigator
      │  ├─ routeName="Welcome"
      │  └─ WelcomeScreen displays
      │
      └─ Ready for user interaction
```

## Deployment Architecture

```
Production Build
├─ App.tsx (Entry)
├─ src/
│  ├─ components/ (Compiled)
│  ├─ database/ (Compiled)
│  ├─ navigation/ (Compiled)
│  └─ screens/ (Compiled)
├─ node_modules/ (Dependencies)
└─ app.json (Expo Config)

Platforms Supported
├─ Android (apk/aab)
├─ iOS (ipa)
└─ Web (HTML/JS)
```

## State Management Strategy

```
Current (Local State)
├─ Screen component state via useState()
├─ Navigation state via React Navigation
└─ Database via SQLite

Future (Recommended)
├─ Global State (Redux/Zustand)
├─ Persistent Storage (Redux Persist)
└─ Background Tasks (Redux Saga)
```

---

**Generated**: May 2, 2026
**Architecture Version**: 1.0 (Manual React Navigation)
**Status**: Production Ready
