export declare class CreateArticleInput {
    description: string;
    link: string;
    routineId: number;
}
export declare class UpdateArticleInput {
    id: number;
    description: string;
    link: string;
}
export declare class Register {
    email: string;
    password: string;
    name?: Nullable<string>;
}
export declare class Login {
    email: string;
    password: string;
}
export declare class RefreshToken {
    token: JWT;
}
export declare class CreateBioFactorInput {
    type: string;
    name: string;
    description: string;
    profileId?: Nullable<number>;
}
export declare class UpdateBioFactorInput {
    id: number;
    type: string;
    name: string;
    description: string;
}
export declare class CreateProductInput {
    name: string;
    description: string;
    price: number;
    stepId?: Nullable<number>;
}
export declare class UpdateProductInput {
    id: number;
    name?: Nullable<string>;
    description?: Nullable<string>;
    price?: Nullable<number>;
}
export declare class CreateProfileInput {
    userEmail: string;
    age?: Nullable<number>;
    gender?: Nullable<string>;
}
export declare class UpdateProfileInput {
    id: number;
    routineId?: Nullable<number>;
    age?: Nullable<number>;
    gender?: Nullable<string>;
}
export declare class CreateRoutineInput {
    id: number;
}
export declare class CreateStepInput {
    name: string;
    description: string;
    complete: boolean;
    routineId: number;
}
export declare class UpdateStepInput {
    id: number;
    name: string;
    description: string;
    complete: boolean;
}
export declare class UpdateUserInput {
    id: number;
    name: string;
    email: string;
}
export declare class Article {
    id: number;
    description: string;
    link: string;
    routineId?: Nullable<number>;
}
export declare abstract class IQuery {
    abstract articles(): Nullable<Article>[] | Promise<Nullable<Article>[]>;
    abstract article(id: number): Nullable<Article> | Promise<Nullable<Article>>;
    abstract bioFactors(): Nullable<BioFactor>[] | Promise<Nullable<BioFactor>[]>;
    abstract bioFactor(id: number): Nullable<BioFactor> | Promise<Nullable<BioFactor>>;
    abstract products(): Nullable<Product>[] | Promise<Nullable<Product>[]>;
    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;
    abstract profiles(): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;
    abstract profile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;
    abstract routines(): Nullable<Routine>[] | Promise<Nullable<Routine>[]>;
    abstract routine(id: number): Nullable<Routine> | Promise<Nullable<Routine>>;
    abstract steps(): Nullable<Step>[] | Promise<Nullable<Step>[]>;
    abstract step(id: number): Nullable<Step> | Promise<Nullable<Step>>;
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}
export declare abstract class IMutation {
    abstract createArticle(createArticleInput: CreateArticleInput): Article | Promise<Article>;
    abstract updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;
    abstract removeArticle(id: number): Nullable<Article> | Promise<Nullable<Article>>;
    abstract register(register: Register): Auth | Promise<Auth>;
    abstract login(login: Login): Auth | Promise<Auth>;
    abstract refreshToken(refreshToken?: Nullable<RefreshToken>): Token | Promise<Token>;
    abstract createBioFactor(createBioFactorInput: CreateBioFactorInput): BioFactor | Promise<BioFactor>;
    abstract updateBioFactor(updateBioFactorInput: UpdateBioFactorInput): BioFactor | Promise<BioFactor>;
    abstract removeBioFactor(id: number): Nullable<BioFactor> | Promise<Nullable<BioFactor>>;
    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;
    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;
    abstract removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;
    abstract createProfile(createProfileInput: CreateProfileInput): Profile | Promise<Profile>;
    abstract updateProfile(updateProfileInput: UpdateProfileInput): Profile | Promise<Profile>;
    abstract removeProfile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;
    abstract createRoutine(createRoutineInput: CreateRoutineInput): Routine | Promise<Routine>;
    abstract removeRoutine(id: number): Nullable<Routine> | Promise<Nullable<Routine>>;
    abstract createStep(createStepInput: CreateStepInput): Step | Promise<Step>;
    abstract updateStep(updateStepInput: UpdateStepInput): Step | Promise<Step>;
    abstract removeStep(id: number): Nullable<Step> | Promise<Nullable<Step>>;
    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}
export declare class Auth {
    accessToken: JWT;
    refreshToken: JWT;
    name?: Nullable<string>;
    user?: Nullable<User>;
}
export declare class Token {
    accessToken: JWT;
    refreshToken: JWT;
}
export declare class BioFactor {
    id: number;
    type: string;
    name: string;
    description: string;
    profileId?: Nullable<number>;
}
export declare class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stepId: number;
}
export declare class Profile {
    id: number;
    userEmail: string;
    age: number;
    gender: string;
    createAt: DateTime;
    routineId: number;
}
export declare class Routine {
    id: number;
}
export declare class Step {
    id: number;
    complete: boolean;
    name: string;
    description: string;
    routineId?: Nullable<number>;
}
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
}
export declare type JWT = any;
export declare type DateTime = any;
declare type Nullable<T> = T | null;
export {};
