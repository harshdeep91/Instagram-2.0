
const Story = ({img,username}) => {
  return (
      <div>
          <img src={img} alt="profile" />
          <p>{username}</p>
    </div>
  )
}

export default Story