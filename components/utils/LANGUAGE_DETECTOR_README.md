# Language Detector

Automatic language detection and translation suggestion for international visitors.

## How It Works

1. **Detects browser language** using `navigator.language`
2. **Shows a banner** if user's language isn't English
3. **Offers translation** via Google Translate
4. **Remembers choice** using localStorage

## Features

✅ Automatic detection based on browser settings
✅ Clean, dismissible banner
✅ One-click translation via Google Translate
✅ Remembers user's preference
✅ Fully responsive
✅ Zero configuration needed

## Currently Supported Languages

- 🇬🇧 English (default)
- 🇫🇷 French (Français)
- 🇪🇸 Spanish (Español)
- 🇩🇪 German (Deutsch)
- 🇵🇹 Portuguese (Português)

## Adding More Languages

Edit `components/utils/LanguageDetector.tsx`:

```typescript
const SUPPORTED_LANGUAGES = {
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  pt: "Português",
  zh: "中文",        // Add Chinese
  ja: "日本語",      // Add Japanese
  ar: "العربية",    // Add Arabic
  // Add more...
};
```

## Enabling/Disabling

The component is already enabled in `components/home/Home.tsx`.

**To disable:** Comment out in `Home.tsx`:
```typescript
{/* <LanguageDetector /> */}
```

**To enable:** Uncomment in `Home.tsx`:
```typescript
<LanguageDetector />
```

## How Users Experience It

1. Non-English visitor arrives
2. Banner appears: "It looks like you might prefer [Language]. Would you like to translate?"
3. User clicks "Translate" → Opens translated version in new tab
4. User clicks "Stay in English" → Banner disappears and won't show again

## Technical Details

- **Detection**: Uses browser's `navigator.language` API
- **Translation**: Google Translate (free, no API key needed)
- **Storage**: localStorage (banner dismissed status)
- **Position**: Fixed bottom center
- **Z-index**: 9998 (below lightbox)

## Customization

### Change Banner Position

Edit `.banner` in `languagedetector.module.scss`:
```scss
bottom: 2rem; // Change to top: 2rem for top position
```

### Change Styling

Colors and styling are in `languagedetector.module.scss`.
Uses your CSS variables automatically!

## Notes

- Google Translate is free and doesn't require API keys
- Translation opens in new tab (keeps original accessible)
- Banner auto-dismisses after user choice
- Works on all modern browsers
- No external dependencies needed

## Future Enhancements (Optional)

Want more advanced features?
- Integrate i18n library (react-i18next)
- Add manual language selector in navigation
- Store translations locally for faster loading
- Use Vercel's Edge Config for geolocation-based detection

For now, this simple solution works great for fast deployment! 🚀

