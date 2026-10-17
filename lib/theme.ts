export type Theme = 'dark' | 'light'

export const PALETTES = {
  dark: {
    bg: '8,7,13',
    aurora: ['rgba(79,227,201,0.06)', 'rgba(124,111,255,0.05)', 'rgba(192,132,252,0.045)', 'rgba(56,189,248,0.045)'],
    trailStart: 'rgba(140,123,255,0.0)',
    trailEnd: 'rgba(79,227,201,0.35)',
  },
  light: {
    bg: '247,246,252',
    aurora: ['rgba(13,148,136,0.10)', 'rgba(91,75,214,0.09)', 'rgba(168,85,247,0.08)', 'rgba(14,165,233,0.08)'],
    trailStart: 'rgba(91,75,214,0.0)',
    trailEnd: 'rgba(13,148,136,0.45)',
  },
}

export const getTheme = (): Theme =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'