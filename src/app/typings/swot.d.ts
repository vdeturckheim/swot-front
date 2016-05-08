import {MongoObject} from "./mongoObject";
import {User} from "./user";

export interface SWOT extends MongoObject{
    name: String;
    owner?: User;
    guests?: Array<User>;
}
