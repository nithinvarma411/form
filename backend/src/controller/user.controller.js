import { User } from "../model/user.model.js";

const saveDetails = async (req, res) => {
    try {
        const { name, description, price, quantity } = req.body;
        if (!(name && description && price && quantity)) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const user = new User({ name, description, price, quantity });
        await user.save();
        return res.status(200).send(user);
    } catch (error) {
        console.error("Error in saving", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

const showDetails = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching details", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

export { saveDetails, showDetails };
