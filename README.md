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


## USEEFFECT
- useEffect(()=>{}) ---> with no dependency is called everytime component is rendered
- useEffect(()=>{},[])  ---> with empty dependency or empty array useeffect is called only once at the initial load it will not be called everytime the componet renders
- useEffect(()=>{},[dependency])    ---> with dependency useeffect will be called everytime the dependency changes.

## useState
- it should not be declared inside conditional statement, loops or any function
- it is a good practice to declare it at the top level

## React-Router-DOM
- npm i react-router-dom
- import createBrowserRouter from rect-router-dom and RouterProvider (both named export so when importing use {})
- in ErrorPage we have made use of a hook useRouteError this is also named export (how can we say this is an hook??         --->    As there the name is starting with use anything that is starting with use is a hook)
- to keep header as it is and change the components define children and import {Outlet} from react-router-dom and when ever the url changes <Outlet/> is replaced by the component header will be present and the below component will be changed
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

- never use <a href=""></a> this will load the whole page
- use {Link} from react-router-dom this will not reload the whole page it will just change the components
- there are 2 types of routing :-
    - Client side routing   - in this only the component is changed. React is cliet side routing component is changed no call for another page is made in network tab you won't see any call. React is SPA single page application beacuse of this
    - Server side routing   - in this when url is changed page is called from one to another you can see it in network tab


## Dynamic routing
- "/restaurants/:restaurantId"
- to access this path vaiable we can make use of useParams hook from react-router-dom    


## Class Componet
- refer UserClass and ChildUserClass
- componetDidMount() is used to make api call
- first constructor is executed then the render then componetDidMount
- this is similar to functional componet first the jsx is rendered then useeffect with empty dependency is called

## Mounting Life cycle
- there are two phases
  - render phase and commit phase
  - refer the ReactLifeCycle image in assets

- parent constructor
- parent render
  - first child constructor
  - first child render
  - second child constructor
  - second child render

  - first child componentDidMount
  - second child componentDidMount
- parent componentDidMount  

- DOM manipulation is the costly operation so all the component which needs to be rendered are clubbed together and then it updates the dom and then componentDidMount is executed

## ClassBasedComponent LifeCycle
- Refer LifeCycle.js for mounting, updating, unmounting 

## FunctionalBasedComponent
- refer FunctionalComponentDiveDeep.js
- return in useEffect

### never say componentDidMount and useEffect are similar => Akshay Saini
- componentDidMount can be async

## in class component componentDidUpdate is called everytime the state is changed
- componentDidUpdate(prevProps,prevState){
    conditionalStatement compare current state with old state then perform any action
  } 


## in functional component useEffect hook can be used
- useEffect(()=>{})
- useEffect(()=>{},[])
- useEffect(()=>{},[dependency])
- useEffect can also have return statement for clean up whereas cleanup in class component are done in componentWillUnmount()
- useEffect(async ()=>{}) this is not valid (wrong)

## super(props) in class component constructor (Chatgpt)
## why useEffect(async ()=>{}) this is not valid (Chatgpt)

## Custom Hooks
- refer useRestaurantMenu.js and useOnlineStatus.js



