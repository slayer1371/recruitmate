// src/components/lib/utils.jsx
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to merge class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Array of day names
export const dayNames = [
  'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
];
