import { uuid } from "uuidv4";

interface Table {
    id: string;
    name: string;
    description: string;
    fields: string[];
    data: string[][];
}


const tables = [
        {
            id: '1',
            name: "Books",
            description: "Books collection",
            fields: ["Name", "Title", "Link", "Description"],
            data: [
                [
                    "Harry Pooter",
                    "Harry Potter",
                    "https://www.google.com",
                    "Harry Potter Book",
                ]
            ]
        },
        {
            id: '2',
            name: "Games",
            description: "Games played by me",
            fields: ["Name", "Title", "Link", "Description"],
            data: [
                [
                    "Harry Pooter",
                    "Harry Potter",
                    "https://www.google.com",
                    "Harry Potter Book",
                ]
            ]
        }
    ]

export function getTables(userId: string) : Table[] {
    console.log(tables);
    return tables;
}

export function createTable(userId: string, name: string, description: string): string {
    let id = uuid();
    tables.push({
        id,
        name,
        description,
        fields: [],
        data: [],
    })

    return id;
}