import {Schema, model} from "mongoose"

const UserSchema = Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number
})

export const User = model("User", UserSchema)