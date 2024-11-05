import { BaseEntity } from 'typeorm';
type IAccount = {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};
export declare class Account extends BaseEntity implements IAccount {
    id: string;
    email: string;
    password: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    isDeleted: boolean;
}
export {};
