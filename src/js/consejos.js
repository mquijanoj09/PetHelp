import Perro from '../img/Icons/Perro.svg'
import Gato from '../img/Icons/Gato.svg'
import Roedor from '../img/Icons/Roedor.svg'

export const consejos = [
    {
        "nombre": "Hidratación adecuada",
        "consejo": "Asegúrate de que tu mascota siempre tenga acceso a agua fresca y limpia. Cambia el agua al menos una vez al día.",
        "tipo_mascota": [Perro, Gato, Roedor]
    },
    {
        "nombre": "Cepillado regular",
        "consejo": "Cepilla a tu perro o gato al menos una vez por semana para evitar enredos y reducir la cantidad de pelo en tu casa.",
        "tipo_mascota": [Perro, Gato]
    },
    {
        "nombre": "Corte de uñas",
        "consejo": "Recorta las uñas de tu mascota regularmente para evitar que se lastime o que arañe los muebles.",
        "tipo_mascota": [Perro, Gato]
    },
    {
        "nombre": "Limpieza de la jaula",
        "consejo": "Limpia la jaula de tu roedor al menos una vez a la semana para mantener un ambiente saludable.",
        "tipo_mascota": [Roedor]
    },
    {
        "nombre": "Ejercicio diario",
        "consejo": "Asegúrate de que tu perro haga ejercicio diariamente para mantener su salud física y mental.",
        "tipo_mascota": [Perro]
    },
    {
        "nombre": "Control de bolas de pelo",
        "consejo": "Para prevenir bolas de pelo, cepilla a tu gato regularmente y considera añadir alimentos con fibra a su dieta.",
        "tipo_mascota": [Gato]
    },
    {
        "nombre": "Juguetes para roedores",
        "consejo": "Proporciona juguetes seguros a tu roedor para que pueda desgastar sus dientes y mantenerse entretenido.",
        "tipo_mascota": [Roedor]
    }
]
