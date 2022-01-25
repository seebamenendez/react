import camperaOrigen from './multimedia/newIn/IMG_001.JPG'
import vestidoNativo from './multimedia/newIn/IMG_003.JPG'
import camisaOver from './multimedia/newIn/IMG_004.JPG'
import basicaAlgodon from './multimedia/newIn/IMG_005.JPG'
import pants from './multimedia/newIn/IMG_006.JPG'
import pants1 from './multimedia/newIn/IMG_007.JPG'
import galope from './multimedia/newIn/IMG_008.JPG'
import orion from './multimedia/newIn/IMG_009.JPG'
import origen from './multimedia/newIn/IMG_002.JPG'

export const productos = [
    {
        precio: 2690,
        id: "1",
        nombre: "Campera ORIGEN",
        foto: camperaOrigen,
        stock: "9",
        coleccion: "Lucida"
    },
    {
        precio: 2400,
        id: "2",
        nombre: "Vestido NATIVO",
        foto: vestidoNativo,
        stock: "3",
        coleccion: "Origen"
    },
    {
        precio: 1990,
        id: "3",
        nombre: "Camisa OVER",
        foto: camisaOver,
        stock: "4",
        coleccion: "Lucida"
    },
    {
        precio: 1700,
        id: "4",
        nombre: "Básica Algodón",
        foto: basicaAlgodon,
        stock: "3",
        coleccion: "Lucida"
    },
    {
        precio: 2390,
        id: "5",
        nombre: "Sobrecamisa - PANTS",
        foto: pants,
        stock: "3",
        coleccion: "Lucida"
    },
    {
        precio: 2690,
        id: "6",
        nombre: "Campera ORIGEN",
        foto: camperaOrigen,
        stock: "2",
        coleccion: "Lucida"
    },
    {
        precio: 2390,
        id: "7",
        nombre: "Sobrecamisa - PANTS",
        foto: pants1,
        stock: "3",
        coleccion: "Origen"
    },
    {
        precio: 2100,
        id: "8",
        nombre: "Sobrecamisa GALOPE",
        foto: galope,
        stock: "4",
        coleccion: "Origen"
    },
    {
        precio: 2390,
        id: "9",
        nombre: "Pantalón ORION",
        foto: orion,
        stock: "5",
        coleccion: "Transitar"
    },
    {
        precio: 2690,
        id: "14",
        nombre: "Campera ORIGEN",
        foto: camperaOrigen,
        stock: "4",
        coleccion: "Origen"
    },
    {
        precio: 2690,
        id: "10",
        nombre: "Campera ORIGEN",
        foto: origen,
        stock: "4",
        coleccion: "Transitar"
    },
    {
        precio: 2400,
        id: "12",
        nombre: "Vestido NATIVO",
        foto: vestidoNativo,
        stock: "5",
        coleccion: "Transitar"
    }
]

export const getFetch = new Promise((resolve, reject)=>{
    // acciones
    let condicion = true
    if(condicion){
        setTimeout(()=>{
            resolve(productos)
        }, 3000)
    }else{
        reject('error')
    }
})

export const getMock = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 3000)
})
