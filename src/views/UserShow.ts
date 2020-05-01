import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps>{
    template(): string {
        return `
            <div>
                <h1>user detail</h1>
                <div>user name: ${this.model.get('name')}</div>
                <div>user age: ${this.model.get('age')}</div>
            </div>        
        `;
    }
}
