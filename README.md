![](https://i.ibb.co/p48WrSR/JS-EVENT-LISTENER.png)

This package suitable for ```react```, ```react-native``` or ```javascript``` projects. The source written in javascript without any dependencies.

![](https://img.shields.io/npm/dw/js-event-listener?style=flat-square) ![](https://img.shields.io/github/languages/top/davidkern13/js-event-listener?color=yellow&style=flat-square) ![](https://img.shields.io/github/languages/code-size/davidkern13/js-event-listener?color=green&style=flat-square) ![](https://img.shields.io/badge/test-passing-brightgreen?style=flat-square) ![](https://img.shields.io/badge/Dependencies-0-blueviolet?style=flat-square)  

# Why

Certain situations can make our development as difficult like updates the redux state by returning a new state every time which can cause excessive use of memory, pass down in component three the event as a prop or communication between independent components for example can be bypassed with event listener.

# Instalation

```
npm install --save js-event-listener
```

# Usage Example

The event listener also work across different files in ```react```, ```react-native``` or ```javascript``` apps. All you have to do is import the appropriate function into any file you need and receive or send event. [Check Live Example](https://codesandbox.io/s/js-event-listener-xs0lh?file=/src/App.js)

```JavaScript
import React,{ useEffect } from 'react'; 
import { addEventListener, emitEvent, removeEventListener } from 'js-event-listener';

export default function App() {

  useEffect( () => {
    let id = addEventListener("customEvent", (e) => {
      console.log(e);
    });
    return () => {
      removeEventListener(id);
    }
  },[]);

  let clickEventHandler = () => emitEvent("customEvent", "my first event!");

  return (
    <div className="App">
      <button onClick={clickEventHandler}>Event submit</button>
    </div>
  );
}
```


# API Details

### Functions

Create event.
```JavaScript
addEventListener(eventName, callback);
``` 
Emit event.
```JavaScript
emitEvent(eventType, data);
```
Remove spesific event by eventType or id.
```JavaScript
removeEventListener(eventType);
```
Remove all events.
```JavaScript
removeAllEventListener();
```

### Short

Create event.
```JavaScript
on(eventName, callback);
``` 
Emit event.
```JavaScript
emit(eventType, data);
``` 
Remove spesific event by eventType or id.
```JavaScript
rm(eventType);
``` 
Remove all events.
```JavaScript
rmAll();
``` 

### Params.

| Param  | Type | Return | Description |
| ------------- | ------------- | ------------- | ------------- | 
| eventName | ```String``` | A case-sensitive string representing the event type to listen for. | 
| eventType | ```String``` or ```Number``` | A case-sensitive string or integer number representing the event to be removed. | 
| callback | ```Function``` | The funtion what recieve a notification when an event of the specified type occurs. | 

### Functions.

| Function | Param | Return | Description |
| ------------- | ------------- | ------------- | ------------- | 
| addEventListener | ```String``` & ```Function``` | Id | Create event. | 
| emitEvent | ```String``` or ```Number``` | Nothing | Fire the event. | 
| removeEventListener | ```String``` or ```Number``` | Remove spesific event by name or id. | 
| removeAllEventListener | ```String``` or ```Number``` | Remove all events. | 
