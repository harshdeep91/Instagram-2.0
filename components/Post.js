import { async } from "@firebase/util";
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline";
import { FlagIcon, HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { db } from "../firebase";
function Post({ id, username, userimg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasliked, setHasliked] = useState(false);
// for like
      useEffect(
        () =>
          onSnapshot(query(collection(db, "posts", id, "likes")), (snapshot) =>
            setLikes(snapshot.docs)
          ),
        [db, id]
      );
  //for hasliked
  useEffect(
    () =>
    setHasliked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    ),
  [likes]
);
  //     )
  //for comment
      useEffect(
        () =>
          onSnapshot(
            query(
              collection(db, 'posts', id, 'comments'),
              orderBy('timestamp', 'desc')),
            (snapshot) => setComments(snapshot.docs)
          ), [db,id])
  const sendcomment = async (e) => {
    e.preventDefault();
    const commenttoSend = comment;
    setComment("");
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commenttoSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
    }
  const handler = async () => {
    if (hasliked) 
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
    else 
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
  }
  return (
      <div className=" bg-white rounded-sm border my-7">
          {/* header */}
          <div className="flex items-center p-5">
              <img src={userimg} alt="profile" className="rounded-full h-12 w-12 object-contain p-1 mr-3"/>
              <p className="flex-1 font-bold">{username}</p>
              <DotsHorizontalIcon className="h-5"/>
          </div>
          {/* img */}
      <img src={img} alt="post" className="object-cover w-full" />
      {/* buttons */}
      {session && (
        <div className="flex justify-between pt-4 px-4">
            <div className="flex space-x-4">
            {hasliked ? (
              <HeartIconFilled onClick={handler} className="btn text-red-500"/>
            ): (
              <HeartIcon onClick={handler} className="btn"/>
             )} 
              <ChatIcon className="btn"/>
              <PaperAirplaneIcon className="btn"/>
              </div>
              <BookmarkIcon className="btn"/>
         </div>
      )}
          
          {/* caption */}
      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
              <span className="font-bold mr-1">{username}</span>{caption}
          </p>
      {/* comments */}
      {console.log(hasliked)}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div className="flex items-center space-x-2 mb-3" key={comment.id}>
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
              <EmojiHappyIcon className="h-7"/>
          <input
            value={comment}
            onChange={e=>setComment(e.target.value)}
            type="text" className="border-none flex-1 focus:ring-0 outline-0" placeholder="Add a comment" />
          <button 
            onClick={sendcomment}
            type="submit" className="text-semibold text-blue-400">Post</button>
          </form>
      )}
    </div>
  )
}

export default Post