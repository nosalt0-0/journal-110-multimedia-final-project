/**
 * BART Station Ridership Data
 * 49 stations across 7 regions, with weekday daily ridership ranges & notes
 */
var stationData = [
  // ── SF Core ──
  { name: "Embarcadero", ridership: "16,000 – 20,000", note: "金融区核心，全线繁忙度第一" },
  { name: "Montgomery St.", ridership: "14,000 – 18,000", note: "金融区/商业区，客流极高" },
  { name: "Powell St.", ridership: "13,000 – 16,000", note: "联合广场换乘枢纽/购物区" },
  { name: "Civic Center / UN Plaza", ridership: "10,000 – 13,000", note: "市政中心，换乘市政铁道（Muni）" },
  { name: "16th St. Mission", ridership: "5,500 – 7,500", note: "米申区住宅与商业混合区" },
  { name: "24th St. Mission", ridership: "6,000 – 8,000", note: "米申区核心社区" },
  { name: "Glen Park", ridership: "3,000 – 4,200", note: "南旧金山居民区" },
  { name: "Balboa Park", ridership: "5,000 – 6,800", note: "城市学院及南区交通枢纽" },

  // ── Peninsula & SFO ──
  { name: "Daly City", ridership: "4,000 – 5,500", note: "圣马刁县北部交通换乘站" },
  { name: "Colma", ridership: "1,200 – 1,800", note: "郊区停车换乘站" },
  { name: "South San Francisco", ridership: "1,500 – 2,200", note: "南旧金山工业/生物科技区" },
  { name: "San Bruno", ridership: "1,200 – 1,800", note: "商业中心及住宅区" },
  { name: "San Francisco International Airport (SFO)", ridership: "4,500 – 6,500", note: "直通旧金山国际机场航站楼" },
  { name: "Millbrae", ridership: "2,500 – 3,500", note: "与 Caltrain（加州火车）大型换乘站" },

  // ── Oakland Area ──
  { name: "West Oakland", ridership: "3,500 – 4,500", note: "跨湾大桥入口前的东湾首站" },
  { name: "12th St. Oakland City Center", ridership: "6,000 – 8,000", note: "奥克兰市中心商务区" },
  { name: "19th St. Oakland", ridership: "6,000 – 7,500", note: "奥克兰艺术与娱乐区" },
  { name: "MacArthur", ridership: "4,000 – 5,500", note: "东湾北部/东部线路重要换乘枢纽" },
  { name: "Rockridge", ridership: "2,500 – 3,500", note: "高档社区与商业街" },
  { name: "Fruitvale", ridership: "4,000 – 5,500", note: "东奥克兰人口密集区" },
  { name: "Coliseum", ridership: "3,000 – 4,000", note: "体育馆及 OAK 机场捷运线换乘站" },
  { name: "Oakland International Airport (OAK)", ridership: "800 – 1,500", note: "自动导向轨道（Oakland Airport Connector）" },

  // ── Richmond Line ──
  { name: "Ashby", ridership: "2,000 – 3,000", note: "南伯克利社区" },
  { name: "Downtown Berkeley", ridership: "6,500 – 8,500", note: "加州大学伯克利分校（UCB）主校区" },
  { name: "North Berkeley", ridership: "2,000 – 2,800", note: "伯克利住宅区" },
  { name: "El Cerrito Plaza", ridership: "2,200 – 3,000", note: "购物中心及周边社区" },
  { name: "El Cerrito del Norte", ridership: "3,500 – 4,500", note: "结合多条公交干线的东湾北部枢纽" },
  { name: "Richmond", ridership: "2,500 – 3,500", note: "Amtrak 美铁换乘站" },

  // ── Antioch / eBART ──
  { name: "Orinda", ridership: "1,200 – 1,800", note: "罗讷德隧道以东首站，通勤车站" },
  { name: "Lafayette", ridership: "1,500 – 2,200", note: "郊区住宅区" },
  { name: "Walnut Creek", ridership: "3,000 – 4,200", note: "康特拉科斯塔县核心商务与零售区" },
  { name: "Pleasant Hill / Contra Costa Centre", ridership: "2,800 – 3,800", note: "大型高密度通勤导向开发区（TOD）" },
  { name: "Concord", ridership: "2,200 – 3,200", note: "康科德市中心" },
  { name: "North Concord / Martinez", ridership: "500 – 900", note: "全线客流量最低的车站之一" },
  { name: "Pittsburg / Bay Point", ridership: "2,200 – 3,000", note: "重轨与 eBART 柴油动车组换乘节点" },
  { name: "Pittsburg Center (eBART)", ridership: "800 – 1,200", note: "柴油轻轨支线站点" },
  { name: "Antioch (eBART)", ridership: "1,800 – 2,500", note: "eBART 终点站，外郊通勤客流集中" },

  // ── Dublin / Pleasanton ──
  { name: "San Leandro", ridership: "2,500 – 3,500", note: "圣利安住市中心" },
  { name: "Bay Fair", ridership: "2,500 – 3,500", note: "蓝线与橙/绿线分支枢纽" },
  { name: "Castro Valley", ridership: "1,200 – 1,800", note: "位于 580 号州际公路中央分隔带" },
  { name: "West Dublin / Pleasanton", ridership: "1,200 – 1,800", note: "商业区与住宅集中区" },
  { name: "Dublin / Pleasanton", ridership: "3,000 – 4,200", note: "三谷地区（Tri-Valley）末端换乘大站" },

  // ── Berryessa Line ──
  { name: "Hayward", ridership: "2,200 – 3,000", note: "海沃德市中心" },
  { name: "South Hayward", ridership: "1,500 – 2,200", note: "社区及学校客流" },
  { name: "Union City", ridership: "2,000 – 2,800", note: "联合市交通枢纽" },
  { name: "Fremont", ridership: "2,500 – 3,500", note: "弗里蒙特原终点站，公交接驳丰富" },
  { name: "Warm Springs / South Fremont", ridership: "1,500 – 2,200", note: "靠近特斯拉工厂及工业园区" },
  { name: "Milpitas", ridership: "1,800 – 2,500", note: "换乘 VTA 轻轨及硅谷通勤巴士" },
  { name: "Berryessa / North San José", ridership: "2,200 – 3,000", note: "BART 目前最南端的终点站（圣何塞北）" }
];

/* English station descriptions from "Bart station brief intro.docx" */
var stationDescriptions = {
  "Embarcadero": "Ferry Building, eastern Financial District, Muni Metro/Cable Car transfers.",
  "Montgomery St.": "Core Financial District, Salesforce Tower & Transit Center, major corporate offices.",
  "Powell St.": "Union Square shopping district, Moscone Center, SFMOMA, cable car turnaround.",
  "Civic Center / UN Plaza": "SF City Hall, Asian Art Museum, theater district, state and federal government buildings.",
  "16th St. Mission": "Northern Mission District, independent shops, dining/bar scene, dense residential areas.",
  "24th St. Mission": "Southern Mission District, Latino cultural center, street art/murals, local residential areas.",
  "Glen Park": "Quiet Glen Park residential neighborhood, providing commute access for southern SF residents.",
  "Balboa Park": "City College of San Francisco (CCSF) main campus, Ocean Ave commercial corridor.",
  "Daly City": "Borders southern SF; serves SF State University (SFSU) and many commuters working in the city.",
  "Colma": "Serves Colma (famous for its cemeteries) and nearby auto rows/big-box retail centers.",
  "South San Francisco": "Serves the Biotech Capital corporate campuses and surrounding residential neighborhoods.",
  "San Bruno": "Adjacent to Tanforan shopping center; serves YouTube headquarters and downtown San Bruno.",
  "San Francisco International Airport (SFO)": "Direct connection to SFO International Terminals, serving global travelers.",
  "Millbrae": "Super Transit Hub: Direct cross-platform transfer to Caltrain, serving Silicon Valley commuters.",
  "West Oakland": "First stop east of the Bay Bridge. Serves the Port of Oakland and West Oakland neighborhoods.",
  "12th St. Oakland City Center": "Downtown Oakland core business district, Oakland Chinatown, City Hall, and corporate offices.",
  "19th St. Oakland": "Uptown district, Fox Theater, Latham Square, and emerging dining/entertainment areas.",
  "MacArthur": "Largest transfer hub in the system. Serves the Temescal neighborhood and North Oakland.",
  "Rockridge": "Affluent Oakland neighborhood serving the upscale dining and boutique corridor of College Ave.",
  "Fruitvale": "East Oakland's Latino cultural and commercial center, anchored by the Fruitvale Transit Village.",
  "Coliseum": "Direct access to the Oakland Arena; starting point for the Oakland Airport Connector.",
  "Oakland International Airport (OAK)": "OAK terminals, connected via BART's automated guideway transit (AGT) system from Coliseum.",
  "Ashby": "South Berkeley residential areas, Berkeley Flea Market, and independent arts/commercial streets.",
  "Downtown Berkeley": "UC Berkeley main campus and the highly dense student life/commercial district.",
  "North Berkeley": "Quiet, middle-to-upper-class residential areas bordering North Berkeley and Albany.",
  "El Cerrito Plaza": "El Cerrito Plaza shopping center and rapidly developing apartment complexes.",
  "El Cerrito del Norte": "Major bus transit hub serving riders transferring from Marin and Solano counties.",
  "Richmond": "Terminus. Transit Hub: Connects to Amtrak and Capitol Corridor for Sacramento-bound travelers.",
  "Orinda": "Serves Orinda and surrounding high-income, low-density hillside homes and top school districts.",
  "Lafayette": "Serves downtown Lafayette and surrounding upper-middle-class suburban neighborhoods.",
  "Walnut Creek": "East Bay's affluent commercial sub-center; serves Broadway Plaza and surrounding office parks.",
  "Pleasant Hill / Contra Costa Centre": "A classic Transit-Oriented Development (TOD), serving corporate offices and dense apartments.",
  "Concord": "Serves downtown Concord (Todos Santos Plaza) and vast residential areas in central Contra Costa.",
  "North Concord / Martinez": "Serves northern Concord residential areas and the former naval weapons station footprint.",
  "Pittsburg / Bay Point": "Traditional Yellow Line terminus; serves a massive commuter population in the deep East Bay.",
  "Pittsburg Center (eBART)": "(eBART extension) Serves the residential areas of central Pittsburg.",
  "Antioch (eBART)": "(eBART extension) Serves the fast-growing population at the edge of the Central Valley.",
  "San Leandro": "Serves downtown San Leandro and surrounding tech/innovation business parks.",
  "Bay Fair": "Adjacent to Bayfair Center; the branch transfer point for southbound Blue and Orange lines.",
  "Castro Valley": "Serves family residential areas in Castro Valley and the surrounding hills.",
  "West Dublin / Pleasanton": "Adjacent to Stoneridge Shopping Center; serves nearby corporate parks and hotel clusters.",
  "Dublin / Pleasanton": "Terminus. Serves Hacienda Business Park and Central Valley super commuters who park and ride.",
  "Hayward": "Serves downtown Hayward, City Hall, and California State University, East Bay (CSUEB).",
  "South Hayward": "Serves southern Hayward's mixed industrial/commercial zones and newly built housing.",
  "Union City": "Serves Union City residential areas, with future potential to connect to Dumbarton commuter rail.",
  "Fremont": "Serves the Fremont medical center, downtown commercial streets, and large Asian communities.",
  "Warm Springs / South Fremont": "Industrial Core: Adjacent to the Tesla Fremont Factory and emerging high-tech innovation parks.",
  "Milpitas": "Adjacent to The Great Mall; seamless transfer to VTA Light Rail, serving northern Silicon Valley."
};

stationData.forEach(function (station) {
  if (stationDescriptions[station.name]) station.note = stationDescriptions[station.name];
  if (station.name.indexOf("Berryessa / North San") === 0) {
    station.note = "Current southernmost terminus. Adjacent to San Jose Flea Market; serves North San Jose tech parks.";
  }
});

/**
 * Scroll-triggered fade-in animation using Intersection Observer
 */
(function () {
  "use strict";

  /* ── Fade-in Observer ── */
  var fadeElements = document.querySelectorAll(".fade-in");

  if (fadeElements.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.15
    });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* Split-flap headline animation: run once when each title enters the viewport. */
  var flapCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var flapTargets = document.querySelectorAll("#headtitle, .section-topic, .flap-target");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function buildFlapTitle(element) {
    var text = element.dataset.flapText || element.textContent.replace(/\s+/g, " ").trim();
    element.dataset.flapText = text;
    element.textContent = "";
    element.classList.add("flap-ready");

    return Array.prototype.map.call(text, function (character) {
      var letter = document.createElement("span");
      letter.className = "flap-letter" + (character === " " ? " flap-letter--space" : "");
      letter.textContent = character === " " ? "\u00a0" : character;
      letter.setAttribute("aria-hidden", "true");
      element.appendChild(letter);
      return { element: letter, character: character };
    });
  }

  function playFlapTitle(element) {
    if (element.dataset.flapPlayed === "true") return;
    element.dataset.flapPlayed = "true";

    var letters = buildFlapTitle(element);
    element.setAttribute("aria-label", element.dataset.flapText);
    if (reduceMotion) return;

    letters.forEach(function (letter, index) {
      if (letter.character === " ") return;

      var stopAfter = 1000 + Math.random() * 550 + index * 28;
      var startedAt = Date.now();
      letter.element.classList.add("is-flipping");

      var ticker = window.setInterval(function () {
        if (Date.now() - startedAt >= stopAfter) {
          window.clearInterval(ticker);
          letter.element.textContent = letter.character;
          letter.element.classList.remove("is-flipping");
          return;
        }

        letter.element.textContent = flapCharacters.charAt(Math.floor(Math.random() * flapCharacters.length));
      }, 55);
    });
  }

  if (flapTargets.length) {
    var flapObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          playFlapTitle(entry.target);
          flapObserver.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.35 });

    flapTargets.forEach(function (title) {
      flapObserver.observe(title);
    });
  }

  /* Narrative data visualizations */
  if (typeof Chart !== "undefined") {
    Chart.defaults.color = "#aeb8c7";
    Chart.defaults.font.family = '"Segoe UI", system-ui, sans-serif';

    var ridershipCanvas = document.getElementById("ridership-chart");
    if (ridershipCanvas) {
      var ridershipContext = ridershipCanvas.getContext("2d");
      var ridershipGradient = ridershipContext.createLinearGradient(0, 0, 0, 280);
      ridershipGradient.addColorStop(0, "rgba(0, 153, 204, 0.42)");
      ridershipGradient.addColorStop(1, "rgba(0, 153, 204, 0.02)");

      new Chart(ridershipContext, {
        type: "line",
        data: {
          labels: ["2019 (Pre-Pandemic)", "2020 (Low Point)", "2024", "2026 (Current)"],
          datasets: [{
            label: "Average daily riders",
            data: [410000, 25000, 170000, 195000],
            borderColor: "#00b8f0",
            backgroundColor: ridershipGradient,
            fill: true,
            borderWidth: 3,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: "#f7c600",
            pointBorderColor: "#f7f9fb",
            pointBorderWidth: 2,
            tension: 0.35
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 900 },
          plugins: {
            title: {
              display: true,
              text: "BART Average Daily Ridership Drop",
              color: "#f0f2f5",
              font: { size: 14, weight: "600" },
              padding: { bottom: 14 }
            },
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(10, 15, 23, 0.94)",
              titleColor: "#f0f2f5",
              bodyColor: "#c8d0dc",
              callbacks: {
                label: function (context) {
                  return context.dataset.label + ": " + context.parsed.y.toLocaleString();
                }
              }
            }
          },
          scales: {
            x: {
              grid: { color: "rgba(255, 255, 255, 0.07)" },
              ticks: { color: "#aeb8c7", maxRotation: 0, autoSkipPadding: 12 }
            },
            y: {
              beginAtZero: true,
              suggestedMax: 450000,
              grid: { color: "rgba(255, 255, 255, 0.09)" },
              ticks: {
                color: "#aeb8c7",
                callback: function (value) { return (value / 1000) + "k"; }
              }
            }
          }
        }
      });
    }

    var fareboxCanvas = document.getElementById("farebox-chart");
    if (fareboxCanvas) {
      new Chart(fareboxCanvas.getContext("2d"), {
        type: "doughnut",
        data: {
          labels: ["Ticket sales", "Other funding"],
          datasets: [
            {
              label: "Pre-Pandemic",
              data: [67, 33],
              backgroundColor: ["#00a9df", "rgba(163, 177, 194, 0.3)"],
              borderColor: ["#00a9df", "rgba(163, 177, 194, 0.3)"],
              borderWidth: 2
            },
            {
              label: "Current",
              data: [40, 60],
              backgroundColor: ["#f7c600", "rgba(163, 177, 194, 0.52)"],
              borderColor: ["#f7c600", "rgba(163, 177, 194, 0.52)"],
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "46%",
          animation: { animateRotate: true, duration: 900 },
          plugins: {
            title: {
              display: true,
              text: "Farebox Recovery Ratio",
              color: "#f0f2f5",
              font: { size: 14, weight: "600" },
              padding: { bottom: 10 }
            },
            subtitle: {
              display: true,
              text: "Outer ring: Pre-Pandemic · Inner ring: Current",
              color: "#aeb8c7",
              font: { size: 11 },
              padding: { bottom: 8 }
            },
            legend: {
              position: "bottom",
              labels: { color: "#c8d0dc", boxWidth: 12, padding: 14 }
            },
            tooltip: {
              backgroundColor: "rgba(10, 15, 23, 0.94)",
              titleColor: "#f0f2f5",
              bodyColor: "#c8d0dc",
              callbacks: {
                label: function (context) {
                  return context.dataset.label + " — " + context.label + ": " + context.parsed + "%";
                }
              }
            }
          }
        }
      });
    }
  }

  /* ── Section Video Fullscreen ── */
  var expandIcon =
    '<svg class="icon-enter" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M8 3H3v5M16 3h5v5M16 21h5v-5M8 21H3v-5"/>' +
    '</svg>' +
    '<svg class="icon-exit" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M9 9L3 3M15 9l6-6M15 15l6 6M9 15l-6 6"/>' +
    '</svg>';

  document.querySelectorAll(".section__media").forEach(function (media) {
    var video = media.querySelector(".section__video");
    if (!video) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "section__fullscreen";
    btn.setAttribute("aria-label", "Play video in fullscreen");
    btn.innerHTML = expandIcon;
    media.appendChild(btn);

    btn.addEventListener("click", function () {
      if (isFullscreen(media)) {
        exitFullscreen();
      } else {
        enterFullscreen(media, video);
      }
    });

    video.addEventListener("webkitendfullscreen", function () {
      restoreInlineVideo(video, media);
    });
  });

  document.addEventListener("fullscreenchange", syncFullscreenState);
  document.addEventListener("webkitfullscreenchange", syncFullscreenState);

  function isFullscreen(media) {
    var active = document.fullscreenElement || document.webkitFullscreenElement;
    return active === media || media.classList.contains("is-fullscreen");
  }

  function enterFullscreen(media, video) {
    video.controls = true;
    video.muted = false;

    if (media.requestFullscreen) {
      media.requestFullscreen().then(function () {
        video.play().catch(function () {});
      }).catch(function () {
        tryWebkitVideoFullscreen(video, media);
      });
      return;
    }

    if (media.webkitRequestFullscreen) {
      media.webkitRequestFullscreen();
      video.play().catch(function () {});
      return;
    }

    tryWebkitVideoFullscreen(video, media);
  }

  function tryWebkitVideoFullscreen(video, media) {
    if (video.webkitEnterFullscreen) {
      video.muted = false;
      video.webkitEnterFullscreen();
      media.classList.add("is-fullscreen");
      btnSetExpanded(media, true);
      return;
    }

    video.controls = true;
    video.play().catch(function () {});
  }

  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      return;
    }

    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  function syncFullscreenState() {
    document.querySelectorAll(".section__media").forEach(function (media) {
      var video = media.querySelector(".section__video");
      if (!video) return;

      var active = document.fullscreenElement || document.webkitFullscreenElement;
      if (active === media) {
        media.classList.add("is-fullscreen");
        btnSetExpanded(media, true);
        video.play().catch(function () {});
      } else if (!video.webkitDisplayingFullscreen) {
        restoreInlineVideo(video, media);
      }
    });
  }

  function restoreInlineVideo(video, media) {
    media.classList.remove("is-fullscreen");
    btnSetExpanded(media, false);
    video.controls = false;
    video.muted = true;
    video.play().catch(function () {});
  }

  function btnSetExpanded(media, expanded) {
    var btn = media.querySelector(".section__fullscreen");
    if (!btn) return;
    btn.setAttribute("aria-label", expanded ? "Exit fullscreen" : "Play video in fullscreen");
  }

  var backgroundSections = document.querySelectorAll("[data-background]");
  var backgroundImages = document.querySelectorAll(".bg-container__image");

  function setBackground(index) {
    backgroundImages.forEach(function (image, i) {
      image.classList.toggle("is-active", i === index);
    });
  }

  if (backgroundSections.length && backgroundImages.length) {
    var backgroundObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setBackground(Number(entry.target.dataset.background));
      });
    }, { root: null, threshold: 0.45 });

    backgroundSections.forEach(function (section) {
      backgroundObserver.observe(section);
    });
  }

  /* ── Data Carousel ── */
  var carousel = document.querySelector(".data-carousel");
  if (!carousel) return;

    var track = carousel.querySelector(".data-carousel__track");
    var select = document.getElementById("station-select");
    var counter = carousel.querySelector(".data-carousel__counter");
    var prevBtn = carousel.querySelector(".data-carousel__btn--prev");
    var nextBtn = carousel.querySelector(".data-carousel__btn--next");
    var pagination = carousel.querySelector(".data-carousel__pagination");
    var mapHotspots = document.querySelector(".data-map__hotspots");

    var total = stationData.length;
    var currentIndex = 0;
    var touchStartX = 0;
    var dots = [];
    var mapMarkers = [];

    /* Percentage coordinates are anchored to the source map's natural aspect ratio. */
    var stationMapPositions = [
      [23.0, 40.0], [22.7, 41.8], [23.8, 44.2], [13.5, 45.9], [18.2, 52.8],
      [18.2, 55.4], [18.1, 58.1], [17.0, 60.8], [19.0, 67.6], [24.6, 70.1],
      [19.0, 72.6], [27.0, 75.2], [41.0, 74.5], [31.3, 78.8], [36.5, 37.1],
      [47.5, 36.1], [47.6, 33.3], [47.4, 30.7], [54.0, 26.4], [51.5, 44.4],
      [56.4, 47.1], [48.2, 57.4], [35.3, 26.4], [34.2, 24.1], [28.0, 21.5],
      [25.6, 18.9], [21.2, 16.4], [22.3, 10.9], [50.3, 23.5], [55.3, 21.4],
      [59.8, 18.8], [63.6, 16.3], [62.5, 13.9], [61.2, 6.7], [69.3, 6.7],
      [76.7, 7.8], [82.7, 9.8], [57.8, 49.8], [60.2, 52.7], [67.5, 53.3],
      [76.8, 53.6], [86.1, 55.4], [65.4, 59.3], [68.0, 62.0], [71.5, 65.0],
      [74.0, 68.0], [82.4, 74.5], [76.2, 78.2], [74.0, 82.1]
    ];

    /* Build cards & dropdown options */
    stationData.forEach(function (station, i) {
      var card = document.createElement("div");
      card.className = "data-carousel__card";
      card.innerHTML =
        '<span class="data-carousel__badge">Station ' + (i + 1) + ' of ' + total + '</span>' +
        '<h3 class="data-carousel__station">' + station.name + '</h3>' +
        '<div class="data-carousel__metric">' +
          '<span class="data-carousel__metric-label">Avg. Daily Ridership</span>' +
          '<span class="data-carousel__metric-value">' + station.ridership + '</span>' +
        '</div>' +
        '<p class="data-carousel__note">' + station.note + '</p>';
      track.appendChild(card);

      var option = document.createElement("option");
      option.value = i;
      option.textContent = station.name;
      select.appendChild(option);

      var dot = document.createElement("button");
      dot.className = "data-carousel__dot";
      dot.type = "button";
      dot.setAttribute("aria-label", "Go to " + station.name);
      dot.addEventListener("click", function () {
        goTo(i);
      });
      pagination.appendChild(dot);
      dots.push(dot);

      if (mapHotspots && stationMapPositions[i]) {
        var marker = document.createElement("button");
        marker.className = "data-map__station";
        marker.type = "button";
        marker.style.left = stationMapPositions[i][0] + "%";
        marker.style.top = stationMapPositions[i][1] + "%";
        marker.setAttribute("aria-label", "View " + station.name + " station information");
        marker.title = station.name;
        marker.addEventListener("click", function () {
          goTo(i);
          carousel.focus({ preventScroll: true });
        });
        mapHotspots.appendChild(marker);
        mapMarkers.push(marker);
      }
    });

    var cards = carousel.querySelectorAll(".data-carousel__card");

    function goTo(index) {
      currentIndex = (index + total) % total;
      track.style.transform = "translateX(-" + currentIndex * 100 + "%)";

      cards.forEach(function (card, i) {
        card.classList.toggle("is-active", i === currentIndex);
        card.setAttribute("aria-hidden", i === currentIndex ? "false" : "true");
      });

      dots.forEach(function (dot, i) {
        var isActive = i === currentIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });

      mapMarkers.forEach(function (marker, i) {
        var isActive = i === currentIndex;
        marker.classList.toggle("is-active", isActive);
        marker.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      select.value = currentIndex;
      counter.textContent = (currentIndex + 1) + " / " + total;
    }

    goTo(0);

    prevBtn.addEventListener("click", function () {
      goTo(currentIndex - 1);
    });

    nextBtn.addEventListener("click", function () {
      goTo(currentIndex + 1);
    });

    select.addEventListener("change", function () {
      goTo(Number(select.value));
    });

    carousel.addEventListener("touchstart", function (event) {
      touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener("touchend", function (event) {
      var deltaX = event.changedTouches[0].screenX - touchStartX;
      if (Math.abs(deltaX) < 40) return;
      goTo(currentIndex + (deltaX < 0 ? 1 : -1));
    }, { passive: true });

    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(currentIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(currentIndex + 1);
      }
    });

})();
