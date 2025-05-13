import { Samba } from "./constructors.js";

// Создадим робот пылесос Samba.
const SambaInst = new Samba(101);

// Попробуем обратиться к стандартному методу toString, хоть мы
// его и не объявляли ни в одном из объектов.
console.log(SambaInst.toString());

// Создадим пустой объект без прототипа.
const SambaObjinst = Object.create(null);

// Попробуем обратиться к стандартному методу toString и
// посмотреть на свойство __proto__
console.log(SambaObjinst.toString);
console.log(SambaObjinst.__proto__);