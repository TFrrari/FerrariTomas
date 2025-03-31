var persona1= {
    nombre:"Tomas" ,
    apellido:"ferrari",
    edad:23,
    dni:43828097,
    colores:["rojo","amarillo","blanco"] }
   
 var persona2= {
    nombre:"mateo" ,
    apellido:"ferrari",
    edad:19,
    dni:44555668,
    colores:["negro","azul","blanco"] }
    
function edadycolor(persona1,persona2) 
{
    if (persona1.edad > persona2.edad) 
    {
        console.log(persona1.nombre,persona1.apellido,"es mayor que",persona2.nombre,persona2.apellido)
        for(let i=0; i<persona1.colores.length;i++)
            {
                if (persona1.colores[i] === "azul") 
                {
                    console.log("A ",persona1.nombre,"le gusta el color azul")
                } else {
                    console.log("A ",persona1.nombre,"NO le gusta el color azul")
                }
            } 
    }
        else 
    {
        console.log(persona2.nombre,persona2.apellido,"es mayor que",persona1.nombre,persona1.apellido) 
        for(let i=0; i<persona2.colores.length;i++)
            {
                if (persona2.colores[i] === "azul") 
                {
                    console.log("A ",persona2.nombre,"le gusta el color azul")
                } else {
                    console.log("A ",persona2.nombre,"NO le gusta el color azul")
                }
            }  
    }

    
    
}
edadycolor(persona1,persona2)