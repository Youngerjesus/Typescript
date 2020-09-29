let List : number[] | string[] = [1,2,3 ,null];

let ArrayList : Array<number> = [1,2,3];

let Tuple : [string, number];

Tuple = ["hello", 100];

enum Color{
    Red,
    Green,
    Blue
}

let c : Color = Color.Blue;

let ColorName : string = Color[Color.Blue];

declare const maybe: unknown;

declare function getValue(key: string): any;
