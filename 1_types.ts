const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = "Hello Typescript"

const numberArray: number[] = [1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']

//Tuple
const contact: [string, number] = ['Vladilen', 1234567]

//Any
let variable:any = 42

variable ='NewString'
variable=[]

//=======

function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Хайзенберг')


//Never
function throwError(message: string): never {
            throw new Error(message)
}


function infinite(): never {
    while(true){

    }
}


type SomeType = string | null | undefined


//Type
type Login = string

const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = "12345"
// const id3: ID = true