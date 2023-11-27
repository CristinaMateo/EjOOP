//Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona{
    constructor(nombre, edad, genero) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
      
    }
    obtDetalles() {
      console.log(`Se llama ${this.nombre}, tiene ${this.edad} años y es ${this.genero}.`);
    }
  }

//Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
  class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre,edad, genero); 
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        super.obtDetalles()
        console.log(`Se ha registrado a ${this.nombre}. Pertenece al ${this.curso} curso y será parte del grupo ${this.grupo}.`)
    }
  }

//Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
  class Profesor extends Persona{
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre,edad, genero); 
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        super.obtDetalles()
        console.log(`Se ha asignado a ${this.nombre} la asignatura ${this.asignatura} que es ${this.nivel}.`)
    }
  }


  let unaPersona = new Persona("Juan", "60", "hombre");
  let nuevaEstudiante = new Estudiante("Andrea","25", "mujer", "quinto", "A")
  let nuevaProfe = new Profesor("Marta","74", "mujer", "lengua", "avanzado")

  unaPersona.obtDetalles()
  nuevaEstudiante.registrar()
  nuevaProfe.asignar()