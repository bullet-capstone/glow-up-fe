export interface Mood {
  id: string
  mood: number
  description: string
  createdAt: string
}

export interface Habit {
  id: string
  name: string
}

export interface HabitEntry {
  id: string
  date: string
  habitId: string
  status: number
}

export interface JournalEntry {
  id: string
  date: string
  content: string
}

export interface User {
  username: string
  moods: Mood[]
  habitEntries: HabitEntry[]
  journalEntries: JournalEntry[]
}
