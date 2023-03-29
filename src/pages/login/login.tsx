import { Container, EmailInput, LoginButton, LoginContainer, MainContainer, PasswordInput } from "./login-style";
import { useAppContext } from "../../contexts/openMenu";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

function Login() {

  const { handleLogin } = useContext(UserContext)

  const { openMenu } = useAppContext();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <MainContainer openMenu={openMenu}>
      <Container openMenu={openMenu}>
        <LoginContainer>
          <EmailInput type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordInput type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <LoginButton onClick={() => {
            handleLogin(email, password)
            navigate('/')
          }}>Login</LoginButton>
        </LoginContainer>
      </Container>
    </MainContainer>
  )
}

export default Login;