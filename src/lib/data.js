"use server"
const { User } = require("./models");
const { connectToDb } = require("./utils");
export const addUser = async (formData) => {
  try {
    const { name, email, message } = Object.fromEntries(formData);
    await connectToDb();
    await User.create({ name, email, message });
    console.log("User added succesfully");
  } catch (err) {
    console.log("can't add user", err);
  }
};
