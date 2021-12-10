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
 
 /**
 * Function remove from event object by id
 * @param    {Identity} should be id or event name event to be removed
 * @return   {Boolean} 
 */
 function removeEventListener(identity){
     let _events = ReactNativeEventRegister.events;
     if(checkId(identity)){
         return deleteEventById(identity, _events);
     }
     if(checkName(identity)){
         let id = findEventByName(identity, _events);
         if(id) return deleteEventById(identity, _events);
     }
     return false;
 }
 /**
 * Function remove all events
 * @return   {Boolean} 
 */
 function removeAllEventListener(){
     let _id = ReactNativeEventRegister.id = 0;
     let _events = ReactNativeEventRegister.events.length = 0;
 
     return !_id && !_events ? true : false;
 }
 
 /**
 * Function remove from event object by id
 * @param    {Id,String} Id or String to remove from event object
 * @return   {Boolean} 
 */
 function emitEvent(identity, data){
     let _events = ReactNativeEventRegister.events;
 
     if (!data || !data.length) data = [];
 
     if(checkName(identity)){
         let id = findEventByName(identity, _events);
         if(id)_events[id].handler(data);
     }
     if(checkId(identity)){
         emitByEventId(identity, _events, data);
     }
 }
 
 /**
 * UTILS FUNCTIONS
 */
 
 const emitByEventId = (id, _events, data) => {
     _events[id].handler(data);
 }
 
 const findEventByName = (_name, _events) => {
     for(let [id, name] of Object.entries(_events)){
         if(_events[id] && name === name) return id;
     }
     return false;
 }
 
 const deleteEventById = (id, _events) => {
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
     emitEvent
 }