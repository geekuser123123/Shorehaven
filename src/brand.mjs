// Brand mark — a smooth "shore stone" pill: a sand sun setting into calm lake water.
/** Logo mark SVG. `id` must be unique per page instance. */
export function markSvg(id = 'sh', cls = 'brand__mark') {
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#243F57"/><stop offset="1" stop-color="#15283A"/></linearGradient><clipPath id="${id}c"><rect x="1.5" y="8.5" width="45" height="31" rx="15.5"/></clipPath></defs><rect x="1.5" y="8.5" width="45" height="31" rx="15.5" fill="url(#${id})"/><g clip-path="url(#${id}c)"><circle cx="24" cy="25.5" r="8.5" fill="#E9C88F"/><rect x="0" y="25.5" width="48" height="16" fill="#1B6573"/><path d="M9 29.5q3.75 -2 7.5 0t7.5 0 7.5 0 7.5 0" stroke="#9FD3DC" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M13 34q2.75 -1.6 5.5 0t5.5 0 5.5 0 5.5 0" stroke="#F4B9A0" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".9"/></g></svg>`;
}

export const markFile = () =>
  markSvg('g', 'mark').replace('<svg class="mark"', '<svg xmlns="http://www.w3.org/2000/svg"').replace(' aria-hidden="true" focusable="false"', '');
