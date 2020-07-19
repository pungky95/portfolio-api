import {DataTypes, Model} from "../../packages.ts";

class User extends Model {
    static table = "users";
    static timestamps = true;

    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    };

    static defaults = {
        created_at: new Date().toLocaleString(),
    };
}

export default User;
