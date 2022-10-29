import { CreateProductInput } from './create-product.input';
declare const UpdateProductInput_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductInput>>;
export declare class UpdateProductInput extends UpdateProductInput_base {
    id: number;
}
export {};
