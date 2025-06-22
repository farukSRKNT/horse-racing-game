// src/components/molecules/horse-list/horse-list.utils.ts
import type { HorseCondition, HorseColor } from './horse-list.abstract'

/**
 * Generates a consistent color for a horse based on its name
 * Uses hash function to ensure same name always gets same color
 */
export const generateHorseColor = (horseName: string): HorseColor => {
  // Simple hash function
  let hash = 0
  for (let i = 0; i < horseName.length; i++) {
    const char = horseName.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32-bit integer
  }

  // Convert hash to HSL color for better color distribution
  const hue = Math.abs(hash) % 360
  const saturation = 60 + (Math.abs(hash) % 30) // 60-90%
  const lightness = 45 + (Math.abs(hash) % 20) // 45-65%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

/**
 * Generates a mock condition score for a horse based on its name
 * Uses hash to ensure consistency but adds some randomness
 */
export const generateCondition = (horseName: string): HorseCondition => {
  // Simple hash function similar to color generation
  let hash = 0
  for (let i = 0; i < horseName.length; i++) {
    const char = horseName.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }

  // Generate condition between 1-100 based on hash
  const condition = (Math.abs(hash) % 100) + 1
  return Math.max(1, Math.min(100, condition))
}

/**
 * Validates if a condition score is within valid range
 */
export const isValidCondition = (condition: number): boolean => {
  return condition >= 1 && condition <= 100 && Number.isInteger(condition)
}

/**
 * Validates if a color is a valid hex color code
 */
export const isValidHexColor = (color: string): boolean => {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexColorRegex.test(color)
}

/**
 * Validates if a color is a valid HSL color
 */
export const isValidHslColor = (color: string): boolean => {
  const hslColorRegex = /^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/
  return hslColorRegex.test(color)
}
