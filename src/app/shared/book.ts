export interface Book {
    $key: string;
    name: string;
    email: string;
    telephone: number;
    country: string;
    guest_no: number;
    arrival: Date;
    departure: Date;
    destination: Array<string>;
    message:string
 }
