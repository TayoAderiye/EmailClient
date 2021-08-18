// const add = (a: number, b: number): number => {
//     return a + b
// }

// const joinStrings = (a: string, b:string): string => {
//     return a + b
// }

// const post: {title: string, daysOld:number, published: boolean} = {
//     title: 'Latest news',
//     daysOld: 10,
//     published: true
// }
// const post = {
//     title: 'Latest news',
//     daysOld: 10,
//     published: true
// }

// interface PostGateKeeper {
//     title: string,
//     daysOld:number,
//     published: boolean
// }

// const printPost = (postToPrint: PostGateKeeper) => {
//     return `${postToPrint.title} (${postToPrint.daysOld} days old)`
// }

// printPost(post)

// class Car {
//     // color: string
//     // year: number

//     constructor(public color: string, private year: number){
//         this.color = color
//         this.year = year
//     }
//     drive(){
//         console.log('vroom')
//     }
// }

// const myCar = new Car('red', 2000)

// myCar.drive()

//console.log(myCar.color, myCar.year)//red, 2000
// console.log(myCar.color)// undefined
// console.log(myCar.year)// undefined

// const Component = (target: any) => {
//     console.log(target)
// }

// @Component
// class Car {}

// import { Car  } from "./Car";

// const myCar = new Car()

// interface Driveable {
//     speed: number,
//     drive(): String

// }

// class Car {
//     speed = 10

//     drive(){
//      console.log(`I am driving at ${this.speed}`)
//     }
// }
// const myCar = new Car ()


// Generic Class

class ValueHolder<TypeOfValue> {
    value: TypeOfValue
}

const numberHolder =new ValueHolder<number>()
numberHolder.value