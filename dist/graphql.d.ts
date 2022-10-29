export declare class CreateUserInput {
    name: string;
}
export declare class UpdateUserInput {
    id: number;
    name: string;
}
export declare class User {
    id: number;
    name: string;
}
export declare abstract class IQuery {
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}
export declare abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;
    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}
declare type Nullable<T> = T | null;
export {};
