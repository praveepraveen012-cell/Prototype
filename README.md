# Shlloka Yatra 2027 — Alternative Prototype (Prototype 2)
## Luxury Himalayan Editorial Concept

A premium, bespoke web prototype crafted for the **Kailash Mansarovar Parikrama Yatra 2027**. Designed as an alternative agency pitch that completely diverges from the corporate navy-and-blue identity of Prototype 1, delivering an immersive luxury travel editorial experience akin to high-end expedition journals and boutique Himalayan publications (*Aman, Condé Nast Traveler, Singita*).

---

### Key Visual & Architectural Highlights

1. **Aman & Editorial Aesthetic**
   - **Deep Forest Green** (`#173D32`) & **Dark Evergreen** (`#102A23`) establishing sacred Himalayan depth.
   - **Warm Ivory** (`#F7F3E9`) backgrounds for comfortable, editorial reading.
   - **Antique Gold** (`#B99A5B`) accents, subtle hairlines, and shimmering badges.
   - **Muted Sage** (`#DCE4D8`) & **Stone Gray** (`#77766D`) for secondary text and cards.
   - Typography: **Cormorant Garamond** and **Cinzel** for headings; **Plus Jakarta Sans** for body.

2. **Cinematic Hero Video Banner**
   - High-definition video banner (`kailash-cinematic.mp4`) with subtle vignette overlays that preserve the mountain peaks.
   - Floating sound toggle, playback controls, and poster fallback (`hero-poster.jpg`).
   - Editorial serif title: *"A Journey Beyond the Ordinary"*.
   - Floating high-altitude metric indicators and vertical *"SCROLL TO DISCOVER"* guide.

3. **Brochure-Verified Factual Accuracy**
   - **8 Approved 2027 Departures**: May Batch (15 days), June I–III (16 days), July I–II (16 days), August I–II (16 days).
   - **4 Auspicious Full Moon Batches**: Vaishakh Purnima, Saga Dawa, Guru Purnima, and Shravana Purnima.
   - **3 Travel Options**:
     - *Option 1*: Classic Overland by Bus Both Ways (₹3,50,000 + 5% GST).
     - *Option 2*: Fly Kathmandu to Lhasa, Overland to Kailash (₹4,37,000 + 5% GST / $600 USD supplement).
     - *Option 3*: Fly Lhasa & Fly Ali/Pulan (₹4,94,000 + 5% GST / $1,200 USD supplement).
   - **Cancellation Terms**: ₹25,000 non-refundable deposit; 75+ days = 25% deduction (75% refund); 60–74 days = 50% deduction (50% refund); <30 days = non-refundable.

4. **Multi-Step Luxury Booking Engine (`/book`)**
   - Step 1: Select 2027 Departure Date.
   - Step 2: Select Travel Route & Passport Category (Indian vs Foreign / NRI).
   - Step 3: Primary Contact & Individual Traveller Particulars (with dietary options: Pure Veg & Jain).
   - Step 4: Transparent Financial Breakdown with Deposit Schedule.
   - Step 5: Gateway Simulator (clearly labeled *"Prototype Demonstration Mode"*).
   - Step 6: Confirmation Dossier with Reference Code and Print/Summary options.

5. **The Kailash Chronicle (`/blog` & `/blog/:slug`)**
   - Rich editorial journal featuring scholarly essays on sacred geography, 5,650m acclimatisation science, the dual lakes of Manasarovar and Rakshastal, high-altitude packing masterclasses, and lunar alignments.

6. **Dedicated Campaign Landing Page (`/kailash-mansarovar-yatra-2027`)**
   - High-conversion layout with quick batch selector, lead capture form, trust metrics, and transparent pricing.

---

### Project Structure

```
prototype-2/
├── public/
│   ├── favicon.svg
│   ├── images/              # Brochure extracted photography
│   └── videos/
│       └── kailash-cinematic.mp4  # Uploaded cinematic banner video
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Transparent-to-solid editorial nav
│   │   ├── Footer.jsx            # Dark evergreen footer with "Powered by Grexotix"
│   │   ├── VideoBanner.jsx       # Cinematic video hero with controls
│   │   ├── DepartureSelector.jsx # 2027 calendar & batch filters
│   │   ├── PackageComparison.jsx # 3-tier editorial route comparison
│   │   ├── ItineraryTimeline.jsx # Vertical timeline with route switcher
│   │   ├── EditorialCollage.jsx  # Asymmetrical photo gallery
│   │   ├── PreparationTabs.jsx   # Inclusions, fitness, gear & permits
│   │   ├── FaqAccordion.jsx      # Categorized luxury accordions
│   │   └── EnquiryModal.jsx      # Bespoke concierge modal
│   ├── data/
│   │   ├── yatraData.js          # Authoritative brochure factual dataset
│   │   └── blogData.js           # The Kailash Chronicle editorial essays
│   ├── pages/
│   │   ├── HomePage.jsx          # 11-section editorial flagship experience
│   │   ├── CampaignLandingPage.jsx # Conversion landing page
│   │   ├── TheJourneyPage.jsx    # Sacred topography & stations
│   │   ├── PackagesPage.jsx      # Detailed package dossier & comparison
│   │   ├── DeparturesPage.jsx    # 2027 departures & climate guide
│   │   ├── ItineraryPage.jsx     # Detailed day-by-day explorer
│   │   ├── BlogListPage.jsx      # The Kailash Chronicle list
│   │   ├── BlogPostPage.jsx      # Full essay reader with quotes & author
│   │   ├── AboutPage.jsx         # Shlloka Yatra heritage & commitments
│   │   ├── ContactPage.jsx       # Command hubs & inquiry form
│   │   └── BookingFlowPage.jsx   # 6-step booking flow
│   ├── App.jsx
│   ├── index.css                 # Custom palette & luxury micro-animations
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

### How to Run Locally

```bash
# Navigate into the prototype directory
cd prototype-2

# Install dependencies (if not already installed)
npm install

# Start local development server (runs on port 5174)
npm run dev

# Build for production
npm run build
```

---

### Independent Deployment to GitHub

To deploy this prototype to a separate GitHub repository:

```bash
cd prototype-2
git init
git add .
git commit -m "Initial commit: Shlloka Yatra 2027 Prototype 2 (Luxury Himalayan Editorial)"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

