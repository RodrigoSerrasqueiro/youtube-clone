import { Container, UserContainer, YourVideosContainer } from "./your-videos-style";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import YourVideosCards from "../../components/yourVideosCards/your-videos-cards";

function YourVideos() {

  interface Videos {
    title: string
    video_id: string
    thumbnail: string
    description: string
  }

  const { openMenu } = useAppContext();

  const { user, userVideos, createVideos, token } = useContext(UserContext)

  const USER_ID = user.id

  const [thumbnail, setThumbnail] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('') 

  const sendVideo = () => {
    createVideos(token, USER_ID, title, description, thumbnail)
  }

  return (
    <YourVideosContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <UserContainer>
        <input type="text" onChange={(e) => setThumbnail(e.target.value)}></input>
        <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
        <input type="text" onChange={(e) => setDescription(e.target.value)}></input>
        <button onClick={sendVideo}>Adicionar video</button>
        </UserContainer>
        {Array.isArray(userVideos) ? (
          userVideos.map((video: Videos) => 
          <YourVideosCards 
            title={video.title} 
            thumbnail={video.thumbnail} 
            channelImage={user && user.nome ? user.nome.charAt(0).toUpperCase() : ''} 
            channelName={user && user.nome ? user.nome : ''}
            details={video.description} 
            key={video.video_id}
          />)
        ) 
        : 
        (
          <h1>Esse canal não possui vídeos</h1>
        )}
      </Container>
    </YourVideosContainer>
  )
}

export default YourVideos;