const PasswordItem = props => {
  const {each} = props
  const {name, mail, password, code} = each

  return (
    <div>
      <div>{name[0]}</div>
      <div>
        <p>{mail}</p>
        <p>{name}</p>
        <p>{code}</p>
      </div>
    </div>
  )
}

export default PasswordItem
