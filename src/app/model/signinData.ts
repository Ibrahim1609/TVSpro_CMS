export class SignInData {
    private login: any;
    private password: string;

    constructor(login: any, password: string) {
        this.login = login;
        this.password = password;
    }

    getLogin(): any {
        return this.login;
    }

    getPassword(): string {
        return this.password;
    }

    // getMobile(): number {
    //     return this.Mobile;
    // }
}