const Instamart = () => {
  return (
    <>
      <p>
        Suppose this Instamart is a seperate big application integrated into our
        food ordering application. Suppose there are many other components in
        this Instamart. To optimize our application/ reduce the size of the js
        file that got created while bundling which contains the whole code of
        all the component we can load this Instamart only when required. There
        are different names to this such as:-
      </p>
      <li>Chunking</li>
      <li>Code splitting</li>
      <li>Dynamic bundling</li>
      <li>Lazy loading</li>
      <li>On demand loading</li>
      <li>Dynamic import</li>
      <p>
        A new js file will be loaded whenever we try to access instamart this is
        know as lazy loading. this helps reduce the size of the bundle js file
        and load seperate js file for instamart.
      </p>
    </>
  );
};

export default Instamart;
