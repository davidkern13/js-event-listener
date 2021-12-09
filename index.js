class ReactNativeEventRegister {
    static id = 0;
    static events = Object.create(null);
}

function addEventListener(name, handler){
    ReactNativeEventRegister.id++;
    let _id = ReactNativeEventRegister.id;
    let _events = ReactNativeEventRegister.events;
    let isValidName = checkName(name);
    let isValidhandler = checkHandler(handler);
    
    if(isValidName && isValidhandler){
        let data = {
            name,
            handler
        };
        _events[_id] = data;
    }else{
        return false;
    } 

    return _id;
}

function removeEventListener(id){
    let _events = ReactNativeEventRegister.events;
    if(checkId(id)){
        return delete _events[id];
    }
    return false;
}

function removeAllEventListener(){
    let _id = ReactNativeEventRegister.id = 0;
    let _events = ReactNativeEventRegister.events.length = 0;

    return !_id && !_events ? true : false;
}

function emitEvent(identity, data){
    let _events = ReactNativeEventRegister.events;

    if (!data || !data.length) data = [];

    if(checkName(identity)){
        emitByEventName(identity, _events, data);
    }
    if(checkId(identity)){
        emitByEventId(identity, _events, data);
    }
}

const emitByEventName = (name, _events, data) => {
    Object.keys(_events).forEach( (id) => {
        if(_events[id] && _events[id].name === name){
            _events[id].handler(data);
        }
    });
}
const emitByEventId = (id, _events, data) => {
    _events[id].handler(data);
}

const checkName = (name) => {
    return (typeof name === "string");
}

const checkHandler = (handler) => {
    return (typeof handler === "function");
}

const checkId = (id) => {
    return (typeof id === "number");
}

module.exports = {
    addEventListener,
    removeEventListener,
    removeAllEventListener,
    emitEvent
}