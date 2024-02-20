const saltRounds = 10;
import bcrypt from "bcryptjs";
import User from "../models/user.js";

export const userManager = {
  create: async (t) => {
    let user = await User.create(t);
    return user ? user : false;
  },

  getByEmail: async (email) => {
    // console.log(email,"email")
    const t = await User.findOne({
      where: {
        email,
      },
    });
    return t ? t : false;
  },
  hashedPassword: async (password) => {
    const t = await bcrypt.hash(password, saltRounds);
    
    return t ? t : false;
  },
//   comparePassword: async (password, hash) => {
//     const t = await bcrypt.compare(password, hash);
//     return t? t : false;
//   },
};
