import { CreateConditionInput } from './dto/create-condition.input';
import { UpdateConditionInput } from './dto/update-condition.input';
export declare class ConditionService {
    create(createConditionInput: CreateConditionInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConditionInput: UpdateConditionInput): string;
    remove(id: number): string;
}
