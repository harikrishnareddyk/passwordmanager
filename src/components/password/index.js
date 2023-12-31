import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../passwordItem'

class Password extends Component {
  state = {
    list: [],
    name: '',
    password: '',
    mail: '',
    show: true,
    code: '..........',
    count: 0,
    search: '',
  }

  site = event => {
    this.setState({mail: event.target.value})
  }

  name = event => {
    this.setState({name: event.target.value})
  }

  passwordEl = event => {
    this.setState({passwordEl: event.target.value})
  }

  addurl = () => {
    const {name, mail, list, password, show, code, count, search} = this.state
    const newUrl = {
      mail,
      name,
      password,
      show,
      code,
      id: uuidv4(),
    }

    this.setState(prevState => ({list: [...prevState.list, newUrl]}))
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log(count)
  }

  search = event => {
    const {name, mail, list, password, show, code, count} = this.state
    this.setState({search: event.target.value})
    const filtered = list.filter(item =>
      item.mail.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    this.setState({list: filtered})
  }

  deletepass = id => {
    const {name, mail, list, password, show, code, count} = this.state
    const filterEl = list.filter(item => id !== item.id)
    this.setState({list: filterEl})
  }

  render() {
    const {name, mail, list, password, show, code, search, count} = this.state

    return (
      <div className="logo">
        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="container">
          <form>
            <h1>Add New Password</h1>
            <div className="input">
              <img
                className="image3"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                onChange={this.site}
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="input">
              <img
                className="image3"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                onChange={this.name}
                placeholder="Enter Username"
                type="text"
              />
            </div>
            <div className="input">
              <img
                className="image3"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input placeholder="Enter Password" type="password" />
            </div>
            <button type="submit" onClick={this.addurl}>
              Add
            </button>
          </form>
          <img
            className="image1"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
        </div>
        <div>
          <div className="historypage">
            <div className="row">
              <h1>Your Passwords</h1>
              <p>{count}</p>
            </div>
            <div className="input">
              <img
                className="image3"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                placeholder="search"
                type="search"
                onChange={this.search}
                value={search}
              />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <input type="checkbox" id="check" />
          <label htmlFor="check">Show passwords</label>
        </div>
        <div>
          {count > 0 ? (
            <ul>
              {list.map(each => (
                <PasswordItem
                  each={each}
                  key={each.id}
                  deletepass={this.deletepass}
                />
              ))}
            </ul>
          ) : (
            <div className="nopass">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="image4"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Password
