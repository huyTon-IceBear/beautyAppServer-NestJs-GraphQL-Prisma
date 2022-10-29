export declare class CreateProfileInput {
    userEmail: string;
}
export declare class UpdateProfileInput {
    id: number;
}
export declare class CreateUserInput {
    name: string;
    email: string;
}
export declare class UpdateUserInput {
    id: number;
    name: string;
    email: string;
}
export declare class Profile {
    id: number;
    userEmail: string;
}
export declare abstract class IQuery {
    abstract profiles(): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;
    abstract profile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}
export declare abstract class IMutation {
    abstract createProfile(createProfileInput: CreateProfileInput): Profile | Promise<Profile>;
    abstract updateProfile(updateProfileInput: UpdateProfileInput): Profile | Promise<Profile>;
    abstract removeProfile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;
    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}
export declare class User {
    id: number;
    name: string;
    email: string;
}
declare type Nullable<T> = T | null;
export {};
