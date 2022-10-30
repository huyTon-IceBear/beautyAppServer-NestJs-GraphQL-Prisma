import { Login, Register } from 'src/types/graphql';
import { AuthService } from './auth.service';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    register(register: Register): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login(login: Login): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
