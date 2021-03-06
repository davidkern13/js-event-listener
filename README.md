![](https://i.ibb.co/p48WrSR/JS-EVENT-LISTENER.png)

This package suitable for ```react```, ```react-native``` or ```javascript``` projects. The source written in javascript without any dependencies.

[![Known Vulnerabilities](https://snyk.io/test/npm/js-event-listener/1.0.8/badge.svg?style=flat-square)](https://snyk.io/test/npm/js-event-listener/1.0.8) ![](https://img.shields.io/npm/dw/js-event-listener?style=flat-square) ![](https://img.shields.io/github/languages/top/davidkern13/js-event-listener?color=yellow&style=flat-square) ![](https://img.shields.io/github/languages/code-size/davidkern13/js-event-listener?color=green&style=flat-square) ![](https://img.shields.io/badge/test-passing-brightgreen?style=flat-square) ![](https://img.shields.io/badge/Dependencies-0-blueviolet?style=flat-square)  

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


```JavaScript
// Functions

import { addEventListener, emitEvent, removeEventListener, removeAllEventListener } from 'js-event-listener';

addEventListener(eventName, callback); // create event.
emitEvent(eventType, data); // emit event.
removeEventListener(eventType); // remove spesific event by eventType or id.
removeAllEventListener(); // remove all events.
``` 

```JavaScript
// Short version

import { on, emit, rm, rmAll } from 'js-event-listener';

on(eventName, callback); // create event.
emit(eventType, data); // emit event.
rm(eventType); // remove spesific event by eventType or id.
rmAll(); // remove all events.
``` 


### Params.

| Param | Type | Description |
| ------------- | ------------- | ------------- | 
| eventName | ```String``` | A case-sensitive string representing the event type to listen for. | 
| eventType | ```String``` or ```Number``` | A case-sensitive string or integer number representing the event to be removed. | 
| callback | ```Function``` | The funtion what recieve a notification when an event of the specified type occurs. | 

### Functions.

| Function | Param | Return | Description |
| ------------- | ------------- | ------------- | ------------- | 
| addEventListener | ```String``` AND ```Function``` | Id | Create event. | 
| emitEvent | ```String``` OR ```Number``` | Nothing | Fire the event. | 
| removeEventListener | ```String``` OR ```Number``` | Boolean | Remove spesific event by name or id. | 
| removeAllEventListener | Nothing | Nothing | Remove all events. | 
