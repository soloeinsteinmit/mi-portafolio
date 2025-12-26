# Gallery Images

Place your gallery images in this folder.

## Gallery Features

✨ **Lightbox Viewer**: Click any image to view it in full screen
📱 **Keyboard Navigation**: Use ← → arrow keys to navigate between images
🖱️ **Click Navigation**: Use left/right buttons in the lightbox
🎨 **Masonry Layout**: Images auto-arrange beautifully regardless of size
⚡ **Lazy Loading**: Images load only when scrolled into view

## How to Add Images

1. **Compress your images** before adding them (use tools like TinyPNG, Squoosh, or ImageOptim)
   - Recommended: JPG format, quality 80-85%
   - Target size: Under 500KB per image

2. **Name your images** descriptively:
   - `event1.jpg`, `event2.jpg`, etc.
   - Or: `tech-expo-2025.jpg`, `indabax-ghana-2025.jpg`

3. **Add to Gallery component** (`components/home/gallery/Gallery.tsx`):
   ```typescript
   {
     src: "/gallery/your-image-name.jpg",
     alt: "Brief alt text for accessibility",
     caption: "What's happening in this photo - be descriptive!",
     year: "2025",
   }
   ```

## Image Guidelines

- **Aspect Ratio**: 4:3 works best (e.g., 1600x1200, 1200x900)
- **Resolution**: 1200-1600px wide is plenty
- **File Size**: Aim for under 300-500KB per image
- **Format**: JPG for photos, PNG for graphics/logos

## Placeholder Images

The gallery gracefully handles missing images with a placeholder, so you can add image entries now and replace the actual images later!

## Example Entry

```typescript
{
  src: "/gallery/speaking-at-conference.jpg",
  alt: "Solo Shun speaking at AI Conference 2025",
  caption: "Keynote presentation on 'Building Production ML Systems' at African AI Summit, Lagos",
  year: "2025",
}
```

The grid will automatically adjust as you add more images! 🎉

