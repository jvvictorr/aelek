import { MyDatabaseMetod } from "./db/my-database-metodo"
import { myDatabase, myDatabase as myDatabaseA } from "./module_a"

const MyDatabaseClassic = new MyDatabaseMetod;

MyDatabaseClassic.add({ name: "Jakson", age: 35})
MyDatabaseClassic.add({name: "Jeson", age: 20})
MyDatabaseClassic.remove(2)
MyDatabaseClassic.show()

console.log(MyDatabaseClassic === myDatabase)