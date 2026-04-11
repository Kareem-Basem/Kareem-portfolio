export function createImageFallback(title, subtitle) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="50%" stop-color="#111827" />
          <stop offset="100%" stop-color="#1e1b4b" />
        </linearGradient>
        <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0" />
          <stop offset="50%" stop-color="#38bdf8" stop-opacity="1" />
          <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" />
      <circle cx="230" cy="160" r="180" fill="#38bdf8" fill-opacity="0.14" />
      <circle cx="1010" cy="180" r="200" fill="#8b5cf6" fill-opacity="0.14" />
      <circle cx="920" cy="700" r="220" fill="#22d3ee" fill-opacity="0.10" />
      <rect x="86" y="92" rx="30" ry="30" width="1028" height="716" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" />
      <rect x="140" y="160" rx="16" ry="16" width="920" height="2" fill="url(#line)" />
      <text x="140" y="360" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff">${title}</text>
      <text x="140" y="430" font-family="Inter, Arial, sans-serif" font-size="28" fill="#cbd5e1">${subtitle}</text>
      <text x="140" y="710" font-family="Inter, Arial, sans-serif" font-size="24" fill="#38bdf8">Add your WebP asset in /public/images</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
