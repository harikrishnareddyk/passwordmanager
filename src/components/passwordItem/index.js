const PasswordItem = props => {
  const {each} = props
  const {name, mail, password, code, id, deletepass} = each

  const deleteEl = () => {
    deletepass(id)
  }

  return (
    <li>
      <div>{name[0]}</div>
      <div>
        <p>{mail}</p>
        <p>{name}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      </div>
      <button data-testid="delete" onClick={deleteEl}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
