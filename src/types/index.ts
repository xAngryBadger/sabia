export interface Book {
  id: string
  title: string
  author: string
  category: 'ficcao' | 'nao-ficcao' | 'poesia' | 'classicos'
  price: string
  description: string
  tags: string[]
  coverColor: string
}

export interface Event {
  id: string
  title: string
  date: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
}

export interface Location {
  street: string
  neighborhood: string
  city: string
  state: string
  phone: string
  email: string
  hours: Record<string, { open: string; close: string } | null>
}

export interface BookstoreData {
  name: string
  tagline: string
  founded: number
  description: string
  location: Location
  team: TeamMember[]
  categories: Record<string, Book[]>
  featured: Book[]
  events: Event[]
  social: {
    instagram: string
    facebook: string
    whatsapp: string
  }
}
