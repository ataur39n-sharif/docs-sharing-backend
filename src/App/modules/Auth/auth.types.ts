import {Model, Types} from "mongoose";

export enum ERole {
    admin = 'admin',
    administration = 'administration',
    editor = 'editor',
    customer = 'customer',
    user='user'
}

export enum EAccountStatus {
    pending = 'pending',
    active = 'active',
    blocked = 'blocked',
}

export interface IAuthProperty {
    _id?: string | Types.ObjectId
    email: string
    phone: string
    password: string
    uid: Types.ObjectId
    role: ERole,
    status: EAccountStatus,
    createdAt?: string
    updatedAt?: string
}

export interface IAuthModel extends Model<IAuthProperty> {
    isUserExist(key: keyof IAuthProperty, value: string | number | boolean): Promise<boolean>;
}