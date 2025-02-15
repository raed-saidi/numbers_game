let rules ={}


function easy(){
     rules = {
        tentatives :3,
        intervalle : [0,10],
        number : Math.floor(Math.random()*11)
    }

}
function medium(){
     rules = {
        tentatives :6,
        intervalle : [0,20],
        number : Math.floor(Math.random()*21)
    }
    
}
function hard(){
     rules = {
        tentatives :10,
        intervalle : [0,30],
        number : Math.floor(Math.random()*31)
    }
}
