import { db } from '../db'
import type { IMatch } from './match.interface'

export function createMatch(matchData: IMatch) {
  // do something to register the user
  void runCreate(matchData).then()
}
async function runCreate(newMatch: IMatch) {
  const collection = db.collection('matchs')
  try {
    // Enregistrer le nouvel utilisateur dans la collection "users"
    await collection.insertOne(newMatch)
    return { status: 201, message: 'Match créé avec succès' }
  }
  catch (e) {
    console.log(e)
    return { status: 500, message: "Match non créé" }
  }
}
