import {Router} from "./packages.ts";
import {SERVER_NAME} from "./src/config/env.ts";

import {
    userList, userDetail, userCreate, userUpdate, userDelete
} from "./src/controller/user.ts";

const router = new Router();

router.get("/api/v1", (context) => {
    context.response.body = {data: {greetings: `Hello from ${SERVER_NAME}!`}};
});
router.get("/api/v1/user-list", userList)
    .get("api/v1/user-detail:id", userDetail)
    .post("api/v1/user-create", userCreate)
    .patch("api/v1/user-update", userUpdate)
    .delete("api/v1/user-delete:id", userDelete);
export default router;
