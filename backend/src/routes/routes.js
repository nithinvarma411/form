import { saveDetails, showDetails } from "../controller/user.controller.js";

import {Router} from "express"

const router = Router()


router.route("/add").post(saveDetails)
router.route("/show").get(showDetails)

export default router