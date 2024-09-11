"use server";
import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utlits";
import { users } from "../appwrite.config";

export const createUser = async (user: CreateUserParams) => {

  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.name,
      user.phone,
      undefined,
    );
    return parseStringify(newUser);
  } catch (error: any) {
    if (error && error?.code === 490) {
      const documents = await users.list([Query.equal("email", user.email)]);
      return documents?.users[0];
    } else {
      throw error;
    }
  }
};
