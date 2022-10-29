import { ConditionService } from './condition.service';
import { CreateConditionInput } from './dto/create-condition.input';
import { UpdateConditionInput } from './dto/update-condition.input';
export declare class ConditionResolver {
    private readonly conditionService;
    constructor(conditionService: ConditionService);
    create(createConditionInput: CreateConditionInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateConditionInput: UpdateConditionInput): string;
    remove(id: number): string;
}
