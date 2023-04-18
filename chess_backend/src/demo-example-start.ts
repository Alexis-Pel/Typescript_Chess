interface IPerson {
  name: string
  age?: number
}

interface IIDK {
  name?: string
}

class Person implements IPerson {
  name = ''
  age?: number
  constructor() {}
}

class IDK implements IIDK {
  name?: string
}

type MixedType = Person | IDK

const personA: IPerson = { name: 'A' }

function checkAge(age: number) {
  return age >= 18
}

function sayHello(person: MixedType) {
  if (person instanceof Person)
    console.log(`Hello ${person.name}`, checkAge(person.age || 0))
}
