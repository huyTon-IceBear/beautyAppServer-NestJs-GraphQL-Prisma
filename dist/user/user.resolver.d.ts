import { UpdateUserInput } from 'src/types/graphql';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): import(".prisma/client").PrismaPromise<{
        id: number;
        email: string;
        name: string;
        role: import(".prisma/client").Role;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    update(updateUserInput: UpdateUserInput): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
}
