import { Authentication, LoginOptions, VerifyUserResponse } from "./aunthe";

export default class AuthenticationImpl implements Authentication {
    private API_ENDPOINT = "http://ems-production-81f8.up.railway.app/api/loginuser";
    
    async register(userData: NewUser): Promise<User> {
        const endpoint = `${this.API_ENDPOINT}/register`;
        const requestOptions: RequestInit = {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }
        
        const response = await fetch(endpoint, requestOptions);
        const resultPayload = await response.json();
        const user = resultPayload.payload;
        return user;
    }
    verify(code: string): VerifyUserResponse {
        throw new Error("Method not implemented.");
    }
    login({ email: password }: LoginOptions): User {
        throw new Error("Method not implemented.");
    }
}