const ProtectedRoute = ({ children }) => {


  return (
  <>
  {localStorage.getItem("token") ? (
    <>
    { children }
    </>
  ):(
    <p>Inicia sesión para ver el contenido</p>
  )}
  </>
  )
}

export default ProtectedRoute
