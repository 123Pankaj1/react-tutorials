Observable --

-- RxJS uses the concept of Observables to handle and work with asynchronous and event-based code.

-- By default an RxJS Observable is unicast.

-- The dollar sign is just a convention for naming variables that hold instance of Observables.

-- All observer objects must have a collection of methods such as next(), complete() and error(). This allows Observables 
	to communicate with them.

-- The next() method is used by the Observable to pass values (publish values) to the subscribed Observer.

-- Note: Observables are implemented in many other libraries such as zen-observable and xstream but RxJS Observables are 
	the most popular in JavaScript.

-- Observables are not yet a builtin feature of JavaScript but there is a proposal to add them in EcmaScript.

** Hot and Cold Observables

-- Unlike regular Observables, Subjects are called hot. A hot Observable starts emitting events even before any observer 
subscribes to it which means observers may lose previous emitted values if they don’t subscribe at that right time while 
cold Observables ****start emitting values when at least one observer is subscribed.

-- You can use the asObservable() method to convert a subject to only an Observable.

-- Asynchrony, in computer programming, refers to the occurrence of events independent of the main program flow and 
	ways to deal with such events. These may be "outside" events such as the arrival of signals, or actions instigated 
	by a program that take place concurrently with program execution, without the program blocking to wait for results.


** How to Create an RxJS Observable

 -- You can create an RxJS Observable using the Observable.create() method which takes a function with an observer argument. You can then subscribe to the returned Observable instance.

There many other methods to create Observables besides the static create() method:

1. The lift() instance method which creates a new Observable from the instance (the source) it's called on,
2. The of([]) operator which creates an Observable of a single value. We'll see an example next,
3. The interval(interval) operator which creates an Observable that emits an infinite sequence of numbers. Each number is emitted at a constant interval of time in seconds,
4. The timer() operator which returns an Observable that after a specified amount of time, emits numbers in sequence every specified duration,
5. The from() method that creates an Observable from a Promise or an array of values,
6. The fromEvent() method that creates an Observable from a DOM event,
7. The ajax() method which creates an Observable that sends an Ajax request.


------------------------------------------------------------------------------------------------------------

Observer -- 

-- Observer is a collection of callbacks that knows how to listen to values delivered by the Observable.

-- Observers are also called listeners (or consumers) as they can listen or subscribe to get the observed data.

-- The observer pattern is a software design pattern in which an object, called the subject, maintains a list of 
	its dependents, called observers, and notifies them automatically of any state changes, usually by
 	calling one of their methods. Observer pattern.

--------------------------------------------------------------------------------------------------------

Subscriptions -- 

-- Subscriptions are objects that are returned when you subscribe to an Observable.They contain many methods 
such as the unsubscribe() method that you can call to unsubscribe from receving published values from the Observable.

-- Subscription represents the execution of an Observable, is primarily useful for cancelling the execution.

----------------------------------------------------------------------------------------------------------------
Subject--

-- A Subject is a special type of Observable that observers can also subscribe to it to receive published values but with 
one difference: The values are multicasted to many Observers.

-- Subjects are similar to Angular EventEmitters.
-- Subjects are also Observers i.e they can also subscribe to other Observables and listen to published data.

RxJS provides two other types of Subjects: BehaviorSubject and ReplaySubject.


-- With a normal Subject, Observers that are subscribed at a point later will not receive data values emitted before 
	their subscriptions. In many situations, this is not the desired behavior we want to implement. This can be solved using
 	BehaviorSubject and ReplaySubject.

-- ReplaySubject works by using a buffer that keeps the emitted values and re-emit them when new Observers are subscribed.

-- BehaviorSubject works like ReplaySubject but only re-emits the last emitted value.

--------------------------------------------------------------------------------------------------------------------------

RxJS Operators

1. tap()
2. map()
3. filter()
4. concat()
5. share()
6. retry()
7. catchError()
8. switchMap()
9.flatMap()

-- You can use the pipe() function/method to combine multiple Operators