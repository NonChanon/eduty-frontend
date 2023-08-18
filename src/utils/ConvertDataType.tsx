export function numberToString (req: number) {
    return req as unknown as string;
}

export function stringToNumber (req: string) {
    return req as unknown as number;
}