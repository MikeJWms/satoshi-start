export type OptionsInterface = {
  type: 'link' | 'button' | 'nav'
  label: string
  value?: string | number
  link?: string
  nav?: string
}[]

export type BTCPrice = {
  price: number,
  timestamp: Date
}