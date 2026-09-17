/**
 * Material Symbols Outlined -- name -> Unicode codepoint.
 *
 * The font is normally driven by "ligature" text (writing the literal name
 * "chevron_left" and letting the font's OpenType "liga" feature substitute
 * the glyph). That substitution is unreliable in Safari/iOS in particular --
 * confirmed live on breathe-life-healing-centers-h4w8: reviews-carousel
 * arrows and Why-Breathe card icons rendered as literal words
 * ("chevron_left", "join_inner", "cottage") instead of icons on a real
 * iPhone, despite rendering correctly in every desktop/Chrome check.
 *
 * Looking a name up here and rendering its codepoint character instead
 * sidesteps ligature substitution entirely -- the glyph is selected by the
 * font's cmap like any ordinary character, which every browser supports.
 * Codepoints sourced from google/material-design-icons' own
 * MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].codepoints file.
 */
const CODEPOINTS: Record<string, string> = {
  air: "\uefd8",
  apartment: "\uea40",
  article: "\uef42",
  assignment_ind: "\ue85e",
  assignment: "\ue85d",
  badge: "\uea67",
  balance: "\ueaf6",
  bedtime: "\uf159",
  biotech: "\uea3a",
  bolt: "\uea0b",
  calendar_month: "\uebcc",
  call: "\uf0d4",
  check_circle: "\uf0be",
  check: "\ue668",
  checklist: "\ue6b1",
  checkroom: "\uf19e",
  chevron_left: "\ue5cb",
  chevron_right: "\ue5cc",
  close: "\ue5cd",
  contact_page: "\uf22e",
  content_paste: "\ue14f",
  cottage: "\ue587",
  description: "\ue873",
  diamond: "\uead5",
  directions_walk: "\ue536",
  diversity_3: "\uf8d9",
  eco: "\uea35",
  emergency: "\ue1eb",
  event_available: "\ue614",
  fact_check: "\uf0c5",
  family_restroom: "\uf1a2",
  favorite: "\ue87e",
  flight_land: "\ue904",
  flight: "\ue539",
  forum: "\ue8af",
  fullscreen: "\ue5d0",
  grain: "\ue3ea",
  grass: "\uf205",
  groups: "\uf233",
  handshake: "\uebcb",
  healing: "\ue3f3",
  hiking: "\ue50a",
  history_edu: "\uea3e",
  home_health: "\ue4b9",
  home_work: "\uf030",
  hub: "\ue9f4",
  info: "\ue88e",
  join_inner: "\ueaf4",
  layers: "\ue53b",
  liquor: "\uea60",
  list: "\ue896",
  local_bar: "\ue540",
  local_pharmacy: "\ue550",
  location_on: "\uf1db",
  lock: "\ue899",
  luggage: "\uf235",
  mail: "\ue159",
  medication_liquid: "\uea87",
  medication: "\uf033",
  monitor_heart: "\ueaa2",
  music_note: "\ue405",
  newspaper: "\ueb81",
  open_in_new: "\ue89e",
  palette: "\ue40a",
  phone: "\uf0d4",
  photo_camera: "\ue412",
  pill: "\ue11f",
  play_circle: "\ue1c4",
  privacy_tip: "\uf0dc",
  psychology: "\uea4a",
  rate_review: "\ue560",
  restaurant: "\ue56c",
  route: "\ueacd",
  savings: "\ue2eb",
  school: "\ue80c",
  science: "\uea4b",
  self_improvement: "\uea78",
  sentiment_dissatisfied: "\ue811",
  shield: "\ue9e0",
  soap: "\uf1b2",
  spa: "\ueb4c",
  support_agent: "\uf0e2",
  target: "\ue719",
  trending_down: "\ue8e3",
  trending_up: "\ue8e5",
  tune: "\ue429",
  vaccines: "\ue138",
  verified: "\uef76",
  videocam: "\ue04b",
  volunteer_activism: "\uea70",
  wb_sunny: "\ue430",
  work: "\ue943",
};

export function msymChar(name: string): string {
  const ch = CODEPOINTS[name];
  if (!ch) throw new Error(`Unknown Material Symbol: "${name}" -- add it to src/lib/icons.ts`);
  return ch;
}
