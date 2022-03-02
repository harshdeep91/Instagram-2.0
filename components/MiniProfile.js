import {signOut,useSession} from 'next-auth/react'
const MiniProfile = () => {
    const { data: session } = useSession();
  return (
      <div className="flex items-center justify-between mt-14 ml-10">
          <img className="rounded-full border p-[2px] w-16 h-16"
              src={session ?.user?.image} alt="pic" />
          <div className="flext-1 mx-4">
              <h2 className="font-bold">{session ?.user?.name}</h2>
              <h3 className=" text-sm text-gray-400">Welcome to Instagram</h3>
          </div>
          <button onClick={signOut}className="text-sm font-semibold text-blue-400">Sign Out</button>
      </div>
  )
}

export default MiniProfile