export default interface IStudent {
    [x: string]: any;
    _id?: string;
    completeName: string;
    registrationNumber: string;
    birthday: string;
    phone: string;
    period: string;
    turn: string;
    course: string;
    knowledge: string[];
    isAvailable: boolean;
    interest: string[];
    email: string;
    password: string;
    confirmPassword?: string;
    tutor?: string[];
    student?: string[];
    updatedAt?: Date;
  }