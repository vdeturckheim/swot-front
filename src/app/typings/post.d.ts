import {User} from "./user";

export interface Post {
    text: String;
    author?: User;
    guests?: Array<User>;
    swot?: String;
    category: String;
}
