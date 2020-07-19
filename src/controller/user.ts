import {User} from "../models/index.ts";

const userList = async ({response}: { response: any }) => {
    const users = await User.all();

    response.status = 200;
    response.body = {data: {users}};
};
const userDetail = async (
    {params, request, response}: { params: any; request: any; response: any },
) => {
    const userId = params.id;
    const user = await User.find(userId);

    response.status = 200;
    response.body = {data: {user}};
};
const userCreate = async (
    {request, response}: { request: any; response: any },
) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = {msg: "Invalid data"};
        return;
    }

    const {value: {name, email, password}} = await request.body();

    const data = {"name": name, "email": email, "password": password};

    await User.create(data);
    response.status = 200;
    response.body = {data: {"message": "User created successfully"}};
};
const userUpdate = async ({request, response}: { request: any; response: any }) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = {msg: "Invalid data"};
        return;
    }

    const {value: {name, email}} = await request.body();

    const data = {"name": name, "email": email};

    await User.update(data);
    response.status = 200;
    response.body = {data: {"message": "User updated successfully"}}
};
const userDelete = async (
    {params, request, response}: { params: any; request: any; response: any },
) => {
    const userId = params.id;
    const user = await User.deleteById(userId);

    response.status = 200;
    response.body = {data: {message: "Deleted successfully", user}};
};

export {userList, userDetail, userCreate, userUpdate, userDelete}
