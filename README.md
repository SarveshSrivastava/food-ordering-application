# food-ordering-application
This is an food ordering application
This is config driven UI which means everything is received from backend

### step1  - index.html
### step2  - git init
### step3  - git branch -M main
### step4  - git add .
### step5  - git commit -m "first commit"
### step6  - git pull origin main --allow-unrelated-histories 
### step7  - git pull origin main 
### step8  - git push origin main

### step9  - npm init
### step10 - npm i react
### step11 - npm i react-dom
### step12 - npm i -D parcel

### to start application npx parcel index.html

## There are two types of import/export
- default
    - export default <componet-name>;
    - import <component-name> from "<path>";

- named
    - export datatype <component-name>;
    - import {<component-name>} from "<path>";

## USESTATE
- const [restaurants,setRestaurants] = useState(restaurantsList);  ----> Array Destucturing

## Reconsilation Algorithm (React Fiber)
- whenever there is a change in state variable internally diff algorithm i.e., difference between the old virtual dom and new virtual dom is done and after that components re-renders.
- virtual DOM is the react object:-
    - React.createElement("h1",{id:"head"},"heading);   -   this is an object not HTML  -   This object when passed to ReactDOM.render() makes it HTML and renders in browsers

# loads ---> render ---> api call ---> re-render
## USEEFFECT(()=>{},[])
- this is executed after initial render if page i.e., first page is loaded then useeffect is called

## Shimmer UI
- instead of adding spinner for loading we can display a dummy UI until the response is received from api.

## as we are using swiggy api we will face CORS policy access issue for that we have added a chrome extension to allow CORS policy

