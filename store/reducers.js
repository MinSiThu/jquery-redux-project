

const initialState = {color:'',element:'.nav-bar'};

function reducers(state=initialState,action){
    switch(action.type){
        case 'RED':
        return {...state,...{color:action.color}};

        case "BLUE":
        return {...state,...{color:action.color}};

        case 'GREEN':
        return {...state,...{color:action.color}};

        case 'GRAY':
        return {...state,...{color:action.color}};

        case 'ELEMENT':
        return {...state,...{element:action.element}};
    }
}

let store = Redux.createStore(reducers);
store.subscribe(function(){
    render(store.getState());
})

function render(state){
    console.log(state);
    $(state.element).css({backgroundColor:state.color});
}

