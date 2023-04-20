import { sign } from "jsonwebtoken";
import { db } from "../db";
import type {
  IUserLoginBody,
  IUserRegisterBody,
  IUFriend,
} from "./user.interface";
// @ts-ignore
import { checkToken } from "../token";
import { Condition, ObjectId } from "mongodb";

interface NewFriend {
  id: Condition<ObjectId> | undefined;
  username: string;
}

export async function login(userData: IUserLoginBody) {
  return await runLogin(userData);
}

export async function getMeService(token: string | undefined) {
  if (token == undefined) {
    return { status: 500, message: "Authentification required" };
  }
  const decodedToken = checkToken(token);
  if (decodedToken) {
    try {
      const collection = db.collection("users");
      const user = await collection.findOne({
        _id: new ObjectId(decodedToken["id"]),
      });
      return { status: 200, message: user };
    } catch (e) {
      console.log(e);
    }
  }
  return { status: 500, message: "Error happened" };
}
export function register(userData: IUserRegisterBody) {
  // do something to register the user
  void runRegister(userData).then();
}

async function runLogin(userData: IUserLoginBody): Promise<object> {
  const collection = db.collection("users");
  const envSecret: any = process.env.SECRET;

  try {
    const user = await collection.findOne({ username: userData.username });
    // Verifier le mot de passe de l'utilisateur
    const passwordMatch = userData.password === user!.password;
    if (!passwordMatch)
      // eslint-disable-next-line unicorn/error-message
      throw new Error();

    return {
      status: 200,
      message: sign({ id: user!._id }, envSecret, {
        expiresIn: "3600s",
      }),
    };
  } catch (e) {
    return {
      status: 418,
      message: "Nom d'utilisateur ou mot de passe incorrect",
    };
  }
}
async function runRegister(newUser: IUserRegisterBody) {
  const collection = db.collection("users");
  try {
    // Enregistrer le nouvel utilisateur dans la collection "users"
    await collection.insertOne(newUser);
    return { status: 201, message: "Utilisateur créé avec succès" };
  } catch (e) {
    console.log(e);
    return {
      status: 500,
      message: "Nom d'utilisateur ou mot de passe incorrect",
    };
  }
}

export async function addFriendToUser(newFriendData: NewFriend) {
  const collection = db.collection("users");
  try {
    // Enregistrer le nouvel utilisateur dans la collection "users"
    const lol = await collection.updateOne(
      { _id: newFriendData.id },
      { $set: { username: newFriendData.username } }
    );

    console.log(lol);

    return { status: 201, message: "Ami ajouté avec succès" };
  } catch (e) {
    console.log(e);
    return {
      status: 500,
      message: "Friends non mis à jour",
    };
  }
}
