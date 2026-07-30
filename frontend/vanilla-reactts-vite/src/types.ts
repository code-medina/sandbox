export type Libro = {
    id: string;
    titulo: string;
    descripcion: string;
    precio: number;
    autor: string;
    categoria: string;
    editorial: string;
    stock: number;
    imagen: string
}
export type Cart = {
    idProducto: string,
    cantidad: number,
    precio: number
    stock: number
}
export type User = {
    id: string,
    password: string,
    email: string,
    rol: string
}
export type UserWithoutPassword=Omit<User,"password">
export type UserWithoutId=Omit<User,"id">