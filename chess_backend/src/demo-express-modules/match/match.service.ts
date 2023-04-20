import { db } from "../db";
import type { IMatch } from "./match.interface";
import { ObjectId } from "mongodb";
// @ts-ignore
import { checkToken } from "../token";

export function createMatch(matchData: IMatch) {
  // do something to register the user
  void runCreate(matchData).then();
}
export function getMatch(matchId: string) {
  return runGetMatch(new ObjectId(matchId));
}

/*
export function getAllMatch(token: string | undefined){
  if(token == undefined){
    return
  }
  const decode = checkToken(token)
  if (!decode){
    return { status: 500, message: "Authentification required" }
  }
  return runGetAllMatch(decode['id'])
}
*/

// async function runGetAllMatch(id: string){
//   const collection = db.collection('matchs')
//   try {
//     // Enregistrer le nouvel utilisateur dans la collection "users"
//     const match = await collection.find({ players: id})
//     return { status: 201, message: match }
//   }
//   catch (e) {
//     console.log(e)
//     return { status: 500, message: "Match non trouvé" }
//   }
// }

async function runGetMatch(objectId: ObjectId) {
  const collection = db.collection("matchs");
  try {
    // Enregistrer le nouvel utilisateur dans la collection "users"
    const match = await collection.findOne({ _id: objectId });
    return { status: 201, message: match };
  } catch (e) {
    console.log(e);
    return { status: 500, message: "Match non trouvé" };
  }
}

async function runCreate(newMatch: IMatch) {
  const collection = db.collection("matchs");
  try {
    // Enregistrer le nouvel utilisateur dans la collection "users"
    await collection.insertOne(newMatch);
    return { status: 201, message: "Match créé avec succès" };
  } catch (e) {
    console.log(e);
    return { status: 500, message: "Match non créé" };
  }
}

export async function getAllMatches() {
  const collection = db.collection("matchs");
  try {
    const availableMatches: any = [];
    await collection.find({ private: false }).forEach(function (item) {
      availableMatches.push(item);
    });

    return { status: 201, matches: availableMatches };
  } catch (e) {
    console.log(e);
    return { status: 500, message: "Matches non trouvés" };
  }
}
