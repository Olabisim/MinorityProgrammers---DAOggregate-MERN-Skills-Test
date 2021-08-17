import bcrypt from "bcryptjs";

const users = [
    {
        wallet: bcrypt.hash("12000", 10)
    },
    {
        wallet: bcrypt.hash("14000", 10)
    },
    {
        wallet: bcrypt.hash("16000", 10)
    },
]

export default users;
