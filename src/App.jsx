import { Component } from 'react';
import MyComponentFunction from './component/Hook/useEffect/MyComponentFunction';

class App extends Component {
  state = {
    theme: 'dark',
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === 'dark') {
          return { theme: 'light' };
        }
        return { theme: 'dark' };
      });
    },
  };

  render() {
    const { theme, switchTheme } = this.state;
    return (
      <div>
        {/* <ClockList quantities={[1, 2, 3==]} /> */}
        {/* <Form /> */}
        {/* <Calculator /> */}
        {/* <ClickCounter /> */}
        {/* <Counter render={
        (count, incrementCount) => (<ClickCounter count={count} incrementCount={incrementCount} />)
      } */
        // />
    }
        {/* <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider> */}
        {/* <TestForm /> */}
        {/* <Counter /> */}
        {/* <MycomponentClass /> */}
        <MyComponentFunction />
      </div>
    );
  }
}

export default App;
