import React from 'react'
import './App.css'

const Theme = React.createContext('yellow')
function Button(props) {
  return(
    <Theme.Consumer>
      {
        (theme)=> (
        <button onClick={theme.setTheme}
                className={theme.color}>
        {theme.color}
      </button>)
      }
    </Theme.Consumer>

  )

}
class Box extends React.Component{
  render() {
    return(
      <div >
        <Button />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      theme: {
        color: "red",
        setTheme: (color)=> {
          console.log("被调用了")
          console.log(this.state)
          if(this.state.theme.color === "red"){
            this.setState({
                theme: {
                  ...this.state.theme,
                  color: "yellow"
                }
              }
            )
          }else {
            this.setState({
                theme: {
                  ...this.state.theme,
                  color: "red"
                }
              }
            )
          }
        }
      }
    }
  }
  render() {
    return (
        <Theme.Provider  value={this.state.theme}>
          <Box>
            <button>我是props.children</button>
          </Box>
        </Theme.Provider >
    )
  }
}


export  default App



