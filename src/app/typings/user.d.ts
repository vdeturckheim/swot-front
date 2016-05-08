import {MongoObject} from "./mongoObject";

export interface User extends MongoObject {
    name?: String;
    email?: String;
    password?: String;
}
