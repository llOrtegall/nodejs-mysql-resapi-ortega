import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid'

// TODO: Se encargar de validar los datos de entrada en el core del dominio
export class UserValue implements UserEntity {
    name: string;
    email: string;
    uuid: string;
    description: string;

    constructor({ name, email, description }: { name: string, email: string, description?: string }) {
        this.uuid = uuid();
        this.email = email;
        this.name = name;
        this.description = description ?? 'Default'
    }
}