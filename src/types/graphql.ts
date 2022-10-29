
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateBioFactorInput {
    type: string;
    name: string;
    description: string;
    profileId: number;
}

export class UpdateBioFactorInput {
    id: number;
    type: string;
    name: string;
    description: string;
}

export class CreateProfileInput {
    userEmail: string;
    age?: Nullable<number>;
    gender?: Nullable<string>;
}

export class UpdateProfileInput {
    id: number;
    age?: Nullable<number>;
    gender?: Nullable<string>;
}

export class CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    id: number;
    name: string;
    email: string;
}

export class BioFactor {
    id: number;
    type: string;
    name: string;
    description: string;
    profileId: number;
}

export abstract class IQuery {
    abstract bioFactors(): Nullable<BioFactor>[] | Promise<Nullable<BioFactor>[]>;

    abstract bioFactor(id: number): Nullable<BioFactor> | Promise<Nullable<BioFactor>>;

    abstract profiles(): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;

    abstract profile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createBioFactor(createBioFactorInput: CreateBioFactorInput): BioFactor | Promise<BioFactor>;

    abstract updateBioFactor(updateBioFactorInput: UpdateBioFactorInput): BioFactor | Promise<BioFactor>;

    abstract removeBioFactor(id: number): Nullable<BioFactor> | Promise<Nullable<BioFactor>>;

    abstract createProfile(createProfileInput: CreateProfileInput): Profile | Promise<Profile>;

    abstract updateProfile(updateProfileInput: UpdateProfileInput): Profile | Promise<Profile>;

    abstract removeProfile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Profile {
    id: number;
    userEmail: string;
    age?: Nullable<number>;
    gender?: Nullable<string>;
    createAt?: Nullable<DateTime>;
}

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
