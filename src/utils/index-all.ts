import PetCard from '../components/PetCard.astro'
import Layout from '../components/Layout.astro'
import { turso } from '../utils/database'
import type { Pet } from '../../turso/types'

export const prerender = false

const data = await turso.execute(`SELECT * FROM pets order by snuggles desc`)
const pets = (data.rows || []) as unknown as Pet[]