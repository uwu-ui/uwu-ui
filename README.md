<div align="center">
    <a href="https://github.com/uwu-ui/uwu-ui">
        <img alt="uwu-ui banner" src="https://user-images.githubusercontent.com/16166356/96365603-c1cd3480-117c-11eb-814a-448e4a29c192.png"/>
    </a>
</div>

<h1 align="center">🐈<br/>uwu-UI</h1>
<div align="center">
A little sweet UI Library approved by cat
</div>

## ❗ Unstable Library
"uwu-UI" is currently working on many updates. it has a very ~~very strawberry~~ unstable library!  
Do you think about interested in this project? then please contribute with me. :)

## Quick Start (React.js)

1. Install a `@uwu-ui/react` package with using `npm` or `yarn` package manager.
2. Import `UwuUiThemeProvider` into your project:  

    ```js
    import { UwuUiThemeProvider as ThemeProvider } from "@uwu-ui/react";
    
    const App = ({ children }) => {
      return <ThemeProvider>{children}</ThemeProvider>;
    };
    
    export default App;
    ```
3. Congratulation! 🎉 now you can use any uwu-ui components in your project!
    ```js
    import { Button } from "@uwu-ui/react";
    
    const IndexPage = () => {
      return (
        <div>
          <Button>Uwu, Nyaa!</Button>
        </div>
      );
    };
    
    export default IndexPage;
    ```

## License
MIT License
