import {useEffect,useState} from 'react'
import Container from '../Components/container/Container'
import PostForm from '../Components/Postform'
import appwriteService from '../Appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function Editpost() {

  const [post, setPosts] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
      if (slug) {
          appwriteService.getPost(slug).then((post) => {
              if (post) {
                  setPosts(post)
              }
          })
      } else {
          navigate('/')
      }
  }, [slug, navigate])
return post ? (
  <div className='py-8'>
      <Container>
          <PostForm post={post} />
      </Container>
  </div>
) : null
}

export default Editpost