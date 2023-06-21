/*
console.log(this)
this.lugar = 'contexto global'

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}

saludar('hola', 'Kenai')

const obj = {
    lugar: 'Contexto objeto'
}

saludar.call(obj,'hola','jon')
saludar.call(null,'hola','jon')
saludar.call(this,'hola','jon')

saludar.apply(obj,['adios','Mircha'])
saludar.apply(null,['adios','Mircha'])
saludar.apply(this,['adios','Mircha'])


//METODO BIND(bind)
this.nombre = 'window'

const persona = {
    nombre:'jon',
    saludar: function(){
        console.log(`Hola ${this.nombre}`)
    }
}
persona.saludar()

const otraPersona = {
    //saludar:persona.saludar
    //saludar:persona.saludar.bind(persona)
    saludar:persona.saludar.bind(this),
    
}

otraPersona.saludar()
*/