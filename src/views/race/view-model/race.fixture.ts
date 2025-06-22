export const HORSE_NAMES_POOL: readonly string[] = [
  'Thunder Strike',
  'Lightning Bolt',
  'Silver Arrow',
  'Golden Flame',
  'Midnight Express',
  'Storm Chaser',
  'Fire Spirit',
  'Wind Walker',
  'Shadow Hunter',
  'Star Runner',
  'Royal Thunder',
  'Diamond Flash',
  'Crimson Fury',
  'Azure Dream',
  'Emerald Knight',
  'Copper Blaze',
  'Iron Will',
  'Steel Storm',
  'Velvet Touch',
  'Crystal Clear',
  'Blazing Sun',
  'Moon Shadow',
  'Dawn Rider',
  'Dusk Runner',
  'Night Phantom',
  'Morning Glory',
  'Evening Star',
  'Sunset Warrior',
  'Sunrise Hope',
  'Twilight Magic',
  'Black Beauty',
  'White Lightning',
  'Red Tornado',
  'Blue Thunder',
  'Green Arrow',
  'Yellow Flash',
  'Purple Rain',
  'Orange Crush',
  'Pink Panther',
  'Brown Sugar',
  'Wild Spirit',
  'Free Wind',
  'Brave Heart',
  'Strong Will',
  'Fast Lane',
  'Quick Silver',
  'Speed Demon',
  'Race King',
  'Victory Dance',
  "Champion's Pride",
  'Noble Quest',
  'Royal Charge',
  'Majestic Force',
  'Elegant Grace',
  'Powerful Strike',
  'Gentle Giant',
  'Swift Arrow',
  'Mighty Storm',
  'Fearless Soul',
  'Dancing Flame',
  'Flying Eagle',
  'Roaring Lion',
  'Jumping Jack',
  'Running River',
  'Flowing Stream',
  'Mountain Peak',
  'Valley Wind',
  'Desert Storm',
  'Ocean Wave',
  'Forest King',
  'Prairie Fire',
  'Arctic Fox',
  'Tropical Breeze',
  'Northern Star',
  'Southern Cross',
  'Eastern Sun',
  'Western Wind',
  'Central Power',
  'Atlas Strong',
  'Zeus Thunder',
  'Apollo Sun',
  'Diana Moon',
  'Mars Warrior',
  'Venus Beauty',
  'Mercury Speed',
  'Jupiter Giant',
  'Saturn Ring',
  'Neptune Sea',
  'Pluto Shadow',
  'Comet Tail',
  'Meteor Strike',
  'Galaxy Runner',
  'Universe Power',
  'Infinity Loop',
  'Quantum Leap',
  'Turbo Boost',
  'Nitro Rush',
  'Rocket Fuel',
  'Jet Stream',
  'Sonic Boom',
  'Laser Focus',
  'Electric Shock',
  'Magnetic Force',
] as const

export const ROUND_PER_RACE: number = 6 as const
/**
 * The are 6 rounds in a race and they must occur at different lengths
 */
export const ROUND_DISTANCES: readonly number[] = [1200, 1400, 1600, 1800, 2000, 2200] as const

export const HORSE_COLORS: readonly string[] = [
  '#FF5733', // Red
  '#33FF57', // Green
  '#3357FF', // Blue
  '#F1C40F', // Yellow
  '#9B59B6', // Purple
  '#E67E22', // Orange
  '#1ABC9C', // Teal
  '#34495E', // Dark Blue
  '#2ECC71', // Light Green
  '#E74C3C', // Light Red
  '#8E44AD', // Dark Purple
  '#F39C12', // Dark Orange
  '#2980B9', // Dark Teal
  '#D35400', // Dark Yellow
  '#C0392B', // Dark Red
  '#27AE60', // Dark Green
  '#8E44AD', // Dark Purple
  '#F1C40F', // Light Yellow
  '#2C3E50', // Dark Blue
  '#7F8C8D', // Gray
] as const

export const MIN_HORSE_SPEED: number = 10
