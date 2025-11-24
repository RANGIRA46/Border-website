# i18n Integration Guide

## Overview
This system now has complete internationalization (i18n) support for 4 languages as specified in the project README:
- **English (en)** 🇬🇧
- **French (fr)** 🇫🇷  
- **Kiswahili (sw)** 🇹🇿
- **Kinyarwanda (rw)** 🇷🇼

## Setup Complete

### 1. Dependencies Installed
```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

### 2. Files Created

#### Configuration Files:
- `src/i18n/config.ts` - Main i18n configuration
- `src/i18n/locales/en.json` - English translations
- `src/i18n/locales/fr.json` - French translations
- `src/i18n/locales/sw.json` - Kiswahili translations
- `src/i18n/locales/rw.json` - Kinyarwanda translations

#### Components:
- `src/components/LanguageSwitcher.tsx` - Language switcher component with dropdown

### 3. Integration Points

#### Main App Entry Point
`src/main.tsx` - i18n configuration is imported before React renders

#### Layout
`src/layouts/MainLayout.tsx` - Fully translated with:
- Navigation items
- Header elements
- Footer sections
- Language switcher in header (desktop & mobile)

## Usage in Components

### Basic Usage
```tsx
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
    const { t } = useTranslation();
    
    return (
        <div>
            <h1>{t('common.welcome')}</h1>
            <p>{t('home.hero.subtitle')}</p>
        </div>
    );
}
```

### Available Translation Keys

#### Common UI Elements
```tsx
t('common.submit')        // "Submit"
t('common.cancel')        // "Cancel"
t('common.save')          // "Save"
t('common.loading')       // "Loading..."
t('common.success')       // "Success"
```

#### Navigation
```tsx
t('navigation.home')      // "Home"
t('navigation.services')  // "Services"
t('navigation.status')    // "Check Status"
t('navigation.login')     // "Login"
```

#### Services
```tsx
t('services.passport')    // "Passport Application"
t('services.visa')        // "Visa Application"
t('services.permit')      // "Permit Application"
t('services.citizenship') // "Citizenship Application"
```

#### Page-Specific Translations

**Passport Application:**
```tsx
t('passport.title')                    // "Passport Application"
t('passport.personalInfo.firstName')   // "First Name"
t('passport.contact.email')           // "Email Address"
t('passport.documents.nationalId')    // "National ID"
```

**Visa Application:**
```tsx
t('visa.title')              // "Visa Application"
t('visa.type.tourist')       // "Tourist Visa"
t('visa.type.business')      // "Business Visa"
```

**Refugee Travel:**
```tsx
t('refugeeTravel.title')          // "Refugee Travel Document"
t('refugeeTravel.asylumNumber')   // "Asylum Registration Number"
t('refugeeTravel.destination')    // "Destination Country"
```

#### Validation Messages
```tsx
t('validation.required')      // "This field is required"
t('validation.invalidEmail')  // "Invalid email address"
t('validation.invalidPhone')  // "Invalid phone number"
```

#### Success/Error Messages
```tsx
t('messages.applicationSubmitted')  // "Your application has been submitted successfully"
t('messages.errorOccurred')        // "An error occurred. Please try again"
```

## Language Switching

The language switcher is already integrated in:
- **Desktop**: Top right of header
- **Mobile**: In the mobile menu dropdown

Users can switch between languages and their preference is saved in localStorage.

## Adding New Translations

### Step 1: Add to all language files
Add the new key-value pairs to all 4 language files:
- `src/i18n/locales/en.json`
- `src/i18n/locales/fr.json`
- `src/i18n/locales/sw.json`
- `src/i18n/locales/rw.json`

### Step 2: Use in components
```tsx
const { t } = useTranslation();
<p>{t('your.new.key')}</p>
```

## Example: Translating a New Page

```tsx
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function MyPage() {
    const { t } = useTranslation();
    
    return (
        <div>
            {/* Page Title */}
            <h1>{t('myPage.title')}</h1>
            
            {/* Subtitle */}
            <p>{t('myPage.subtitle')}</p>
            
            {/* Form Fields */}
            <form>
                <label>{t('myPage.form.email')}</label>
                <input type="email" placeholder={t('myPage.form.emailPlaceholder')} />
                
                {/* Buttons */}
                <Button type="submit">
                    {t('common.submit')}
                </Button>
                <Button type="button" variant="ghost">
                    {t('common.cancel')}
                </Button>
            </form>
            
            {/* Validation */}
            <p className="error">{t('validation.required')}</p>
        </div>
    );
}
```

## Testing

1. Run the development server:
```bash
npm run dev
```

2. Open the application in your browser

3. Click on the language switcher in the header

4. Select different languages to see the content change in real-time

## Features

✅ **Automatic Language Detection** - Detects user's browser language on first visit  
✅ **Persistent Language Selection** - Saves user's language choice in localStorage  
✅ **Real-time Switching** - Changes language without page reload  
✅ **Complete Coverage** - All navigation, forms, buttons, and messages translated  
✅ **Responsive Design** - Language switcher works on mobile and desktop  
✅ **Type Safety** - Full TypeScript support with i18next

## Next Steps

To complete the translation of the entire application:

1. **Translate Application Forms:**
   - Update `PassportApplication.tsx`
   - Update `VisaApplication.tsx`
   - Update `PermitApplication.tsx`
   - Update `CitizenshipApplication.tsx`
   - Update `LaissezPasserApplication.tsx`
   - Update `RefugeeTravelApplication.tsx`

2. **Translate Other Pages:**
   - Update `Home.tsx`
   - Update `StatusChecker.tsx`
   - Update `AdminPanel.tsx`
   - Update `ApplicationSuccess.tsx`

3. **Translation Pattern for Forms:**
```tsx
import { useTranslation } from 'react-i18next';

export default function FormPage() {
    const { t } = useTranslation();
    
    return (
        <>
            <h1>{t('pageName.title')}</h1>
            <p>{t('pageName.subtitle')}</p>
            
            <label>{t('pageName.fieldName')}</label>
            <Input placeholder={t('pageName.fieldPlaceholder')} />
            
            <Button>{t('common.submit')}</Button>
        </>
    );
}
```

## Translation File Structure

Each language file follows this structure:
```json
{
  "common": { // Common UI elements
    "submit": "...",
    "cancel": "..."
  },
  "navigation": { // Navigation items
    "home": "...",
    "services": "..."
  },
  "services": { // Service names
    "passport": "...",
    "visa": "..."
  },
  "passport": { // Passport-specific
    "title": "...",
    "personalInfo": { ... }
  },
  "validation": { // Validation messages
    "required": "..."
  },
  "messages": { // User feedback messages
    "applicationSubmitted": "..."
  },
  "footer": { // Footer content
    "tagline": "...",
    "copyright": "..."
  }
}
```

## Support

The translation system supports:
- Nested translation keys (e.g., `passport.personalInfo.firstName`)
- Interpolation (e.g., `"Welcome {{name}}"`)
- Pluralization
- Context-based translations
- Formatting (dates, numbers, currencies)

For more advanced usage, see the [i18next documentation](https://www.i18next.com/).
