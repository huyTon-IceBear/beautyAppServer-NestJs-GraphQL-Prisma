export declare class CreateBioFactorInput {
    type: string;
    name: string;
    description: string;
    profileId: number;
}
export declare class UpdateBioFactorInput {
    id: number;
    type: string;
    name: string;
    description: string;
}
export declare class CreateProfileInput {
    userEmail: string;
    age?: Nullable<number>;
    gender?: Nullable<string>;
}
export declare class UpdateProfileInput {
    id: number;
    age?: Nullable<number>;
    gender?: Nullable<string>;
}
export declare class CreateUserInput {
    name: string;
    email: string;
    password: string;
}
export declare class UpdateUserInput {
    id: number;
    name: string;
    email: string;
}
export declare class BioFactor {
    id: number;
    type: string;
    name: string;
    description: string;
    profileId: number;
}
export declare abstract class IQuery {
    abstract bioFactors(): Nullable<BioFactor>[] | Promise<Nullable<BioFactor>[]>;
    abstract bioFactor(id: number): Nullable<BioFactor> | Promise<Nullable<BioFactor>>;
    abstract profiles(): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;
    abstract profile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}
export declare abstract class IMutation {
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
export declare class Profile {
    id: number;
    userEmail: string;
    age?: Nullable<number>;
    gender?: Nullable<string>;
    createAt?: Nullable<DateTime>;
}
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
}
export declare type DateTime = any;
declare type Nullable<T> = T | null;
export {};
