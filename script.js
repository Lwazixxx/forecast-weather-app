/**
 * FORECAST WEATHER APP - INTERACTIVE CLIENT ENGINE
 * Pure Vanilla JavaScript
 */

// 1. Weather State Database (Comprehensive real-world & regional values)
const CITIES_DATABASE = {
  johannesburg: {
    name: "Johannesburg, ZA",
    temp: 21,
    feelsLike: 21,
    condition: "Sunny",
    rainChance: 0,
    wind: "11.2 Km/h",
    uvIndex: 3,
    hourly: [
      { time: "6:00 AM", temp: 16, cond: "clouds" },
      { time: "9:00 AM", temp: 19, cond: "cloud-sun" },
      { time: "12:00 PM", temp: 21, cond: "sun" },
      { time: "3:00 PM", temp: 22, cond: "sun" },
      { time: "6:00 PM", temp: 20, cond: "sun" },
      { time: "9:00 PM", temp: 18, cond: "cloud-sun" }
    ],
    sevenDay: [
      { day: "Today", cond: "Sunny", tempMax: 21, tempMin: 14 },
      { day: "Tue", cond: "Sunny", tempMax: 23, tempMin: 15 },
      { day: "Wed", cond: "Sunny", tempMax: 22, tempMin: 13 },
      { day: "Thu", cond: "Cloudy", tempMax: 19, tempMin: 12 },
      { day: "Fri", cond: "Cloudy", tempMax: 18, tempMin: 11 },
      { day: "Sat", cond: "Rainy", tempMax: 20, tempMin: 12 },
      { day: "Sun", cond: "Storm", tempMax: 17, tempMin: 10 }
    ],
    advice: {
      wear: "Wear a light jacket, its a bit cool outside",
      safety: "Stay hydrated, use sunscreen when going outdoors",
      activity: "Great weather of a walk or outdoor activities!",
      outfitDesc: "A knit zip-up cardigan, comfortable blue denim trousers, and canvas sneakers provide protection from the afternoon breezes.",
      shirtColor: "#0D9488", // teal
      legColor: "#334155", // slate
      hasCap: false,
      uvMeterLabel: "Low (3)",
      uvPercent: 30,
      hydrationLabel: "Moderate",
      hydrationPercent: 50,
      thermalLabel: "Neutral Comfort",
      thermalPercent: 45,
      checklist: [
        { text: "Outdoor Jogging in morning hours (Cool temper)", done: true },
        { text: "Apply SPF 15+ sunscreen on neck and arms", done: true },
        { text: "Bring hydration bottle 1.25L for trail safety", done: false }
      ]
    },
    artType: "night-rain" // Displays crescent moon and clouds
  },
  madrid: {
    name: "Madrid, ES",
    temp: 31,
    feelsLike: 30,
    condition: "Sunny",
    rainChance: 0,
    wind: "0.2 Km/h",
    uvIndex: 3,
    hourly: [
      { time: "6:00 AM", temp: 25, cond: "clouds" },
      { time: "9:00 AM", temp: 28, cond: "cloud-sun" },
      { time: "12:00 PM", temp: 33, cond: "sun" },
      { time: "3:00 PM", temp: 34, cond: "sun" },
      { time: "6:00 PM", temp: 32, cond: "sun" },
      { time: "9:00 PM", temp: 30, cond: "cloud-sun" }
    ],
    sevenDay: [
      { day: "Today", cond: "Sunny", tempMax: 36, tempMin: 22 },
      { day: "Tue", cond: "Sunny", tempMax: 37, tempMin: 21 },
      { day: "Wed", cond: "Sunny", tempMax: 37, tempMin: 21 },
      { day: "Thu", cond: "Cloudy", tempMax: 37, tempMin: 21 },
      { day: "Fri", cond: "Cloudy", tempMax: 37, tempMin: 21 },
      { day: "Sat", cond: "Rainy", tempMax: 37, tempMin: 21 },
      { day: "Sun", cond: "Storm", tempMax: 37, tempMin: 21 }
    ],
    advice: {
      wear: "Wear short sleeves, sunglasses and loose clothes",
      safety: "Apply high factor sunscreen, carry a chilled water bottle",
      activity: "Avoid direct sun at noon, enjoy some indoor locations!",
      outfitDesc: "A light linen t-shirt, beige shorts, lightweight sandals, and protective polarized sunshades keep you airy and dry.",
      shirtColor: "#EAB308", // bright yellow
      legColor: "#D1FAE5", // beige-ish light
      hasCap: true,
      uvMeterLabel: "High (8)",
      uvPercent: 80,
      hydrationLabel: "Severe Loss Risk",
      hydrationPercent: 85,
      thermalLabel: "Extreme Heat",
      thermalPercent: 78,
      checklist: [
        { text: "Pack a wide-brimmed sun hat or baseball cap", done: true },
        { text: "Drink at least 2.5L water throughout daylight", done: false },
        { text: "Take rest stops in air-conditioned areas", done: true }
      ]
    },
    artType: "sun-cloud"
  },
  proteaglen: {
    name: "Protea Glen, ZA",
    temp: 27,
    feelsLike: 27,
    condition: "Sunny",
    rainChance: 5,
    wind: "4.5 Km/h",
    uvIndex: 5,
    hourly: [
      { time: "6:00 AM", temp: 18, cond: "sun" },
      { time: "9:00 AM", temp: 22, cond: "sun" },
      { time: "12:00 PM", temp: 27, cond: "sun" },
      { time: "3:00 PM", temp: 28, cond: "sun" },
      { time: "6:00 PM", temp: 24, cond: "sun" },
      { time: "9:00 PM", temp: 20, cond: "sun" }
    ],
    sevenDay: [
      { day: "Today", cond: "Sunny", tempMax: 27, tempMin: 16 },
      { day: "Tue", cond: "Sunny", tempMax: 28, tempMin: 17 },
      { day: "Wed", cond: "Cloudy", tempMax: 25, tempMin: 14 },
      { day: "Thu", cond: "Sunny", tempMax: 29, tempMin: 15 },
      { day: "Fri", cond: "Sunny", tempMax: 30, tempMin: 18 },
      { day: "Sat", cond: "Sunny", tempMax: 29, tempMin: 17 },
      { day: "Sun", cond: "Rainy", tempMax: 23, tempMin: 13 }
    ],
    advice: {
      wear: "Comfortable activewear, dry-fit tees",
      safety: "Apply sunscreen factor 30+, wear light caps",
      activity: "Excellent for walking, cycling, or outdoor drills!",
      outfitDesc: "A dry-fit lightweight jersey, matching charcoal running shorts, and protective athletic caps.",
      shirtColor: "#22C55E", // Green athletic look
      legColor: "#1E293B", // Navy shorts
      hasCap: true,
      uvMeterLabel: "Moderate (5)",
      uvPercent: 50,
      hydrationLabel: "Moderate Risk",
      hydrationPercent: 55,
      thermalLabel: "Warm & Dry",
      thermalPercent: 58,
      checklist: [
        { text: "Wear specialized running trainers with mesh", done: true },
        { text: "Plan workout route through shaded pathways", done: false },
        { text: "Carry a cooling towel for high-tempo exercises", done: false }
      ]
    },
    artType: "sun-cloud"
  },
  dobsenville: {
    name: "Dobsenville, ZA",
    temp: 29,
    feelsLike: 29,
    condition: "Sunny",
    rainChance: 2,
    wind: "3.2 Km/h",
    uvIndex: 6,
    hourly: [
      { time: "6:00 AM", temp: 19, cond: "sun" },
      { time: "9:00 AM", temp: 24, cond: "sun" },
      { time: "12:00 PM", temp: 29, cond: "sun" },
      { time: "3:00 PM", temp: 30, cond: "sun" },
      { time: "6:00 PM", temp: 26, cond: "sun" },
      { time: "9:00 PM", temp: 22, cond: "clouds" }
    ],
    sevenDay: [
      { day: "Today", cond: "Sunny", tempMax: 29, tempMin: 18 },
      { day: "Tue", cond: "Sunny", tempMax: 31, tempMin: 19 },
      { day: "Wed", cond: "Sunny", tempMax: 30, tempMin: 17 },
      { day: "Thu", cond: "Cloudy", tempMax: 26, tempMin: 15 },
      { day: "Fri", cond: "Sunny", tempMax: 29, tempMin: 16 },
      { day: "Sat", cond: "Storm", tempMax: 25, tempMin: 14 },
      { day: "Sun", cond: "Sunny", tempMax: 28, tempMin: 15 }
    ],
    advice: {
      wear: "Shorts, light t-shirts or sun-dresses",
      safety: "Drink water frequently, seek shaded spots",
      activity: "Enjoy scenic walks, best for early gym!",
      outfitDesc: "A soft cotton polo shirt in bright emerald, neutral khaki chino shorts, and leather boat loafers.",
      shirtColor: "#10B981", // Emerald
      legColor: "#F59E0B", // Ochre/Khaki
      hasCap: false,
      uvMeterLabel: "High (6)",
      uvPercent: 60,
      hydrationLabel: "Elevated Loss",
      hydrationPercent: 65,
      thermalLabel: "Hot Temperature",
      thermalPercent: 68,
      checklist: [
        { text: "Pour cold electrolyte beverage into flask", done: true },
        { text: "Apply high comfort lip balm with SPF 15", done: true },
        { text: "Avoid heavy cardio workouts between 12-3 PM", done: false }
      ]
    },
    artType: "sun-cloud"
  },
  diepkloof: {
    name: "Diepkloof, ZA",
    temp: 15,
    feelsLike: 13,
    condition: "Cloudy & Windy",
    rainChance: 15,
    wind: "24 Km/h",
    uvIndex: 2,
    hourly: [
      { time: "6:00 AM", temp: 12, cond: "clouds" },
      { time: "9:00 AM", temp: 14, cond: "clouds" },
      { time: "12:00 PM", temp: 15, cond: "clouds" },
      { time: "3:00 PM", temp: 16, cond: "clouds" },
      { time: "6:00 PM", temp: 13, cond: "clouds" },
      { time: "9:00 PM", temp: 11, cond: "clouds" }
    ],
    sevenDay: [
      { day: "Today", cond: "Cloudy", tempMax: 15, tempMin: 10 },
      { day: "Tue", cond: "Cloudy", tempMax: 16, tempMin: 11 },
      { day: "Wed", cond: "Sunny", tempMax: 19, tempMin: 12 },
      { day: "Thu", cond: "Rainy", tempMax: 14, tempMin: 9 },
      { day: "Fri", cond: "Storm", tempMax: 13, tempMin: 8 },
      { day: "Sat", cond: "Cloudy", tempMax: 15, tempMin: 10 },
      { day: "Sun", cond: "Sunny", tempMax: 18, tempMin: 11 }
    ],
    advice: {
      wear: "A windbreaker jacket or thick knit sweater is essential",
      safety: "Protect eyes from blowing dust, stay warm",
      activity: "Excellent day for board games, coffee houses, or gyms!",
      outfitDesc: "A windproof utility coat in deep navy, heat-trapping fleece trousers, and heavy combat boots.",
      shirtColor: "#1E3A8A", // Indigo
      legColor: "#475569", // Dark Slate gray
      hasCap: false,
      uvMeterLabel: "Low (2)",
      uvPercent: 20,
      hydrationLabel: "Minimal Loss",
      hydrationPercent: 25,
      thermalLabel: "Chill & Windy",
      thermalPercent: 28,
      checklist: [
        { text: "Secure loose shutters or outdoor items", done: true },
        { text: "Brew hot rooibos tea with honey", done: true },
        { text: "Wear a wind-resistant beanie for ear comfort", done: false }
      ]
    },
    artType: "night-rain"
  },
  orlando: {
    name: "Orlando, ZA",
    temp: 21,
    feelsLike: 21,
    condition: "Heavy Rain",
    rainChance: 85,
    wind: "12 Km/h",
    uvIndex: 1,
    hourly: [
      { time: "6:00 AM", temp: 18, cond: "clouds" },
      { time: "9:00 AM", temp: 20, cond: "clouds" },
      { time: "12:00 PM", temp: 21, cond: "clouds" },
      { time: "3:00 PM", temp: 21, cond: "clouds" },
      { time: "6:00 PM", temp: 19, cond: "clouds" },
      { time: "9:00 PM", temp: 17, cond: "clouds" }
    ],
    sevenDay: [
      { day: "Today", cond: "Rainy", tempMax: 21, tempMin: 15 },
      { day: "Tue", cond: "Rainy", tempMax: 22, tempMin: 16 },
      { day: "Wed", cond: "Storm", tempMax: 20, tempMin: 14 },
      { day: "Thu", cond: "Cloudy", tempMax: 22, tempMin: 15 },
      { day: "Fri", cond: "Sunny", tempMax: 25, tempMin: 17 },
      { day: "Sat", cond: "Sunny", tempMax: 26, tempMin: 18 },
      { day: "Sun", cond: "Sunny", tempMax: 27, tempMin: 17 }
    ],
    advice: {
      wear: "A sturdy storm coat and reliable waterproof footwear",
      safety: "Watch for slippery stairs and wet driving conditions",
      activity: "Highly recommend museum visits or visiting cozy cafes!",
      outfitDesc: "A hooded raincoat, thermal waterproof cargos, and nonslip duck boots.",
      shirtColor: "#E2E8F0", // Cloudy gray
      legColor: "#1E293B", // Dark slates
      hasCap: false,
      uvMeterLabel: "Low (1)",
      uvPercent: 10,
      hydrationLabel: "Low",
      hydrationPercent: 20,
      thermalLabel: "Cool & Humid",
      thermalPercent: 35,
      checklist: [
        { text: "Pack a fully wind-proof pocket umbrella", done: true },
        { text: "Waterproof spray your bags and shoes", done: true },
        { text: "Wipe down muddy pet paws immediately on entry", done: false }
      ]
    },
    artType: "night-rain"
  },
  london: {
    name: "London, UK",
    temp: 16,
    feelsLike: 15,
    condition: "Cloudy & Brisk",
    rainChance: 40,
    wind: "14.1 Km/h",
    uvIndex: 2,
    hourly: [
      { time: "6:00 AM", temp: 13, cond: "clouds" },
      { time: "9:00 AM", temp: 15, cond: "clouds" },
      { time: "12:00 PM", temp: 16, cond: "clouds" },
      { time: "3:00 PM", temp: 17, cond: "cloud-sun" },
      { time: "6:00 PM", temp: 15, cond: "clouds" },
      { time: "9:00 PM", temp: 14, cond: "clouds" }
    ],
    sevenDay: [
      { day: "Today", cond: "Cloudy", tempMax: 17, tempMin: 12 },
      { day: "Tue", cond: "Rainy", tempMax: 15, tempMin: 11 },
      { day: "Wed", cond: "Cloudy", tempMax: 16, tempMin: 12 },
      { day: "Thu", cond: "Sunny", tempMax: 19, tempMin: 13 },
      { day: "Fri", cond: "Sunny", tempMax: 20, tempMin: 14 },
      { day: "Sat", cond: "Cloudy", tempMax: 18, tempMin: 13 },
      { day: "Sun", cond: "Rainy", tempMax: 16, tempMin: 12 }
    ],
    advice: {
      wear: "Light layers, long sleeves, and a folded mac coat",
      safety: "Use protective skin barrier against damp wind",
      activity: "Museum hopping or cozy historic public houses!",
      outfitDesc: "A classic belted mackintosh, lightweight knit cotton top, and elegant dark denim jeans.",
      shirtColor: "#64748B", // Slate
      legColor: "#0F172A", // Dark blue jeans
      hasCap: false,
      uvMeterLabel: "Low (2)",
      uvPercent: 20,
      hydrationLabel: "Low",
      hydrationPercent: 30,
      thermalLabel: "Brisk Atmospheric",
      thermalPercent: 38,
      checklist: [
        { text: "Carry a folded pocket companion umbrella", done: true },
        { text: "Check dynamic public transport updates online", done: false },
        { text: "Enjoy a warm cup of English Breakfast tea", done: false }
      ]
    },
    artType: "night-rain"
  },
  tokyo: {
    name: "Tokyo, JP",
    temp: 24,
    feelsLike: 23,
    condition: "Drizzly Shaw",
    rainChance: 75,
    wind: "9 Km/h",
    uvIndex: 2,
    hourly: [
      { time: "6:00 AM", temp: 21, cond: "clouds" },
      { time: "9:00 AM", temp: 23, cond: "clouds" },
      { time: "12:00 PM", temp: 24, cond: "clouds" },
      { time: "3:00 PM", temp: 25, cond: "clouds" },
      { time: "6:00 PM", temp: 24, cond: "clouds" },
      { time: "9:00 PM", temp: 22, cond: "clouds" }
    ],
    sevenDay: [
      { day: "Today", cond: "Rainy", tempMax: 25, tempMin: 20 },
      { day: "Tue", cond: "Cloudy", tempMax: 27, tempMin: 21 },
      { day: "Wed", cond: "Sunny", tempMax: 29, tempMin: 22 },
      { day: "Thu", cond: "Sunny", tempMax: 30, tempMin: 23 },
      { day: "Fri", cond: "Cloudy", tempMax: 28, tempMin: 22 },
      { day: "Sat", cond: "Rainy", tempMax: 24, tempMin: 19 },
      { day: "Sun", cond: "Sunny", tempMax: 28, tempMin: 21 }
    ],
    advice: {
      wear: "A breathable light shell, packable water cape",
      safety: "Walk carefully on narrow tile pathways",
      activity: "Perfect for mall arcades or sushi counters!",
      outfitDesc: "A hooded windbreaker shell, breathable mesh running cargos, and quick drying sports shoes.",
      shirtColor: "#84CC16", // Lime green
      legColor: "#111827", // Dark pants
      hasCap: false,
      uvMeterLabel: "Low (2)",
      uvPercent: 20,
      hydrationLabel: "Moderate Loss",
      hydrationPercent: 45,
      thermalLabel: "Humid & Wet",
      thermalPercent: 55,
      checklist: [
        { text: "Buy dynamic vinyl umbrella from family store", done: true },
        { text: "Check bullet train weather warnings", done: true },
        { text: "Plan high-elevation indoor city center sights", done: false }
      ]
    },
    artType: "night-rain"
  }
};

// State Machine Active Pointer
let activeCityKey = "johannesburg";

// ==========================================================================
// 2. DOM Node Cache Selector Loader
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {

  // Outer Screens
  const screenWelcome = document.getElementById("welcome-screen");
  const screenApp = document.getElementById("app-container");

  // Navigation trigger
  const btnGetStarted = document.getElementById("btn-get-started");

  // Sub-views
  const subWeatherDashboard = document.getElementById("view-weather-dashboard");
  const subWeatherMap = document.getElementById("view-weather-map");
  const subWeatherDetail = document.getElementById("view-weather-detail");
  const subFitGuide = document.getElementById("view-fit-guide");
  const subExitLoggedOut = document.getElementById("view-exit-logged-out");

  const allSubViews = [subWeatherDashboard, subWeatherMap, subWeatherDetail, subFitGuide, subExitLoggedOut];

  // Nav buttons
  const navWeather = document.getElementById("nav-weather");
  const navMap = document.getElementById("nav-map");
  const navFit = document.getElementById("nav-fit");
  const navExit = document.getElementById("nav-exit");
  const allNavItems = [navWeather, navMap, navFit, navExit];

  // Map elements
  const mapSvg = document.getElementById("sa-interactive-vector");
  const zoomInBtn = document.getElementById("map-zoom-in");
  const zoomOutBtn = document.getElementById("map-zoom-out");
  const centerBtn = document.getElementById("map-center-arrow");

  // Map badges / list rows
  const badgeProtea = document.getElementById("badge-city-protea");
  const badgeDobsen = document.getElementById("badge-city-dobsen");
  const badgeDiepkloof = document.getElementById("badge-city-diepkloof");
  const badgeOrlando = document.getElementById("badge-city-orlando");

  const feedProtea = document.getElementById("feed-protea");
  const feedDobsen = document.getElementById("feed-dobsen");
  const feedOrlando = document.getElementById("feed-orlando");
  const feedDiepkloof = document.getElementById("feed-diepkloof");

  // Exit trigger logins
  const btnLoginAgain = document.getElementById("btn-login-again");
  const linkReturnHome = document.getElementById("link-return-home");

  // Forecast redirection
  const triggerDetailFlow = document.getElementById("trigger-detail-flow");
  const btnBackToDashboard = document.getElementById("btn-back-to-dashboard");
  const btnMapForecastLink = document.getElementById("btn-map-forecast-link");

  // Search input containers
  const dbSearchInput = document.getElementById("dashboard-search-input");
  const dbSearchBtn = document.getElementById("db-search-btn");
  const mapSearchInput = document.getElementById("map-search-input");
  const mapSearchBtn = document.getElementById("map-search-btn");
  const detailSearchInput = document.getElementById("detail-search-input");
  const detailSearchBtn = document.getElementById("detail-search-btn");

  // Map scale properties
  let mapScale = 1;

  // ==========================================================================
  // 3. Screen Switching & Tab View Routing Engine
  // ==========================================================================

  // Welcome page button "Get Started"
  if (btnGetStarted) {
    btnGetStarted.addEventListener("click", () => {
      screenWelcome.classList.add("hidden");
      screenApp.classList.remove("hidden");
      switchSubView("weather-dashboard");
      triggerNavHighlight("weather");
      syncAllActiveCityData();
    });
  }

  // Routing Handler for central viewport
  function switchSubView(viewKey) {
    // Hide all sub-views initially
    allSubViews.forEach(view => {
      if (view) view.classList.add("hidden");
    });

    switch (viewKey) {
      case "weather-dashboard":
        if (subWeatherDashboard) subWeatherDashboard.classList.remove("hidden");
        break;
      case "weather-map":
        if (subWeatherMap) subWeatherMap.classList.remove("hidden");
        break;
      case "weather-detail":
        if (subWeatherDetail) subWeatherDetail.classList.remove("hidden");
        break;
      case "fit-guide":
        if (subFitGuide) subFitGuide.classList.remove("hidden");
        break;
      case "exit":
        if (subExitLoggedOut) subExitLoggedOut.classList.remove("hidden");
        break;
    }
  }

  // Set visual highllight indicators on active nav menu links
  function triggerNavHighlight(tabName) {
    allNavItems.forEach(item => {
      if (item) {
        item.classList.remove("active");
        if (item.getAttribute("data-tab") === tabName) {
          item.classList.add("active");
        }
      }
    });
  }

  // Hook Menu Sidebar buttons for tabs routing
  if (navWeather) {
    navWeather.addEventListener("click", () => {
      switchSubView("weather-dashboard");
      triggerNavHighlight("weather");
    });
  }
  if (navMap) {
    navMap.addEventListener("click", () => {
      switchSubView("weather-map");
      triggerNavHighlight("map");
    });
  }
  if (navFit) {
    navFit.addEventListener("click", () => {
      switchSubView("fit-guide");
      triggerNavHighlight("fit");
    });
  }
  if (navExit) {
    navExit.addEventListener("click", () => {
      // Disable regular sidebar access once logged out
      allNavItems.forEach(item => {
        if (item) item.classList.remove("active");
      });
      switchSubView("exit");
    });
  }

  // Jump from Dashboard to 7-Day Forecast Detail (Page 2 -> Page 4)
  if (triggerDetailFlow) {
    triggerDetailFlow.addEventListener("click", () => {
      switchSubView("weather-detail");
    });
  }

  // Return to Dashboard View from Page 4 Detail
  if (btnBackToDashboard) {
    btnBackToDashboard.addEventListener("click", () => {
      switchSubView("weather-dashboard");
    });
  }

  // Map screen detailed report jump
  if (btnMapForecastLink) {
    btnMapForecastLink.addEventListener("click", () => {
      switchSubView("weather-detail");
      triggerNavHighlight("weather");
    });
  }

  // ==========================================================================
  // 4. City state synchronizer (Propagates current state weather data across panels)
  // ==========================================================================
  function syncAllActiveCityData() {
    const data = CITIES_DATABASE[activeCityKey];
    if (!data) return;

    // --- A. Sync WEATHER DASHBOARD View (Page 2) ---
    const textLocationName = document.getElementById("active-location-name");
    const textDbTemp = document.getElementById("db-temp-val");
    const textDbCondition = document.getElementById("db-condition-val");
    const textDbFeels = document.getElementById("db-feels-like-val");
    const textAdvWear = document.getElementById("adv-wear-txt");
    const textAdvSafety = document.getElementById("adv-safety-txt");
    const textAdvActivity = document.getElementById("adv-activity-txt");
    const largeArtContainer = document.getElementById("large-art-card-container");

    if (textLocationName) textLocationName.textContent = data.name;
    if (textDbTemp) textDbTemp.textContent = data.temp;
    if (textDbCondition) textDbCondition.textContent = data.condition;
    if (textDbFeels) textDbFeels.textContent = `Feels like ${data.feelsLike}°C`;

    if (textAdvWear) textAdvWear.textContent = data.advice.wear;
    if (textAdvSafety) textAdvSafety.textContent = data.advice.safety;
    if (textAdvActivity) textAdvActivity.textContent = data.advice.activity;

    // Redraw Dashboard Scenic illustration based on meteorological art type
    if (largeArtContainer) {
      if (data.artType === "sun-cloud") {
        largeArtContainer.innerHTML = `
          <div class="scenic-illustration large-scale">
            <div class="volume-sun-glow"></div>
            <div class="volume-sun sun-glow-pulse">
              <div class="sun-ray r1"></div>
              <div class="sun-ray r2"></div>
              <div class="sun-ray r3"></div>
              <div class="sun-ray r4"></div>
              <div class="sun-ray r5"></div>
              <div class="sun-ray r6"></div>
              <div class="sun-ray r7"></div>
              <div class="sun-ray r8"></div>
            </div>
            <div class="volume-cloud">
              <div class="cloud-puff active-puff-1"></div>
              <div class="cloud-puff active-puff-2"></div>
              <div class="cloud-puff active-puff-3"></div>
              <div class="cloud-shadow"></div>
            </div>
          </div>`;
      } else {
        // night rain meteorology setting
        largeArtContainer.innerHTML = `
          <div class="scenic-illustration large-scale">
            <div class="volume-moon">
              <svg viewBox="0 0 100 100" fill="none" class="glowing-moon-svg">
                <path d="M75 15C50 15 35 32 35 55C35 78 50 90 75 90C40 90 20 75 20 52C20 30 40 15 75 15Z" fill="#FAD02C" stroke="#F6A611" stroke-width="2"/>
              </svg>
            </div>
            <div class="volume-cloud dark-atmosphere">
              <div class="cloud-puff active-puff-1 gray-gradient"></div>
              <div class="cloud-puff active-puff-2 gray-gradient"></div>
              <div class="cloud-puff active-puff-3 gray-gradient"></div>
              <div class="cloud-shadow"></div>
            </div>
            <div class="volume-rain heavy-rain">
              <div class="rain-drop d1 glow-blue long-rain"></div>
              <div class="rain-drop d2 glow-blue long-rain"></div>
              <div class="rain-drop d3 glow-blue long-rain"></div>
            </div>
          </div>`;
      }
    }

    // --- B. Sync DETAILED WEATHER VIEW (Page 4) ---
    const detailName = document.getElementById("detail-city-name");
    const detailRainChance = document.getElementById("detail-rain-chance-headline");
    const detailTempVal = document.getElementById("detail-temp-val");
    const detailIconArt = document.getElementById("detail-icon-art");
    const hourlyReel = document.getElementById("hourly-reel-container");
    const forecastTableBody = document.getElementById("forecast-table-body");

    // Air Conditions metrics
    const condRealFeel = document.getElementById("cond-realfeel-val");
    const condWind = document.getElementById("cond-wind-val");
    const condRain = document.getElementById("cond-rain-val");
    const condUv = document.getElementById("cond-uv-val");

    if (detailName) detailName.textContent = data.name.split(",")[0];
    if (detailRainChance) detailRainChance.textContent = `Chance of rain: ${data.rainChance}%`;
    if (detailTempVal) detailTempVal.textContent = data.temp;

    if (condRealFeel) condRealFeel.textContent = `${data.feelsLike}°`;
    if (condWind) condWind.textContent = data.wind;
    if (condRain) condRain.textContent = `${data.rainChance}%`;
    if (condUv) condUv.textContent = data.uvIndex;

    // Draw detail decorative illustration
    if (detailIconArt) {
      if (data.artType === "sun-cloud") {
        detailIconArt.innerHTML = `
          <svg viewBox="0 0 100 100" fill="currentColor" class="glowing-sun-vector">
            <circle cx="50" cy="50" r="22" fill="#FFC900" stroke="#FF8500" stroke-width="2"/>
            <line x1="50" y1="5" x2="50" y2="15" stroke="#FFC900" stroke-width="5" stroke-linecap="round"/>
            <line x1="50" y1="85" x2="50" y2="95" stroke="#FFC900" stroke-width="5" stroke-linecap="round"/>
            <line x1="5" y1="50" x2="15" y2="50" stroke="#FFC900" stroke-width="5" stroke-linecap="round"/>
            <line x1="85" y1="50" x2="95" y2="50" stroke="#FFC900" stroke-width="5" stroke-linecap="round"/>
            <line x1="18.18" y1="18.18" x2="25.25" y2="25.25" stroke="#FFC900" stroke-width="5" stroke-linecap="round"/>
            <line x1="74.75" y1="74.75" x2="81.82" y2="81.82" stroke="#FFC900" stroke-width="5" stroke-linecap="round"/>
            <line x1="18.18" y1="81.82" x2="25.25" y2="74.75" stroke="#FFC900" stroke-width="5" stroke-linecap="round"/>
            <line x1="74.75" y1="25.25" x2="81.82" y2="18.18" stroke="#FFC900" stroke-width="5" stroke-linecap="round"/>
          </svg>`;
      } else {
        detailIconArt.innerHTML = `
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
            <!-- Moon element in detail panel -->
            <path d="M85 20C60 20 45 37 45 60C45 83 60 95 85 95C50 95 30 80 30 57C30 35 50 20 85 20Z" fill="#FAD02C" filter="drop-shadow(0 0 15px rgba(250,208,44,0.3))"/>
            <rect x="25" y="65" width="60" height="20" rx="10" fill="#FFF" opacity="0.9"/>
          </svg>`;
      }
    }

    // Populate the 6 Hourly capsular items
    if (hourlyReel) {
      hourlyReel.innerHTML = "";
      data.hourly.forEach((hour, idx) => {
        let iconMarkup = "";
        if (hour.cond === "sun") {
          iconMarkup = `
            <svg viewBox="0 0 24 24" class="capsule-vector yellow-sun" fill="currentColor">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41"/>
            </svg>`;
        } else if (hour.cond === "cloud-sun") {
          iconMarkup = `
            <svg viewBox="0 0 24 24" class="capsule-vector yellow-cloud" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19.07 4.93l-1.41 1.41M2 12h2" stroke="#FFC900"/>
              <path d="M18.8 13.5a4 4 0 0 1-5 5h-7a4 4 0 0 1-3.5-5.5a4.5 4.5 0 0 1 8.8-.5" stroke="#FFF" fill="#FFF"/>
            </svg>`;
        } else {
          iconMarkup = `
            <svg viewBox="0 0 24 24" class="capsule-vector dark-cloud" stroke="currentColor" fill="none" stroke-width="2">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
            </svg>`;
        }

        const isHighlight = idx === 2 ? "highlight-hour" : ""; // 12:00 PM is typically active
        hourlyReel.innerHTML += `
          <div class="hour-capsule ${isHighlight}">
            <span class="hour-time">${hour.time}</span>
            <div class="hour-icon">${iconMarkup}</div>
            <span class="hour-temp">${hour.temp}°</span>
          </div>`;
      });
    }

    // Populate the 7-day weather table list
    if (forecastTableBody) {
      forecastTableBody.innerHTML = "";
      data.sevenDay.forEach(dayRow => {
        let iconMarkup = "";
        if (dayRow.cond === "Sunny") {
          iconMarkup = `
            <svg viewBox="0 0 24 24" class="yellow-sun-icon micro-vector" fill="currentColor">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41"/>
            </svg>`;
        } else if (dayRow.cond === "Cloudy") {
          iconMarkup = `
            <svg viewBox="0 0 24 24" class="grey-cloud-icon micro-vector" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
            </svg>`;
        } else if (dayRow.cond === "Rainy") {
          iconMarkup = `
            <svg viewBox="0 0 24 24" class="blue-rain-icon micro-vector" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="m10 18-1 2M14 18l-1 2" stroke="#2466FF" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M17 12a4 4 0 0 0-4-4h-.7a7.5 7.5 0 0 0-14.6 1.5A4 4 0 0 0 2 12h14z" fill="#FFF"/>
            </svg>`;
        } else {
          // Stormy template
          iconMarkup = `
            <svg viewBox="0 0 24 24" class="dark-storm-icon micro-vector" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 17.5A2.5 2.5 0 0 1 17.5 20h-10a3.5 3.5 0 0 1 0-7H8.2a4.5 4.5 0 0 1 8.8.5a2.5 2.5 0 0 1 3 4z" fill="#333" stroke="#FFF"/>
              <path d="M13 18l-2 3h4l-2 3" stroke="#FFC900" stroke-width="2.5"/>
            </svg>`;
        }

        forecastTableBody.innerHTML += `
          <div class="forecast-table-row">
            <span class="forecast-day">${dayRow.day}</span>
            <div class="forecast-status-box">
              <div class="forecast-row-icon">${iconMarkup}</div>
              <span class="forecast-desc-label">${dayRow.cond}</span>
            </div>
            <div class="forecast-temp-range">
              <strong class="temp-high">${dayRow.tempMax}</strong>
              <span class="temp-slash">/</span>
              <span class="temp-low">${dayRow.tempMin}</span>
            </div>
          </div>`;
      });
    }

    // --- C. Sync FIT GUIDE VIEW & Bento layout (Customized Lifestyle advice) ---
    const fitCityTitle = document.getElementById("fit-city-title");
    const fitCityStatus = document.getElementById("fit-city-status");
    const fitBadgeTemp = document.getElementById("fit-current-badge-temp");
    const fitBadgeDesc = document.getElementById("fit-current-badge-desc");
    const wearOutfitDesc = document.getElementById("planner-outfit-desc");

    const avatarTorso = document.getElementById("dynamic-avatar-torso");
    const avatarLegs = document.getElementById("dynamic-avatar-legs");
    const avatarAcc = document.getElementById("dynamic-avatar-acc");

    const uvMeterLabel = document.getElementById("planner-uv-meter-label");
    const uvMeterBar = document.getElementById("planner-uv-meter-bar");
    const hydrationLabel = document.getElementById("planner-hydration-label");
    const hydrationBar = document.getElementById("planner-hydration-bar");
    const thermalLabel = document.getElementById("planner-thermal-label");
    const thermalBar = document.getElementById("planner-thermal-bar");
    const checklistUl = document.getElementById("planner-checklist-ul");

    if (fitCityTitle) fitCityTitle.textContent = `${data.name.split(",")[0]} Lifestyle Planner`;
    if (fitCityStatus) fitCityStatus.textContent = `Specialized clothing, wellness, and fitness guidelines for ${data.name}`;
    if (fitBadgeTemp) fitBadgeTemp.textContent = `${data.temp}°C`;
    if (fitBadgeDesc) fitBadgeDesc.textContent = data.condition;
    if (wearOutfitDesc) wearOutfitDesc.textContent = data.advice.outfitDesc;

    // Mutate the physical CSS Avatar dress up colors dynamically!
    if (avatarTorso) avatarTorso.style.backgroundColor = data.advice.shirtColor;
    if (avatarLegs) avatarLegs.style.backgroundColor = data.advice.legColor;
    if (avatarAcc) {
      avatarAcc.style.display = data.advice.hasCap ? "block" : "none";
    }

    // Modify progress gauge sizes and readings
    if (uvMeterLabel) uvMeterLabel.textContent = data.advice.uvMeterLabel;
    if (uvMeterBar) uvMeterBar.style.width = `${data.advice.uvPercent}%`;

    if (hydrationLabel) hydrationLabel.textContent = data.advice.hydrationLabel;
    if (hydrationBar) hydrationBar.style.width = `${data.advice.hydrationPercent}%`;

    if (thermalLabel) thermalLabel.textContent = data.advice.thermalLabel;
    if (thermalBar) thermalBar.style.width = `${data.advice.thermalPercent}%`;

    // Redraw checklist elements
    if (checklistUl) {
      checklistUl.innerHTML = "";
      data.advice.checklist.forEach(chk => {
        const checkedStateClass = chk.done ? "done-item" : "";
        const checkedSign = chk.done ? "✓" : "";
        const boxCheckedClass = chk.done ? "checked" : "";

        checklistUl.innerHTML += `
          <li class="checklist-item ${checkedStateClass}">
            <div class="chk-box ${boxCheckedClass}">${checkedSign}</div>
            <span class="chk-text">${chk.text}</span>
          </li>`;
      });

      // Re-bind click event handles to newly rendered checkboxes
      const checklistBoxes = checklistUl.querySelectorAll(".chk-box");
      checklistBoxes.forEach(box => {
        box.addEventListener("click", (e) => {
          const listItem = e.target.closest(".checklist-item");
          const chkBox = listItem.querySelector(".chk-box");
          listItem.classList.toggle("done-item");
          chkBox.classList.toggle("checked");
          if (chkBox.classList.contains("checked")) {
            chkBox.textContent = "✓";
          } else {
            chkBox.textContent = "";
          }
        });
      });
    }
  }

  // ==========================================================================
  // 5. Interactive SVG Map of South Africa logic (Page 3)
  // ==========================================================================

  // HUD interactive scaling handlers
  if (zoomInBtn) {
    zoomInBtn.addEventListener("click", () => {
      mapScale += 0.15;
      if (mapScale > 2.5) mapScale = 2.5;
      applyMapTransform();
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", () => {
      mapScale -= 0.15;
      if (mapScale < 0.6) mapScale = 0.6;
      applyMapTransform();
    });
  }

  if (centerBtn) {
    centerBtn.addEventListener("click", () => {
      mapScale = 1;
      applyMapTransform();
    });
  }

  function applyMapTransform() {
    if (mapSvg) {
      mapSvg.style.transform = `scale(${mapScale})`;
    }
  }

  // Cross-highlight Map nodes list index
  function highlightMapCityEntity(cityId) {
    // 1. Remove active-badge from floating badges
    const badges = [badgeProtea, badgeDobsen, badgeDiepkloof, badgeOrlando];
    badges.forEach(badge => {
      if (badge) badge.classList.remove("active-badge");
    });

    // 2. Remove active-feed from side node rows
    const rows = [feedProtea, feedDobsen, feedOrlando, feedDiepkloof];
    rows.forEach(row => {
      if (row) row.classList.remove("active-feed");
    });

    // 3. Highlight specific city
    activeCityKey = cityId;
    syncAllActiveCityData();

    // Map cityId into exact element keys
    if (cityId === "proteaglen") {
      if (badgeProtea) badgeProtea.classList.add("active-badge");
      if (feedProtea) feedProtea.classList.add("active-feed");
    } else if (cityId === "dobsenville") {
      if (badgeDobsen) badgeDobsen.classList.add("active-badge");
      if (feedDobsen) feedDobsen.classList.add("active-feed");
    } else if (cityId === "diepkloof") {
      if (badgeDiepkloof) badgeDiepkloof.classList.add("active-badge");
      if (feedDiepkloof) feedDiepkloof.classList.add("active-feed");
    } else if (cityId === "orlando") {
      if (badgeOrlando) badgeOrlando.classList.add("active-badge");
      if (feedOrlando) feedOrlando.classList.add("active-feed");
    }

    // Zoom/pan highlight to map coordinates slightly depending on selection
    if (mapSvg) {
      let zoomCoords = "scale(1.25) ";
      if (cityId === "proteaglen") zoomCoords += "translate(-20px, -20px)";
      else if (cityId === "dobsenville") zoomCoords += "translate(10px, 30px)";
      else if (cityId === "diepkloof") zoomCoords += "translate(30px, -40px)";
      else if (cityId === "orlando") zoomCoords += "translate(-30px, -10px)";
      else zoomCoords = "scale(1)";

      mapSvg.style.transform = zoomCoords;
      mapScale = 1.25; // update tracker
    }
  }

  // Bind clicks on absolute overlaied Map badges
  if (badgeProtea) { badgeProtea.addEventListener("click", () => highlightMapCityEntity("proteaglen")); }
  if (badgeDobsen) { badgeDobsen.addEventListener("click", () => highlightMapCityEntity("dobsenville")); }
  if (badgeDiepkloof) { badgeDiepkloof.addEventListener("click", () => highlightMapCityEntity("diepkloof")); }
  if (badgeOrlando) { badgeOrlando.addEventListener("click", () => highlightMapCityEntity("orlando")); }

  // Bind clicks on right-sided feed node rows
  if (feedProtea) { feedProtea.addEventListener("click", () => highlightMapCityEntity("proteaglen")); }
  if (feedDobsen) { feedDobsen.addEventListener("click", () => highlightMapCityEntity("dobsenville")); }
  if (feedOrlando) { feedOrlando.addEventListener("click", () => highlightMapCityEntity("orlando")); }
  if (feedDiepkloof) { feedDiepkloof.addEventListener("click", () => highlightMapCityEntity("diepkloof")); }

  // ==========================================================================
  // 6. Universal Interactive Search Engine (Handles any user input)
  // ==========================================================================
  function parseAndSearchQuery(inputText) {
    if (!inputText) return;
    const query = inputText.toLowerCase().replace(/\s+/g, "");

    // A. Check if the searched text matches any existing city in our database
    let matchedKey = null;
    for (const key in CITIES_DATABASE) {
      if (key.includes(query) || query.includes(key)) {
        matchedKey = key;
        break;
      }
    }

    // B. If found, highlight city, sync panels, and route view
    if (matchedKey) {
      activeCityKey = matchedKey;
      syncAllActiveCityData();

      // If of regional South Africa cities, route to map or highlight
      if (["proteaglen", "dobsenville", "diepkloof", "orlando"].includes(matchedKey)) {
        switchSubView("weather-map");
        triggerNavHighlight("map");
        highlightMapCityEntity(matchedKey);
      } else {
        // If Madrid/London/Tokyo etc, open Forecast screen
        switchSubView("weather-detail");
        triggerNavHighlight("weather");
      }
      showFeedbackToast(`Loading weather reports for ${CITIES_DATABASE[matchedKey].name}...`);
    } else {
      // C. If the city does not exist, Dynamically compile realistic values using dynamic seed!
      const formattedCityName = inputText.charAt(0).toUpperCase() + inputText.slice(1);
      const generatedTemp = Math.floor(Math.random() * 26) + 10; // 10°C to 36°C
      const generatedRainChance = Math.floor(Math.random() * 95);
      const conditionSet = generatedRainChance > 70 ? "Heavy Rain" : generatedRainChance > 40 ? "Cloudy" : "Sunny";

      const newCustomCity = {
        name: `${formattedCityName}, Global`,
        temp: generatedTemp,
        feelsLike: Math.max(generatedTemp - 2, 8),
        condition: conditionSet,
        rainChance: generatedRainChance,
        wind: `${(Math.random() * 18).toFixed(1)} Km/h`,
        uvIndex: Math.floor(Math.random() * 9) + 1,
        hourly: [
          { time: "6:00 AM", temp: generatedTemp - 4, cond: "clouds" },
          { time: "9:00 AM", temp: generatedTemp - 1, cond: "cloud-sun" },
          { time: "12:00 PM", temp: generatedTemp, cond: "sun" },
          { time: "3:00 PM", temp: generatedTemp + 1, cond: "sun" },
          { time: "6:00 PM", temp: generatedTemp, cond: "sun" },
          { time: "9:00 PM", temp: generatedTemp - 2, cond: "cloud-sun" }
        ],
        sevenDay: [
          { day: "Today", cond: conditionSet, tempMax: generatedTemp + 2, tempMin: generatedTemp - 4 },
          { day: "Tue", cond: "Sunny", tempMax: generatedTemp + 3, tempMin: generatedTemp - 2 },
          { day: "Wed", cond: "Cloudy", tempMax: generatedTemp, tempMin: generatedTemp - 3 },
          { day: "Thu", cond: "Rainy", tempMax: generatedTemp - 2, tempMin: generatedTemp - 5 },
          { day: "Fri", cond: "Sunny", tempMax: generatedTemp + 4, tempMin: generatedTemp - 1 },
          { day: "Sat", cond: "Storm", tempMax: generatedTemp - 3, tempMin: generatedTemp - 6 },
          { day: "Sun", cond: "Sunny", tempMax: generatedTemp + 2, tempMin: generatedTemp - 3 }
        ],
        advice: {
          wear: generatedTemp < 18 ? "Wear thick cardigans or insulation coats" : "Wear short-sleeved loose shirt or dry t-shirt",
          safety: generatedRainChance > 60 ? "Carry umbrella, slippery steps caution" : "Apply sun lotion, hydration breaks suggested",
          activity: generatedRainChance > 60 ? "Great for visiting historic local libraries" : "Perfect for open gardens or jogging parks!",
          outfitDesc: generatedTemp < 18 ? "A windproof thick rain jacket, stretch knit pants, and high insulated sneakers." : "Light cotton short sleeves and cargo linen jogger shorts.",
          shirtColor: generatedTemp < 18 ? "#3B82F6" : "#F97316",
          legColor: "#1E293B",
          hasCap: generatedTemp > 22,
          uvMeterLabel: `Index (${Math.min(generatedTemp / 4, 10).toFixed(0)})`,
          uvPercent: Math.min((generatedTemp / 35) * 100, 100),
          hydrationLabel: generatedTemp > 24 ? "High Risk" : "Normal Comfort",
          hydrationPercent: Math.min((generatedTemp / 35) * 100, 100),
          thermalLabel: "Adaptive Thermal Level",
          thermalPercent: 50,
          checklist: [
            { text: `Explore local sights in ${formattedCityName}`, done: true },
            { text: "Dynamic parameters compiled successfully", done: true },
            { text: "Inspect dynamic location advisory checklist details", done: false }
          ]
        },
        artType: generatedRainChance > 60 ? "night-rain" : "sun-cloud"
      };

      // Push into runtime state dictionary
      const lowerInputKey = formattedCityName.toLowerCase();
      CITIES_DATABASE[lowerInputKey] = newCustomCity;
      activeCityKey = lowerInputKey;

      syncAllActiveCityData();
      switchSubView("weather-detail");
      triggerNavHighlight("weather");
      showFeedbackToast(`Creating dynamically synthesized satellite reports for ${formattedCityName}!`);
    }
  }

  // Bind key inputs to search bar forms
  if (dbSearchBtn) {
    dbSearchBtn.addEventListener("click", () => {
      parseAndSearchQuery(dbSearchInput.value);
    });
  }
  if (dbSearchInput) {
    dbSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") parseAndSearchQuery(dbSearchInput.value);
    });
  }

  if (mapSearchBtn) {
    mapSearchBtn.addEventListener("click", () => {
      parseAndSearchQuery(mapSearchInput.value);
    });
  }
  if (mapSearchInput) {
    mapSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") parseAndSearchQuery(mapSearchInput.value);
    });
  }

  if (detailSearchBtn) {
    detailSearchBtn.addEventListener("click", () => {
      parseAndSearchQuery(detailSearchInput.value);
    });
  }
  if (detailSearchInput) {
    detailSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") parseAndSearchQuery(detailSearchInput.value);
    });
  }

  // Create highly satisfying floating satellite notification toast block
  function showFeedbackToast(message) {
    const existing = document.querySelector(".sat-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "sat-toast animated-entrance";
    toast.textContent = message;

    // Inject temporary styles on toast
    Object.assign(toast.style, {
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      color: "var(--accent-green)",
      border: "1.5px solid var(--accent-green)",
      padding: "1rem 1.5rem",
      borderRadius: "16px",
      fontSize: "0.9rem",
      fontFamily: "var(--font-mono)",
      boxShadow: "0 10px 30px rgba(0, 230, 89, 0.25)",
      zIndex: "99999",
      transition: "all 0.3s ease-out"
    });

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(15px)";
      setTimeout(() => toast.remove(), 350);
    }, 3500);
  }

  // ==========================================================================
  // 7. Exit Page Logouts (Page 5)
  // ==========================================================================
  if (btnLoginAgain) {
    btnLoginAgain.addEventListener("click", () => {
      screenApp.classList.add("hidden");
      screenWelcome.classList.remove("hidden");
    });
  }

  if (linkReturnHome) {
    linkReturnHome.addEventListener("click", (e) => {
      e.preventDefault();
      switchSubView("weather-dashboard");
      triggerNavHighlight("weather");
    });
  }

  // Start with default city loaded
  syncAllActiveCityData();
});

// Javscript Api for dynamic weather dashboard application

// Replace with your actual OpenWeather API key
const API_KEY = 'e60557cce7cbeb9ef373ce5a55b052fb';
const CITY = 'Johannesburg';

async function fetchWeather() {
  // Construct the URL with city name and your API key
  const url = `https://openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    // Check if the HTTP request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Log helpful weather details to the console
    console.log(`Weather in ${data.name}:`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Condition: ${data.weather[0].description}`);

  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
  }
}

// Execute the function
fetchWeather();
