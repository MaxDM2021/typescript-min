const arrayNumbers: Array<number> = [1, 2, 3, 4, 5]
const arrayStrings: Array<string> = ['Hello', 'Max']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayNumbers)
reverse(arrayStrings)