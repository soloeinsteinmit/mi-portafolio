# Blog Links to Update

## Current Status

The portfolio now supports blog links for publications! Here's what needs to be updated when you have the actual URLs:

---

## Publications with Blog Links

### 1. Technical Report (NEW)
**File:** `components/home/publications/Publications.tsx`
**Line:** ~21
**Current:** `link: "#"` and `technicalReport: "#"`
**Update to:** Actual technical report URL when available

---

### 2. Antigen Discovery Paper
**Current:** `link: "#"`
**Suggested blog:** Check if MinoHealth has a blog post about the antigen discovery work
**Update to:** Blog URL if available

---

### 3. Antibiotic Discovery Paper
**Current:** `blogLink: "https://www.minohealth.ai/blog/moremi-bio-agent-tackles-amr-ai-driven-discovery-of-broad-spectrum-antibiotics-against-enterobacteriaceae"`
**Status:** ✅ Already added (you did this!)

---

### 4. Biosecurity Paper
**Current:** No blog link
**Suggested:** Check if there's a blog post about the biosecurity assessment
**Update to:** Blog URL if available

---

### 5. Malaria Antibody Paper
**Current:** No blog link
**Suggested:** Check if there's a blog post about the malaria antibody work
**Update to:** Blog URL if available

---

## How to Update

When you have a blog link, simply add it to the publication object:

```typescript
{
  title: "Your Paper Title",
  // ... other fields ...
  link: "https://paper-url.com",
  blogLink: "https://blog-url.com",  // Add this line
  // ... rest of fields ...
}
```

---

## Icon Legend for Users

When viewing your portfolio, users will see:
- 📄 **Paper Icon** (HiOutlineDocumentText) - Links to the research paper
- 📖 **Blog Icon** (AiOutlineRead) - Links to the blog post
- 🔬 **Report Icon** (Purple document) - Links to technical reports

All icons have hover tooltips explaining what they link to!

---

## Suggested Blog Posts to Request/Write

If MinoHealth doesn't have blog posts for these papers yet, you could suggest:

1. **"Breaking Down the Antigen Discovery Breakthrough"**
   - Explain the blind validation approach
   - Why it matters for vaccine development

2. **"AI for Biosecurity: What We Learned"**
   - Discuss the dual-use dilemma
   - Importance of responsible AI

3. **"From Lab to Algorithm: Designing Malaria Antibodies with AI"**
   - The antibody design process
   - Impact on malaria research

These blog posts would make your work more accessible and demonstrate science communication skills!

---

## Notes

- Blog links are optional—papers without them will just show the paper icon
- The technical report link can be updated when you're ready to share it
- Consider writing a personal blog post about the infrastructure architecture if you want to share more technical details publicly

---

Good luck, Solo! 🎯

