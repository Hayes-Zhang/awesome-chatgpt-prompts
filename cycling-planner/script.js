const STORAGE_KEY = 'cyclingPlanner.customRoutes.v1';

const defaultRoutes = [
  {
    id: 'liangma-riverside-loop',
    name: '亮马河滨河绿道环线',
    city: '北京·朝阳',
    distanceKm: 24,
    elevationGain: 120,
    surface: '铺装绿道',
    difficulty: '容易',
    category: 'urban',
    start: { lat: 39.9494, lon: 116.4605 },
    highlights: ['夜景灯光', '咖啡补给丰富', '河畔风景'],
    bestTimeOfDay: '傍晚 / 夜间',
    notes:
      '从亮马桥地铁站附近出发，沿亮马河一圈回到起点，路线平缓适合热身或恢复骑行。',
    rainFriendly: true,
    heatFriendly: true,
    coldFriendly: true,
    maxWind: 40,
    sheltered: true,
    tags: ['城市绿道', '夜骑友好', '补给方便'],
    link: 'https://www.google.com/maps/search/?api=1&query=亮马河公园',
  },
  {
    id: 'olympic-forest-double-loop',
    name: '奥林匹克森林公园双环',
    city: '北京·朝阳',
    distanceKm: 18,
    elevationGain: 180,
    surface: '公园铺装路面',
    difficulty: '容易',
    category: 'easy',
    start: { lat: 40.014, lon: 116.3966 },
    highlights: ['公园氧吧', '交通便利', '可多圈叠加'],
    bestTimeOfDay: '清晨 / 傍晚',
    notes:
      '南园与北园组成完整闭环，部分路段有缓坡，适合高效刷圈或恢复骑。',
    rainFriendly: true,
    heatFriendly: false,
    coldFriendly: true,
    maxWind: 35,
    sheltered: true,
    tags: ['刷圈', '人车分流', '停车方便'],
    link: 'https://www.google.com/maps/search/?api=1&query=奥林匹克森林公园',
  },
  {
    id: 'miaofeng-mountain-climb',
    name: '妙峰山经典爬坡',
    city: '北京·门头沟',
    distanceKm: 45,
    elevationGain: 1500,
    surface: '山路铺装',
    difficulty: '困难',
    category: 'climb',
    start: { lat: 39.9337, lon: 116.0679 },
    highlights: ['长坡练耐力', '妙峰山顶庙会', '山景辽阔'],
    bestTimeOfDay: '清晨出发避免车流',
    notes:
      '从潭柘寺方向进山，沿妙峰山路上坡，坡度稳定，适合爬坡训练与长距离耐力。',
    rainFriendly: false,
    heatFriendly: false,
    coldFriendly: false,
    maxWind: 28,
    sheltered: false,
    tags: ['爬坡训练', '挑战自我', '需补给准备'],
    link: 'https://www.google.com/maps/search/?api=1&query=妙峰山门口',
  },
  {
    id: 'huairou-yanqi-loop',
    name: '怀柔雁栖湖风景环线',
    city: '北京·怀柔',
    distanceKm: 62,
    elevationGain: 520,
    surface: '湖畔公路',
    difficulty: '中等',
    category: 'scenic',
    start: { lat: 40.3832, lon: 116.8424 },
    highlights: ['雁栖湖畔', '慕田峪远眺', '公路宽阔'],
    bestTimeOfDay: '白天光线好时段',
    notes:
      '可搭配雁栖湖、红螺寺周边景点，路况良好但节假日车流较多，需注意避峰。',
    rainFriendly: false,
    heatFriendly: true,
    coldFriendly: false,
    maxWind: 32,
    sheltered: false,
    tags: ['风景党', '轻度爬升', '适合团骑'],
    link: 'https://www.google.com/maps/search/?api=1&query=雁栖湖',
  },
  {
    id: 'tongzhou-grand-canal',
    name: '通州大运河绿道往返',
    city: '北京·通州',
    distanceKm: 40,
    elevationGain: 160,
    surface: '河道绿道',
    difficulty: '容易',
    category: 'urban',
    start: { lat: 39.889, lon: 116.7245 },
    highlights: ['运河风光', '骑行道宽阔', '亲水步道'],
    bestTimeOfDay: '日落黄金时段',
    notes:
      '绿道专用骑行线较宽阔，沿途设有驿站补水点，适合风景巡航或家庭骑行。',
    rainFriendly: true,
    heatFriendly: true,
    coldFriendly: true,
    maxWind: 38,
    sheltered: true,
    tags: ['亲水路线', '家庭友好', '夜骑适宜'],
    link: 'https://www.google.com/maps/search/?api=1&query=通州大运河森林公园',
  },
  {
    id: 'miyun-reservoir-long-ride',
    name: '密云水库北线长距离拉练',
    city: '北京·密云',
    distanceKm: 92,
    elevationGain: 880,
    surface: '公路',
    difficulty: '较难',
    category: 'endurance',
    start: { lat: 40.5012, lon: 117.0326 },
    highlights: ['水库风光', '长直路控速', '交通车流少'],
    bestTimeOfDay: '清晨出发当日往返',
    notes:
      '路线较长，需提前补给规划，可沿水库边骑行享受开阔景色，注意防晒和补水。',
    rainFriendly: false,
    heatFriendly: false,
    coldFriendly: true,
    maxWind: 30,
    sheltered: false,
    tags: ['长距离', '控速拉练', '车流稀少'],
    link: 'https://www.google.com/maps/search/?api=1&query=密云水库',
  },
  {
    id: 'shisanling-rolling-hills',
    name: '十三陵山丘起伏线路',
    city: '北京·昌平',
    distanceKm: 56,
    elevationGain: 780,
    surface: '起伏山路',
    difficulty: '中等偏难',
    category: 'climb',
    start: { lat: 40.2532, lon: 116.2259 },
    highlights: ['短坡密集', '风景古迹', '适合间歇训练'],
    bestTimeOfDay: '清晨',
    notes:
      '串联十三陵水库周边起伏山路，坡度不算极端，可用于力量与踏频训练。',
    rainFriendly: false,
    heatFriendly: false,
    coldFriendly: true,
    maxWind: 32,
    sheltered: false,
    tags: ['爬坡间歇', '交通车少', '历史文化'],
    link: 'https://www.google.com/maps/search/?api=1&query=十三陵水库',
  },
];

const state = {
  location: null,
  weather: null,
  customRoutes: loadCustomRoutes(),
};

const elements = {
  preferenceForm: document.getElementById('preferenceForm'),
  timeInput: document.getElementById('timeInput'),
  bufferInput: document.getElementById('bufferInput'),
  speedInput: document.getElementById('speedInput'),
  travelRadiusInput: document.getElementById('travelRadiusInput'),
  focusSelect: document.getElementById('focusSelect'),
  latitudeInput: document.getElementById('latitudeInput'),
  longitudeInput: document.getElementById('longitudeInput'),
  geolocationBtn: document.getElementById('useGeolocation'),
  clearResultsBtn: document.getElementById('clearResults'),
  locationStatus: document.getElementById('locationStatus'),
  weatherStatus: document.getElementById('weatherStatus'),
  recommendations: document.getElementById('recommendations'),
  tipList: document.getElementById('tipList'),
  customRouteForm: document.getElementById('customRouteForm'),
  customRouteList: document.getElementById('customRouteList'),
  resetCustomRoutes: document.getElementById('resetCustomRoutes'),
};

const WEATHER_CODE_DESCRIPTIONS = {
  0: '晴朗',
  1: '多云',
  2: '多云',
  3: '阴天',
  45: '薄雾',
  48: '雾凇',
  51: '细雨',
  53: '小雨',
  55: '中雨',
  56: '小冻雨',
  57: '中冻雨',
  61: '小雨',
  63: '中雨',
  65: '大雨',
  66: '冻雨',
  67: '冻雨',
  71: '小雪',
  73: '中雪',
  75: '大雪',
  77: '冰粒',
  80: '小阵雨',
  81: '中阵雨',
  82: '暴阵雨',
  85: '阵雪',
  86: '暴阵雪',
  95: '雷阵雨',
  96: '雷阵雨伴冰雹',
  99: '雷阵雨伴冰雹',
};

function loadCustomRoutes() {
  if (!('localStorage' in window)) return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((route) => ({ ...route, distanceKm: Number(route.distanceKm) }));
  } catch (error) {
    console.warn('加载自定义路线失败', error);
    return [];
  }
}

function saveCustomRoutes(routes) {
  if (!('localStorage' in window)) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(routes));
  } catch (error) {
    console.warn('保存自定义路线失败', error);
  }
}

function getAllRoutes() {
  return [...defaultRoutes, ...state.customRoutes];
}

function setLocation({ lat, lon, source, accuracy }) {
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;
  const normalized = {
    lat: Number(lat.toFixed(6)),
    lon: Number(lon.toFixed(6)),
    source,
    accuracy: accuracy ? Math.round(accuracy) : undefined,
    updatedAt: new Date(),
  };

  const hasChanged =
    !state.location ||
    Math.abs(state.location.lat - normalized.lat) > 0.0005 ||
    Math.abs(state.location.lon - normalized.lon) > 0.0005;

  state.location = normalized;
  elements.latitudeInput.value = normalized.lat;
  elements.longitudeInput.value = normalized.lon;
  updateLocationStatus();

  if (hasChanged) {
    fetchWeatherForLocation().catch((error) => {
      console.error(error);
      updateWeatherStatus({
        summary: '天气获取失败，请稍后重试。',
        level: 'error',
      });
    });
  }

  return hasChanged;
}

function updateLocationStatus() {
  const status = state.location
    ? `<p>已获取 ${
        state.location.source === 'geolocation' ? '当前位置' : '手动输入的位置'
      }：<strong>${state.location.lat.toFixed(4)}, ${state.location.lon.toFixed(4)}</strong>${
        state.location.accuracy ? `（定位精度 ±${state.location.accuracy} m）` : ''
      }。</p>
       <p>最后更新：${formatTime(state.location.updatedAt)}。</p>`
    : '<p>尚未提供位置，无法计算距离与天气。</p>';

  elements.locationStatus.innerHTML = `<h3>定位状态</h3>${status}`;
}

async function fetchWeatherForLocation() {
  if (!state.location) return;
  const { lat, lon } = state.location;

  updateWeatherStatus({ summary: '正在加载天气数据…', level: 'loading' });

  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', lat);
  url.searchParams.set('longitude', lon);
  url.searchParams.set(
    'hourly',
    'temperature_2m,precipitation_probability,precipitation,cloudcover,windspeed_10m,relativehumidity_2m'
  );
  url.searchParams.set('current_weather', 'true');
  url.searchParams.set('forecast_days', '1');
  url.searchParams.set('timezone', 'auto');

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('天气接口请求失败');
  }

  const data = await response.json();
  const analysis = interpretWeather(data);
  state.weather = {
    raw: data,
    analysis,
    location: { ...state.location },
    fetchedAt: new Date(),
  };

  updateWeatherStatus(analysis);
  return analysis;
}

function interpretWeather(payload) {
  if (!payload?.current_weather) return null;
  const current = payload.current_weather;
  const hourly = payload.hourly || {};
  const now = new Date();

  let closestIndex = 0;
  if (Array.isArray(hourly.time)) {
    const timestamps = hourly.time.map((t) => new Date(t));
    closestIndex = timestamps.findIndex((time) => time >= now);
    if (closestIndex === -1) {
      closestIndex = timestamps.length - 1;
    }
  }

  const precipitationProbability = getHourlyValue(hourly.precipitation_probability, closestIndex);
  const precipitation = getHourlyValue(hourly.precipitation, closestIndex);
  const cloudcover = getHourlyValue(hourly.cloudcover, closestIndex);
  const humidity = getHourlyValue(hourly.relativehumidity_2m, closestIndex);

  const description = WEATHER_CODE_DESCRIPTIONS[current.weathercode] || '未知天气';
  const summary = `当前${description}，气温 ${Math.round(current.temperature)}°C，风速 ${Math.round(
    current.windspeed
  )} km/h`;

  let level = 'great';
  const suggestions = [];

  if (precipitationProbability >= 70 || precipitation >= 1) {
    level = 'caution';
    suggestions.push('降雨概率较高，请携带雨衣或考虑改日。');
  }
  if (precipitationProbability >= 90 || precipitation >= 3) {
    level = 'avoid';
    suggestions.push('短时内可能出现较强降雨，建议改为室内训练。');
  }
  if (current.windspeed > 35) {
    level = level === 'avoid' ? 'avoid' : 'caution';
    suggestions.push('风力偏大，注意侧风与开放路段。');
  }
  if (current.windspeed > 45) {
    level = 'avoid';
    suggestions.push('风力过大，骑行存在安全隐患。');
  }
  if (current.temperature >= 32) {
    level = level === 'great' ? 'good' : level;
    suggestions.push('气温较高，注意补水与防晒。');
  }
  if (current.temperature <= 0) {
    level = level === 'great' ? 'good' : level;
    suggestions.push('气温偏低，出发前做好保暖。');
  }

  const nextWindow = computeWeatherWindow(hourly, closestIndex);

  return {
    summary,
    description,
    temperature: current.temperature,
    windSpeed: current.windspeed,
    precipitationProbability,
    precipitation,
    cloudcover,
    humidity,
    level,
    suggestions,
    windowHint: nextWindow,
    time: new Date(current.time),
  };
}

function computeWeatherWindow(hourly, startIndex) {
  if (!hourly?.time) return null;
  const horizon = Math.min(hourly.time.length, startIndex + 6);
  let bestIndex = startIndex;
  let lowestPrecip = Number.POSITIVE_INFINITY;
  for (let i = startIndex; i < horizon; i += 1) {
    const probability = getHourlyValue(hourly.precipitation_probability, i);
    if (probability < lowestPrecip) {
      lowestPrecip = probability;
      bestIndex = i;
    }
  }
  if (!Number.isFinite(lowestPrecip)) return null;
  const bestTime = new Date(hourly.time[bestIndex]);
  return {
    time: bestTime,
    probability: lowestPrecip,
  };
}

function getHourlyValue(series, index) {
  if (!Array.isArray(series) || series.length === 0) return null;
  const safeIndex = Math.min(Math.max(index, 0), series.length - 1);
  const value = series[safeIndex];
  return typeof value === 'number' ? value : Number(value);
}

function updateWeatherStatus(analysis) {
  if (!analysis) {
    elements.weatherStatus.innerHTML = '<h3>天气窗口</h3><p>暂无天气数据。</p>';
    return;
  }

  if (analysis.level === 'loading') {
    elements.weatherStatus.innerHTML = `<h3>天气窗口</h3><p>${analysis.summary}</p>`;
    return;
  }

  if (analysis.level === 'error') {
    elements.weatherStatus.innerHTML = `<h3>天气窗口</h3><p class="warn">${analysis.summary}</p>`;
    return;
  }

  const levelLabel =
    analysis.level === 'great'
      ? '极佳骑行窗口'
      : analysis.level === 'good'
      ? '天气尚可'
      : analysis.level === 'caution'
      ? '需注意天气变化'
      : '不建议骑行';

  const suggestions = analysis.suggestions?.length
    ? `<ul class="weather-suggestions">${analysis.suggestions
        .map((tip) => `<li>${tip}</li>`)
        .join('')}</ul>`
    : '';

  const windowHint = analysis.windowHint
    ? `<p class="weather-hint">${formatTime(analysis.windowHint.time)} 前后降雨概率约 ${Math.round(
        analysis.windowHint.probability || 0
      )}%</p>`
    : '';

  const precipitationProbabilityText =
    analysis.precipitationProbability == null
      ? '--'
      : `${Math.round(analysis.precipitationProbability)}%`;
  const precipitationText =
    analysis.precipitation == null
      ? '—'
      : `${analysis.precipitation.toFixed(1)} mm/h`;
  const cloudcoverText =
    analysis.cloudcover == null ? '--' : `${Math.round(analysis.cloudcover)}%`;
  const humidityText =
    analysis.humidity == null ? '--' : `${Math.round(analysis.humidity)}%`;

  elements.weatherStatus.innerHTML = `
    <h3>天气窗口</h3>
    <p class="weather-summary">${analysis.summary}</p>
    <ul class="weather-details">
      <li>降雨概率：${precipitationProbabilityText}</li>
      <li>降雨量：${precipitationText}</li>
      <li>云量：${cloudcoverText}</li>
      <li>相对湿度：${humidityText}</li>
    </ul>
    <p class="weather-level weather-level--${analysis.level}">${levelLabel}</p>
    ${windowHint}
    ${suggestions}
  `;
}

function calculateDistanceKm(from, to) {
  const R = 6371;
  const dLat = degToRad(to.lat - from.lat);
  const dLon = degToRad(to.lon - from.lon);
  const lat1 = degToRad(from.lat);
  const lat2 = degToRad(to.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function degToRad(value) {
  return (value * Math.PI) / 180;
}

function formatDistance(km) {
  if (!Number.isFinite(km)) return '—';
  if (km < 1) {
    return `${Math.round(km * 1000)} 米`;
  }
  return `${km.toFixed(1)} 公里`;
}

function formatDuration(minutes) {
  if (!Number.isFinite(minutes)) return '—';
  if (minutes < 60) {
    return `约 ${Math.round(minutes)} 分钟`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return `约 ${hours} 小时${mins > 0 ? ` ${mins} 分` : ''}`;
}

function formatTime(date) {
  if (!date) return '未知时间';
  const target = typeof date === 'string' ? new Date(date) : date;
  return target.toLocaleString('zh-Hans-CN', {
    hour: '2-digit',
    minute: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
}

function evaluateRouteWeather(route, weather) {
  if (!weather) return { scoreDelta: 0, reasons: [] };
  let scoreDelta = 0;
  const reasons = [];

  if (weather.level === 'avoid') {
    scoreDelta -= 28;
    reasons.push('当前天气较差，如非必要建议休息或改为室内训练。');
  } else if (weather.level === 'caution') {
    scoreDelta -= 10;
    reasons.push('天气存在不利因素，出发前需额外检查装备。');
  } else if (weather.level === 'great') {
    scoreDelta += 6;
  }

  if (weather.precipitationProbability >= 50) {
    if (route.rainFriendly) {
      scoreDelta += 8;
      reasons.push('路线铺装良好，在潮湿天气也较安全。');
    } else {
      scoreDelta -= 18;
      reasons.push('遇到降雨时路线抓地力下降，需谨慎。');
    }
  }

  const windLimit = route.maxWind ?? 32;
  if (weather.windSpeed > windLimit) {
    scoreDelta -= (weather.windSpeed - windLimit) * 0.8;
    reasons.push('风力偏大，路线部分路段可能吃风。');
  } else if (weather.windSpeed < windLimit - 10 && route.sheltered) {
    scoreDelta += 4;
    reasons.push('路线遮挡良好，风力对骑行影响较小。');
  }

  if (weather.temperature >= 30 && !route.heatFriendly) {
    scoreDelta -= 12;
    reasons.push('炎热天气下，此路线遮阴较少。');
  }
  if (weather.temperature <= 5 && !route.coldFriendly) {
    scoreDelta -= 8;
    reasons.push('低温条件下，路线不易保持体温。');
  }

  return { scoreDelta, reasons };
}

function generateRecommendations() {
  const availableHours = Number(elements.timeInput.value);
  const bufferMinutes = Number(elements.bufferInput.value) || 0;
  const averageSpeed = Number(elements.speedInput.value) || 20;
  const travelRadius = Number(elements.travelRadiusInput.value) || 15;
  const focus = elements.focusSelect.value;

  if (!Number.isFinite(availableHours) || availableHours <= 0) {
    alert('请填写合理的可用时间。');
    return;
  }

  const totalMinutes = availableHours * 60;
  const effectiveMinutes = Math.max(totalMinutes - bufferMinutes, 30);
  const location = state.location;
  const weather = state.weather?.analysis;
  const routes = getAllRoutes();

  const results = routes.map((route) => {
    const distanceToStart = location ? calculateDistanceKm(location, route.start) : null;
    const rideMinutes = (route.distanceKm / averageSpeed) * 60;

    let score = 50;
    const reasons = [];

    if (distanceToStart != null) {
      if (distanceToStart > travelRadius) {
        score -= (distanceToStart - travelRadius) * 6;
        reasons.push(`起点距离约 ${formatDistance(distanceToStart)}，超出设定范围。`);
      } else {
        score += (travelRadius - distanceToStart) * 1.8;
        reasons.push(`距离你 ${formatDistance(distanceToStart)}，前往起点较方便。`);
      }
    } else {
      reasons.push('未提供位置，按默认权重计算距离。');
    }

    const timeDiff = effectiveMinutes - rideMinutes;
    if (rideMinutes > effectiveMinutes) {
      score -= Math.min(60, rideMinutes - effectiveMinutes);
      reasons.push(
        `预计骑行 ${formatDuration(rideMinutes)}，可能超过你的时间窗口（剩余 ${formatDuration(
          effectiveMinutes
        )}）。`
      );
    } else {
      score += Math.min(30, Math.max(0, timeDiff / 2));
      reasons.push(`预计骑行 ${formatDuration(rideMinutes)}，与计划时间匹配。`);
    }

    if (focus !== 'any') {
      if (route.category === focus) {
        score += 18;
        reasons.push('符合今天想要的骑行感觉。');
      } else if (focus === 'easy' && route.category === 'urban') {
        score += 6;
        reasons.push('城市绿道也能满足轻松巡航。');
      } else {
        score -= 8;
        reasons.push('与设定的骑行偏好略有差异。');
      }
    }

    const weatherImpact = evaluateRouteWeather(route, weather);
    score += weatherImpact.scoreDelta;
    reasons.push(...weatherImpact.reasons);

    score += Math.min(route.highlights?.length || 0, 4) * 2;

    return {
      route,
      score,
      reasons,
      distanceToStart,
      rideMinutes,
    };
  });

  const sorted = results
    .filter((item) => item.score > -60)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  renderRecommendations(sorted);
  updateTips({ weather, results: sorted, focus, effectiveMinutes });
}

function renderRecommendations(results) {
  if (!results.length) {
    elements.recommendations.classList.add('route-list--empty');
    elements.recommendations.innerHTML = `
      <div class="empty-state">
        <p>未找到合适的路线。可以尝试放宽条件或添加本地自定义路线。</p>
      </div>
    `;
    return;
  }

  elements.recommendations.classList.remove('route-list--empty');
  elements.recommendations.innerHTML = results
    .map(({ route, score, reasons, distanceToStart, rideMinutes }, index) => {
      const tags = route.tags?.length
        ? `<ul class="tag-list">${route.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>`
        : '';

      const reasonList = reasons.filter(Boolean).slice(0, 6);
      const mapLink = route.link
        ? route.link
        : `https://www.google.com/maps/dir/?api=1&destination=${route.start.lat},${route.start.lon}`;

      return `
        <article class="route-card" tabindex="0">
          <div class="route-card__header">
            <h3 class="route-card__name">${index === 0 ? '⭐ ' : ''}${route.name}</h3>
            <span class="route-card__score">匹配度 ${Math.round(score)}</span>
          </div>
          <div class="route-card__meta">
            <span>${route.city}</span>
            <span>距离 ${route.distanceKm} km</span>
            <span>累计爬升 ${route.elevationGain} m</span>
            <span>预计骑行 ${formatDuration(rideMinutes)}</span>
            <span>${route.surface}</span>
            ${
              distanceToStart != null
                ? `<span>距你约 ${formatDistance(distanceToStart)}</span>`
                : ''
            }
          </div>
          <p>${route.notes || '这是一条骑友们口碑不错的路线。'}</p>
          ${route.highlights?.length ? `<p>亮点：${route.highlights.join('、')}</p>` : ''}
          ${route.bestTimeOfDay ? `<p>推荐时段：${route.bestTimeOfDay}</p>` : ''}
          ${tags}
          ${
            reasonList.length
              ? `<ul class="route-card__reasons">${reasonList
                  .map((reason) => `<li>${reason}</li>`)
                  .join('')}</ul>`
              : ''
          }
          <div class="route-card__actions">
            <a class="btn btn--ghost" href="${mapLink}" target="_blank" rel="noopener">查看地图</a>
            <button type="button" class="btn" data-route="${route.id}">加入我的计划</button>
          </div>
        </article>
      `;
    })
    .join('');
}

function updateTips({ weather, results, focus, effectiveMinutes }) {
  const tips = [];

  if (!state.location) {
    tips.push('点击“使用当前位置”或手动输入经纬度，以便筛选最近路线。');
  }

  if (weather) {
    if (weather.level === 'avoid') {
      tips.push('天气条件不佳，可考虑换日或改成室内骑行台训练。');
    } else if (weather.level === 'caution') {
      tips.push('骑行前检查刹车、胎压与灯光设备，注意风雨变化。');
    } else {
      tips.push('今天天气不错，带上眼镜和手套，享受骑行吧！');
    }
  } else {
    tips.push('获取天气数据后可以提供更精准的建议。');
  }

  if (results && results.length) {
    tips.push(`匹配度最高的是「${results[0].route.name}」，预计用时 ${formatDuration(
      results[0].rideMinutes
    )}。`);
  } else {
    tips.push('尝试调整骑行时间、平均速度或扩大愿意前往的距离范围。');
  }

  if (focus !== 'any') {
    tips.push(`当前偏好：${focusLabel(focus)}。`);
  }

  if (effectiveMinutes < 90) {
    tips.push('时间较紧张，别忘了在骑行前检查补胎工具与灯光。');
  }

  elements.tipList.innerHTML = tips.map((tip) => `<li>${tip}</li>`).join('');
}

function focusLabel(value) {
  switch (value) {
    case 'easy':
      return '放松恢复';
    case 'urban':
      return '城市绿道';
    case 'climb':
      return '爬坡训练';
    case 'endurance':
      return '长距离拉练';
    case 'scenic':
      return '风景打卡';
    default:
      return '不限';
  }
}

function clearRecommendations() {
  elements.recommendations.classList.add('route-list--empty');
  elements.recommendations.innerHTML = `
    <div class="empty-state">
      <p>已清空推荐结果，可以重新填写偏好再试一次。</p>
    </div>
  `;
}

function renderCustomRoutes() {
  if (!state.customRoutes.length) {
    elements.customRouteList.innerHTML = '<li class="empty-state">尚未添加自定义路线。</li>';
    return;
  }

  elements.customRouteList.innerHTML = state.customRoutes
    .map((route, index) => `
      <li class="custom-list__item">
        <strong>${route.name}</strong>
        <span>${route.city || ''}</span>
        <span>距离 ${route.distanceKm} km · 类型 ${focusLabel(route.category)}</span>
        <span>起点：${formatCoordinate(route.start?.lat)}, ${formatCoordinate(route.start?.lon)}</span>
        ${route.highlights?.length ? `<span>亮点：${route.highlights.join('、')}</span>` : ''}
        ${route.notes ? `<span>${route.notes}</span>` : ''}
        <footer>
          <span>支持天气：${weatherFlags(route)}</span>
          <button type="button" data-index="${index}">删除</button>
        </footer>
      </li>
    `)
    .join('');
}

function weatherFlags(route) {
  const flags = [];
  if (route.rainFriendly) flags.push('雨天 ✅');
  if (route.heatFriendly) flags.push('炎热 ✅');
  if (route.coldFriendly) flags.push('寒冷 ✅');
  if (!flags.length) return '默认';
  return flags.join('、');
}

function handleCustomRouteSubmit(event) {
  event.preventDefault();
  const form = elements.customRouteForm;

  const newRoute = {
    id: `custom-${Date.now()}`,
    name: form.routeNameInput.value.trim(),
    city: form.routeCityInput.value.trim(),
    distanceKm: Number(form.routeDistanceInput.value),
    elevationGain: Number(form.routeElevationInput.value) || 0,
    surface: form.routeSurfaceInput.value.trim() || '道路',
    difficulty: '自定义',
    category: form.routeCategorySelect.value,
    start: {
      lat: Number(form.routeLatInput.value),
      lon: Number(form.routeLonInput.value),
    },
    highlights: splitHighlights(form.routeHighlightsInput.value),
    bestTimeOfDay: '',
    notes: form.routeNotesInput.value.trim(),
    rainFriendly: form.routeRainFriendlyInput.checked,
    heatFriendly: form.routeHeatFriendlyInput.checked,
    coldFriendly: form.routeColdFriendlyInput.checked,
    maxWind: 34,
    sheltered: form.routeRainFriendlyInput.checked,
    tags: [],
  };

  if (!newRoute.name || !Number.isFinite(newRoute.distanceKm)) {
    alert('请填写完整的路线名称与距离。');
    return;
  }

  state.customRoutes.push(newRoute);
  saveCustomRoutes(state.customRoutes);
  renderCustomRoutes();
  form.reset();
  alert('路线已保存！');
}

function splitHighlights(text) {
  if (!text) return [];
  return text
    .split(/[、,，]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function handleCustomRouteListClick(event) {
  const target = event.target;
  if (target.matches('button[data-index]')) {
    const index = Number(target.dataset.index);
    if (!Number.isInteger(index)) return;
    const confirmed = confirm('确定要删除这条自定义路线吗？');
    if (!confirmed) return;
    state.customRoutes.splice(index, 1);
    saveCustomRoutes(state.customRoutes);
    renderCustomRoutes();
  }
}

function resetCustomRoutes() {
  const confirmed = confirm('确定要清空所有自定义路线吗？此操作不可撤销。');
  if (!confirmed) return;
  state.customRoutes = [];
  saveCustomRoutes(state.customRoutes);
  renderCustomRoutes();
}

function handleJoinPlanClick(event) {
  const button = event.target.closest('button[data-route]');
  if (!button) return;
  const routeId = button.dataset.route;
  const route = getAllRoutes().find((item) => item.id === routeId);
  if (!route) return;
  const rideMinutes = (route.distanceKm / (Number(elements.speedInput.value) || 20)) * 60;
  alert(`已将「${route.name}」加入计划。预计用时 ${formatDuration(rideMinutes)}。`);
}

function handleManualLocationChange() {
  const lat = Number(elements.latitudeInput.value);
  const lon = Number(elements.longitudeInput.value);
  if (Number.isFinite(lat) && Number.isFinite(lon)) {
    return setLocation({ lat, lon, source: 'manual' });
  }
  return false;
}

function isWeatherStale() {
  if (!state.location) return true;
  if (!state.weather) return true;
  const weatherLocation = state.weather.location;
  if (!weatherLocation) return true;
  const locationChanged =
    Math.abs(weatherLocation.lat - state.location.lat) > 0.0005 ||
    Math.abs(weatherLocation.lon - state.location.lon) > 0.0005;
  const fetchedAt =
    state.weather.fetchedAt instanceof Date
      ? state.weather.fetchedAt
      : new Date(state.weather.fetchedAt);
  const age = Date.now() - fetchedAt.getTime();
  return locationChanged || age > 15 * 60 * 1000;
}

elements.preferenceForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const changed = handleManualLocationChange();
  if (state.location && (changed || isWeatherStale())) {
    try {
      await fetchWeatherForLocation();
    } catch (error) {
      console.error('刷新天气失败', error);
    }
  }
  generateRecommendations();
});

elements.clearResultsBtn.addEventListener('click', (event) => {
  event.preventDefault();
  clearRecommendations();
});

elements.geolocationBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    elements.locationStatus.innerHTML =
      '<h3>定位状态</h3><p class="warn">当前浏览器不支持定位，请手动输入经纬度。</p>';
    return;
  }

  elements.locationStatus.innerHTML = '<h3>定位状态</h3><p>正在尝试获取位置…</p>';
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
        source: 'geolocation',
      });
    },
    (error) => {
      console.warn('定位失败', error);
      elements.locationStatus.innerHTML = `<h3>定位状态</h3><p class="warn">定位失败：${error.message}</p>`;
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
});

elements.latitudeInput.addEventListener('change', handleManualLocationChange);
elements.longitudeInput.addEventListener('change', handleManualLocationChange);

elements.customRouteForm.addEventListener('submit', handleCustomRouteSubmit);
elements.customRouteList.addEventListener('click', handleCustomRouteListClick);
elements.resetCustomRoutes.addEventListener('click', resetCustomRoutes);
elements.recommendations.addEventListener('click', handleJoinPlanClick);

renderCustomRoutes();
updateLocationStatus();
clearRecommendations();

function formatCoordinate(value) {
  if (!Number.isFinite(value)) return '--';
  return Number(value).toFixed(4);
}
