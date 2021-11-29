export class User {
    id: number | undefined;
    email: string | undefined;
    name: string | undefined;
    connections: any[] | undefined;
    roles: any[] | undefined;
    authorities: any[] | undefined;
    username: string | undefined;
    accountNonExpired: boolean | undefined;
    accountNonLocked: boolean | undefined;
    credentialsNonExpired: boolean | undefined;
    enabled: boolean | undefined;
}