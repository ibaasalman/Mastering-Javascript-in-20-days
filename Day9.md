

# Summary of what i learned today 🧑‍🏫


## Asynchronous JavaScript & the event loop 🚩 :

JavaScript is:
- Single threaded (one command runs at a time)
- Synchronously executed (each line is run in order the code appears)

Our core JavaScript engine has 3 main parts:
- Thread of execution
- Memory/variable environment
- Call stack
We need to add some new components:
- Web Browser APIs/Node background APIs
- Promises
- Event loop, Callback/Task queue and micro task queue

### Promises

Special objects built into JavaScript that get returned immediately when we make
a call to a web browser API/feature (e.g. fetch) that’s set up to return promises
(not all are)
Promises act as a placeholder for the data we expect to get back from the web
browser feature’s background work

Problems
- 99% of developers have no idea how they’re working under the hood
- Debugging becomes super-hard as a result
- Developers fail technical interviews
Benefits
- Cleaner readable style with pseudo-synchronous style code
- Nice error handling process

### We have rules for the execution of our asynchronously delayed code:

Hold promise-deferred functions in a microtask queue and callback function in a
task queue (Callback queue) when the Web Browser Feature (API) finishes
Add the function to the Call stack (i.e. run the function) when:
  - Call stack is empty & all global code run (Have the Event Loop check this condition)
Prioritize functions in the microtask queue over the Callback queue

### Promises, Web APIs, the Callback & Microtask Queues and Event loop enable:

Non-blocking applications: This means we don’t have to wait in the single thread
and don’t block further code from running
However long it takes: We cannot predict when our Browser feature’s work will
finish so we let JS handle automatically running the function on its completion
Web applications: Asynchronous JavaScript is the backbone of the modern web -
letting us build fast ‘non-blocking’ applications


# DELIEVERABLES	💻

## #1:

```js

```
