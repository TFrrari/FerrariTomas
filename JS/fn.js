
var persona1 = {
    nombre:"Tomas",
    apellido:"ferrari",
    edad:23,
    dni:43828097,
    colores:["rojo","negro","blanco"]
    }
var persona2 = {
        nombre:"Mateo",
        apellido:"ferrari",
        edad:18,
        dni:43828097,
        colores:["amarillo","azul","negro"]
        }
            function edades (persona2, persona1){
                var mayor
                if (persona1.edad>persona2.edad) 
                {
                console.log(persona1.nombre," es mayor a ",persona2.nombre)
                if (persona1.colores="azul")
                (console.log("le gusta el color azul"))
                else
                (console.log("no le gusta el color azul"))
                }
                else  
                {
                console.log(persona2.nombre," es mayor a ",persona1.nombre)
                if (persona1.colores="azul")
                (console.log("le gusta el color azul"))
                else
                (console.log("no le gusta el color azul"))
                }
                return edades;
             
            }
edades(persona1,persona2)
            
