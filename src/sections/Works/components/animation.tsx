import { AnimationSequence, stagger } from 'framer-motion'

export const animateWorkIn = (id: string | null) =>
  [
    [
      '.work-title',
      { opacity: 0, x: '-200px' },
      { duration: 0.3, delay: stagger(0.1) },
    ],

    [
      `.full-page-${id}`,
      { opacity: 1, scale: 0.95, pointerEvents: 'auto' },
      { at: '<', delay: 0.3 },
    ],
    ['.active-card .gradient', { opacity: 0, scale: 0 }, { delay: 0.4 }],
    ['.active-card .show-site-btn', { opacity: 0 }, { at: '<' }],
    [
      '.back-to-site-btn',
      { opacity: 1, y: '0px', pointerEvents: 'auto' },
      { at: '<' },
    ],
  ] as AnimationSequence

export const animateWorkOut = (id: string | null) =>
  [
    [
      '.work-title',
      { opacity: 1, x: '0px' },
      { duration: 0.3, delay: stagger(0.05) },
    ],
    [
      `.full-page-${id}`,
      { opacity: 0, scale: 0, pointerEvents: 'none' },
      { at: '<' },
    ],
    ['.active-card .gradient', { opacity: 1, scale: 1 }, { at: '<' }],
    ['.active-card .show-site-btn', { opacity: 1 }, { at: '<' }],
    [
      '.back-to-site-btn',
      { opacity: 0, y: '300px', pointerEvents: 'none' },
      { at: '<' },
    ],
  ] as AnimationSequence
