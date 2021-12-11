/**
* Class-based object what represent id and events values
*/
 class ReactNativeEventRegister {
     static id = 0;
     static events = Object.create(null);
 }
 /**
 * Function add event to event object
 * @param    {String} Name of the event
 * @return   {Int} Id of created event 
 */
 const addEventListener = (name, handler) =>{
     ReactNativeEventRegister.id++;
     let _id = ReactNativeEventRegister.id;
     let _events = ReactNativeEventRegister.events;
     let isValidName = checkName(name);
     let isValidhandler = checkHandler(handler);
     
     if(isValidName && isValidhandler){
         _events[_id] = { name, handler };
     }else{
         return false;
     } 
 
     return _id;
 }
 
 /**
 * Function remove from event object by id
 * @param    {Identity} should be id or event name event to be removed
 * @return   {Boolean} 
 */
 const removeEventListener = (identity) => {
     if(checkId(identity)){
         return deleteEventById(identity);
     }
     if(checkName(identity)){
         let id = findEventByName(identity);
         if(id) return deleteEventById(identity);
     }
     return false;
 }
 /**
 * Function remove all events
 * @return   {Boolean} 
 */
 const removeAllEventListener = () => {
     let _id = ReactNativeEventRegister.id = 0;
     let _events = ReactNativeEventRegister.events.length = 0;
 
     return !_id && !_events ? true : false;
 }
 
 /**
 * Function remove from event object by id
 * @param    {Id,String} Id or String to remove from event object
 * @return   {Boolean} 
 */
 const emitEvent = (identity, data) => {
     if (!data || !data.length) data = [];
     if(checkName(identity)){
         let id = findEventByName(identity);
         if(id) emitByEventId(id, data);
     }
     if(checkId(identity)){
         emitByEventId(identity, data);
     }
 }

/**
*  SHORT    
*/

const on = (name, handler) => {
    return addEventListener(name, handler);
}
const rm = (identity) => {
    return removeEventListener(identity);
}
const rmAll = () => {
    return removeAllEventListener();
}
const emit = (identity, data) => {
    emitEvent(identity, data);
}
 
 /**
 * UTILS FUNCTIONS
 */
 
 const emitByEventId = (id, data) => {
    let _events = ReactNativeEventRegister.events;
     _events[id].handler(data);
 }
 
 const findEventByName = (_name) => {
    let _events = ReactNativeEventRegister.events;
     for(let [id, name] of Object.entries(_events)){
         if(_events[id] && name?.name === _name) return id;
     }
     return false;
 }
 
 const deleteEventById = (id) => {
    let _events = ReactNativeEventRegister.events;
     return delete _events[id];
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
     emitEvent,
     on,
     rm,
     rmAll,
     emit
 }