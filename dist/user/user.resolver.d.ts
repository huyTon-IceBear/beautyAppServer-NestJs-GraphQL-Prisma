import { CreateUserInput, UpdateUserInput } from 'src/types/graphql';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserInput: CreateUserInput): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
    }, never>;
    update(updateUserInput: UpdateUserInput): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
}
