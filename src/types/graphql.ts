
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateProfileInput {
    userEmail: string;
}

export class UpdateProfileInput {
    id: number;
}

export class CreateUserInput {
    name: string;
    email: string;
}

export class UpdateUserInput {
    id: number;
    name: string;
    email: string;
}

export class Profile {
    id: number;
    userEmail: string;
}

export abstract class IQuery {
    abstract profiles(): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;

    abstract profile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createProfile(createProfileInput: CreateProfileInput): Profile | Promise<Profile>;

    abstract updateProfile(updateProfileInput: UpdateProfileInput): Profile | Promise<Profile>;

    abstract removeProfile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: number;
    name: string;
    email: string;
}

type Nullable<T> = T | null;
