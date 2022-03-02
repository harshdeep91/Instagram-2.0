import Post from "./Post"
const DummyData = [
  {
    id: 1,
    username: "hars",
    userimg: "http://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg",
    img: "http://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg",
    caption: "This is Dope",
  },
  {
    id: 2,
    username: "hars",
    userimg: "http://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg",
    img: "http://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg",
    caption: "This is Dope",
  },
  {
    id: 3,
    username: "hars",
    userimg: "http://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg",
    img: "http://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg",
    caption: "This is Dope",
   } 
]
const Posts = () => {
  return (
    <div>
      {
        DummyData.map(post =>
          <Post key={post.id} username={post.username} userimg={post.userimg} img={post.img} caption={post.caption}/>)
      }
    </div>
  )
}

export default Posts