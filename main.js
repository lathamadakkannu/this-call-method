const car={
    name:"car",

    start(){
        console.log("Start the "+ this.name)
    },
    speedUp(){
        console.log("Speed up the "+ this.name)
    },
    stop(){ 
        console.log("Stop the"+ this.name)
    }
}

const aircarft={
    name:"aircarft",

    fly(){
        console.log("Fly");
    },
}

car.start.call(aircarft)
car.speedUp.call(aircarft)

aircarft.fly()