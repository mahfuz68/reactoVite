import { Component } from 'react';
import UseStates from './component/Hook/UseState';

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
        <UseStates />
      </div>
    );
  }
}

export default App;
